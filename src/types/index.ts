// Tipos del dominio de Aura Studio.
// Se mantienen desacoplados del origen de datos (hoy hardcodeado en /data,
// mañana una API) para que reemplazar la fuente no requiera tocar los componentes.

export type ServiceCategoryId = "pestanas" | "cejas" | "limpieza-facial" | "depilacion" | "hifu";

export interface Service {
  id: string;
  categoryId: ServiceCategoryId;
  name: string;
  shortDescription: string;
  description: string;
  priceFrom: number;
  benefits: string[];
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  title: string;
  tagline: string;
  description: string;
  services: Service[];
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface SiteInfo {
  brandName: string;
  tagline: string;
  whatsappNumber: string;
  instagramHandle: string;
  instagramUrl: string;
  address: string;
  hours: BusinessHours[];
}
