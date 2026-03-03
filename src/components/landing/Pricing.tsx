import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";

export default function Pricing() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const inclusions = [
    t("inc.1"), t("inc.2"), t("inc.3"), t("inc.4"), t("inc.5"),
    t("inc.6"), t("inc.7"), t("inc.8"), t("inc.9"),
  ];

  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43, 56%, 52%) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">{t("pricing.overline")}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            {t("pricing.title1")} <span className="gold-text">{t("pricing.title2")}</span>
          </h2>
          <p className="text-sm text-muted-foreground text-center max-w-md mx-auto mb-4">{t("pricing.subtitle")}</p>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-14" />

          <div className="max-w-lg mx-auto">
            <div className="relative glass-card rounded-2xl overflow-hidden gold-border-glow">
              <div className="h-1 w-full gold-gradient" />
              <div className="p-8 lg:p-12">
                <div className="flex justify-center mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full px-5 py-1.5">{t("pricing.badge")}</span>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-display text-6xl lg:text-7xl font-bold gold-text">3,000</span>
                    <span className="text-xl text-primary/80 font-display uppercase">AED</span>
                  </div>
                  <p className="text-xs text-muted-foreground/50 mt-2">{t("pricing.onetime")}</p>
                </div>

                <div className="w-full h-px bg-border/50 mb-8" />

                <ul className="space-y-3.5 mb-10">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="w-full h-px bg-border/50 mb-8" />

                <button
                  onClick={() => console.log("Initiating Stripe payment...")}
                  className="w-full cta-primary"
                >
                  {t("pricing.cta")}
                </button>

                <p className="text-[11px] text-muted-foreground/40 text-center mt-4">{t("pricing.stripe")}</p>
              </div>
            </div>

            <p className="text-center mt-6 text-xs text-muted-foreground/50 tracking-wide">{t("pricing.limited")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
