"use client";

import React from "react";

export const BackgroundGrid = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`absolute inset-0 bg-black-100 overflow-hidden ${className}`}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          [background-size:40px_40px]"
      />

      {/* Animated moving gradient overlay */}
      <div className="absolute inset-0 animate-grid-move 
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_70%)]"
      />
    </div>
  );
};
