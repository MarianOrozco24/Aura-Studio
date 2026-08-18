import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "../ui/TiltCard";
import type { Service } from "../../types";

const currencyFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TiltCard className="flex h-full flex-col p-6">
      <div className="relative flex flex-1 flex-col">
        <h3 className="font-display text-xl text-aura-cream">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-aura-cream/65">{service.shortDescription}</p>

        <div className="mt-4 flex items-center gap-4 text-xs uppercase tracking-wide text-aura-lilac-light">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            {service.duration}
          </span>
          <span>Desde {currencyFormatter.format(service.priceFrom)}</span>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="mt-5 flex items-center gap-1.5 self-start text-xs uppercase tracking-[0.15em] text-aura-cream/80 transition-colors hover:text-aura-lilac-light"
        >
          {expanded ? "Ver menos" : "Ver detalle"}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={14} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed text-aura-cream/70">{service.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="rounded-full border border-aura-ring px-3 py-1 text-[11px] uppercase tracking-wide text-aura-cream/70"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TiltCard>
  );
}
