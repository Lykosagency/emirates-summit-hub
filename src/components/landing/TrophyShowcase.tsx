import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState, useEffect } from "react";
import trophy5k from "@/assets/trophy-5k.jpeg";
import trophy10k from "@/assets/trophy-10k.jpeg";
import trophy20k from "@/assets/trophy-20k.jpeg";

const trophies = [
  { image: trophy5k, alt: "$5,000 Bronze Trophy" },
  { image: trophy10k, alt: "$10,000 Silver Trophy" },
  { image: trophy20k, alt: "$20,000 Diamond Trophy" },
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

  const floatDuration = 5 + index * 0.8;
  const floatDelay = index * 0.6;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ perspective: "1000px" }}
    >
      <div
        className="motion-safe:animate-[trophy-float_ease-in-out_infinite]"
        style={{
          animationDuration: `${floatDuration}s`,
          animationDelay: `${floatDelay}s`,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transitionProperty: "transform",
          transitionDuration: isHovered ? "150ms" : "600ms",
        }}
      >
        <img
          src={trophy.image}
          alt={trophy.alt}
          loading="lazy"
          className={`w-64 h-80 object-contain drop-shadow-[0_20px_40px_hsla(0,0%,0%,0.4)] transition-all duration-700 ${
            isHovered ? "scale-[1.05] drop-shadow-[0_25px_50px_hsla(43,56%,52%,0.2)]" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default function TrophyShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="trophies" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary/70 text-sm tracking-[0.3em] uppercase mb-3">Recognition</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trophy <span className="gold-text">Recognition</span>
          </h2>
          <div className="w-16 h-px bg-primary/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center items-end">
          {trophies.map((t, i) => (
            <TrophyCard key={i} trophy={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
