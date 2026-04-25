"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";
import type { CodeExample } from "@/Types/types";
import DemoCard from "../DemoCard";

// Demo component for the LikeButton micro-interaction.
export default function LikeButton({ onOpenCode }: { onOpenCode: (example: CodeExample) => void }) {
  const shouldReduceMotion = useReducedMotion();
  const [liked, setLiked] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  const handleLike = () => {
    setLiked(!liked);

    // Trigger particle burst only when motion is allowed
    if (!liked && !shouldReduceMotion) {
      setParticles(Array.from({ length: 10 }, (_, i) => i));
      setTimeout(() => setParticles([]), 900);
    }
  };

  const example = {
    title: "Like Button",
    description:
      "A feedback interaction with scaling and particle burst after click",
    code: `const [liked, setLiked] = useState(false);
const [particles, setParticles] = useState<number[]>([]);

const handleLike = () => {
  setLiked(!liked);

  if (!liked) {
    setParticles(Array.from({ length: 10 }, (_, i) => i));
    setTimeout(() => setParticles([]), 900);
  }
};`,
  };

  return (
    <DemoCard
      title="Like Button"
      description="Click feedback with scale and particle burst"
      onOpenCode={() => onOpenCode(example)}
    >
      <motion.button
        type="button"
        className="relative cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        onClick={handleLike}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.85 }}
        aria-pressed={liked}
        aria-label={liked ? "Unlike this item" : "Like this item"}
      >
        {/* Heart feedback animation */}
        <motion.div
          animate={
            liked && !shouldReduceMotion ? { scale: [1, 1.25, 1] } : undefined
          }
          transition={{ duration: 0.35 }}
        >
          <Heart
            size={48}
            className={`transition-colors ${
              liked ? "fill-red-500 text-red-500" : "text-white/70"
            }`}
          />
        </motion.div>

        {/* Particle burst effect */}
        {!shouldReduceMotion &&
          particles.map((particle) => (
            <motion.div
              key={particle}
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-red-500"
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos((particle * Math.PI * 2) / 10) * 42,
                y: Math.sin((particle * Math.PI * 2) / 10) * 42,
                opacity: [1, 1, 0],
              }}
              transition={{ duration: 0.8 }}
            />
          ))}
      </motion.button>
    </DemoCard>
  );
}
