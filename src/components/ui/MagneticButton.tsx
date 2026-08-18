import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
}

const STRENGTH = 0.35;

// Botón que se "atrae" levemente hacia el cursor al pasar por encima.
// Es el micro-efecto que aparece en cada CTA importante de la página.
export function MagneticButton({ children, onClick, href, variant = "solid", className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * STRENGTH, y: relY * STRENGTH });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-sans text-sm tracking-[0.15em] uppercase transition-colors duration-300";
  const variantClasses =
    variant === "solid"
      ? "bg-gradient-aura text-aura-bg shadow-[0_0_30px_-8px_rgba(183,164,224,0.6)] hover:shadow-[0_0_40px_-4px_rgba(183,164,224,0.8)]"
      : "border border-aura-ring text-aura-cream hover:border-aura-lilac hover:bg-aura-lilac/5";

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      ref={ref as never}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 200, damping: 12, mass: 0.5 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </MotionComponent>
  );
}
