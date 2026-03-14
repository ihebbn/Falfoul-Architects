export type Project = {
  id: number;
  title: string;
  titleEn: string | null;
  category: string;
  surface: string;
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
    title: "Villa Gammarth",
    titleEn: "Gammarth Villa",
    category: "RESID.",
    surface: "450 m2",
    year: 2023,
    status: "Completed",
    location: "Gammarth, Tunisia",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "A contemporary residence overlooking the Mediterranean, designed around long sightlines, soft natural light, and generous indoor-outdoor transitions.",
    descriptionEn:
      "A contemporary residence overlooking the Mediterranean, designed around long sightlines, soft natural light, and generous indoor-outdoor transitions.",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1600607687931-cebf0046cb20?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
    ],
    distinctions: ["Best Residential Design Tunisia 2023"],
    isFeatured: true,
    createdAt: new Date("2023-09-14T00:00:00Z"),
  },
  {
    id: 2,
    title: "La Tour du Lac",
    titleEn: "Lake Tower",
    category: "COMM/BUREAUTIQUES",
    surface: "12000 m2",
    year: 2024,
    status: "Under Construction",
    location: "Les Berges du Lac, Tunisia",
    client: "TechCorp",
    architects: "FALFOUL Architecture & Partners",
    description:
      "An office tower conceived as a precise urban landmark, pairing an efficient floorplate with a high-performance facade and flexible workspaces.",
    descriptionEn:
      "An office tower conceived as a precise urban landmark, pairing an efficient floorplate with a high-performance facade and flexible workspaces.",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2024-02-08T00:00:00Z"),
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
    title: "Le Pavillon de Verre",
    titleEn: "The Glass Pavilion",
    category: "RESID.",
    surface: "650 m2",
    year: 2022,
    status: "Completed",
    location: "Hammamet, Tunisia",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "A seafront home organized around transparency, shade, and cross-ventilation, with panoramic glazing and carefully framed exterior rooms.",
    descriptionEn:
      "A seafront home organized around transparency, shade, and cross-ventilation, with panoramic glazing and carefully framed exterior rooms.",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
    ],
    distinctions: ["Featured in ArchDaily Tunisia"],
    isFeatured: true,
    createdAt: new Date("2022-11-02T00:00:00Z"),
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
    title: "Hotel Oasis Tozeur",
    titleEn: "Tozeur Oasis Hotel",
    category: "INTERIEURS/DESIGN",
    surface: "4500 m2",
    year: 2023,
    status: "Completed",
    location: "Tozeur, Tunisia",
    client: "Boutique Hotel Group",
    architects: "FALFOUL Architecture",
    description:
      "An interior design project using warm mineral tones, tactile finishes, and spatial sequencing inspired by desert hospitality.",
    descriptionEn:
      "An interior design project using warm mineral tones, tactile finishes, and spatial sequencing inspired by desert hospitality.",
    coverImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    ],
    distinctions: ["Best Hospitality Interior 2023"],
    isFeatured: true,
    createdAt: new Date("2023-07-19T00:00:00Z"),
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
