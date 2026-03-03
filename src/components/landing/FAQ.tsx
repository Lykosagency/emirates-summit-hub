import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is this mastermind designed for?",
    a: "Serious entrepreneurs, agency owners, e-commerce operators, and high-level builders doing $5K–$100K+/month who want to scale through proximity, strategy, and execution — not theory.",
  },
  {
    q: "What exactly is included in the 3,000 AED investment?",
    a: "Full 3-day access to the luxury villa and private yacht, all strategy sessions, guest expert panels, structured networking, private member card, exclusive merchandise, trophy eligibility, and post-event network access.",
  },
  {
    q: "Is there a refund policy?",
    a: "Due to the curated nature and limited capacity of this event, all confirmed seats are non-refundable. Transfers may be considered on a case-by-case basis with advance notice.",
  },
  {
    q: "Where exactly does the event take place?",
    a: "Days 1 and 2 are hosted at a private luxury villa in Dubai. Day 3 is an exclusive session aboard a private yacht. Exact locations are shared upon confirmed booking.",
  },
  {
    q: "What happens after the event?",
    a: "Selected members gain continued access to the Cashflow Dubai private network, including future events, exclusive content, and direct lines to the community.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Frequently <span className="gold-text">Asked</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-14" />

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-lg px-6 border-none">
                  <AccordionTrigger className="text-left font-display text-base font-medium hover:text-primary transition-colors py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
