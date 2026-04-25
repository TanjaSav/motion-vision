"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CodeExample } from "@/Types/types";
import DemoCard from "../DemoCard";

// Demo component for the HoverButton micro-interaction.
export default function HoverButton({ onOpenCode }: { onOpenCode: (example: CodeExample) => void }) {
  const shouldReduceMotion = useReducedMotion();

  const example = {
    title: "Hover Button",
    description:
      "A simple hover interaction using scale, shadow, and a moving highlight layer",
    code: `const HoverButton = () => (
  <motion.button
    type="button"
    className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white"
    whileHover={{
      scale: 1.1,
      boxShadow: "0 18px 36px rgba(56, 189, 248, 0.25),
                  0 0 40px rgba(56, 189, 248, 0.35)",
    }}
    whileTap={{ scale: 0.96 }}
    transition={{ type: "spring", stiffness: 320, damping: 20 }}
  >
    <motion.div
      className="absolute inset-0 bg-white/10"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.55 }}
    />
    <span className="relative z-10">Hover Me</span>
  </motion.button>
);`,
  };

  return (
    <DemoCard
      title="Hover Button"
      description="Scale, glow, and highlight transitions on hover."
      onOpenCode={() => onOpenCode(example)}
    >
      <motion.button
        type="button"
        className="relative cursor-pointer overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
            scale: 1.1,
            boxShadow: `
              0 18px 36px rgba(56, 189, 248, 0.25),
              0 0 40px rgba(56, 189, 248, 0.35)
            `,
          }}

        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
        aria-label="Hover button demo"
      >
        {/* Animated highlight layer */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-white/10"
          initial={shouldReduceMotion ? undefined : { x: "-100%" }}
          whileHover={shouldReduceMotion ? undefined : { x: "100%" }}
          transition={{ duration: 0.55 }}
        />

        <span className="relative z-10">Hover Me</span>
      </motion.button>
    </DemoCard>
  );
}
