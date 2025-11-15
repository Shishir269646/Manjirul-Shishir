"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="text-lg font-bold">
        Manjirul Shishir
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="#about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link href="#skills">
          <Button variant="ghost">Skills</Button>
        </Link>
        <Link href="#projects">
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link href="#contact">
          <Button variant="ghost">Contact</Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}
