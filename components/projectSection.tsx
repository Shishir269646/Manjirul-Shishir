"use client";

import React, { useRef, useEffect } from "react"; // Import useRef and useEffect
import GlassmorphicProjectCard from "./glassmorphic-project-card";
import SectionHeader from "./SectionHeader";
import gsap from 'gsap'; // Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

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
        title: "BEHAVEIQ - AI-Powered Website Personalization Platform",
        description: "BEHAVEIQ is a real-time website personalization platform that uses AI to transform how you understand and engage with your visitors. Unlike traditional analytics that just tell you what happened, BEHAVEIQ predicts what will happen and automatically takes action.",
        techStack: ["Next.js", "Node.js 16+", "ShadcnUI", "TypeScript", "MongoDB", "Redis", "AWS", "Python", "Google Gemini", "OpenAI API"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/Shishir269646/behaveIQ",
    },
    {
        imageUrl:
            "/images/homepage Dark headly.png",
        title: "Headly - Full-Stack Headless CMS",
        description: "A production-ready, scalable, and developer-friendly Headless CMS built with a powerful MERN stack backend and a modern Next.js frontend.It includes advanced features like role-based access control, a rich content editor, media management, content scheduling, and webhook integrations.",
        techStack: ["Next.js", "Node.js", "MongoDB", "Express", "JWT", "Tiptap Editor", "AWS S3"],
        liveUrl: "https://headly-nine.vercel.app",
        githubUrl: "https://github.com/Shishir269646/headly",
    },
    {
        imageUrl:
            "/images/MERNCommerce.png",
        title: "MERNcommerce - Full-Stack E-Commerce Platform",
        description: "MERNcommerce is a modern, feature-rich, and scalable e-commerce platform built with the MERN stack",
        techStack: ["Next.js", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
        liveUrl: "https://mern-commerce-eight.vercel.app",
        githubUrl: "https://github.com/Shishir269646/merncommerce",
    },

    {
        imageUrl:
            "/images/Barber shop.png",
        title: "Barber Shop - Landing Page",
        description: "A stylish landing page for a barber shop, showcasing services and booking options.",
        techStack: ["Next.js", "TailwindCSS", "Font Awesome Icons"],
        liveUrl: "https://barber-shop-topaz-zeta.vercel.app",
        githubUrl: "https://github.com/Shishir269646/barber-shop",
    },
    {
        imageUrl:
            "/images/Next jS Portfolio.png",
        title: "Simple Next.js Portfolio Project",
        description: "This project is a modern, responsive personal portfolio website crafted with Next.js. It serves as a professional online platform designed to effectively showcase skills, highlight projects, and provide a seamless avenue for potential freelance clients to connect and collaborate.",
        techStack: ["Next.js", "TailwindCSS", "DaisyUI", "React marquee"],
        liveUrl: "https://next-j-s-portfolio-eight.vercel.app",
        githubUrl: "https://github.com/Shishir269646/Next-jS-Portfolio",
    },
    {
        imageUrl:
            "/images/mjshishir.png",
        title: "Portfolio Web",
        description: "This is a modern, fully responsive personal portfolio website designed to showcase professional work, skills, and experience in a clean and engaging manner. It provides an interactive platform for potential employers, clients, and collaborators to learn more about the developer and their projects.",
        techStack: ["React", "TailwindCSS", "DaisyUI", "FontAwesome Icons"],
        liveUrl: "https://mjshishir.vercel.app",
        githubUrl: "https://github.com/Shishir269646/mjshishir",
    },
    {
        imageUrl:
            "/images/Protfolio-02.png",
        title: "Protfolio - Modern Web Portfolio",
        description: "Protfolio is a sleek, responsive, and high-performance personal portfolio website built with Next.js. Designed for developers, designers, and other professionals, it offers an elegant platform to showcase your work, highlight your skills, and provide essential contact information to potential clients or employers.",
        techStack: ["React", "TailwindCSS", "DaisyUI"],
        liveUrl: "https://protfolio-02.vercel.app",
        githubUrl: "https://github.com/Shishir269646/Protfolio-02",
    },
    {
        imageUrl:
            "/images/My-Protfolio-01.png",
        title: "Simple Portfolio Project",
        description: "This project is a clean, professional, and fully responsive personal portfolio website designed for a creative developer. It serves as a comprehensive platform to showcase skills, services, projects, testimonials, and a blog, providing an engaging experience for visitors.",
        techStack: ["React", "TailwindCSS", "DaisyUI"],
        liveUrl: "https://my-protfolio-01.vercel.app",
        githubUrl: "https://github.com/Shishir269646/My-Protfolio-01",
    },
    {
        imageUrl:
            "/images/photoeditor.png",
        title: "Simple Photo Editing App",
        description: "This project is a user-friendly, web-based photo editor built with React, offering essential tools for quick image adjustments and transformations. It provides a straightforward solution for individuals looking to enhance their photos without the need for complex, heavy-duty software.",
        techStack: ["React", "TailwindCSS", "DaisyUI"],
        liveUrl: "https://photoeditor-iota.vercel.app/",
        githubUrl: "https://github.com/Shishir269646/photoeditor",
    },
];

const ProjectSection: React.FC = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const projectsGridRef = useRef(null);

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
                        start: "top center+=100", // Start animation when top of section is 100px above center of viewport
                        toggleActions: "play none none none",
                    }
                }
            );

            // Staggered animation for project cards
            gsap.fromTo(gsap.utils.toArray(projectsGridRef.current.children),
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.1, // Stagger the animation of each card
                    scrollTrigger: {
                        trigger: projectsGridRef.current,
                        start: "top bottom-=100", // Start animation when top of grid enters viewport, slightly delayed
                        toggleActions: "play none none none",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="project" ref={sectionRef} className="relative  px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-AquaDeep" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob" />

            {/* Content */}
            <div className="relative z-10 mx-auto">
                <div ref={headerRef}> {/* Wrap SectionHeader in a div with ref */}
                    <SectionHeader
                        title="Projects"
                        subtitle="Showcasing my latest work and innovations."
                        align="center"
                        aqua={false}
                    />
                </div>

                {/* Responsive Grid */}
                <div ref={projectsGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
                    {myProjects.map((project, index) => (
                        <GlassmorphicProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
