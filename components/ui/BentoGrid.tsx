import { cn } from "@/lib/utils";
import { HoverEffect } from "../ui/CardHoverEffect";
import { JSX } from "react";

export const BentoGrid = ({
  items,
  className,
  onItemClick,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: any;
    details?: JSX.Element;
  }[];
  className?: string;
  onItemClick?: (item: any) => void;
}) => {
  return (
    <div className={cn("mx-auto max-w-7xl w-full", className)}>
      <HoverEffect items={items} onItemClick={onItemClick} />
    </div>
  );
};
