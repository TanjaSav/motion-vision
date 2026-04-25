"use client";

import { motion, useReducedMotion } from "framer-motion";

// Intro copy for the interactive animations page.
export default function IntroSection() {
  // Respect the user's reduced motion preference
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="micro-intro-heading"
    >
      {/* Decorative background wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1
            id="micro-intro-heading"
            className="font-serif text-4xl font-light leading-[1.3] text-white sm:text-5xl lg:text-6xl"
          >
            Animations that bring
            <br />
            interfaces to life
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-8 text-white/80 sm:text-lg">
            Small motion details improve clarity, add feedback, and make
            digital products feel more responsive and polished
          </p>
        </motion.div>
      </div>
    </section>
  );
}
