"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import ZigzagWaveTimeline from "./Timeline";
import SkillCircle from "./SkillCircle";

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
    return (
        <section id="skills">
            <SectionHeader
                title="Education & Skills"
                subtitle="My educational background and technical skills that empower my web development journey."
                align="center"
                aqua
            />

            {/* Education Timeline */}
            <div className="mt-12">
                <ZigzagWaveTimeline />
            </div>

            {/* Skills Section */}
            <div className="my-10 grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 gap-1 sm:gap-0.5 place-items-center">
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
