"use client";

import { motion, MotionConfig, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";

const content = {
  en: {
    eyebrow: "The Flow Experience",
    titleA: "Built for the",
    titleB: "athlete in motion.",
    phase: "PHASE",
    phases: [
      { n: "01", t: "Performance isn't instant.", d: "It begins quietly. Circulation, oxygen, intent." },
      { n: "02", t: "It builds.", d: "Plant-powered S7® primes the body to do what it does best." },
      { n: "03", t: "You feel it.", d: "A clean activation. No jitter. No crash. Just signal." },
      { n: "04", t: "Then you ride it.", d: "Flow state, sustained. Pure, natural performance." },
    ],
  },
  es: {
    eyebrow: "La Experiencia Flow",
    titleA: "Creada para el",
    titleB: "atleta en movimiento.",
    phase: "FASE",
    phases: [
      { n: "01", t: "El rendimiento no es instantáneo.", d: "Comienza en silencio. Circulación, oxígeno, intención." },
      { n: "02", t: "Se construye.", d: "El S7® a base de plantas prepara al cuerpo para hacer lo que mejor sabe hacer." },
      { n: "03", t: "Lo sientes.", d: "Una activación limpia. Sin nerviosismo. Sin bajón. Solo señal." },
      { n: "04", t: "Y lo aprovechas.", d: "Estado de flow, sostenido. Rendimiento puro y natural." },
    ],
  },
};

const ease = [0.2, 0.8, 0.2, 1] as const;

// One visual per phase: 🤔 → 🔥 → 🤯 → 😎 (Fluent 3D emoji, MIT — rendered in chrome/ember tones)
const phaseIcons: { src: string; treatment: string; enter: Variants; glow: Variants }[] = [
  {
    // 01 — waiting, still beginning: soft fade up with a slight rotation
    src: "/images/flow/thinking.png",
    treatment: "phase-chrome",
    enter: {
      hidden: { opacity: 0, y: 28, rotate: -10 },
      visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1.2, ease, delay: 0.2 } },
    },
    glow: {
      hidden: { opacity: 0 },
      visible: { opacity: 0.35, transition: { duration: 1.4, delay: 0.3 } },
    },
  },
  {
    // 02 — it builds: starts small, grows with a single pulse and a rising glow
    src: "/images/flow/fire.png",
    treatment: "phase-ember",
    enter: {
      hidden: { opacity: 0, scale: 0.55 },
      visible: {
        opacity: 1,
        scale: [0.55, 1.08, 1],
        transition: { duration: 1.1, ease, delay: 0.2, times: [0, 0.65, 1] },
      },
    },
    glow: {
      hidden: { opacity: 0, scale: 0.6 },
      visible: {
        opacity: [0, 0.9, 0.6],
        scale: [0.6, 1.1, 1],
        transition: { duration: 1.4, ease, delay: 0.25 },
      },
    },
  },
  {
    // 03 — you feel it: quick, elegant scale-in with a pulse ring
    src: "/images/flow/exploding.png",
    treatment: "phase-chrome",
    enter: {
      hidden: { opacity: 0, scale: 0.35 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 17, delay: 0.15 },
      },
    },
    glow: {
      hidden: { opacity: 0, scale: 0.7 },
      visible: {
        opacity: [0, 1, 0.75],
        scale: [0.7, 1.35, 1],
        transition: { duration: 0.9, ease, delay: 0.2 },
      },
    },
  },
  {
    // 04 — ride it: smooth horizontal slide with a small tilt that settles
    src: "/images/flow/sunglasses.png",
    treatment: "phase-chrome",
    enter: {
      hidden: { opacity: 0, x: -48, rotate: 8 },
      visible: {
        opacity: 1,
        x: 0,
        rotate: [8, -3, 0],
        transition: { duration: 1.2, ease, delay: 0.2, times: [0, 0.7, 1] },
      },
    },
    glow: {
      hidden: { opacity: 0 },
      visible: { opacity: 0.5, transition: { duration: 1.2, delay: 0.4 } },
    },
  },
];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Expanding ring played once when phase 03 lands
const ringVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: [0, 0.6, 0], scale: [0.8, 1.5, 1.7], transition: { duration: 1.1, ease: "easeOut", delay: 0.3 } },
};

