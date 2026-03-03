import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import nadirImg from "@/assets/nadir.png";
import mystery1 from "@/assets/mystery-speaker-1.jpg";
import mystery2 from "@/assets/mystery-speaker-2.jpg";
import mystery3 from "@/assets/mystery-speaker-3.jpg";
import mystery4 from "@/assets/mystery-speaker-4.jpg";

const mysteryCards = [
  { industry: "E-Commerce & DTC Scaling", image: mystery1 },
  { industry: "Digital Assets & Web3", image: mystery2 },
  { industry: "High-Ticket Sales Systems", image: mystery3 },
  { industry: "Content & Personal Branding", image: mystery4 },
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

          {/* Main speaker — Nadir */}
          <div className="glass-card gold-border-glow rounded-2xl overflow-hidden max-w-4xl mx-auto mb-20">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Photo */}
              <div className="relative lg:w-[320px] flex-shrink-0">
                <div className="relative h-72 lg:h-full overflow-hidden">
                  <img
                    src={nadirImg}
                    alt="Nadir Doulfakkar"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient overlay for blending into card */}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[hsl(var(--card))] via-transparent to-transparent" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Founder & Lead Strategist</p>
                <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Nadir Doulfakkar</h3>
                <div className="w-10 h-px bg-primary/40 mb-5" />
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Architect of high-performance business ecosystems. Builder of elite networks. 
                  The mind behind Cashflow Dubai's curated mastermind model — where proximity to 
                  the right operators creates exponential outcomes.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Business Strategy", "Elite Networks", "Scaling Systems"].map((tag) => (
                    <span key={tag} className="text-[11px] tracking-[0.15em] uppercase text-primary/80 border border-primary/20 rounded-full px-4 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mystery speakers */}
          <p className="text-center text-xs tracking-[0.3em] uppercase text-primary/50 mb-8">Guest Speakers — Revealed Soon</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {mysteryCards.map((card, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt="Mystery Speaker"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500" />

                {/* Gold border glow on hover */}
                <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-[inset_0_0_30px_hsla(43,56%,52%,0.08)]" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <div className="w-6 h-px bg-primary/50 mb-3 transition-all duration-500 group-hover:w-10 group-hover:bg-primary" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-primary/60 mb-1.5">Revealed Soon</p>
                  <p className="text-xs lg:text-sm text-foreground/80 font-medium">{card.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
