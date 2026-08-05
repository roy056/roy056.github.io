import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://roy056.github.io/",
      lastModified: new Date("2026-08-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
