'use client';


import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import GlassmorphicProjectCard from "@/components/glassmorphic-project-card";
import HeroSection from "@/components/HeroSection";
import SkillsNetwork from "@/components/SkillsNetwork";
import SocialMedia from "@/components/SocialMedia";
import ZigzagWaveTimeline from "@/components/Timeline";




// Sample project data
const myProject = {
  imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", // Replace with your screenshot
  title: "My Awesome Project",
  description: "A short and sweet description of what this project does.",
  techStack: ["Next.js", "React", "TailwindCSS", "TypeScript"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/your-username/your-repo",
};


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-white font-sans">

      {/* 🦋 Hero Section with Particles */}
      <HeroSection
        title="Welcome to Our Awesome App"
        subtitle="Experience the best features and seamless performance."
        ctaText="Get Started"
        backgroundImageSrc="" // Optional background image
        mainImageSrc=""        // Optional main hero image
      />

      {/* 💡 Other Sections Below */}
      <AboutSection />

      <div className="flex items-center justify-center min-h-screen relative overflow-hidden p-10">
        {/* Background elements to blur */}
        <div className="absolute inset-0 bg-AquaDeep"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>


        {/* The Glassmorphic Card */}
        <GlassmorphicProjectCard
          imageUrl={myProject.imageUrl}
          title={myProject.title}
          description={myProject.description}
          techStack={myProject.techStack}
          liveUrl={myProject.liveUrl}
          githubUrl={myProject.githubUrl}
        />
      </div>
      <ZigzagWaveTimeline />
      <Contact />
      <SocialMedia />
      <SkillsNetwork />
    </main>
  );
}
