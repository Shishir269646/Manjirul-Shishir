import React from 'react';
import { ChevronRight } from 'lucide-react';




interface ChunkyShadowButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Modified to pass event
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const ChunkyShadowButton = ({
  children,
  onClick,
  type = "button", // Default type
  disabled = false, // Default disabled state
}: ChunkyShadowButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="relative inline-flex items-center justify-center
        px-10 py-4 text-lg font-semibold text-black
        border border-black rounded-md cursor-pointer
        transition-all duration-150 ease-in-out
        [box-shadow:6px_6px_0_#fff]
        active:translate-x-1.5 active:translate-y-1.5
        active:[box-shadow:2px_2px_0_#000]
        bg-Barberry hover:text-white
        disabled:opacity-50 disabled:cursor-not-allowed">
      {children}
      <ChevronRight className="ml-3" />
    </button>
  );
};




