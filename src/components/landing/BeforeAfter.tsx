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

const standAgainst = [
  "Overpriced online courses",
  "Fake gurus",
  "Motivation without monetization",
  "Passive learning",
  "\"Someday\" entrepreneurs",
];

export default function BeforeAfter() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="before-after" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">
            The Shift
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Before vs After <span className="gold-text">the Room</span>
          </h2>
          <p className="text-muted-foreground text-center text-sm sm:text-base max-w-2xl mx-auto mb-4">
            The difference is not information. It's execution, proximity, and a real launch.
          </p>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />

          {/* Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {/* Before */}
            <div className="glass-card rounded-lg p-8 lg:p-10 border-destructive/20 hover:border-destructive/30 transition-colors duration-500">
              <h3 className="font-display text-xl font-semibold mb-6 text-destructive/80">
                Before the Event
              </h3>
              <ul className="space-y-4 mb-8">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground/70 italic border-t border-border/30 pt-5">
                Passive learning feels safe. It's also the reason most people never launch.
              </p>
            </div>

            {/* After */}
            <div className="glass-card rounded-lg p-8 lg:p-10 border-primary/20 hover:border-primary/30 transition-colors duration-500">
              <h3 className="font-display text-xl font-semibold mb-6 gold-text">
                After the Event
              </h3>
              <ul className="space-y-4 mb-8">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-primary/60 italic border-t border-primary/10 pt-5">
                This room is for people who don't want motivation. They want income.
              </p>
            </div>
          </div>

          {/* What We Stand Against */}
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary/50 mb-6">
              What We Stand Against
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {standAgainst.map((item, i) => (
                <span
                  key={i}
                  className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground border border-border/40 rounded-full px-4 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Scarcity strip */}
          <div className="glass-card rounded-lg p-6 lg:p-8 max-w-3xl mx-auto text-center mb-10">
            <p className="text-sm text-muted-foreground mb-2">
              Application required. Seats are limited to protect the room.
            </p>
            <p className="text-xs text-primary/50 italic">
              If you wait until it feels "perfect," you'll watch this one from the outside.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#qualify"
              className="gold-gradient text-primary-foreground font-display text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm hover:opacity-90 transition-opacity"
            >
              Apply Now
            </a>
            <a
              href="#qualify"
              className="border border-primary/30 text-foreground font-display text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm hover:border-primary/60 transition-colors"
            >
              Book Your Seat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
