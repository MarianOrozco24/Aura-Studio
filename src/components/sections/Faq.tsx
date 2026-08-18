import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../ui/Reveal";
import { useFaqItems } from "../../hooks/useFaqItems";

export function Faq() {
  const { data: faqItems } = useFaqItems();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="preguntas" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-aura-lilac-light">Preguntas frecuentes</span>
          <h2 className="mt-3 font-display text-4xl text-aura-cream sm:text-5xl">Resolvemos tus dudas</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-aura-ring border-y border-aura-ring">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={index * 0.05}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg text-aura-cream">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-aura-lilac-light"
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-aura-cream/65">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
