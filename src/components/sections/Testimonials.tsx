import { Star } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { useTestimonials } from "../../hooks/useTestimonials";
import type { Testimonial } from "../../types";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mx-4 flex w-80 shrink-0 flex-col rounded-2xl border border-aura-ring bg-aura-surface p-6">
      <div className="flex gap-1 text-aura-lilac-light">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-aura-cream/75">“{testimonial.quote}”</p>
      <div className="mt-5 border-t border-aura-ring pt-4">
        <p className="font-display text-base text-aura-cream">{testimonial.name}</p>
        <p className="text-xs uppercase tracking-wide text-aura-cream/45">{testimonial.service}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { data: testimonials, isLoading } = useTestimonials();
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonios" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-aura-lilac-light">Testimonios</span>
          <h2 className="mt-3 font-display text-4xl text-aura-cream sm:text-5xl">Lo que dicen quienes nos eligen</h2>
        </Reveal>
      </div>

      {!isLoading && testimonials.length > 0 && (
        <div className="group relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-[marquee_32s_linear_infinite] group-hover:[animation-play-state:paused]">
            {loopedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
