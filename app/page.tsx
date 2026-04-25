import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import MotionPrinciples from "@/components/Home/MotionPrinciples";
import AnimationTypesSection from "@/components/Home/AnimationTypesSection";

// Home page composition only. Section implementation lives in components/Home.
export default function Page() {
  return (
    <main className="bg-[#0a0a0a] pt-12 sm:pt-24">
      <HeroSection />
      <AboutSection />
      <MotionPrinciples />
      <AnimationTypesSection />
    </main>
  );
}
