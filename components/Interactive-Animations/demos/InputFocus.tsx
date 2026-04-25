"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { CodeExample } from "@/Types/types";
import DemoCard from "../DemoCard";

// Demo component for the InputFocus micro-interaction.
export default function InputFocus({ onOpenCode }: { onOpenCode: (example: CodeExample) => void }) {
  const shouldReduceMotion = useReducedMotion();
  const [isFocused, setIsFocused] = useState(false);

  const example = {
    title: "Input Focus",
    description: "A focused field with animated underline and glow feedback",
    code: `const [isFocused, setIsFocused] = useState(false);

<input
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
/>

<motion.div
  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
  initial={{ width: 0 }}
  animate={{ width: isFocused ? "100%" : 0 }}
  transition={{ duration: 0.3 }}
/>`,
  };

  return (
    <DemoCard
      title="Input Focus"
      description="Focus state with glow and underline feedback."
      onOpenCode={() => onOpenCode(example)}
    >
      <div className="relative w-full">
        {/* Accessible label for screen readers */}
        <label htmlFor="demo-input-focus" className="sr-only">
          Demo input field
        </label>

        <input
          id="demo-input-focus"
          type="text"
          placeholder="Type something..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus-visible:focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Animated underline */}
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
          initial={shouldReduceMotion ? undefined : { width: 0 }}
          animate={{ width: isFocused ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Focus glow */}
        {isFocused && !shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-xl bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_70%)] blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    </DemoCard>
  );
}
