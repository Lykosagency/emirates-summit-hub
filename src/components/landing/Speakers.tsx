import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import nadirImg from "@/assets/nadir.png";
import mysterySpeaker from "@/assets/mystery-speaker.png";

const mysteryCards = [
  { industry: "E-Commerce & DTC Scaling", delay: 0 },
  { industry: "Digital Assets & Web3", delay: 150 },
  { industry: "High-Ticket Sales Systems", delay: 300 },
  { industry: "Content & Personal Branding", delay: 450 },
];

export default function Speakers() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: mysteryRef, isVisible: mysteryVisible } = useScrollAnimation(0.1);

  return (
    <section id="speakers" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, hsl(43, 56%, 52%) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">
            The Circle
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Founder-Led. <span className="gold-text">Power-Curated.</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto text-sm mb-4">
            The room is defined by who leads it — and who sits in it.
          </p>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />
        </div>

        {/* Main speaker — Nadir — Large cinematic card */}
        <div
          className={`relative max-w-5xl mx-auto mb-24 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="glass-card rounded-2xl overflow-hidden gold-border-glow">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Photo — larger, more cinematic */}
              <div className="relative lg:w-[380px] flex-shrink-0">
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <img
                    src={nadirImg}
                    alt="Nadir Doulfakkar"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[hsl(var(--card))] via-transparent to-transparent" />
                </div>
              </div>

              {/* Info — refined spacing */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-primary" />
                  <p className="text-primary text-xs tracking-[0.3em] uppercase">
                    Founder & Lead Strategist
                  </p>
                </div>
                <h3 className="font-display text-3xl lg:text-5xl font-bold mb-5 tracking-tight">
                  Nadir Doulfakkar
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-md">
                  Architect of high-performance business ecosystems. Builder of elite networks.
                  The mind behind Cashflow Dubai's curated mastermind model — where proximity to
                  the right operators creates exponential outcomes.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Business Strategy", "Elite Networks", "Scaling Systems"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] tracking-[0.15em] uppercase text-primary/80 border border-primary/20 rounded-full px-4 py-1.5 hover:border-primary/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mystery speakers — Premium grid */}
        <div ref={mysteryRef}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-primary/20" />
            <p className="text-xs tracking-[0.3em] uppercase text-primary/50">
              Guest Speakers — Revealed Soon
            </p>
            <div className="h-px w-12 bg-primary/20" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 max-w-5xl mx-auto">
            {mysteryCards.map((card, i) => (
              <div
                key={i}
                className={`group relative transition-all duration-1000 ${
                  mysteryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${card.delay}ms` }}
              >
                {/* Card container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] glass-card hover:shadow-[0_0_40px_hsla(43,56%,52%,0.1)] transition-all duration-700 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <img
                      src={mysterySpeaker}
                      alt="Mystery Speaker"
                      loading="lazy"
                      className="w-full h-full object-contain object-bottom opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105 drop-shadow-[0_10px_30px_hsla(43,56%,52%,0.1)]"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />

                  {/* Top corner accent */}
                  <div className="absolute top-3 right-3">
                    <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary/60 transition-colors duration-500" />
                  </div>

                  {/* Content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-6 h-px bg-primary/40 mb-3 transition-all duration-500 group-hover:w-10 group-hover:bg-primary" />
                    <p className="text-[10px] tracking-[0.25em] uppercase text-primary/50 mb-2">
                      Revealed Soon
                    </p>
                    <p className="text-sm text-foreground/90 font-display font-semibold tracking-wide uppercase">
                      {card.industry}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
