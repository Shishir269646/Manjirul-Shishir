"use client";

import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
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

const GlassmorphicProjectCard: React.FC<GlassmorphicProjectCardProps> = ({
    imageUrl,
    title,
    description,
    techStack,
    liveUrl,
    githubUrl,
}) => {
    return (
        <Card
            className="w-full rounded-2xl overflow-hidden shadow-lg
                 bg-white/10 backdrop-blur-xl border border-white/20 text-white
                 transition-all duration-500 ease-out
                 hover:shadow-3xl hover:border-white/50 group"
        >
            {/* Thumbnail Image */}
            <CardHeader className="p-0 h-[200px] relative overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-2">
                <CardTitle className="text-2xl font-bold mb-2 text-black">{title}</CardTitle>
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

            {/* Buttons */}
            <CardFooter className="flex flex-col sm:flex-row gap-1 sm:gap-4 p-2 pt-0">
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
};

export default GlassmorphicProjectCard;
