"use client";

import React, { useEffect, useRef, useState } from "react";

interface Bounds {
  width: number;
  height: number;
}

interface Skill {
  color: string;
  text: string;
  logo: string;
}

interface LineStyle {
  width: number;
  dash: number[];
  color: string;
  round: boolean;
}

interface SkillGroup {
  name: string;
  nodes: string[];
  lineStyle: LineStyle;
}

interface NodeProps {
  x: number;
  y: number;
  radius: number;
  color: string;
  text: string;
  logoUrl: string;
}

class Node {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  text: string;
  logo: HTMLImageElement;
  dx: number;
  dy: number;
  textX: number;
  textY: number;
  opacity: number;
  delay: number;

  constructor(props: NodeProps) {
    this.x = props.x;
    this.y = props.y;
    this.targetX = props.x;
    this.targetY = props.y;
    this.radius = props.radius;
    this.color = props.color;
    this.text = props.text;
    this.logo = new Image();
    this.logo.src = props.logoUrl;
    this.dx = (Math.random() - 0.5) * 1.1;
    this.dy = (Math.random() - 0.5) * 1.1;
    this.textX = props.x + props.radius + 14;
    this.textY = props.y;
    this.opacity = 0;
    this.delay = Math.random() * 60;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.closePath();

    if (this.logo.complete) {
      const size = this.radius * 1.1;
      ctx.drawImage(
        this.logo,
        this.x - size / 2.2,
        this.y - size / 2.2,
        size * 0.8,
        size * 0.8
      );
    }

    ctx.shadowBlur = 0;
    ctx.fillStyle = "#fff";
    ctx.font = "15px Poppins, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(this.text, this.textX, this.textY + 5);
    ctx.restore();
  }

  update(
    ctx: CanvasRenderingContext2D,
    bounds: Bounds,
    isDragging: boolean,
    draggedNode: Node | null
  ) {
    if (this.delay > 0) this.delay -= 1;
    else this.opacity = Math.min(this.opacity + 0.02, 1);

    if (!isDragging || draggedNode !== this) {
      this.targetX += this.dx;
      this.targetY += this.dy;
      if (this.targetX + this.radius > bounds.width || this.targetX - this.radius < 0)
        this.dx = -this.dx;
      if (this.targetY + this.radius > bounds.height || this.targetY - this.radius < 0)
        this.dy = -this.dy;

      this.targetX = Math.min(Math.max(this.targetX, this.radius), bounds.width - this.radius);
      this.targetY = Math.min(Math.max(this.targetY, this.radius), bounds.height - this.radius);
    }

    this.x = lerp(this.x, this.targetX, 0.1);
    this.y = lerp(this.y, this.targetY, 0.1);
    this.textX = lerp(this.textX, this.x + this.radius + 14, 0.05);
    this.textY = lerp(this.textY, this.y, 0.05);
    this.draw(ctx);
  }

  isPointInside(px: number, py: number) {
    const dx = px - this.x;
    const dy = py - this.y;
    return Math.sqrt(dx * dx + dy * dy) < this.radius + 10;
  }
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const SkillsNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bounds: Bounds = { width: canvas.width, height: canvas.height };
    let isDragging = false;
    let draggedNode: Node | null = null;

    const logoBase = "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/";
    const skills: Skill[] = [
      { color: "#ff6f00", text: "HTML5", logo: "html5.svg" },
      { color: "#2965f1", text: "CSS3", logo: "css3.svg" },
      { color: "#cc6699", text: "SCSS", logo: "sass.svg" },
      { color: "#f7df1e", text: "JavaScript", logo: "javascript.svg" },
      { color: "#61dafb", text: "ReactJs", logo: "react.svg" },
      { color: "#777bb4", text: "PHP", logo: "php.svg" },
      { color: "#00758f", text: "MySQL", logo: "mysql.svg" },
      { color: "#21759b", text: "WordPress", logo: "wordpress.svg" },
      { color: "#f29111", text: "Laravel", logo: "laravel.svg" },
      { color: "#f05033", text: "Git", logo: "git.svg" },
      { color: "#ffffff", text: "GitHub", logo: "github.svg" },
      { color: "#a259ff", text: "Figma", logo: "figma.svg" },
    ];

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const spread = 250;

