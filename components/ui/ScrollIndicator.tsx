"use client";

import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const ScrollIndicator = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-8 left-[75%] transform -translate-x-1/2 z-50 flex flex-col items-center animate-bounce">
      <span className="text-sm text-gray-600 dark:text-gray-300">
        Explore my journey
      </span>
      <FaChevronDown className="text-2xl text-gray-600 dark:text-gray-300 mt-1" />
    </div>
  );
};
