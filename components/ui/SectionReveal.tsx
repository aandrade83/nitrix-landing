"use client";
// components/ui/SectionReveal.tsx
// Wraps any content and animates it into view when it enters the viewport.
// Uses Framer Motion's whileInView — animation only triggers when the element
// becomes visible as the user scrolls, not on initial page load.
//
// Why "use client"?
// Framer Motion needs access to the browser to observe scroll position and
// detect when elements enter the viewport. That is a browser-only API
// (IntersectionObserver), so this must be a Client Component.

import { motion } from "framer-motion";

type SectionRevealProps = {
  children: React.ReactNode;
  // delay: seconds to wait before starting the animation.
  // Use this to stagger multiple elements — e.g. delay={0}, delay={0.1}, delay={0.2}
  delay?: number;
  // direction: which axis the element travels from
  // "up"   = element starts 24px below its final position (most common)
  // "left" = element starts 24px to the right — useful for horizontal layouts
  direction?: "up" | "left";
  className?: string;
};

export default function SectionReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: SectionRevealProps) {
  // Build the "hidden" state based on direction.
  // We only move 24px — subtle is premium. Big dramatic movement feels cheap.
  // We ONLY touch transform (translateY / translateX) and opacity — never layout.
  const hiddenState = {
    opacity: 0,
    y: direction === "up" ? 24 : 0,
    x: direction === "left" ? 24 : 0,
  };

  // The "visible" state is the element fully in place
  const visibleState = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  return (
    <motion.div
      className={className}
      // Start hidden (invisible + slightly offset)
      initial={hiddenState}
      // Animate to visible when the element enters the viewport
      whileInView={visibleState}
      // viewport settings:
      //   once: true  → animate only the first time it enters view, not every time
      //   margin      → start the animation when the element is 80px from entering
      //                 the viewport (so it feels natural, not too late)
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        // "easeOut" means it starts fast and slows down at the end —
        // the natural, premium feel. "easeIn" (slow start) feels sluggish.
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
