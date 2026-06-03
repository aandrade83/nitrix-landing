"use client";

import { useEffect, useRef } from "react";

export default function AboutHero() {
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.style.width = "100%";
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[55vh] flex items-end pb-20 pt-32 px-6 lg:px-10 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(225,10,30,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <p className="text-xs tracking-[0.3em] text-crimson uppercase mb-4 font-semibold">
          Our Story
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none">
          Built on Experience.
          <br />
          <span className="text-crimson">Proven by Results.</span>
        </h1>

        {/* Animated underline */}
        <div className="mt-6 h-px w-full bg-white/10 relative overflow-hidden">
          <span
            ref={lineRef}
            className="absolute left-0 top-0 h-full bg-crimson transition-all duration-1000 ease-in-out"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </section>
  );
}
