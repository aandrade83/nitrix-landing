import type { Metadata } from "next";
import InvestorsHero from "@/components/pages/investors/InvestorsHero";
import MarketOpportunity from "@/components/pages/investors/MarketOpportunity";
import DifferentiatorSection from "@/components/pages/investors/DifferentiatorSection";
import RoadmapSection from "@/components/pages/investors/RoadmapSection";
import PartnersSection from "@/components/pages/investors/PartnersSection";
import InvestorCTA from "@/components/pages/investors/InvestorCTA";

export const metadata: Metadata = {
  title: "Investor Relations — NitricX",
  description:
    "NitricX is a premium plant-powered performance drink targeting the $24B global energy drink market. Trademarked formula, industry partnerships, and full retail distribution pipeline.",
  robots: { index: false, follow: false }, // keep investor page off public search for now
};

export default function InvestorsPage() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <InvestorsHero />
      <MarketOpportunity />
      <DifferentiatorSection />
      <RoadmapSection />
      <PartnersSection />
      <InvestorCTA />
    </>
  );
}
