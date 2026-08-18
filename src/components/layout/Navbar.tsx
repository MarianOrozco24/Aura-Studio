import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoBadge } from "../ui/LogoBadge";
import { MagneticButton } from "../ui/MagneticButton";
import { siteInfo } from "../../data/site";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = `https://wa.me/${siteInfo.whatsappNumber}`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-aura-bg/80 backdrop-blur-lg border-b border-aura-ring" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <LogoBadge size={40} />
          <span className="font-display text-lg tracking-wide text-aura-cream">Aura Studio</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-sans text-xs uppercase tracking-[0.18em] text-aura-cream/80 transition-colors hover:text-aura-cream"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-aura transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton href={whatsappHref} variant="outline" className="!px-6 !py-2.5 text-[11px]">
            Reservar turno
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-aura-cream lg:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-aura-ring bg-aura-bg/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-sans text-sm uppercase tracking-[0.18em] text-aura-cream/85"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <MagneticButton href={whatsappHref} className="w-full">
                  Reservar turno
                </MagneticButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
