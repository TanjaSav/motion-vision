"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { icon: "/images/GithubIcon.svg", label: "Github", href: "https://github.com" },
  { icon: "/images/TwitterIcon.svg", label: "Twitter", href: "https://twitter.com" },
  { icon: "/images/LinkedinIcon.svg", label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      
      {/* Sweeping Neon Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-50">
        <motion.div
          className="h-full w-1/3 bg-linear-to-r from-transparent via-white to-transparent"
          animate={{ x: ["-100%", "300%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-360 w-full mx-auto px-6 sm:px-10 lg:px-12 py-12">
        
        {/* FLEX WRAPPER */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-8 text-center md:text-left">
          
          {/* Logo */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-500  bg-clip-text text-transparent">
              Motion Vision
            </h3>
            <p className="text-white/90 mt-2 text-sm sm:text-base">
              Exploring the future of web animations
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 sm:gap-6 justify-center md:justify-start">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-white/5 rounded-full border border-white/10 transition-all group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                

                {/* Icon Container */}
                <motion.div
                  className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.img
                    src={link.icon}
                    alt={link.label}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      filter: "drop-shadow(0 0 8px rgba(0, 255, 255, 0.7))",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                  />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-white/65 text-xs sm:text-sm">
          © 2026 Motion Vision. All rights reserved.
        </div>
      </div>
    </footer>
  );
}