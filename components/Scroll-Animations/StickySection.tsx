"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RoseVideo } from "@/components/Home/RoseVideo";

// Sticky layout section combining fixed visual content and scrolling text.
export default function StickySection() {
  const shouldReduceMotion = useReducedMotion();

  const sections = [
    {
      description:
        "Define what should stay visible and what should change while the user scrolls",
    },
    {
      description:
        "Use contrast, motion rhythm, and spacing to support attention and hierarchy",
    },
    {
      description:
        "Test the animation on different screens and keep the movement smooth and subtle",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 lg:py-28"
      aria-labelledby="sticky-heading"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.08),transparent_30%)]"
      />

      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-12">
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
            id="sticky-heading"
            className="font-serif text-3xl font-light leading-[1.4] text-white sm:text-4xl lg:text-5xl"
          >
            Sticky sections keep focus on one visual idea
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            while the content changes around it
          </h2>
        </motion.div>

        {/* Two-column sticky layout */}
        <div className="mt-10 grid grid-cols-[0.9fr_1.1fr] items-stretch gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          {/* Sticky media block */}
          <div className="relative h-full">
            <div className="sticky top-20 sm:top-24 lg:top-28">
              <motion.div
                className="overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-2 backdrop-blur-xl sm:rounded-3xl sm:p-3"
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.96, filter: "blur(8px)" }
                }
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.9 }}
              >
                {/* Fixed ratio keeps the media block balanced */}
                <div
                  className="aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                  aria-label="Decorative video preview"
                >
                  <RoseVideo />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Supporting content cards */}
          <div className="flex h-full min-h-0 flex-col gap-3 sm:gap-4 lg:gap-5">
            {sections.map((section, index) => (
              <motion.article
                key={index}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 24, filter: "blur(8px)" }
                }
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.8,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="flex min-h-0 flex-1 items-center rounded-[20px] border border-white/10 bg-white/5 p-2.5 backdrop-blur-xl sm:rounded-3xl sm:p-5 lg:p-6"
              >
                <h3 className="text-sm font-light leading-4 text-white/95 sm:text-base sm:leading-6 lg:text-lg lg:leading-8">
                  {section.description}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
