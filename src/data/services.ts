import type { ServiceCategory } from "../types";

// Catálogo de servicios hardcodeado. Vive detrás de src/lib/api.ts,
// así que el día de mañana esto se reemplaza por un fetch sin tocar la UI.
export const serviceCategories: ServiceCategory[] = [
  {
    id: "pestanas",
    title: "Pestañas",
    tagline: "Mirada intensa, efecto natural",
    description:
      "Técnicas de extensión, lifting y tinte pensadas para realzar tu mirada respetando la salud de tu pestaña natural.",
    services: [
      {
        id: "extensiones-clasicas",
        categoryId: "pestanas",
        name: "Extensiones clásicas",
        shortDescription: "Una extensión por cada pestaña natural, efecto sedoso y natural.",
        description:
          "Aplicamos una extensión individual sobre cada pestaña natural para sumar largo y densidad sin perder naturalidad. Ideal para quienes buscan un primer acercamiento a las extensiones o un efecto discreto para el día a día.",
        duration: "90 min",
        priceFrom: 18000,
        benefits: ["Efecto natural", "Duración 3-4 semanas", "Apto piel sensible"],
      },
      {
        id: "volumen-ruso",
        categoryId: "pestanas",
        name: "Volumen ruso",
        shortDescription: "Abanicos de múltiples extensiones ultra livianas para máxima densidad.",
        description:
          "Confeccionamos abanicos artesanales de 3 a 6 extensiones ultra finas por pestaña natural, logrando un efecto glamoroso de alta densidad sin agregar peso. Se adapta a la forma de tu ojo para un resultado personalizado.",
        duration: "120 min",
        priceFrom: 24000,
        benefits: ["Máxima densidad", "Fibras ultra livianas", "Diseño personalizado"],
      },
      {
        id: "lifting-pestanas",
        categoryId: "pestanas",
        name: "Lifting de pestañas",
        shortDescription: "Curvatura y volumen de tus propias pestañas, sin extensiones.",
        description:
          "Un rulado permanente que curva y realza tus pestañas naturales desde la raíz, dando efecto de mirada abierta por semanas. Incluye nutrición con keratina para fortalecer la fibra.",
        duration: "60 min",
        priceFrom: 12000,
        benefits: ["Resultado 100% natural", "Dura 6-8 semanas", "Incluye nutrición"],
      },
      {
        id: "tinte-pestanas",
        categoryId: "pestanas",
        name: "Tinte de pestañas",
        shortDescription: "Color intenso sin necesidad de máscara todos los días.",
        description:
          "Coloración semipermanente que intensifica el tono de tus pestañas, ideal para complementar el lifting o usar de forma independiente para despertar la mirada sin maquillaje.",
        duration: "30 min",
        priceFrom: 6000,
        benefits: ["Combinable con lifting", "Libre de amoníaco", "Dura 4-6 semanas"],
      },
    ],
  },
  {
    id: "cejas",
    title: "Cejas",
    tagline: "El marco perfecto para tu rostro",
    description:
      "Diseño, laminado y color para cejas con estructura, densidad y forma a medida de tus rasgos.",
    services: [
      {
        id: "diseno-perfilado",
        categoryId: "cejas",
        name: "Diseño y perfilado",
        shortDescription: "Arquitectura de cejas a medida de tu rostro.",
        description:
          "Estudiamos la simetría y proporciones de tu rostro para definir la forma ideal de tus cejas. Incluye depilación con pinza y/o cera, y corrección de largo y densidad.",
        duration: "30 min",
        priceFrom: 5000,
        benefits: ["Estudio de morfología facial", "Corrección de asimetrías", "Resultado inmediato"],
      },
      {
        id: "laminado-cejas",
        categoryId: "cejas",
        name: "Laminado de cejas",
        shortDescription: "Cejas prolijas, peinadas y con volumen todo el día.",
        description:
          "Alisamos y fijamos los pelitos de la ceja en la dirección deseada para lograr un efecto de mayor densidad y prolijidad, tipo 'brow lamination'. Perfecto para cejas rebeldes o poco pobladas.",
        duration: "45 min",
        priceFrom: 10000,
        benefits: ["Efecto full densidad", "Dura 6-8 semanas", "Incluye diseño y tinte"],
      },
      {
        id: "henna-cejas",
        categoryId: "cejas",
        name: "Henna / Microblading de henna",
        shortDescription: "Efecto piel por piel para rellenar y definir sin agujas.",
        description:
          "Coloración vegetal aplicada con técnica de pelo a pelo que simula el efecto microblading, rellenando espacios vacíos y definiendo la forma sin procedimientos invasivos.",
        duration: "50 min",
        priceFrom: 9000,
        benefits: ["No invasivo", "Efecto pelo a pelo", "Dura 2-3 semanas en piel"],
      },
      {
        id: "tinte-cejas",
        categoryId: "cejas",
        name: "Tinte de cejas",
        shortDescription: "Color parejo para unificar el tono de tus cejas.",
        description:
          "Coloración semipermanente para unificar y oscurecer el tono de las cejas, ideal para acompañar el diseño y darle mayor presencia a la mirada.",
        duration: "20 min",
        priceFrom: 4000,
        benefits: ["Rápido y sin dolor", "Combinable con laminado", "Dura 3-4 semanas"],
      },
    ],
  },
  {
    id: "depilacion",
    title: "Depilación definitiva",
    tagline: "Piel suave, libre de vello, para siempre",
    description:
      "Tecnología Soprano Ice Platinum: unisex, para todos sin excepciones. Depilación definitiva por zonas, con protocolos seguros y resultados duraderos desde las primeras sesiones.",
    services: [
      {
        id: "depilacion-facial",
        categoryId: "depilacion",
        name: "Facial (bozo, mentón, patillas)",
        shortDescription: "Zonas delicadas del rostro, libres de vello de forma progresiva.",
        description:
          "Tratamiento de depilación definitiva con tecnología Soprano Ice Platinum para zonas faciales como bozo, mentón o patillas, apto para piel sensible. Se recomienda un plan de sesiones para resultados óptimos.",
        duration: "15 min",
        priceFrom: 5000,
        benefits: ["Apto piel sensible", "Sesiones cada 30 días", "Sin vello encarnado"],
      },
      {
        id: "depilacion-axilas",
        categoryId: "depilacion",
        name: "Axilas",
        shortDescription: "Una de las zonas de resultados más rápidos y notorios.",
        description:
          "Zona de alta densidad folicular con excelente respuesta al tratamiento. La mayoría de las clientas nota una reducción significativa desde las primeras 3 sesiones.",
        duration: "10 min",
        priceFrom: 4000,
        benefits: ["Resultados desde sesión 3", "Piel más suave", "Sin irritación"],
      },
      {
        id: "depilacion-piernas",
        categoryId: "depilacion",
        name: "Piernas completas",
        shortDescription: "Piel lisa y suave sin la rutina de la máquina de afeitar.",
        description:
          "Tratamiento de zona extensa que combina tecnología de depilación progresiva con protocolo de cuidado de la piel post-sesión, para un resultado parejo en toda la pierna.",
        duration: "60 min",
        priceFrom: 15000,
        benefits: ["Zona extensa", "Protocolo post-sesión incluido", "Plan de sesiones flexible"],
      },
      {
        id: "depilacion-bikini",
        categoryId: "depilacion",
        name: "Bikini",
        shortDescription: "Máxima delicadeza y privacidad para una zona sensible.",
        description:
          "Protocolo especialmente diseñado para zona de bikini, priorizando la comodidad y privacidad de cada clienta, con equipamiento de última generación apto para piel sensible.",
        duration: "20 min",
        priceFrom: 7000,
        benefits: ["Máxima privacidad", "Apto piel sensible", "Reduce vello encarnado"],
      },
      {
        id: "depilacion-hombres",
        categoryId: "depilacion",
        name: "Depilación para hombres",
        shortDescription: "Espalda, pecho, barba y otras zonas, con la misma tecnología unisex.",
        description:
          "Aura Studio trabaja depilación definitiva unisex, para todos sin excepciones. Adaptamos el protocolo a zonas masculinas como espalda, pecho o líneas de barba, con la misma tecnología Soprano Ice Platinum.",
        duration: "30 min",
        priceFrom: 8000,
        benefits: ["Tecnología unisex", "Zonas a medida", "Resultados duraderos"],
      },
    ],
  },
  {
    id: "hifu",
    title: "HIFU & Liposonix",
    tagline: "Lo último en tecnología estética, sin cirugía",
    description:
      "Combina ultrasonido focalizado de alta intensidad para reafirmar la piel, estimular colágeno y reducir grasa localizada. Sin dolor, sin cirugía y sin tiempo de recuperación.",
    services: [
      {
        id: "hifu-facial",
        categoryId: "hifu",
        name: "HIFU facial",
        shortDescription: "Lifting no invasivo que reafirma el óvalo facial y mejora la elastina.",
        description:
          "El ultrasonido focalizado de alta intensidad estimula la producción de colágeno en las capas profundas de la piel, reafirmando el óvalo facial y mejorando la elastina de forma progresiva. Un tratamiento sin cirugía, sin dolor y sin tiempo de recuperación.",
        duration: "60 min",
        priceFrom: 25000,
        benefits: ["Sin cirugía", "Sin tiempo de recuperación", "Estimula colágeno"],
      },
      {
        id: "liposonix-corporal",
        categoryId: "hifu",
        name: "Liposonix corporal",
        shortDescription: "Reduce grasa localizada y flacidez, con sesiones personalizadas.",
        description:
          "Tecnología avanzada que reduce la grasa localizada y la flacidez, definiendo y tonificando la zona tratada. Las sesiones se personalizan según cada cuerpo, con resultados reales y sin dolor.",
        duration: "60 min",
        priceFrom: 30000,
        benefits: ["Sesiones personalizadas", "Sin dolor", "Reduce flacidez localizada"],
      },
    ],
  },
];
