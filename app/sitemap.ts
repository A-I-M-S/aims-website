import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";
import { services } from "../lib/services";
import { insights } from "../lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-29T00:00:00Z");
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...["services", "solutions", "about", "contact", "insights", "privacy"].map(
      (path) => ({
        url: `${SITE_URL}/${path}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: path === "privacy" ? 0.2 : 0.8,
      }),
    ),
    ...services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...insights.map((insight) => ({
      url: `${SITE_URL}/insights/${insight.slug}`,
      lastModified: new Date(`${insight.date}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
