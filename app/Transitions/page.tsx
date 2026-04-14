"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";


type TransitionType = "fade" | "slide" | "scale";

export default function PageTransitions() {
  const [currentDemo, setCurrentDemo] = useState<TransitionType>("fade");
  const [page, setPage] = useState(1);

  return (
    <main className="pt-32 pb-20 bg-[#0a0a0a]">
      <div className="w-360 mx-auto px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Page Transitions
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Smooth navigation between different views.
          </p>
        </motion.div>

        {/* Transition Type Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {(["fade", "slide", "scale"] as TransitionType[]).map((type) => (
            <button
              key={type}
              onClick={() => {
                setCurrentDemo(type);
                setPage(1);
              }}
              className={`px-6 py-3 rounded-full capitalize font-semibold transition-all ${
                currentDemo === type
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {type} Transition
            </button>
          ))}
        </div>

        {/* Demo Area */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-black/40 rounded-3xl border border-white/10 overflow-hidden relative">
            <AnimatePresence mode="wait">
              {currentDemo === "fade" && (
                <FadeTransition key={page} page={page} setPage={setPage} />
              )}
              {currentDemo === "slide" && (
                <SlideTransition key={page} page={page} setPage={setPage} />
              )}
              {currentDemo === "scale" && (
                <ScaleTransition key={page} page={page} setPage={setPage} />
              )}
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.div
            className="mt-8 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2 capitalize">
              {currentDemo} Transition
            </h3>
            <p className="text-white/70">
              {currentDemo === "fade" &&
                "A classic transition where the old page fades out and the new page fades in."}
              {currentDemo === "slide" &&
                "The current content slides out while new content slides in from the opposite direction."}
              {currentDemo === "scale" &&
                "The old page scales down while the new page scales up, creating a zoom effect."}
            </p>
          </motion.div>
        </div>

        {/* Code Examples */}
        <CodeExamples />
      </div>
    </main>
  );
}

function FadeTransition({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageContent page={page} setPage={setPage} />
    </motion.div>
  );
}

function SlideTransition({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-12"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <PageContent page={page} setPage={setPage} />
    </motion.div>
  );
}

function ScaleTransition({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-12"
      initial={{ scale: 1.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageContent page={page} setPage={setPage} />
    </motion.div>
  );
}

function PageContent({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) {
  const colors = [
    "from-cyan-500/30 to-blue-500/30",
    "from-purple-500/30 to-pink-500/30",
    "from-green-500/30 to-emerald-500/30",
  ];

  return (
    <>
      <div
        className={`w-32 h-32 mb-8 bg-gradient-to-br ${
          colors[page - 1]
        } rounded-3xl border border-white/20 backdrop-blur-lg`}
      />
      <h2 className="text-4xl font-bold mb-4">Page {page}</h2>
      <p className="text-white/70 text-center mb-8 max-w-md">
        This is page {page}. Click the button below to transition to the next
        page.
      </p>
      <button
        onClick={() => setPage(page === 3 ? 1 : page + 1)}
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform"
      >
        Next Page
        <ArrowRight size={20} />
      </button>
    </>
  );
}

function CodeExamples() {
  const examples = [
    {
      title: "Fade Transition",
      code: `<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
>
  {content}
</motion.div>`,
    },
    {
      title: "Slide Transition",
      code: `<motion.div
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '-100%' }}
  transition={{ 
    type: 'spring',
    stiffness: 300,
    damping: 30 
  }}
>
  {content}
</motion.div>`,
    },
    {
      title: "Scale Transition",
      code: `<motion.div
  initial={{ scale: 1.5, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.5, opacity: 0 }}
  transition={{ duration: 0.5 }}
>
  {content}
</motion.div>`,
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Code Examples</h2>
      <div className="grid md:grid-cols-3 gap-6">
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
    </section>
  );
}