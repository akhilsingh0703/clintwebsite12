import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

// Using the provided attached images
const ATTACHED_IMAGES = [
  "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=2070&auto=format&fit=crop", // placeholder for first if needed, but I'll use the ones from assets
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.34_1772691643849.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.33_(1)_1772691643850.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.33_1772691643851.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.32_(2)_1772691643852.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.32_(1)_1772691643852.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.32_1772691643853.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.31_(2)_1772691643853.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.31_(1)_1772691643854.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.31_1772691643854.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.30_(1)_1772691643855.jpeg",
  "/attached_assets/WhatsApp_Image_2026-03-02_at_09.28.30_1772691643855.jpeg"
];

const LOCATIONS = "Mahipalpur, Aerocity, Dhaula Kuan, Vasant Kunj, Vasant vihar, Gurgaon, Lajpat Nagar, Connaught palace, Dwarka";

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
      const names = ["Ananya", "Priya", "Neha", "Natasha", "Elena", "Sofia", "Riya", "Kavya", "Isha", "Zoya", "Mehak"];
      
      for (let i = 0; i < names.length; i++) {
        const age = 20 + (i % 5);
        await storage.createModel({
          name: names[i],
          nationality: i < 6 ? "Indian" : "International",
          experienceYears: age, // Using as age proxy
          specialty: "Full Body Massage, Swedish, Deep Tissue",
          description: `Name: ${names[i]}, Age: ${age}. Services: Full Body Massage, Aroma Therapy, Swedish. Available in: ${LOCATIONS}.`,
          price1h: 3000 + (i * 200),
          priceNight: 15000 + (i * 1000),
          imageUrl: ATTACHED_IMAGES[i + 1] || ATTACHED_IMAGES[1]
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
