import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-03-21T09:00:00+04:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  function getTimeLeft() {
    const diff = EVENT_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);
  return timeLeft;
}

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
  const countdown = useCountdown();

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
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="flex justify-center mb-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full px-5 py-1.5">All-Access Pass</span>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold gold-text">3,000</span>
                    <span className="text-lg sm:text-xl text-primary/80 font-display uppercase">AED</span>
                  </div>
                  <p className="text-xs text-muted-foreground/50 mt-2">One-time payment — No recurring fees</p>
                </div>

                {/* Countdown */}
                <div className="glass-card rounded-lg p-4 mb-6">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-primary/50 text-center mb-3">Event starts in</p>
                  <div className="flex items-center justify-center gap-3 sm:gap-5">
                    {[
                      { val: countdown.days, label: "Days" },
                      { val: countdown.hours, label: "Hrs" },
                      { val: countdown.minutes, label: "Min" },
                      { val: countdown.seconds, label: "Sec" },
                    ].map((unit, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="font-display text-xl sm:text-2xl font-bold gold-text leading-none">{String(unit.val).padStart(2, "0")}</span>
                        <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{unit.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-border/50 mb-6" />

                <ul className="space-y-3 mb-8">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{item}
                    </li>
                  ))}
                </ul>

                <div className="w-full h-px bg-border/50 mb-6" />

                <button onClick={() => console.log("Initiating Stripe payment...")} className="w-full cta-primary whitespace-nowrap">
                  Pay Now — 3,000 AED
                </button>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
                  <p className="text-[11px] text-primary/50 tracking-wide">Limited to 30 seats</p>
                </div>

                <p className="text-[11px] text-muted-foreground/40 text-center mt-2">Secure checkout powered by Stripe</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
