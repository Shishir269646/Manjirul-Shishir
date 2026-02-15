"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

  const smoothScrollTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    }
  };


  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 w-full p-4 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
          Manjirul Shishir
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={(e) => smoothScrollTo(e, item.href)}>
              <Button
                variant="ghost"
                className={clsx(
                  "text-base font-medium transition-colors hover:text-cyan-400",
                  // Check if pathname is current path or if hash matches
                  pathname === item.href || (pathname === '/' && window.location.hash === item.href) ? "text-cyan-400" : "text-black"
                )}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ModeToggle />
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
          <Link key={item.name} href={item.href} onClick={(e) => smoothScrollTo(e, item.href)}>
            <Button
              variant="ghost"
              className={clsx(
                "text-lg font-medium transition-colors hover:text-cyan-400",
                // Check if pathname is current path or if hash matches
                pathname === item.href || (pathname === '/' && window.location.hash === item.href) ? "text-cyan-400" : "text-black"
              )}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
