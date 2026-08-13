import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ARTIKEL } from "@/lib/artikel-data";
import { fetchPublishedSlugs } from "@/lib/wordpress";

import { SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL;

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const wpSlugs = await fetchPublishedSlugs();
        const articleSlugs = wpSlugs.length > 0 ? wpSlugs : ARTIKEL.map((a) => a.slug);
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/tentang-kami", changefreq: "monthly", priority: "0.8" },
          { path: "/tokoh-sentral", changefreq: "monthly", priority: "0.8" },
          { path: "/professionals", changefreq: "monthly", priority: "0.8" },
          { path: "/solusi-korporat", changefreq: "monthly", priority: "0.9" },
          { path: "/layanan-individu", changefreq: "monthly", priority: "0.9" },
          { path: "/industri", changefreq: "monthly", priority: "0.7" },
          { path: "/kesehatan", changefreq: "monthly", priority: "0.8" },
          { path: "/pelatihan", changefreq: "monthly", priority: "0.8" },
          { path: "/program", changefreq: "monthly", priority: "0.9" },
          { path: "/artikel", changefreq: "weekly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" },
          { path: "/testimoni", changefreq: "monthly", priority: "0.6" },
          { path: "/kontak", changefreq: "monthly", priority: "0.9" },
          { path: "/kebijakan-privasi", changefreq: "yearly", priority: "0.3" },
          { path: "/syarat-ketentuan", changefreq: "yearly", priority: "0.3" },
          ...["manufaktur", "kesehatan", "pendidikan", "pemerintahan", "perbankan"].map((slug) => ({
            path: `/industri/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.5",
          })),
          ...articleSlugs.map((slug) => ({
            path: `/artikel/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const seen = new Set<string>();
        const uniqueEntries = entries.filter((e) => {
          if (seen.has(e.path)) return false;
          seen.add(e.path);
          return true;
        });

        const urls = uniqueEntries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
