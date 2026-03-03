import logo from "@/assets/logo.png";
import { useLang } from "@/hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative py-16 border-t border-primary/10 mb-14 lg:mb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Cashflow Dubai" className="h-10 mb-6 opacity-80" />
          <p className="text-sm text-muted-foreground mb-1">{t("footer.location")}</p>
          <p className="text-xs text-muted-foreground/50 mb-8">{t("footer.event")}</p>
          <div className="w-12 h-px bg-primary/20 mb-8" />
          <div className="flex gap-6 text-xs text-muted-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.contact")}</a>
          </div>
          <p className="text-xs text-muted-foreground/30 mt-6">© 2026 Cashflow Dubai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
