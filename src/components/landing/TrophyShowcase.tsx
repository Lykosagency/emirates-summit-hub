import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import trophy5k from "@/assets/trophy-5k.jpeg";
import trophy10k from "@/assets/trophy-10k.jpeg";
import trophy20k from "@/assets/trophy-20k.jpeg";

const trophies = [
  {
    image: trophy5k,
    tier: "Bronze",
    milestone: "$5,000 Revenue",
    tagline: "Your first public milestone.",
    floatDelay: 0,
  },
  {
    image: trophy10k,
    tier: "Silver",
    milestone: "$10,000 Revenue",
    tagline: "Consistency becomes identity.",
    floatDelay: 1.5,
  },
  {
    image: trophy20k,
    tier: "Diamond",
    milestone: "$20,000 Revenue",
    tagline: "Elite performance. Limited holders.",
    floatDelay: 3,
  },
];

export default function TrophyShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="trophies" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43, 56%, 52%) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase mb-3">Recognition</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Earn Your <span className="gold-text">Trophy</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Proof you performed. Recognition you can display.
          </p>
          <div className="w-16 h-px bg-primary/30 mx-auto mt-6" />
        </div>

        {/* Trophies grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto mb-16">
          {trophies.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Floating trophy */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  delay: t.floatDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative group cursor-pointer mb-6"
              >
                {/* Glow underneath */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-700" />

                <img
                  src={t.image}
                  alt={`${t.milestone} Trophy`}
                  className="w-40 h-52 sm:w-48 sm:h-60 object-contain drop-shadow-[0_20px_40px_hsla(0,0%,0%,0.5)] group-hover:drop-shadow-[0_25px_50px_hsla(43,56%,52%,0.25)] transition-all duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Info */}
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-2">
                {t.tier}
              </span>
              <h4 className="font-display text-base font-semibold gold-text mb-1">
                {t.milestone}
              </h4>
              <p className="text-xs text-muted-foreground italic text-center">
                "{t.tagline}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#pricing"
            className="inline-block gold-gradient text-primary-foreground font-display text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm hover:shadow-[0_0_40px_hsla(43,56%,52%,0.35)] transition-all duration-500 hover:-translate-y-0.5"
          >
            Secure Your Seat — 3,000 AED
          </a>
        </div>
      </div>
    </section>
  );
}
