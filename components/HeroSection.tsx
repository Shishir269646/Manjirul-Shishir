"use client";

import React from "react";
import { ChunkyShadowButton } from "@/components/ui/Buton";
import Image from "next/image";
import heroimg from "../app/public/images/hero sideImg.png";
import ParticlesBackground from "./animation/ParticlesBackground";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImageSrc?: string;
    mainImageSrc?: string;
}

export const customAlert = (message: string) => {
    const box = document.createElement("div");
    box.className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50";
    box.innerHTML = `
    <div class="bg-white p-6 rounded-xl shadow-2xl max-w-sm text-center border-4 border-black">
      <p class="text-xl font-bold mb-4 text-gray-800">${message}</p>
      <button id="close-message" class="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold border border-black transition-colors duration-150 ease-in-out">
        Got It!
      </button>
    </div>
  `;
    document.body.appendChild(box);
    document.getElementById("close-message")!.onclick = () =>
        document.body.removeChild(box);
};

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    backgroundImageSrc,
    mainImageSrc,
}) => {
    return (
        <section
            className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center"
        >
            {/*  Particles as Background */}
            <div className="absolute inset-0 -z-10">
                <ParticlesBackground />
            </div>

            {/* Optional background image layer */}
            {backgroundImageSrc && (
                <div
                    className="absolute inset-0 bg-cover bg-center -z-20"
                    style={{ backgroundImage: `url(${backgroundImageSrc})` }}
                ></div>
            )}

            {/* Dark overlay for readability */}
            {/* ✨ FIX: Added inset-0 here to make the overlay fill the section */}
            <div className="absolute inset-0"></div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                {/* Left Content */}
                <div className="text-white text-center lg:text-left space-y-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
                    <ChunkyShadowButton onClick={() => customAlert("Ordering!")}>
                        Order Now
                    </ChunkyShadowButton>
                </div>

                {/* Right Image */}
                <div className="hidden lg:flex justify-center">
                    <Image
                        src={mainImageSrc || heroimg}
                        alt="Hero Image"
                        width={550}
                        height={600}
                        className="rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;