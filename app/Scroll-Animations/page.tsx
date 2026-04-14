"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  return (
    <main className="pt-20 bg-[#0a0a0a]">
      <Header />
      <ParallaxSection />
      <TextRevealSection />
      <StickySection />
      <TimelineSection />
      <CodeExamples />
    </main>
  );
}

function Header() {
  return (
    <section className="py-32 text-center">
      <div className="w-[1440px] mx-auto px-12">
        <motion.h1
          className="text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Scroll Animations
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Discover the power of scroll-triggered motion.
        </motion.p>
      </div>
    </section>
  );
}

function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Layer 1 - Fastest (Background circles)
      gsap.to(layer1Ref.current, {
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Layer 2 - Medium-fast (Gradient overlay)
      gsap.to(layer2Ref.current, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Layer 3 - Medium (Geometric shapes)
      gsap.to(layer3Ref.current, {
        yPercent: 25,
        rotate: 180,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Layer 4 - Slow (Floating elements)
      gsap.to(layer4Ref.current, {
        yPercent: 15,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Text - Slowest
      gsap.to(textRef.current, {
        yPercent: 10,
        opacity: 0.3,
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
  }, []);

  return (
    <section ref={containerRef} className="relative h-[150vh] overflow-hidden">
      {/* Layer 1 - Background Circles (Fastest) */}
      <div ref={layer1Ref} className="absolute inset-0 will-change-transform">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[15%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[30%] w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Layer 2 - Gradient Overlay (Medium-fast) */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-cyan-900/20 to-transparent will-change-transform"
      />

      {/* Layer 3 - Geometric Shapes (Medium) */}
      <div ref={layer3Ref} className="absolute inset-0 will-change-transform">
        <div className="absolute top-[25%] left-[20%] w-32 h-32 border-2 border-cyan-400/20 rotate-45" />
        <div className="absolute top-[60%] right-[25%] w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg" />
        <div className="absolute bottom-[30%] left-[45%] w-40 h-40 border border-purple-400/20 rounded-full" />
        <div className="absolute top-[15%] right-[10%] w-20 h-20 bg-cyan-500/10 backdrop-blur-sm" />
      </div>

      {/* Layer 4 - Floating Elements (Slow) */}
      <div ref={layer4Ref} className="absolute inset-0 will-change-transform">
        <div className="absolute top-[35%] left-[15%] w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-purple-500/30 rounded-full backdrop-blur-lg border border-white/10" />
        <div className="absolute top-[50%] right-[20%] w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full backdrop-blur-lg border border-white/10" />
        <div className="absolute bottom-[40%] right-[40%] w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full backdrop-blur-lg border border-white/10" />
      </div>

      {/* Text Content (Slowest) */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
      >
        <div className="text-center z-10">
          <motion.h2
            className="text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Parallax
            </span>
            <br />
            <span className="text-white">Depth Effect</span>
          </motion.h2>
          <motion.p
            className="text-2xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            5 layers moving at different speeds create depth and immersion
          </motion.p>
          <motion.div
            className="mt-8 flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm">
              <span className="text-cyan-400">Layer 1:</span> 60% speed
            </div>
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm">
              <span className="text-purple-400">Layer 3:</span> 25% + rotation
            </div>
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm">
              <span className="text-pink-400">Layer 5:</span> 10% + fade
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="text-sm text-white/50">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function TextRevealSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-32">
      <div className="w-[1440px] mx-auto px-12">
        <motion.div
          className="text-center"
          style={{ opacity, scale }}
        >
          <h2 className="text-5xl font-bold mb-12">Scroll-triggered Fade</h2>
          <motion.h3
            className="text-8xl font-bold"
            style={{
              backgroundImage: "linear-gradient(to right, #06b6d4, #a855f7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Motion creates meaning.
          </motion.h3>
          <motion.p
            className="text-2xl text-white/60 mt-8"
            style={{ opacity }}
          >
            Every animation tells a story and guides the user's attention.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function StickySection() {
  const sections = [
    {
      title: "Step One",
      description: "Define your animation goals and identify key moments",
    },
    {
      title: "Step Two",
      description: "Choose appropriate easing and timing for natural motion",
    },
    {
      title: "Step Three",
      description: "Test across devices and optimize performance",
    },
  ];

  return (
    <section className="relative py-32">
      <div className="w-[1440px] mx-auto px-12">
        <motion.h2
          className="text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Scroll Reveal
        </motion.h2>
        
        <div className="grid grid-cols-2 gap-20">
          {/* Sticky Image */}
          <div className="relative">
            <div className="sticky top-32">
              <motion.div
                className="aspect-square bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-3xl border border-white/20 backdrop-blur-lg overflow-hidden"
                whileInView={{ scale: [0.9, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scrolling Text */}
          <div className="space-y-32">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-4xl font-bold mb-4">{section.title}</h3>
                <p className="text-xl text-white/70">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const events = [
    { year: "2010", title: "CSS Transitions", description: "Simple property animations" },
    { year: "2013", title: "CSS Animations", description: "Keyframe-based motion" },
    { year: "2016", title: "GSAP & Libraries", description: "Advanced animation control" },
    { year: "2020", title: "Motion APIs", description: "Web Animations API standard" },
    { year: "2024", title: "View Transitions", description: "Native page transitions" },
    { year: "2026", title: "Future", description: "AI-driven adaptive motion" },
  ];

  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      eventRefs.current.forEach((eventRef, index) => {
        if (!eventRef) return;

        const isLeft = index % 2 === 0;

        gsap.fromTo(
          eventRef,
          {
            x: isLeft ? -100 : 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: eventRef,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32">
      <div className="w-[1440px] mx-auto px-12">
        <motion.h2
          className="text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Timeline Animation
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

          {/* Events */}
          <div className="space-y-24">
            {events.map((event, index) => (
              <div
                key={event.year}
                ref={(el) => {
                  eventRefs.current[index] = el;
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                  }`}
                >
                  <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all">
                    <div className="text-cyan-400 font-bold text-xl mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-white/60">{event.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full border-4 border-[#0a0a0a]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeExamples() {
  const examples = [
    {
      title: "GSAP Parallax with ScrollTrigger",
      code: `import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  gsap.to(layerRef.current, {
    yPercent: 60,
    rotate: 180,
    ease: "none",
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5, // smooth scrubbing
    },
  });
}, []);`,
    },
    {
      title: "Motion useTransform",
      code: `const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});

const opacity = useTransform(
  scrollYProgress,
  [0, 0.3, 0.7, 1],
  [0, 1, 1, 0]
);

<motion.div style={{ opacity }}>
  {content}
</motion.div>`,
    },
    {
      title: "whileInView Animation",
      code: `<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ 
    opacity: 1, 
    y: 0 
  }}
  viewport={{ 
    once: true,
    margin: "-100px" 
  }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>`,
    },
  ];

  return (
    <section className="py-20 pb-32">
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
              <pre className="text-sm text-white/70 overflow-x-auto custom-scrollbar">
                <code>{example.code}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}