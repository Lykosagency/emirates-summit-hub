import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Program", href: "#program" },
  { label: "Speakers", href: "#speakers" },
  { label: "Experience", href: "#access-assets" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Cashflow Dubai" className="h-7 lg:h-9 w-auto" />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">{link.label}</a>
            ))}
          </div>
          <a href="https://elite-horizon-events-fze-llc.zbooni.com/products/dubai-private-mastermind" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex gold-gradient text-primary-foreground text-sm tracking-[0.2em] uppercase px-6 py-2.5 rounded-sm font-medium hover:shadow-[0_0_30px_hsla(43,56%,52%,0.3)] transition-all duration-300 hover:-translate-y-0.5">Secure Your Seat</a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground p-2" aria-label="Toggle menu">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 px-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-2xl font-display font-light text-foreground hover:text-primary transition-colors uppercase">{link.label}</a>
            ))}
            <a href="https://elite-horizon-events-fze-llc.zbni.co/u/e6yvi" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="cta-primary text-center mt-4">Secure Your Seat</a>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/90 backdrop-blur-xl border-t border-primary/10 p-3">
        <a href="https://elite-horizon-events-fze-llc.zbooni.com/products/dubai-private-mastermind" target="_blank" rel="noopener noreferrer" className="block gold-gradient text-primary-foreground text-center py-3 rounded-sm font-medium tracking-[0.15em] uppercase text-sm whitespace-nowrap">Secure Your Seat — 4,099 AED</a>
      </div>
    </>
  );
}
