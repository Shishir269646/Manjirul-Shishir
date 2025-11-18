'use client';
import React from 'react';
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Linkedin,
    Github,
    type LucideIcon,
} from 'lucide-react';

// Define the type for a social icon object
interface SocialIcon {
    name: string;
    icon: LucideIcon;
    href: string;
}

// Array of social media icons using lucide-react
// The 'social' array from your 'Socialmedia.js' is now here
const socialIcons: SocialIcon[] = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Github', icon: Github, href: '#' },
];


function SocialMedia() {
    return (
        // Added bg-gray-900 so the white text h2 is visible
        <div className="social-links pt-26 pb-28 bg-AquaDeep overflow-hidden">
            <h2 className="font-bold pb-16 text-white text-center text-4xl md:text-[55px] leading-[45px] md:leading-[70px] mb-0">
                Follow Me
            </h2>

            {/* The original code had 'left-2/4 top-2/4' which might be for absolute positioning
                I'm wrapping with a flex container to center it instead, which is more robust. */}

            <div className="flex justify-center items-center">
                <ul className="flex m-0 p-0">
                    {socialIcons.map((item) => {
                        // Get the icon component from the object
                        const IconComponent = item.icon;

                        return (
                            <li key={item.name} className="mx-[5px] my-0">
                                <a
                                    href={item.href}
                                    aria-label={`Follow me on ${item.name}`}
                                    className="
                    group 
                    bg-white
                    no-underline 
                    items-center
                     
                    w-[210px] h-20 
                    rotate-[-30deg] skew-x-25 
                    translate-x-0 translate-y-0 
                    transition-[0.5s] 
                    shadow-[-20px_20px_10px_rgba(0,0,0,0.5)] 
                    pl-5 
                    
                    before:content-[''] before:absolute 
                    before:h-full before:w-5 
                    before:rotate-0 before:skew-y-[-45deg] 
                    before:-left-5 before:top-2.5 
                    before:bg-gray-200
                    
                    after:content-[''] after:absolute 
                    after:h-5 after:w-full 
                    after:rotate-0 after:skew-x-[-45deg] 
                    after:-left-2.5 after:-bottom-5 
                    after:bg-gray-300
                    
                    hover:rotate-[-30deg] hover:skew-x-25 
                    hover:translate-x-5 hover:translate-y-[-15px] 
                    hover:shadow-[-50px_50px_50px_rgba(0,0,0,0.5)] 
                    
                    flex justify-center
                  "
                                >
                                    <IconComponent
                                        className="h-18 w-18 text-AquaDeep transition-[0.5s] group-hover:text-Barberry"
                                        strokeWidth={1.5}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SocialMedia;