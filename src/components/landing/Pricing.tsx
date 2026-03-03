import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

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
  const { ref } = useScrollAnimation();

  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(43, 56%, 52%) 0%, transparent 70%)" }} />
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">Investment</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">Secure Your <span className="gold-text">Seat</span></h2>
          <p className="text-sm text-muted-foreground text-center max-w-md mx-auto mb-4">One price. Full access. No upsells inside the room.</p>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-14" />

          <div className="max-w-lg mx-auto">
            <div className="relative glass-card rounded-2xl overflow-hidden gold-border-glow">
              <div className="h-1 w-full gold-gradient" />
              <div className="p-8 lg:p-12">
                <div className="flex justify-center mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full px-5 py-1.5">All-Access Pass</span>
                </div>
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-display text-6xl lg:text-7xl font-bold gold-text">3,000</span>
                    <span className="text-xl text-primary/80 font-display uppercase">AED</span>
                  </div>
                  <p className="text-xs text-muted-foreground/50 mt-2">One-time payment — No recurring fees</p>
                </div>
                <div className="w-full h-px bg-border/50 mb-8" />
                <ul className="space-y-3.5 mb-10">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <div className="w-full h-px bg-border/50 mb-8" />
                <button onClick={() => console.log("Initiating Stripe payment...")} className="w-full cta-primary">
                  Pay 3,000 AED — Secure Your Seat
                </button>
                <p className="text-[11px] text-muted-foreground/40 text-center mt-4">Secure checkout powered by Stripe</p>
              </div>
            </div>
            <p className="text-center mt-6 text-xs text-muted-foreground/50 tracking-wide">Limited to 30 seats. Once filled, registration closes.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
