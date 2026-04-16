"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Navigation items
  const navLinks = [
    { label: "About", href: "/" },
    { label: "Interactive Animations", href: "/Interactive-Animations" },
    { label: "Scroll Animations", href: "/Scroll-Animations" },
    { label: "Page Transitions", href: "/Transitions" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/30 bg-[#0a0a0a]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between overflow-x-hidden px-6 py-4 sm:px-10 lg:px-12">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/Logo_icon.svg"
            width={150}
            height={40}
            alt="Motion Vision Logo"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden whitespace-nowrap font-light text-white/80 md:flex md:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className="group relative py-2 text-white"
              >
                <span className="relative inline-block">
                  {link.label}

                  {/* Hover underline for inactive items */}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 h-[0.5px] w-full origin-left scale-x-0 bg-linear-to-r from-cyan-300/70 to-blue-400/40 transition-transform duration-300 group-hover:scale-x-100" />
                  )}

                  {/* Active underline */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-[0.5px] w-full bg-linear-to-r from-cyan-300/70 to-blue-400/40"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="cursor-pointer text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex w-full flex-col items-center gap-6 py-6 text-md text-white/90">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.label}
                    className="group relative py-2"
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-white"
                    >
                      <span className="relative inline-block">
                        {link.label}

                        {/* Hover underline for inactive items */}
                        {!isActive && (
                          <span className="absolute -bottom-1 left-0 h-[0.5px] w-full origin-left scale-x-0 bg-linear-to-r from-cyan-300/70 to-blue-400/40 transition-transform duration-300 group-hover:scale-x-100" />
                        )}

                        {/* Active underline */}
                        {isActive && (
                          <motion.div
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-0 h-[0.5px] w-full bg-linear-to-r from-cyan-300/70 to-blue-400/40"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

