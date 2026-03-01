import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

// Log zod errors defensively as requested by best practices
function parseWithLogging<T>(schema: any, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      const res = await fetch(api.services.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch services");
      const data = await res.json();
      return parseWithLogging(api.services.list.responses[200], data, "services.list");
    },
  });
}

export function useTherapists() {
  return useQuery({
    queryKey: [api.therapists.list.path],
    queryFn: async () => {
      const res = await fetch(api.therapists.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch therapists");
      const data = await res.json();
      return parseWithLogging(api.therapists.list.responses[200], data, "therapists.list");
    },
  });
}
