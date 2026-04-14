"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function LottieAnimations() {
  return (
    <main className="pt-32 pb-20 bg-[#0a0a0a]">
      <HeroSection />
      <LogoAnimation />
      <LoopAnimation />
      <HoverAnimation />
      <ScrollControlledAnimation />
      <CodeExamples />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="py-20">
      <div className="w-[1440px] mx-auto px-12 text-center">
        <motion.h1
          className="text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Vector Motion
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-white/70 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Lightweight, scalable animations using Motion library.
        </motion.p>

        {/* Large Hero Animation */}
        <motion.div
          className="relative w-64 h-64 mx-auto"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
        >
          {/* Animated Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-4 border-cyan-400/30 rounded-full"
              style={{
                scale: 1 - i * 0.2,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1 - i * 0.2, 1.2 - i * 0.2, 1 - i * 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Center Element */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function LogoAnimation() {
  const [animationState, setAnimationState] = useState<"appearing" | "moving" | "fading">("appearing");

  // Cycle through animation states
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationState("moving"), 2500);
    const timer2 = setTimeout(() => setAnimationState("fading"), 6000);
    const timer3 = setTimeout(() => setAnimationState("appearing"), 8500);
    
    const interval = setInterval(() => {
      setAnimationState("appearing");
      setTimeout(() => setAnimationState("moving"), 2500);
      setTimeout(() => setAnimationState("fading"), 6000);
    }, 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, []);

  const letters = "DYNAMIC VISION".split("");

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="w-[1440px] mx-auto px-12">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Animated Logo Reveal
            </span>
          </motion.h2>
          <motion.p
            className="text-white/60 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Watch the logo appear, move, and fade in a continuous loop
          </motion.p>
        </div>

        {/* Main Animation Container */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Background particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Glowing orbs */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo Container */}
          <div className="relative z-10">
            {/* Text Lines */}
            <div className="space-y-4">
              {/* DYNAMIC */}
              <div className="flex justify-center gap-2">
                {letters.slice(0, 7).map((letter, i) => (
                  <motion.div
                    key={`dynamic-${i}`}
                    className="relative"
                    initial={{ opacity: 0, y: -50, rotateX: -90 }}
                    animate={
                      animationState === "appearing"
                        ? {
                            opacity: [0, 1],
                            y: [-50, 0],
                            rotateX: [-90, 0],
                          }
                        : animationState === "moving"
                        ? {
                            opacity: 1,
                            y: [0, -10, 0],
                            rotateY: [0, 360],
                            scale: [1, 1.1, 1],
                          }
                        : {
                            opacity: [1, 0],
                            y: [0, 50],
                            rotateX: [0, 90],
                            scale: [1, 0.8],
                          }
                    }
                    transition={{
                      duration: animationState === "appearing" ? 0.5 : animationState === "moving" ? 2 : 0.8,
                      delay: animationState === "appearing" ? i * 0.1 : animationState === "moving" ? i * 0.05 : i * 0.05,
                      repeat: animationState === "moving" ? Infinity : 0,
                      ease: "easeOut",
                    }}
                  >
                    <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                      {letter}
                    </span>
                    
                    {/* Letter glow */}
                    <motion.div
                      className="absolute inset-0 bg-cyan-400/40 blur-xl"
                      animate={{
                        opacity: animationState === "moving" ? [0.2, 0.6, 0.2] : 0,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* VISION */}
              <div className="flex justify-center gap-2">
                {letters.slice(8).map((letter, i) => (
                  <motion.div
                    key={`vision-${i}`}
                    className="relative"
                    initial={{ opacity: 0, y: 50, rotateX: 90 }}
                    animate={
                      animationState === "appearing"
                        ? {
                            opacity: [0, 1],
                            y: [50, 0],
                            rotateX: [90, 0],
                          }
                        : animationState === "moving"
                        ? {
                            opacity: 1,
                            y: [0, 10, 0],
                            rotateY: [0, -360],
                            scale: [1, 1.1, 1],
                          }
                        : {
                            opacity: [1, 0],
                            y: [0, -50],
                            rotateX: [0, -90],
                            scale: [1, 0.8],
                          }
                    }
                    transition={{
                      duration: animationState === "appearing" ? 0.5 : animationState === "moving" ? 2 : 0.8,
                      delay: animationState === "appearing" ? (i + 7) * 0.1 : animationState === "moving" ? i * 0.05 : i * 0.05,
                      repeat: animationState === "moving" ? Infinity : 0,
                      ease: "easeOut",
                    }}
                  >
                    <span className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      {letter}
                    </span>
                    
                    {/* Letter glow */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500/40 blur-xl"
                      animate={{
                        opacity: animationState === "moving" ? [0.2, 0.6, 0.2] : 0,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -left-20 top-1/2 -translate-y-1/2"
              animate={
                animationState === "appearing"
                  ? { scale: [0, 1], rotate: [0, 180] }
                  : animationState === "moving"
                  ? { rotate: [0, 360], x: [-20, 20, -20] }
                  : { scale: [1, 0], opacity: [1, 0] }
              }
              transition={{
                duration: animationState === "appearing" ? 1 : animationState === "moving" ? 3 : 0.8,
                repeat: animationState === "moving" ? Infinity : 0,
                ease: "linear",
              }}
            >
              <div className="w-12 h-12 border-4 border-cyan-400 rounded-lg" />
            </motion.div>

            <motion.div
              className="absolute -right-20 top-1/2 -translate-y-1/2"
              animate={
                animationState === "appearing"
                  ? { scale: [0, 1], rotate: [0, -180] }
                  : animationState === "moving"
                  ? { rotate: [0, -360], x: [20, -20, 20] }
                  : { scale: [1, 0], opacity: [1, 0] }
              }
              transition={{
                duration: animationState === "appearing" ? 1 : animationState === "moving" ? 3 : 0.8,
                repeat: animationState === "moving" ? Infinity : 0,
                ease: "linear",
              }}
            >
              <div className="w-12 h-12 border-4 border-purple-500 rounded-full" />
            </motion.div>

            {/* Bottom accent line */}
            <motion.div
              className="mt-8 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={
                animationState === "appearing"
                  ? { scaleX: [0, 1] }
                  : animationState === "moving"
                  ? { scaleX: 1, opacity: [0.5, 1, 0.5] }
                  : { scaleX: [1, 0], opacity: [1, 0] }
              }
              transition={{
                duration: animationState === "appearing" ? 1.5 : animationState === "moving" ? 2 : 0.8,
                delay: animationState === "appearing" ? 1.4 : 0,
                repeat: animationState === "moving" ? Infinity : 0,
              }}
            />
          </div>

          {/* Animation State Indicator */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-2 h-2 rounded-full bg-cyan-400"
                animate={{
                  scale: animationState === "appearing" ? [1, 1.5, 1] : 1,
                  opacity: animationState === "appearing" ? 1 : 0.3,
                }}
                transition={{ duration: 0.5, repeat: animationState === "appearing" ? Infinity : 0 }}
              />
              <span className="text-xs text-white/50 font-medium">
                {animationState === "appearing" && "Appearing"}
                {animationState === "moving" && "Moving"}
                {animationState === "fading" && "Fading"}
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-purple-500"
                animate={{
                  scale: animationState === "fading" ? [1, 1.5, 1] : 1,
                  opacity: animationState === "fading" ? 1 : 0.3,
                }}
                transition={{ duration: 0.5, repeat: animationState === "fading" ? Infinity : 0 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LoopAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="py-20">
      <div className="w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Loop Animation</h2>
            <p className="text-white/70 mb-6">
              Infinite animations that run continuously in the background,
              perfect for loading states or ambient motion.
            </p>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <>
                  <Pause size={20} />
                  Pause
                </>
              ) : (
                <>
                  <Play size={20} />
                  Play
                </>
              )}
            </button>
          </div>

          {/* Animation Demo */}
          <div className="relative aspect-square bg-black/40 rounded-3xl border border-white/10 overflow-hidden">
            {/* Orbiting Elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full"
                style={{
                  transformOrigin: "0 0",
                }}
                animate={
                  isPlaying
                    ? {
                        rotate: [0, 360],
                        x: Math.cos((i * Math.PI * 2) / 5) * 100,
                        y: Math.sin((i * Math.PI * 2) / 5) * 100,
                      }
                    : {}
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Center Star */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={
                isPlaying
                  ? {
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HoverAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20">
      <div className="w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Animation Demo */}
          <div
            className="relative aspect-square bg-black/40 rounded-3xl border border-white/10 overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated Icon */}
              <motion.div
                className="relative"
                animate={
                  isHovered
                    ? {
                        scale: 1.2,
                        rotate: 180,
                      }
                    : {
                        scale: 1,
                        rotate: 0,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {/* Heart Shape made with circles */}
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <motion.path
                    d="M60 100 C60 100, 20 70, 20 45 C20 30, 30 20, 45 20 C52 20, 58 24, 60 30 C62 24, 68 20, 75 20 C90 20, 100 30, 100 45 C100 70, 60 100, 60 100"
                    fill="url(#gradient)"
                    animate={
                      isHovered
                        ? {
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Particles on hover */}
                {isHovered &&
                  [...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: Math.cos((i * Math.PI * 2) / 8) * 60,
                        y: Math.sin((i * Math.PI * 2) / 8) * 60,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  ))}
              </motion.div>
            </div>

            {/* Hover text */}
            <motion.div
              className="absolute bottom-8 left-0 right-0 text-center text-white/50"
              animate={{ opacity: isHovered ? 0 : 1 }}
            >
              Hover to animate
            </motion.div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">Hover-triggered</h2>
            <p className="text-white/70 mb-6">
              Animations that play only when the user interacts with an
              element, providing immediate feedback and delight.
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-white/60">
                <span className="text-cyan-400 font-mono">Tip:</span> Use
                hover animations sparingly on important interactive elements
                to guide user attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollControlledAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Update progress state when scrollYProgress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(Math.round(latest * 100));
  });

  return (
    <section ref={ref} className="relative py-20 min-h-screen">
      <div className="w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Scroll-controlled</h2>
            <p className="text-white/70 mb-6">
              Animations that respond directly to scroll position, creating
              immersive storytelling experiences.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Progress</span>
                  <span className="text-sm text-cyan-400 font-mono">
                    {progress}%
                  </span>
                </div>
                <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                  {/* <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    style={{ scaleX: scrollYProgress }}
                    transformOrigin="left"
                  /> */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    style={{
                      scaleX: scrollYProgress,
                      transformOrigin: "left"
                    }}
                  />


                </div>
              </div>
            </div>
          </div>

          {/* Animation Demo */}
          <motion.div
            className="relative aspect-square bg-black/40 rounded-3xl border border-white/10 overflow-hidden"
            style={{ opacity }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-40 h-40"
                style={{ rotate, scale }}
              >
                {/* Rotating squares */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 border-4 rounded-2xl"
                    style={{
                      rotate: i * 45,
                      borderColor: "#06b6d4",
                    }}
                    animate={{
                      borderColor: ["#06b6d4", "#a855f7", "#06b6d4"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}

                {/* Center circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full"
                    style={{ scale }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CodeExamples() {
  const examples = [
    {
      title: "Loop Animation",
      code: `<motion.div
  animate={{
    rotate: [0, 360],
    scale: [1, 1.2, 1]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "linear"
  }}
>
  {content}
</motion.div>`,
    },
    {
      title: "Hover-triggered",
      code: `const [isHovered, setIsHovered] = 
  useState(false);

<motion.div
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  animate={isHovered ? {
    scale: 1.2,
    rotate: 180
  } : {
    scale: 1,
    rotate: 0
  }}
  transition={{
    type: "spring",
    stiffness: 300
  }}
>
  {content}
</motion.div>`,
    },
    {
      title: "Scroll-controlled",
      code: `const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});

const rotate = useTransform(
  scrollYProgress,
  [0, 1],
  [0, 360]
);

<motion.div style={{ rotate }}>
  {content}
</motion.div>`,
    },
  ];

  return (
    <section className="py-20">
      <div className="w-[1440px] mx-auto px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Code Examples</h2>
        <div className="grid grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              className="p-6 bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-cyan-400">
                {example.title}
              </h3>
              <pre className="text-sm text-white/70 overflow-x-auto">
                <code>{example.code}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}