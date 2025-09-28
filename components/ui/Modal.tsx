"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-[1000]"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed top-1/2 left-1/2 z-[1001] w-11/12 max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black rounded-xl shadow-lg overflow-auto max-h-[90vh] p-6"
            )}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xl font-bold text-neutral-500 hover:text-accent"
            >
              &times;
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
