"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const animationTypes = [
  {
    title: "Micro-interactions",
    description:
      "Small animations that react to user actions: hover, click, toggle, form focus, loading and success states",
    href: "/Interactive-Animations#MicroInteractions",
    side: "left",
  },
  {
    title: "Lottie animations",
    description:
      "Lightweight vector animations used for icons, loaders, onboarding screens, empty states and visual feedback",
    href: "/Interactive-Animations#Lottie",
    side: "right",
  },
  {
    title: "Scroll animations",
    description:
      "Animations that appear while scrolling: reveal effects, parallax, sticky blocks and timeline sections",
    href: "/Scroll-Animations",
    side: "left",
  },
  {
    title: "Page transitions",
    description:
      "Smooth animated changes between pages that make navigation feel more natural and connected",
    href: "/Transitions",
    side: "right",
  },
] as const;

export default function AnimationTypesSection() {
  const shouldReduceMotion = useReducedMotion();

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-360 px-6 text-white sm:px-10 lg:px-20">
        <h2 className="font-serif text-3xl font-light text-white md:text-4xl mb-20 text-center">
          The Core Types of UI Animation
        </h2>

        <div className="space-y-24">
          {animationTypes.map((item, index) => {
            const isLeft = item.side === "left";

            // Desktop animation → к центру
            const desktopX = isLeft ? -160 : 160;

            // Mobile animation → снизу вверх
            const mobileY = 60;

            return (
              <motion.div
                key={item.title}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : isMobile
                    ? {
                        opacity: 0,
                        y: mobileY,
                        filter: "blur(10px)",
                      }
                    : {
                        opacity: 0,
                        x: desktopX,
                        filter: "blur(10px)",
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                  duration: shouldReduceMotion ? 0.25 : 0.9,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <Link
                  href={item.href}
                  className="group block w-full max-w-md rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition duration-500 hover:border-white/20 hover:bg-white/6"
                >
                  <h3 className="text-xl font-normal text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-light leading-7 text-white/95">
                    {item.description}
                  </p>

                  <div className="mt-5 text-cyan-300 transition duration-300 group-hover:translate-x-2 group-hover:text-white">
                    →
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}