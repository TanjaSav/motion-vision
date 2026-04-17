"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoseVideo } from "../../components/About/RoseVideo";

// Register GSAP plugin once at module level
gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  return (
    <main className="bg-[#0a0a0a] pt-20 sm:pt-24">
      <IntroSection />
      <ParallaxSection />
      <StickySection />
      <TimelineSection />
      <ScrollEffectsGuide />
    </main>
  );
}

function IntroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="scroll-intro-heading"
    >
      {/* Decorative intro background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <h1
            id="scroll-intro-heading"
            className="font-serif text-4xl font-light leading-[1.3] text-white sm:text-5xl lg:text-6xl"
          >
            Scroll animations create rhythm,
            <br />
            depth, and visual flow
          </h1>

          <p className="mt-6 text-base font-light leading-8 text-white/80 sm:text-lg">
            Discover how parallax, sticky layouts, and timeline motion help
            guide attention while scrolling
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ParallaxSection() {
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




function StickySection() {
  const shouldReduceMotion = useReducedMotion();

  const sections = [
    {
      description:
        "Define what should stay visible and what should change while the user scrolls",
    },
    {
      description:
        "Use contrast, motion rhythm, and spacing to support attention and hierarchy",
    },
    {
      description:
        "Test the animation on different screens and keep the movement smooth and subtle",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 lg:py-28"
      aria-labelledby="sticky-heading"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.08),transparent_30%)]"
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12">
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
            id="sticky-heading"
            className="font-serif text-3xl font-light leading-[1.4] text-white sm:text-4xl lg:text-5xl"
          >
            Sticky sections keep focus on one visual idea
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            while the content changes around it
          </h2>
        </motion.div>

        {/* Two-column sticky layout */}
        <div className="mt-10 grid grid-cols-[0.9fr_1.1fr] items-stretch gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          {/* Sticky media block */}
          <div className="relative h-full">
            <div className="sticky top-20 sm:top-24 lg:top-28">
              <motion.div
                className="overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-2 backdrop-blur-xl sm:rounded-3xl sm:p-3"
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.96, filter: "blur(8px)" }
                }
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.9 }}
              >
                {/* Fixed ratio keeps the media block balanced */}
                <div
                  className="aspect-[4/5] overflow-hidden rounded-[16px] border border-white/10 bg-black/20"
                  aria-label="Decorative video preview"
                >
                  <RoseVideo />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Supporting content cards */}
          <div className="flex h-full min-h-0 flex-col gap-3 sm:gap-4 lg:gap-5">
            {sections.map((section, index) => (
              <motion.article
                key={index}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 24, filter: "blur(8px)" }
                }
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.8,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="flex min-h-0 flex-1 items-center rounded-[20px] border border-white/10 bg-white/5 p-2.5 backdrop-blur-xl sm:rounded-[24px] sm:p-5 lg:p-6"
              >
                <h3 className="text-sm font-light leading-4 text-white/95 sm:text-base sm:leading-6 lg:text-lg lg:leading-8">
                  {section.description}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
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
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
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

function ScrollEffectsGuide() {
  const shouldReduceMotion = useReducedMotion();

  const effects = [
    {
      title: "Parallax",
      subtitle: "Different layer speeds",
      intro: "Creates a sense of depth while the user scrolls",
      logic: [
        "Background layers move more slowly",
        "Foreground elements move faster",
        "Movement is driven by scrollY or scroll progress",
        "The farther the layer, the smaller the offset",
      ],
      important: [
        "Use speed ratios such as 0.1, 0.3, and 0.6",
        "Use the Y axis in most cases",
        "Clamp movement so layers do not drift too far",
        "Prefer transform instead of top or left for performance",
      ],
    },
    {
      title: "Sticky Scroll",
      subtitle: "Fixed visual + changing content",
      intro:
        "Keeps one important visual element in focus while nearby content changes during scrolling",
      logic: [
        "One element stays sticky in the viewport",
        "Text or cards move around it",
        "The sticky element anchors attention",
        "Each block reveals progressively as the user continues scrolling",
      ],
      important: [
        "Use sticky only when the section is tall enough",
        "Keep strong spacing between content blocks",
        "Avoid too many sticky areas on one page",
        "Check behavior carefully on mobile screens",
      ],
    },
    {
      title: "Timeline Motion",
      subtitle: "Sequential reveal",
      intro:
        "Useful for history, progress, milestones, and structured step-by-step storytelling",
      logic: [
        "Each item appears at a scroll threshold",
        "Cards can alternate from left and right",
        "A central line gives the layout visual structure",
        "Motion helps the sequence feel progressive",
      ],
      important: [
        "Keep direction changes consistent",
        "Do not overload the timeline with too much text",
        "Use stagger only when it improves readability",
        "Make the active point easy to track visually",
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="effects-guide-heading"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
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
            id="effects-guide-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Each scroll effect has its own logic, structure, and implementation
            rules
          </h2>

          <p className="mt-6 text-base font-light leading-8 text-white/80 sm:text-lg">
            These cards explain what each effect does, how it works, and what
            should not be missed in implementation
          </p>
        </motion.div>

        {/* Effects grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: shouldReduceMotion
                ? {}
                : {
                    staggerChildren: 0.12,
                    delayChildren: 0.12,
                  },
            },
          }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {effects.map((effect) => (
            <motion.article
              key={effect.title}
              variants={{
                hidden: shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      y: 36,
                      filter: "blur(10px)",
                    },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: shouldReduceMotion ? 0.2 : 0.95,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
            >
              {/* Decorative top line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
              />

              {/* Decorative hover wash */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-white/0 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative z-10">
                <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                  {effect.subtitle}
                </div>

                <h3 className="mt-3 text-2xl text-white">{effect.title}</h3>

                <p className="mt-4 font-light leading-7 text-white/85">
                  {effect.intro}
                </p>

                <div className="mt-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                    What defines this effect
                  </p>

                  <ul className="mt-4 space-y-3">
                    {effect.logic.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-[4px] w-[4px] rounded-full bg-cyan-300/75"
                        />
                        <span className="font-light leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                    Important details
                  </p>

                  <ul className="mt-4 space-y-3">
                    {effect.important.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-[4px] w-[4px] rounded-full bg-blue-300/75"
                        />
                        <span className="font-light leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}