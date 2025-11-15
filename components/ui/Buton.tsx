import React from 'react';
import { ChevronRight } from 'lucide-react';




export const ChunkyShadowButton = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center
        px-10 py-4 text-lg font-semibold text-black
        border border-black rounded-md cursor-pointer
        transition-all duration-150 ease-in-out
        [box-shadow:6px_6px_0_#fff]
        active:translate-x-1.5 active:translate-y-1.5
        active:[box-shadow:2px_2px_0_#000]
        bg-Barberry hover:text-white">
      {children}
      <ChevronRight className="ml-3" />
    </button>
  );
};




