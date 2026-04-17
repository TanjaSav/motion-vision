"use client";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { Heart, Sparkles, X } from "lucide-react";
import { useState } from "react";
import Lottie from "lottie-react";
import rocketAnimation from "@/public/images/an3.json";

type CodeExample = {
  title: string;
  description: string;
  code: string;
};

export default function MicroInteractions() {
  const [activeExample, setActiveExample] = useState<CodeExample | null>(null);

  return (
    <main className="bg-[#0a0a0a] pt-20 sm:pt-24">
      <IntroSection />
      <InteractiveDemosSection onOpenCode={setActiveExample} />
      <MotionSpecsSection />
      <LottieSection onOpenCode={setActiveExample} />

      {/* Shared modal for all code examples */}
      <CodeModal
        example={activeExample}
        onClose={() => setActiveExample(null)}
      />
    </main>
  );
}

function IntroSection() {
  // Respect the user's reduced motion preference
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="micro-intro-heading"
    >
      {/* Decorative background wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1
            id="micro-intro-heading"
            className="font-serif text-4xl font-light leading-[1.3] text-white sm:text-5xl lg:text-6xl"
          >
            Animations that bring
            <br />
            interfaces to life
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-8 text-white/80 sm:text-lg">
            Small motion details improve clarity, add feedback, and make
            digital products feel more responsive and polished
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function InteractiveDemosSection({
  onOpenCode,
}: {
  onOpenCode: (example: CodeExample) => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="interactive-demos-heading"
    >
      {/* Decorative section glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            id="interactive-demos-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Micro-interactions create feedback, guidance, and emotional
            response
          </h2>
        </motion.div>

        {/* Interactive demo grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <HoverButton onOpenCode={onOpenCode} />
          <LikeButton onOpenCode={onOpenCode} />
          <ToggleSwitch onOpenCode={onOpenCode} />
          <InputFocus onOpenCode={onOpenCode} />
          <CardHoverTilt onOpenCode={onOpenCode} />
          <CursorMagnet onOpenCode={onOpenCode} />
        </div>
      </div>
    </section>
  );
}

function HoverButton({
  onOpenCode,
}: {
  onOpenCode: (example: CodeExample) => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  const example = {
    title: "Hover Button",
    description:
      "A simple hover interaction using scale, shadow, and a moving highlight layer",
    code: `const HoverButton = () => (
  <motion.button
    type="button"
    className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white"
    whileHover={{
      scale: 1.08,
      boxShadow: "0 18px 36px rgba(56, 189, 248, 0.18)",
    }}
    whileTap={{ scale: 0.96 }}
    transition={{ type: "spring", stiffness: 320, damping: 20 }}
  >
    <motion.div
      className="absolute inset-0 bg-white/10"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.55 }}
    />
    <span className="relative z-10">Hover Me</span>
  </motion.button>
);`,
  };

  return (
    <DemoCard
      title="Hover Button"
      description="Scale, glow, and highlight transitions on hover."
      onOpenCode={() => onOpenCode(example)}
    >
      <motion.button
        type="button"
        className="relative cursor-pointer overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                scale: 1.08,
                boxShadow: "0 18px 36px rgba(56, 189, 248, 0.18)",
              }
        }
        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
        aria-label="Hover button demo"
      >
        {/* Animated highlight layer */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-white/10"
          initial={shouldReduceMotion ? undefined : { x: "-100%" }}
          whileHover={shouldReduceMotion ? undefined : { x: "100%" }}
          transition={{ duration: 0.55 }}
        />

        <span className="relative z-10">Hover Me</span>
      </motion.button>
    </DemoCard>
  );
}

