"use client";

import React, { useRef, useEffect } from "react";
import { ChunkyShadowButton } from "@/components/ui/Buton";
import Image from "next/image";
import dynamic from "next/dynamic"; // Import dynamic
import gsap from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

// Dynamically import ParticlesBackground
const DynamicParticlesBackground = dynamic(() => import("./animation/ParticlesBackground"), {
    ssr: false, // Ensure it's client-side rendered if it relies on browser APIs or heavy client-side logic
    loading: () => <div style={{ height: '100%', width: '100%', position: 'absolute', inset: 0 }} />, // Optional: Placeholder while loading
});

interface HeroSectionProps {
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImageSrc?: string;
    mainImageSrc?: string;
}

export const customAlert = (message: string) => {
    const box = document.createElement("div");
    box.className =
        "fixed inset-0 flex items-center justify-center bg-black/50 z-50";
    box.innerHTML = `
        <div class="bg-white p-6 rounded-xl shadow-2xl max-w-sm text-center border-4 border-black">
          <p class="text-xl font-bold mb-4 text-gray-800">${message}</p>
          <button id="close-message" class="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold border-4 border-black transition-colors duration-150 ease-in-out">
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
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Animation for left content (title, subtitle, button)
            gsap.from([titleRef.current, subtitleRef.current, buttonRef.current], {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
                // ScrollTrigger not needed for Hero section as it's usually visible on load
            });

            // Animation for right image
            gsap.from(imageRef.current, {
                opacity: 0,
                x: 50,
                duration: 1,
                delay: 0.4, // Delay image animation slightly
                ease: "power3.out",
            });
        }, sectionRef); // Scope animations to the section

        return () => ctx.revert(); // Cleanup GSAP animations
    }, []);

    const smoothScrollToContact = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const targetElement = document.getElementById("contact");

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
                behavior: 'smooth',
            });
        }
    };

    return (
        <section ref={sectionRef} className="relative w-full min-h-[550px] md:min-h-[650px] lg:min-h-[700px] overflow-hidden flex items-center justify-center py-7">
            {/* Particles Background */}
            <div className="absolute inset-0 -z-10 bg-AquaDeep">
                <DynamicParticlesBackground />
            </div>

            {/* Optional background image */}
            {backgroundImageSrc && (
                <div
                    className="absolute inset-0 bg-cover bg-center -z-20"
                    style={{ backgroundImage: `url(${backgroundImageSrc})` }}
                />
            )}

            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black/40"></div> */}

            {/* Main Content */}
            <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                {/* Left Content */}
                <div className="text-white text-center lg:text-left space-y-6">
                    <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        {title}
                    </h1>

                    <p ref={subtitleRef} className="text-base sm:text-lg md:text-xl opacity-90 max-w-xl mx-auto lg:mx-0">
                        {subtitle}
                    </p>

                    <div ref={buttonRef} className="flex justify-center lg:justify-start">
                        <ChunkyShadowButton
                            onClick={smoothScrollToContact}
                        >
                            Contact
                        </ChunkyShadowButton>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="w-full max-w-[550px]">
                        <Image
                            ref={imageRef} // Attach ref to Image component
                            src={mainImageSrc || "/images/hero sideImg.png"}
                            alt="Hero Image"
                            className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
                            priority
                            width={550}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
