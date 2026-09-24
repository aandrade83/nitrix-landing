"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, useInView } from "framer-motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

const colors = [
  "from-green-900/40 to-transparent",
  "from-emerald-900/40 to-transparent",
  "from-yellow-900/40 to-transparent",
  "from-red-900/40 to-transparent",
  "from-blue-900/40 to-transparent",
  "from-green-800/40 to-transparent",
  "from-lime-900/40 to-transparent",
];

const content = {
  en: {
    eyebrow: "Core Formula",
    titleA: "The S7®",
    titleB: "Blend.",
    card: "A patented, peer-reviewed combination of 7 plant-based ingredients shown to increase nitric oxide levels by 40% versus placebo. Winner of the 2019 Best New Ingredient award at Food Matters Live.",
    cardFooter: "VDF FutureCeuticals, Inc. · 50 mg per serving",
    dose: "Part of S7® 50 mg",
    plants: "Plants",
    oneBlend: "One Blend · 50 mg",
    s7: [
      { name: "Green Coffee Bean", role: "Clean Energy", description: "Unroasted coffee beans deliver natural chlorogenic acids for smooth, sustained energy without the spike-and-crash of synthetic caffeine." },
      { name: "Green Tea Extract", role: "Focus + Antioxidants", description: "EGCG-rich green tea supports cognitive clarity, fat metabolism, and provides a dense antioxidant layer to protect cells under exercise stress." },
      { name: "Turmeric Root", role: "Anti-Inflammation", description: "Curcumin in turmeric blocks NF-κB signaling, the primary inflammatory pathway activated during intense training, for faster inter-session recovery." },
      { name: "Tart Cherry", role: "Recovery + Soreness", description: "Anthocyanins in tart cherry have been shown to reduce post-exercise muscle soreness by up to 22% in peer-reviewed trials. Recover harder, perform sooner." },
      { name: "Blueberry Extract", role: "Cognitive + Vascular", description: "Rich in pterostilbene and anthocyanins, blueberry extract improves cerebral blood flow and reduces oxidative stress in neurons under high-output load." },
      { name: "Broccoli Sprout", role: "Cellular Defense", description: "Sulforaphane from broccoli sprout activates Nrf2, the master antioxidant switch, triggering your body's own internal defense system for cellular protection." },
      { name: "Kale", role: "Micronutrient Density", description: "A complete micronutrient matrix of Vitamins K, A, C, B6, calcium, iron, copper, and manganese, supporting energy metabolism and oxygen utilization at the cellular level." },
    ],
  },
  es: {
    eyebrow: "Fórmula Central",
    titleA: "El S7®",
    titleB: "Blend.",
    card: "Una combinación patentada y revisada por pares de 7 ingredientes vegetales que ha demostrado aumentar los niveles de óxido nítrico en un 40% frente a placebo. Ganador del premio al Mejor Ingrediente Nuevo 2019 en Food Matters Live.",
    cardFooter: "VDF FutureCeuticals, Inc. · 50 mg por porción",
    dose: "Parte del S7® 50 mg",
    plants: "Plantas",
    oneBlend: "Un Blend · 50 mg",
    s7: [
      { name: "Grano de Café Verde", role: "Energía Limpia", description: "Los granos de café sin tostar aportan ácidos clorogénicos naturales para una energía suave y sostenida, sin el pico y la caída de la cafeína sintética." },
      { name: "Extracto de Té Verde", role: "Enfoque + Antioxidantes", description: "El té verde rico en EGCG favorece la claridad mental y el metabolismo de las grasas, y aporta una densa capa antioxidante que protege las células bajo el estrés del ejercicio." },
      { name: "Raíz de Cúrcuma", role: "Antiinflamatorio", description: "La curcumina de la cúrcuma bloquea la señalización NF-κB, la principal vía inflamatoria que se activa durante el entrenamiento intenso, para una recuperación más rápida entre sesiones." },
      { name: "Cereza Ácida", role: "Recuperación + Dolor Muscular", description: "Se ha demostrado en ensayos revisados por pares que las antocianinas de la cereza ácida reducen el dolor muscular post-ejercicio hasta en un 22%. Recupérate mejor, rinde antes." },
      { name: "Extracto de Arándano", role: "Cognitivo + Vascular", description: "Rico en pterostilbeno y antocianinas, el extracto de arándano mejora el flujo sanguíneo cerebral y reduce el estrés oxidativo en las neuronas bajo alta exigencia." },
      { name: "Brote de Brócoli", role: "Defensa Celular", description: "El sulforafano del brote de brócoli activa Nrf2, el interruptor antioxidante maestro, y pone en marcha el propio sistema de defensa interno del cuerpo para proteger las células." },
      { name: "Kale", role: "Densidad de Micronutrientes", description: "Una matriz completa de micronutrientes con vitaminas K, A, C, B6, calcio, hierro, cobre y manganeso, que apoya el metabolismo energético y el aprovechamiento del oxígeno a nivel celular." },
    ],
  },
};

// md+ layout: 6-col grid, badge dead centre, cards around it (3 · card-badge-card · 2)
const badgeSlot = "md:col-start-3 md:row-start-2";
const cardSlots = [
  "md:col-start-1 md:row-start-1",
  "md:col-start-3 md:row-start-1",
  "md:col-start-5 md:row-start-1",
  "md:col-start-1 md:row-start-2",
  "md:col-start-5 md:row-start-2",
  "md:col-start-2 md:row-start-3",
  "md:col-start-4 md:row-start-3",
];
// Small tilt each card has while tucked behind the badge
const tilts = [-8, 6, -5, 7, -6, 5, -7];
// Pause between the badge landing and the cards bursting out
const RELEASE_DELAY_MS = 1100;

