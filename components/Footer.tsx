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

interface SocialIcon {
    name: string;
    icon: LucideIcon;
    href: string;
}

const socialIcons: SocialIcon[] = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Github', icon: Github, href: '#' },
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
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            Manjirul Shishir
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
