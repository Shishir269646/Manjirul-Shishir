// components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
// Removed: import SocialMedia from "./SocialMedia";
import clsx from "clsx";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Github,
  type LucideIcon,
} from 'lucide-react';
import Image from "next/image"; // Import Image component

interface SocialIcon {
  name: string;
  icon: LucideIcon;
  href: string;
}

const socialIcons: SocialIcon[] = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/mjshishir99' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/mjshishir2696' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/manjirulislamshishir' },
  { name: 'Github', icon: Github, href: 'https://github.com/Shishir269646' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-AquaDeep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Manjirul Shishir Logo" width={80} height={80} />

          </Link>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialIcons.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={`Follow me on ${item.name}`}
                  className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {currentYear} Manjirul Shishir. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
