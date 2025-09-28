import { cn } from "@/lib/utils";
import { HoverEffect } from "../ui/CardHoverEffect";
import { JSX } from "react";
import { StaticImageData } from "next/image";

export type BentoGridItem = {
  title: string;
  description: string;
  link: string;
  image?: string | StaticImageData;
  details?: JSX.Element | string;
};

interface BentoGridProps {
  items: BentoGridItem[];
  className?: string;
  onItemClick?: (item: BentoGridItem) => void;
}

export const BentoGrid = ({
  items,
  className,
  onItemClick,
}: BentoGridProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl w-full", className)}>
      <HoverEffect items={items} onItemClick={onItemClick} />
    </div>
  );
};
