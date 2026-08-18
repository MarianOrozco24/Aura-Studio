import { LogoBadge } from "../ui/LogoBadge";
import { siteInfo } from "../../data/site";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-aura-ring py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <LogoBadge size={32} />
          <span className="font-display text-base text-aura-cream">{siteInfo.brandName}</span>
        </div>
        <p className="text-xs text-aura-cream/45">
          © {YEAR} {siteInfo.brandName}. {siteInfo.tagline}.
        </p>
      </div>
    </footer>
  );
}
