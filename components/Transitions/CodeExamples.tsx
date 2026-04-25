"use client";

import { motion, useReducedMotion } from "framer-motion";
import CodeCard from "./CodeCard";

// Static code examples for common page-transition patterns.
export default function CodeExamples() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="mx-auto mt-16 max-w-6xl sm:mt-24"
      aria-labelledby="code-examples-heading"
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 30, filter: "blur(8px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Section heading */}
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="code-examples-heading"
          className="font-serif text-2xl font-light leading-[1.3] text-white sm:text-4xl lg:text-5xl"
        >
          Code examples show how page transitions are built in real interfaces
        </h2>
      </div>

      {/* Example cards */}
      <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
        <CodeCard
          title="Fade Transition"
          description="Use opacity to smoothly replace one view with another. This is one of the safest and most universal transition patterns."
          code={`<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  {content}
</motion.div>`}
        />

        <CodeCard
          title="Slide Transition"
          description="Use horizontal movement when you want navigation to feel directional, such as moving forward through steps or screens."
          code={`<motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "-100%" }}
  transition={{
    type: "spring",
    stiffness: 240,
    damping: 28
  }}
>
  {content}
</motion.div>`}
        />

        <CodeCard
          title="Scale Transition"
          description="Use scale when you want a compact zoom effect. It works well for focused interfaces or transitions between cards and panels."
          code={`<motion.div
  initial={{ scale: 1.2, opacity: 0, filter: "blur(8px)" }}
  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
  exit={{ scale: 0.85, opacity: 0, filter: "blur(6px)" }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>
  {content}
</motion.div>`}
        />
      </div>
    </motion.section>
  );
}
