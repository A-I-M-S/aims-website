import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";
import { services } from "../lib/services";
import { insights } from "../lib/insights";
import { agents } from "../lib/agents";
import { hardware } from "../lib/hardware";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-21T00:00:00Z");
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...[
      "services",
      "agents",
      "hardware",
      "platforms",
      "solutions",
      "about",
      "contact",
      "insights",
      "privacy",
    ].map((path) => ({
      url: `${SITE_URL}/${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "privacy" ? 0.2 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...agents.map((agent) => ({
      url: `${SITE_URL}/agents/${agent.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...hardware.map((item) => ({
      url: `${SITE_URL}/hardware/${item.slug}`,
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
