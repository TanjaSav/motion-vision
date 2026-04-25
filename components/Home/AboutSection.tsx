"use client";

import { motion, useReducedMotion } from "framer-motion";
import CardReveal from "./CardReveal";
import type { InfoItem } from "@/Types/types";

// Introductory cards explaining animation value and usage.
export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const cards: InfoItem[] = [
    {
      title: "Why animations matter",
      text: "Animations help users understand interface behavior, guide attention, and provide feedback",
    },
    {
      title: "When to use them",
      text: "Use animations for transitions, loading states, interactions, and storytelling",
    },
    {
      title: "Technologies",
      text: "React, Next.js, GSAP, Framer Motion and Lottie provide powerful tools for building animations",
    },
    {
      title: "Best practices",
      text: "Keep animations subtle, fast, and meaningful. Avoid overloading the UI",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="about-heading"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-360 px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
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
          className="mx-auto max-w-5xl text-center"
        >
          <h2
            id="about-heading"
            className="font-serif text-3xl font-light leading-normal text-white md:text-4xl"
          >
            Dynamic websites use animation and interaction to improve user
            experience
          </h2>
        </motion.div>

        {/* Cards grid */}
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
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {cards.map((card) => (
            <CardReveal key={card.title}>
              <h3 className="text-xl font-normal text-white">{card.title}</h3>

              {/* Decorative divider */}
              <motion.div
                aria-hidden="true"
                className="mt-4 h-px origin-left bg-linear-to-r from-cyan-300/70 to-blue-400/40"
              />

              <p className="mt-4 font-light leading-7 text-white/95">
                {card.text}
              </p>
            </CardReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
