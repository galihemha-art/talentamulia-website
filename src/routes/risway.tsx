import { createFileRoute } from "@tanstack/react-router";
import { RiswayPage } from "@/components/risway/RiswayPage";
import { canonicalLink, canonicalUrl, ogUrl } from "@/lib/seo";
import { RISWAY } from "@/lib/risway-data";

export const Route = createFileRoute("/risway")({
  head: () => ({
    meta: [
      { title: RISWAY.title },
      { name: "description", content: RISWAY.description },
      { property: "og:title", content: RISWAY.title },
      { property: "og:description", content: RISWAY.description },
      { property: "og:type", content: "website" },
      ogUrl("/risway"),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: RISWAY.title },
      { name: "twitter:description", content: RISWAY.description },
    ],
    links: [canonicalLink("/risway")],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl("/risway")}#webpage`,
      url: canonicalUrl("/risway"),
      name: RISWAY.title,
      description: RISWAY.description,
      inLanguage: "id-ID",
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Talenta Mulia", item: canonicalUrl("/") }, { "@type": "ListItem", position: 2, name: "RISWAY PRO", item: canonicalUrl("/risway") }] },
    }) }],
  }),
  component: RiswayPage,
});