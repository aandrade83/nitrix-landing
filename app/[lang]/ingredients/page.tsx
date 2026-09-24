import type { Metadata } from "next";
import IngredientsHero from "@/components/pages/ingredients/IngredientsHero";
import S7BlendSection from "@/components/pages/ingredients/S7BlendSection";
import SupportingIngredients from "@/components/pages/ingredients/SupportingIngredients";
import TransparencySection from "@/components/pages/ingredients/TransparencySection";
import { languageAlternates, type Locale } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/server";

const meta: Record<Locale, Metadata> = {
  en: {
    title: "Ingredients — The S7® Blend & Full Formula",
    description:
      "Full label transparency. Every ingredient in NitricX disclosed with exact doses. S7® Blend: 7 plant-based ingredients clinically proven to increase nitric oxide by 40%.",
    openGraph: {
      title: "NitricX Ingredients — S7® Blend & Full Formula",
      description:
        "Seven plants. Six supporting ingredients. One premium pre-workout formula with zero synthetic fillers.",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  },
  es: {
    title: "Ingredientes — El S7® Blend y la Fórmula Completa",
    description:
      "Transparencia total en la etiqueta. Cada ingrediente de NitricX declarado con su dosis exacta. S7® Blend: 7 ingredientes vegetales clínicamente probados para aumentar el óxido nítrico en un 40%.",
    openGraph: {
      title: "Ingredientes NitricX — S7® Blend y Fórmula Completa",
      description:
        "Siete plantas. Seis ingredientes de apoyo. Una fórmula pre-entreno premium sin rellenos sintéticos.",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/ingredients">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  return { ...meta[lang], alternates: { canonical: `/${lang}/ingredients`, ...languageAlternates("/ingredients") } };
}

export default function IngredientsPage() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <IngredientsHero />
      <S7BlendSection />
      <SupportingIngredients />
      <TransparencySection />
    </>
  );
}
