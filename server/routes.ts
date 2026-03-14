import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get(api.projects.get.path, async (req, res) => {
    try {
      const project = await storage.getProject(Number(req.params.id));
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json(project);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  // Events
  app.get(api.events.list.path, async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Failed to submit message" });
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    const projectsToSeed = [
      {
        title: "Villa Gammarth",
        titleEn: "Gammarth Villa",
        category: "RESID.",
        surface: "450",
        year: 2023,
        status: "Completed",
        location: "Gammarth, Tunisia",
        client: "Private",
        architects: "FALFOUL Architecture",
        description: "A contemporary residential project overlooking the Mediterranean, emphasizing natural light and open luxury spaces.",
        descriptionEn: "A contemporary residential project overlooking the Mediterranean, emphasizing natural light and open luxury spaces.",
        coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1600607687931-cebf0046cb20?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: ["Best Residential Design Tunisia 2023"],
        isFeatured: true,
      },
      {
        title: "La Tour du Lac",
        titleEn: "Lake Tower",
        category: "COMM/BUREAUTIQUES",
        surface: "12000",
        year: 2024,
        status: "Under Construction",
        location: "Les Berges du Lac, Tunisia",
        client: "TechCorp",
        architects: "FALFOUL Architecture & Partners",
        description: "Innovative commercial tower with sustainable features and a stunning facade in Tunis' premier business district.",
        descriptionEn: "Innovative commercial tower with sustainable features and a stunning facade in Tunis' premier business district.",
        coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: [],
        isFeatured: true,
      },
      {
        title: "Musée d'Art Contemporain",
        titleEn: "Museum of Contemporary Art",
        category: "COMPETITIONS",
        surface: "5500",
        year: 2022,
        status: "Concept",
        location: "Carthage, Tunisia",
        client: "Ministry of Culture",
        architects: "FALFOUL Architecture",
        description: "Winning competition entry for a new cultural center integrating with historic Carthaginian surroundings.",
        descriptionEn: "Winning competition entry for a new cultural center integrating with historic Carthaginian surroundings.",
        coverImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1000",
        images: [
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: ["1st Prize Cultural Center"],
        isFeatured: false,
      },
      {
        title: "Villa Carthage",
        titleEn: "Carthage Villa",
        category: "RESID.",
        surface: "420",
        year: 2024,
        status: "In Progress",
        location: "Tunis, Tunisia",
        client: "Private",
        architects: "FALFOUL Architecture",
        description: "A luxury villa blending traditional Tunisian elements with modern minimalism.",
        descriptionEn: "A luxury villa blending traditional Tunisian elements with modern minimalism.",
        coverImage: "/images/villa1.jpg",
        images: ["/images/villa1.jpg"],
        distinctions: [],
        isFeatured: true,
      },
      {
        title: "Le Pavillon de Verre",
        titleEn: "The Glass Pavilion",
        category: "RESID.",
        surface: "650",
        year: 2022,
        status: "Completed",
        location: "Hammamet, Tunisia",
        client: "Private",
        architects: "FALFOUL Architecture",
        description: "A luxury modern house integrating seamlessly with the surrounding seaside landscape through expansive glass walls.",
        descriptionEn: "A luxury modern house integrating seamlessly with the surrounding seaside landscape through expansive glass walls.",
        coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
        ],
        distinctions: ["Featured in ArchDaily Tunisia"],
        isFeatured: true,
      },
      {
        title: "Résidences Écologiques",
        titleEn: "Eco Residences",
        category: "MULTIRESID.",
        surface: "8500",
        year: 2023,
        status: "Completed",
        location: "Sousse, Tunisia",
        client: "EcoDev",
        architects: "FALFOUL Architecture",
        description: "A modern apartment complex designed with community and environmental integration in mind.",
        descriptionEn: "A modern apartment complex designed with community and environmental integration in mind.",
        coverImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: [],
        isFeatured: true,
      },
      {
        title: "Horizon Tower Lac 3",
        titleEn: "Horizon Tower Lac 3",
        category: "COMM/BUREAUTIQUES",
        surface: "45000",
        year: 2025,
        status: "Concept",
        location: "Tunis, Tunisia",
        client: "Global Tech",
        architects: "FALFOUL Architecture",
        description: "Urban skyscraper featuring an innovative geometric glass facade and sustainable energy systems.",
        descriptionEn: "Urban skyscraper featuring an innovative geometric glass facade and sustainable energy systems.",
        coverImage: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1000",
        images: [
          "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: ["LEED Platinum Certified Focus"],
        isFeatured: true,
      },
      {
        title: "Djerba Minimaliste",
        titleEn: "Djerba Minimal",
        category: "RESID.",
        surface: "380",
        year: 2024,
        status: "In Progress",
        location: "Djerba, Tunisia",
        client: "Private",
        architects: "FALFOUL Architecture",
        description: "A minimalist concrete and white-washed house blending brutalism with serene interior courtyards and local Djerbian style.",
        descriptionEn: "A minimalist concrete and white-washed house blending brutalism with serene interior courtyards and local Djerbian style.",
        coverImage: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: [],
        isFeatured: true,
      },
      {
        title: "Hôtel Oasis Tozeur",
        titleEn: "Tozeur Oasis Hotel",
        category: "INTERIEURS/DESIGN",
        surface: "4500",
        year: 2023,
        status: "Completed",
        location: "Tozeur, Tunisia",
        client: "Boutique Hotel Group",
        architects: "FALFOUL Architecture",
        description: "Contemporary interior design project maximizing spatial fluidity, using organic material palettes and desert tones.",
        descriptionEn: "Contemporary interior design project maximizing spatial fluidity, using organic material palettes and desert tones.",
        coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
        images: [
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: ["Best Hospitality Interior 2023"],
        isFeatured: true,
      },
      {
        title: "Centre Culturel de la Médina",
        titleEn: "Medina Cultural Center",
        category: "COMPETITIONS",
        surface: "12000",
        year: 2024,
        status: "Concept",
        location: "Tunis, Tunisia",
        client: "City of Tunis",
        architects: "FALFOUL Architecture",
        description: "An architectural competition concept for a sustainable cultural hub emphasizing communal interaction in the heart of the Medina.",
        descriptionEn: "An architectural competition concept for a sustainable cultural hub emphasizing communal interaction in the heart of the Medina.",
        coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=100&w=1000"
        ],
        distinctions: ["Shortlisted"],
        isFeatured: false,
      },
      {
        title: "Complexe La Marsa",
        titleEn: "La Marsa Complex",
        category: "MULTIRESID.",
        surface: "6500",
        year: 2025,
        status: "In Progress",
        location: "La Marsa, Tunisia",
        client: "Marsa Real Estate",
        architects: "FALFOUL Architecture",
        description: "A premium residential block with staggered terraces offering panoramic views of the Mediterranean sea.",
        descriptionEn: "A premium residential block with staggered terraces offering panoramic views of the Mediterranean sea.",
        coverImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000",
        images: [],
        distinctions: [],
        isFeatured: true,
      },
      {
        title: "Sfax Business Hub",
        titleEn: "Sfax Business Hub",
        category: "COMM/BUREAUTIQUES",
        surface: "22000",
        year: 2023,
        status: "Completed",
        location: "Sfax, Tunisia",
        client: "Sfax Commerce Group",
        architects: "FALFOUL Architecture",
        description: "A state-of-the-art office complex facilitating modern corporate needs with a robust industrial facade.",
        descriptionEn: "A state-of-the-art office complex facilitating modern corporate needs with a robust industrial facade.",
        coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000",
        images: [],
        distinctions: ["Commercial Project of the Year Tunisia"],
        isFeatured: true,
      }
    ];

    for (const p of projectsToSeed) {
      await storage.createProject(p);
    }
  }

  const existingEvents = await storage.getEvents();
  if (existingEvents.length === 0) {
    const eventsToSeed = [
      {
        title: "Exposition: L'Architecture de Demain",
        titleEn: "Exhibition: Architecture of Tomorrow",
        type: "Exhibition",
        description: "Join us at the National Gallery to explore our upcoming visionary projects.",
        descriptionEn: "Join us at the National Gallery to explore our upcoming visionary projects.",
        date: new Date("2024-05-15"),
        externalLink: "https://example.com/exhibition"
      },
      {
        title: "Conférence: Design Durable",
        titleEn: "Conference: Sustainable Design",
        type: "Conference",
        description: "Our lead architect will speak about sustainable materials in modern high-rises.",
        descriptionEn: "Our lead architect will speak about sustainable materials in modern high-rises.",
        date: new Date("2024-06-20"),
        externalLink: "https://example.com/conference"
      }
    ];

    for (const e of eventsToSeed) {
      await storage.createEvent(e);
    }
  }
}
