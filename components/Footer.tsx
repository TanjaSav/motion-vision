

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { icon: "/images/GithubIcon.svg", label: "Github", href: "https://github.com" },
  { icon: "/images/TwitterIcon.svg", label: "Twitter", href: "https://twitter.com" },
  { icon: "/images/LinkedinIcon.svg", label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/30 bg-black">
  <div className="mx-auto w-full max-w-[1440px] px-6 py-4 sm:px-10 lg:px-12">
    
    <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:items-center md:text-left">
      
      {/* Logo */}
      <div>
        <Link href="/" className="inline-block">
          <Image
            src="/images/Logo_icon.svg"
            width={130}
            height={36}
            alt="Motion Vision Logo"
          />
        </Link>

        <p className="mt-2 text-xs font-light text-white/90">
          Exploring the future of web animations
        </p>
      </div>

      {/* Social */}
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
            whileHover={{ scale: 1.08 }}
          >
            <motion.img
              src={link.icon}
              alt={link.label}
              className="h-4 w-4"
              whileHover={{
                scale: 1.1,
                filter: "drop-shadow(0 0 5px rgba(56,189,248,0.6))",
              }}
            />
          </motion.a>
        ))}
      </div>
    </div>

    <div className="mt-6 border-t border-white/20 pt-4 text-center text-[11px] text-white/70">
      © 2026 Motion Vision. All rights reserved.
    </div>
  </div>
</footer>
  );
}