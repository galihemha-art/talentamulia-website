import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import { ArtikelGrid } from "@/components/site/TopicClusters";
import { ARTIKEL } from "@/lib/artikel-data";
import { fetchPublishedArticles, localToView, type ArtikelView } from "@/lib/wordpress";
import { TOPIC_CLUSTERS, serviceTitle } from "@/lib/topic-clusters";

export const Route = createFileRoute("/artikel/")({
  loader: async () => {
    const wp = await fetchPublishedArticles();
    const items: ArtikelView[] = wp.length > 0 ? wp : ARTIKEL.map(localToView);
    return { items };
  },
  head: () => ({
    meta: [
      { title: "Artikel & Wawasan Psikologi Kerja — Talenta Mulia Jawa Timur" },
      {
        name: "description",
        content:
          "Wawasan seputar masa persiapan pensiun, psikologi kerja, dan pengembangan manusia dari tim Talenta Mulia.",
      },
      { property: "og:title", content: "Artikel & Wawasan Psikologi Kerja — Talenta Mulia Jawa Timur" },
      {
        property: "og:description",
        content:
          "Wawasan seputar masa persiapan pensiun, psikologi kerja, dan pengembangan manusia dari tim Talenta Mulia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/artikel"),
    ],
    links: [canonicalLink("/artikel")],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Artikel", path: "/artikel" }])),
    ],
  }),
  component: Page,
});

function Page() {
  const { items } = Route.useLoaderData();
  const featured = items.slice(0, 2);
  const latest = items.slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Artikel &amp; Wawasan
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Catatan praktis dari psikolog, dokter, dan coach kami untuk organisasi dan individu.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-5 pt-16">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Artikel pilihan
        </h2>
        <div className="mt-8">
          <ArtikelGrid items={featured} />
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-6xl px-5 pt-14">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Wawasan terbaru
        </h2>
        <div className="mt-8">
          <ArtikelGrid items={latest} />
        </div>
      </section>

      {/* Topic clusters */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Jelajahi berdasarkan topik
        </h2>
        <div className="mt-8 space-y-12">
          {TOPIC_CLUSTERS.map((cluster) => {
            const clusterItems = items.filter((a) => cluster.kategori.includes(a.kategori));
            const services = cluster.layanan.slice(0, 4);
            return (
              <div key={cluster.id}>
                <h3 className="font-heading text-xl font-semibold text-primary">{cluster.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cluster.description}</p>

                {clusterItems.length > 0 ? (
                  <div className="mt-6">
                    <ArtikelGrid items={clusterItems} />
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Artikel untuk topik ini sedang disiapkan.
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {[
                    ...services.map((s) => ({ title: serviceTitle(s), to: `/layanan/${s}` })),
                    ...(cluster.halaman ?? []),
                  ].map((s) => (
                    <SiteLink
                      key={s.to}
                      to={s.to}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-background"
                    >
                      {s.title} <ArrowRight className="h-3.5 w-3.5 text-brand-blue" />
                    </SiteLink>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </>
  );
}
