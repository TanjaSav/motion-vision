"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, type MouseEvent } from "react";
import type { CodeExample } from "@/Types/types";
import DemoCard from "../DemoCard";

// Demo component for the CardHoverTilt micro-interaction.
export default function CardHoverTilt({ onOpenCode }: { onOpenCode: (example: CodeExample) => void }) {
  const shouldReduceMotion = useReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -30;
    const rotY = ((x - centerX) / centerX) * 30;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const example = {
    title: "Card Hover Tilt",
    description: "A 3D tilt card based on cursor position inside the element",
    code: `const [rotateX, setRotateX] = useState(0);
const [rotateY, setRotateY] = useState(0);

<motion.div
  animate={{ rotateX, rotateY }}
  transition={{ type: "spring", stiffness: 320, damping: 26 }}
  style={{ transformStyle: "preserve-3d" }}
>
  <Sparkles size={44} className="text-cyan-300" />
</motion.div>`,
  };

  return (
    <DemoCard
      title="Card Hover Tilt"
      description="A subtle 3D tilt effect that follows the cursor"
      onOpenCode={() => onOpenCode(example)}
    >
      <motion.div
        className="flex h-40 w-40 items-center justify-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        style={{ transformStyle: "preserve-3d" }}
        aria-label="Tilt card demo"
      >
        <Sparkles size={44} className="text-cyan-300" aria-hidden="true" />
      </motion.div>
    </DemoCard>
  );
}


