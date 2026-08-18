import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { LogoBadge } from "../ui/LogoBadge";
import { MagneticButton } from "../ui/MagneticButton";
import { siteInfo } from "../../data/site";

export function Hero() {
  const whatsappHref = `https://wa.me/${siteInfo.whatsappNumber}`;

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Blobs de fondo animados */}
      <motion.div
        aria-hidden
        className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-aura-lilac/25 blur-[110px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-aura-mauve/25 blur-[110px]"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-aura-ring px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-aura-lilac-light"
          >
            <Sparkles size={14} />
            Estudio de belleza
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl leading-[1.08] text-aura-cream sm:text-6xl lg:text-7xl"
          >
            Realzá tu belleza
            <br />
            con un <span className="text-gradient-aura italic">aura</span> propia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-md text-base leading-relaxed text-aura-cream/70"
          >
            Pestañas, cejas y depilación definitiva en un espacio pensado para vos.
            Técnica, cuidado y resultados naturales en cada detalle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={whatsappHref}>Reservar turno</MagneticButton>
            <MagneticButton href="#servicios" variant="outline">
              Ver servicios
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex items-center justify-center"
        >
          <motion.div
            aria-hidden
            className="absolute h-[22rem] w-[22rem] rounded-full border border-aura-ring sm:h-[26rem] sm:w-[26rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden
            className="absolute h-[18rem] w-[18rem] rounded-full border border-dashed border-aura-ring/70 sm:h-[21rem] sm:w-[21rem]"
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />
          <LogoBadge size={200} float />
        </motion.div>
      </div>

      <motion.a
        href="#servicios"
        aria-label="Ir a servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-aura-cream/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
