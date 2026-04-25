"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type MouseEvent } from "react";
import type { CodeExample } from "@/Types/types";
import DemoCard from "../DemoCard";

// Demo component for the CursorMagnet micro-interaction.
export default function CursorMagnet({ onOpenCode }: { onOpenCode: (example: CodeExample) => void }) {
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update the demo element position based on cursor distance
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  // Reset the demo element when the cursor leaves the area
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const example = {
    title: "Cursor Magnet",
    description:
      "A subtle cursor-follow effect that makes the element feel reactive",
    code: `const [position, setPosition] = useState({ x: 0, y: 0 });

<motion.div
  animate={{ x: position.x, y: position.y }}
  transition={{ type: "spring", stiffness: 150, damping: 16 }}
>
  Pull Me
</motion.div>`,
  };

  return (
    <DemoCard
      title="Cursor Magnet"
      description="The button slightly follows the cursor position"
      onOpenCode={() => onOpenCode(example)}
    >
      {/* Demo interaction area */}
      <div
        className="flex h-40 w-40 items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label="Cursor magnet demo"
      >
        {/* Decorative demo element, not a real action button */}
        <motion.div
          aria-hidden="true"
          className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white"
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 150, damping: 16 }}
        >
          Pull Me
        </motion.div>
      </div>
    </DemoCard>
  );
}
