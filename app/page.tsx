"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RoseVideo } from "@/components/About/RoseVideo";


export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <HeroSection />
     

      <AboutSection />
      <MotionPrinciples />
    </main>
  );
}
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  const titleContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.25,
      },
    },
  };

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
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

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
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/35 to-[#0a0a0a]" />

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-8 lg:px-12">
        <div className="grid items-center gap-2 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, x: -120, filter: "blur(10px)" }}
            animate={
              isVisible
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : {}
            }
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mx-auto max-w-4xl px-2 py-24 lg:px-2">
              <motion.h1
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                variants={titleContainer}
                className="font-serif text-[32px] font-light uppercase leading-[1.3] tracking-[0.02em] text-white lg:text-[54px]"
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

          <motion.div
            className="relative flex min-h-[420px] items-center justify-center -ml-12 lg:-ml-20"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={
              isVisible
                ? { opacity: 1, scale: 1, x: 0 }
                : {}
            }
            transition={{
              duration: 1,
              delay: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <RoseVideo startAnimation={isVisible} />
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
    <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-12 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        

        <h2 className="font-serif text-3xl font-light leading-normal text-cyan-300 md:text-4xl">
          Dynamic websites use animation and interaction to improve user experience.
          Instead of static content, they respond to user actions, scrolling, and navigation.
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
        className="relative z-10 mt-16 grid gap-6 md:grid-cols-2"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
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
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-white/0 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-200">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}






function MotionPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Timing",
      description:
        "Smooth and natural motion depends on precise timing. Duration and rhythm define how the interface feels.",
    },
    {
      number: "02",
      title: "Easing",
      description:
        "Acceleration curves control the emotional quality of motion and make transitions feel more refined.",
    },
    {
      number: "03",
      title: "Anticipation",
      description:
        "Small pre-motion cues prepare the user for change and make interactions feel more alive and intentional.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
            Core principles
          </p>

          <h2 className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl">
            Motion principles help digital interfaces feel more controlled,
            readable, and emotionally refined.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
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
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {principle.description}
                </p>

                <motion.div
                  className="mt-8 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
                  initial={{ scaleX: 0.3, opacity: 0.5 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

