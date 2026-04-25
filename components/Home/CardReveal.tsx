"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ChildrenProps } from "@/Types/types";

// Reusable animated card wrapper for home sections.
export default function CardReveal({ children }: ChildrenProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      // Reveal animation
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 40, filter: "blur(10px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: shouldReduceMotion ? 0.2 : 1,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      // Disable hover motion when reduced motion is enabled
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
    >
      {/* Decorative top highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
      />

      {/* Decorative hover layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative z-10">{children}</div>
    </motion.article>
  );
}