"use client";

/*
Three GSAP-powered Timeline components for Next.js + TypeScript + Tailwind.
File: TimelineDesigns.tsx
Place in: /components/TimelineDesigns.tsx (or split into files)

Install:
  npm install gsap lucide-react

Tailwind: assumes already set up in your Next.js project.

Notes:
- Each component is self-contained. Import the one you want and render it on a page.
- All components use GSAP + ScrollTrigger. gsap.registerPlugin(ScrollTrigger) happens inside each component to keep them isolated.
- For best visuals, enable dark mode and add backdrop-filter support in Tailwind config (for glassmorphism).
*/

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ---------- Shared types & sample data ---------- */

type TimelineItem = {
    id: string;
    type: "experience" | "education";
    title: string;
    org: string;
    period: string;
    desc: string;
};

const SAMPLE: TimelineItem[] = [
    {
        id: "t1",
        type: "experience",
        title: "Senior Frontend Developer",
        org: "Programming hero",
        period: "2021 - 2022",
        desc: "Built scalable UI systems with Next.js and modern patterns.",
    },
    {
        id: "t2",
        type: "education",
        title: "BSc in Computer Science",
        org: "University of Dhaka",
        period: "2019 - 2023",
        desc: "Major in Software Engineering and Human-Computer Interaction.",
    },
    {
        id: "t3",
        type: "experience",
        title: "WordPress Developer",
        org: "LeraningIT BD",
        period: "2020 - 2021",
        desc: "Customized WordPress themes and plugins for clients, improving site performance and SEO.",
    },
];



export function ZigzagWaveTimeline({ data = SAMPLE }: { data?: TimelineItem[] }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const path = document.querySelector('.zw-path') as SVGPathElement;
            const length = path ? path.getTotalLength() : 0;

            if (path) {
                // start with hidden path
                path.style.strokeDasharray = String(length);
                path.style.strokeDashoffset = String(length);

                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 1.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: path,
                        start: 'top 90%',
                    }
                });
            }

            // nodes + cards animation
            gsap.utils.toArray<HTMLDivElement>('.zw-node').forEach((node, i) => {
                const card = node.querySelector('.zw-card') as HTMLElement;
                const dir = (Math.random() > 0.5) ? -60 : 60;
                gsap.fromTo(card, { autoAlpha: 0, x: dir, y: 20 }, {
                    autoAlpha: 1, x: 0, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: node, start: 'top 85%' }
                });

                // pulse dot
                gsap.to(node.querySelector('.zw-dot'), { scale: 1.25, duration: 0.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.12 });
            });
        }, ref);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={ref} className="">
            

            <div className="relative">
                {/* SVG Wave (decorative) */}
                <svg viewBox="0 0 1200 200" className="w-full h-40 md:h-52 overflow-visible">
                    <path className="zw-path stroke-emerald-400/80 dark:stroke-emerald-300/70" d="M0,100 C200,0 400,200 600,100 C800,0 1000,200 1200,100" fill="none" strokeWidth={3} strokeLinecap="round" />
                </svg>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                    {data.map((it) => (
                        <div key={it.id} className="zw-node flex flex-col items-start zw-relative">
                            <div className="zw-dot w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 shadow-lg border-2 border-white mb-4" />

                            <div className="zw-card bg-AquaDeep p-5 rounded-xl shadow-lg border border-slate-100/40">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded bg-slate-100/40">
                                        {it.type === 'experience' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{it.title}</h3>
                                        <p className="text-sm opacity-70">{it.org}</p>
                                        <p className="text-xs font-medium text-Barberry">{it.period}</p>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm opacity-90">{it.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



export default function AllTimelinesDemo() {
    return (
        <div className="">
            <ZigzagWaveTimeline />

        </div>
    );
}
