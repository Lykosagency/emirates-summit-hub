import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
  size: 2 + Math.random() * 3,
}));

const EVENT_DATE = new Date("2026-03-21T09:00:00+04:00"); // Dubai time

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = EVENT_DATE.getTime() - now.getTime();
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

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gold-text leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mt-1">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const countdown = useCountdown();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(43,56%,52%,0.06)_0%,_transparent_70%)]" />
      {particles.map((p) => (
        <div key={p.id} className="absolute rounded-full" style={{ left: p.left, top: p.top, width: p.size, height: p.size, background: "hsl(43, 56%, 52%)", opacity: 0, animation: `particle ${p.duration}s ${p.delay}s infinite` }} />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_hsl(240,7%,3%)_100%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-6 font-medium">March 21–23 · Dubai, UAE</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6">
            <span className="block">Dubai's Most</span>
            <span className="block gold-text">Exclusive Private</span>
            <span className="block">Business Mastermind</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light tracking-wide">3 Days. Luxury Villa. Private Yacht. Curated Elite Circle.</p>
          <p className="text-sm text-primary/70 tracking-[0.2em] uppercase mb-8">Led by Nadir Doulfakkar — Founder & Visionary</p>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-4">
            <CountdownUnit value={countdown.days} label="Days" />
            <span className="text-primary/30 text-2xl font-light">:</span>
            <CountdownUnit value={countdown.hours} label="Hours" />
            <span className="text-primary/30 text-2xl font-light">:</span>
            <CountdownUnit value={countdown.minutes} label="Min" />
            <span className="text-primary/30 text-2xl font-light">:</span>
            <CountdownUnit value={countdown.seconds} label="Sec" />
          </div>

          {/* Scarcity */}
          <p className="text-xs tracking-[0.2em] uppercase text-primary/50 mb-10">
            Limited to 30 seats — Once filled, registration closes
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="cta-primary">Secure Your Seat</a>
            <a href="#program" className="cta-secondary">View Program</a>
          </div>
        </motion.div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-5 h-8 border border-primary/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary/50 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
