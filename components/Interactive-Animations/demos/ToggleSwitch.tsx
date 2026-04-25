"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { CodeExample } from "@/Types/types";
import DemoCard from "../DemoCard";

// Demo component for the ToggleSwitch micro-interaction.
export default function ToggleSwitch({ onOpenCode }: { onOpenCode: (example: CodeExample) => void }) {
  const shouldReduceMotion = useReducedMotion();
  const [isOn, setIsOn] = useState(false);

  const example = {
    title: "Toggle Switch",
    description: "A compact spring-based toggle pattern with a sliding knob",
    code: `const [isOn, setIsOn] = useState(false);

<motion.button
  type="button"
  className={\`flex h-12 w-24 cursor-pointer items-center rounded-full p-1 transition-colors \${
    isOn ? "bg-cyan-400" : "bg-white/10"
  }\`}
  onClick={() => setIsOn(!isOn)}
>
  <motion.div
    className="h-10 w-10 rounded-full bg-white shadow-lg"
    layout
    animate={{ x: isOn ? 48 : 0 }}
    transition={{
      type: "spring",
      stiffness: 700,
      damping: 30,
    }}
  />
</motion.button>`,
  };

  return (
    <DemoCard
      title="Toggle Switch"
      description="A compact binary control with spring motion"
      onOpenCode={() => onOpenCode(example)}
    >
      <motion.button
        type="button"
        className={`flex h-12 w-24 cursor-pointer items-center rounded-full p-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] ${
          isOn ? "bg-cyan-400/55" : "bg-white/10"
        }`}
        onClick={() => setIsOn(!isOn)}
        aria-pressed={isOn}
        aria-label={`Toggle switch ${isOn ? "on" : "off"}`}
      >
        {/* Sliding knob */}
        <motion.div
          aria-hidden="true"
          className="h-10 w-10 rounded-full bg-white shadow-lg"
          layout={!shouldReduceMotion}
          animate={{ x: isOn ? 48 : 0 }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        />
      </motion.button>
    </DemoCard>
  );
}
