"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { CodeExample } from "@/Types/types";

// Shared modal used to display source code for demo examples.
export default function CodeModal({
  example,
  onClose,
}: {
  example: CodeExample | null;
  onClose: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {example && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-hidden={!example}
        >
          <motion.div
            className="custom-scrollbar relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 30, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 20, scale: 0.98 }
            }
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.25 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="code-modal-title"
            aria-describedby="code-modal-description"
          >
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
              <div>
                <h3 id="code-modal-title" className="text-xl text-white">
                  {example.title}
                </h3>
                <p
                  id="code-modal-description"
                  className="mt-2 text-sm leading-7 text-white/80"
                >
                  {example.description}
                </p>
              </div>

              {/* Close modal button */}
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-full border border-white/10 bg-white/5 p-2 text-white transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                aria-label="Close code modal"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Code preview area */}
            <div className="p-4 sm:p-6">
              <pre className="custom-scrollbar max-h-[60vh] overflow-x-auto overflow-y-auto rounded-2xl border border-white/5 bg-black/20 p-4 text-xs leading-7 text-white/90 sm:text-sm">
                <code>{example.code}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
