import type { Metadata } from "next";
import PerformanceHero from "@/components/pages/performance/PerformanceHero";
import BenefitsGrid from "@/components/pages/performance/BenefitsGrid";
import ScienceSection from "@/components/pages/performance/ScienceSection";
import LifestyleSection from "@/components/pages/performance/LifestyleSection";
import PerformanceCTA from "@/components/pages/performance/PerformanceCTA";
import { languageAlternates, type Locale } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/server";

const meta: Record<Locale, Metadata> = {
  en: {
    title: "Performance — Engineered for Elite Athletes",
    description:
      "Discover how NitricX elevates athletic performance through elevated nitric oxide production, clean energy, and faster recovery. Powered by the S7® Blend.",
    openGraph: {
      title: "NitricX Performance — Plant-Powered Athletic Edge",
      description:
        "Clinically researched S7® Blend. 40% more nitric oxide. Zero synthetic stimulants.",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  },
  es: {
    title: "Rendimiento — Diseñada para Atletas de Élite",
    description:
      "Descubre cómo NitricX eleva el rendimiento deportivo mediante una mayor producción de óxido nítrico, energía limpia y una recuperación más rápida. Impulsada por el S7® Blend.",
    openGraph: {
      title: "Rendimiento NitricX — La Ventaja Deportiva a Base de Plantas",
      description:
        "S7® Blend clínicamente investigado. 40% más óxido nítrico. Cero estimulantes sintéticos.",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/performance">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  return { ...meta[lang], alternates: { canonical: `/${lang}/performance`, ...languageAlternates("/performance") } };
}

export default function PerformancePage() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <PerformanceHero />
      <BenefitsGrid />
      <ScienceSection />
      <LifestyleSection />
      <PerformanceCTA />
    </>
  );
}
