"use client";

import React, { useRef, useEffect } from "react"; // Import useRef and useEffect
import SectionHeader from "./SectionHeader";
import SkillCircle from "./SkillCircle";
import dynamic from "next/dynamic"; // Import dynamic
import gsap from 'gsap'; // Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

// Dynamically import ZigzagWaveTimeline
const DynamicZigzagWaveTimeline = dynamic(() => import("./Timeline").then((mod) => mod.ZigzagWaveTimeline), {
    ssr: false, // Ensure it's client-side rendered as it uses browser-specific APIs like ScrollTrigger
    loading: () => <p>Loading timeline...</p>, // Optional: Add a loading component
});

/* Skill Type */

interface Skill {
    skillName: string;
    proficiency: number;
}


/* Skill Data */

const skills: Skill[] = [
    { skillName: "React", proficiency: 90 },
    { skillName: "Next.js", proficiency: 85 },
    { skillName: "TypeScript", proficiency: 80 },
    { skillName: "Node.js", proficiency: 75 },
    { skillName: "Python", proficiency: 40 },
    { skillName: "MongoDB", proficiency: 70 },
    { skillName: "TailwindCSS", proficiency: 80 },
    { skillName: "Git", proficiency: 85 },
    { skillName: "Docker", proficiency: 65 },
    { skillName: "AWS", proficiency: 60 },
    { skillName: "GraphQL", proficiency: 75 },
    { skillName: "Redux", proficiency: 80 },
    { skillName: "Jest", proficiency: 70 },
    { skillName: "DaisyUI", proficiency: 90 },
    { skillName: "ShadcnUI", proficiency: 80 },
    { skillName: "GSAP", proficiency: 70 },
];

const EducationSkill: React.FC = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const skillsGridRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Animation for SectionHeader
            gsap.fromTo(headerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center+=100",
                        toggleActions: "play none none none",
                    }
                }
            );

            // Staggered animation for SkillCircle components
            gsap.fromTo(gsap.utils.toArray(skillsGridRef.current.children),
                { y: 50, opacity: 0, scale: 0.8 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.05, // Stagger the animation of each skill circle
                    scrollTrigger: {
                        trigger: skillsGridRef.current,
                        start: "top bottom-=100",
                        toggleActions: "play none none none",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="px-4 sm:px-6 lg:px-8">
            <div ref={headerRef}>
                <SectionHeader
                    title="Education & Skills"
                    subtitle="My educational background and technical skills that empower my web development journey."
                    align="center"
                    aqua
                />
            </div>

            {/* Education Timeline */}
            <div className="mt-12">
                <DynamicZigzagWaveTimeline />
            </div>

            {/* Skills Section */}
            <div ref={skillsGridRef} className="my-10 grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 gap-1 sm:gap-0.5 place-items-center">
                {skills.map((skill, index) => (
                    <SkillCircle
                        key={index}
                        skillName={skill.skillName}
                        percentage={skill.proficiency}
                        gradientFrom="#00c9ff"
                        gradientTo="#92fe9d"
                        size={160}
                    />
                ))}
            </div>
        </section>
    );
};

export default EducationSkill;
