/**
 * SYRESUR S.L. — Model Layer
 * Material: Typed data entities and static catalogue repository.
 * Responsibility: Pure data definitions, zero UI logic.
 */

export type MaterialCategory = 'madera' | 'construccion' | 'bano';

export interface Material {
  id: string;
  category: MaterialCategory;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  specLabel: string;
  specValue: string;
}

// ─── Static Catalogue Repository ─────────────────────────────────────────────

export const MATERIALS: Material[] = [
  // --- Madera ---
  {
    id: 'madera-cedro',
    category: 'madera',
    name: 'Cedro Canadiense',
    shortDescription: 'Madera noble ultraligera con aceites naturales protectores de humedad e insectos. Ideal para fachadas.',
    fullDescription: 'Madera noble de alta resistencia a la intemperie y excelentes cualidades acústicas y térmicas. Ideal para revestimientos de fachadas de lujo, saunas y techos exteriores.',
    imageUrl: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Densidad',
    specValue: '380 kg/m³',
  },
  {
    id: 'madera-roble',
    category: 'madera',
    name: 'Roble Estructural',
    shortDescription: 'Madera dura de grano cerrado con excelente capacidad portante. Viga maciza para obras monumentales.',
    fullDescription: 'El estándar de oro para construcciones macizas y vigas de carga expuestas. Ofrece durabilidad centenaria y un grano estético inigualable para proyectos residenciales premium.',
    imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Resistencia',
    specValue: 'D40 (Alta)',
  },
  {
    id: 'madera-pino',
    category: 'madera',
    name: 'Pino Autoclave IV',
    shortDescription: 'Madera tratada para exteriores, con gran protección biológica para terrazas, tarimas y pérgolas.',
    fullDescription: 'Madera tratada en autoclave para máxima inmunidad a la humedad e insectos. Solución óptima para pérgolas exteriores, tarimas urbanas y estructuras secundarias.',
    imageUrl: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Tratamiento',
    specValue: 'Clase de Uso 4',
  },

  // --- Construcción ---
  {
    id: 'construccion-pizarra',
    category: 'construccion',
    name: 'Pizarra Multicapa',
    shortDescription: 'Pizarra natural impermeable cortada con precisión milimétrica para cubiertas vanguardistas.',
    fullDescription: 'Pizarra de canteras seleccionadas cortada a mano, con nula absorción de agua. El recubrimiento definitivo para cubiertas y solados exteriores de alto standing.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Absorción',
    specValue: '< 0.3%',
  },
  {
    id: 'construccion-piedra',
    category: 'construccion',
    name: 'Piedra Caliza Fina',
    shortDescription: 'Piedra sedimentaria texturizada para revestimientos elegantes de fachadas ventiladas eficientes.',
    fullDescription: 'Piedra de poro cerrado idónea para fachadas ventiladas y pavimentos continuos. Aporta una sobria elegancia monolítica y una inercia térmica excepcional.',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Conductividad',
    specValue: '1.8 W/m·K',
  },
  {
    id: 'construccion-acero',
    category: 'construccion',
    name: 'Acero Corten',
    shortDescription: 'Perfiles de acero de alta aleación con pátina oxidada protectora orgánica auto-regenerante.',
    fullDescription: 'Acero autoprotegido mediante oxidación controlada. Combina la rigidez mecánica industrial con una pátina orgánica rojiza altamente valorada en arquitectura contemporánea.',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Espesor',
    specValue: '2mm - 8mm',
  },

  // --- Baño ---
  {
    id: 'bano-griferia',
    category: 'bano',
    name: 'Grifería Latón Cepillado',
    shortDescription: 'Grifos de diseño contemporáneo en acabado latón satinado antihuellas con cartuchos ecológicos.',
    fullDescription: 'Diseño minimalista con aireador ecológico de ultra-bajo consumo. Latón cepillado a mano con tratamiento antihuellas que desarrolla una pátina noble con el tiempo.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Acabado',
    specValue: 'Latón Cepillado',
  },
  {
    id: 'bano-lavabo',
    category: 'bano',
    name: 'Lavabo Monolítico Basalto',
    shortDescription: 'Tallado a mano en piedra volcánica maciza, combinando textura exterior salvaje con interior pulido.',
    fullDescription: 'Tallado a partir de un único bloque de basalto volcánico oscuro. Su superficie interior pulida contrasta hermosamente con los cantos exteriores rústicos.',
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Material',
    specValue: 'Basalto Pulido',
  },
  {
    id: 'bano-toallero',
    category: 'bano',
    name: 'Toallero Negro Radiante',
    shortDescription: 'Estructura calefactora minimalista de acero al carbono en negro mate con temporizador.',
    fullDescription: 'Estructura tubular con control de temperatura digital integrado. Aporta confort térmico y secado rápido de toallas con un acabado negro mate industrial.',
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Potencia',
    specValue: '450W / Digital',
  },
  {
    id: 'bano-ducha',
    category: 'bano',
    name: 'Rociador de Ducha Lluvia',
    shortDescription: 'Cabezal empotrado a techo de gran caudal laminar y sistema antical de silicona activa.',
    fullDescription: 'Sistema de ducha empotrado en techo con caída laminar de agua enriquecida con aire para un masaje relajante y un consumo hídrico optimizado.',
    imageUrl: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=600&q=80',
    specLabel: 'Medidas',
    specValue: '40cm x 40cm',
  },
];
