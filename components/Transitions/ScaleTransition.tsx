"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PagePreviewProps } from "@/Types/types";
import PageContent from "./PageContent";

// Scale and blur transition preview.
export default function ScaleTransition({ page }: PagePreviewProps) {
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

