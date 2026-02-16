"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChunkyShadowButton } from "@/components/ui/Buton"; // Import ChunkyShadowButton
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image"; // Import Image component

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Keep pathname for future reference if needed, but not for active hash
  // Removed: const [currentHash, setCurrentHash] = useState("");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  // Removed useEffect for currentHash
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setCurrentHash(window.location.hash);
  //   }
  // }, []);

  const smoothScrollTo = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
        behavior: 'smooth',
      });
      // Close mobile menu after clicking a link
      setIsOpen(false);
      // Removed: window.history.pushState(null, '', href);
      // Removed: setCurrentHash(href);
    }
  };


  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 w-full p-4 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Manjirul Shishir Logo" width={60} height={60} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            item.name === "Contact" ? (
              <ChunkyShadowButton
                key={item.name}
                onClick={(e) => smoothScrollTo(e, item.href)}
              >
                {item.name}
              </ChunkyShadowButton>
            ) : (
              <Link key={item.name} href={item.href} onClick={(e) => smoothScrollTo(e, item.href)}>
                <Button
                  variant="ghost"
                  className={clsx(
                    "text-base font-medium transition-colors hover:text-cyan-400",
                    // Active state highlighting removed, use default text-black
                    "text-black"
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 flex flex-col items-center py-4 space-y-4 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
            item.name === "Contact" ? (
              <ChunkyShadowButton
                key={item.name}
                onClick={(e) => smoothScrollTo(e, item.href)}
              >
                {item.name}
              </ChunkyShadowButton>
            ) : (
              <Link key={item.name} href={item.href} onClick={(e) => smoothScrollTo(e, item.href)}>
                <Button
                  variant="ghost"
                  className={clsx(
                    "text-lg font-medium transition-colors hover:text-cyan-400",
                    // Active state highlighting removed, use default text-black
                    "text-black"
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            )
        ))}
      </div>
    </nav>
  );
}

