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

// function PageContent({ page }: PagePreviewProps) {
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
