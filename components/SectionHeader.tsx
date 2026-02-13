"use client";

import React from "react";
import clsx from "clsx";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: "center" | "left";
    aqua?: boolean; // better naming
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    align = "center",
    aqua = true,
}) => {
    return (
        <div
            className={clsx(
                "mb-16",
                align === "center" ? "text-center" : "text-left"
            )}
        >
            {/* Title */}
            <h2
                className={clsx(
                    "font-heading text-4xl md:text-5xl font-bold tracking-tight relative inline-block",
                    aqua
                        ? "bg-AquaDeep bg-clip-text text-transparent"
                        : "text-white"
                )}
            >
                {title}
            </h2>

            {/* Underline */}
            <div
                className={clsx(
                    "h-1 mt-4 rounded-full transition-all duration-500",
                    aqua ? "bg-AquaDeep" : "bg-white",
                    align === "center" ? "mx-auto w-24" : "w-24"
                )}
            />

            {/* Subtitle */}
            {subtitle && (
                <p
                    className={clsx(
                        "font-body mt-6 max-w-2xl",
                        align === "center" && "mx-auto",
                        aqua ? "text-gray-300" : "text-gray-400"
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
