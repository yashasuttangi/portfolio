"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-black rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
