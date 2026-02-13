"use client";

import React from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

interface InfoItemProps {
    label: string;
    value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
    <li className="flex mb-3">
        <p className="font-medium text-AquaDeep dark:text-gray-300 w-1/2">{label}</p>
        <p className="font-medium text-AquaDeep dark:text-gray-300 w-1/2">{value}</p>
    </li>
);

const AboutSection = () => {
    // Static content properties
    const person = {
        name: "Manjirul Islam Shishir",
        age: "27 Years",
        occupation: "Full-Stack Developer",
        phone: "+880 1303-186546",
        email: "mjshishirf@gmail.com",
        nationality: "Bangladeshi",
        company: "Freelancer",
    };

    // Component Rendering
    return (
        <section id="about" className="min-h-screen bg-background text-foreground font-inter theme-red">
            <div className="overflow-hidden">
                <SectionHeader
                    title="About Me"
                    subtitle="Who I Am"
                    align="center"
                    aqua
                />
                <div className="mt-16 mb-36 relative">
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
                                                       after:absolute after:content-[''] after:bg-white dark:after:bg-gray-800 after:w-[65px] after:h-[65px] after:right-[-9%] after:top-[137px] after:rotate-[42deg] after:z-10"
                                        >
                                            <div className="relative z-10">
                                                <Image
                                                    className="rounded-xl relative z-10 w-full h-auto max-w-sm lg:max-w-md xl:max-w-none shadow-xl"
                                                    src={"/images/mj.png"}
                                                    alt="about image"
                                                    width={500}
                                                    height={600}
                                                />
                                            </div>

                                            {/* Decorative Shape 1 (Red Border) */}
                                            <div
                                                className="absolute w-[133px] h-[134px] border-4 border-AquaDeep dark:border-gray-700 right-[-25px] top-[-25px]"
                                            ></div>

                                            {/* Decorative Shape 2 (Solid Red Box) */}
                                            <div
                                                className="absolute bg-AquaDeep dark:bg-gray-700 w-[91px] h-[91px] top-[70px] left-[-12px] z-10 rounded-lg"
                                            ></div>

                                            {/* Download CV Spinner */}
                                            <div className="absolute -left-1 -bottom-14 z-20">
                                                <Image
                                                    className="rotate-animation inline-block w-32 h-32"
                                                    src="/images/cv-spinner.png" // Assuming you'll add this image to public/images
                                                    alt="download background"
                                                    width={128} // Corresponds to w-32 (128px)
                                                    height={128} // Corresponds to h-32 (128px)
                                                />
                                                <a
                                                    href="#"
                                                    className="absolute w-full h-full inset-0 transition duration-500 rounded-full bg-AquaDeep dark:bg-gray-700"
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


                                            <h2 className="mb-[30px] text-4xl font-bold text-AquaDeep dark:text-foreground">
                                                I’m a Full-Stack Developer specializing in Next.js 15 and Tailwind CSS 4.
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="mb-6 text-AquaDeep dark:text-gray-300 leading-relaxed">
                                        Hi, I’m Manjirul Islam Shishir, a Full-Stack Developer driven by performance and innovation. While the web moves fast, I move faster—specializing in the latest iterations of Next.js 15 and Tailwind CSS 4.

                                        I don’t just build websites; I build digital experiences. From developing an AI-powered personalization SDK (BehaveIQ) to architecting a Headless CMS (Headly), my focus is always on scalability, security, and speed. I bridge the gap between complex backend logic and pixel-perfect frontend aesthetics.

                                        When I’m not coding, I’m exploring system architectures or optimizing cloud deployments on AWS. Let’s build something that stands out.
                                    </p>


                                    {/* Info Wrapper */}
                                    <div
                                        className="border-t border-b border-gray-200 dark:border-gray-700 pt-6 pb-5 mt-6"
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
                                            <Image
                                                src="/images/signature.png" // Assuming you'll add this image to public/images
                                                alt="signature"
                                                width={150}
                                                height={60}
                                            />
                                        </div>
                                        <div className="mt-5 text-left">
                                            <h6 className="uppercase pr-1 mb-0 font-bold text-lg inline-block text-foreground">
                                                {person.name}
                                            </h6>
                                            <span className="text-AquaDeep dark:text-gray-400 text-sm block">
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
                        className="absolute hidden md:inline-block text-[200px] leading-none bottom-40 right-[68%] opacity-10 font-extrabold text-AquaDeep dark:text-gray-700"
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