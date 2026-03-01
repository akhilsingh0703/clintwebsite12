import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
});

export const therapists = pgTable("therapists", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  nationality: text("nationality").notNull(),
  experienceYears: integer("experience_years").notNull(),
  specialty: text("specialty").notNull(),
  description: text("description"),
  price1h: integer("price_1h").notNull(),
  priceNight: integer("price_night").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertTherapistSchema = createInsertSchema(therapists).omit({ id: true });

export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;

export type Therapist = typeof therapists.$inferSelect;
export type InsertTherapist = z.infer<typeof insertTherapistSchema>;

export type ServiceResponse = Service;
export type ServicesListResponse = Service[];
export type TherapistResponse = Therapist;
export type TherapistsListResponse = Therapist[];
