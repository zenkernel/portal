import { cache } from "react";
import { fallbackServices } from "@/lib/constants";
import { createClient } from "@/lib/supabase/server";
import type { Service } from "@/types/database.types";

export const getServices = cache(async (): Promise<Service[]> => {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("is_published", true)
      .order("sort_order", { ascending: true });

    if (error || !data?.length) {
      return fallbackServices.map((service, index) => ({
        id: service.slug,
        slug: service.slug,
        title: service.title,
        tagline: service.tagline,
        description: service.description,
        highlights: [...service.highlights],
        sort_order: index + 1,
        is_published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }));
    }

    return data;
  } catch {
    return fallbackServices.map((service, index) => ({
      id: service.slug,
      slug: service.slug,
      title: service.title,
      tagline: service.tagline,
      description: service.description,
      highlights: [...service.highlights],
      sort_order: index + 1,
      is_published: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
  }
});
