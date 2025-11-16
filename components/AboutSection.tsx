"use client";

import React from 'react';
import aboutImg from '../app/public/images/mj.png';
import Image from 'next/image';

// NOTE: This component uses arbitrary Tailwind values (e.g., pt-[12px], right-[-25px]) 
// and custom keyframe animations defined in the <style> block to fully replicate the original complex layout and styling.

const AboutSection = () => {
    // Custom styles for non-standard animations (rotation, zoom) and specific background colors.
    // The rest of the styling is handled by Tailwind classes.
    const customStyles = `
        /* 1. Global Reset & Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@500;700&family=Open+Sans&family=Inter:wght@400;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #1f2937; /* Dark background to showcase the white/red section */
            color: #f3f4f6;
        }

        /* 2. Custom Color Utility (The Accent Red) */
        .theme-red {
            --color-theme-red: #ba2215;
        }

        /* 3. Animations */
        @keyframes rotation {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .rotate-animation { animation: rotation 10s infinite linear; -webkit-animation: rotation 10s infinite linear; }

        @keyframes zoom-animation {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        .zoom-animation { animation: zoom-animation 5s infinite linear; }
    `;

    // Static content properties
    const person = {
        name: "Bruce Wayne",
        age: "35 Years",
        occupation: "Software Architect",
        phone: "+123 456 7890",
        email: "hello@thames.com",
        nationality: "American",
        company: "Google Inc."
    };

    // Helper function for the complex info list items
    const InfoItem = ({ label, value }) => (
        <li className="flex mb-3">
            <p className="font-medium text-AquaDeep w-1/2">{label}</p>
            <p className="font-medium text-AquaDeep w-1/2">{value}</p>
        </li>
    );

    // Component Rendering
    return (
        <section id="about" className="min-h-screen bg-white text-AquaDeep font-inter theme-red">
            {/* Inject custom styles */}
            <style>{customStyles}</style>

            <div className="overflow-hidden">
                <div className="mt-[170px] mb-[110px] relative">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap -mx-3">

                            {/* ===== Left Image Section (w-full / w-1/2 on md+) - Adjusted left padding to prevent clipping ===== */}
                            {/* lg:pl-[100px] provides enough horizontal space to accommodate the negatively positioned elements (like the spinner at left-[-75px]) */}
                            <div className="w-full lg:w-1/2 px-3 lg:pl-[100px]">
                                <div className="relative mb-[90px]">
                                    <div className="relative z-10">

                                        {/* Image Wrapper with Complex Pseudo-Elements */}
                                        <div
                                            className="relative inline-block pl-[50px] transition duration-500 rounded-xl overflow-visible 
                                                       before:absolute before:content-[''] before:w-[45px] before:h-[64px] before:bg-AquaDeep before:right-[55px] before:bottom-[-32px] before:z-20 
                                                       after:absolute after:content-[''] after:bg-white after:w-[65px] after:h-[65px] after:right-[-9%] after:top-[137px] after:rotate-[42deg] after:z-10"
                                        >
                                            <div className="relative z-10">
                                                <Image
                                                    className="rounded-xl relative z-10 w-full h-auto max-w-sm lg:max-w-md xl:max-w-none shadow-xl"
                                                    src={aboutImg}
                                                    alt="about image"
                                                    width={500}
                                                    height={600}
                                                />
                                            </div>

                                            {/* Decorative Shape 1 (Red Border) */}
                                            <div
                                                className="absolute w-[133px] h-[134px] border-4 border-AquaDeep right-[-25px] top-[-25px]"
                                            ></div>

                                            {/* Decorative Shape 2 (Solid Red Box) */}
                                            <div
                                                className="absolute bg-AquaDeep w-[91px] h-[91px] top-[70px] left-[-12px] z-10 rounded-lg"
                                            ></div>

                                            {/* Download CV Spinner */}
                                            <div className="absolute -left-1 -bottom-14 z-20">
                                                <img
                                                    className="rotate-animation inline-block w-32 h-32"
                                                    src="https://placehold.co/150x150/ffffff/ba2215?text=CV+Spin"
                                                    alt="download background"
                                                />
                                                <a
                                                    href="#"
                                                    className="absolute w-full h-full inset-0 transition duration-500 rounded-full bg-AquaDeep"
                                                    aria-label="Download CV"
                                                >
                                                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ===== Right Content Section (w-full / w-1/2 on md+) ===== */}
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="relative mb-[50px]">
                                    <div>
                                        <div className="title">
                                            <span
                                                className="text-AquaDeep uppercase block mb-1 mt-[-5px] tracking-widest font-bold"
                                            >
                                                About Me
                                            </span>
                                            <h2 className="mb-[30px] text-4xl font-bold text-AquaDeep">
                                                I Develop Systems that Work
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="mb-6 text-AquaDeep leading-relaxed">
                                        Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laboru
                                        doloremque laudantium, totaeaque ipsa quae ab illo inventore
                                        veritatis et quasi architecto beatae vitae.
                                    </p>
                                    <p className="text-AquaDeep leading-relaxed">
                                        Oremque laudantium, totaeaque ipsa quae
                                    </p>

                                    {/* Info Wrapper */}
                                    <div
                                        className="border-t border-b border-gray-200 pt-6 pb-5 mt-6"
                                    >
                                        <div className="flex flex-wrap -mx-3">
                                            <div className="w-full sm:w-1/2 px-3">
                                                <ul>
                                                    <InfoItem label="Name" value={person.name} />
                                                    <InfoItem label="Age" value={person.age} />
                                                    <InfoItem label="Occupation" value={person.occupation} />
                                                </ul>
                                            </div>
                                            <div className="w-full sm:w-1/2 px-3">
                                                <ul>
                                                    <InfoItem label="Phone" value={person.phone} />
                                                    <InfoItem label="Email" value={person.email} />
                                                    <InfoItem label="Nationality" value={person.nationality} />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signature Block */}
                                    <div
                                        className="flex items-center mt-6 flex-wrap"
                                    >
                                        <div className="pt-3 pr-8">
                                            <img
                                                src="https://placehold.co/150x60/f8fafc/1e293b?text=Signature"
                                                alt="signature"
                                                width={150}
                                                height={60}
                                            />
                                        </div>
                                        <div className="mt-5 text-left">
                                            <h6 className="uppercase pr-1 mb-0 font-bold text-lg inline-block">
                                                {person.name}
                                            </h6>
                                            <span className="text-AquaDeep text-sm block">
                                                {person.occupation}, {person.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements (Vertical Text & Floating Icon) */}
                    <div
                        className="absolute hidden md:inline-block text-[200px] leading-none bottom-40 right-[68%] opacity-10 font-extrabold text-AquaDeep"
                        style={{ transform: 'matrix(0, -1, 1, 0, 0, 0)' }}
                    >
                        <span className="inline-block">Manjirul</span>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default AboutSection;