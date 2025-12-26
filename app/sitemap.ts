import type { MetadataRoute } from "next";
import { getAllThoughtsMeta } from "@/lib/thoughts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sahilsharmaqa.com";

  const staticRoutes = ["", "/thoughts"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const thoughtRoutes = getAllThoughtsMeta().map((p) => ({
    url: `${baseUrl}/thoughts/${p.slug}`,
    lastModified: new Date(p.date || Date.now()),
  }));

  return [...staticRoutes, ...thoughtRoutes];
}
