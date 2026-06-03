import type { Metadata } from "next";
import AboutHero from "@/components/pages/about/AboutHero";
import FounderSection from "@/components/pages/about/FounderSection";
import MissionSection from "@/components/pages/about/MissionSection";

export const metadata: Metadata = {
  title: "About — NitricX",
  description:
    "NitricX was born from 25 years of expertise in business development, product innovation, and institutional strategy. Meet the founder behind the formula.",
  openGraph: {
    title: "About NitricX — The Mastermind Behind the Formula",
    description:
      "25 years of global business expertise. One vision: a performance drink that actually works.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "NitricX — About" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <AboutHero />
      <FounderSection />
      <MissionSection />
    </>
  );
}
