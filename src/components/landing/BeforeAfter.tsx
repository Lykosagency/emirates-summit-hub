import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLang } from "@/hooks/useLang";

export default function BeforeAfter() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const beforeItems = [t("ba.b1"), t("ba.b2"), t("ba.b3"), t("ba.b4"), t("ba.b5")];
  const afterItems = [t("ba.a1"), t("ba.a2"), t("ba.a3"), t("ba.a4"), t("ba.a5")];

  return (
    <section id="before-after" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">{t("ba.overline")}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            {t("ba.title")} <span className="gold-text">{t("ba.title2")}</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-14" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="glass-card rounded-lg p-8 border-destructive/20">
              <h3 className="font-display text-xl font-semibold mb-6 text-destructive/80">{t("ba.before")}</h3>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-lg p-8 border-primary/20">
              <h3 className="font-display text-xl font-semibold mb-6 gold-text">{t("ba.after")}</h3>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a href="#pricing" className="cta-primary">{t("cta.secure")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
