import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { useLang } from "@/hooks/useLang";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("nav.program"), href: "#program" },
    { label: t("nav.speakers"), href: "#speakers" },
    { label: t("nav.experience"), href: "#access-assets" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Cashflow Dubai" className="h-7 lg:h-9 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="text-xs tracking-wider uppercase text-primary/70 border border-primary/20 rounded-full px-3 py-1.5 hover:border-primary/50 transition-colors"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>

            <a href="#pricing" className="cta-primary">
              {t("nav.cta")}
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="text-xs tracking-wider uppercase text-primary/70 border border-primary/20 rounded-full px-2.5 py-1 hover:border-primary/50 transition-colors"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground p-2" aria-label="Toggle menu">
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 px-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-2xl font-display font-light text-foreground hover:text-primary transition-colors uppercase">
                {link.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="cta-primary text-center mt-4">
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/90 backdrop-blur-xl border-t border-primary/10 p-3">
        <a href="#pricing" className="block cta-primary text-center">
          {t("cta.secure")}
        </a>
      </div>
    </>
  );
}