function LikeButton({
  onOpenCode,
}: {
  onOpenCode: (example: CodeExample) => void;
}) {
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

function ToggleSwitch({
  onOpenCode,
}: {
  onOpenCode: (example: CodeExample) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isOn, setIsOn] = useState(false);

  const example = {
    title: "Toggle Switch",
    description: "A compact spring-based toggle pattern with a sliding knob",
    code: `const [isOn, setIsOn] = useState(false);

<motion.button
  type="button"
  className={\`flex h-12 w-24 cursor-pointer items-center rounded-full p-1 transition-colors \${
    isOn ? "bg-cyan-400/25" : "bg-white/10"
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
          isOn ? "bg-cyan-400/25" : "bg-white/10"
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

function InputFocus({
  onOpenCode,
}: {
  onOpenCode: (example: CodeExample) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isFocused, setIsFocused] = useState(false);

  const example = {
    title: "Input Focus",
    description: "A focused field with animated underline and glow feedback",
    code: `const [isFocused, setIsFocused] = useState(false);

<input
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
/>

<motion.div
  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
  initial={{ width: 0 }}
  animate={{ width: isFocused ? "100%" : 0 }}
  transition={{ duration: 0.3 }}
/>`,
  };

  return (
    <DemoCard
      title="Input Focus"
      description="Focus state with glow and underline feedback."
      onOpenCode={() => onOpenCode(example)}
    >
      <div className="relative w-full">
        {/* Accessible label for screen readers */}
        <label htmlFor="demo-input-focus" className="sr-only">
          Demo input field
        </label>

        <input
          id="demo-input-focus"
          type="text"
          placeholder="Type something..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Animated underline */}
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
          initial={shouldReduceMotion ? undefined : { width: 0 }}
          animate={{ width: isFocused ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Focus glow */}
        {isFocused && !shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-xl bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_70%)] blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    </DemoCard>
  );
}

function CardHoverTilt({
  onOpenCode,
}: {
  onOpenCode: (example: CodeExample) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

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



function CursorMagnet({
  onOpenCode,
}: {
  onOpenCode: (example: CodeExample) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update the demo element position based on cursor distance
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

function LottieSection({
  onOpenCode,
}: {
  onOpenCode: (example: CodeExample) => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  const example = {
    title: "Lottie Animation",
    description: "A real JSON-based animation rendered with lottie-react",
    code: `import Lottie from "lottie-react";
import rocketAnimation from "@/public/images/an3.json";

<Lottie
  animationData={rocketAnimation}
  loop={true}
  autoplay={true}
/>`,
  };

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="lottie-heading"
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            id="lottie-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Lottie animations are useful for polished, lightweight motion assets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-light leading-8 text-white/80 sm:text-lg">
            Lottie is often used for icons, loading states, onboarding visuals,
            and playful UI feedback. It gives designers more control over
            complex motion while keeping implementation lightweight
          </p>
        </motion.div>

        {/* Main section layout */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 24, filter: "blur(8px)" }
            }
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Demo card heading */}
            <h3 className="text-xl font-normal text-white">
              Real Lottie example
            </h3>

            {/* Decorative divider */}
            <div
              aria-hidden="true"
              className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
            />

            <p className="mt-4 font-light leading-7 text-white/80">
              This example shows how a real JSON-based animation can be embedded
              directly inside the interface using{" "}
              <span className="text-white/95">lottie-react</span>.
            </p>

            {/* Animation preview */}
            <div className="mt-8 flex min-h-[320px] items-center justify-center rounded-[28px] border border-white/10 bg-black/20 p-6">
              <div
                className="w-full max-w-[260px]"
                aria-label="Rocket animation preview"
              >
                <Lottie
                  animationData={rocketAnimation}
                  loop={!shouldReduceMotion}
                  autoplay
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenCode(example)}
              className="mt-6 w-full cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-fit sm:px-5"
            >
              Code example
            </button>
          </motion.div>

          {/* Supporting info cards */}
          <div className="grid gap-6">
            <InfoCard
              title="What it is"
              text="Lottie renders exported JSON animation data from tools like After Effects. It is ideal for crisp, scalable interface motion."
            />
            <InfoCard
              title="Where to use it"
              text="Use it in onboarding, empty states, icon feedback, loaders, success messages, and small branded interactions."
            />
            <InfoCard
              title="What to remember"
              text="Keep files small, avoid overusing complex scenes, and use Lottie where vector motion gives more value than CSS or simple transforms."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MotionSpecsSection() {
  const shouldReduceMotion = useReducedMotion();

  const specs = [
    {
      interaction: "Hover Button",
      duration: "200ms",
      easing: "ease-out",
      trigger: "hover",
    },
    {
      interaction: "Like Button",
      duration: "300ms",
      easing: "spring",
      trigger: "click",
    },
    {
      interaction: "Toggle Switch",
      duration: "250ms",
      easing: "spring",
      trigger: "click",
    },
    {
      interaction: "Input Focus",
      duration: "300ms",
      easing: "ease-in-out",
      trigger: "focus",
    },
    {
      interaction: "Card Tilt",
      duration: "150ms",
      easing: "spring",
      trigger: "mousemove",
    },
    {
      interaction: "Cursor Magnet",
      duration: "350ms",
      easing: "spring",
      trigger: "mousemove",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      aria-labelledby="motion-specs-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            id="motion-specs-heading"
            className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl"
          >
            Motion specifications help define interaction behavior consistently
          </h2>
        </motion.div>

        {/* Motion specs table */}
        <motion.div
          className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.9 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Hidden caption for screen readers */}
              <caption className="sr-only">
                Motion specifications for the interaction demos
              </caption>

              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left text-sm font-normal text-cyan-200">
                    Interaction
                  </th>
                  <th className="p-4 text-left text-sm font-normal text-cyan-200">
                    Duration
                  </th>
                  <th className="p-4 text-left text-sm font-normal text-cyan-200">
                    Easing
                  </th>
                  <th className="p-4 text-left text-sm font-normal text-cyan-200">
                    Trigger
                  </th>
                </tr>
              </thead>

              <tbody>
                {specs.map((spec, index) => (
                  <motion.tr
                    key={spec.interaction}
                    className="border-b border-white/5 transition-colors hover:bg-white/5"
                    initial={
                      shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
                  >
                    <td className="p-4 text-sm text-white">{spec.interaction}</td>
                    <td className="p-4 text-sm text-white/80">{spec.duration}</td>
                    <td className="p-4 text-sm text-white/80">{spec.easing}</td>
                    <td className="p-4 text-sm text-white/80">{spec.trigger}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DemoCard({
  title,
  description,
  children,
  onOpenCode,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  onOpenCode: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 24, filter: "blur(8px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Decorative top line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
      />

      {/* Decorative hover wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-white/0 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="text-xl font-normal text-white">{title}</h3>
        <p className="mt-4 text-sm font-light leading-7 text-white/80">
          {description}
        </p>

        {/* Demo preview area */}
        <div className="flex min-h-[200px] flex-1 items-center justify-center pt-8">
          {children}
        </div>

        {/* Action button */}
        <button
          type="button"
          onClick={onOpenCode}
          className="mt-6 w-full cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-fit sm:px-5"
        >
          Code example
        </button>
      </div>
    </motion.article>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 24, filter: "blur(8px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Decorative top line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
      />

      {/* Decorative hover wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-white/0 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <h3 className="text-xl font-normal text-white">{title}</h3>

        {/* Decorative divider */}
        <div
          aria-hidden="true"
          className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
        />

        <p className="mt-4 font-light leading-7 text-white/80">{text}</p>
      </div>
    </motion.article>
  );
}

function CodeModal({
  example,
  onClose,
}: {
  example: CodeExample | null;
  onClose: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {example && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-hidden={!example}
        >
          <motion.div
            className="custom-scrollbar relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 30, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 20, scale: 0.98 }
            }
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.25 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="code-modal-title"
            aria-describedby="code-modal-description"
          >
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
              <div>
                <h3 id="code-modal-title" className="text-xl text-white">
                  {example.title}
                </h3>
                <p
                  id="code-modal-description"
                  className="mt-2 text-sm leading-7 text-white/80"
                >
                  {example.description}
                </p>
              </div>

              {/* Close modal button */}
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-full border border-white/10 bg-white/5 p-2 text-white transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                aria-label="Close code modal"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Code preview area */}
            <div className="p-4 sm:p-6">
              <pre className="custom-scrollbar max-h-[60vh] overflow-x-auto overflow-y-auto rounded-2xl border border-white/5 bg-black/20 p-4 text-xs leading-7 text-white/90 sm:text-sm">
                <code>{example.code}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
