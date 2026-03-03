import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import memberCard from "@/assets/member-card.png";
import merchandise from "@/assets/merchandise.jpeg";
import tshirt from "@/assets/tshirt.jpeg";
import { CreditCard, MapPin, Users, Trophy, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  { icon: CreditCard, title: "Private Member Card", desc: "Exclusive NFC-enabled black card — your key to the inner circle.", image: memberCard },
  { icon: MapPin, title: "All-Access Entry", desc: "Full 3-day access: luxury villa, strategy sessions, private yacht.", image: null },
  { icon: Users, title: "Elite Networking", desc: "Structured proximity with vetted operators doing $10K–$100K+/month.", image: null },
  { icon: Trophy, title: "Trophy Recognition", desc: "Revenue milestone awards — tangible proof of your execution.", image: null },
  { icon: Lightbulb, title: "Founder Sessions", desc: "Direct strategy sessions with Nadir and curated guest experts.", image: merchandise },
  { icon: ArrowRight, title: "Post-Event Access", desc: "Continued access to the private network and future events.", image: tshirt },
];

export default function ValueStack() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="value" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase text-center mb-3">Your Access</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            What Your Access <span className="gold-text">Includes</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div
                key={i}
                className="glass-card rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_hsla(43,56%,52%,0.1)]"
                style={{
                  transform: "perspective(1000px)",
                }}
              >
                {v.image && (
                  <div className="h-40 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="p-6">
                  <v.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
