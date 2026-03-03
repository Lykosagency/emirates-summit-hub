import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
  size: 2 + Math.random() * 3,
}));

export default function Hero() {
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
          <p className="text-sm text-primary/70 tracking-[0.2em] uppercase mb-10">Led by Nadir Doulfakkar — Founder & Visionary</p>
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
