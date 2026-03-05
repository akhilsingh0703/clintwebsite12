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
      const girlImages = [
        "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1621184414184-0155f0ce0f07?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583413230540-ddf9068c9d2d?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512413911193-3dec5e0bf432?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
      ];

      const names = ["Ananya", "Priya", "Neha", "Natasha", "Elena", "Sofia"];
      const nationalities = ["Indian", "Indian", "Indian", "Russian", "Russian", "Russian"];
      
      for (let i = 0; i < names.length; i++) {
        await storage.createModel({
          name: names[i],
          nationality: nationalities[i],
          experienceYears: 20 + i, // Using as age proxy for now or just experience
          specialty: "Full Body Massage, Aroma Therapy",
          description: `Available in Mahipalpur, Aerocity, Dhaula Kuan, Vasant Kunj, Vasant vihar, Gurgaon, Lajpat Nagar, Connaught palace, Dwarka. Age: ${20 + i}. Services: Swedish, Deep Tissue, B2B.`,
          price1h: 3000 + (i * 500),
          priceNight: 15000 + (i * 2000),
          imageUrl: girlImages[i]
        });
      }
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
