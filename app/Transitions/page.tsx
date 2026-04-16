"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

type TransitionType = "fade" | "slide" | "scale";

export default function PageTransitions() {
  const [currentDemo, setCurrentDemo] = useState<TransitionType>("fade");
  const [page, setPage] = useState(1);

  return (
    <main className="bg-[#0a0a0a] pt-20 sm:pt-24">
      <section className="relative overflow-hidden py-24 sm:py-28">
        {/* Soft background wash */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]" />

        {/* Shared page container */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
          {/* Heading */}
          <motion.div
            className="mx-auto max-w-5xl text-center"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-4xl font-light leading-[1.3] text-white sm:text-5xl lg:text-6xl">
              Page transitions shape
              <br />
              the flow between views
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-8 text-white/70 sm:text-lg">
              Smooth transitions make navigation feel more connected, more readable,
              and more intentional
            </p>
          </motion.div>

          {/* Transition type selector */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {(["fade", "slide", "scale"] as TransitionType[]).map((type) => {
              const isActive = currentDemo === type;

              return (
                <button
                  key={type}
                  onClick={() => {
                    setCurrentDemo(type);
                    setPage(1);
                  }}
                  className={`rounded-full border px-5 py-2.5 text-sm font-light capitalize transition-all sm:px-6 sm:py-3 sm:text-base ${
                    isActive
                      ? "border-cyan-300/30 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {type} transition
                </button>
              );
            })}
          </motion.div>

          {/* Demo area */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="relative aspect-video">
                <AnimatePresence mode="wait">
                  {currentDemo === "fade" && (
                    <FadeTransition
                      key={page}
                      page={page}
                      setPage={setPage}
                      currentDemo={currentDemo}
                    />
                  )}
                  {currentDemo === "slide" && (
                    <SlideTransition
                      key={page}
                      page={page}
                      setPage={setPage}
                      currentDemo={currentDemo}
                    />
                  )}
                  {currentDemo === "scale" && (
                    <ScaleTransition
                      key={page}
                      page={page}
                      setPage={setPage}
                      currentDemo={currentDemo}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Description card
            <motion.div
              className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <h2 className="text-xl font-normal capitalize text-white">
                {currentDemo} transition
              </h2>

              <div className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40" />

              <p className="mt-4 font-light leading-7 text-white/75">
                {currentDemo === "fade" &&
                  "A classic transition where one view disappears smoothly while the next one fades into focus."}
                {currentDemo === "slide" &&
                  "The current content moves out while the next view enters from the opposite side, creating directional flow."}
                {currentDemo === "scale" &&
                  "The outgoing page contracts while the next page grows into place, creating a compact zoom effect."}
              </p>
            </motion.div> */}
          </div>

          <CodeExamples />
        </div>
      </section>
    </main>
  );
}

function FadeTransition({
  page,
  setPage,
  currentDemo,
}: {
  page: number;
  setPage: (page: number) => void;
  currentDemo: TransitionType;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      <PageContent page={page} setPage={setPage} currentDemo={currentDemo} />
    </motion.div>
  );
}

function SlideTransition({
  page,
  setPage,
  currentDemo,
}: {
  page: number;
  setPage: (page: number) => void;
  currentDemo: TransitionType;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-12"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", stiffness: 240, damping: 28 }}
    >
      <PageContent page={page} setPage={setPage} currentDemo={currentDemo} />
    </motion.div>
  );
}

function ScaleTransition({
  page,
  setPage,
  currentDemo,
}: {
  page: number;
  setPage: (page: number) => void;
  currentDemo: TransitionType;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-12"
      initial={{ scale: 1.12, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.92, opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageContent page={page} setPage={setPage} currentDemo={currentDemo} />
    </motion.div>
  );
}

function PageContent({
  page,
  setPage,
  currentDemo,
}: {
  page: number;
  setPage: (page: number) => void;
  currentDemo: TransitionType;
}) {
  // Different gradient colors for each page
  const backgrounds = [
    "from-cyan-300/30 to-sky-400/25",
    "from-blue-300/30 to-indigo-400/25",
    "from-teal-300/25 to-cyan-200/20",
  ];

  return (
    <>
      {/* Colored square changes depending on page */}
      <div
        className={`mb-8 h-28 w-28 rounded-3xl border border-white/15 bg-gradient-to-br ${
          backgrounds[page - 1]
        } backdrop-blur-xl sm:h-32 sm:w-32`}
      />

      {/* Page title */}
      <h3 className="text-3xl font-light text-white sm:text-4xl">
        Page {page}
      </h3>

      {/* Accent line */}
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-300/70 to-blue-400/40" />

      {/* Description changes depending on transition type */}
      <p className="mt-6 max-w-md text-center font-light leading-7 text-white/70">
        {currentDemo === "fade" &&
          "A classic transition where one view disappears smoothly while the next one fades into focus"}
        {currentDemo === "slide" &&
          "The current content moves out while the next view enters from the opposite side, creating directional flow"}
        {currentDemo === "scale" &&
          "The outgoing page contracts while the next page grows into place, creating a compact zoom effect"}
      </p>

      {/* Next page button */}
      <button
        onClick={() => setPage(page === 3 ? 1 : page + 1)}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition-all hover:bg-white/10"
      >
        Next page
        <ArrowRight size={18} />
      </button>
    </>
  );
}

function CodeExamples() {
  const examples = [
    {
      title: "Fade Transition",
      description:
        "Use opacity to smoothly replace one view with another. This is one of the safest and most universal transition patterns",
      code: `<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.55 }}
>
  {content}
</motion.div>`,
    },
    {
      title: "Slide Transition",
      description:
        "Use horizontal movement when you want navigation to feel directional, such as moving forward through steps or screens",
      code: `<motion.div
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
</motion.div>`,
    },
    {
      title: "Scale Transition",
      description:
        "Use scale when you want a compact zoom effect. It works well for focused interfaces or transitions between cards and panels",
      code: `<motion.div
  initial={{ scale: 1.12, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.92, opacity: 0 }}
  transition={{ duration: 0.55 }}
>
  {content}
</motion.div>`,
    },
  ];

  return (
    <section className="mt-20 sm:mt-24">
      {/* Section heading */}
      <motion.div
        className="mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl">
          Code examples show how page transitions
          are built in real interfaces
        </h2>
      </motion.div>

      {/* Code cards */}
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {examples.map((example, index) => (
          <motion.div
            key={example.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-normal text-white">{example.title}</h3>

            <div className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40" />

            <p className="mt-4 text-sm font-light leading-7 text-white/65">
              {example.description}
            </p>

            <pre className="mt-6 overflow-x-auto text-sm leading-7 text-white/65">
              <code>{example.code}</code>
            </pre>
          </motion.div>
        ))}
      </div>
    </section>
  );
}