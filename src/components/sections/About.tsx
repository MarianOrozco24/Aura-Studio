import { Gem, HeartHandshake, Leaf, Sparkles } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { LogoBadge } from "../ui/LogoBadge";

const VALUES = [
  {
    icon: Sparkles,
    title: "Técnica precisa",
    description: "Formación constante en las últimas tendencias de pestañas, cejas y depilación definitiva.",
  },
  {
    icon: Leaf,
    title: "Cuidado real",
    description: "Productos y protocolos pensados para respetar la piel y el pelo natural en cada sesión.",
  },
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    description: "Cada tratamiento se adapta a tus rasgos, tu piel y lo que vos querés lograr.",
  },
  {
    icon: Gem,
    title: "Experiencia premium",
    description: "Un espacio diseñado para que tu turno también sea un momento para vos.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-gradient-aura opacity-10 blur-3xl" />
            <LogoBadge size={260} />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-aura-lilac-light">Nuestra esencia</span>
            <h2 className="mt-3 font-display text-4xl text-aura-cream sm:text-5xl">
              Belleza que se nota, cuidado que se siente
            </h2>
            <p className="mt-5 max-w-xl text-aura-cream/70">
              Aura Studio nació para ofrecer un espacio de belleza distinto: donde la técnica se combina con el
              cuidado personalizado. Nos especializamos en pestañas, cejas y depilación definitiva, siempre con un
              enfoque de resultados naturales y duraderos.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={0.1 + index * 0.08}>
                <div className="group rounded-2xl border border-aura-ring p-5 transition-colors duration-300 hover:border-aura-lilac/60">
                  <value.icon
                    size={22}
                    className="text-aura-lilac-light transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="mt-3 font-display text-lg text-aura-cream">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-aura-cream/60">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
