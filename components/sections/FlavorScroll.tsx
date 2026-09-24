"use client";

import Image from "next/image";
import { useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  MotionConfig,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

type FlavorId = "coconut" | "blue" | "cherry" | "grape";

// Visual identity per flavor. Accents are taken from each can's label.
const flavors: {
  id: FlavorId;
  image: string;
  width: number;
  height: number;
  accent: string;
  accentSoft: string;
  bg: string;
  title: string; // gradient used for the big title
}[] = [
  {
    id: "coconut",
    image: "/images/flavors/coconut.png",
    width: 1067,
    height: 1376,
    accent: "#d6a24e",
    accentSoft: "rgba(214,162,78,0.35)",
    bg: "radial-gradient(70% 80% at 62% 55%, rgba(214,162,78,0.28), transparent 60%), linear-gradient(135deg, #1b140b 0%, #0a0806 70%)",
    title: "linear-gradient(180deg, #fff3d6 0%, #d6a24e 55%, #7a5320 100%)",
  },
  {
    id: "blue",
    image: "/images/flavors/blueberry.png",
    width: 967,
    height: 1359,
    accent: "#3d6dff",
    accentSoft: "rgba(61,109,255,0.4)",
    bg: "radial-gradient(70% 80% at 62% 55%, rgba(61,109,255,0.32), transparent 60%), linear-gradient(135deg, #07102b 0%, #04060f 70%)",
    title: "linear-gradient(180deg, #e3ebff 0%, #5b86ff 55%, #1d3aa8 100%)",
  },
  {
    id: "cherry",
    image: "/images/flavors/black.png",
    width: 1010,
    height: 1375,
    accent: "#e10a1e",
    accentSoft: "rgba(225,10,30,0.42)",
    bg: "radial-gradient(70% 80% at 62% 55%, rgba(225,10,30,0.3), transparent 60%), linear-gradient(135deg, #1a0306 0%, #070203 70%)",
    title: "linear-gradient(180deg, #ffffff 0%, #ff4a57 50%, #7a0610 100%)",
  },
  {
    id: "grape",
    image: "/images/flavors/grape.png",
    width: 1035,
    height: 1371,
    accent: "#8b3dff",
    accentSoft: "rgba(139,61,255,0.4)",
    bg: "radial-gradient(70% 80% at 62% 55%, rgba(139,61,255,0.32), transparent 60%), linear-gradient(135deg, #13072a 0%, #06030d 70%)",
    title: "linear-gradient(180deg, #f1e6ff 0%, #a56bff 55%, #4a1a99 100%)",
  },
];

const content = {
  en: {
    section: "The Collection",
    flavor: "Flavor",
    scroll: "Scroll",
    items: [
      { name: "Coconut", tagline: "Natural energy. Tropical mindset.", note: "Tropical · Smooth", alt: "NitricX Coconut 12 oz can" },
      { name: "Blue Raspberry", tagline: "Bold flavor. Clean activation.", note: "Sharp · Electric", alt: "NitricX Blue Raspberry 12 oz can" },
      { name: "Black Cherry", tagline: "Rich flavor. Real performance.", note: "Deep · Bold", alt: "NitricX Black Cherry 12 oz can" },
      { name: "Grape", tagline: "Smooth energy. Elevated focus.", note: "Rich · Modern", alt: "NitricX Grape 12 oz can" },
    ],
    specs: [
      { value: "12 oz", label: "Slim can" },
      { value: "50 mg", label: "S7® Blend" },
      { value: "0", label: "Synthetic stimulants" },
      { value: "0", label: "Artificial dyes" },
    ],
  },
  es: {
    section: "La Colección",
    flavor: "Sabor",
    scroll: "Desliza",
    items: [
      { name: "Coco", tagline: "Energía natural. Mentalidad tropical.", note: "Tropical · Suave", alt: "Lata NitricX Coco 12 oz" },
      { name: "Frambuesa Azul", tagline: "Sabor intenso. Activación limpia.", note: "Intensa · Eléctrica", alt: "Lata NitricX Frambuesa Azul 12 oz" },
      { name: "Cereza Negra", tagline: "Sabor profundo. Rendimiento real.", note: "Profunda · Audaz", alt: "Lata NitricX Cereza Negra 12 oz" },
      { name: "Uva", tagline: "Energía suave. Enfoque elevado.", note: "Rica · Moderna", alt: "Lata NitricX Uva 12 oz" },
    ],
    specs: [
      { value: "12 oz", label: "Lata slim" },
      { value: "50 mg", label: "S7® Blend" },
      { value: "0", label: "Estimulantes sintéticos" },
      { value: "0", label: "Colorantes artificiales" },
    ],
  },
};

type Copy = (typeof content)["en"];

// Bottom-up reveal used by Grape when it isn't driven by the pinned scroll
const clipReveal = {
  off: { clipPath: "inset(100% 0% 0% 0%)" },
  on: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.1, ease: [0.2, 0.8, 0.2, 1] as const } },
};

