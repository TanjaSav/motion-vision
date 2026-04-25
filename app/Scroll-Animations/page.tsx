import IntroSection from "@/components/Scroll-Animations/IntroSection";
import ParallaxSection from "@/components/Scroll-Animations/ParallaxSection";
import StickySection from "@/components/Scroll-Animations/StickySection";
import TimelineSection from "@/components/Scroll-Animations/TimelineSection";
import ScrollEffectsGuide from "@/components/Scroll-Animations/ScrollEffectsGuide";

// Scroll animation page composition only. Section logic lives in components/Scroll-Animations.
export default function ScrollAnimations() {
  return (
    <main className="bg-[#0a0a0a] pt-20 sm:pt-24">
      <IntroSection />
      <ParallaxSection />
      <StickySection />
      <TimelineSection />
      <ScrollEffectsGuide />
    </main>
  );
}