import Hero from "@/components/sections/Hero";
import FlowSection from "@/components/sections/FlowSection";
import FlavorsSection from "@/components/sections/FlavorsSection";
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
      <FlavorsSection />
      <FormulaSection />
      <CredentialsSection />
      <Waitlist />
    </>
  );
}
