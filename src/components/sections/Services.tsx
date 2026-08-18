import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "../ui/Reveal";
import { ServiceCard } from "./ServiceCard";
import { useServiceCategories } from "../../hooks/useServiceCategories";
import type { ServiceCategoryId } from "../../types";

export function Services() {
  const { data: categories, isLoading } = useServiceCategories();
  const [activeId, setActiveId] = useState<ServiceCategoryId | null>(null);

  const activeCategory =
    categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <section id="servicios" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-aura-lilac-light">Nuestros servicios</span>
          <h2 className="mt-3 font-display text-4xl text-aura-cream sm:text-5xl">
            Una descripción a medida de cada tratamiento
          </h2>
          <p className="mt-4 text-aura-cream/65">
            Elegí una categoría y descubrí el detalle de cada servicio: duración, beneficios y valor de referencia.
          </p>
        </Reveal>

        {isLoading ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-52 animate-pulse rounded-2xl border border-aura-ring bg-aura-surface"
              />
            ))}
          </div>
        ) : (
          <>
            <Reveal delay={0.1} className="mt-12 flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const isActive = category.id === activeCategory?.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveId(category.id)}
                    className={`relative rounded-full px-6 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive ? "text-aura-bg" : "text-aura-cream/75 hover:text-aura-cream"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-service-tab"
                        className="absolute inset-0 rounded-full bg-gradient-aura"
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      />
                    )}
                    <span className="relative">{category.title}</span>
                  </button>
                );
              })}
            </Reveal>

            {activeCategory && (
              <Reveal delay={0.15} className="mx-auto mt-3 max-w-xl text-center text-sm text-aura-cream/55">
                <p>{activeCategory.tagline} — {activeCategory.description}</p>
              </Reveal>
            )}

            <AnimatePresence mode="wait">
              {activeCategory && (
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                  {activeCategory.services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}