const nodeVariants: Variants = {
  hidden: { scale: 0.4, backgroundColor: "rgba(255,255,255,0.25)", boxShadow: "0 0 0 rgba(225,10,30,0)" },
  visible: {
    scale: 1,
    backgroundColor: "rgba(225,10,30,1)",
    boxShadow: "0 0 14px rgba(225,10,30,0.8)",
    transition: { duration: 0.6, ease },
  },
};

function PhaseIcon({ index }: { index: number }) {
  const icon = phaseIcons[index];

  return (
    <div className="relative w-24 h-24 md:w-44 md:h-44 lg:w-48 lg:h-48" aria-hidden="true">
      {/* Ambient crimson glow behind the orb */}
      <motion.div
        variants={icon.glow}
        className="absolute -inset-6 md:-inset-10 rounded-full bg-crimson/30 blur-2xl md:blur-3xl"
      />
      {index === 2 && (
        <motion.div variants={ringVariants} className="absolute inset-0 rounded-full border border-crimson/60" />
      )}

      <motion.div variants={icon.enter} className="relative w-full h-full">
        {/* Idle float, offset per phase so they never move in sync */}
        <div className="animate-floatSoft w-full h-full" style={{ animationDelay: `${index * -1.1}s` }}>
          <div className="phase-orb w-full h-full rounded-full flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element -- small static asset, matches the rest of the site */}
            <img
              src={icon.src}
              alt=""
              width={128}
              height={128}
              loading="eager"
              draggable={false}
              className={`${icon.treatment} w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 select-none`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FlowSection() {
  const ref = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const t = content[useLocale()];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  // Crimson line fills as the reader moves through the phases
  const { scrollYProgress: timelineProgress } = useScroll({ target: timelineRef, offset: ["start 70%", "end 60%"] });
  const lineScale = useSpring(timelineProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user">
      <section id="flow" ref={ref} className="relative py-20 md:py-32 lg:py-48 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/4 left-0 right-0 h-px flow-line opacity-40" />
          <div className="absolute top-1/2 left-0 right-0 h-px flow-line opacity-25" />
          <div className="absolute top-3/4 left-0 right-0 h-px flow-line opacity-30" />
          <div className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full bg-crimson/15 blur-[120px]" />
          <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <div className="text-eyebrow mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-crimson" /> {t.eyebrow}
            </div>
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl">
              {t.titleA}<br />
              <span className="metallic">{t.titleB}</span>
            </h2>
          </motion.div>

          <div ref={timelineRef} className="relative mt-20 lg:mt-28">
            {/* Connecting line: faint track + crimson progress */}
            <div aria-hidden className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px -translate-x-1/2 bg-white/[0.07]">
              <motion.div
                style={{ scaleY: lineScale }}
                className="absolute inset-0 origin-top bg-gradient-to-b from-crimson/0 via-crimson/80 to-crimson shadow-[0_0_10px_rgba(225,10,30,0.55)]"
              />
            </div>

            <div className="space-y-20 md:space-y-28">
              {t.phases.map((p, i) => {
                const textRight = i % 2 === 1;
                return (
                  <motion.div
                    key={p.n}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-32 items-center"
                  >
                    {/* Node on the line */}
                    <span className="absolute left-4 md:left-1/2 top-12 md:top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden>
                      <motion.span variants={nodeVariants} className="block w-2.5 h-2.5 rounded-full" />
                    </span>

                    <motion.div
                      variants={textVariants}
                      className={`relative pl-10 md:pl-0 ${textRight ? "md:order-2" : "md:order-1"}`}
                    >
                      <div className="text-[10px] tracking-[0.45em] text-crimson font-medium mb-4">
                        {t.phase} {p.n}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[0.95]">
                        {p.t}
                      </h3>
                      <p className="mt-5 text-white/55 max-w-md leading-relaxed">{p.d}</p>
                      <div className="divider-line mt-8" />
                    </motion.div>

                    <div
                      className={`order-first pl-10 md:pl-0 flex justify-start md:justify-center ${
                        textRight ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <PhaseIcon index={i} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
