import type { Metadata } from "next";
import Image from "next/image";
import PerformanceHero from "@/components/pages/performance/PerformanceHero";
import BenefitsGrid from "@/components/pages/performance/BenefitsGrid";
import ScienceSection from "@/components/pages/performance/ScienceSection";
import LifestyleSection from "@/components/pages/performance/LifestyleSection";
import PerformanceCTA from "@/components/pages/performance/PerformanceCTA";

export const metadata: Metadata = {
  title: "Performance — Engineered for Elite Athletes",
  description:
    "Discover how NitricX elevates athletic performance through elevated nitric oxide production, clean energy, and faster recovery. Powered by the S7® Blend.",
  openGraph: {
    title: "NitricX Performance — Plant-Powered Athletic Edge",
    description:
      "Clinically researched S7® Blend. 40% more nitric oxide. Zero synthetic stimulants.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

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
