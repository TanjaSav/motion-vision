"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RoseVideo } from "@/components/Home/RoseVideo";

// Hero block with viewport-aware entrance animation.
export default function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);

  // Respect the user's reduced motion preference
  const shouldReduceMotion = useReducedMotion();

  // Start visible when motion is reduced to avoid effect-based state sync
  const [isVisible, setIsVisible] = useState(shouldReduceMotion);

  // Stagger container for title lines
  const titleContainer = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.4,
            delayChildren: 0.2,
          },
        },
      };

  // Left-to-right title line animation
  const leftLine = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 0.2 },
        },
      }
    : {
        hidden: {
          opacity: 0,
          x: -140,
          filter: "blur(12px)",
        },
        show: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: {
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      };

  // Right-to-left title line animation
  const rightLine = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 0.2 },
        },
      }
    : {
        hidden: {
          opacity: 0,
          x: 140,
          filter: "blur(12px)",
        },
        show: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: {
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      };

  useEffect(() => {
    // Skip viewport tracking when reduced motion is enabled
    if (shouldReduceMotion) return;

    // Replay animation when the section enters or leaves the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid items-center gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Text block */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: -120, filter: "blur(10px)" }
            }
            animate={
              isVisible
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: -120, filter: "blur(10px)" }
            }
            transition={{
              duration: shouldReduceMotion ? 0.2 : 1.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mx-auto max-w-4xl px-0 py-12 sm:py-16 lg:px-2 lg:py-20">
              <motion.h1
                id="hero-heading"
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                variants={titleContainer}
                className="font-serif text-[32px] font-light uppercase leading-[1.3] tracking-[0.02em] text-white sm:text-[40px] lg:text-[54px]"
              >
                <div className="overflow-hidden">
                  <motion.span
                    variants={leftLine}
                    className="block whitespace-nowrap"
                  >
                    Modern design
                  </motion.span>
                </div>

                <div className="overflow-hidden">
                  <motion.span
                    variants={rightLine}
                    className="block whitespace-nowrap"
                  >
                    come <span className="text-cyan-200">alive</span>
                  </motion.span>
                </div>

                <div className="overflow-hidden">
                  <motion.span
                    variants={leftLine}
                    className="block whitespace-nowrap"
                  >
                    with animation
                  </motion.span>
                </div>
              </motion.h1>
            </div>
          </motion.div>

          {/* Decorative visual block */}
          <motion.div
            className="relative flex min-h-[320px] items-center justify-center -ml-4 sm:min-h-[380px] lg:min-h-[420px] lg:-ml-16"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.9, x: 40 }
            }
            animate={
              isVisible
                ? { opacity: 1, scale: 1, x: 0 }
                : shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.9, x: 40 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.2 : 1.2,
              delay: shouldReduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Decorative preview only */}
            <div aria-label="Decorative animation preview">
              <RoseVideo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
