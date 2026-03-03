import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/hooks/useLang";

export default function FAQ() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">{t("faq.overline")}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            {t("faq.title1")} <span className="gold-text">{t("faq.title2")}</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-14" />

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-lg px-6 border-none">
                  <AccordionTrigger className="text-left font-display text-base font-medium hover:text-primary transition-colors py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
