"use client";

import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">

      <FeaturedDemo />
      <MotionPrinciples/>
    

    </main>
  );
}

function FeaturedDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#573d60]/40 to-[#0a0a0a]" />
      
      <div className=' max-w-360 w-full mx-auto px-12 relative z-10'>
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <h1 className="text-text-5xl uppercase tracking-[.25em] text-indigo-300">About Project</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
          Watch how animation improves usability, guides attention,
          and makes interfaces feel more interactive and understandable.
        </p>
      </section>
           
          </motion.div>

          {/* Demo */}
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="sticky top-32">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 bg-linear-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl border border-white/10 backdrop-blur-lg"
                  style={{
                    transformOrigin: "center",
                  }}
                  animate={
                    isVisible
                      ? {
                          rotateZ: [0, (i - 2) * 5],
                          scale: [0.8, 1 - i * 0.05],
                          y: [0, i * 20],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



function MotionPrinciples() {
  const principles = [
    {
      title: "Timing",
      description: "Smooth and natural motion depends on precise timing.",
      color: "from-cyan-400 to-purple-500",
    },
    {
      title: "Easing",
      description: "Acceleration curves define how motion feels.",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Anticipation",
      description: "Small pre‑motion cues make animations feel alive.",
      color: "from-pink-400 to-cyan-400",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-360 w-full mx-auto px-12 ">
        <motion.h2
          className="text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Motion Principles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Animated Graph */}
              <div className="mb-6 h-32 relative overflow-hidden rounded-xl bg-black/20">
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${principle.color}`}
                  animate={{
                    scaleX: [0, 1, 0],
                    y: [0, -120, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease:
                      index === 0
                        ? "linear"
                        : index === 1
                        ? "easeInOut"
                        : "anticipate",
                  }}
                />
              </div>

              <h3 className="text-2xl text-white/75 font-light mb-3">{principle.title}</h3>
              <p className="text-white/75">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



