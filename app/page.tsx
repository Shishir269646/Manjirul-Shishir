'use client';


import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/projectSection";
import HeroSection from "@/components/HeroSection";
import EducationSkill from "@/components/educationskill";
import dynamic from "next/dynamic"; // Import dynamic

const DynamicContact = dynamic(() => import("@/components/Contact"), {
  ssr: false, // Assuming it has client-side interactivity like form handling
  loading: () => <p className="text-center text-white py-8">Loading contact form...</p>, // Optional: Add a loading component
});



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-white">

      {/*  Hero Section with Particles */}
      <HeroSection
        title="Engineering the Future of Web with Next.js 15 & React 19."
        subtitle="Crafting seamless digital experiences with cutting-edge web technologies."
        ctaText="Get Started"
        backgroundImageSrc="" // Optional background image
        mainImageSrc=""        // Optional main hero image
      />

      {/*  Other Sections Below */}
      <AboutSection />

      <ProjectSection />
      <EducationSkill />

      <DynamicContact />



    </main>
  );
}
