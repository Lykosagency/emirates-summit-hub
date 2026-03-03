import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";
import trophy5k from "@/assets/trophy-5k.jpeg";
import trophy10k from "@/assets/trophy-10k.jpeg";
import trophy20k from "@/assets/trophy-20k.jpeg";

const trophies = [
  {
    image: trophy5k,
    tier: "Bronze Member",
    milestone: "$5,000 Revenue Trophy",
    line1: "Your first public milestone.",
    line2: "Earned entry into the circle.",
  },
  {
    image: trophy10k,
    tier: "Silver Member",
    milestone: "$10,000 Revenue Trophy",
    line1: "Consistency becomes identity.",
    line2: "Recognized for execution.",
  },
  {
    image: trophy20k,
    tier: "Diamond Member",
    milestone: "$20,000 Revenue Trophy",
    line1: "Elite performance, permanently marked.",
    line2: "Rare level. Limited holders.",
  },
];

function TrophyCard({ trophy, index }: { trophy: typeof trophies[0]; index: number }) {
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
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const floatDuration = 5 + index * 0.8;
  const floatDelay = index * 0.6;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col items-center transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Floating card wrapper */}
      <div
        className="relative motion-safe:animate-[trophy-float_ease-in-out_infinite]"
        style={{
          animationDuration: `${floatDuration}s`,
          animationDelay: `${floatDelay}s`,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transitionProperty: "transform, box-shadow",
          transitionDuration: isHovered ? "150ms" : "600ms",
          transitionTimingFunction: "ease-out",
        }}
      >
        {/* Card container */}
        <div
          className={`relative rounded-lg overflow-hidden transition-shadow duration-700 ${
            isHovered
              ? "shadow-[0_20px_60px_-10px_hsla(43,56%,52%,0.25),0_0_40px_hsla(43,56%,52%,0.1)]"
              : "shadow-[0_10px_40px_-10px_hsla(0,0%,0%,0.5),0_0_20px_hsla(43,56%,52%,0.05)]"
          }`}
        >
          {/* Metallic edge border */}
          <div className="absolute inset-0 rounded-lg border border-primary/20 z-20 pointer-events-none" />

          {/* Glass overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white/[0.04] to-transparent" />

          {/* Shimmer scanline on hover */}
          <div
            className={`absolute inset-0 z-10 pointer-events-none overflow-hidden transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent animate-[shimmer_3s_infinite]" />
          </div>

          {/* Trophy image */}
          <div className="w-72 h-96 sm:w-80 sm:h-[28rem]">
            <img
              src={trophy.image}
              alt={`${trophy.milestone} plaque`}
              loading="lazy"
              className={`w-full h-full object-contain transition-all duration-700 ${
                isHovered ? "scale-[1.03] brightness-110" : "scale-100 brightness-100"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Text content below card */}
      <div className="mt-8 text-center space-y-2">
        <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-medium">
          {trophy.tier}
        </span>
        <h3 className="font-display text-xl font-bold gold-text">
          {trophy.milestone}
        </h3>
        <div className="space-y-0.5">
          <p className="text-sm text-muted-foreground italic">"{trophy.line1}"</p>
          <p className="text-sm text-muted-foreground italic">"{trophy.line2}"</p>
        </div>
      </div>
    </div>
  );
}

export default function TrophyShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="trophies" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(43,56%,52%,0.03)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase mb-3">
            Recognition
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trophy <span className="gold-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-3">
            Proof you performed. Recognition you can display.
          </p>
          <p className="text-primary/50 text-xs tracking-[0.35em] uppercase">
            Limited. Earned. Collectible.
          </p>
          <div className="w-16 h-px bg-primary/30 mx-auto mt-6" />
        </div>

        {/* Trophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto justify-items-center">
          {trophies.map((trophy, i) => (
            <TrophyCard key={i} trophy={trophy} index={i} />
          ))}
        </div>

        {/* CTA Strip */}
        <div
          className={`mt-24 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass-card rounded-lg py-10 px-6 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              Want your name on the <span className="gold-text">next trophy?</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Seats are curated. Recognition is earned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#qualify"
                className="gold-gradient text-primary-foreground px-8 py-3 rounded-sm font-semibold tracking-wider text-sm hover:opacity-90 transition-opacity"
              >
                Apply Now
              </a>
              <a
                href="#pricing"
                className="border border-primary/40 text-primary px-8 py-3 rounded-sm font-semibold tracking-wider text-sm hover:bg-primary/10 transition-colors"
              >
                Book Your Seat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
