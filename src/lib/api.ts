import { serviceCategories } from "../data/services";
import { testimonials } from "../data/testimonials";
import { faqItems } from "../data/faq";
import { siteInfo } from "../data/site";
import type { FaqItem, ServiceCategory, SiteInfo, Testimonial } from "../types";

// Capa de acceso a datos. Hoy resuelve contra los archivos hardcodeados de /data,
// simulando la latencia de una llamada de red. El día que exista un backend real,
// solo hay que reemplazar el cuerpo de estas funciones por fetch(...) — los
// componentes que las consumen (vía los hooks de /hooks) no cambian.

const SIMULATED_LATENCY_MS = 250;

function resolveAfterLatency<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), SIMULATED_LATENCY_MS);
  });
}

export async function fetchServiceCategories(): Promise<ServiceCategory[]> {
  return resolveAfterLatency(serviceCategories);
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  return resolveAfterLatency(testimonials);
}

export async function fetchFaqItems(): Promise<FaqItem[]> {
  return resolveAfterLatency(faqItems);
}

export async function fetchSiteInfo(): Promise<SiteInfo> {
  return resolveAfterLatency(siteInfo);
}
