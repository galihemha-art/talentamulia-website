import { canonicalLink, ogUrl } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarClock, Clock } from "lucide-react";
import { ARTIKEL, formatTanggal, readingTime, wordCount } from "@/lib/artikel-data";
import { AUTHORS } from "@/lib/authors";
import { articleSchema, breadcrumbSchema, faqSchema, jsonLd } from "@/lib/structured-data";
import { clusterForArticle } from "@/lib/topic-clusters";
import { ArticleEntityBlock, ArticleFramework } from "@/components/site/ArticleFramework";
import {
  fetchArticleBySlug,
  fetchPublishedArticles,
  isValidImageUrl,
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
            image: a.image,
          }),
        ),
      );
      if (a.enhancement?.modules.faq !== false && a.faqs?.length) {
        scripts.push(jsonLd(faqSchema(a.faqs)));
      }
    }
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        ...(a && isValidImageUrl(a.image)
          ? [
              { property: "og:image", content: a.image },
              { name: "twitter:image", content: a.image },
            ]
          : []),
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
  const editorialAuthor = artikel.enhancement?.author;
  const reviewer = artikel.enhancement?.reviewer;
  const cluster = clusterForArticle(artikel);
  const related: ArtikelView[] = pool
    .filter((a) => a.slug !== artikel.slug && (!cluster || cluster.kategori.includes(a.kategori)))
    .slice(0, 3);



  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-5 py-12 md:py-20">
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-primary md:text-5xl">
            {artikel.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{artikel.excerpt}</p>
          <ArticleEntityBlock article={artikel} />

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <span>
              Ditulis oleh <strong className="font-semibold text-primary">{artikel.authorName}</strong>
            </span>
            {artikel.reviewerName ? (
              <span>
                Ditinjau oleh <strong className="font-semibold text-primary">{artikel.reviewerName}</strong>
              </span>
            ) : null}
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

      <article className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        {isValidImageUrl(artikel.image) ? (
          <img
            src={artikel.image}
            alt={artikel.imageAlt || artikel.title}
            fetchPriority="high"
            decoding="async"
            className="mb-12 aspect-[16/9] w-full rounded-xl object-cover md:mb-16"
          />
        ) : null}
        <div className="mx-auto max-w-3xl">
          {artikel.source === "wordpress" && artikel.contentHtml ? (
            <div
              className="article-rich text-[1.05rem] leading-[1.85] text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: artikel.contentHtml }}
            />
          ) : (
            <div className="space-y-5 text-[1.05rem] leading-[1.85]">
              {artikel.paragraphs.map((p) => (
                <p key={p} className="text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          )}


        {/* Author box */}
        <section aria-labelledby="article-byline" className="mt-14 border-y border-border py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          {author ? (
            <img
              src={author.photo}
              alt={`Foto ${author.name}`}
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              className="h-20 w-20 shrink-0 rounded-full object-cover"
            />
          ) : null}
          <div>
              <p id="article-byline" className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Ditulis oleh
            </p>
            <h2 className="mt-1 text-lg font-bold text-primary">
              {editorialAuthor?.name ?? author?.name ?? artikel.authorName}
            </h2>
            {editorialAuthor?.role || editorialAuthor?.credentials ? (
              <p className="text-sm text-brand-blue">{[editorialAuthor.role, editorialAuthor.credentials].filter(Boolean).join(" · ")}</p>
            ) : author ? <p className="text-sm text-brand-blue">{author.role}</p> : null}
            {editorialAuthor?.profileUrl ? (
              <a href={editorialAuthor.profileUrl} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                Lihat profil penulis <ArrowRight className="h-4 w-4" />
              </a>
            ) : author ? (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{author.bio}</p>
            ) : null}
            {author ? (
              <Link
                to="/professionals"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
              >
                Lihat profil tim profesional <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
          </div>
          {artikel.reviewerName ? (
            <div className="mt-5 border-t border-border pt-5 text-sm text-muted-foreground">
              Ditinjau oleh <strong className="text-primary">{artikel.reviewerName}</strong>
              {reviewer?.credentials || reviewer?.role ? ` · ${[reviewer.role, reviewer.credentials].filter(Boolean).join(" · ")}` : null}
              {reviewer?.profileUrl ? (
                <a href={reviewer.profileUrl} className="ml-2 font-semibold text-brand-blue underline underline-offset-4">Lihat profil</a>
              ) : null}
            </div>
          ) : null}
          <p className="mt-4 text-xs text-muted-foreground">
            Diperbarui <time dateTime={artikel.updatedAt}>{formatTanggal(artikel.updatedAt)}</time>
          </p>
        </section>

        {related.length > 0 ? (
          <div className="mt-14">
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
        </div>

        <ArticleFramework
          article={artikel}
          references={artikel.references ?? []}
          faqs={artikel.faqs ?? []}
        />

        <div className="mx-auto max-w-3xl">
          <Link
            to="/artikel"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
          >
            <ArrowLeft className="h-4 w-4" /> Kembali ke daftar artikel
          </Link>
        </div>
      </article>
    </>
  );
}
