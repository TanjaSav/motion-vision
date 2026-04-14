"use client";
import { motion } from "framer-motion";
import { Heart, ToggleLeft, MousePointer2, Sparkles, Focus } from "lucide-react";
import {useState } from "react";

export default function MicroInteractions() {
  return (
    <main className="pt-32 pb-20 bg-[#0a0a0a]">
      <div className="w-[1440px] mx-auto px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Micro-interactions
            </span>
          </h1>
          <p className="text-xl text-white/70">
            Small animations that make interfaces feel alive.
          </p>
        </motion.div>

        {/* Interactive Demos Grid */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          <HoverButton />
          <LikeButton />
          <ToggleSwitch />
          <InputFocus />
          <CardHoverTilt />
          <CursorMagnet />
        </div>

        {/* Motion Specs Table */}
        <MotionSpecsTable />

        {/* Code Examples */}
        <CodeExamples />
      </div>
    </main>
  );
}

function HoverButton() {
  return (
    <DemoCard
      title="Hover Button"
      description="Scale, shadow, and color transitions"
    >
      <motion.button
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full relative overflow-hidden"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
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
      setParticles(Array.from({ length: 12 }, (_, i) => i));
      setTimeout(() => setParticles([]), 1000);
    }
  };

  return (
    <DemoCard
      title="Like Button"
      description="Particle explosion on click"
    >
      <motion.button
        className="relative"
        onClick={handleLike}
        whileTap={{ scale: 0.8 }}
      >
        <motion.div
          animate={liked ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Heart
            size={48}
            className={`${
              liked ? "fill-red-500 text-red-500" : "text-white/50"
            } transition-colors`}
          />
        </motion.div>

        {/* Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full"
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos((particle * Math.PI * 2) / 12) * 50,
              y: Math.sin((particle * Math.PI * 2) / 12) * 50,
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
      description="Smooth slide with bounce"
    >
      <motion.button
        className={`w-24 h-12 rounded-full p-1 flex items-center ${
          isOn ? "bg-gradient-to-r from-cyan-500 to-purple-600" : "bg-white/20"
        } transition-colors cursor-pointer`}
        onClick={() => setIsOn(!isOn)}
      >
        <motion.div
          className="w-10 h-10 bg-white rounded-full shadow-lg"
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
          animate={{
            x: isOn ? 48 : 0,
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
      description="Glow and underline animation"
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Type something..."
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none transition-all"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: isFocused ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />
        {isFocused && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg blur-xl -z-10"
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
      description="3D tilt following cursor"
    >
      <motion.div
        className="w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-lg"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Sparkles size={48} className="text-cyan-400" />
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
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <DemoCard
      title="Cursor Magnet"
      description="Element attracted to cursor"
    >
      <div
        className="w-40 h-40 flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold"
          animate={{
            x: position.x,
            y: position.y,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          Pull Me
        </motion.button>
      </div>
    </DemoCard>
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
      className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-white/60 mb-8">{description}</p>
      <div className="flex items-center justify-center min-h-[200px]">
        {children}
      </div>
    </motion.div>
  );
}

function MotionSpecsTable() {
  const specs = [
    { interaction: "Hover Button", duration: "200ms", easing: "ease-out", trigger: "hover" },
    { interaction: "Like Button", duration: "300ms", easing: "spring", trigger: "click" },
    { interaction: "Toggle Switch", duration: "250ms", easing: "spring", trigger: "click" },
    { interaction: "Input Focus", duration: "300ms", easing: "ease-in-out", trigger: "focus" },
    { interaction: "Card Tilt", duration: "150ms", easing: "spring", trigger: "mousemove" },
    { interaction: "Cursor Magnet", duration: "350ms", easing: "spring", trigger: "mousemove" },
  ];

  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Motion Specifications</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-cyan-400">Interaction</th>
              <th className="text-left p-4 text-cyan-400">Duration</th>
              <th className="text-left p-4 text-cyan-400">Easing</th>
              <th className="text-left p-4 text-cyan-400">Trigger</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec, index) => (
              <motion.tr
                key={spec.interaction}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <td className="p-4 font-semibold">{spec.interaction}</td>
                <td className="p-4 text-white/70">{spec.duration}</td>
                <td className="p-4 text-white/70">{spec.easing}</td>
                <td className="p-4 text-white/70">{spec.trigger}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function CodeExamples() {
  const examples = [
    {
      title: "Hover Button",
      code: `<motion.button
  className="px-8 py-4 bg-gradient-to-r 
    from-cyan-500 to-purple-600 
    rounded-full relative overflow-hidden"
  whileHover={{
    scale: 1.1,
    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ 
    type: "spring", 
    stiffness: 400, 
    damping: 17 
  }}
>
  <motion.div
    className="absolute inset-0 bg-white/20"
    initial={{ x: "-100%" }}
    whileHover={{ x: "100%" }}
    transition={{ duration: 0.5 }}
  />
  <span className="relative z-10">
    Hover Me
  </span>
</motion.button>`,
    },
    {
      title: "Like Button",
      code: `const [liked, setLiked] = useState(false);
const [particles, setParticles] = useState<number[]>([]);

const handleLike = () => {
  setLiked(!liked);
  if (!liked) {
    setParticles(Array.from({ length: 12 }, (_, i) => i));
    setTimeout(() => setParticles([]), 1000);
  }
};

<motion.button
  className="relative"
  onClick={handleLike}
  whileTap={{ scale: 0.8 }}
>
  <motion.div
    animate={liked ? { scale: [1, 1.3, 1] } : {}}
    transition={{ duration: 0.3 }}
  >
    <Heart
      size={48}
      className={\`\${liked ? 
        "fill-red-500 text-red-500" : 
        "text-white/50"} transition-colors\`} 
    />
  </motion.div>

  {/* Particles */}
  {particles.map((particle) => (
    <motion.div
      key={particle}
      className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full"
      initial={{ scale: 0, x: 0, y: 0 }}
      animate={{
        scale: [0, 1, 0],
        x: Math.cos((particle * Math.PI * 2) / 12) * 50,
        y: Math.sin((particle * Math.PI * 2) / 12) * 50,
        opacity: [1, 1, 0]
      }}
      transition={{ duration: 0.8 }}
    />
  ))}
</motion.button>`,
    },
    {
      title: "Toggle Switch",
      code: `const [isOn, setIsOn] = useState(false);

<motion.button
  className={\`w-24 h-12 rounded-full p-1 
    flex items-center \${isOn ? 
      "bg-gradient-to-r from-cyan-500 to-purple-600" : 
      "bg-white/20"} transition-colors cursor-pointer\`}
  onClick={() => setIsOn(!isOn)}
>
  <motion.div
    className="w-10 h-10 bg-white rounded-full 
      shadow-lg"
    layout
    transition={{
      type: "spring",
      stiffness: 700,
      damping: 30
    }}
    animate={{ x: isOn ? 48 : 0 }}
  />
</motion.button>`,
    },
    {
      title: "Input Focus",
      code: `const [isFocused, setIsFocused] = useState(false);

<div className="relative w-full">
  <input
    type="text"
    placeholder="Type something..."
    className="w-full px-4 py-3 bg-white/5 
      border border-white/10 rounded-lg 
      text-white placeholder:text-white/40 focus:outline-none transition-all"
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
  />
  <motion.div
    className="absolute -bottom-1 left-0 h-0.5 
      bg-gradient-to-r from-cyan-400 
      to-purple-500"
    initial={{ width: 0 }}
    animate={{ width: isFocused ? "100%" : 0 }}
    transition={{ duration: 0.3 }}
  />
  {isFocused && (
    <motion.div
      className="absolute inset-0 
        bg-gradient-to-r from-cyan-400/20 
        to-purple-500/20 rounded-lg blur-xl -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</div>`,
    },
    {
      title: "Card Hover Tilt",
      code: `const [rotateX, setRotateX] = useState(0);
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

<motion.div
  className="w-40 h-40 bg-gradient-to-br 
    from-cyan-500/30 to-purple-500/30 
    rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-lg"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  animate={{ rotateX, rotateY }}
  transition={{ 
    type: "spring", 
    stiffness: 400, 
    damping: 30 
  }}
  style={{ transformStyle: "preserve-3d" }}
>
  <Sparkles size={48} className="text-cyan-400" />
</motion.div>`,
    },
    {
      title: "Cursor Magnet",
      code: `const [position, setPosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  setPosition({ x: x * 0.3, y: y * 0.3 });
};

const handleMouseLeave = () => {
  setPosition({ x: 0, y: 0 });
};

<div
  className="w-40 h-40 flex items-center 
    justify-center"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <motion.button
    className="px-6 py-3 bg-gradient-to-r 
      from-cyan-500 to-purple-600 
      rounded-full text-white font-semibold"
    animate={{ x: position.x, y: position.y }}
    transition={{ 
      type: "spring", 
      stiffness: 150, 
      damping: 15 
    }}
  >
    Pull Me
  </motion.button>
</div>`,
    },
  ];

  return (
    <section className="mt-20">
      <div className="w-[1440px] mx-auto px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Code Examples</h2>
        <div className="grid grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              className="p-6 bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-cyan-400">
                {example.title}
              </h3>
              <pre className="text-xs text-white/70 overflow-x-auto max-h-[400px] overflow-y-auto custom-scrollbar">
                <code>{example.code}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}