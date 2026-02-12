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

function SocialMedia() {
    return (
        <div className="social-links py-16 md:pt-26 md:pb-28 bg-AquaDeep overflow-hidden">
            <h2 className="font-bold pb-10 md:pb-16 text-white text-center text-3xl sm:text-4xl md:text-[55px] leading-[40px] md:leading-[70px]">
                Follow Me
            </h2>

            <div className="flex justify-center items-center px-4">
                <ul className="flex flex-wrap justify-center gap-4 m-0 p-0">
                    {socialIcons.map((item) => {
                        const IconComponent = item.icon;

                        return (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    aria-label={`Follow me on ${item.name}`}
                                    className="
                                    relative
                                    group 
                                    bg-white
                                    no-underline 
                                    items-center
                                    w-[140px] sm:w-[170px] md:w-[210px]
                                    h-14 sm:h-16 md:h-20
                                    rotate-[-30deg] skew-x-25 
                                    translate-x-0 translate-y-0 
                                    transition-all duration-500
                                    shadow-[-20px_20px_10px_rgba(0,0,0,0.5)] 
                                    pl-5
                                    
                                    before:content-[''] before:absolute 
                                    before:h-full before:w-4 sm:before:w-5
                                    before:skew-y-[-45deg] 
                                    before:-left-4 sm:before:-left-5
                                    before:top-2 
                                    before:bg-gray-200
                                    
                                    after:content-[''] after:absolute 
                                    after:h-4 sm:after:h-5 
                                    after:w-full 
                                    after:skew-x-[-45deg] 
                                    after:-left-2 
                                    after:-bottom-4 sm:after:-bottom-5
                                    after:bg-gray-300
                                    
                                    hover:translate-x-4 hover:translate-y-[-10px]
                                    hover:shadow-[-40px_40px_40px_rgba(0,0,0,0.5)]
                                    
                                    flex justify-center items-center
                                  "
                                >
                                    <IconComponent
                                        className="
                                        h-8 w-8 
                                        sm:h-10 sm:w-10 
                                        md:h-14 md:w-14
                                        text-AquaDeep 
                                        transition-all duration-500 
                                        group-hover:text-Barberry
                                        "
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
