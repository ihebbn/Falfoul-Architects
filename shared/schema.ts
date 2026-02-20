import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  titleEn: text("title_en"),
  category: text("category").notNull(),
  surface: text("surface").notNull(),
  year: integer("year"),
  status: text("status"),
  location: text("location"),
  client: text("client"),
  architects: text("architects"),
  description: text("description").notNull(),
  descriptionEn: text("description_en"),
  coverImage: text("cover_image").notNull(),
  images: jsonb("images").$type<string[]>().default([]).notNull(),
  distinctions: jsonb("distinctions").$type<string[]>().default([]).notNull(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  titleEn: text("title_en"),
  type: text("type").notNull(),
  description: text("description").notNull(),
  descriptionEn: text("description_en"),
  date: timestamp("date").notNull(),
  externalLink: text("external_link"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ 
  id: true, 
  createdAt: true 
});

export const insertEventSchema = createInsertSchema(events).omit({ 
  id: true, 
  createdAt: true 
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  email: z.string().email("Invalid email address"),
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

export type CreateContactMessageRequest = InsertContactMessage;
export type ContactMessageResponse = ContactMessage;
