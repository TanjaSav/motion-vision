"use client";

import { motion, useReducedMotion } from "framer-motion";

// Intro copy for the scroll animation page.
export default function IntroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="scroll-intro-heading"
    >
      {/* Decorative intro background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <h1
            id="scroll-intro-heading"
            className="font-serif text-4xl font-light leading-[1.3] text-white sm:text-5xl lg:text-6xl"
          >
            Scroll animations create rhythm,
            <br />
            depth, and visual flow
          </h1>

          <p className="mt-6 text-base font-light leading-8 text-white/80 sm:text-lg">
            Discover how parallax, sticky layouts, and timeline motion help
            guide attention while scrolling
          </p>
        </motion.div>
      </div>
    </section>
  );
}
