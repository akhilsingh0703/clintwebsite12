import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { Service, Model } from "@shared/schema";

export function useServices() {
  return useQuery<Service[]>({
    queryKey: [api.services.list.path],
  });
}

export function useModels() {
  return useQuery<Model[]>({
    queryKey: [api.models.list.path],
  });
}
