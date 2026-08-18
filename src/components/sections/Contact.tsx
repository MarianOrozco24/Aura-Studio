import { Clock, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { MagneticButton } from "../ui/MagneticButton";
import { InstagramIcon } from "../ui/InstagramIcon";
import { siteInfo } from "../../data/site";

export function Contact() {
  const whatsappHref = `https://wa.me/${siteInfo.whatsappNumber}`;

  return (
    <section id="contacto" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-aura-ring bg-aura-surface px-6 py-16 sm:px-16">
          <div aria-hidden className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-aura-lilac/20 blur-[100px]" />
          <div aria-hidden className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-aura-mauve/20 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-aura-lilac-light">Reservá tu turno</span>
              <h2 className="mt-3 font-display text-4xl text-aura-cream sm:text-5xl">
                Tu mejor versión te espera en Aura Studio
              </h2>
              <p className="mt-5 max-w-md text-aura-cream/70">
                Escribinos por WhatsApp o Instagram y coordinamos el turno que mejor se adapte a vos.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton href={whatsappHref}>
                  <MessageCircle size={16} />
                  Escribir por WhatsApp
                </MagneticButton>
                <MagneticButton href={siteInfo.instagramUrl} variant="outline">
                  <InstagramIcon size={16} />
                  Seguinos
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-aura-lilac-light" />
                <p className="text-sm text-aura-cream/70">{siteInfo.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-aura-lilac-light" />
                <div className="text-sm text-aura-cream/70">
                  {siteInfo.hours.map((slot) => (
                    <p key={slot.day}>
                      <span className="text-aura-cream/90">{slot.day}:</span> {slot.hours}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <InstagramIcon size={18} className="mt-0.5 shrink-0 text-aura-lilac-light" />
                <p className="text-sm text-aura-cream/70">{siteInfo.instagramHandle}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
