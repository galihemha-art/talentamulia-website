import { canonicalLink, ogUrl } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarClock, Clock } from "lucide-react";
import { ARTIKEL, formatTanggal, readingTime, wordCount } from "@/lib/artikel-data";
import { AUTHORS } from "@/lib/authors";
import { articleSchema, breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { clusterForArticle } from "@/lib/topic-clusters";
import { SiteLink } from "@/components/site/SiteLink";
import { serviceTitle } from "@/lib/topic-clusters";
import {
  fetchArticleBySlug,
  fetchPublishedArticles,
  localToView,
  type ArtikelView,
} from "@/lib/wordpress";

export const Route = createFileRoute("/artikel/$slug")({
  loader: async ({ params }) => {
    const wp = await fetchArticleBySlug(params.slug);
    if (wp) {
      const all = await fetchPublishedArticles();
      return { artikel: wp, pool: all.length > 0 ? all : [wp] };
    }
    const local = ARTIKEL.find((a) => a.slug === params.slug);
    return {
      artikel: local ? localToView(local) : null,
      pool: ARTIKEL.map(localToView),
    };
  },
  head: ({ params, loaderData }) => {
    const a = loaderData?.artikel ?? null;
    const title = a ? `${a.title} — Talenta Mulia Sidoarjo, Jawa Timur` : "Artikel — Talenta Mulia Sidoarjo, Jawa Timur";
    const desc = a?.excerpt ?? "Artikel dari Talenta Mulia.";
    const path = `/artikel/${params.slug}`;
    const scripts = [
      jsonLd(
        breadcrumbSchema([
          { name: "Artikel", path: "/artikel" },
          { name: a?.title ?? "Artikel", path },
        ]),
      ),
    ];
    if (a) {
      scripts.push(
        jsonLd(
          articleSchema({
            title: a.title,
            description: a.excerpt,
            path,
            authorId: a.authorId,
            authorName: a.authorName,
            publishedAt: a.publishedAt,
            updatedAt: a.updatedAt,
            section: a.kategori,
            wordCount: wordCount(a),
          }),
        ),
      );
    }
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(a
          ? [
              { property: "article:published_time", content: a.publishedAt },
              { property: "article:modified_time", content: a.updatedAt },
              { property: "article:section", content: a.kategori },
              { name: "author", content: a.authorName },
            ]
          : []),
        ogUrl(path),
      ],
      links: [canonicalLink(path)],
      scripts,
    };
  },
  component: Page,
});

function Page() {
  const { artikel, pool } = Route.useLoaderData();

  if (!artikel) {
    return (
      <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
        <h1 className="text-3xl font-extrabold text-primary">Artikel tidak ditemukan</h1>
        <Link
          to="/artikel"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke daftar artikel
        </Link>
      </section>
    );
  }

  const author = artikel.authorId ? AUTHORS[artikel.authorId] : null;
  const cluster = clusterForArticle(artikel as unknown as { kategori: string } as never);
  const related: ArtikelView[] = pool
    .filter((a) => a.slug !== artikel.slug && (!cluster || cluster.kategori.includes(a.kategori)))
    .slice(0, 3);
  const relatedServices = (cluster?.layanan ?? []).slice(0, 3);


  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-brand-blue">
              Beranda
            </Link>
            <span className="mx-2">&gt;</span>
            <Link to="/artikel" className="hover:text-brand-blue">
              Artikel
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-primary">{artikel.kategori}</span>
          </nav>

          <span className="mt-6 inline-block rounded-full bg-card px-3 py-1 text-xs font-semibold text-brand-blue">
            {artikel.kategori}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-primary md:text-4xl">
            {artikel.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{artikel.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {readingTime(artikel)} menit baca
            </span>
            <span className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4" /> Diperbarui{" "}
              <time dateTime={artikel.updatedAt}>{formatTanggal(artikel.updatedAt)}</time>
            </span>
            <span>
              Dipublikasikan{" "}
              <time dateTime={artikel.publishedAt}>{formatTanggal(artikel.publishedAt)}</time>
            </span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-14 md:py-16">
        <div className="space-y-5">
          {artikel.paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        {/* Author box */}
        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm sm:flex-row sm:items-start">
          <img
            src={author.photo}
            alt={`Foto ${author.name}`}
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            className="h-20 w-20 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Ditulis oleh
            </p>
            <h2 className="mt-1 text-lg font-bold text-primary">{author.name}</h2>
            <p className="text-sm text-brand-blue">{author.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{author.bio}</p>
            <Link
              to="/professionals"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
            >
              Lihat profil tim profesional <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {relatedServices.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-lg font-bold text-primary">Layanan Terkait</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedServices.map((s) => (
                <li key={s}>
                  <SiteLink
                    to={`/layanan/${s}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-primary transition-colors hover:border-brand-blue"
                  >
                    {serviceTitle(s)} <ArrowRight className="h-4 w-4 text-brand-blue" />
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {related.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-lg font-bold text-primary">Artikel Terkait</h2>
            <ul className="mt-4 grid gap-3">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link
                    to="/artikel/$slug"
                    params={{ slug: a.slug }}
                    className="block rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-brand-blue"
                  >
                    <span className="text-xs font-semibold text-brand-blue">{a.kategori}</span>
                    <span className="mt-1 block text-sm font-semibold text-primary">{a.title}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {readingTime(a)} menit baca
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-12 rounded-2xl border border-border bg-card p-7 shadow-sm">
          <h2 className="text-xl font-bold text-primary">
            Ingin menerapkan program ini di organisasi Anda?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tim kami siap menyusun rancangan program sesuai kebutuhan dan jumlah peserta Anda.
          </p>
          <Link
            to="/kontak"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Hubungi Kami <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Link
          to="/artikel"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke daftar artikel
        </Link>
      </article>
    </>
  );
}
