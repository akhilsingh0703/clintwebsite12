import { z } from 'zod';
import { services, therapists } from './schema';

export const errorSchemas = {
  notFound: z.object({
    message: z.string(),
  }),
};

export const api = {
  services: {
    list: {
      method: 'GET' as const,
      path: '/api/services' as const,
      responses: {
        200: z.array(z.custom<typeof services.$inferSelect>()),
      },
    }
  },
  therapists: {
    list: {
      method: 'GET' as const,
      path: '/api/therapists' as const,
      responses: {
        200: z.array(z.custom<typeof therapists.$inferSelect>()),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type ServicesListResponse = z.infer<typeof api.services.list.responses[200]>;
export type TherapistsListResponse = z.infer<typeof api.therapists.list.responses[200]>;
