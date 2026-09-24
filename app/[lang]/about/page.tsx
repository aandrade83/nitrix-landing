import type { Metadata } from "next";
import AboutHero from "@/components/pages/about/AboutHero";
import FounderSection from "@/components/pages/about/FounderSection";
import MissionSection from "@/components/pages/about/MissionSection";
import { languageAlternates, type Locale } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/server";

const meta: Record<Locale, Metadata> = {
  en: {
    title: "About — NitricX",
    description:
      "NitricX was born from 25 years of expertise in business development, product innovation, and institutional strategy. Meet the founder behind the formula.",
    openGraph: {
      title: "About NitricX — The Mastermind Behind the Formula",
      description:
        "25 years of global business expertise. One vision: a performance drink that actually works.",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "NitricX — About" }],
    },
  },
  es: {
    title: "Nosotros — NitricX",
    description:
      "NitricX nació de 25 años de experiencia en desarrollo de negocios, innovación de productos y estrategia institucional. Conoce al fundador detrás de la fórmula.",
    openGraph: {
      title: "Sobre NitricX — La Mente Maestra Detrás de la Fórmula",
      description:
        "25 años de experiencia empresarial global. Una visión: una bebida de rendimiento que realmente funciona.",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "NitricX — Nosotros" }],
    },
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  return { ...meta[lang], alternates: { canonical: `/${lang}/about`, ...languageAlternates("/about") } };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const lang = await resolveLocale(params);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <AboutHero />
      <FounderSection lang={lang} />
      <MissionSection lang={lang} />
    </>
  );
}
