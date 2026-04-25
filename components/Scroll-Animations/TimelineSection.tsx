"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger for timeline item reveals.
gsap.registerPlugin(ScrollTrigger);

// Vertical timeline showing scroll-triggered reveal animation.
export default function TimelineSection() {
  const shouldReduceMotion = useReducedMotion();

  const events = [
    {
      year: "2010",
      title: "CSS Transitions",
      description: "Simple property-based motion for interface states",
    },
    {
      year: "2013",
      title: "CSS Animations",
      description: "Keyframes introduced more expressive visual sequences.",
    },
    {
      year: "2016",
      title: "GSAP & Libraries",
      description: "Animation tools enabled more advanced control and timing",
    },
    {
      year: "2020",
      title: "Motion APIs",
      description: "Native browser animation tools became more capable",
    },
    {
      year: "2024",
      title: "View Transitions",
      description: "Page transitions became smoother and more integrated",
    },
    {
      year: "2026",
      title: "Future",
      description: "Interfaces become more adaptive, contextual, and responsive",
    },
  ];

  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Skip scroll-linked animation for reduced motion users
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      eventRefs.current.forEach((eventRef, index) => {
        if (!eventRef) return;

        const isLeft = index % 2 === 0;

        // Reveal cards from alternating sides
        gsap.fromTo(
          eventRef,
          {
            x: isLeft ? -80 : 80,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: eventRef,
              start: "top 82%",
              end: "top 50%",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section className="py-24 sm:py-28" aria-labelledby="timeline-heading">
      <div className="mx-auto w-full max-w-360 px-6 sm:px-10 lg:px-12">
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
            id="timeline-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Timeline motion helps present progress, history, and structured
            sequences
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          {/* Decorative center line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/50 via-blue-400/40 to-transparent"
          />

          <div className="space-y-16 sm:space-y-20" role="list">
            {events.map((event, index) => (
              <div
                key={event.year}
                ref={(el) => {
                  eventRefs.current[index] = el;
                }}
                role="listitem"
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-[44%] ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <div className="text-sm text-cyan-200">{event.year}</div>
                    <h3 className="mt-2 text-xl text-white">{event.title}</h3>
                    <p className="mt-3 text-sm font-light leading-7 text-white/80">
                      {event.description}
                    </p>
                  </article>
                </div>

                {/* Decorative timeline dot */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#0a0a0a] bg-gradient-to-br from-cyan-300/80 to-blue-400/70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
