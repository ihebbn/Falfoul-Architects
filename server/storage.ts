import { projects, events, contactMessages } from "@shared/schema";
import type { 
  Project, InsertProject, 
  Event, InsertEvent, 
  ContactMessage, InsertContactMessage 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Events
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private events: Map<number, Event>;
  private messages: Map<number, ContactMessage>;
  private currentId: { [key: string]: number };

  constructor() {
    this.projects = new Map();
    this.events = new Map();
    this.messages = new Map();
    this.currentId = { projects: 1, events: 1, messages: 1 };
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.currentId.projects++;
    const newProject: Project = {
      ...project,
      id,
      titleEn: project.titleEn ?? null,
      year: project.year ?? null,
      status: project.status ?? null,
      location: project.location ?? null,
      client: project.client ?? null,
      architects: project.architects ?? null,
      descriptionEn: project.descriptionEn ?? null,
      images: (project.images as string[] | undefined) ?? [],
      distinctions: (project.distinctions as string[] | undefined) ?? [],
      isFeatured: project.isFeatured ?? false,
      createdAt: new Date(),
    };
    this.projects.set(id, newProject);
    return newProject;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const id = this.currentId.events++;
    const newEvent: Event = {
      ...event,
      id,
      titleEn: event.titleEn ?? null,
      descriptionEn: event.descriptionEn ?? null,
      externalLink: event.externalLink ?? null,
      createdAt: new Date(),
    };
    this.events.set(id, newEvent);
    return newEvent;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentId.messages++;
    const newMessage: ContactMessage = { ...message, id, createdAt: new Date() };
    this.messages.set(id, newMessage);
    return newMessage;
  }
}

export class DatabaseStorage implements IStorage {
  // Projects
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  // Events
  async getEvents(): Promise<Event[]> {
    return await db.select().from(events);
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db.insert(events).values(event).returning();
    return newEvent;
  }

  // Contact
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

export const storage = process.env.DATABASE_URL 
  ? new DatabaseStorage() 
  : new MemStorage();
