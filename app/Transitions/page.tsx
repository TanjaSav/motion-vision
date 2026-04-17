"use client";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type TransitionType = "fade" | "slide" | "scale";

export default function PageTransitions() {
  const shouldReduceMotion = useReducedMotion();
  const [currentDemo, setCurrentDemo] = useState<TransitionType>("fade");
  const [page, setPage] = useState(1);

  return (
    <main className="bg-[#0a0a0a] pt-16 sm:pt-20">
      <section
        className="relative overflow-hidden py-16 sm:py-24 lg:py-28"
        aria-labelledby="page-transitions-heading"
      >
        {/* Decorative background glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12">
          {/* Hero content */}
          <motion.div
            className="mx-auto max-w-5xl text-center"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 30, filter: "blur(8px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1
              id="page-transitions-heading"
              className="font-serif text-3xl font-light leading-[1.2] text-white sm:text-5xl lg:text-6xl"
            >
              Page transitions shape
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              the flow between views
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
              Smooth transitions make navigation feel more connected, more
              readable, and more intentional
            </p>
          </motion.div>

          <div className="mx-auto mt-10 w-full max-w-6xl sm:mt-14">
            {/* Demo preview container */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl sm:rounded-3xl">
              <div
                className="relative min-h-[220px] sm:min-h-[420px] lg:min-h-[620px]"
                aria-live="polite"
              >
                <AnimatePresence mode="wait">
                  {currentDemo === "fade" && (
                    <FadeTransition
                      key={`${currentDemo}-${page}`}
                      page={page}
                    />
                  )}
                  {currentDemo === "slide" && (
                    <SlideTransition
                      key={`${currentDemo}-${page}`}
                      page={page}
                    />
                  )}
                  {currentDemo === "scale" && (
                    <ScaleTransition
                      key={`${currentDemo}-${page}`}
                      page={page}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Transition selector */}
            <motion.div
              role="group"
              aria-label="Transition type selector"
              className="mt-6 grid grid-cols-2 gap-2 sm:mt-12 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 20, filter: "blur(6px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.9,
                delay: shouldReduceMotion ? 0 : 0.15,
              }}
            >
              {(["fade", "slide", "scale"] as TransitionType[]).map((type) => {
                const isActive = currentDemo === type;

                return (
                  <button
                    key={type}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => {
                      setCurrentDemo(type);
                      setPage(1);
                    }}
                    className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm font-light capitalize transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:px-6 sm:py-3 sm:text-base ${
                      isActive
                        ? "border-cyan-300 bg-white/10 text-white"
                        : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {type} transition
                  </button>
                );
              })}
            </motion.div>

            {/* Description and page navigation */}
            <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center text-center sm:mt-10">
              <p className="max-w-xl px-2 text-sm font-light leading-7 text-white/80 sm:mt-6 sm:px-0 sm:text-base">
                {currentDemo === "fade" &&
                  "A classic transition where one view disappears smoothly while the next one fades into focus"}
                {currentDemo === "slide" &&
                  "The current content moves out while the next view enters from the opposite side, creating directional flow"}
                {currentDemo === "scale" &&
                  "The outgoing page contracts while the next page grows into place, creating a compact zoom effect"}
              </p>

              <button
                type="button"
                onClick={() => setPage(page === 3 ? 1 : page + 1)}
                className="mt-6 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:mt-8 sm:px-6 sm:text-base"
                aria-label={`Show next page preview. Current page is ${page}`}
              >
                Next page
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <CodeExamples />
        </div>
      </section>
    </main>
  );
}

function FadeTransition({ page }: { page: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.4, ease: "easeOut" }}
    >
      {/* Fade transition preview */}
      <PageContent page={page} />
    </motion.div>
  );
}

function SlideTransition({ page }: { page: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 sm:p-8"
      initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
      animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { x: "-100%" }}
      transition={
        shouldReduceMotion
          ? { duration: 0.15 }
          : { type: "spring", stiffness: 240, damping: 28 }
      }
    >
      {/* Slide transition preview */}
      <PageContent page={page} />
    </motion.div>
  );
}

