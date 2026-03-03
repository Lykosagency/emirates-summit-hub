import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLang } from "@/hooks/useLang";

export default function Promise() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const days = [
    { title: t("promise.day1_title"), copy: t("promise.day1_copy") },
    { title: t("promise.day2_title"), copy: t("promise.day2_copy") },
    { title: t("promise.day3_title"), copy: t("promise.day3_copy") },
  ];

  return (
    <section id="promise" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">{t("promise.overline")}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
            {t("promise.title")} <span className="gold-text">{t("promise.title2")}</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-10" />

          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-center max-w-4xl mx-auto mb-6 leading-tight">
            {t("promise.headline1")} <span className="gold-text">{t("promise.headline2")}</span>
          </h3>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-14">{t("promise.desc")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {days.map((day, i) => (
              <div key={i} className="glass-card rounded-lg p-8 hover:-translate-y-1 transition-all duration-500">
                <div className="w-8 h-px bg-primary/50 mb-5" />
                <h4 className="font-display text-lg font-semibold mb-3 tracking-tight">{day.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{day.copy}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs tracking-[0.3em] uppercase text-primary/60 mb-4">{t("promise.precision")}</p>
          <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto mb-10">{t("promise.5k")}</p>

          <div className="text-center">
            <a href="#pricing" className="cta-primary">{t("cta.secure")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
