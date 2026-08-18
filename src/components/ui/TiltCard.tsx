import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

// Tarjeta con tilt 3D e iluminación que sigue al cursor.
// Se usa en las tarjetas de servicios: el efecto aparece apenas se interactúa con ellas.
export function TiltCard({ children, className = "" }: TiltCardProps) {
  const rotateX = useSpring(0, { stiffness: 220, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 18 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(220px circle at ${glowX}% ${glowY}%, rgba(183,164,224,0.16), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 14);
    rotateX.set((0.5 - py) * 14);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`group relative overflow-hidden rounded-2xl border border-aura-ring bg-aura-surface ${className}`}
    >
      <motion.div style={{ background }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.div>
  );
}
