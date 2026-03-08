import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const beforeItems = [
  "You keep \"preparing\" but nothing is live.",
  "You watch content but don't monetize it.",
  "You overthink the model and delay the decision.",
  "You network randomly and call it progress.",
  "You stay invisible because your offer isn't positioned.",
];
const afterItems = [
  "You leave with one selected model and a clear direction.",
  "You build your asset and positioning with feedback in the room.",
  "You execute a launch plan built for action, not theory.",
  "You enter a higher-signal network and accountability structure.",
  "You stop consuming and start converting.",
];

export default function BeforeAfter() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="before-after" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">The Shift</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">Before vs After <span className="gold-text">the Room</span></h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-14" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="glass-card rounded-lg p-8 border-destructive/20">
              <h3 className="font-display text-xl font-semibold mb-6 text-destructive/80">Before the Event</h3>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-1.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-lg p-8 border-primary/20">
              <h3 className="font-display text-xl font-semibold mb-6 gold-text">After the Event</h3>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <a href="https://elite-horizon-events-fze-llc.zbooni.com/products/dubai-private-mastermind" target="_blank" rel="noopener noreferrer" className="cta-primary">Secure Your Seat — 4,099 AED</a>
          </div>
        </div>
      </div>
    </section>
  );
}
