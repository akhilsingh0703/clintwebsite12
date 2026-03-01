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

    const existingModels = await storage.getModels();
    if (existingModels.length === 0) {
      await storage.createModel({
        name: "Ananya Sharma",
        nationality: "Indian",
        experienceYears: 5,
        specialty: "Aroma & Relaxation Therapy",
        description: "Friendly & professional service",
        price1h: 3000,
        priceNight: 15000,
        imageUrl: "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createModel({
        name: "Priya Verma",
        nationality: "Indian",
        experienceYears: 4,
        specialty: "Stress Relief Massage",
        description: "Calming & soothing techniques",
        price1h: 2800,
        priceNight: 14000,
        imageUrl: "https://images.unsplash.com/photo-1621184414184-0155f0ce0f07?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createModel({
        name: "Neha Kapoor",
        nationality: "Indian",
        experienceYears: 6,
        specialty: "Deep Tissue Therapy",
        description: "Best for body pain relief",
        price1h: 3500,
        priceNight: 16000,
        imageUrl: "https://images.unsplash.com/photo-1583413230540-ddf9068c9d2d?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createModel({
        name: "Natasha Ivanova",
        nationality: "Russian",
        experienceYears: 6,
        specialty: "Luxury Deep Tissue Spa",
        description: "Premium relaxation experience",
        price1h: 5000,
        priceNight: 22000,
        imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createModel({
        name: "Elena Petrova",
        nationality: "Russian",
        experienceYears: 5,
        specialty: "Aroma & Wellness Therapy",
        description: "Premium wellness experience",
        price1h: 4800,
        priceNight: 21000,
        imageUrl: "https://images.unsplash.com/photo-1512413911193-3dec5e0bf432?q=80&w=2070&auto=format&fit=crop"
      });
      await storage.createModel({
        name: "Sofia Romanova",
        nationality: "Russian",
        experienceYears: 7,
        specialty: "Luxury Spa Therapy",
        description: "Complete mind and body rejuvenation",
        price1h: 5500,
        priceNight: 24000,
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
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

  app.get(api.models.list.path, async (req, res) => {
    try {
      const allModels = await storage.getModels();
      res.json(allModels);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch models" });
    }
  });

  return httpServer;
}
