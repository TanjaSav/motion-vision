"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PagePreviewProps } from "@/Types/types";
import PageContent from "./PageContent";

// Directional slide transition preview.
export default function SlideTransition({ page }: PagePreviewProps) {
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