type Offset = { x: number; y: number };

export default function S7BlendSection() {
  const t = content[useLocale()];
  const s7 = t.s7.map((ing, i) => ({ ...ing, color: colors[i] }));

  const gridRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const inView = useInView(gridRef, { once: true, amount: 0.35 });
  // Distance from each card to the badge centre; null = single-column layout (no blend)
  const [offsets, setOffsets] = useState<Offset[] | null>(null);
  const [released, setReleased] = useState(false);

  useEffect(() => {
    // offsetLeft/Top ignore transforms, so this is safe to re-run mid-animation
    function measure() {
      const badge = badgeRef.current;
      if (!badge || !window.matchMedia("(min-width: 768px)").matches) {
        setOffsets(null);
        return;
      }
      const bx = badge.offsetLeft + badge.offsetWidth / 2;
      const by = badge.offsetTop + badge.offsetHeight / 2;
      setOffsets(
        cardRefs.current.map((el) =>
          el
            ? { x: bx - (el.offsetLeft + el.offsetWidth / 2), y: by - (el.offsetTop + el.offsetHeight / 2) }
            : { x: 0, y: 0 }
        )
      );
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => setReleased(true), RELEASE_DELAY_MS);
    return () => clearTimeout(id);
  }, [inView]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="text-[10px] tracking-[0.45em] text-crimson font-semibold uppercase">{t.eyebrow}</span>
              </div>
              <h2 className="text-display text-5xl md:text-7xl">
                {t.titleA}<br />
                <span className="metallic">{t.titleB}</span>
              </h2>
            </div>
            <div className="max-w-md">
              <div className="glass rounded-2xl p-6 border-crimson/20 border">
                <div className="text-5xl font-black text-crimson mb-2">S7®</div>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t.card}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 text-[11px] tracking-widest text-white/35 uppercase">
                  {t.cardFooter}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ingredient cards — they burst out from behind the "7 Plants" badge */}
          <div ref={gridRef} className="relative grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Blend total badge (first in DOM so it leads on mobile) */}
            <motion.div
              ref={badgeRef}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              className={`relative z-20 md:col-span-2 ${badgeSlot} flex flex-col items-center justify-center text-center rounded-2xl p-7 min-h-[180px] border border-crimson/30 bg-[radial-gradient(80%_70%_at_50%_40%,rgba(225,10,30,0.22),transparent_70%),linear-gradient(160deg,#141418,#08080a)] shadow-[0_30px_80px_-30px_rgba(225,10,30,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]`}
            >
              {/* Charge-up glow while the cards are still tucked in */}
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-2xl bg-crimson/20 blur-xl -z-10"
                animate={inView && !released ? { opacity: [0.2, 0.9, 0.2] } : { opacity: 0.35 }}
                transition={inView && !released ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" } : { duration: 0.6 }}
              />
              {/* Shockwave when the blend releases */}
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-2xl border border-crimson/70 pointer-events-none"
                initial={{ opacity: 0, scale: 1 }}
                // Ends back at scale 1 once invisible: a ring left at 1.45 on the
                // full-width mobile badge caused horizontal page overflow
                animate={released ? { opacity: [0.9, 0, 0], scale: [1, 1.45, 1] } : { opacity: 0, scale: 1 }}
                transition={{ duration: 0.95, ease: "easeOut", times: [0, 0.95, 1] }}
              />
              <span className="text-7xl font-black text-crimson leading-none drop-shadow-[0_0_24px_rgba(225,10,30,0.6)]">7</span>
              <span className="text-white font-bold tracking-tight text-lg mt-3">{t.plants}</span>
              <span className="text-white/40 text-xs tracking-widest uppercase mt-1">{t.oneBlend}</span>
            </motion.div>

            {s7.map((ing, i) => {
              const o = offsets?.[i];
              const animate = o
                ? released
                  ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }
                  : { x: o.x, y: o.y, scale: 0.55, rotate: tilts[i], opacity: 0 }
                : inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 28 };
              const transition = o
                ? released
                  ? {
                      type: "spring" as const,
                      stiffness: 110,
                      damping: 17,
                      mass: 0.9,
                      delay: i * 0.07,
                      opacity: { duration: 0.25, delay: i * 0.07 },
                    }
                  : { duration: 0 }
                : { duration: 0.7, delay: 0.15 + i * 0.07 };

              return (
                <motion.article
                  key={ing.name}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  initial={{ opacity: 0, y: 28 }}
                  animate={animate}
                  transition={transition}
                  className={`group relative z-10 md:col-span-2 ${cardSlots[i]} glass rounded-2xl p-7 overflow-hidden hover:border-white/15 transition-[border-color] duration-300`}
                >
                  {/* Color tint */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${ing.color} opacity-60 group-hover:opacity-100 transition-opacity duration-400`} />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <span className="text-[10px] tracking-[0.4em] text-crimson font-semibold uppercase">{ing.role}</span>
                      <span className="shrink-0 whitespace-nowrap text-[10px] tracking-wide text-white/30 font-mono">{t.dose}</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-3">{ing.name}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{ing.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
