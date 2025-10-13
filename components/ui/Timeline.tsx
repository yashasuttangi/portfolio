"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { FlipWords } from "./FlipWords";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full bg-black font-sans md:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-8">
        <div className="flex flex-col items-start">
          <TextGenerateEffect
            words="My Journey So Far"
            className="text-3xl md:text-5xl font-bold text-white"
          />
          <div className="text-sm md:text-lg max-w-lg text-neutral-400 flex flex-wrap items-center">
            An evolving story of&nbsp;
            <FlipWords
              words={[
                "Creativity",
                "Innovation",
                "Dedication",
                "Growth",
                "Passion",
              ]}
              duration={1200}
              className="text-accent font-semibold"
            />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {/* Vertical Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-6 top-0 overflow-hidden w-[2px]
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
                     from-transparent via-neutral-300 dark:via-neutral-700 to-transparent
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>

        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start md:gap-10 relative group py-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Date / Title */}
            <div className="relative flex items-start md:w-60 pl-12">
              <div className="relative flex items-center">
                <div className="absolute -left-[1.25rem] h-4 w-4 rounded-full bg-accent z-10 border-4 border-black" />
                <h3 className="text-left text-3xl md:text-5xl font-extrabold text-accent tracking-wide leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="relative w-full mt-6 md:mt-0 md:pl-10">
              <div className="p-6 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300">
                <div className="border-l-4 border-accent pl-4">{item.content}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
