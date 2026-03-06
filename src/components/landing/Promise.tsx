import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const days = [
  { title: "Day 1 — Clarity & Selection", copy: "Choose the model that fits you. Lock your direction. Leave Day 1 with a decision." },
  { title: "Day 2 — Build & Position", copy: "Create your asset. Build authority. Position your offer so the market understands it fast." },
  { title: "Day 3 — Launch & Monetize", copy: "Execute the launch. Activate outreach and conversion. Build momentum and accountability." },
];

export default function Promise() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="promise" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">The Commitment</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">The <span className="gold-text">Promise</span></h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-10" />
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-center max-w-4xl mx-auto mb-6 leading-tight">
            In 3 Days in Dubai, You Launch Your Online Business — <span className="gold-text">Or You Don't Pay.</span>
          </h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-14">
            This is not a seminar. It's a guided, outcome-driven launch environment built around one objective: leave with a real business launched, positioned, and monetized.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {days.map((day, i) => (
              <div key={i} className="glass-card rounded-lg p-8 hover:-translate-y-1 transition-all duration-500">
                <div className="w-8 h-px bg-primary/50 mb-5" />
                <h4 className="font-display text-lg font-semibold mb-3 tracking-tight">{day.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{day.copy}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs tracking-[0.3em] uppercase text-primary/60 mb-4">3 Days. 3 Hours Each. One Outcome.</p>
          <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto mb-10">Designed to help you reach your first consistent 5K/month with a clear 30-day execution path.</p>
          <div className="text-center">
            <a href="https://elite-horizon-events-fze-llc.zbni.co/u/e6yvi" target="_blank" rel="noopener noreferrer" className="cta-primary">Secure Your Seat — 3,000 AED</a>
          </div>
        </div>
      </div>
    </section>
  );
}
