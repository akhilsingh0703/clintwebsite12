import { db } from "./db";
import { services, models, type ServiceResponse, type ModelResponse, type InsertService, type InsertModel } from "@shared/schema";

export interface IStorage {
  getServices(): Promise<ServiceResponse[]>;
  getModels(): Promise<ModelResponse[]>;
  createService(service: InsertService): Promise<ServiceResponse>;
  createModel(model: InsertModel): Promise<ModelResponse>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<ServiceResponse[]> {
    return await db.select().from(services);
  }

  async getModels(): Promise<ModelResponse[]> {
    return await db.select().from(models);
  }

  async createService(service: InsertService): Promise<ServiceResponse> {
    const [newService] = await db.insert(services).values(service).returning();
    return newService;
  }

  async createModel(model: InsertModel): Promise<ModelResponse> {
    const [newModel] = await db.insert(models).values(model).returning();
    return newModel;
  }
}

export const storage = new DatabaseStorage();
