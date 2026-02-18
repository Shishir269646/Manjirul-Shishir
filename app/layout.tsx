import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer"; // Import the Footer component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Explicitly set font-display to swap
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: 'swap', // Explicitly set font-display to swap
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Explicitly set font-display to swap
});

export const metadata: Metadata = {
  title: "Manjirul Shishir",
  description: "Personal portfolio of Manjirul Shishir, a passionate software developer specializing in web development and open-source contributions. Explore my projects, skills, and experience in the world of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${space.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
