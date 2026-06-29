import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { pageServices } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/service-areas",
    "/contact",
  ];

  const now = new Date();

  const base: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = pageServices.map((s) => ({
    url: `${site.url}${s.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...base, ...serviceRoutes];
}
