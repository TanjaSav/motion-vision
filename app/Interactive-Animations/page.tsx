"use client";

import { useState } from "react";
import IntroSection from "@/components/Interactive-Animations/IntroSection";
import InteractiveDemosSection from "@/components/Interactive-Animations/InteractiveDemosSection";
import MotionSpecsSection from "@/components/Interactive-Animations/MotionSpecsSection";
import LottieSection from "@/components/Interactive-Animations/LottieSection";
import CodeModal from "@/components/Interactive-Animations/CodeModal";
import type { CodeExample } from "@/Types/types";

// Interactive animations page composition with shared code-modal state.
export default function MicroInteractions() {
  const [activeExample, setActiveExample] = useState<CodeExample | null>(null);

  return (
    <main className="bg-[#0a0a0a] pt-20 sm:pt-24">
      <IntroSection />
      <InteractiveDemosSection onOpenCode={setActiveExample} />
      <MotionSpecsSection />
      <LottieSection onOpenCode={setActiveExample} />

      {/* Shared modal for all code examples. */}
      <CodeModal
        example={activeExample}
        onClose={() => setActiveExample(null)}
      />
    </main>
  );
}
