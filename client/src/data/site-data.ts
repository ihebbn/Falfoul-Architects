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
  "Concours et batiments civils",
  "Divers",
  "industriel",
  "Residentiel bureautique",
  "touristique",
  "Villa",
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
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775756932/1_1_unuj5a.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775756932/1_1_unuj5a.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775756951/2_1_l2pjmq.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775756966/3_v1y9d9.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775757079/4_uo5twn.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775757079/5_h1dxvu.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775757082/axono_r94784.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775757082/photo_1_n1vyl3.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775757082/photo_2_r1e75w.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775757083/photo_6_bvuvyj.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775757082/photo_4_gb4qzn.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775757567/photo_3_khrykn.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775757568/photo_4_jujmue.webp",
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
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566546/Gemini_Generated_Image_2mt2js2mt2js2mt2_p0hvoy.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566546/RENDU_owm92j.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566547/exte_uhj6p7.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566545/int_phzxga.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566545/int2_eyxqlt.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566545/int3_oi6agu.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566545/int4_eczc0q.jpg",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566546/Gemini_Generated_Image_2mt2js2mt2js2mt2_p0hvoy.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566546/Gemini_Generated_Image_j6wayoj6wayoj6wa_belqml.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566544/Gemini_Generated_Image_n0y0o9n0y0o9n0y0_qy31mh.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566544/Gemini_Generated_Image_t6omsgt6omsgt6om_daoegp.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566544/Gemini_Generated_Image_ur9igrur9igrur9i_rxvwam.webp",
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
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566909/rendu_1_czeev5.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566909/rendu_1_czeev5.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566903/rendu_2_z3e573.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566903/rendu_4_fg8bjx.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566904/rendu_5_lbkxp2.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566904/rendu_6_zhlh6r.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566903/rendu3_nc0upx.webp",
    ],
    distinctions: [],
    isFeatured: false,
    createdAt: new Date("2024-01-01T00:00:00Z"),
  },
    {
    id: 4,
    title: "Immeuble multifonctionnel Rabat",
    titleEn: null,
    category: "Concours et batiments civils",
    surface: "14900 m\u00B2 (Sous-sol + R+3)",
    landSurface: "5000 m\u00B2",
    coveredSurface: "14900 m\u00B2 (Sous-sol + R+3)",
    year: 2018,
    status: "Non class\u00E9",
    location: "Rabat, Maroc",
    client: "Non communiqu\u00E9",
    architects: "FALFOUL Architecture",
    description:
      "Le concept architectural de l'Immeuble Multifonctionnel Rabat repose sur une d\u00E9marche bioclimatique rigoureuse, mat\u00E9rialis\u00E9e par une structure lin\u00E9aire contemporaine parfaitement int\u00E9gr\u00E9e \u00E0 son tissu urbain.\n\nImplantation et Morphologie Urbaine\nLe projet tire parti des contraintes r\u00E9glementaires et environnementales du terrain pour offrir un \u00EElot a\u00E9r\u00E9 et dynamique. Le volume principal est sculpt\u00E9 par une succession de patios int\u00E9rieurs v\u00E9g\u00E9talis\u00E9s qui garantissent un ensoleillement optimal et une excellente a\u00E9ration naturelle des unit\u00E9s d'habitation. L'\u00E9difice respecte un important retrait paysager par rapport aux voies majeures, tout en s'ouvrant sur la ville \u00E0 travers un rez-de-chauss\u00E9e commercial continu abrit\u00E9 sous de larges porte-\u00E0-faux. Les cours int\u00E9rieures abritent des puits de lumi\u00E8re pyramidaux qui connectent visuellement et thermiquement les espaces de stationnement en sous-sol aux jardins de surface.\n\nFa\u00E7ades et Dispositifs Techniques\nL'enveloppe ext\u00E9rieure exprime une modernit\u00E9 sobre, rythm\u00E9e par des solutions techniques int\u00E9gr\u00E9es. Un syst\u00E8me de brise-soleil sur rails m\u00E9talliques int\u00E8gre des bacs \u00E0 fleurs et des plantes grimpantes persistantes, prot\u00E9geant la fa\u00E7ade sud du rayonnement d'\u00E9t\u00E9 tout en att\u00E9nuant l'impact des vents dominants du nord-ouest. Les parois alternent entre des surfaces enduites claires, de grands panneaux de verre pour les vitrines commerciales et de d\u00E9licats claustras g\u00E9om\u00E9triques inspir\u00E9s des moucharabiehs traditionnels. Les derniers niveaux se d\u00E9tachent par des attiques en retrait, soulign\u00E9s par de longues jardini\u00E8res suspendues qui couronnent l'\u00E9difice d'une frise v\u00E9g\u00E9tale.\n\nEn r\u00E9sum\u00E9, l'Immeuble Multifonctionnel Rabat r\u00E9ussit l'alliance entre rationalisme urbain et confort passif, o\u00F9 le rythme des fa\u00E7ades v\u00E9g\u00E9talis\u00E9es et l'int\u00E9gration des patios offrent une r\u00E9ponse durable aux exigences de la mixit\u00E9 fonctionnelle.",
    descriptionEn: null,
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759747/perspective_generale_fl7dle.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759747/perspective_generale_fl7dle.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759711/perspective_aerienne_zhkafr.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759630/pers1_p84we8.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759633/pers2_uiuoxx.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759677/pers3_rm2ep2.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759680/pers4_fopet9.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759707/pers5_llxjwv.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759588/concept_xjk94k.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759588/details_technique_tfuvxg.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1775759757/plan_masse_bhnisj.webp",
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
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567101/image_1_n7rhjl.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567100/facade-final_oqxwfz.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567103/perse_2_o7xdib.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567101/awono_final_l2lfys.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567101/image_1_n7rhjl.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567100/image_2_acycw2.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567100/image_3_kyhk49.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567100/image_4_mjkc0a.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567102/image_5_powps8.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567101/image_6_flotuf.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567101/image_7_uav0rh.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567102/image_8_h9tgle.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567102/perse_1_kgvlte.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782567103/perse_2_o7xdib.webp",
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
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568911/1_vhaejy.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568911/1_vhaejy.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568912/2_utz5zl.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568912/3_ykam1u.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568913/4_y6vvby.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568911/5_ehomhh.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568911/6_zge1ba.webp",
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
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566156/1_imkxah.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566156/1_imkxah.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566154/3_aktyml.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566155/4_uhjnsv.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566155/9_v1hlin.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566154/7_a1lw6e.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566155/9_v1hlin.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566155/ff_ve1jzl.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566155/Gemini_Generated_Image_ynkfi7ynkfi7ynkf_vrqj4q.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566155/rendu_facade_01_deadvy.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782566155/rendu_ruelle_02_hxfuxi.webp",
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
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568733/2_w5oq5i.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568733/2_w5oq5i.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568733/3_kkel2o.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568733/4_ds38qh.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568733/5_pmqfq1.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568732/6_xt09y0.webp",
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
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1780047012/Gemini_Generated_Image_8lds7d8lds7d8lds_wf7ypt.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1780047012/Gemini_Generated_Image_8lds7d8lds7d8lds_wf7ypt.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1780047047/Gemini_Generated_Image_i13bg9i13bg9i13b_iayjdr.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1780047069/Gemini_Generated_Image_jjg7lkjjg7lkjjg7_bjmgbl.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1780047084/Gemini_Generated_Image_pthyspthyspthysp_sfntne.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1780047106/Gemini_Generated_Image_rkndhlrkndhlrknd_nysate.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1780047122/plan_masse_tjvjlv.webp",
    ],
    distinctions: [],
    isFeatured: false,
    createdAt: new Date("2026-01-01T00:00:00Z"),
  },
    {
    id: 11,
    title: "Si\u00E8ge de la Direction R\u00E9gionale de l\u2019\u00C9quipement d'Errachidia",
    titleEn: null,
    category: "Concours et batiments civils",
    surface: "6350 m\u00B2 (R+1)",
    coveredSurface: "6350 m\u00B2 (R+1)",
    year: 2018,
    status: "3\u00E8me prix",
    location: "Errachidia, Maroc",
    client: "Direction R\u00E9gionale de l\u2019\u00C9quipement d'Errachidia",
    architects: "FALFOUL Architecture",
    description:
      "Le projet du Si\u00E8ge de la Direction R\u00E9gionale de l'\u00C9quipement, du Transport, de la Logistique et de l'Eau de Dr\u00E2a-Tafilalet \u00E0 Errachidia s'inscrit dans une d\u00E9marche bioclimatique et contemporaine. L'architecture propose un dialogue fort entre l'identit\u00E9 oasienne de la r\u00E9gion et les exigences fonctionnelles d'un \u00E9difice public moderne.\n\nInsertion Urbaine et Composition Volum\u00E9trique\nL'organisation g\u00E9n\u00E9rale du site optimise la parcelle de 6350 m\u00B2 situ\u00E9e \u00E0 l'entr\u00E9e nord-ouest de la ville, le long de la voie nationale N13. Une morphologie d\u00E9coup\u00E9e en blocs distincts, articul\u00E9e autour de patios int\u00E9rieurs, favorise la ventilation naturelle et l'\u00E9clairage tamis\u00E9. Une fa\u00E7ade ocre-terracotta textur\u00E9e reprend les teintes de la terre locale tout en affirmant des lignes g\u00E9om\u00E9triques \u00E9pur\u00E9es et des volumes massifs ancr\u00E9s dans leur environnement. Des dispositifs de protection solaire, caract\u00E9ris\u00E9s par des moucharabiehs modernis\u00E9s en briques ajour\u00E9es et de profonds balcons en retrait abritant des jardini\u00E8res v\u00E9g\u00E9talis\u00E9es, compl\u00E8tent l'enveloppe. Un am\u00E9nagement paysager int\u00E9gr\u00E9 met en sc\u00E8ne des alignements de palmiers et des cheminements pav\u00E9s reliant les parkings p\u00E9riph\u00E9riques aux diff\u00E9rents acc\u00E8s.\n\nAm\u00E9nagement Int\u00E9rieur et Accessibilit\u00E9 Inclusive\nL'espace int\u00E9rieur privil\u00E9gie la clart\u00E9 des parcours, la noblesse des mat\u00E9riaux et le confort de tous les usagers. Un hall d'accueil monumental sous verri\u00E8re, baign\u00E9 d'une lumi\u00E8re z\u00E9nithale douce, associe un rev\u00EAtement de sol sombre \u00E0 un comptoir d'accueil bi-mati\u00E8re en marbre noir vein\u00E9 et lattes de bois. Un grand patio central \u00E0 ciel ouvert, con\u00E7u comme une oasis de fra\u00EEcheur avec sa pelouse, ses palmiers, ses arbustes et sa fontaine centrale, offre un espace de d\u00E9tente optimal pour le personnel et les visiteurs. La d\u00E9marche d'accessibilit\u00E9 universelle s'illustre par l'int\u00E9gration au sol de dalles podotactiles et de tapis en caoutchouc textur\u00E9s pour guider en toute autonomie les personnes malvoyantes vers les diff\u00E9rents bureaux administratifs.",
    descriptionEn: null,
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568007/rendu_1_cnpu0u.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568007/rendu_1_cnpu0u.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568007/rendu_2_kpbegx.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568008/rendu_3_drresg.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568008/rendu_4_yeqtqw.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568009/rendu_7_sxnc4h.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568009/rendu_8_idgd4r.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568002/rendu_9_cqee3j.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568003/rendu_10_vrmt0j.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568003/rendu_11_zrmspi.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568004/rendu_12_sa8ios.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568004/rendu_13_ragysl.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568003/rendu5_e68dii.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568004/1_wldge4.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568004/2_yhjaxw.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568004/3_hkyb60.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568005/4_qzeue3.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568005/5_jduv4o.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568006/6_ybzflr.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568006/7_nqys3f.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1782568006/parti_tzf9pl.webp",
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
  {
    id: 13,
    title: "Centre d'art dramatique",
    titleEn: null,
    category: "Concours et batiments civils",
    surface: "2500 m\u00B2",
    coveredSurface: "2500 m\u00B2",
    year: 2019,
    status: "3\u00E8me prix",
    location: "Siliana, Tunisie",
    client: null,
    architects: "FALFOUL Architecture",
    description:
      "Une Spatialit\u00E9 Fluide et Structur\u00E9e\nLe b\u00E2timent s'impose par une dualit\u00E9 volum\u00E9trique remarquable : un imposant corps cylindrique \u00E0 arcades s'articule harmonieusement avec des volumes cubiques \u00E9pur\u00E9s, abritant la salle de spectacle. V\u00E9ritable c\u0153ur battant du projet, le grand hall d'entr\u00E9e et le foyer distribuent de mani\u00E8re claire et rationnelle les espaces de formation, les zones d'exposition et la grande salle. L'int\u00E9gration de vastes ouvertures en plein cintre et de fa\u00E7ades vitr\u00E9es rompt avec la rigidit\u00E9 traditionnelle des \u00E9difices administratifs, inondant les int\u00E9rieurs d'une lumi\u00E8re naturelle g\u00E9n\u00E9reuse tout en symbolisant la transparence de l'institution vers l'espace public.\n\nAncrage Contextuel et Mat\u00E9rialit\u00E9 Noble\nL'enveloppe ext\u00E9rieure, caract\u00E9ris\u00E9e par des tons blancs et sable clairs, s'harmonise parfaitement avec le climat et le paysage tunisien. Le design ext\u00E9rieur est grandement dynamis\u00E9 par des rev\u00Eatements textur\u00E9s en pierre locale, habillant les porches monumentaux et les structures porteuses pour ancrer le projet dans son terroir, et des moucharabiehs dor\u00E9s et cisel\u00E9s, qui coiffent le volume circulaire et les hauteurs de la cage de sc\u00E8ne, filtrant d\u00E9licatement la lumi\u00E8re tout en rendant hommage au patrimoine artisanal.\n\nUn Programme Int\u00E9gr\u00E9 et Vivant\n\u00C0 l'ext\u00E9rieur comme \u00E0 l'int\u00E9rieur, le parcours de l'usager a \u00E9t\u00E9 con\u00E7u pour encourager la rencontre et l'expression artistique. Un patio paysager central en demi-lune, agr\u00E9ment\u00E9 d'une fontaine et d'une v\u00E9g\u00E9tation luxuriante, offre un espace de respiration et de fra\u00EEcheur propice \u00E0 la d\u00E9tente des artistes et des visiteurs. Un terrain de sport polyvalent, int\u00E9gr\u00E9 \u00E0 l'arri\u00E8re de la parcelle, renforce la vocation inclusive et dynamique du centre aupr\u00E8s de la jeunesse.\n\nCette r\u00E9alisation signe une architecture publique engag\u00E9e, durable et accueillante, qui dote la ville de Siliana d'un rep\u00E8re visuel, culturel et civique incontournable.",
    descriptionEn: null,
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784636362/5_dbarfi.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784636361/1_yssmms.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784636363/2_ji56g0.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784636363/3_rc1vsi.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784636362/4_uu3xja.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784636362/5_dbarfi.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784636362/6_kqjdid.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2019-01-01T00:00:00Z"),
  },
  {
    id: 14,
    title: "Ecole Rebai",
    titleEn: null,
    category: "Concours et batiments civils",
    surface: "1050 m\u00B2 (R+1)",
    landSurface: "2500 m\u00B2",
    coveredSurface: "1050 m\u00B2 (R+1)",
    year: 2026,
    status: "Etudes",
    location: "Kairouan, Tunisie",
    client: null,
    architects: "Aymen FALFOUL & Zeineb SOLTANE",
    description:
      "Ce projet scolaire, d\u00E9velopp\u00E9 sur deux niveaux (R+1), propose une r\u00E9interpr\u00E9tation contemporaine de l'architecture locale. Le b\u00E2timent se fragmente en plusieurs volumes distincts qui s'articulent autour de cours et de patios centraux.\n\nArchitecture Bioclimatique et Espaces de Vie\nL'organisation spatiale met l'accent sur le confort thermique et la qualit\u00E9 de vie des usagers. Des patios et cours int\u00E9rieures, pens\u00E9s comme de v\u00E9ritables poumons verts, int\u00E8grent la v\u00E9g\u00E9tation pour cr\u00E9er un microclimat favorable. Un syst\u00E8me de r\u00E9gulation naturelle garantit un rafra\u00EEchissement passif, une ventilation optimale et un apport g\u00E9n\u00E9reux en lumi\u00E8re naturelle au sein des circulations et des salles. Une grande cour pav\u00E9e centrale fait office de c\u0153ur fonctionnel de l'\u00E9tablissement, favorisant les rassemblements et la coh\u00E9sion au grand air.\n\nEnveloppe Ext\u00E9rieure et Engagement Environnemental\nLa conception des fa\u00E7ades allie performance technique, esth\u00E9tique ludique et insertion urbaine. Une volum\u00E9trie fragment\u00E9e en tons clairs, caract\u00E9ris\u00E9e par des fa\u00E7ades \u00E9pur\u00E9es, adoucit l'impact visuel du b\u00E2timent dans son tissu environnant. Des ouvertures dynamis\u00E9es par des touches de couleurs vives participent \u00E0 l'identit\u00E9 joyeuse de l'\u00E9cole tout en structurant le rythme des fa\u00E7ades. La d\u00E9marche \u00E9cologiquement responsable et inclusive offre un parcours fluide, enti\u00E8rement s\u00E9curis\u00E9 et accessible \u00E0 tous les \u00E9l\u00E8ves pour un cadre d'apprentissage p\u00E9renne.",
    descriptionEn: null,
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637092/1_ff39ag.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637092/1_ff39ag.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637092/2_c28p4g.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637093/3_xt8ffw.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637093/4_ytkopr.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637091/5_z2ucop.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2026-01-01T00:00:00Z"),
  },
  {
    id: 15,
    title: "H\u00F4tel de ville de Chweyhia",
    titleEn: null,
    category: "Concours et batiments civils",
    surface: "850 m\u00B2 (R+1)",
    landSurface: "2000 m\u00B2",
    coveredSurface: "850 m\u00B2 (R+1)",
    year: 2026,
    status: "R\u00E9alis\u00E9",
    location: "Chweyhia, Kairouan, Tunisie",
    client: "Municipalit\u00E9 de Chweyhia",
    architects: "Aymen FALFOUL & Safouene GHARIANI",
    description:
      "Fruit d'une collaboration architecturale \u00E9troite, le nouvel h\u00F4tel de ville de Chweyhia propose une r\u00E9interpr\u00E9tation contemporaine, solennelle et humaine de l'architecture institutionnelle locale. D\u00E9velopp\u00E9 sur deux niveaux (R+1), ce projet civique a \u00E9t\u00E9 pens\u00E9 pour incarner les valeurs de transparence, d'accessibilit\u00E9 et de service public au sein de la communaut\u00E9.\n\nUne Spatialit\u00E9 Ouverte et Lumineuse\nLe b\u00E2timent s'impose par des volumes g\u00E9om\u00E9triques \u00E9pur\u00E9s qui s'articulent autour d'un grand hall central en double hauteur. V\u00E9ritable c\u0153ur battant du projet, cet espace d'accueil et d'\u00E9change citoyen distribue les diff\u00E9rents services de mani\u00E8re claire et rationnelle. L'int\u00E9gration de vastes baies vitr\u00E9es toute hauteur rompt avec la rigidit\u00E9 traditionnelle des \u00E9difices administratifs, inondant les int\u00E9rieurs d'une lumi\u00E8re naturelle g\u00E9n\u00E9reuse tout en symbolisant la transparence de l'institution vers l'espace public.\n\nAncrage Contextuel et Mat\u00E9rialit\u00E9 Noble\nL'enveloppe ext\u00E9rieure, caract\u00E9ris\u00E9e par des tons sable clairs, s'harmonise parfaitement avec le climat et le paysage kairouanais. Le design ext\u00E9rieur est dynamis\u00E9 par des rev\u00Eatements textur\u00E9s en pierre locale et des menuiseries sombres et \u00E9l\u00E9gantes qui soulignent la rigueur des lignes. \u00C0 l'int\u00E9rieur, le parcours usager est sublim\u00E9 par l'utilisation de mat\u00E9riaux nobles et p\u00E9rennes : le marbre au sol conf\u00E8re au lieu sa solennit\u00E9 et sa durabilit\u00E9 face \u00E0 une forte fr\u00E9quentation, tandis que le bois chaleureux des guichets d'accueil et des zones de contact adoucit l'atmosph\u00E8re, offrant un environnement d'\u00E9coute et de travail \u00E0 la fois serein et ergonomique.\n\nCette r\u00E9alisation signe une architecture publique engag\u00E9e, durable et accueillante, qui dote la municipalit\u00E9 de Chweyhia d'un rep\u00E8re visuel et civique incontournable.",
    descriptionEn: null,
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637502/1_o8hiqe.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637502/1_o8hiqe.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637502/2_jbajfs.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637502/3_xbo7zl.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637502/4_vjgqsb.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637502/5_xc6ir2.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637503/6_jmwdzk.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637501/7_iwwukw.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637501/8_wbx812.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637501/9_vzjqxg.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784637501/10_jiwua4.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2026-01-01T00:00:00Z"),
  },
  {
    id: 16,
    title: "Recette des finances \u00E0 Cherarda",
    titleEn: null,
    category: "Concours et batiments civils",
    surface: "860 m\u00B2",
    landSurface: "860 m\u00B2",
    year: 2017,
    status: "3\u00E8me prix",
    location: "Cherarda, Kairouan, Tunisie",
    client: null,
    architects: "FALFOUL Architecture",
    description:
      "Ce projet architectural s'implante de mani\u00E8re hautement strat\u00E9gique \u00E0 Cherarda, orientant son b\u00E2timent principal vers la GP2, voie majeure reliant Kairouan \u00E0 Gab\u00E8s. Le parti adopt\u00E9 propose un dialogue harmonieux entre fonctionnalit\u00E9 et sobri\u00E9t\u00E9 en articulant deux volumes en R+1 inscrits dans des formes g\u00E9om\u00E9triques pures (cercle, rectangle et triangle). En premier plan, le volume administratif accueille la recette des finances au rez-de-chauss\u00E9e et le bureau de contr\u00F4le \u00E0 l'\u00E9tage, affirmant son r\u00F4le institutionnel par des acc\u00E8s publics clairement signal\u00E9s depuis la voie principale. En retrait, le second volume abrite les logements de fonction (r\u00E9serv\u00E9s au receveur au rez-de-chauss\u00E9e et au chef de bureau \u00E0 l'\u00E9tage), desservis par deux parkings distincts. Ces acc\u00E8s privatifs sont ing\u00E9nieusement dispos\u00E9s de fa\u00E7on oppos\u00E9e pour garantir l'intimit\u00E9 et \u00E9viter tout vis-\u00E0-vis. Esth\u00E9tiquement, le traitement des fa\u00E7ades allie un vocabulaire contemporain \u00E9pur\u00E9 \u00E0 l'utilisation de la brique traditionnelle kairouanaise, sublim\u00E9 par de grands moucharabiehs blancs cisel\u00E9s et des pans vitr\u00E9s qui inondent de lumi\u00E8re le bureau des relations avec les citoyens, cr\u00E9ant ainsi un \u00E9quipement public \u00E0 la fois moderne, s\u00E9curis\u00E9 et ancr\u00E9 dans son patrimoine local.",
    descriptionEn: null,
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638196/01_rhzp1b.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638196/01_rhzp1b.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638196/02_xrasdc.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638196/03_yxudm3.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638196/04_bxdmif.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638196/05_gcbnyx.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638196/06_rgonwq.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2017-01-01T00:00:00Z"),
  },
  {
    id: 17,
    title: "Souk El Mouajil",
    titleEn: null,
    category: "Concours et batiments civils",
    surface: "900 m\u00B2",
    coveredSurface: "900 m\u00B2",
    year: 2024,
    status: "Etudes",
    location: "Kairouan, Tunisie",
    client: null,
    architects: "FALFOUL Architecture",
    description:
      "Le Projet de R\u00E9habilitation du Souk El Mouajil de Kairouan s'attache \u00E0 redonner vie \u00E0 un ancien espace historique de production et de vente artisanale, autrefois d\u00E9laiss\u00E9 et alt\u00E9r\u00E9 par le temps. L'intervention repose sur une alliance minutieuse entre restauration patrimoniale et am\u00E9nagement contemporain pour m\u00E9tamorphoser ce lieu en un p\u00F4le \u00E9conomique, culturel et touristique dynamique.\n\nRestauration Technique et Identit\u00E9 Architecturale\nL'approche architecturale privil\u00E9gie la pr\u00E9servation de la morphologie et de l'authenticit\u00E9 structurelle de l'\u00E9difice tout en y int\u00E9grant des technologies modernes. Une r\u00E9fection fid\u00E8le des vo\u00FBtes et des structures en briques met en valeur la texture originelle de la brique de Kairouan tout en consolidant l'ensemble de la nef couverte. L'optimisation de la lumi\u00E8re naturelle est assur\u00E9e par l'ouverture d'oculus et de lanterneaux z\u00E9nithaux perc\u00E9s dans les vo\u00FBtes, qui diffusent une clart\u00E9 douce et limitent le recours \u00E0 l'\u00E9clairage artificiel en journ\u00E9e. L'int\u00E9gration technique \u00E9coresponsable se caract\u00E9rise par l'installation discr\u00E8te de solutions d'assainissement modernes et de panneaux photovolta\u00EFques dispos\u00E9s sur les toits plats ext\u00E9rieurs pour assurer l'autonomie \u00E9nerg\u00E9tique du site.\n\nAm\u00E9nagement Int\u00E9rieur et Nouveaux Usages\nEnti\u00E8rement repens\u00E9, l'espace int\u00E9rieur se structure comme un parcours fluide c\u00E9l\u00E9brant le savoir-faire local. Des boutiques d'artisanat revisit\u00E9 et des ateliers, rythm\u00E9s par de grandes ouvertures vitr\u00E9es minimalistes qui s'ins\u00E8rent harmonieusement sous les arcades historiques, c\u00F4toient un caf\u00E9 traditionnel et des zones de convivialit\u00E9, am\u00E9nag\u00E9s avec du mobilier bas et des banquettes int\u00E9gr\u00E9es, cr\u00E9ant des espaces de rencontre professionnels et de d\u00E9tente pour les visiteurs. Une galerie d'art et des espaces d'exposition combinent le charme des rev\u00EAtements de sol en pav\u00E9s de pierre d'origine \u00E0 une sc\u00E9nographie contemporaine \u00E9pur\u00E9e, id\u00E9ale pour valoriser les cr\u00E9ations de la r\u00E9gion.",
    descriptionEn: null,
    coverImage:
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638563/01_splszl.webp",
    images: [
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638563/01_splszl.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638563/02_amvgfq.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638563/03_zqvuxn.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638560/04_tqzxes.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638563/05_ogayvl.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638555/06_upotsm.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638556/07_auhlfv.webp",
      "https://res.cloudinary.com/dxpsm36t3/image/upload/v1784638555/08_ytx9zr.webp",
    ],
    distinctions: [],
    isFeatured: true,
    createdAt: new Date("2024-01-01T00:00:00Z"),
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



















