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

  const navLinks = [
    { label: "About", href: "/" },
    { label: "Micro-interactions", href: "/Micro-Interactions" },
    { label: "Scroll Animations", href: "/Scroll-Animations" },
    { label: "Page Transitions", href: "/Transitions" },
    { label: "Lottie Animations", href: "/Lottie-Animations" },

  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] backdrop-blur-xl border-b border-white/30">
      <div className="max-w-360 w-full mx-auto px-6 sm:px-10 lg:px-12 py-4 flex items-center justify-between overflow-x-hidden">
        {/* Logo */}
        <Link
          href="/"
          // className="text-2xl font-medium from-cyan-300 to-cyan-600 bg-linear-to-r  bg-clip-text text-transparent"
        >
          <Image
            src="./images/Logo_icon.svg"
            width={150}
            height={40}     
            alt="Motion Vision Logo"
          />
          {/* Motion Vision */}
        </Link>
        

        {/* Desktop Navigation */}
        <nav className="hidden font-light md:flex gap-10 text-white/80 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-white  py-2 group"
            >
              <span className="relative inline-block">
                {link.label}

                {/* ACTIVE underline */}
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-cyan-300 to-cyan-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* HOVER underline */}
                {pathname !== link.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-cyan-300 to-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10"
          >
            <nav className="flex flex-col items-center py-6 gap-6 text-white/90 text-md w-full">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className="relative py-2 group"
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    <span className="relative inline-block">
                      {link.label}

                      {/* ACTIVE underline (same as desktop) */}
                      {pathname === link.href && (
                        <motion.div
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-cyan-300 to-cyan-600"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* HOVER underline (same as desktop) */}
                      {pathname !== link.href && (
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-cyan-300 to-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      )}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}