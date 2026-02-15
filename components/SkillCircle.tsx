"use client";

import React, { useEffect, useRef, useState } from "react";

interface SkillCircleProps {
    skillName: string;
    percentage: number;
    gradientFrom?: string;
    gradientTo?: string;
    size?: number;
}

const SkillCircle: React.FC<SkillCircleProps> = ({
    skillName,
    percentage,
    gradientFrom = "#e91e63",
    gradientTo = "#673ab7",
    size = 160,
}) => {
    const [counter, setCounter] = useState(0);
    const numberRef = useRef<HTMLDivElement>(null);

    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            if (current >= percentage) {
                clearInterval(interval);
            } else {
                current += 1;
                setCounter(current);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [percentage]);

    return (
        <>
            <div className="skill" style={{ width: size, height: size, position: "relative" }}>
                <div
                    className="outer"
                    style={{
                        height: size,
                        width: size,
                        borderRadius: "50%",
                        padding: "20px",
                        boxShadow:
                            "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)",
                    }}
                >
                    <div
                        className="inner"
                        style={{
                            height: size - 40,
                            width: size - 40,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow:
                                "inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)",
                        }}
                    >
                        <div
                            id="number"
                            ref={numberRef}
                            style={{ fontWeight: 600, color: "#555", fontFamily: "Poppins, sans-serif" }}
                        >
                            {skillName} {counter}%
                        </div>
                    </div>
                </div>
                <span
                    className="html-circle-skill"
                    style={{ position: "absolute", top: 0, left: 0 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
                        <defs>
                            <linearGradient
                                id={`GradientColor-${skillName}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor={gradientFrom} />
                                <stop offset="100%" stopColor={gradientTo} />
                            </linearGradient>
                        </defs>
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            strokeLinecap="round"
                            stroke={`url(#GradientColor-${skillName})`}
                            strokeWidth={20}
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference - (circumference * counter) / 100}
                            style={{ transition: "stroke-dashoffset 0.3s linear", transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                        />
                    </svg>
                </span>
            </div>
            {/* The global style block is no longer needed as body background is handled by globals.css */}
        </>
    );
};

export default SkillCircle;
