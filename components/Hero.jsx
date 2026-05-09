"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.playsInline = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(225,10,30,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block w-[3px] h-[3px] rounded-full bg-white/60"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              filter: "blur(1px)",
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Top vignette to support nav */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-eyebrow flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-crimson" />
            Natural Performance Drink
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-display text-[14vw] md:text-[10vw] lg:text-[8.4vw]"
          >
            FEEL <span className="metallic">THE</span> FLOW.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 max-w-xl text-white/70 text-base md:text-lg leading-relaxed"
          >
            A premium plant-powered formulation engineered for elite movement.
            Built around the S7® blend. No stimulants. No shortcuts. Pure flow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#formula" className="btn-primary">
              Explore Formula
              <Arrow />
            </a>
            <a href="#flow" className="btn-ghost">
              <PlayIcon />
              Watch Experience
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.4em] text-white/50 uppercase">
          Scroll
        </span>
        <div className="w-[22px] h-[36px] rounded-full border border-white/30 relative overflow-hidden">
          <span className="absolute left-1/2 -translate-x-1/2 top-2 w-1 h-1 bg-white rounded-full animate-scrollDot" />
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M2 1.5v9l8-4.5L2 1.5z" />
    </svg>
  );
}
