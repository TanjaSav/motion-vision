"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CodeExample } from "@/Types/types";
import HoverButton from "./demos/HoverButton";
import LikeButton from "./demos/LikeButton";
import ToggleSwitch from "./demos/ToggleSwitch";
import InputFocus from "./demos/InputFocus";
import CardHoverTilt from "./demos/CardHoverTilt";
import CursorMagnet from "./demos/CursorMagnet";

// Grid that groups all micro-interaction demos.
export default function InteractiveDemosSection({ onOpenCode }: { onOpenCode: (example: CodeExample) => void }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="interactive-demos-heading"
      id="MicroInteractions"
    >
      {/* Decorative section glow */}
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
            id="interactive-demos-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Micro-interactions create feedback, guidance, and emotional
            response
          </h2>
        </motion.div>

        {/* Interactive demo grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <HoverButton onOpenCode={onOpenCode} />
          <LikeButton onOpenCode={onOpenCode} />
          <ToggleSwitch onOpenCode={onOpenCode} />
          <InputFocus onOpenCode={onOpenCode} />
          <CardHoverTilt onOpenCode={onOpenCode} />
          <CursorMagnet onOpenCode={onOpenCode} />
        </div>
      </div>
    </section>
  );
}
