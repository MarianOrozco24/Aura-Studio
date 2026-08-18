import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

// Halo lavanda que sigue al mouse por toda la página, sutil y desactivado en mobile
// (donde no hay cursor). Es el efecto "siempre presente" que le da vida a la página.
export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });
  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(183,164,224,0.09), transparent 70%)`;

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 hidden md:block"
      style={{ background }}
    />
  );
}
