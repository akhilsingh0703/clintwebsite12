import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  try {
    const existingServices = await storage.getServices();
    if (existingServices.length === 0) {
      await storage.createService({
        name: "Full Body Massage",
        description: "Relieves muscle tension and promotes deep relaxation."
      });
      await storage.createService({
        name: "Aroma Therapy",
        description: "Essential oils enhance relaxation and reduce stress."
      });
      await storage.createService({
        name: "Deep Tissue Therapy",
        description: "Targets deep muscle pain and stiffness."
      });
      await storage.createService({
        name: "Luxury Spa Package",
        description: "Complete relaxation experience for mind & body."
      });
    }

    const existingTherapists = await storage.getTherapists();
    if (existingTherapists.length === 0) {
      await storage.createTherapist({
        name: "Ananya Sharma",
        nationality: "Indian",
        experienceYears: 5,
        specialty: "Aroma & Relaxation Therapy",
        description: "Friendly & professional service",
        price1h: 3000,
        priceNight: 15000,
        imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createTherapist({
        name: "Priya Verma",
        nationality: "Indian",
        experienceYears: 4,
        specialty: "Stress Relief Massage",
        description: "Calming & soothing techniques",
        price1h: 2800,
        priceNight: 14000,
        imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createTherapist({
        name: "Neha Kapoor",
        nationality: "Indian",
        experienceYears: 6,
        specialty: "Deep Tissue Therapy",
        description: "Best for body pain relief",
        price1h: 3500,
        priceNight: 16000,
        imageUrl: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createTherapist({
        name: "Natasha Ivanova",
        nationality: "Russian",
        experienceYears: 6,
        specialty: "Luxury Deep Tissue Spa",
        description: "Premium relaxation experience",
        price1h: 5000,
        priceNight: 22000,
        imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createTherapist({
        name: "Elena Petrova",
        nationality: "Russian",
        experienceYears: 5,
        specialty: "Aroma & Wellness Therapy",
        description: "Premium wellness experience",
        price1h: 4800,
        priceNight: 21000,
        imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createTherapist({
        name: "Sofia Romanova",
        nationality: "Russian",
        experienceYears: 7,
        specialty: "Luxury Spa Therapy",
        description: "Complete mind and body rejuvenation",
        price1h: 5500,
        priceNight: 24000,
        imageUrl: "https://images.unsplash.com/photo-1534093607318-f025413f49cb?q=80&w=2069&auto=format&fit=crop"
      });
    }
  } catch (error) {
    console.error("Failed to seed database:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed the database
  seedDatabase();

  app.get(api.services.list.path, async (req, res) => {
    try {
      const allServices = await storage.getServices();
      res.json(allServices);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });

  app.get(api.therapists.list.path, async (req, res) => {
    try {
      const allTherapists = await storage.getTherapists();
      res.json(allTherapists);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch therapists" });
    }
  });

  return httpServer;
}
