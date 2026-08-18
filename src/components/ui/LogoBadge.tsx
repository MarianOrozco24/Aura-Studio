import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

interface LogoBadgeProps {
  size?: number;
  float?: boolean;
  className?: string;
}

// Isologo circular de la marca. `float` agrega la animación suave de flotación
// que se usa en el hero; en el navbar/footer se muestra estático.
export function LogoBadge({ size = 48, float = false, className = "" }: LogoBadgeProps) {
  return (
    <motion.div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
      animate={float ? { y: [0, -14, 0] } : undefined}
      transition={float ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      <div className="absolute -inset-3 rounded-full bg-gradient-aura opacity-30 blur-2xl" />
      <img
        src={logo}
        alt="Aura Studio"
        className="relative h-full w-full rounded-full object-cover"
        style={{ boxShadow: "0 0 0 1px rgba(246,241,234,0.14)" }}
      />
    </motion.div>
  );
}
