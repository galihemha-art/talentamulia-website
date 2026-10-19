import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import { ArtikelGrid } from "@/components/site/TopicClusters";
import { ARTIKEL } from "@/lib/artikel-data";
import { fetchPublishedArticles, fetchPublishedArticlePage, localToView, type ArtikelView } from "@/lib/wordpress";
import { TOPIC_CLUSTERS, serviceTitle } from "@/lib/topic-clusters";

import { articlePageNumber, articlePageExists, EXCLUDED_ARTICLE_SLUG } from "@/lib/seo-route-rules";
import { ErrorComponent, NotFoundComponent } from "@/components/site/RouteBoundaries";

export const Route = createFileRoute("/artikel/")({
  validateSearch: (search: Record<string, unknown>) => ({ page: search["page"] }),
  loaderDeps: ({ search }) => ({ page: search.page }),
  beforeLoad: ({ search }) => {
    if (articlePageNumber(search.page) === null) throw notFound();
  },
  loader: async ({ deps }) => {
    const page = articlePageNumber(deps.page);
    if (page === null) throw notFound();
    const [wp, paginated] = await Promise.all([fetchPublishedArticles(), fetchPublishedArticlePage(page)]);
    if (paginated.invalidPage || !articlePageExists(page, paginated.totalPages)) throw notFound();
    const items: ArtikelView[] = (wp.length > 0 ? wp : ARTIKEL.map(localToView)).filter((a) => a.slug !== EXCLUDED_ARTICLE_SLUG);
    return { items, page, paginated };
  },
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundComponent,
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Artikel tidak ditemukan — Talenta Mulia" }, { name: "robots", content: "noindex" }] };
    const path = loaderData.page === 1 ? "/artikel" : `/artikel?page=${loaderData.page}`;
    return {
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
      ogUrl(path),
    ],
    links: [canonicalLink(path)],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Artikel", path: "/artikel" }])),
    ],
    };
  },
  component: Page,
});

function Page() {
  const { items, page, paginated } = Route.useLoaderData();
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

      <section aria-labelledby="semua-artikel" className="mx-auto max-w-6xl px-5 pb-16 md:pb-20">
        <h2 id="semua-artikel" className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">Semua Artikel</h2>
        <div className="mt-8"><ArtikelGrid items={paginated.items} /></div>
        {paginated.totalPages > 1 && (
          <nav aria-label="Pagination artikel" className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm font-semibold text-brand-blue">
            {page > 1 && <a href={`/artikel?page=${page - 1}`} className="underline-offset-4 hover:underline">Sebelumnya</a>}
            {Array.from({ length: paginated.totalPages }, (_, index) => index + 1).map((number) => (
              <a key={number} href={`/artikel?page=${number}`} aria-current={number === page ? "page" : undefined} className={number === page ? "text-primary underline underline-offset-4" : "underline-offset-4 hover:underline"}>{number}</a>
            ))}
            {page < paginated.totalPages && <a href={`/artikel?page=${page + 1}`} className="underline-offset-4 hover:underline">Berikutnya</a>}
          </nav>
        )}
      </section>

    </>
  );
}
