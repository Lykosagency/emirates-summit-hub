import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState, useEffect } from "react";
import trophy5k from "@/assets/trophy-5k.jpeg";
import trophy10k from "@/assets/trophy-10k.jpeg";
import trophy20k from "@/assets/trophy-20k.jpeg";

const trophies = [
  {
    image: trophy5k,
    alt: "$5,000 Bronze Trophy",
    tier: "Bronze Member",
    milestone: "$5,000 Revenue Trophy",
    line1: "Your first public milestone.",
    line2: "Earned entry into the circle.",
  },
  {
    image: trophy10k,
    alt: "$10,000 Silver Trophy",
    tier: "Silver Member",
    milestone: "$10,000 Revenue Trophy",
    line1: "Consistency becomes identity.",
    line2: "Recognized for execution.",
  },
  {
    image: trophy20k,
    alt: "$20,000 Diamond Trophy",
    tier: "Diamond Member",
    milestone: "$20,000 Revenue Trophy",
    line1: "Elite performance, permanently marked.",
    line2: "Rare level. Limited holders.",
  },
];

function TrophyCard({ trophy, index }: { trophy: (typeof trophies)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300 + index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const floatDuration = 5 + index * 0.8;
  const floatDelay = index * 0.6;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
      }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ perspective: "1200px" }}
    >
      <div
        className="motion-safe:animate-[trophy-float_ease-in-out_infinite]"
        style={{
          animationDuration: `${floatDuration}s`,
          animationDelay: `${floatDelay}s`,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transitionProperty: "transform, box-shadow",
          transitionDuration: isHovered ? "150ms" : "600ms",
        }}
      >
        <div
          className={`relative glass-card rounded-xl overflow-hidden p-6 pt-8 pb-8 flex flex-col items-center transition-all duration-500 ${
            isHovered
              ? "shadow-[0_0_40px_hsla(43,56%,52%,0.15)] border-primary/30"
              : "shadow-[0_15px_40px_hsla(0,0%,0%,0.3)]"
          }`}
        >
          {/* Shimmer overlay on hover */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, hsla(43,56%,52%,0.06) 45%, hsla(43,56%,52%,0.12) 50%, hsla(43,56%,52%,0.06) 55%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: isHovered ? "shimmer 2.5s infinite" : "none",
            }}
          />

          {/* Tier label */}
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary/70 mb-4">
            {trophy.tier}
          </span>

          {/* Trophy image */}
          <img
            src={trophy.image}
            alt={trophy.alt}
            loading="lazy"
            className={`w-52 h-64 object-contain transition-all duration-700 ${
              isHovered
                ? "scale-[1.04] drop-shadow-[0_20px_40px_hsla(43,56%,52%,0.2)]"
                : "drop-shadow-[0_15px_30px_hsla(0,0%,0%,0.4)]"
            }`}
          />

          {/* Milestone */}
          <h4 className="font-display text-base font-semibold mt-5 mb-3 tracking-tight gold-text">
            {trophy.milestone}
          </h4>

          {/* Copy */}
          <p className="text-xs text-muted-foreground text-center leading-relaxed italic">
            "{trophy.line1}"
          </p>
          <p className="text-xs text-muted-foreground text-center leading-relaxed italic">
            "{trophy.line2}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TrophyShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="trophies" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase mb-3">Recognition</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trophy <span className="gold-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-3">
            Proof you performed. Recognition you can display.
          </p>
          <p className="text-xs tracking-[0.25em] uppercase text-primary/50">
            Limited. Earned. Collectible.
          </p>
          <div className="w-16 h-px bg-primary/30 mx-auto mt-6" />
        </div>

        {/* Card gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center mb-20">
          {trophies.map((t, i) => (
            <TrophyCard key={i} trophy={t} index={i} />
          ))}
        </div>

        {/* CTA Strip */}
        <div className="glass-card rounded-lg p-8 lg:p-10 max-w-3xl mx-auto text-center">
          <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2">
            Want your name on the next trophy?
          </h3>
          <p className="text-sm text-muted-foreground mb-8">
            Seats are curated. Recognition is earned.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#qualify"
              className="gold-gradient text-primary-foreground font-display text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm hover:opacity-90 transition-opacity"
            >
              Apply Now
            </a>
            <a
              href="#qualify"
              className="border border-primary/30 text-foreground font-display text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm hover:border-primary/60 transition-colors"
            >
              Book Your Seat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