// Scroll choreography: each flavor holds, then slides left to the next one.
// progress: 0 ─ hold ─ .1 ─ slide ─ .3 ─ hold ─ .4 ─ slide ─ .6 ─ hold ─ .7 ─ slide ─ .9 ─ hold ─ 1
const STOPS = [0, 0.1, 0.3, 0.4, 0.6, 0.7, 0.9, 1];
const TRACK = [0, 0, -25, -25, -50, -50, -75, -75]; // % of the 400%-wide track
const ease = [0.2, 0.8, 0.2, 1] as const;

// md+ gets the pinned horizontal scroll; below that the flavors stack vertically
const DESKTOP_QUERY = "(min-width: 768px)";
function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(DESKTOP_QUERY);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false
  );
}

export default function FlavorScroll() {
  const t = content[useLocale()];
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState([false, false, false, false]);
  // Panels only play their entrance once the pinned stage is actually on screen
  const stageInView = useInView(stageRef, { amount: 0.3 });
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const rawX = useTransform(scrollYProgress, STOPS, TRACK);
  const smoothX = useSpring(rawX, { stiffness: 140, damping: 32, mass: 0.6 });
  const x = useTransform(smoothX, (v) => `${v}%`);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = v < 0.2 ? 0 : v < 0.5 ? 1 : v < 0.8 ? 2 : 3;
    setActive(idx);
    // Once a flavor has played its entrance it stays composed, so the outgoing
    // panel slides away intact instead of emptying out mid-transition
    if (v > 0) setSeen((s) => (s[idx] ? s : s.map((x, j) => x || j === idx)));
  });

  // Reduced motion: no pinning, flavors simply stack vertically
  if (reduceMotion) {
    return (
      <section id="flavors" ref={sectionRef} aria-label={t.section}>
        {flavors.map((f, i) => (
          <div key={f.id} className="relative min-h-svh overflow-hidden">
            <FlavorPanel index={i} copy={t} isActive progress={scrollYProgress} scrollReveal={false} />
          </div>
        ))}
      </section>
    );
  }

  const accent = flavors[active].accent;

  return (
    <MotionConfig reducedMotion="user">
      {/*
        Desktop (md+): 400vh section with a sticky stage; vertical scroll drives the track sideways.
        Mobile: no pinning — panels stack and each one animates in as it scrolls into view.
      */}
      <section id="flavors" ref={sectionRef} aria-label={t.section} className="relative md:h-[400vh]">
        <div className="md:hidden max-w-[1400px] mx-auto px-6 pb-2">
          <div className="text-eyebrow flex items-center gap-3">
            <span className="w-8 h-px bg-crimson" /> {t.section}
          </div>
        </div>

        <div ref={stageRef} className="md:sticky md:top-0 md:h-svh md:overflow-hidden">
          {/* transform-none! overrides the inline scroll-driven x on mobile */}
          <motion.div
            style={{ x }}
            className="flex flex-col md:flex-row md:h-full md:w-[400%] md:will-change-transform max-md:transform-none!"
          >
            {flavors.map((f, i) => (
              <div key={f.id} className="relative md:h-full md:w-1/4 overflow-hidden">
                <FlavorPanel
                  index={i}
                  copy={t}
                  standalone={!isDesktop}
                  isActive={stageInView && (active === i || seen[i])}
                  progress={scrollYProgress}
                  scrollReveal={isDesktop}
                />
              </div>
            ))}
          </motion.div>

          {/* HUD — section label */}
          <div className="hidden md:block pointer-events-none absolute top-24 left-0 right-0">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
              <div className="text-eyebrow flex items-center gap-3">
                <span className="w-8 h-px bg-crimson" /> {t.section}
              </div>
              <div className="font-mono text-xs tracking-[0.3em] text-white/60" aria-live="polite">
                <span className="text-white">{String(active + 1).padStart(2, "0")}</span> / 04
              </div>
            </div>
          </div>

          {/* HUD — flavor progress */}
          <div className="hidden md:block pointer-events-none absolute bottom-10 left-0 right-0">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {flavors.map((f, i) => (
                  <div key={f.id}>
                    <div className="h-[2px] rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full origin-left"
                        style={{ backgroundColor: accent }}
                        animate={{ scaleX: i <= active ? 1 : 0 }}
                        transition={{ duration: 0.6, ease }}
                      />
                    </div>
                    <div
                      className={`hidden md:block mt-3 text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
                        i === active ? "text-white" : "text-white/30"
                      }`}
                    >
                      {t.items[i].name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function FlavorPanel({
  index,
  copy,
  isActive,
  progress,
  scrollReveal = true,
  standalone = false,
}: {
  index: number;
  copy: Copy;
  isActive: boolean;
  progress: MotionValue<number>;
  scrollReveal?: boolean;
  /** Stacked (mobile) panel: animates when it enters the viewport instead of following the pinned track */
  standalone?: boolean;
}) {
  const f = flavors[index];
  const item = copy.items[index];
  const panelRef = useRef<HTMLDivElement>(null);
  const panelInView = useInView(panelRef, { once: true, amount: 0.25 });
  const state = (standalone ? panelInView : isActive) ? "on" : "off";

  // Grape: title + can are revealed by the scroll itself while the panel slides in
  const reveal = useTransform(progress, [0.68, 0.86], [100, 0]);
  const clip = useTransform(reveal, (v) => `inset(${v}% 0 0 0)`);
  const revealStyle = f.id === "grape" && scrollReveal ? { clipPath: clip } : undefined;

  return (
    <div ref={panelRef} className="relative md:absolute md:inset-0" style={{ background: f.bg }}>
      {/* Giant background word */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-extrabold uppercase leading-none tracking-tighter select-none whitespace-nowrap text-[26vw] md:text-[19vw]"
        style={{ WebkitTextStroke: `1px ${f.accentSoft}`, color: "transparent", opacity: 0.35 }}
      >
        {item.name.split(" ")[0]}
      </div>

      <div className="relative md:h-full max-w-[1400px] mx-auto px-6 lg:px-10 pt-14 pb-16 md:pt-28 md:pb-24 grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8">
        {/* Copy */}
        <div className="md:col-span-5 z-10 order-1">
          <motion.div
            initial="off"
            animate={state}
            variants={{ off: { opacity: 0, y: 16 }, on: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
            className="text-[10px] tracking-[0.45em] font-semibold uppercase mb-3 md:mb-5"
            style={{ color: f.accent }}
          >
            {copy.flavor} 0{index + 1}
          </motion.div>

          <FlavorTitle id={f.id} name={item.name} gradient={f.title} accent={f.accent} state={state} revealStyle={revealStyle} />

          <motion.p
            initial="off"
            animate={state}
            variants={{ off: { opacity: 0, y: 14 }, on: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.25 } } }}
            className="mt-4 md:mt-6 text-white/70 text-base md:text-xl max-w-md leading-relaxed"
          >
            {item.tagline}
          </motion.p>

          <TitleIndicator id={f.id} accent={f.accent} state={state} />

          <motion.div
            initial="off"
            animate={state}
            variants={{ off: { opacity: 0 }, on: { opacity: 1, transition: { duration: 0.6, delay: 0.45 } } }}
            className="mt-5 md:mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] tracking-[0.25em] uppercase text-white/80"
            style={{ borderColor: f.accentSoft, background: "rgba(0,0,0,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: f.accent }} />
            {item.note}
          </motion.div>
        </div>

        {/* Can */}
        <div className="md:col-span-4 order-2 relative flex items-center justify-center h-[min(52svh,440px)] md:h-[70svh]">
          <CanStage flavor={f} alt={item.alt} state={state} revealStyle={revealStyle} />
        </div>

        {/* Specs column (VIDA-style) */}
        <div className="hidden md:flex md:col-span-3 order-3 flex-col gap-6 lg:gap-8 items-end text-right z-10">
          {copy.specs.map((s, i) => (
            <motion.div
              key={i}
              initial="off"
              animate={state}
              variants={{
                off: { opacity: 0, x: 24 },
                on: { opacity: 1, x: 0, transition: { duration: 0.6, ease, delay: 0.35 + i * 0.08 } },
              }}
            >
              <div className="text-3xl lg:text-4xl font-black tracking-tight text-white">{s.value}</div>
              <div className="mt-1 text-[10px] tracking-[0.3em] uppercase text-white/45">{s.label}</div>
              <div className="mt-3 ml-auto h-px w-10" style={{ backgroundColor: f.accentSoft }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Title micro-animations (from Ideas.png) ─────────────────────────────── */

function FlavorTitle({
  id,
  name,
  gradient,
  accent,
  state,
  revealStyle,
}: {
  id: FlavorId;
  name: string;
  gradient: string;
  accent: string;
  state: "on" | "off";
  revealStyle?: { clipPath: MotionValue<string> };
}) {
  const words = name.split(" ");
  const base = "text-display uppercase text-[13vw] md:text-[6.2vw] lg:text-[5.8vw] leading-[0.85]";
  const fill = { backgroundImage: gradient, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" } as const;

  // 02 Blue Raspberry — fade + slide, word by word
  if (id === "blue") {
    return (
      <h3 className={base}>
        {words.map((w, i) => (
          <motion.span
            key={w}
            className="block"
            style={fill}
            initial="off"
            animate={state}
            variants={{
              off: { opacity: 0, x: -60 },
              on: { opacity: 1, x: 0, transition: { duration: 0.8, ease, delay: 0.1 + i * 0.12 } },
            }}
          >
            {w}
          </motion.span>
        ))}
      </h3>
    );
  }

  // 03 Black Cherry — pulse glow
  if (id === "cherry") {
    return (
      <motion.h3
        className={base}
        initial="off"
        animate={state}
        variants={{
          off: { opacity: 0, scale: 0.94 },
          on: {
            opacity: 1,
            scale: 1,
            filter: [
              `drop-shadow(0 0 0px ${accent}00)`,
              `drop-shadow(0 0 28px ${accent}cc)`,
              `drop-shadow(0 0 10px ${accent}66)`,
            ],
            transition: { duration: 1.2, ease, filter: { duration: 2.4, repeat: Infinity, repeatType: "mirror" } },
          },
        }}
      >
        {words.map((w) => (
          <span key={w} className="block" style={fill}>
            {w}
          </span>
        ))}
      </motion.h3>
    );
  }

  // 04 Grape — revealed by the scroll (clip-path driven by scroll progress on desktop,
  // a clip-path reveal on enter when stacked on mobile)
  if (id === "grape") {
    return (
      <motion.h3
        className={base}
        style={revealStyle}
        initial={revealStyle ? false : "off"}
        animate={revealStyle ? undefined : state}
        variants={revealStyle ? undefined : clipReveal}
      >
        {words.map((w) => (
          <span key={w} className="block" style={fill}>
            {w}
          </span>
        ))}
      </motion.h3>
    );
  }

  // 01 Coconut — soft float
  return (
    <motion.h3
      className={base}
      initial="off"
      animate={state}
      variants={{
        off: { opacity: 0, y: 30 },
        on: {
          opacity: 1,
          y: [30, 0, -6, 0],
          // `times` must only apply to the 4-keyframe y; sharing it with the
          // 2-value opacity left the title stuck at opacity 0
          transition: { y: { duration: 1.4, ease, times: [0, 0.45, 0.75, 1] }, opacity: { duration: 0.6 } },
        },
      }}
    >
      {/* Float lives on a wrapper: animating the background-clip:text span itself
          makes Chrome drop the text when the layer is promoted (seen on mobile) */}
      <span className="block animate-floatSoft">
        {words.map((w) => (
          <span key={w} className="block" style={fill}>
            {w}
          </span>
        ))}
      </span>
    </motion.h3>
  );
}

// Small accent under the tagline: loading bar for most flavors, dots for Blue Raspberry
function TitleIndicator({ id, accent, state }: { id: FlavorId; accent: string; state: "on" | "off" }) {
  if (id === "blue") {
    return (
      <div className="mt-5 md:mt-7 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: accent }}
            initial="off"
            animate={state}
            variants={{ off: { opacity: 0, x: -10 }, on: { opacity: 1, x: 0, transition: { delay: 0.4 + i * 0.1 } } }}
          />
        ))}
        <span className="ml-2 h-px w-40 bg-white/15" />
      </div>
    );
  }
  return (
    <div className="mt-5 md:mt-7 h-[3px] w-48 md:w-64 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className="h-full origin-left rounded-full"
        style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }}
        initial="off"
        animate={state}
        variants={{ off: { scaleX: 0 }, on: { scaleX: 0.35, transition: { duration: 1.1, ease, delay: 0.35 } } }}
      />
    </div>
  );
}

/* ─── Can + per-flavor effects ────────────────────────────────────────────── */

function CanStage({
  flavor: f,
  alt,
  state,
  revealStyle,
}: {
  flavor: (typeof flavors)[number];
  alt: string;
  state: "on" | "off";
  revealStyle?: { clipPath: MotionValue<string> };
}) {
  const canEnter = {
    coconut: { off: { opacity: 0, y: 60, rotate: -4 }, on: { opacity: 1, y: 0, rotate: 0 } },
    blue: { off: { opacity: 0, x: 120, rotate: 6 }, on: { opacity: 1, x: 0, rotate: 0 } },
    cherry: { off: { opacity: 0, scale: 0.85 }, on: { opacity: 1, scale: 1 } },
    grape: revealStyle ? { off: { opacity: 1 }, on: { opacity: 1 } } : clipReveal,
  }[f.id];

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Rotating sunburst behind the can */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 w-[140%] md:w-[170%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-spinSlow opacity-60"
        style={{
          background: `repeating-conic-gradient(from 0deg, ${f.accentSoft} 0deg 4deg, transparent 4deg 16deg)`,
          maskImage: "radial-gradient(closest-side, #000 20%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(closest-side, #000 20%, transparent 72%)",
        }}
      />

      {/* Glow — pulses for Black Cherry */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 w-[70%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: f.accentSoft }}
        initial="off"
        animate={state}
        variants={
          f.id === "cherry"
            ? {
                off: { opacity: 0, scale: 0.8 },
                on: { opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9], transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } },
              }
            : { off: { opacity: 0 }, on: { opacity: 0.8, transition: { duration: 1 } } }
        }
      />

      {/* Blue Raspberry — speed streaks */}
      {f.id === "blue" && (
        <div aria-hidden className="absolute inset-y-[20%] right-1/2 w-[80%] flex flex-col justify-around">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className="block h-px rounded-full"
              style={{ background: `linear-gradient(90deg, transparent, ${f.accent})`, width: `${50 + ((i * 37) % 50)}%`, marginLeft: "auto" }}
              initial="off"
              animate={state}
              variants={{
                off: { opacity: 0, x: 80 },
                on: { opacity: [0, 0.9, 0.4], x: [80, 0, -10], transition: { duration: 1, ease, delay: 0.1 + i * 0.06 } },
              }}
            />
          ))}
        </div>
      )}

      {/* Grape — vertical light bars while it reveals */}
      {f.id === "grape" && (
        <div aria-hidden className="absolute inset-y-[8%] inset-x-[18%] flex justify-between pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="block w-px h-full"
              style={{ background: `linear-gradient(180deg, transparent, ${f.accentSoft}, transparent)` }}
            />
          ))}
        </div>
      )}

      {/* Can image */}
      <motion.div
        className="relative h-full z-10"
        style={revealStyle}
        initial="off"
        animate={state}
        variants={{
          off: canEnter.off,
          on: { ...canEnter.on, transition: { duration: 1, ease } },
        }}
      >
        <div className={`h-full ${f.id === "coconut" ? "animate-floatY" : "animate-floatSoft"}`}>
          <Image
            src={f.image}
            alt={alt}
            width={f.width}
            height={f.height}
            loading="eager"
            sizes="(max-width: 768px) 70vw, 34vw"
            className="h-full w-auto object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.65)]"
          />
        </div>
      </motion.div>

      {/* Coconut & Black Cherry — orbit ring in front of the can */}
      {(f.id === "coconut" || f.id === "cherry") && (
        <motion.svg
          aria-hidden
          viewBox="0 0 400 140"
          className="absolute left-1/2 top-[58%] w-[115%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
          initial="off"
          animate={state}
          variants={{ off: { opacity: 0, rotate: -18 }, on: { opacity: 1, rotate: -10, transition: { duration: 1.2, ease, delay: 0.3 } } }}
        >
          <defs>
            <linearGradient id={`ring-${f.id}`} x1="0" x2="1">
              <stop offset="0" stopColor={f.accent} stopOpacity="0" />
              <stop offset="0.5" stopColor={f.accent} stopOpacity="1" />
              <stop offset="1" stopColor={f.accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Only the front arc, so the ring reads as wrapping around the can */}
          <path d="M 10 70 A 190 55 0 0 0 390 70" fill="none" stroke={`url(#ring-${f.id})`} strokeWidth="1.5" strokeOpacity="0.6" />
          {/* Spark travelling along the arc */}
          <path
            d="M 10 70 A 190 55 0 0 0 390 70"
            fill="none"
            stroke={f.accent}
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-ringDash"
            style={{ filter: `drop-shadow(0 0 6px ${f.accent})` }}
          />
        </motion.svg>
      )}
    </div>
  );
}
