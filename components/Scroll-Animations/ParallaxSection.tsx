"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger for this parallax component.
gsap.registerPlugin(ScrollTrigger);

// Layered parallax block driven by scroll position.
export default function ParallaxSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerRef = useRef<HTMLElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable parallax motion for users who prefer reduced motion
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      // Fast background glow layer
      gsap.to(layer1Ref.current, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Geometric layer with rotation
      gsap.to(layer3Ref.current, {
        yPercent: 18,
        rotate: 90,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Floating foreground accents
      gsap.to(layer4Ref.current, {
        yPercent: 10,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Main text moves the least
      gsap.to(textRef.current, {
        yPercent: 8,
        opacity: 0.45,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      ref={containerRef}
      className="relative h-[130vh] overflow-hidden"
      aria-labelledby="parallax-heading"
    >
      {/* Layer 1: blurred background glows */}
      <div
        ref={layer1Ref}
        aria-hidden="true"
        className="absolute inset-0 will-change-transform"
      >
        <div className="absolute left-[8%] top-[14%] h-[320px] w-[320px] rounded-full bg-cyan-400/16 blur-3xl" />
        <div className="absolute right-[10%] top-[36%] h-[420px] w-[420px] rounded-full bg-blue-500/16 blur-3xl" />
        <div className="absolute bottom-[18%] left-[28%] h-[280px] w-[280px] rounded-full bg-cyan-300/12 blur-3xl" />
      </div>

      {/* Layer 3: geometric accents */}
      <div
        ref={layer3Ref}
        aria-hidden="true"
        className="absolute inset-0 will-change-transform"
      >
        <div className="absolute left-[18%] top-[25%] h-24 w-24 rotate-45 border border-cyan-300/30 bg-cyan-300/5" />
        <div className="absolute right-[24%] top-[60%] h-20 w-20 rounded-2xl border border-blue-300/25 bg-blue-300/10 backdrop-blur-md" />
        <div className="absolute bottom-[28%] left-[46%] h-28 w-28 rounded-full border border-cyan-300/20 bg-cyan-300/5" />
      </div>

      {/* Layer 4: floating accent elements */}
      <div
        ref={layer4Ref}
        aria-hidden="true"
        className="absolute inset-0 will-change-transform"
      >
        <div className="absolute left-[14%] top-[42%] h-14 w-14 rounded-full border border-white/15 bg-cyan-300/15 backdrop-blur-lg" />
        <div className="absolute right-[18%] top-[48%] h-16 w-16 rounded-full border border-white/15 bg-blue-300/15 backdrop-blur-lg" />
        <div className="absolute bottom-[38%] right-[38%] h-10 w-10 rounded-full border border-white/15 bg-cyan-200/15 backdrop-blur-lg" />
      </div>

      {/* Main parallax content */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 text-center sm:px-10 lg:px-12">
          <motion.h2
            id="parallax-heading"
            className="font-serif text-4xl font-light leading-[1.25] text-white sm:text-5xl lg:text-6xl"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.9 }}
          >
            Parallax adds
            <br />
            visual depth
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base font-light leading-8 text-white/80 sm:text-lg"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.15,
            }}
          >
            Multiple layers moving at different speeds create a stronger
            spatial feeling while the user scrolls
          </motion.p>
        </div>
      </div>
    </section>
  );
}



