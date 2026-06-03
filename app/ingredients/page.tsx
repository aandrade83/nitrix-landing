import type { Metadata } from "next";
import IngredientsHero from "@/components/pages/ingredients/IngredientsHero";
import S7BlendSection from "@/components/pages/ingredients/S7BlendSection";
import SupportingIngredients from "@/components/pages/ingredients/SupportingIngredients";
import TransparencySection from "@/components/pages/ingredients/TransparencySection";

export const metadata: Metadata = {
  title: "Ingredients — The S7® Blend & Full Formula",
  description:
    "Full label transparency. Every ingredient in NitricX disclosed with exact doses. S7® Blend: 7 plant-based ingredients clinically proven to increase nitric oxide by 40%.",
  openGraph: {
    title: "NitricX Ingredients — S7® Blend & Full Formula",
    description:
      "Seven plants. Six supporting ingredients. One premium pre-workout formula with zero synthetic fillers.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

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
