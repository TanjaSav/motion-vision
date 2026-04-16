"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RoseVideo } from "@/components/About/RoseVideo";

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] pt-12 sm:pt-16">
      <HeroSection />
      <AboutSection />
      <MotionPrinciples />
    </main>
  );
}

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  // Container animation for staggered title lines
  const titleContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  // Left-to-right line animation
  const leftLine = {
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

  // Right-to-left line animation
  const rightLine = {
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
    // Track section visibility to replay animations when scrolling back
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden ">
      {/* Hero background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]" />

      {/* Shared page container */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid items-center gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, x: -120, filter: "blur(10px)" }}
            animate={
              isVisible
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : { opacity: 0, x: -120, filter: "blur(10px)" }
            }
            transition={{
              duration: 1.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mx-auto max-w-4xl px-0 py-12 sm:py-16 lg:px-2 lg:py-20">
              <motion.h1
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                variants={titleContainer}
                className="font-serif text-[32px] font-light uppercase leading-[1.3] tracking-[0.02em] text-white sm:text-[40px] lg:text-[54px]"
              >
                <div className="overflow-hidden">
                  <motion.span variants={leftLine} className="block whitespace-nowrap">
                    Modern design
                  </motion.span>
                </div>

                <div className="overflow-hidden">
                  <motion.span variants={rightLine} className="block whitespace-nowrap">
                    come alive
                  </motion.span>
                </div>

                <div className="overflow-hidden">
                  <motion.span variants={leftLine} className="block whitespace-nowrap">
                    with animation
                  </motion.span>
                </div>
              </motion.h1>
            </div>
          </motion.div>

          {/* Visual block */}
          <motion.div
            className="relative flex min-h-[320px] items-center justify-center -ml-4 sm:min-h-[380px] lg:min-h-[420px] lg:-ml-16"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={
              isVisible
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.9, x: 40 }
            }
            transition={{
              duration: 1.2,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <RoseVideo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const cards = [
    {
      title: "Why animations matter",
      text: "Animations help users understand interface behavior, guide attention, and provide feedback.",
    },
    {
      title: "When to use them",
      text: "Use animations for transitions, loading states, interactions, and storytelling.",
    },
    {
      title: "Technologies",
      text: "React, Next.js, GSAP, Framer Motion and Lottie provide powerful tools for building animations.",
    },
    {
      title: "Best practices",
      text: "Keep animations subtle, fast, and meaningful. Avoid overloading the UI.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Soft section glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]" />

      {/* Shared page container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="font-serif text-3xl font-light leading-normal text-white md:text-4xl">
            Dynamic websites use animation and interaction to improve user experience.
            Instead of static content, they respond to user actions, scrolling, and navigation.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.15,
              },
            },
          }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {cards.map((card, index) => (
            <CardReveal key={card.title}>
              <h3 className="text-xl font-normal text-white">
                {card.title}
              </h3>

              {/* Bottom accent line */}
              <motion.div
                className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
                initial={{ scaleX: 0.3, opacity: 0.5 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1.4,
                  delay: 0.2 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <p className="mt-4 font-light leading-7 text-white/95">
                {card.text}
              </p>
            </CardReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MotionPrinciples() {
  const principles = [
    {
      title: "Timing",
      description:
        "Smooth and natural motion depends on precise timing. Duration and rhythm define how the interface feels.",
    },
    {
      title: "Easing",
      description:
        "Acceleration curves control the emotional quality of motion and make transitions feel more refined.",
    },
    {
      title: "Anticipation",
      description:
        "Small pre-motion cues prepare the user for change and make interactions feel more alive and intentional.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Soft section glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]" />

      {/* Shared page container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl">
            Motion principles help digital interfaces feel more controlled,
            readable, and emotionally refined.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.15,
              },
            },
          }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((principle, index) => (
            <CardReveal key={principle.title}>
              <h3 className="text-xl font-normal text-white">
                {principle.title}
              </h3>

              {/* Bottom accent line */}
              <motion.div
                className="mt-8 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
                initial={{ scaleX: 0.3, opacity: 0.5 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1.4,
                  delay: 0.2 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <p className="mt-4 font-light leading-7 text-white/95">
                {principle.description}
              </p>
            </CardReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CardReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          filter: "blur(10px)",
        },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
    >
      {/* Top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      {/* Hover wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-white/0 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}