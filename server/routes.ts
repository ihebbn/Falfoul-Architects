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
        title: "Villa Lumineuse",
        titleEn: "Luminous Villa",
        category: "RESID.",
        surface: "350",
        year: 2023,
        status: "Completed",
        location: "Paris, France",
        client: "Private",
        architects: "FALFOUL Architecture",
        description: "A contemporary residential project emphasizing natural light and open spaces.",
        descriptionEn: "A contemporary residential project emphasizing natural light and open spaces.",
        coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1600607687931-cebf0046cb20?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: ["Best Residential Design 2023"],
        isFeatured: true,
      },
      {
        title: "Tour de l'Avenir",
        titleEn: "Future Tower",
        category: "COMM/BUREAUTIQUES",
        surface: "12000",
        year: 2024,
        status: "Under Construction",
        location: "Lyon, France",
        client: "TechCorp",
        architects: "FALFOUL Architecture & Partners",
        description: "Innovative commercial tower with sustainable features and a stunning facade.",
        descriptionEn: "Innovative commercial tower with sustainable features and a stunning facade.",
        coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: [],
        isFeatured: true,
      },
      {
        title: "Modern Museum",
        titleEn: "Modern Museum",
        category: "COMPETITIONS",
        surface: "5000",
        year: 2022,
        status: "Concept",
        location: "Marseille, France",
        client: "City of Marseille",
        architects: "FALFOUL Architecture",
        description: "Winning competition entry for a new cultural center integrating with historic surroundings.",
        descriptionEn: "Winning competition entry for a new cultural center integrating with historic surroundings.",
        coverImage: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1000"
        ],
        distinctions: ["1st Prize Cultural Center"],
        isFeatured: false,
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