function ScaleTransition({ page }: { page: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 sm:p-8"
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { scale: 1.2, opacity: 0, filter: "blur(8px)" }
      }
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      exit={
        shouldReduceMotion
          ? { opacity: 0 }
          : { scale: 0.85, opacity: 0, filter: "blur(6px)" }
      }
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Scale transition preview */}
      <PageContent page={page} />
    </motion.div>
  );
}

// function PageContent({ page }: { page: number }) {
//   const pageImages = [
//     "/images/Page-1.jpg",
//     "/images/Page-2.jpg",
//     "/images/Page-3.jpg",
//   ];

//   return (
//     <div className="w-full max-w-[92vw] overflow-hidden rounded-2xl border border-white/90 bg-black/30 shadow-2xl sm:max-w-5xl">
//       {/* Screenshot preview */}
//       <Image
//         src={pageImages[page - 1]}
//         alt={`Preview of page ${page}`}
//         width={1600}
//         height={1200}
//         className="block h-auto w-full object-cover"
//         priority={page === 1}
//       />
//     </div>
//   );
// }

function PageContent({ page }: { page: number }) {
  const pageImages = [
    "/images/Page-1.jpg",
    "/images/Page-2.jpg",
    "/images/Page-3.jpg",
  ];

  return (
    <div className="w-full max-w-[92vw] sm:max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-white/90 bg-black/30 shadow-2xl">
        <div className="px-0 py-4 sm:py-0">
          <div className="relative h-[180px] w-full sm:h-auto">
            <Image
              src={pageImages[page - 1]}
              alt={`Preview of page ${page}`}
              width={1600}
              height={1200}
              className="h-full w-full object-cover object-top sm:h-auto"
              priority={page === 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function CodeExamples() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="mx-auto mt-16 max-w-6xl sm:mt-24"
      aria-labelledby="code-examples-heading"
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 30, filter: "blur(8px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Section heading */}
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="code-examples-heading"
          className="font-serif text-2xl font-light leading-[1.3] text-white sm:text-4xl lg:text-5xl"
        >
          Code examples show how page transitions are built in real interfaces
        </h2>
      </div>

      {/* Example cards */}
      <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
        <CodeCard
          title="Fade Transition"
          description="Use opacity to smoothly replace one view with another. This is one of the safest and most universal transition patterns."
          code={`<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  {content}
</motion.div>`}
        />

        <CodeCard
          title="Slide Transition"
          description="Use horizontal movement when you want navigation to feel directional, such as moving forward through steps or screens."
          code={`<motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "-100%" }}
  transition={{
    type: "spring",
    stiffness: 240,
    damping: 28
  }}
>
  {content}
</motion.div>`}
        />

        <CodeCard
          title="Scale Transition"
          description="Use scale when you want a compact zoom effect. It works well for focused interfaces or transitions between cards and panels."
          code={`<motion.div
  initial={{ scale: 1.2, opacity: 0, filter: "blur(8px)" }}
  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
  exit={{ scale: 0.85, opacity: 0, filter: "blur(6px)" }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>
  {content}
</motion.div>`}
        />
      </div>
    </motion.section>
  );
}

function CodeCard({
  title,
  description,
  code,
}: {
  title: string;
  description: string;
  code: string;
}) {
  return (
    <article className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6">
      {/* Card title */}
      <h3 className="text-lg font-medium text-white sm:text-xl">{title}</h3>

      {/* Decorative divider */}
      <div
        aria-hidden="true"
        className="mt-3 h-px bg-gradient-to-r from-cyan-300/70 to-blue-400/40 sm:mt-4"
      />

      {/* Card description */}
      <p className="mt-3 text-sm leading-6 text-white/80 sm:mt-4 sm:leading-7">
        {description}
      </p>

      {/* Code block */}
      <pre className="custom-scrollbar mt-5 overflow-x-auto rounded-2xl bg-black/30 p-4 text-xs leading-6 text-white/90 sm:mt-6 sm:text-sm sm:leading-7">
        <code>{code}</code>
      </pre>
    </article>
  );
}