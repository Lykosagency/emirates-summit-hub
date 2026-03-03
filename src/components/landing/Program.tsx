import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const days = [
  {
    day: "Day 1",
    title: "Luxury Private Villa Experience",
    theme: "Positioning & Authority",
    date: "March 21",
    blocks: [
      {
        duration: "1h30",
        title: "Founder Strategy Session",
        items: ["Authority positioning", "High-ticket offer structure", "90-day clarity roadmap"],
      },
      {
        duration: "30 min",
        title: "Curated Buffet Pause",
        items: ["Intentional conversations", "Strategic proximity"],
      },
      {
        duration: "1h",
        title: "Structured Elite Networking",
        items: ["Guided introductions", "Alignment-based discussions"],
      },
    ],
  },
  {
    day: "Day 2",
    title: "Strategy, Scaling & Networking",
    theme: "Systems & Expansion",
    date: "March 22",
    blocks: [
      {
        duration: "1h30",
        title: "Advanced Scaling Framework",
        items: ["Revenue acceleration", "Backend monetization", "Selected hot seats"],
      },
      {
        duration: "30 min",
        title: "Premium Pause",
        items: ["Deepened connections"],
      },
      {
        duration: "1h",
        title: "Strategic Networking",
        items: ["Guest insights", "Collaboration opportunities"],
      },
    ],
  },
  {
    day: "Day 3",
    title: "Private Yacht Mastermind",
    theme: "Expansion & Commitment",
    date: "March 23",
    blocks: [
      {
        duration: "1h30",
        title: "Expansion Blueprint",
        items: ["Growth mapping", "90-day execution plan"],
      },
      {
        duration: "30 min",
        title: "Yacht Experience Pause",
        items: ["High-level proximity"],
      },
      {
        duration: "1h",
        title: "Final Commitment & Recognition",
        items: ["Strategic dialogue", "Recognition moment"],
      },
    ],
  },
];

export default function Program() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="program" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">The Program</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Precision Designed. <span className="gold-text">Maximum Leverage.</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-2">
            Three days. Structured sessions. High-level proximity.
          </p>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            {days.map((day, i) => (
              <div
                key={i}
                className={`relative flex flex-col lg:flex-row gap-6 mb-16 last:mb-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full gold-gradient -translate-x-1/2 mt-8 z-10 shadow-[0_0_12px_hsla(43,56%,52%,0.4)]" />

                {/* Spacer */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Card */}
                <div className="ml-10 lg:ml-0 lg:w-1/2 glass-card rounded-lg p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_0_30px_hsla(43,56%,52%,0.08)]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="gold-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-sm tracking-wider">
                      {day.day}
                    </span>
                    <span className="text-muted-foreground text-sm">{day.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-1">{day.title}</h3>
                  <p className="text-primary/60 text-xs tracking-[0.2em] uppercase mb-5">{day.theme}</p>
                  <div className="w-8 h-px bg-primary/30 mb-5" />

                  <div className="space-y-5">
                    {day.blocks.map((block, j) => (
                      <div key={j}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-primary/80 text-xs font-semibold tracking-wider uppercase border border-primary/20 px-2 py-0.5 rounded-sm">
                            {block.duration}
                          </span>
                          <span className="text-foreground text-sm font-medium">{block.title}</span>
                        </div>
                        <ul className="space-y-1.5 pl-1">
                          {block.items.map((item, k) => (
                            <li key={k} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
