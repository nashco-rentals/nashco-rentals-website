import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<{
    path: string;
    priority: number;
    changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1.0, changeFreq: "weekly" },
    { path: "/capabilities", priority: 0.9, changeFreq: "monthly" },
    { path: "/projects", priority: 0.8, changeFreq: "monthly" },
    { path: "/about", priority: 0.7, changeFreq: "monthly" },
    { path: "/contact", priority: 0.9, changeFreq: "monthly" },
  ];

  return routes.map(({ path, priority, changeFreq }) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
  }));
}
