// components/glassmorphic-project-card.tsx
"use client";

import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface GlassmorphicProjectCardProps {
    imageUrl: string;
    title: string;
    description: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
}

function GlassmorphicProjectCard({
    imageUrl,
    title,
    description,
    techStack,
    liveUrl,
    githubUrl
}: GlassmorphicProjectCardProps) {
    return (
        <Card
            className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg 
                       bg-white/10 backdrop-blur-xl border border-white/20 text-white 
                       transition-all duration-500 ease-out 
                       hover:shadow-3xl hover:border-white/50 group"
        >
            {/* Layer 1: Thumbnail Image (Now h-[200px] with Blending Gradient) */}
            <CardHeader className="p-0 h-[200px] relative overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Image Blending Overlay: Softens the transition into the content area */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            </CardHeader>

            {/* Layer 2: Content (Glass Effect) */}
            <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold mb-2">
                    {title}
                </CardTitle>
                <CardDescription className="text-sm text-white/80 mb-4 h-10 overflow-hidden">
                    {description}
                </CardDescription>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech) => (
                        <Badge
                            key={tech}
                            className="bg-white/20 text-white border-white/40 hover:bg-white/40"
                            variant="outline"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            {/* Layer 3: Buttons */}
            <CardFooter className="flex gap-4 p-6 pt-0">
                <Button
                    asChild
                    size="sm"
                    className="w-full bg-white text-black hover:bg-white/80"
                >
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                </Button>
                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full text-white border-white/40 hover:bg-white/20"
                >
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default GlassmorphicProjectCard;