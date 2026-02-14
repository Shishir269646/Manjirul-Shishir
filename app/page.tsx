'use client';


import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import ProjectSection from "@/components/projectSection";
import HeroSection from "@/components/HeroSection";
import SocialMedia from "@/components/SocialMedia";
import EducationSkill from "@/components/educationskill";







export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-white font-sans">

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

      <Contact />
      <SocialMedia />

      
    </main>
  );
}
