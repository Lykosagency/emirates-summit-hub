import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Speakers from "@/components/landing/Speakers";
import Program from "@/components/landing/Program";
import ValueStack from "@/components/landing/ValueStack";
import TrophyShowcase from "@/components/landing/TrophyShowcase";
import Pricing from "@/components/landing/Pricing";
import QualificationForm from "@/components/landing/QualificationForm";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Speakers />
      <Program />
      <ValueStack />
      <TrophyShowcase />
      <Pricing />
      <QualificationForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