    const nodes: Node[] = skills.map((s, i) => {
      const angle = (i / skills.length) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * spread * (0.7 + Math.random() * 0.6);
      const y = centerY + Math.sin(angle) * spread * (0.7 + Math.random() * 0.6);
      return new Node({ x, y, radius: 28, color: s.color, text: s.text, logoUrl: `${logoBase}${s.logo}` });
    });

    const groups: SkillGroup[] = [
      {
        name: "Web",
        nodes: ["HTML5", "CSS3", "SCSS", "JavaScript", "ReactJs"],
        lineStyle: { width: 2, dash: [], color: "rgba(255,255,255,0.2)", round: true },
      },
      {
        name: "Backend",
        nodes: ["PHP", "MySQL", "WordPress", "Laravel"],
        lineStyle: { width: 1.5, dash: [5, 5], color: "rgba(0,255,255,0.15)", round: true },
      },
      {
        name: "VCS",
        nodes: ["Git", "GitHub"],
        lineStyle: { width: 3, dash: [], color: "rgba(255,100,100,0.25)", round: true },
      },
      {
        name: "Design",
        nodes: ["Figma"],
        lineStyle: { width: 2, dash: [4, 4], color: "rgba(162,89,255,0.2)", round: true },
      },
    ];

    function getGroup(node: Node) {
      return groups.find((g) => g.nodes.includes(node.text));
    }

    function connectNodes() {
      nodes.forEach((aNode, aIdx) => {
        for (let bIdx = aIdx + 1; bIdx < nodes.length; bIdx++) {
          const bNode = nodes[bIdx];
          const groupA = getGroup(aNode);
          const groupB = getGroup(bNode);
          const dx = aNode.x - bNode.x;
          const dy = aNode.y - bNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (groupA && groupA === groupB && distance < 280) {
            ctx.beginPath();
            ctx.strokeStyle = groupA.lineStyle.color;
            ctx.lineWidth = groupA.lineStyle.width;
            ctx.setLineDash(groupA.lineStyle.dash);
            ctx.lineCap = groupA.lineStyle.round ? "round" : "butt";
            ctx.moveTo(aNode.x, aNode.y);
            ctx.lineTo(bNode.x, bNode.y);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          const minDist = aNode.radius + bNode.radius;
          if (distance < minDist) {
            const angle = Math.atan2(dy, dx);
            const force = (minDist - distance) * 0.15;
            const fx = Math.cos(angle) * force;
            const fy = Math.sin(angle) * force;

            if (aNode !== draggedNode) {
              aNode.targetX += fx;
              aNode.targetY += fy;
            }
            if (bNode !== draggedNode) {
              bNode.targetX -= fx;
              bNode.targetY -= fy;
            }
          }
        }
      });
    }

    function drawBackgroundText() {
      ctx.save();
      ctx.fillStyle = "transparent";
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 3;
      ctx.font = `${bounds.width / 6}px "Poller One", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.strokeText("My Skills", bounds.width / 2, bounds.height / 2);
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, bounds.width, bounds.height);
      drawBackgroundText();
      connectNodes();
      nodes.forEach((n) => n.update(ctx, bounds, isDragging, draggedNode));
      animationId = requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      bounds.width = canvas.width;
      bounds.height = canvas.height;
    }

    // ✅ Non-null assertion (!) fixes TS errors
    function handleMouseDown(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      nodes.forEach((n) => {
        if (n.isPointInside(x, y)) {
          draggedNode = n;
          isDragging = true;
        }
      });
    }

    function handleMouseMove(e: MouseEvent) {
      if (!isDragging || !draggedNode) return;
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      draggedNode.targetX = Math.min(Math.max(x, draggedNode.radius), bounds.width - draggedNode.radius);
      draggedNode.targetY = Math.min(Math.max(y, draggedNode.radius), bounds.height - draggedNode.radius);
    }

    function handleMouseUp() {
      isDragging = false;
      draggedNode = null;
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", resizeCanvas);

    let animationId: number = 0;
    resizeCanvas();
    animate();

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isClient]);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poller+One&family=Poppins:wght@400;500&display=swap");
      `}</style>
      <section className="w-full h-[600px] relative bg-AquaDeep overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block w-full h-full cursor-grab active:cursor-grabbing"
        />
        <h1 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl font-bold text-Barberry z-10">
          Skills Network
        </h1>
      </section>
    </>
  );
};

export default SkillsNetwork;
