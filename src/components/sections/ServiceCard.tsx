import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "../ui/TiltCard";
import { siteInfo } from "../../data/site";
import type { Service } from "../../types";

const currencyFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

// Arma el link de WhatsApp con el detalle del servicio y su precio precargados,
// para que el cliente solo tenga que confirmar el envío al reservar.
function buildReservationHref(service: Service) {
  const message = [
    `Hola! Quiero reservar un turno para *${service.name}*.`,
    service.description,
    `Precio: ${currencyFormatter.format(service.priceFrom)}`,
    "¿Me confirmás disponibilidad?",
  ].join("\n\n");

  return `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

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
              <a
                href={buildReservationHref(service)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-aura px-4 py-2 text-xs uppercase tracking-[0.15em] text-aura-bg transition-opacity hover:opacity-90"
              >
                <MessageCircle size={14} />
                Reservar por WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TiltCard>
  );
}
