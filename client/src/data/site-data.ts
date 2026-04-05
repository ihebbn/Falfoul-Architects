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
    surface: "750 m\u00B2",
    landSurface: "750 m\u00B2",
    coveredSurface: "800 m\u00B2",
    year: 2022,
    status: "r\u00E9alis\u00E9e",
    location: "Chatt Meriem, Sousse",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Ce projet illustre parfaitement notre approche moderne et minimaliste de l'architecture. Le projet part d'un bloc simple, d\u00E9licatement creus\u00E9 pour capter la lumi\u00E8re naturelle et ouvrir la maison sur le paysage. De grandes baies vitr\u00E9es et une pergola en marbre cr\u00E9ent un lien direct et fluide entre le salon et l'espace piscine. L'am\u00E9nagement int\u00E9rieur est pratique et clair, s\u00E9parant naturellement les pi\u00E8ces de vie au rez-de-chauss\u00E9e et les chambres \u00E0 l'\u00E9tage.",
    descriptionEn: null,
    coverImage: "/images/casa-marbella/1(1).webp",
    images: [
      "/images/casa-marbella/1(1).webp",
      "/images/casa-marbella/2(1).webp",
      "/images/casa-marbella/3.webp",
      "/images/casa-marbella/4.webp",
      "/images/casa-marbella/5.webp",
      "/images/casa-marbella/6.webp",
      "/images/casa-marbella/axono.webp",
      "/images/casa-marbella/photo 1.webp",
      "/images/casa-marbella/photo 2.webp",
      "/images/casa-marbella/photo 3.webp",
      "/images/casa-marbella/photo 4.webp",
      "/images/casa-marbella/photo 6.webp",
      "/images/casa-marbella/photo 7.webp",
      "/images/casa-marbella/photo 8.webp",
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
    surface: "320 m\u00B2 (R+1)",
    landSurface: "420 m\u00B2",
    coveredSurface: "320 m\u00B2 (R+1)",
    year: 2022,
    status: "\u00C9tudes",
    location: "Kairouan",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Cette villa incarne une vision minimaliste et contemporaine, mariant des volumes cubiques \u00E9pur\u00E9s aux tonalit\u00E9s sable et chaleureuses. Le projet s'articule autour de lignes horizontales fortes, cr\u00E9ant des jeux d'ombres port\u00E9es qui dynamisent les fa\u00E7ades textur\u00E9es. Une piscine \u00E0 lame d'eau et de larges baies vitr\u00E9es assurent une transition fluide entre l'ext\u00E9rieur et les espaces de vie.",
    descriptionEn: null,
    coverImage: "/images/Villa-M/Gemini_Generated_Image_2mt2js2mt2js2mt2.webp",
    images: [
      "/images/Villa-M/RENDU.webp",
      "/images/Villa-M/exte.webp",
      "/images/Villa-M/int.webp",
      "/images/Villa-M/int2.webp",
      "/images/Villa-M/int3.webp",
      "/images/Villa-M/int4.jpg",
      "/images/Villa-M/Gemini_Generated_Image_2mt2js2mt2js2mt2.webp",
      "/images/Villa-M/Gemini_Generated_Image_j6wayoj6wayoj6wa.webp",
      "/images/Villa-M/Gemini_Generated_Image_n0y0o9n0y0o9n0y0.webp",
      "/images/Villa-M/Gemini_Generated_Image_t6omsgt6omsgt6om.webp",
      "/images/Villa-M/Gemini_Generated_Image_ur9igrur9igrur9i.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2022-01-01T00:00:00Z"),
  },
    {
    id: 3,
    title: "Hotel de Kairouan",
    titleEn: null,
    category: "COMM/BUREAUTIQUES",
    surface: "580 m\u00B2 (R+1)",
    coveredSurface: "580 m\u00B2 (R+1)",
    year: 2024,
    status: "Etudes",
    location: "Kairouan",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Le projet de conception de cet h\u00F4tel propose une fusion raffin\u00E9e entre \u00E9l\u00E9gance contemporaine et r\u00E9miniscences de l'architecture classique. \u00C0 travers un jeu subtil de volumes et de mat\u00E9riaux \u2014 majestueuses arcades rev\u00EAtues de pierre claire, vastes baies vitr\u00E9es et fins d\u00E9tails m\u00E9talliques \u2014 l'\u00E9difice s'impose avec prestance et luminosit\u00E9. \u00C0 l'int\u00E9rieur, le grand hall de r\u00E9ception en double hauteur devient un espace magistral. Sous l'\u00E9clat d'un lustre sculptural contemporain, l'alliance d'un sol en marbre aux motifs g\u00E9om\u00E9triques et de boiseries chaleureuses cr\u00E9e une atmosph\u00E8re sophistiqu\u00E9e, transformant cet \u00E9tablissement en un lieu d'exception, \u00E0 la fois imposant et infiniment accueillant.",
    descriptionEn: null,
    coverImage: "/images/Hotel kairouan/rendu 1.webp",
    images: [
      "/images/Hotel kairouan/rendu 1.webp",
      "/images/Hotel kairouan/rendu 2.webp",
      "/images/Hotel kairouan/rendu 4.webp",
      "/images/Hotel kairouan/rendu 5.webp",
      "/images/Hotel kairouan/rendu 6.webp",
      "/images/Hotel kairouan/rendu3.webp",
    ],
    distinctions: [],
    isFeatured: false,
    createdAt: new Date("2024-01-01T00:00:00Z"),
  },
    {
    id: 4,
    title: "Immeuble multifonctionnel Rabat",
    titleEn: null,
    category: "COMPETITIONS",
    surface: "14900 m\u00B2 (Sous-sol + R+3)",
    landSurface: "5000 m\u00B2",
    coveredSurface: "14900 m\u00B2 (Sous-sol + R+3)",
    year: 2018,
    status: "Non class\u00E9",
    location: "Rabat, Maroc",
    client: "Non communiqu\u00E9",
    architects: "FALFOUL Architecture",
    description:
      "Ce complexe urbain mixte propose une alliance \u00E9l\u00E9gante entre densit\u00E9 contemporaine et intelligence bioclimatique. \u00C0 travers un jeu rythm\u00E9 de fa\u00E7ades \u2014 brise-soleil modulables, moucharabiehs revisit\u00E9s et murs v\u00E9g\u00E9talis\u00E9s \u2014 les vastes patios int\u00E9rieurs s'\u00E9rigent en v\u00E9ritables oasis de fra\u00EEcheur. Baign\u00E9e de lumi\u00E8re naturelle, l'int\u00E9gration ing\u00E9nieuse des flux d'air et de la nature cr\u00E9e une atmosph\u00E8re sereine, transformant ce grand ensemble en un lieu de vie d'exception, \u00E0 la fois connect\u00E9 \u00E0 la ville et intimement prot\u00E9g\u00E9.",
    descriptionEn: null,
    coverImage: "/images/Concours Rabat/perspective generale.webp",
    images: [
      "/images/Concours Rabat/perspective generale.webp",
      "/images/Concours Rabat/perspective aerienne.webp",
      "/images/Concours Rabat/pers1.webp",
      "/images/Concours Rabat/pers2.webp",
      "/images/Concours Rabat/pers3.webp",
      "/images/Concours Rabat/pers4.webp",
      "/images/Concours Rabat/pers5.webp",
      "/images/Concours Rabat/concept.webp",
      "/images/Concours Rabat/details technique.webp",
      "/images/Concours Rabat/plan masse.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2018-01-01T00:00:00Z"),
  },
    {
    id: 5,
    title: "Villa HZ",
    titleEn: null,
    category: "RESID.",
    surface: "560 m\u00B2 (R+1)",
    landSurface: "450 m\u00B2",
    coveredSurface: "560 m\u00B2 (R+1)",
    year: 2018,
    status: "\u00C9tudes",
    location: "Kairouan",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Cette villa incarne une vision contemporaine et \u00E9clectique, mariant des volumes g\u00E9n\u00E9reux \u00E0 double hauteur \u00E0 des tonalit\u00E9s terreuses et dor\u00E9es, textur\u00E9es et chaleureuses. Le projet s'articule autour de lignes fortes et structurantes, o\u00F9 l'\u00E9clairage int\u00E9gr\u00E9 soign\u00E9 met en valeur les finitions de bois et les \u0153uvres d'art murales. Une piscine int\u00E9gr\u00E9e \u00E0 l'architecture, visible \u00E0 travers de larges baies vitr\u00E9es, assure une transition fluide entre l'espace de vie et l'ext\u00E9rieur. L'int\u00E9rieur sur deux niveaux s'organise autour d'un escalier structurant monumental, privil\u00E9giant la transparence d'une mezzanine en verre et la noblesse des mat\u00E9riaux.",
    descriptionEn: null,
    coverImage: "/images/Villa-H/image 1.webp",
    images: [
      "/images/Villa-H/facade-final.webp",
      "/images/Villa-H/2.webp",
      "/images/Villa-H/awono final.webp",
      "/images/Villa-H/image 1.webp",
      "/images/Villa-H/image 2.webp",
      "/images/Villa-H/image 3.webp",
      "/images/Villa-H/image 4.webp",
      "/images/Villa-H/image 5.webp",
      "/images/Villa-H/image 6.webp",
      "/images/Villa-H/image 7.webp",
      "/images/Villa-H/image 8.webp",
      "/images/Villa-H/perse 1.webp",
      "/images/Villa-H/perse 2.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2018-01-01T00:00:00Z"),
  },
      {
    id: 6,
    title: "La mosquee Sidi Guith",
    titleEn: null,
    category: "INTERIEURS/DESIGN",
    surface: "2240 m2",
    coveredSurface: "2240 m2",
    year: 2018,
    status: "Realisee",
    location: "Kairouan",
    client: "Mosquee Sidi Guith",
    architects: "FALFOUL Architecture",
    description:
      "Pour ce projet, notre volonte a ete de moderniser l'interieur de la Mosquee Sidi Guith tout en respectant son identite et sa vocation spirituelle. L'intervention s'est concentree sur la recherche de luminosite et l'ouverture des volumes. La mezzanine, subtilement integree et allegee par des garde-corps transparents, vient structurer l'espace de priere sans entraver la diffusion de la lumiere. En optant pour des tons clairs et des lignes epurees, nous avons cree une ambiance apaisante qui met naturellement en valeur la beaute des details traditionnels, comme la calligraphie et les grands lustres. Le resultat est un lieu de culte harmonieux, aere et accueillant, pense avant tout pour le confort et le recueillement des fideles.",
    descriptionEn: null,
    coverImage: "/images/mosquee-sidi-guith/1.webp",
    images: [
      "/images/mosquee-sidi-guith/1.webp",
      "/images/mosquee-sidi-guith/2.webp",
      "/images/mosquee-sidi-guith/3.webp",
      "/images/mosquee-sidi-guith/4.webp",
      "/images/mosquee-sidi-guith/5.webp",
      "/images/mosquee-sidi-guith/6.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2018-01-01T00:00:00Z"),
  },
    {
    id: 7,
    title: "Dar Cherif",
    titleEn: null,
    category: "INTERIEURS/DESIGN",
    surface: "580 m\u00B2",
    coveredSurface: "580 m\u00B2",
    year: 2018,
    status: "Etudes",
    location: "Kairouan",
    client: "Dar Cherif",
    architects: "FALFOUL Architecture",
    description:
      "Le projet de r\u00E9am\u00E9nagement de la maison d\u2019h\u00F4tes Dar Cherif propose une fusion raffin\u00E9e entre tradition tunisienne et modernit\u00E9 lumineuse. \u00C0 travers un jeu subtil de textures \u2014 zelliges color\u00E9s, arches en pierre et moucharabiehs bleus \u2014 le patio central devient un espace de r\u00E9ception majestueux. Sous une verri\u00E8re contemporaine, l\u2019int\u00E9gration de cascades de lumi\u00E8res et de voilages a\u00E9riens cr\u00E9e une atmosph\u00E8re f\u00E9erique, transformant cette demeure historique en un lieu d'exception, \u00E0 la fois intime et prestigieux.",
    descriptionEn: null,
    coverImage: "/images/dar cherif/1.webp",
    images: [
      "/images/dar cherif/1.webp",
      "/images/dar cherif/3.webp",
      "/images/dar cherif/4.webp",
      "/images/dar cherif/6.webp",
      "/images/dar cherif/7.webp",
      "/images/dar cherif/9.webp",
      "/images/dar cherif/ff.webp",
      "/images/dar cherif/Gemini_Generated_Image_ynkfi7ynkfi7ynkf.webp",
      "/images/dar cherif/rendu facade 01.webp",
      "/images/dar cherif/rendu ruelle 02.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2018-01-01T00:00:00Z"),
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
    surface: "170 m\u00B2",
    landSurface: "410 m\u00B2",
    coveredSurface: "170 m\u00B2",
    year: 2022,
    status: "\u00C9tudes",
    location: "Chatt Meriem, Sousse",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Cette villa illustre parfaitement notre r\u00E9interpr\u00E9tation moderne et \u00E9pur\u00E9e de l'architecture m\u00E9diterran\u00E9enne traditionnelle. Le projet part d'un volume blanc immacul\u00E9, d\u00E9licatement \u00E9vid\u00E9 pour former un patio intimiste et capter la lumi\u00E8re naturelle. De grandes arcades et des baies vitr\u00E9es cr\u00E9ent un lien direct et fluide entre les espaces de vie et l'espace piscine. L'am\u00E9nagement int\u00E9rieur est harmonieux et de plain-pied, s\u00E9parant naturellement les pi\u00E8ces de r\u00E9ception sous vo\u00FBte et les chambres situ\u00E9es plus en retrait.",
    descriptionEn: null,
    coverImage: "/images/Villa-H-F/2.webp",
    images: [
      "/images/Villa-H-F/2.webp",
      "/images/Villa-H-F/3.webp",
      "/images/Villa-H-F/4.webp",
      "/images/Villa-H-F/5.webp",
      "/images/Villa-H-F/6.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2022-01-01T00:00:00Z"),
  },
    {
    id: 10,
    title: "G\u00EEte rurale",
    titleEn: null,
    category: "RESID.",
    surface: "100 m\u00B2",
    landSurface: "750 m\u00B2",
    coveredSurface: "100 m\u00B2",
    year: 2026,
    status: "Etudes",
    location: "Oueslatia, Kairouan",
    client: "Private",
    architects: "FALFOUL Architecture",
    description:
      "Ce g\u00EEte rural propose une immersion authentique o\u00F9 l'architecture vernaculaire dialogue intimement avec le paysage naturel. \u00C0 travers une composition organique \u2014 lodges en pierre et bois, toitures traditionnelles et pavillons largement vitr\u00E9s \u2014 les espaces de vie s'ouvrent majestueusement sur l'oliveraie environnante. Articul\u00E9e autour de cheminements fluides et d'un foyer ext\u00E9rieur convivial, cette conception efface les fronti\u00E8res entre int\u00E9rieur et ext\u00E9rieur, transformant ce domaine en un refuge paisible, profond\u00E9ment ancr\u00E9 dans son terroir.",
    descriptionEn: null,
    coverImage: "/images/gite rurale/Gemini_Generated_Image_8lds7d8lds7d8lds.webp",
    images: [
      "/images/gite rurale/Gemini_Generated_Image_8lds7d8lds7d8lds.webp",
      "/images/gite rurale/Gemini_Generated_Image_i13bg9i13bg9i13b.webp",
      "/images/gite rurale/Gemini_Generated_Image_jjg7lkjjg7lkjjg7.webp",
      "/images/gite rurale/Gemini_Generated_Image_pthyspthyspthysp.webp",
      "/images/gite rurale/Gemini_Generated_Image_rkndhlrkndhlrknd.webp",
      "/images/gite rurale/plan masse.webp",
    ],
    distinctions: [],
    isFeatured: false,
    createdAt: new Date("2026-01-01T00:00:00Z"),
  },
    {
    id: 11,
    title: "Si\u00E8ge de la Direction R\u00E9gionale de l\u2019\u00C9quipement d'Errachidia",
    titleEn: null,
    category: "COMPETITIONS",
    surface: "6350 m\u00B2 (R+1)",
    coveredSurface: "6350 m\u00B2 (R+1)",
    year: 2018,
    status: "3\u00E8me prix",
    location: "Errachidia, Maroc",
    client: "Direction R\u00E9gionale de l\u2019\u00C9quipement d'Errachidia",
    architects: "FALFOUL Architecture",
    description:
      "Situ\u00E9 \u00E0 l'entr\u00E9e nord-ouest d'Errachidia, ce projet administratif de plus de 6 300 m\u00B2 propose une r\u00E9interpr\u00E9tation contemporaine de l'architecture vernaculaire locale. Le b\u00E2timent, d\u00E9velopp\u00E9 sur deux niveaux (R+1), se fragmente en quatre volumes distincts qui s'articulent autour de patios centraux. V\u00E9ritables poumons verts, ces espaces int\u00E8grent v\u00E9g\u00E9tation et fontaines pour cr\u00E9er un microclimat favorable, garantissant un rafra\u00EEchissement passif, une ventilation optimale et un apport g\u00E9n\u00E9reux en lumi\u00E8re naturelle.\nL'enveloppe ext\u00E9rieure, soulign\u00E9e par un enduit ocre caract\u00E9ristique de la r\u00E9gion, ancre profond\u00E9ment le projet dans son paysage tout en assurant une haute performance thermique. Cette conception illustre la volont\u00E9 de l'agence FALFOUL Architecture de proposer une r\u00E9ponse architecturale engag\u00E9e : le b\u00E2timent est \u00E0 la fois \u00E9cologiquement responsable (int\u00E9gration photovolta\u00EFque, r\u00E9cup\u00E9ration des eaux pluviales) et totalement inclusif, avec une accessibilit\u00E9 PMR compl\u00E8te et un parcours sensoriel novateur pens\u00E9 pour les personnes malvoyantes.",
    descriptionEn: null,
    coverImage: "/images/concours errachideia/rendu 1.webp",
    images: [
      "/images/concours errachideia/rendu 1.webp",
      "/images/concours errachideia/rendu 2.webp",
      "/images/concours errachideia/rendu 3.webp",
      "/images/concours errachideia/rendu 4.webp",
      "/images/concours errachideia/rendu 7.webp",
      "/images/concours errachideia/rendu 8.webp",
      "/images/concours errachideia/rendu 9.webp",
      "/images/concours errachideia/rendu 10.webp",
      "/images/concours errachideia/rendu 11.webp",
      "/images/concours errachideia/rendu 12.webp",
      "/images/concours errachideia/rendu 13.webp",
      "/images/concours errachideia/rendu5.webp",
      "/images/concours errachideia/1.webp",
      "/images/concours errachideia/2.webp",
      "/images/concours errachideia/3.webp",
      "/images/concours errachideia/4.webp",
      "/images/concours errachideia/5.webp",
      "/images/concours errachideia/6.webp",
      "/images/concours errachideia/7.webp",
      "/images/concours errachideia/parti.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2018-01-01T00:00:00Z"),
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

















