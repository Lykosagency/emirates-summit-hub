import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const inclusions = [
  "Full 3-Day Mastermind Access",
  "Luxury Private Villa Experience",
  "Private Yacht Mastermind Session",
  "5 High-Level Guest Speakers",
  "Structured Networking Architecture",
  "Private Member Card (NFC)",
  "Exclusive Merchandise Kit",
  "Electronic Ticket + QR Code",
  "Post-Event Network Access",
];

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">Investment</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Private Access <span className="gold-text">Investment</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />

          <div className="glass-card gold-border-glow rounded-lg p-8 lg:p-12 max-w-2xl mx-auto text-center gold-shimmer">
            <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase mb-4">All-Access Pass</p>

            <div className="mb-8">
              <span className="font-display text-6xl lg:text-7xl font-bold gold-text">5,000</span>
              <span className="text-2xl text-primary ml-2">AED</span>
            </div>

            <div className="w-12 h-px bg-primary/30 mx-auto mb-8" />

            <ul className="space-y-3 text-left max-w-md mx-auto mb-10">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted-foreground/70 italic mb-8">
              "This is a curated room. Selection protects the experience."
            </p>

            <a
              href="#qualify"
              className="inline-flex gold-gradient text-primary-foreground px-12 py-4 rounded-sm text-sm font-semibold tracking-[0.2em] uppercase hover:shadow-[0_0_40px_hsla(43,56%,52%,0.35)] transition-all duration-500 hover:-translate-y-1"
            >
              Start Qualification
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
