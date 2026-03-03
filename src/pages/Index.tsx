import { useLang } from "@/hooks/useLang";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Speakers from "@/components/landing/Speakers";
import Promise from "@/components/landing/Promise";
import Program from "@/components/landing/Program";
import BeforeAfter from "@/components/landing/BeforeAfter";
import ValueStack from "@/components/landing/ValueStack";
import TrophyShowcase from "@/components/landing/TrophyShowcase";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const { dir } = useLang();

  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Speakers />
      <Promise />
      <Program />
      <BeforeAfter />
      <ValueStack />
      <Pricing />
      <TrophyShowcase />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
