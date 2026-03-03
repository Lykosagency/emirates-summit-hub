import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const days = [
  {
    day: "Day 1",
    title: "Luxury Private Villa Experience",
    date: "March 21",
    items: [
      "Elite Check-In & Private Welcome",
      "Founder Strategy Session with Nadir",
      "Authority & Positioning Calibration",
      "Structured High-Signal Networking",
      "Evening Private Experience",
    ],
  },
  {
    day: "Day 2",
    title: "Strategy, Scaling & Elite Networking",
    date: "March 22",
    items: [
      "Applied Scaling Systems Workshop",
      "High-Level Offer Engineering",
      "Curated Hot Seats & Breakdowns",
      "Guest Expert Sessions",
      "Structured Proximity Networking",
    ],
  },
  {
    day: "Day 3",
    title: "Private Yacht Mastermind",
    date: "March 23",
    items: [
      "Strategic Expansion Framework",
      "90-Day Execution Commitment",
      "Proximity-Based Conversations",
      "Recognition Moments & Awards",
      "Closing Circle & Future Access",
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
            Three Environments. <span className="gold-text">One Elevated Circle.</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            {days.map((day, i) => (
              <div
                key={i}
                className={`relative flex flex-col lg:flex-row gap-6 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full gold-gradient -translate-x-1/2 mt-8 z-10 shadow-[0_0_12px_hsla(43,56%,52%,0.4)]" />

                {/* Spacer */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Card */}
                <div className="ml-10 lg:ml-0 lg:w-1/2 glass-card rounded-lg p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_0_30px_hsla(43,56%,52%,0.08)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="gold-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-sm tracking-wider">
                      {day.day}
                    </span>
                    <span className="text-muted-foreground text-sm">{day.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">{day.title}</h3>
                  <div className="w-8 h-px bg-primary/30 mb-4" />
                  <ul className="space-y-2.5">
                    {day.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
