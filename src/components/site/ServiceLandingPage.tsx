import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronRight } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";

export type ServiceLandingData = {
  /** Eyebrow label above the hero title. */
  label?: string;
  title: string;
  subtitle: string;
  breadcrumb?: { label: string; to: string };
  ctaPrimary?: { label: string; to?: string };
  ctaSecondary?: { label: string; to?: string };
  problem?: { title?: string; intro?: string; items: string[] };
  solution?: { title?: string; intro?: string; items: { title: string; text: string }[] };
  why?: { title?: string; items: { title: string; text: string }[] };
  benefits?: { title?: string; items: string[] };
  process?: { title?: string; steps: { title: string; text: string }[] };
  audience?: { title?: string; items: string[] };
  faq?: { q: string; a: string }[];
  relatedServices?: { title: string; text?: string; to: string }[];
  relatedArticles?: { title: string; excerpt?: string; to: string }[];
  finalCta?: { title: string; text?: string; primary?: string; secondary?: string };
};

function Section({
  title,
  children,
  soft,
}: {
  title?: string;
  children: React.ReactNode;
  soft?: boolean;
}) {
  return (
    <section className={soft ? "bg-surface-soft" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-14">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">{title}</h2>
        )}
        <div className={title ? "mt-8" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function ServiceLandingPage({ data }: { data: ServiceLandingData }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-brand-blue">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            {data.breadcrumb && (
              <>
                <SiteLink
                  to={data.breadcrumb.to}
                  className="transition-colors hover:text-brand-blue"
                >
                  {data.breadcrumb.label}
                </SiteLink>
                <ChevronRight className="h-3.5 w-3.5" />
              </>
            )}
            <span className="text-primary">{data.title}</span>
          </nav>

          {data.label && (
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
              {data.label}
            </p>
          )}
          <h1
            className={`${data.label ? "mt-2" : "mt-6"} max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl`}
          >
            {data.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {data.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <SiteLink
              to={data.ctaPrimary?.to ?? "/kontak"}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {data.ctaPrimary?.label ?? "Minta Proposal Corporate"}
              <ArrowRight className="h-4 w-4" />
            </SiteLink>
            <SiteLink
              to={data.ctaSecondary?.to ?? "/kontak"}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              {data.ctaSecondary?.label ?? "Jadwalkan Konsultasi"}
            </SiteLink>
          </div>
        </div>
      </section>

      {/* Problem */}
      {data.problem && (
        <Section title={data.problem.title ?? "Tantangan yang sering dihadapi"} soft>
          {data.problem.intro && (
            <p className="max-w-2xl text-muted-foreground">{data.problem.intro}</p>
          )}
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {data.problem.items.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Solution */}
      {data.solution && (
        <Section title={data.solution.title ?? "Solusi kami"}>
          {data.solution.intro && (
            <p className="max-w-2xl text-muted-foreground">{data.solution.intro}</p>
          )}
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.solution.items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* Why Talenta Mulia */}
      {data.why && (
        <Section title={data.why.title ?? "Mengapa Talenta Mulia"} soft>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.why.items.map((item) => (
              <article key={item.title} className="rounded-2xl bg-background p-6 shadow-soft">
                <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* Benefits */}
      {data.benefits && (
        <Section title={data.benefits.title ?? "Manfaat yang Anda dapatkan"}>
          <ul className="grid gap-3 md:grid-cols-2">
            {data.benefits.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-blue" />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Process */}
      {data.process && (
        <Section title={data.process.title ?? "Proses kerja"} soft>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-background p-6 shadow-soft">
                <span className="font-wordmark text-3xl text-gradient-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* Audience */}
      {data.audience && (
        <Section title={data.audience.title ?? "Untuk siapa layanan ini"}>
          <div className="flex flex-wrap gap-3">
            {data.audience.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-secondary px-5 py-2 text-sm font-medium text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      {data.faq && data.faq.length > 0 && (
        <Section title="Pertanyaan yang sering diajukan" soft>
          <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {data.faq.map((item, i) => (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left text-sm font-semibold text-primary"
                >
                  {item.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <p className="px-7 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Related services */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <Section title="Layanan terkait">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.relatedServices.map((item) => (
              <SiteLink
                key={item.to}
                to={item.to}
                className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                {item.text && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  Selengkapnya{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </SiteLink>
            ))}
          </div>
        </Section>
      )}

      {/* Related articles */}
      {data.relatedArticles && data.relatedArticles.length > 0 && (
        <Section title="Artikel terkait" soft>
          <div className="grid gap-5 md:grid-cols-3">
            {data.relatedArticles.map((item) => (
              <SiteLink
                key={item.to}
                to={item.to}
                className="group block rounded-2xl bg-background p-6 shadow-soft"
              >
                <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                {item.excerpt && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  Baca artikel{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </SiteLink>
            ))}
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section>
        <div className="rounded-3xl bg-primary px-8 py-12 text-primary-foreground md:px-12">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            {data.finalCta?.title ?? "Siap memulai bersama Talenta Mulia?"}
          </h2>
          <p className="mt-4 max-w-xl text-sm text-primary-foreground/75">
            {data.finalCta?.text ?? "Mulai dengan konsultasi awal bersama tim profesional kami."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {data.finalCta?.primary ?? "Minta Proposal Corporate"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              {data.finalCta?.secondary ?? "Jadwalkan Konsultasi"}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
