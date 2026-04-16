"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import Lottie from "lottie-react";
import rocketAnimation from "@/public/images/an3.json";

export default function MicroInteractions() {
  return (
    <main className="bg-[#0a0a0a] pt-20 sm:pt-24">
      <IntroSection />
      <InteractiveDemosSection />
      <LottieSection />
      <MotionSpecsSection />
      <CodeExamples />
    </main>
  );
}

function IntroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Soft background wash */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#223a70]/20 to-[#0a0a0a]" />

      {/* Shared page container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif text-4xl font-light leading-[1.3] text-white sm:text-5xl lg:text-6xl">
            Micro-interactions make
            <br />
            interfaces feel alive
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-8 text-white/70 sm:text-lg">
            Small motion details improve clarity, add feedback, and make digital products
            feel more responsive and polished
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function InteractiveDemosSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Soft cyan glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]" />

      {/* Shared page container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl">
            Micro-interactions create feedback,
            guidance, and emotional response
          </h2>
        </motion.div>

        {/* Interactive demo cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <HoverButton />
          <LikeButton />
          <ToggleSwitch />
          <InputFocus />
          <CardHoverTilt />
          <CursorMagnet />
        </div>
      </div>
    </section>
  );
}

function HoverButton() {
  return (
    <DemoCard
      title="Hover Button"
      description="Scale, glow, and highlight transitions on hover."
    >
      <motion.button
        className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white"
        whileHover={{
          scale: 1.08,
          boxShadow: "0 18px 36px rgba(56, 189, 248, 0.18)",
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
      >
        {/* Moving gloss highlight */}
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.55 }}
        />

        <span className="relative z-10">Hover Me</span>
      </motion.button>
    </DemoCard>
  );
}

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  const handleLike = () => {
    setLiked(!liked);

    if (!liked) {
      setParticles(Array.from({ length: 10 }, (_, i) => i));
      setTimeout(() => setParticles([]), 900);
    }
  };

  return (
    <DemoCard
      title="Like Button"
      description="Click feedback with scale and particle burst."
    >
      <motion.button
        className="relative"
        onClick={handleLike}
        whileTap={{ scale: 0.85 }}
      >
        {/* Heart icon animation */}
        <motion.div
          animate={liked ? { scale: [1, 1.25, 1] } : {}}
          transition={{ duration: 0.35 }}
        >
          <Heart
            size={48}
            className={`transition-colors ${
              liked ? "fill-red-500 text-red-500" : "text-white/50"
            }`}
          />
        </motion.div>

        {/* Particle burst */}
        {particles.map((particle) => (
          <motion.div
            key={particle}
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

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <DemoCard
      title="Toggle Switch"
      description="A compact binary control with spring motion."
    >
      <motion.button
        className={`flex h-12 w-24 cursor-pointer items-center rounded-full p-1 transition-colors ${
          isOn ? "bg-cyan-400/25" : "bg-white/10"
        }`}
        onClick={() => setIsOn(!isOn)}
      >
        {/* Knob slides with spring */}
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
      </motion.button>
    </DemoCard>
  );
}

function InputFocus() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <DemoCard
      title="Input Focus"
      description="Focus state with glow and underline feedback."
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Type something..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
          initial={{ width: 0 }}
          animate={{ width: isFocused ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Focus glow */}
        {isFocused && (
          <motion.div
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

function CardHoverTilt() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  return (
    <DemoCard
      title="Card Hover Tilt"
      description="A subtle 3D tilt effect that follows the cursor."
    >
      <motion.div
        className="flex h-40 w-40 items-center justify-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Sparkles size={44} className="text-cyan-300" />
      </motion.div>
    </DemoCard>
  );
}

function CursorMagnet() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <DemoCard
      title="Cursor Magnet"
      description="The button slightly follows the cursor position"
    >
      <div
        className="flex h-40 w-40 items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.button
          className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white"
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 150, damping: 16 }}
        >
          Pull Me
        </motion.button>
      </div>
    </DemoCard>
  );
}

function LottieSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Soft section glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_30%)]" />

      {/* Shared page container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl">
            Lottie animations are useful for
            polished, lightweight motion assets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-light leading-8 text-white/70 sm:text-lg">
            Lottie is often used for icons, loading states, onboarding visuals, and
            playful UI feedback. It gives designers more control over complex motion
            while keeping implementation lightweight
          </p>
        </motion.div>

        {/* Lottie demo + explanation */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Real Lottie example */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Card title */}
            <h3 className="text-xl font-normal text-white">
              Real Lottie example
            </h3>

            {/* Accent line */}
            <div className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40" />

            {/* Description */}
            <p className="mt-4 font-light leading-7 text-white/70">
              This example shows how a real JSON-based animation can be embedded
              directly inside the interface using <span className="text-white/90">lottie-react</span>.
            </p>

            {/* Demo box */}
            <div className="mt-8 flex min-h-[320px] items-center justify-center rounded-[28px] border border-white/10 bg-black/20 p-6">
              <div className="w-full max-w-[260px]">
                <Lottie
                  animationData={rocketAnimation}
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
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
  const specs = [
    { interaction: "Hover Button", duration: "200ms", easing: "ease-out", trigger: "hover" },
    { interaction: "Like Button", duration: "300ms", easing: "spring", trigger: "click" },
    { interaction: "Toggle Switch", duration: "250ms", easing: "spring", trigger: "click" },
    { interaction: "Input Focus", duration: "300ms", easing: "ease-in-out", trigger: "focus" },
    { interaction: "Card Tilt", duration: "150ms", easing: "spring", trigger: "mousemove" },
    { interaction: "Cursor Magnet", duration: "350ms", easing: "spring", trigger: "mousemove" },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Shared page container */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl">
            Motion specifications help define
            interaction behavior consistently.
          </h2>
        </motion.div>

        {/* Table card */}
        <motion.div
          className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left text-sm font-normal text-cyan-300/80">Interaction</th>
                  <th className="p-4 text-left text-sm font-normal text-cyan-300/80">Duration</th>
                  <th className="p-4 text-left text-sm font-normal text-cyan-300/80">Easing</th>
                  <th className="p-4 text-left text-sm font-normal text-cyan-300/80">Trigger</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, index) => (
                  <motion.tr
                    key={spec.interaction}
                    className="border-b border-white/5 transition-colors hover:bg-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td className="p-4 text-sm text-white">{spec.interaction}</td>
                    <td className="p-4 text-sm text-white/70">{spec.duration}</td>
                    <td className="p-4 text-sm text-white/70">{spec.easing}</td>
                    <td className="p-4 text-sm text-white/70">{spec.trigger}</td>
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
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      {/* Soft hover wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-white/0 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card content */}
      <div className="relative z-10">
        <h3 className="text-xl font-normal text-white">{title}</h3>
        <p className="mt-4 text-sm font-light leading-7 text-white/65">
          {description}
        </p>

        {/* Demo area */}
        <div className="flex min-h-[200px] items-center justify-center pt-8">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      {/* Hover wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-white/0 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <h3 className="text-xl font-normal text-white">{title}</h3>
        <div className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40" />
        <p className="mt-4 font-light leading-7 text-white/75">{text}</p>
      </div>
    </motion.div>
  );
}

// function CodeExamples() {
//   const examples = [
//     {
//       title: "Hover Button",
//       description:
//         "A simple hover interaction using scale, shadow, and a moving highlight layer",
//       code: `const HoverButton = () => (
//   <motion.button
//     className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white"
//     whileHover={{
//       scale: 1.08,
//       boxShadow: "0 18px 36px rgba(56, 189, 248, 0.18)",
//     }}
//     whileTap={{ scale: 0.96 }}
//     transition={{ type: "spring", stiffness: 320, damping: 20 }}
//   >
//     <motion.div
//       className="absolute inset-0 bg-white/10"
//       initial={{ x: "-100%" }}
//       whileHover={{ x: "100%" }}
//       transition={{ duration: 0.55 }}
//     />
//     <span className="relative z-10">Hover Me</span>
//   </motion.button>
// );`,
//     },
//     {
//       title: "Like Button",
//       description:
//         "A feedback interaction with scaling and particle burst after click",
//       code: `const [liked, setLiked] = useState(false);
// const [particles, setParticles] = useState<number[]>([]);

// const handleLike = () => {
//   setLiked(!liked);
//   if (!liked) {
//     setParticles(Array.from({ length: 10 }, (_, i) => i));
//     setTimeout(() => setParticles([]), 900);
//   }
// };`,
//     },
//     {
//       title: "Toggle Switch",
//       description:
//         "A compact spring-based toggle pattern with a sliding knob",
//       code: `const [isOn, setIsOn] = useState(false);

// <motion.button
//   className={\`flex h-12 w-24 items-center rounded-full p-1 \${
//     isOn ? "bg-cyan-400/25" : "bg-white/10"
//   }\`}
//   onClick={() => setIsOn(!isOn)}
// >
//   <motion.div
//     className="h-10 w-10 rounded-full bg-white"
//     animate={{ x: isOn ? 48 : 0 }}
//     transition={{ type: "spring", stiffness: 700, damping: 30 }}
//   />
// </motion.button>`,
//     },
//     {
//       title: "Input Focus",
//       description:
//         "A focused field with animated underline and glow feedback",
//       code: `const [isFocused, setIsFocused] = useState(false);

// <input
//   onFocus={() => setIsFocused(true)}
//   onBlur={() => setIsFocused(false)}
// />

// <motion.div
//   className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-300/70 to-blue-400/40"
//   initial={{ width: 0 }}
//   animate={{ width: isFocused ? "100%" : 0 }}
//   transition={{ duration: 0.3 }}
// />`,
//     },
//     {
//       title: "Card Hover Tilt",
//       description:
//         "A 3D tilt card based on cursor position inside the element",
//       code: `const [rotateX, setRotateX] = useState(0);
// const [rotateY, setRotateY] = useState(0);

// <motion.div
//   animate={{ rotateX, rotateY }}
//   transition={{ type: "spring", stiffness: 320, damping: 26 }}
//   style={{ transformStyle: "preserve-3d" }}
// >
//   <Sparkles size={44} className="text-cyan-300" />
// </motion.div>`,
//     },
//     {
//       title: "Cursor Magnet",
//       description:
//         "A subtle cursor-follow effect that makes the element feel reactive",
//       code: `const [position, setPosition] = useState({ x: 0, y: 0 });

// <motion.button
//   animate={{ x: position.x, y: position.y }}
//   transition={{ type: "spring", stiffness: 150, damping: 16 }}
// >
//   Pull Me
// </motion.button>`,
//     },
//     {
//       title: "Lottie Animation",
//       description:
//         "A real JSON-based animation rendered with lottie-react",
//       code: `import Lottie from "lottie-react";
// import rocketAnimation from "@/public/lottie/rocket.json";

// <Lottie
//   animationData={rocketAnimation}
//   loop={true}
//   autoplay={true}
// />`,
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden py-24 sm:py-28">
//       {/* Shared page container */}
//       <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
//         {/* Section heading */}
//         <motion.div
//           className="mx-auto max-w-5xl text-center"
//           initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <h2 className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl">
//             Code examples show how micro-interactions
//             are built in real interfaces
//           </h2>
//         </motion.div>

//         {/* Code cards */}
//         <div className="mt-14 grid gap-6 lg:grid-cols-2">
//           {examples.map((example, index) => (
//             <motion.div
//               key={example.title}
//               className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
//               initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
//               whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{ duration: 0.9, delay: index * 0.08 }}
//             >
//               <h3 className="text-xl font-normal text-white">{example.title}</h3>

//               <div className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40" />

//               <p className="mt-4 text-sm font-light leading-7 text-white/65">
//                 {example.description}
//               </p>

//               <pre className="mt-6 max-h-[420px] overflow-x-auto overflow-y-auto text-xs leading-7 text-white/65">
//                 <code>{example.code}</code>
//               </pre>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function CodeExamples() {
  const examples = [
    {
      title: "Hover Button",
      description:
        "A simple hover interaction using scale, shadow, and a moving highlight layer.",
      code: `const HoverButton = () => (
  <motion.button
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
    },
    {
      title: "Like Button",
      description:
        "A feedback interaction with scaling and particle burst after click.",
      code: `const [liked, setLiked] = useState(false);
const [particles, setParticles] = useState<number[]>([]);

const handleLike = () => {
  setLiked(!liked);
  if (!liked) {
    setParticles(Array.from({ length: 10 }, (_, i) => i));
    setTimeout(() => setParticles([]), 900);
  }
};`,
    },
    {
      title: "Toggle Switch",
      description:
        "A compact spring-based toggle pattern with a sliding knob.",
      code: `const [isOn, setIsOn] = useState(false);

<motion.button
  className={\`flex h-12 w-24 items-center rounded-full p-1 \${
    isOn ? "bg-cyan-400/25" : "bg-white/10"
  }\`}
  onClick={() => setIsOn(!isOn)}
>
  <motion.div
    className="h-10 w-10 rounded-full bg-white"
    animate={{ x: isOn ? 48 : 0 }}
    transition={{ type: "spring", stiffness: 700, damping: 30 }}
  />
</motion.button>`,
    },
    {
      title: "Input Focus",
      description:
        "A focused field with animated underline and glow feedback.",
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
    },
    {
      title: "Card Hover Tilt",
      description:
        "A 3D tilt card based on cursor position inside the element.",
      code: `const [rotateX, setRotateX] = useState(0);
const [rotateY, setRotateY] = useState(0);

<motion.div
  animate={{ rotateX, rotateY }}
  transition={{ type: "spring", stiffness: 320, damping: 26 }}
  style={{ transformStyle: "preserve-3d" }}
>
  <Sparkles size={44} className="text-cyan-300" />
</motion.div>`,
    },
    {
      title: "Cursor Magnet",
      description:
        "A subtle cursor-follow effect that makes the element feel reactive.",
      code: `const [position, setPosition] = useState({ x: 0, y: 0 });

<motion.button
  animate={{ x: position.x, y: position.y }}
  transition={{ type: "spring", stiffness: 150, damping: 16 }}
>
  Pull Me
</motion.button>`,
    },
    {
      title: "Lottie Animation",
      description:
        "A real JSON-based animation rendered with lottie-react.",
      code: `import Lottie from "lottie-react";
import rocketAnimation from "@/public/lottie/rocket.json";

<Lottie
  animationData={rocketAnimation}
  loop={true}
  autoplay={true}
/>`,
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Shared page container */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-3xl font-light leading-[1.5] text-white md:text-4xl">
            Code examples show how micro-interactions
            are built in real interfaces.
          </h2>
        </motion.div>

        {/* Code cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: index * 0.08 }}
            >
              <h3 className="text-xl font-normal text-white">{example.title}</h3>

              <div className="mt-4 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-blue-400/40" />

              <p className="mt-4 text-sm font-light leading-7 text-white/65">
                {example.description}
              </p>

              <pre className="custom-scrollbar mt-6 max-h-[420px] overflow-x-auto overflow-y-auto rounded-2xl border border-white/5 bg-black/20 p-4 text-xs leading-7 text-white/65">
                <code>{example.code}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}