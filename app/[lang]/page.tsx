import Hero from "@/components/sections/Hero";
import FlowSection from "@/components/sections/FlowSection";
import FlavorScroll from "@/components/sections/FlavorScroll";
import FormulaSection from "@/components/sections/FormulaSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import Waitlist from "@/components/sections/Waitlist";

export default function Home() {
  return (
    <>
      {/* Grain noise overlay */}
      <div className="noise" aria-hidden="true" />
      <Hero />
      <FlowSection />
      <FlavorScroll />
      <FormulaSection />
      <CredentialsSection />
      <Waitlist />
    </>
  );
}
