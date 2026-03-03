import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import trophy5k from "@/assets/trophy-5k.jpeg";
import trophy10k from "@/assets/trophy-10k.jpeg";
import trophy20k from "@/assets/trophy-20k.jpeg";

const trophies = [
  { image: trophy5k, tier: "$5,000", label: "Bronze Milestone", desc: "First proof of execution." },
  { image: trophy10k, tier: "$10,000", label: "Silver Milestone", desc: "Scaling with precision." },
  { image: trophy20k, tier: "$20,000", label: "Diamond Milestone", desc: "Elite operator status." },
];

export default function TrophyShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Spotlight gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(43,56%,52%,0.04)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">Recognition</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Recognition That <span className="gold-text">Holds Weight</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trophies.map((t, i) => (
              <div
                key={i}
                className="group flex flex-col items-center"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Trophy image with pedestal */}
                <div className="relative mb-6">
                  <div className="w-64 h-80 rounded-lg overflow-hidden gold-border-glow group-hover:shadow-[0_0_50px_hsla(43,56%,52%,0.2)] transition-all duration-700">
                    <img
                      src={t.image}
                      alt={`${t.tier} trophy`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Pedestal reflection */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-to-t from-primary/10 to-transparent blur-sm" />
                </div>

                <span className="font-display text-2xl font-bold gold-text mb-1">{t.tier}</span>
                <span className="text-sm text-primary/70 tracking-[0.15em] uppercase mb-2">{t.label}</span>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
