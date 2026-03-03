import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Lock } from "lucide-react";

const mysteryCards = [
  { industry: "E-Commerce & DTC Scaling", icon: "🏗️" },
  { industry: "Digital Assets & Web3", icon: "⚡" },
  { industry: "High-Ticket Sales Systems", icon: "🎯" },
  { industry: "Content & Personal Branding", icon: "📡" },
];

export default function Speakers() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="speakers" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section header */}
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">The Circle</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Founder-Led. <span className="gold-text">Power-Curated.</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />

          {/* Main speaker */}
          <div className="glass-card gold-border-glow rounded-lg p-8 lg:p-12 max-w-3xl mx-auto mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-28 h-28 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                <User className="w-14 h-14 text-primary-foreground" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">Nadir Doulfakkar</h3>
                <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Founder & Lead Strategist</p>
                <p className="text-muted-foreground leading-relaxed">
                  Architect of high-performance business ecosystems. Builder of elite networks. 
                  The mind behind Cashflow Dubai's curated mastermind model — where proximity to 
                  the right operators creates exponential outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Mystery speakers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mysteryCards.map((card, i) => (
              <div
                key={i}
                className="glass-card rounded-lg p-6 text-center group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_hsla(43,56%,52%,0.1)]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <Lock className="w-5 h-5 text-primary/50 mx-auto mb-3" />
                <p className="text-xs text-primary/60 tracking-[0.2em] uppercase mb-2">Revealed Soon</p>
                <p className="text-sm text-muted-foreground">{card.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
