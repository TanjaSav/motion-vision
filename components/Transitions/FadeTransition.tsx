"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PagePreviewProps } from "@/Types/types";
import PageContent from "./PageContent";

// Opacity-only transition preview.
export default function FadeTransition({ page }: PagePreviewProps) {
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
