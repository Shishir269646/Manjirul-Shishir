'use client';


import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import ProjectSection from "@/components/projectSection";

import GlitchTerminal from "@/components/GlitchTerminal";
import HeroSection from "@/components/HeroSection";
import SkillCircle from "@/components/SkillCircle";
import SocialMedia from "@/components/SocialMedia";
import ZigzagWaveTimeline from "@/components/Timeline";






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

      <ZigzagWaveTimeline />
      <Contact />
      <SocialMedia />
      <SkillCircle
        skillName="React"
        percentage={90}
        gradientFrom="#00c9ff"
        gradientTo="#92fe9d"
      />
      <GlitchTerminal
        text="SHISHIR"
        accentColor="#ff4081"
      />
    </main>
  );
}
