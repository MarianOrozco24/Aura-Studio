import type { ServiceCategory } from "../types";

// Catálogo de servicios hardcodeado. Vive detrás de src/lib/api.ts,
// así que el día de mañana esto se reemplaza por un fetch sin tocar la UI.
// Precios y servicios actualizados según las listas vigentes (HIFU Facial y
// Corporal, ZoeyLashes by Zoe Rubio y Depilación Láser).
export const serviceCategories: ServiceCategory[] = [
  {
    id: "pestanas",
    title: "Pestañas",
    tagline: "Mirada intensa, efecto natural",
    description:
      "Técnicas de extensión, lifting y mantenimiento pensadas para realzar tu mirada respetando la salud de tu pestaña natural.",
    services: [
      {
        id: "lifting-pestanas",
        categoryId: "pestanas",
        name: "Lifting de pestañas",
        shortDescription: "Curvatura y volumen de tus propias pestañas, sin extensiones.",
        description:
          "Un rulado permanente que curva y realza tus pestañas naturales desde la raíz, dando efecto de mirada abierta por semanas. Incluye nutrición para fortalecer la fibra.",
        priceFrom: 20500,
        benefits: ["Resultado 100% natural", "Dura 6-8 semanas", "Incluye nutrición"],
      },
      {
        id: "extensiones-clasicas",
        categoryId: "pestanas",
        name: "Extensión de pestañas (clásicas)",
        shortDescription: "Una extensión por cada pestaña natural, efecto sedoso y natural.",
        description:
          "Aplicamos una extensión individual sobre cada pestaña natural para sumar largo y densidad sin perder naturalidad. Ideal para quienes buscan un primer acercamiento a las extensiones o un efecto discreto para el día a día.",
        priceFrom: 28000,
        benefits: ["Efecto natural", "Duración 3-4 semanas", "Apto piel sensible"],
      },
      {
        id: "service-extensiones",
        categoryId: "pestanas",
        name: "Service de extensiones (cada 15 días)",
        shortDescription: "Mantenimiento periódico para conservar el volumen del set.",
        description:
          "Retoque de extensiones a los 15 días de la aplicación inicial, reponiendo las pestañas caídas para mantener la densidad y prolijidad del set.",
        priceFrom: 16000,
        benefits: ["Cada 15 días", "Conserva el volumen", "Prolonga la duración del set"],
      },
      {
        id: "retiro-extensiones-sin-renovacion",
        categoryId: "pestanas",
        name: "Retiro de extensiones (sin renovación de set)",
        shortDescription: "Remoción segura y prolija de las extensiones, sin aplicar un nuevo set.",
        description:
          "Disolución y retiro del adhesivo de forma segura para tu pestaña natural, pensado para quienes deciden hacer una pausa con las extensiones.",
        priceFrom: 12000,
        benefits: ["Cuida la pestaña natural", "No genera daño", "Ideal para hacer una pausa"],
      },
      {
        id: "retiro-extensiones-nuevo-set",
        categoryId: "pestanas",
        name: "Retiro de extensiones (para nuevo set)",
        shortDescription: "Retiro del set anterior como paso previo a la aplicación de uno nuevo.",
        description:
          "Se suma como tiempo extra a la sesión de un nuevo set: retiramos primero las extensiones existentes para trabajar sobre la pestaña limpia.",
        priceFrom: 5000,
        benefits: ["Se suma a un nuevo set", "30 min extra", "Pestaña lista para re-aplicar"],
      },
      {
        id: "combo-lifting-perfilado",
        categoryId: "pestanas",
        name: "Combo: Lifting de pestañas + Perfilado de cejas",
        shortDescription: "Mirada completa: pestañas curvadas y cejas prolijas en una sola sesión.",
        description:
          "Combo pensado para renovar la mirada de punta a punta: lifting de pestañas más diseño y perfilado de cejas.",
        priceFrom: 28000,
        benefits: ["Mirada completa", "Una sola sesión", "Resultado 100% natural"],
      },
      {
        id: "combo-lifting-perfilado-laminado",
        categoryId: "pestanas",
        name: "Combo: Lifting de pestañas + Perfilado y Laminado de cejas",
        shortDescription: "El combo más completo: pestañas y cejas trabajadas al detalle.",
        description:
          "Sumamos lifting de pestañas, diseño y perfilado, y laminado de cejas en una única sesión para una mirada renovada de punta a punta.",
        priceFrom: 38500,
        benefits: ["Combo más completo", "Mirada renovada", "Ahorrás vs. servicios por separado"],
      },
    ],
  },
  {
    id: "cejas",
    title: "Cejas",
    tagline: "El marco perfecto para tu rostro",
    description:
      "Diseño y laminado para cejas con estructura, densidad y forma a medida de tus rasgos.",
    services: [
      {
        id: "perfilado-cejas",
        categoryId: "cejas",
        name: "Perfilado de cejas",
        shortDescription: "Arquitectura de cejas a medida de tu rostro.",
        description:
          "Estudiamos la simetría y proporciones de tu rostro para definir la forma ideal de tus cejas. Incluye depilación con pinza y/o cera, y corrección de largo y densidad.",
        priceFrom: 12500,
        benefits: ["Estudio de morfología facial", "Corrección de asimetrías", "Resultado inmediato"],
      },
      {
        id: "laminado-cejas",
        categoryId: "cejas",
        name: "Laminado de cejas",
        shortDescription: "Cejas prolijas, peinadas y con volumen todo el día.",
        description:
          "Alisamos y fijamos los pelitos de la ceja en la dirección deseada para lograr un efecto de mayor densidad y prolijidad, tipo 'brow lamination'. Perfecto para cejas rebeldes o poco pobladas.",
        priceFrom: 17500,
        benefits: ["Efecto full densidad", "Dura 6-8 semanas", "Prolijidad todo el día"],
      },
      {
        id: "combo-perfilado-laminado",
        categoryId: "cejas",
        name: "Combo: Perfilado + Laminado de cejas",
        shortDescription: "El combo completo para cejas definidas, prolijas y con volumen.",
        description:
          "Combina el diseño y perfilado con el laminado, logrando cejas con la forma ideal para tu rostro y un acabado peinado y denso que dura semanas.",
        priceFrom: 26000,
        benefits: ["Diseño + laminado en una sesión", "Dura 6-8 semanas", "Ahorrás vs. servicios por separado"],
      },
    ],
  },
  {
    id: "limpieza-facial",
    title: "Limpieza facial",
    tagline: "Piel limpia, hidratada y renovada",
    description:
      "Tratamientos de limpieza profunda pensados para remover impurezas, oxigenar la piel y aportar hidratación profesional.",
    services: [
      {
        id: "limpieza-hidratacion",
        categoryId: "limpieza-facial",
        name: "Limpieza facial (limpieza + hidratación prof.)",
        shortDescription: "Limpieza profunda con hidratación profesional para renovar la piel.",
        description:
          "Higienizamos la piel en profundidad y cerramos el tratamiento con una máscara de hidratación profesional, dejando la piel limpia, fresca y nutrida.",
        priceFrom: 20000,
        benefits: ["Limpieza profunda", "Hidratación profesional", "Piel renovada"],
      },
      {
        id: "limpieza-exfoliacion-hidratacion",
        categoryId: "limpieza-facial",
        name: "Limpieza facial (limpieza + exfoliación + hidratación prof.)",
        shortDescription: "Limpieza, exfoliación e hidratación profesional en un solo tratamiento.",
        description:
          "Sumamos un paso de exfoliación a la limpieza profunda para renovar la textura de la piel, cerrando con hidratación profesional para un resultado más notorio.",
        priceFrom: 27500,
        benefits: ["Renueva la textura de la piel", "Exfoliación + hidratación", "Resultado más notorio"],
      },
    ],
  },
  {
    id: "depilacion",
    title: "Depilación definitiva",
    tagline: "Piel suave, libre de vello, para siempre",
    description:
      "Tecnología Soprano Ice Platinum: unisex, para todos sin excepciones. Depilación definitiva por zonas o en combos, con protocolos seguros y resultados duraderos desde las primeras sesiones.",
    services: [
      {
        id: "depilacion-combo-mujer-3zonas-chicas",
        categoryId: "depilacion",
        name: "Combo mujer: 3 zonas chicas",
        shortDescription: "Axilas, bozo y cavado.",
        description:
          "Combo pensado para mujeres que combina axilas, bozo y cavado en una misma sesión, con excelente relación entre resultado y precio.",
        priceFrom: 15000,
        benefits: ["Axilas, bozo y cavado", "Sesiones cada 30 días", "Sin vello encarnado"],
      },
      {
        id: "depilacion-combo-mujer-3zonas-medias",
        categoryId: "depilacion",
        name: "Combo mujer: 3 zonas medias",
        shortDescription: "Axila, cavado y piernas completas.",
        description:
          "Combo pensado para mujeres que suma axila, cavado y piernas completas en una misma sesión.",
        priceFrom: 19000,
        benefits: ["Axila, cavado y piernas completas", "Plan de sesiones flexible", "Piel más suave"],
      },
      {
        id: "depilacion-combo-mujer-cuerpo-completo",
        categoryId: "depilacion",
        name: "Combo mujer: Cuerpo completo",
        shortDescription: "Todo el cuerpo, en un único combo.",
        description:
          "Tratamiento de depilación definitiva de cuerpo completo para mujeres, con la mejor relación precio-cobertura de zonas.",
        priceFrom: 25000,
        benefits: ["Todo el cuerpo", "Mejor relación precio-cobertura", "Resultados duraderos"],
      },
      {
        id: "depilacion-combo-hombre-cuerpo-completo",
        categoryId: "depilacion",
        name: "Combo hombre: Cuerpo completo",
        shortDescription: "Todo el cuerpo, en un único combo.",
        description:
          "Tratamiento de depilación definitiva de cuerpo completo para hombres, con tecnología unisex Soprano Ice Platinum.",
        priceFrom: 33000,
        benefits: ["Todo el cuerpo", "Tecnología unisex", "Resultados duraderos"],
      },
      {
        id: "depilacion-combo-hombre-mitad-cuerpo",
        categoryId: "depilacion",
        name: "Combo hombre: Mitad de cuerpo",
        shortDescription: "Pecho, abdomen, axilas y brazo, o piernas completas, glúteos, cavado y pies.",
        description:
          "Combo a elección entre pecho, abdomen, axilas y brazo, o piernas completas, glúteos, cavado y pies, para hombres.",
        priceFrom: 20000,
        benefits: ["A elección entre dos combinaciones", "Tecnología unisex", "Resultados duraderos"],
      },
      {
        id: "depilacion-combo-hombre-3zonas-medias",
        categoryId: "depilacion",
        name: "Combo hombre: 3 zonas medias (a elección)",
        shortDescription: "Brazos, pecho, abdomen, espalda (alta/baja), axilas, glúteos, cavado, piernas completas o pies.",
        description:
          "Elegí 3 zonas medias entre brazos, pecho, abdomen, espalda alta o baja, axilas, glúteos, cavado, piernas completas o pies.",
        priceFrom: 23500,
        benefits: ["3 zonas a elección", "Tecnología unisex", "Resultados duraderos"],
      },
      {
        id: "depilacion-rostro",
        categoryId: "depilacion",
        name: "Rostro",
        shortDescription: "Zonas delicadas del rostro, libres de vello de forma progresiva.",
        description:
          "Tratamiento de depilación definitiva con tecnología Soprano Ice Platinum para rostro, apto para piel sensible.",
        priceFrom: 12500,
        benefits: ["Apto piel sensible", "Sesiones cada 30 días", "Sin vello encarnado"],
      },
      {
        id: "depilacion-bozo",
        categoryId: "depilacion",
        name: "Bozo",
        shortDescription: "Una de las zonas de resultados más rápidos y notorios.",
        description:
          "Zona de alta densidad folicular con excelente respuesta al tratamiento, apta para piel sensible.",
        priceFrom: 6000,
        benefits: ["Resultados desde sesión 3", "Piel más suave", "Sin irritación"],
      },
      {
        id: "depilacion-axilas",
        categoryId: "depilacion",
        name: "Axilas",
        shortDescription: "Una de las zonas de resultados más rápidos y notorios.",
        description:
          "Zona de alta densidad folicular con excelente respuesta al tratamiento. La mayoría de las clientas nota una reducción significativa desde las primeras 3 sesiones.",
        priceFrom: 7000,
        benefits: ["Resultados desde sesión 3", "Piel más suave", "Sin irritación"],
      },
      {
        id: "depilacion-brazos",
        categoryId: "depilacion",
        name: "Brazos",
        shortDescription: "Piel lisa y suave sin la rutina de la máquina de afeitar.",
        description:
          "Tratamiento de depilación definitiva de brazos completos con protocolo de cuidado de la piel post-sesión.",
        priceFrom: 10000,
        benefits: ["Zona extensa", "Protocolo post-sesión incluido", "Plan de sesiones flexible"],
      },
      {
        id: "depilacion-cavado",
        categoryId: "depilacion",
        name: "Cavado c/ tiro de cola",
        shortDescription: "Máxima delicadeza y privacidad para una zona sensible.",
        description:
          "Protocolo especialmente diseñado para la zona de cavado con tiro de cola, priorizando la comodidad y privacidad de cada clienta, con equipamiento apto para piel sensible.",
        priceFrom: 10000,
        benefits: ["Máxima privacidad", "Apto piel sensible", "Reduce vello encarnado"],
      },
      {
        id: "depilacion-gluteos",
        categoryId: "depilacion",
        name: "Glúteos",
        shortDescription: "Piel suave y libre de vello en una zona de fácil resultado.",
        description:
          "Tratamiento de depilación definitiva para la zona de glúteos, con protocolo de cuidado de la piel post-sesión.",
        priceFrom: 8000,
        benefits: ["Piel más suave", "Sin irritación", "Resultados duraderos"],
      },
      {
        id: "depilacion-pecho-abdomen",
        categoryId: "depilacion",
        name: "Pecho y abdomen",
        shortDescription: "Zona unisex de alta demanda, con excelente respuesta al tratamiento.",
        description:
          "Depilación definitiva de pecho y abdomen, con tecnología unisex Soprano Ice Platinum apta para todo tipo de piel.",
        priceFrom: 10000,
        benefits: ["Tecnología unisex", "Zona a medida", "Resultados duraderos"],
      },
      {
        id: "depilacion-espalda",
        categoryId: "depilacion",
        name: "Espalda completa",
        shortDescription: "Zona extensa de difícil acceso, ideal para depilación definitiva.",
        description:
          "Tratamiento de depilación definitiva de espalda completa, con protocolo de cuidado de la piel post-sesión.",
        priceFrom: 12000,
        benefits: ["Zona extensa", "Tecnología unisex", "Protocolo post-sesión incluido"],
      },
      {
        id: "depilacion-media-pierna",
        categoryId: "depilacion",
        name: "Media pierna",
        shortDescription: "Piel lisa y suave sin la rutina de la máquina de afeitar.",
        description:
          "Tratamiento de depilación definitiva de media pierna con protocolo de cuidado de la piel post-sesión.",
        priceFrom: 8500,
        benefits: ["Zona extensa", "Protocolo post-sesión incluido", "Plan de sesiones flexible"],
      },
      {
        id: "depilacion-piernas-completas",
        categoryId: "depilacion",
        name: "Piernas completas",
        shortDescription: "Piel lisa y suave sin la rutina de la máquina de afeitar.",
        description:
          "Tratamiento de zona extensa que combina tecnología de depilación progresiva con protocolo de cuidado de la piel post-sesión, para un resultado parejo en toda la pierna.",
        priceFrom: 16500,
        benefits: ["Zona extensa", "Protocolo post-sesión incluido", "Plan de sesiones flexible"],
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
        id: "hifu-facial-completo",
        categoryId: "hifu",
        name: "HIFU facial completo",
        shortDescription: "Lifting no invasivo que reafirma el óvalo facial y mejora la elastina.",
        description:
          "El ultrasonido focalizado de alta intensidad estimula la producción de colágeno en las capas profundas de la piel, reafirmando el óvalo facial y mejorando la elastina de forma progresiva. Un tratamiento sin cirugía, sin dolor y sin tiempo de recuperación.",
        priceFrom: 55000,
        benefits: ["Sin cirugía", "Sin tiempo de recuperación", "Estimula colágeno"],
      },
      {
        id: "hifu-facial-parcial",
        categoryId: "hifu",
        name: "HIFU facial parcial (mentón y mejillas)",
        shortDescription: "Tratamiento focalizado en mentón y mejillas para un lifting puntual.",
        description:
          "Ultrasonido focalizado aplicado en mentón y mejillas para tensar y reafirmar zonas puntuales del rostro, ideal como mantenimiento o primer acercamiento al HIFU.",
        priceFrom: 35000,
        benefits: ["Zona puntual", "Sin cirugía", "Estimula colágeno"],
      },
      {
        id: "hifu-facial-cuello-escote",
        categoryId: "hifu",
        name: "HIFU facial con cuello y escote",
        shortDescription: "Lifting facial completo sumando cuello y escote.",
        description:
          "Extiende el tratamiento de HIFU facial completo hacia el cuello y el escote, dos zonas que también muestran signos de flacidez y pérdida de firmeza.",
        priceFrom: 75000,
        benefits: ["Incluye cuello y escote", "Sin cirugía", "Resultado progresivo"],
      },
      {
        id: "hifu-liposonix-zona-1hs",
        categoryId: "hifu",
        name: "HIFU y Liposonix por zona",
        shortDescription: "Brazos, abdomen, laterales, media pierna, cola, muslo posterior o espalda.",
        description:
          "Sesión de 1 hora de HIFU y Liposonix combinados, aplicable a zonas como brazos, abdomen, laterales, media pierna, cola, muslo posterior o espalda, para reducir grasa localizada y reafirmar la piel.",
        priceFrom: 80000,
        benefits: ["Reduce grasa localizada", "Reafirma la piel", "Sesión de 1 hora por zona"],
      },
      {
        id: "hifu-liposonix-combo-3zonas",
        categoryId: "hifu",
        name: "Combo HIFU y Liposonix por 3 zonas",
        shortDescription: "Facial completo, escote y cuello, y parte interior del brazo.",
        description:
          "Combo integral que trabaja facial completo, escote y cuello, y la parte interior del brazo en una misma sesión extendida.",
        priceFrom: 150000,
        benefits: ["3 zonas en una sesión", "Resultado integral", "Ahorrás vs. servicios por separado"],
      },
      {
        id: "hifu-liposonix-pantalon-montar",
        categoryId: "hifu",
        name: "Combo HIFU y Liposonix pantalón de montar",
        shortDescription: "Cola, cuádriceps, muslo interno y muslo posterior.",
        description:
          "Combo enfocado en la zona de 'pantalón de montar': cola, cuádriceps, muslo interno y muslo posterior, para reducir grasa localizada y mejorar la firmeza.",
        priceFrom: 130000,
        benefits: ["Zona pantalón de montar", "Reduce flacidez localizada", "Sesiones personalizadas"],
      },
      {
        id: "hifu-liposonix-abdominal",
        categoryId: "hifu",
        name: "Combo HIFU y Liposonix abdominal",
        shortDescription: "Abdomen, flancos y espalda baja.",
        description:
          "Combo dirigido a abdomen, flancos y espalda baja, combinando HIFU y Liposonix para reducir grasa localizada y reafirmar la zona media del cuerpo.",
        priceFrom: 140000,
        benefits: ["Abdomen, flancos y espalda baja", "Reduce grasa localizada", "Sin dolor"],
      },
    ],
  },
];
