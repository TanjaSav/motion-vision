"use client";

import { motion, useReducedMotion } from "framer-motion";

// Static guide cards describing common scroll animation patterns.
export default function ScrollEffectsGuide() {
  const shouldReduceMotion = useReducedMotion();

  const effects = [
    {
      title: "Parallax",
      subtitle: "Different layer speeds",
      intro: "Creates a sense of depth while the user scrolls",
      logic: [
        "Background layers move more slowly",
        "Foreground elements move faster",
        "Movement is driven by scrollY or scroll progress",
        "The farther the layer, the smaller the offset",
      ],
      important: [
        "Use speed ratios such as 0.1, 0.3, and 0.6",
        "Use the Y axis in most cases",
        "Clamp movement so layers do not drift too far",
        "Prefer transform instead of top or left for performance",
      ],
    },
    {
      title: "Sticky Scroll",
      subtitle: "Fixed visual + changing content",
      intro:
        "Keeps one important visual element in focus while nearby content changes during scrolling",
      logic: [
        "One element stays sticky in the viewport",
        "Text or cards move around it",
        "The sticky element anchors attention",
        "Each block reveals progressively as the user continues scrolling",
      ],
      important: [
        "Use sticky only when the section is tall enough",
        "Keep strong spacing between content blocks",
        "Avoid too many sticky areas on one page",
        "Check behavior carefully on mobile screens",
      ],
    },
    {
      title: "Timeline Motion",
      subtitle: "Sequential reveal",
      intro:
        "Useful for history, progress, milestones, and structured step-by-step storytelling",
      logic: [
        "Each item appears at a scroll threshold",
        "Cards can alternate from left and right",
        "A central line gives the layout visual structure",
        "Motion helps the sequence feel progressive",
      ],
      important: [
        "Keep direction changes consistent",
        "Do not overload the timeline with too much text",
        "Use stagger only when it improves readability",
        "Make the active point easy to track visually",
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="effects-guide-heading"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
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
            id="effects-guide-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Each scroll effect has its own logic, structure, and implementation
            rules
          </h2>

          <p className="mt-6 text-base font-light leading-8 text-white/80 sm:text-lg">
            These cards explain what each effect does, how it works, and what
            should not be missed in implementation
          </p>
        </motion.div>

        {/* Effects grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: shouldReduceMotion
                ? {}
                : {
                    staggerChildren: 0.12,
                    delayChildren: 0.12,
                  },
            },
          }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {effects.map((effect) => (
            <motion.article
              key={effect.title}
              variants={{
                hidden: shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      y: 36,
                      filter: "blur(10px)",
                    },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: shouldReduceMotion ? 0.2 : 0.95,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
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

              <div className="relative z-10">
                <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                  {effect.subtitle}
                </div>

                <h3 className="mt-3 text-2xl text-white">{effect.title}</h3>

                <p className="mt-4 font-light leading-7 text-white/85">
                  {effect.intro}
                </p>

                <div className="mt-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                    What defines this effect
                  </p>

                  <ul className="mt-4 space-y-3">
                    {effect.logic.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-[4px] w-[4px] rounded-full bg-cyan-300/75"
                        />
                        <span className="font-light leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                    Important details
                  </p>

                  <ul className="mt-4 space-y-3">
                    {effect.important.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-[4px] w-[4px] rounded-full bg-blue-300/75"
                        />
                        <span className="font-light leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}