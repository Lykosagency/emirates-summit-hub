import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ticketImg from "@/assets/ticket.png";
import tshirtImg from "@/assets/community-tshirt.png";
import clubCardImg from "@/assets/club-card.png";

const rows = [
  {
    overline: "ENTRY",
    title: "Electronic Ticket + Verified Access",
    description:
      "Your entry is personal, verified, and built for premium control — not generic confirmation emails.",
    bullets: [
      "Full name and unique ticket ID",
      "Scannable code for secure check-in",
      "Designed for fast access and status-level presentation",
    ],
    microline: "This is how curated rooms protect the experience.",
    image: ticketImg,
    imageAlt: "Cashflow Dubai electronic ticket",
    imageFirst: false,
  },
  {
    overline: "TRIBE",
    title: "Community Uniform",
    description:
      "A simple signal that changes how you're perceived inside the room: you belong to the circle.",
    bullets: [
      "Private-community identity",
      "Instant recognition during networking",
      "Designed to feel premium, not promotional",
    ],
    microline: "Belonging is leverage when the room is curated.",
    image: tshirtImg,
    imageAlt: "Cashflow Dubai community t-shirt",
    imageFirst: true,
  },
  {
    overline: "STATUS",
    title: "Private Club Member Card",
    description:
      "This is not merch. It's a status object — built to represent access, execution, and private network entry.",
    bullets: [
      "Private-circle positioning",
      "High-end member identity standard",
      "Designed as a collectible access asset",
    ],
    microline: "Access is earned. Status is maintained.",
    image: clubCardImg,
    imageAlt: "Cashflow Dubai private club member card",
    imageFirst: false,
  },
];

function FeatureRow({
  row,
  index,
}: {
  row: (typeof rows)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  const textBlock = (
    <div className="flex flex-col justify-center">
      <span className="text-sm tracking-[0.3em] gold-text font-semibold mb-3">
        {row.overline}
      </span>
      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground uppercase">
        {row.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
        {row.description}
      </p>
      <ul className="space-y-3 mb-6">
        {row.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground/60 tracking-wide italic">
        {row.microline}
      </p>
    </div>
  );

  const imageBlock = (
    <div className="flex items-center justify-center">
      <div className="relative group">
        <img
          src={row.image}
          alt={row.imageAlt}
          loading="lazy"
          className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-[0_20px_40px_hsla(43,56%,52%,0.12)] motion-safe:animate-float group-hover:-translate-y-2 group-hover:drop-shadow-[0_25px_50px_hsla(43,56%,52%,0.2)] transition-all duration-700"
        />
        {/* Subtle gold edge glow */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            boxShadow: "0 0 40px hsla(43, 56%, 52%, 0.08)",
          }}
        />
      </div>
    </div>
  );

  const isImageFirst = row.imageFirst;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-1000 delay-${index * 200} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Mobile: image always first */}
      <div className="lg:hidden">{imageBlock}</div>
      <div className="lg:hidden">{textBlock}</div>

      {/* Desktop: alternating */}
      <div className="hidden lg:block">{isImageFirst ? imageBlock : textBlock}</div>
      <div className="hidden lg:block">{isImageFirst ? textBlock : imageBlock}</div>
    </div>
  );
}

export default function ValueStack() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="access-assets" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your Access, <span className="gold-text">Made Physical</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Not just attendance. Identity, entry, and private-circle access.
          </p>
          <div className="w-16 h-px bg-primary/40 mx-auto mt-6" />
        </div>

        {/* Feature Rows */}
        <div className="space-y-24 lg:space-y-32 max-w-6xl mx-auto">
          {rows.map((row, i) => (
            <FeatureRow key={i} row={row} index={i} />
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-24 glass-card rounded-lg p-8 lg:p-12 text-center max-w-3xl mx-auto gold-border-glow">
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 text-foreground">
            Access is curated. Seats are limited.
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Apply to unlock entry and secure your place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#qualify"
              className="gold-gradient text-primary-foreground px-8 py-3 rounded font-display text-sm tracking-wider uppercase font-semibold hover:opacity-90 transition-opacity"
            >
              Apply Now
            </a>
            <a
              href="#qualify"
              className="border border-primary/30 text-foreground px-8 py-3 rounded font-display text-sm tracking-wider uppercase font-semibold hover:border-primary/60 transition-colors"
            >
              Book Your Seat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
