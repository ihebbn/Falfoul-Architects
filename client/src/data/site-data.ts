export type Project = {
  id: number;
  title: string;
  titleEn: string | null;
  category: string;
  surface: string;
  landSurface?: string | null;
  coveredSurface?: string | null;
  year: number | null;
  status: string | null;
  location: string | null;
  client: string | null;
  architects: string | null;
  description: string;
  descriptionEn: string | null;
  coverImage: string;
  images: string[];
  distinctions: string[];
  isFeatured: boolean;
  createdAt: Date;
};

export type Event = {
  id: number;
  title: string;
  titleEn: string | null;
  type: string;
  description: string;
  descriptionEn: string | null;
  date: Date;
  externalLink: string | null;
  createdAt: Date;
};

export const PROJECT_CATEGORIES = [
  "TOUS",
  "COMM/BUREAUTIQUES",
  "MULTIRESID.",
  "RESID.",
  "COMPETITIONS",
  "INTERIEURS/DESIGN",
] as const;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Casa Marbella",
    titleEn: "Chatt Meriem, Sousse",
    category: "RESID.",
    surface: "750 m²",
    landSurface: "750 m²",
    coveredSurface: "800 m²",
    year: 2022,
    status: "réalisée",
    location: "Chatt Meriem, Sousse",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Ce projet illustre parfaitement notre approche moderne et minimaliste de l'architecture. Le projet part d'un bloc simple, délicatement creusé pour capter la lumière naturelle et ouvrir la maison sur le paysage. De grandes baies vitrées et une pergola en marbre créent un lien direct et fluide entre le salon et l'espace piscine. L'aménagement intérieur est pratique et clair, séparant naturellement les pièces de vie au rez-de-chaussée et les chambres à l'étage.",
    descriptionEn: null,
    coverImage: "/images/casa-marbella/1(1).jpg",
    images: [
      "/images/casa-marbella/1(1).jpg",
      "/images/casa-marbella/2(1).jpg",
      "/images/casa-marbella/3.jpg",
      "/images/casa-marbella/4.jpg",
      "/images/casa-marbella/5.jpg",
      "/images/casa-marbella/6.jpg",
      "/images/casa-marbella/axono.png",
      "/images/casa-marbella/Gemini_Generated_Image_tndznftndznftndz.png",
      "/images/casa-marbella/photo 1.png",
      "/images/casa-marbella/photo 2.png",
      "/images/casa-marbella/photo 3.png",
      "/images/casa-marbella/photo 4.png",
      "/images/casa-marbella/photo 6.png",
      "/images/casa-marbella/photo 7.png",
      "/images/casa-marbella/photo 8.png",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2022-01-01T00:00:00Z"),
  },
  {
    id: 2,
    title: "Villa M",
    titleEn: null,
    category: "RESID.",
    surface: "320 m² (R+1)",
    landSurface: "420 m²",
    coveredSurface: "320 m² (R+1)",
    year: 2022,
    status: "Études",
    location: "Kairouan",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Cette villa incarne une vision minimaliste et contemporaine, mariant des volumes cubiques épurés aux tonalités sable et chaleureuses. Le projet s'articule autour de lignes horizontales fortes, créant des jeux d'ombres portées qui dynamisent les façades texturées. Une piscine à lame d'eau et de larges baies vitrées assurent une transition fluide entre l'extérieur et les espaces de vie.",
    descriptionEn: null,
    coverImage: "/images/Villa-M/Gemini_Generated_Image_2mt2js2mt2js2mt2.png",
    images: [
      "/images/Villa-M/RENDU.jpg",
      "/images/Villa-M/exte.jpg",
      "/images/Villa-M/int.jpg",
      "/images/Villa-M/int2.jpg",
      "/images/Villa-M/int3.jpg",
      "/images/Villa-M/int4.jpg",
      "/images/Villa-M/Gemini_Generated_Image_2mt2js2mt2js2mt2.png",
      "/images/Villa-M/Gemini_Generated_Image_j6wayoj6wayoj6wa.png",
      "/images/Villa-M/Gemini_Generated_Image_n0y0o9n0y0o9n0y0.png",
      "/images/Villa-M/Gemini_Generated_Image_t6omsgt6omsgt6om.png",
      "/images/Villa-M/Gemini_Generated_Image_ur9igrur9igrur9i.png",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2022-01-01T00:00:00Z"),
  },
  {
    id: 3,
    title: "Musee d'Art Contemporain",
    titleEn: "Museum of Contemporary Art",
    category: "COMPETITIONS",
    surface: "5500 m2",
    year: 2022,
    status: "Concept",
    location: "Carthage, Tunisia",
    client: "Ministry of Culture",
    architects: "FALFOUL Architecture",
    description:
      "A competition proposal for a cultural venue shaped by courtyards, filtered daylight, and a respectful dialogue with its archaeological context.",
    descriptionEn:
      "A competition proposal for a cultural venue shaped by courtyards, filtered daylight, and a respectful dialogue with its archaeological context.",
    coverImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1200",
    ],
    distinctions: ["1st Prize Cultural Center"],
    isFeatured: false,
    createdAt: new Date("2022-06-10T00:00:00Z"),
  },
  {
    id: 4,
    title: "Villa Carthage",
    titleEn: "Carthage Villa",
    category: "RESID.",
    surface: "420 m2",
    year: 2024,
    status: "In Progress",
    location: "Tunis, Tunisia",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "A private villa that merges contemporary detailing with calm courtyards, limestone textures, and a restrained Mediterranean palette.",
    descriptionEn:
      "A private villa that merges contemporary detailing with calm courtyards, limestone textures, and a restrained Mediterranean palette.",
    coverImage: "/images/villa1.jpg",
    images: ["/images/villa1.jpg"],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2024-05-21T00:00:00Z"),
  },
  {
    id: 5,
    title: "Villa HZ",
    titleEn: null,
    category: "RESID.",
    surface: "560 m² (R+1)",
    landSurface: "450 m²",
    coveredSurface: "560 m² (R+1)",
    year: 2018,
    status: "Études",
    location: "Kairouan",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Cette villa incarne une vision contemporaine et éclectique, mariant des volumes généreux à double hauteur à des tonalités terreuses et dorées, texturées et chaleureuses. Le projet s'articule autour de lignes fortes et structurantes, où l'éclairage intégré soigné met en valeur les finitions de bois et les œuvres d'art murales. Une piscine intégrée à l'architecture, visible à travers de larges baies vitrées, assure une transition fluide entre l'espace de vie et l'extérieur. L'intérieur sur deux niveaux s'organise autour d'un escalier structurant monumental, privilégiant la transparence d'une mezzanine en verre et la noblesse des matériaux.",
    descriptionEn: null,
    coverImage: "/images/Villa-H/image 1.png",
    images: [
      "/images/Villa-H/façade final.jpg",
      "/images/Villa-H/2.jpg",
      "/images/Villa-H/awono final.jpg",
      "/images/Villa-H/image 1.png",
      "/images/Villa-H/image 2.png",
      "/images/Villa-H/image 3.png",
      "/images/Villa-H/image 4.png",
      "/images/Villa-H/image 5.png",
      "/images/Villa-H/image 6.png",
      "/images/Villa-H/image 7.png",
      "/images/Villa-H/image 8.png",
      "/images/Villa-H/perse 1.jpg",
      "/images/Villa-H/perse 2.jpg",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2018-01-01T00:00:00Z"),
  },
  {
    id: 6,
    title: "Residences Ecologiques",
    titleEn: "Eco Residences",
    category: "MULTIRESID.",
    surface: "8500 m2",
    year: 2023,
    status: "Completed",
    location: "Sousse, Tunisia",
    client: "EcoDev",
    architects: "FALFOUL Architecture",
    description:
      "A multi-residential development structured around shared gardens, passive shading strategies, and compact circulation for community life.",
    descriptionEn:
      "A multi-residential development structured around shared gardens, passive shading strategies, and compact circulation for community life.",
    coverImage:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1200",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2023-03-16T00:00:00Z"),
  },
  {
    id: 7,
    title: "Horizon Tower Lac 3",
    titleEn: "Horizon Tower Lac 3",
    category: "COMM/BUREAUTIQUES",
    surface: "45000 m2",
    year: 2025,
    status: "Concept",
    location: "Tunis, Tunisia",
    client: "Global Tech",
    architects: "FALFOUL Architecture",
    description:
      "A high-rise concept driven by a faceted envelope, adaptable workplace modules, and integrated energy-reduction strategies.",
    descriptionEn:
      "A high-rise concept driven by a faceted envelope, adaptable workplace modules, and integrated energy-reduction strategies.",
    coverImage:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1200",
    ],
    distinctions: ["LEED Platinum Certified Focus"],
    isFeatured: true,
    createdAt: new Date("2025-01-12T00:00:00Z"),
  },
  {
    id: 8,
    title: "Djerba Minimaliste",
    titleEn: "Djerba Minimal",
    category: "RESID.",
    surface: "380 m2",
    year: 2024,
    status: "In Progress",
    location: "Djerba, Tunisia",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "A minimalist residence balancing monolithic forms, protected patios, and local material references tailored to Djerba's climate.",
    descriptionEn:
      "A minimalist residence balancing monolithic forms, protected patios, and local material references tailored to Djerba's climate.",
    coverImage:
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=80&w=1600",
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2024-08-01T00:00:00Z"),
  },
  {
    id: 9,
    title: "Villa Mykonos",
    titleEn: null,
    category: "RESID.",
    surface: "170 m²",
    landSurface: "410 m²",
    coveredSurface: "170 m²",
    year: 2022,
    status: "Études",
    location: "Chatt Meriem, Sousse",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Cette villa illustre parfaitement notre réinterprétation moderne et épurée de l'architecture méditerranéenne traditionnelle. Le projet part d'un volume blanc immaculé, délicatement évidé pour former un patio intimiste et capter la lumière naturelle. De grandes arcades et des baies vitrées créent un lien direct et fluide entre les espaces de vie et l'espace piscine. L'aménagement intérieur est harmonieux et de plain-pied, séparant naturellement les pièces de réception sous voûte et les chambres situées plus en retrait.",
    descriptionEn: null,
    coverImage: "/images/Villa-H-F/2.png",
    images: [
      "/images/Villa-H-F/2.png",
      "/images/Villa-H-F/3.png",
      "/images/Villa-H-F/4.png",
      "/images/Villa-H-F/5.png",
      "/images/Villa-H-F/6.jpeg",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2022-01-01T00:00:00Z"),
  },
  {
    id: 10,
    title: "Centre Culturel de la Medina",
    titleEn: "Medina Cultural Center",
    category: "COMPETITIONS",
    surface: "12000 m2",
    year: 2024,
    status: "Concept",
    location: "Tunis, Tunisia",
    client: "City of Tunis",
    architects: "FALFOUL Architecture",
    description:
      "A competition entry for a civic cultural hub that reinterprets shaded public passages, courtyards, and porous urban edges.",
    descriptionEn:
      "A competition entry for a civic cultural hub that reinterprets shaded public passages, courtyards, and porous urban edges.",
    coverImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    ],
    distinctions: ["Shortlisted"],
    isFeatured: false,
    createdAt: new Date("2024-04-03T00:00:00Z"),
  },
  {
    id: 11,
    title: "Complexe La Marsa",
    titleEn: "La Marsa Complex",
    category: "MULTIRESID.",
    surface: "6500 m2",
    year: 2025,
    status: "In Progress",
    location: "La Marsa, Tunisia",
    client: "Marsa Real Estate",
    architects: "FALFOUL Architecture",
    description:
      "A premium housing complex composed of stepped terraces, sea-oriented living rooms, and shared social amenities.",
    descriptionEn:
      "A premium housing complex composed of stepped terraces, sea-oriented living rooms, and shared social amenities.",
    coverImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2025-02-07T00:00:00Z"),
  },
  {
    id: 12,
    title: "Sfax Business Hub",
    titleEn: "Sfax Business Hub",
    category: "COMM/BUREAUTIQUES",
    surface: "22000 m2",
    year: 2023,
    status: "Completed",
    location: "Sfax, Tunisia",
    client: "Sfax Commerce Group",
    architects: "FALFOUL Architecture",
    description:
      "A business campus with robust industrial character, efficient planning, and adaptable work environments for growing teams.",
    descriptionEn:
      "A business campus with robust industrial character, efficient planning, and adaptable work environments for growing teams.",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000",
    ],
    distinctions: ["Commercial Project of the Year Tunisia"],
    isFeatured: true,
    createdAt: new Date("2023-10-05T00:00:00Z"),
  },
];

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Exposition: L'Architecture de Demain",
    titleEn: "Exhibition: Architecture of Tomorrow",
    type: "Exhibition",
    description:
      "A curated presentation of upcoming residential and cultural concepts exploring material innovation and climate-responsive design.",
    descriptionEn:
      "A curated presentation of upcoming residential and cultural concepts exploring material innovation and climate-responsive design.",
    date: new Date("2026-04-18T18:00:00Z"),
    externalLink: "https://example.com/exhibition",
    createdAt: new Date("2026-02-15T00:00:00Z"),
  },
  {
    id: 2,
    title: "Conference: Design Durable",
    titleEn: "Conference: Sustainable Design",
    type: "Conference",
    description:
      "A public talk on durable material systems, passive cooling, and the future of low-impact architecture in North Africa.",
    descriptionEn:
      "A public talk on durable material systems, passive cooling, and the future of low-impact architecture in North Africa.",
    date: new Date("2026-06-20T09:30:00Z"),
    externalLink: "https://example.com/conference",
    createdAt: new Date("2026-03-01T00:00:00Z"),
  },
];

export function getProjectById(id: number) {
  return PROJECTS.find((project) => project.id === id) ?? null;
}





