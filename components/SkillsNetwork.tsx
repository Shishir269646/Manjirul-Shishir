"use client";

import React, { useEffect, useRef } from "react";

interface Bounds {
  width: number;
  height: number;
}

interface Skill {
  name: string;
  color: string;
  group: string;
}

const skills: Skill[] = [
  { name: "HTML", color: "#E34F26", group: "frontend" },
  { name: "CSS", color: "#1572B6", group: "frontend" },
  { name: "JavaScript", color: "#F7DF1E", group: "frontend" },
  { name: "React", color: "#61DAFB", group: "frontend" },
  { name: "Next.js", color: "#ffffff", group: "frontend" },
  { name: "Node.js", color: "#339933", group: "backend" },
  { name: "Express", color: "#ffffff", group: "backend" },
  { name: "MongoDB", color: "#47A248", group: "backend" },
  { name: "Git", color: "#F05032", group: "tools" },
  { name: "Firebase", color: "#FFCA28", group: "tools" },
];

class Node {
  x: number;
  y: number;
  radius: number;
  color: string;
  text: string;
  group: string;
  dx: number;
  dy: number;
  isDragging: boolean = false;

  constructor(x: number, y: number, radius: number, skill: Skill) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = skill.color;
    this.text = skill.name;
    this.group = skill.group;

    this.dx = (Math.random() - 0.5) * 1.5;
    this.dy = (Math.random() - 0.5) * 1.5;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.closePath();

    ctx.shadowBlur = 0;
    ctx.fillStyle = "#ffffff";
    ctx.font = "13px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(this.text, this.x, this.y + this.radius + 15);
  }

  update(bounds: Bounds) {
    if (!this.isDragging) {
      this.x += this.dx;
      this.y += this.dy;

      if (this.x + this.radius > bounds.width || this.x - this.radius < 0) {
        this.dx *= -1;
      }

      if (this.y + this.radius > bounds.height || this.y - this.radius < 0) {
        this.dy *= -1;
      }
    }
  }

  isPointInside(x: number, y: number) {
    const dx = this.x - x;
    const dy = this.y - y;
    return Math.sqrt(dx * dx + dy * dy) < this.radius;
  }
}

const SkillsNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const ctx: CanvasRenderingContext2D = context;

    const BOUNDS: Bounds = { width: 0, height: 0 };

    function resizeCanvas() {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;

      currentCanvas.width = currentCanvas.clientWidth;
      currentCanvas.height = currentCanvas.clientHeight;

      BOUNDS.width = currentCanvas.width;
      BOUNDS.height = currentCanvas.height;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodes: Node[] = skills.map(
      (skill) =>
        new Node(
          Math.random() * BOUNDS.width,
          Math.random() * BOUNDS.height,
          25,
          skill
        )
    );

    let animationId: number;
    let draggingNode: Node | null = null;

    function drawConnections() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodes[i].group === nodes[j].group) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = "rgba(255,255,255,0.1)";
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, BOUNDS.width, BOUNDS.height);

      nodes.forEach((node) => node.update(BOUNDS));
      drawConnections();
      nodes.forEach((node) => node.draw(ctx));

      animationId = requestAnimationFrame(animate);
    }

    function handleMouseDown(e: MouseEvent) {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;

      const rect = currentCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      nodes.forEach((node) => {
        if (node.isPointInside(x, y)) {
          draggingNode = node;
          node.isDragging = true;
        }
      });
    }

    function handleMouseMove(e: MouseEvent) {
      if (!draggingNode) return;

      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;

      const rect = currentCanvas.getBoundingClientRect();
      draggingNode.x = e.clientX - rect.left;
      draggingNode.y = e.clientY - rect.top;
    }

    function handleMouseUp() {
      if (draggingNode) {
        draggingNode.isDragging = false;
        draggingNode = null;
      }
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full h-[600px] bg-black relative">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default SkillsNetwork;
