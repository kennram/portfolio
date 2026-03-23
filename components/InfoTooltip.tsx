"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const InfoTooltip = ({ 
  content, 
  children 
}: { 
  content: string; 
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-flex items-center cursor-help"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute z-[100] top-full mt-4 -left-24 w-64 p-4 rounded-2xl bg-neutral-900 border border-teal-500/30 shadow-2xl pointer-events-none"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-500 leading-relaxed whitespace-normal">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
