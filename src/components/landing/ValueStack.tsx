import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ticketImg from "@/assets/ticket.png";
import tshirtImg from "@/assets/community-tshirt.png";
import clubCardImg from "@/assets/club-card.png";
import { useLang } from "@/hooks/useLang";

export default function ValueStack() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const rows = [
    {
      overline: t("value.entry"), title: t("value.entry_title"), description: t("value.entry_desc"),
      bullets: ["Full name and unique ticket ID", "Scannable code for secure check-in", "Status-level presentation"],
      image: ticketImg, imageAlt: "Cashflow Dubai electronic ticket", imageFirst: false,
    },
    {
      overline: t("value.tribe"), title: t("value.tribe_title"), description: t("value.tribe_desc"),
      bullets: ["Private-community identity", "Instant recognition during networking", "Premium, not promotional"],
      image: tshirtImg, imageAlt: "Cashflow Dubai community t-shirt", imageFirst: true,
    },
    {
      overline: t("value.status"), title: t("value.status_title"), description: t("value.status_desc"),
      bullets: ["Private-circle positioning", "High-end member identity", "Collectible access asset"],
      image: clubCardImg, imageAlt: "Cashflow Dubai private club member card", imageFirst: false,
    },
  ];

  return (
    <section id="access-assets" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("value.title1")} <span className="gold-text">{t("value.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t("value.subtitle")}</p>
          <div className="w-16 h-px bg-primary/40 mx-auto mt-6" />
        </div>

        <div className="space-y-20 lg:space-y-28 max-w-6xl mx-auto">
          {rows.map((row, i) => (
            <FeatureRow key={i} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ row }: { row: { overline: string; title: string; description: string; bullets: string[]; image: string; imageAlt: string; imageFirst: boolean } }) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  const textBlock = (
    <div className="flex flex-col justify-center">
      <span className="text-sm tracking-[0.3em] gold-text font-semibold mb-3">{row.overline}</span>
      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground uppercase">{row.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-5 max-w-md">{row.description}</p>
      <ul className="space-y-3">
        {row.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );

  const imageBlock = (
    <div className="flex items-center justify-center">
      <img src={row.image} alt={row.imageAlt} loading="lazy" className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-contain drop-shadow-[0_20px_40px_hsla(43,56%,52%,0.12)] animate-float" />
    </div>
  );

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="lg:hidden">{imageBlock}</div>
      <div className="lg:hidden">{textBlock}</div>
      <div className="hidden lg:block">{row.imageFirst ? imageBlock : textBlock}</div>
      <div className="hidden lg:block">{row.imageFirst ? textBlock : imageBlock}</div>
    </div>
  );
}
