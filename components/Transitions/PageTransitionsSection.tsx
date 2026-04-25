"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { TransitionType } from "@/Types/types";
import FadeTransition from "./FadeTransition";
import SlideTransition from "./SlideTransition";
import ScaleTransition from "./ScaleTransition";
import CodeExamples from "./CodeExamples";

// Interactive page-transition preview with selector and page navigation.
export default function PageTransitions() {
  const shouldReduceMotion = useReducedMotion();
  const [currentDemo, setCurrentDemo] = useState<TransitionType>("fade");
  const [page, setPage] = useState(1);

  return (
    <main className="bg-[#0a0a0a] pt-16 sm:pt-20">
      <section
        className="relative overflow-hidden py-16 sm:py-24 lg:py-28"
        aria-labelledby="page-transitions-heading"
      >
        {/* Decorative background glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]"
        />

        <div className="relative z-10 mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-12">
          {/* Hero content */}
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
              id="page-transitions-heading"
              className="font-serif text-3xl font-light leading-[1.2] text-white sm:text-5xl lg:text-6xl"
            >
              Page transitions shape
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              the flow between views
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
              Smooth transitions make navigation feel more connected, more
              readable, and more intentional
            </p>
          </motion.div>

          <div className="mx-auto mt-10 w-full max-w-6xl sm:mt-14">
            {/* Demo preview container */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl sm:rounded-3xl">
              <div
                className="relative min-h-55 sm:min-h-105 lg:min-h-155"
                aria-live="polite"
              >
                <AnimatePresence mode="wait">
                  {currentDemo === "fade" && (
                    <FadeTransition
                      key={`${currentDemo}-${page}`}
                      page={page}
                    />
                  )}
                  {currentDemo === "slide" && (
                    <SlideTransition
                      key={`${currentDemo}-${page}`}
                      page={page}
                    />
                  )}
                  {currentDemo === "scale" && (
                    <ScaleTransition
                      key={`${currentDemo}-${page}`}
                      page={page}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Transition selector */}
            <motion.div
              role="group"
              aria-label="Transition type selector"
              className="mt-6 grid grid-cols-2 gap-2 sm:mt-12 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 20, filter: "blur(6px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.9,
                delay: shouldReduceMotion ? 0 : 0.15,
              }}
            >
              {(["fade", "slide", "scale"] as TransitionType[]).map((type) => {
                const isActive = currentDemo === type;

                return (
                  <button
                    key={type}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => {
                      setCurrentDemo(type);
                      setPage(1);
                    }}
                    className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm font-light capitalize transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:px-6 sm:py-3 sm:text-base ${
                      isActive
                        ? "border-cyan-300 bg-white/10 text-white"
                        : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {type} transition
                  </button>
                );
              })}
            </motion.div>

            {/* Description and page navigation */}
            <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center text-center sm:mt-10">
              <p className="max-w-xl px-2 text-sm font-light leading-7 text-white/80 sm:mt-6 sm:px-0 sm:text-base">
                {currentDemo === "fade" &&
                  "A classic transition where one view disappears smoothly while the next one fades into focus"}
                {currentDemo === "slide" &&
                  "The current content moves out while the next view enters from the opposite side, creating directional flow"}
                {currentDemo === "scale" &&
                  "The outgoing page contracts while the next page grows into place, creating a compact zoom effect"}
              </p>

              <button
                type="button"
                onClick={() => setPage(page === 3 ? 1 : page + 1)}
                className="mt-6 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:mt-8 sm:px-6 sm:text-base"
                aria-label={`Show next page preview. Current page is ${page}`}
              >
                Next page
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <CodeExamples />
        </div>
      </section>
    </main>
  );
}
