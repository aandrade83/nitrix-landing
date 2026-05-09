"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#flow", label: "Flow" },
    { href: "#flavors", label: "Flavors" },
    { href: "#performance", label: "Performance" },
    { href: "#formula", label: "Formula" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-extrabold tracking-tight text-lg">
          <span className="text-white">Nitric</span>
          <span className="text-crimson">X</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#cta" className="btn-ghost !py-2 !px-4 text-[12px]">
          Coming Soon
          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-glowPulse" />
        </a>
      </div>
    </motion.header>
  );
}
