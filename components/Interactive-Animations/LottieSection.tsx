"use client";

import { motion, useReducedMotion } from "framer-motion";
import Lottie from "lottie-react";
import lottieAnimation from "@/public/images/an3.json";
import type { CodeExample } from "@/Types/types";
import InfoCard from "./InfoCard";

// Lottie explanation and live animation preview.
export default function LottieSection({ onOpenCode }: { onOpenCode: (example: CodeExample) => void }) {
  const shouldReduceMotion = useReducedMotion();

  const example = {
    title: "Lottie Animation",
    description: "A JSON-based animation rendered with lottie-react",
    code: `import Lottie from "lottie-react";
import lottieAnimation from "@/public/images/an3.json";

<Lottie
  animationData={lottieAnimation}
  loop={true}
  autoplay={true}
/>`,
  };

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="lottie-heading"
      id="Lottie"
    >
      {/* Decorative glow */}
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
            duration: shouldReduceMotion ? 0.2 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            id="lottie-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Lottie animations are useful for polished, lightweight motion assets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-light leading-8 text-white/80 sm:text-lg">
            Lottie is often used for icons, loading states, onboarding visuals,
            and playful UI feedback. It gives designers more control over
            complex motion while keeping implementation lightweight
          </p>
        </motion.div>

        {/* Main section layout */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 24, filter: "blur(8px)" }
            }
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Demo card heading */}
            <h3 className="text-xl font-normal text-white">
              Lottie Animation
            </h3>

            {/* Decorative divider */}
            <div
              aria-hidden="true"
              className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
            />

            <p className="mt-4 font-light leading-7 text-white/80">
              This example shows how a real JSON-based animation can be embedded
              directly inside the interface using{" "}
              <span className="text-white/95">lottie-react</span>
            </p>

            {/* Animation preview */}
            <div className="mt-8 flex min-h-[320px] items-center justify-center rounded-[28px] border border-white/10 bg-black/20 p-6">
              <div
                className="w-full max-w-[260px]"
                aria-label="Lottie animation preview"
              >
                <Lottie
                  animationData={lottieAnimation}
                  loop={!shouldReduceMotion}
                  autoplay
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenCode(example)}
              className="mt-6 w-full cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-fit sm:px-5"
            >
              Code example
            </button>
          </motion.div>

          {/* Supporting info cards */}
          <div className="grid gap-6">
            <InfoCard
              title="What it is"
              text="Lottie renders exported JSON animation data from tools like After Effects. It is ideal for crisp, scalable interface motion"
            />
            <InfoCard
              title="Where to use it"
              text="Use it in onboarding, empty states, icon feedback, loaders, success messages, and small branded interactions"
            />
            <InfoCard
              title="What to remember"
              text="Keep files small, avoid overusing complex scenes, and use Lottie where vector motion gives more value than CSS or simple transforms"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
