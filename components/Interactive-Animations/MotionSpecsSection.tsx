"use client";

import { motion, useReducedMotion } from "framer-motion";


// Motion-specification guidance cards.
export default function MotionSpecsSection() {
  const shouldReduceMotion = useReducedMotion();

  const specs = [
    {
      interaction: "Hover Button",
      duration: "200ms",
      easing: "ease-out",
      trigger: "hover",
    },
    {
      interaction: "Like Button",
      duration: "300ms",
      easing: "spring",
      trigger: "click",
    },
    {
      interaction: "Toggle Switch",
      duration: "250ms",
      easing: "spring",
      trigger: "click",
    },
    {
      interaction: "Input Focus",
      duration: "300ms",
      easing: "ease-in-out",
      trigger: "focus",
    },
    {
      interaction: "Card Tilt",
      duration: "150ms",
      easing: "spring",
      trigger: "mousemove",
    },
    {
      interaction: "Cursor Magnet",
      duration: "350ms",
      easing: "spring",
      trigger: "mousemove",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="motion-specs-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
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
            duration: shouldReduceMotion ? 0.2 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            id="motion-specs-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Motion specifications help define interaction behavior consistently
          </h2>
        </motion.div>

        {/* Motion specs table */}
        <motion.div
          className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.9 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Hidden caption for screen readers */}
              <caption className="sr-only">
                Motion specifications for the interaction demos
              </caption>

              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left text-sm font-normal text-cyan-200">
                    Interaction
                  </th>
                  <th className="p-4 text-left text-sm font-normal text-cyan-200">
                    Duration
                  </th>
                  <th className="p-4 text-left text-sm font-normal text-cyan-200">
                    Easing
                  </th>
                  <th className="p-4 text-left text-sm font-normal text-cyan-200">
                    Trigger
                  </th>
                </tr>
              </thead>

              <tbody>
                {specs.map((spec, index) => (
                  <motion.tr
                    key={spec.interaction}
                    className="border-b border-white/5 transition-colors hover:bg-white/5"
                    initial={
                      shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
                  >
                    <td className="p-4 text-sm text-white">{spec.interaction}</td>
                    <td className="p-4 text-sm text-white/80">{spec.duration}</td>
                    <td className="p-4 text-sm text-white/80">{spec.easing}</td>
                    <td className="p-4 text-sm text-white/80">{spec.trigger}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
