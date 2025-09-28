import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { JSX, useState } from "react";

interface HoverItem {
  title: string;
  description: string;
  link: string;
  image?: string | StaticImageData;
  details?: string | JSX.Element;
}

interface HoverEffectProps {
  items: HoverItem[];
  className?: string;
  onItemClick?: (item: HoverItem) => void;
}

export const HoverEffect = ({
  items,
  className,
  onItemClick,
}: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "relative group block h-full w-full cursor-pointer",
            hoveredIndex === idx && "shadow-lg scale-105 transition-transform"
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onItemClick?.(item)}
        >
          <Card className="flex flex-col h-[400px]">
            {item.image && (
              <div className="relative w-full flex-shrink-0 h-[60%] rounded-t-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
            <div className="flex flex-col p-4 h-[40%]">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
