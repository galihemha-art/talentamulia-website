import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Artikel } from "@/lib/artikel-data";
import type { ArtikelCardData } from "@/lib/wordpress";
import { SiteLink } from "@/components/site/SiteLink";
import {
  featuredArticles,
  latestInsights,
  relatedArticlesForService,
  relatedServicesForService,
} from "@/lib/topic-clusters";

/** Existing article card look — unchanged, just reused. */
export function ArtikelCard({ a }: { a: ArtikelCardData }) {

  return (
    <Link
      to="/artikel/$slug"
      params={{ slug: a.slug }}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
        {a.kategori}
      </span>
      <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-primary">
        {a.title}
      </h3>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {a.excerpt}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
        Baca artikel
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function Block({
  title,
  subtitle,
  soft,
  children,
}: {
  title: string;
  subtitle?: string;
  soft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={soft ? "border-t border-border bg-secondary/40" : "border-t border-border"}>
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function ArtikelGrid({ items }: { items: Artikel[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => (
        <ArtikelCard key={a.slug} a={a} />
      ))}
    </div>
  );
}

/**
 * Topic-cluster block rendered on every service page: related articles,
 * sibling services, latest insights, and featured articles.
 */
export function ServiceTopicClusters({
  slug,
  articles,
}: {
  slug: string;
  /** Override for related articles; defaults to the service's topic cluster. */
  articles?: Artikel[] | undefined;
}) {
  const related = articles ?? relatedArticlesForService(slug, 3);
  const services = relatedServicesForService(slug, 3);
  const latest = latestInsights(3).filter((a) => !related.some((r) => r.slug === a.slug));
  const featured = featuredArticles(2).filter(
    (a) => !related.some((r) => r.slug === a.slug) && !latest.some((l) => l.slug === a.slug),
  );

  return (
    <>
      {related.length > 0 && (
        <Block title="Artikel terkait" subtitle="Wawasan dari klaster topik layanan ini." soft>
          <ArtikelGrid items={related} />
        </Block>
      )}

      {services.length > 0 && (
        <Block title="Layanan terkait">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <SiteLink
                key={s.to}
                to={s.to}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="font-heading text-base font-semibold text-primary">{s.title}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-brand-blue transition-transform group-hover:translate-x-1" />
              </SiteLink>
            ))}
          </div>
        </Block>
      )}

      {latest.length > 0 && (
        <Block title="Wawasan terbaru" soft>
          <ArtikelGrid items={latest} />
        </Block>
      )}

      {featured.length > 0 && (
        <Block title="Artikel pilihan">
          <ArtikelGrid items={featured} />
        </Block>
      )}
    </>
  );
}
