"use client";

import { motion, useReducedMotion } from "framer-motion";
import CardReveal from "./CardReveal";
import type { InfoItem } from "@/Types/types";

// Motion principles section with reusable reveal cards.
export default function MotionPrinciples() {
  const shouldReduceMotion = useReducedMotion();

  const principles: InfoItem[] = [
    {
      title: "Timing",
      description: "Smooth and natural motion depends on precise timing",
    },
    {
      title: "Easing",
      description: "Acceleration curves control the emotional quality of motion",
    },
    {
      title: "Anticipation",
      description: "Pre-motion cues prepare the user for interaction",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="principles-heading"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            id="principles-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Motion principles help interfaces feel controlled
          </h2>
        </motion.div>

        {/* Principle cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: shouldReduceMotion
                ? {}
                : {
                    staggerChildren: 0.15,
                    delayChildren: 0.15,
                  },
            },
          }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((principle) => (
            <CardReveal key={principle.title}>
              <h3 className="text-xl font-normal text-white">
                {principle.title}
              </h3>

              <p className="mt-4 font-light leading-7 text-white/95">
                {principle.description}
              </p>
            </CardReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
