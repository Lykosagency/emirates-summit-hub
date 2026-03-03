import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43, 56%, 52%) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">
            Investment
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Secure Your <span className="gold-text">Seat</span>
          </h2>
          <p className="text-sm text-muted-foreground text-center max-w-md mx-auto mb-4">
            One price. Full access. No upsells inside the room.
          </p>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto">
            <div className="relative glass-card rounded-2xl overflow-hidden gold-border-glow">
              {/* Top gold accent bar */}
              <div className="h-1 w-full gold-gradient" />

              <div className="p-8 lg:p-12">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full px-5 py-1.5">
                    All-Access Pass
                  </span>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-display text-6xl lg:text-7xl font-bold gold-text">
                      3,000
                    </span>
                    <span className="text-xl text-primary/80 font-display uppercase">AED</span>
                  </div>
                  <p className="text-xs text-muted-foreground/50 mt-2">
                    One-time payment — No recurring fees
                  </p>
                </div>

                <div className="w-full h-px bg-border/50 mb-8" />

                {/* Inclusions */}
                <ul className="space-y-3.5 mb-10">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="w-full h-px bg-border/50 mb-8" />

                {/* Pay Button */}
                <button
                  onClick={() => {
                    // Stripe checkout will be wired here
                    console.log("Initiating payment...");
                  }}
                  className="w-full gold-gradient text-primary-foreground py-4 rounded-lg font-display text-sm tracking-[0.2em] uppercase font-semibold hover:shadow-[0_0_40px_hsla(43,56%,52%,0.35)] transition-all duration-500 hover:-translate-y-0.5"
                >
                  Pay 3,000 AED — Secure Your Seat
                </button>

                <p className="text-[11px] text-muted-foreground/40 text-center mt-4">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>

            {/* Scarcity line below card */}
            <div className="text-center mt-8">
              <p className="text-xs text-muted-foreground/50 tracking-wide">
                Limited to 30 seats. Once filled, registration closes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
