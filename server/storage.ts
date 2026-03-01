import { db } from "./db";
import { services, therapists, type ServiceResponse, type TherapistResponse, type InsertService, type InsertTherapist } from "@shared/schema";

export interface IStorage {
  getServices(): Promise<ServiceResponse[]>;
  getTherapists(): Promise<TherapistResponse[]>;
  createService(service: InsertService): Promise<ServiceResponse>;
  createTherapist(therapist: InsertTherapist): Promise<TherapistResponse>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<ServiceResponse[]> {
    return await db.select().from(services);
  }

  async getTherapists(): Promise<TherapistResponse[]> {
    return await db.select().from(therapists);
  }

  async createService(service: InsertService): Promise<ServiceResponse> {
    const [newService] = await db.insert(services).values(service).returning();
    return newService;
  }

  async createTherapist(therapist: InsertTherapist): Promise<TherapistResponse> {
    const [newTherapist] = await db.insert(therapists).values(therapist).returning();
    return newTherapist;
  }
}

export const storage = new DatabaseStorage();
