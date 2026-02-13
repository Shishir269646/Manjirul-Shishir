"use client";

import React from "react";
import GlassmorphicProjectCard from "./glassmorphic-project-card";
import SectionHeader from "./SectionHeader";

interface Project {
    imageUrl: string;
    title: string;
    description: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
}

const myProjects: Project[] = [
    {
        imageUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        title: "Project One",
        description: "A short and sweet description of what this project does.",
        techStack: ["Next.js", "React", "TailwindCSS", "TypeScript"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-username/your-repo",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        title: "Project Two",
        description: "Another amazing full-stack application.",
        techStack: ["Node.js", "MongoDB", "Express", "JWT"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-username/your-repo",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        title: "Project Three",
        description: "A mobile app built with React Native.",
        techStack: ["React Native", "Expo", "Firebase"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-username/your-repo",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        title: "Project Four",
        description: "An e-commerce platform with a sleek UI.",
        techStack: ["Next.js", "Stripe API", "TailwindCSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-username/your-repo",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        title: "Project Five",
        description: "A creative design portfolio showcase.",
        techStack: ["Figma", "Next.js", "TailwindCSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-username/your-repo",
    },
];

const ProjectSection: React.FC = () => {
    return (
        <section id="project" className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-AquaDeep" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob" />

            {/* Content */}
            <div className="relative z-10 mx-auto">
                <SectionHeader
                    title="Projects"
                    subtitle="Showcasing my latest work and innovations."
                    align="center"
                    aqua={false}
                />

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
                    {myProjects.map((project, index) => (
                        <GlassmorphicProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
