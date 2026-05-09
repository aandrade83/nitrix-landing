import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlowSection from "@/components/FlowSection";
import FlavorsSection from "@/components/FlavorsSection";
import LifestyleSection from "@/components/LifestyleSection";
import FormulaSection from "@/components/FormulaSection";
import CredentialsSection from "@/components/CredentialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FlowSection />
      <FlavorsSection />
      <LifestyleSection />
      <FormulaSection />
      <CredentialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
