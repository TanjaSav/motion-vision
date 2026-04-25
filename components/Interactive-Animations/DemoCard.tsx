"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ChildrenProps } from "@/Types/types";

// Reusable card shell for each interactive demo.
export default function DemoCard({
  title,
  description,
  children,
  onOpenCode,
}: {
  title: string;
  description: string;
  children: ChildrenProps["children"];
  onOpenCode: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 24, filter: "blur(8px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Decorative top line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
      />

      {/* Decorative hover wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-white/0 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="text-xl font-normal text-white">{title}</h3>
        <p className="mt-4 text-sm font-light leading-7 text-white/80">
          {description}
        </p>

        {/* Demo preview area */}
        <div className="flex min-h-[200px] flex-1 items-center justify-center pt-8">
          {children}
        </div>

        {/* Action button */}
        <button
          type="button"
          onClick={onOpenCode}
          className="mt-6 w-full cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-fit sm:px-5"
        >
          Code example
        </button>
      </div>
    </motion.article>
  );
}
