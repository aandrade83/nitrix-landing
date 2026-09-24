import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    photoAlt: "Giovanni Carlo Palumbo — Founder and Principal, NitricX",
    role: "Founder & Principal",
    eyebrow: "The Mastermind",
    titleA: "25 Years of Building",
    titleB: "What Others Can't.",
    bio: {
      a: "Giovanni Carlo Palumbo is the Founder and Principal of",
      b: "a private holding and corporate strategy entity based in Wyoming, United States. With over",
      years: "25 years of expertise",
      c: "spanning institutional investment, product development, and global business strategy, Giovanni brings an unmatched breadth of knowledge to every venture he leads.",
    },
    vision: "NitricX is not just a product, it is the result of decades of pattern recognition, market intelligence, and a conviction that a truly superior performance drink was still waiting to be built. Giovanni knows the formula works. He built it that way.",
    expertiseLabel: "Areas of Expertise",
    expertise: [
      "IPO & Private Placements",
      "Special Purpose Acquisitions",
      "Beverage Product Development",
      "International Construction",
      "Real Estate Developments",
      "Business Development Corporation",
      "Legal & Accounting",
    ],
  },
  es: {
    photoAlt: "Giovanni Carlo Palumbo — Fundador y Director, NitricX",
    role: "Fundador y Director",
    eyebrow: "La Mente Maestra",
    titleA: "25 Años Construyendo",
    titleB: "Lo Que Otros No Pueden.",
    bio: {
      a: "Giovanni Carlo Palumbo es el Fundador y Director de",
      b: "una entidad privada de holding y estrategia corporativa con sede en Wyoming, Estados Unidos. Con más de",
      years: "25 años de experiencia",
      c: "en inversión institucional, desarrollo de productos y estrategia empresarial global, Giovanni aporta una amplitud de conocimiento inigualable a cada proyecto que lidera.",
    },
    vision: "NitricX no es solo un producto; es el resultado de décadas de reconocimiento de patrones, inteligencia de mercado y la convicción de que una bebida de rendimiento verdaderamente superior aún estaba por crearse. Giovanni sabe que la fórmula funciona. Así la construyó.",
    expertiseLabel: "Áreas de Experiencia",
    expertise: [
      "Salidas a Bolsa y Colocaciones Privadas",
      "Adquisiciones con Propósito Especial",
      "Desarrollo de Bebidas",
      "Construcción Internacional",
      "Desarrollos Inmobiliarios",
      "Corporación de Desarrollo de Negocios",
      "Legal y Contabilidad",
    ],
  },
};

export default function FounderSection({ lang }: { lang: Locale }) {
  const t = content[lang];

  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo */}
          <div className="relative order-last lg:order-first">
            <div
              className="absolute -inset-4 rounded-2xl pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(225,10,30,0.12) 0%, transparent 70%)",
              }}
            />
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/ceo.png"
                alt={t.photoAlt}
                fill
                sizes="(max-width: 1024px) 384px, 50vw"
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient overlay at the bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,5,7,0.85) 0%, transparent 100%)",
                }}
                aria-hidden="true"
              />
              {/* Name plate */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl tracking-tight">
                  Giovanni Carlo Palumbo
                </p>
                <p className="text-crimson text-sm tracking-wider mt-0.5 uppercase font-medium">
                  {t.role}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] text-crimson uppercase mb-4 font-semibold">
              {t.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              {t.titleA}
              <br />
              {t.titleB}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              {t.bio.a}{" "}
              <span className="text-white font-medium">
                Palumbo Arosemena Holdings LLC
              </span>{" "}
              {t.bio.b}{" "}
              <span className="text-white font-medium">{t.bio.years}</span>{" "}
              {t.bio.c}
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              {t.vision}
            </p>

            {/* Expertise grid */}
            <div>
              <p className="text-xs tracking-[0.25em] text-white/30 uppercase mb-4 font-medium">
                {t.expertiseLabel}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {t.expertise.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <span
                      className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-crimson"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
