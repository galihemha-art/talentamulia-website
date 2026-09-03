import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-konsultasi.webp";
import { AUTHORS, type AuthorId } from "@/lib/authors";

export type LandingCard = { judul: string; teks: string };
export type LandingLink = { title: string; teks: string; to: string; params?: { slug: string } };

export type SeoLandingConfig = {
  eyebrow: string;
  breadcrumb: string;
  h1: string;
  lead: string;
  heroAlt: string;
  waUrl: string;
  chips?: string[];
  quickAnswer: { heading: string; paragraphs: string[] };
  siapa: { heading: string; intro?: string; items: LandingCard[] };
  kebutuhan: { heading: string; intro?: string; items: LandingCard[] };
  topik: { heading: string; intro?: string; items: LandingCard[] };
  manfaat: { heading: string; intro?: string; items: string[] };
  proses: { heading: string; intro?: string; items: LandingCard[] };
  mode?: { heading: string; online: string[]; tatapMuka: string[]; catatan?: string };
  psikolog?: { heading: string; intro?: string; ids: AuthorId[] };
  faq: { heading: string; items: { q: string; a: string }[] };
  catatan: { heading: string; paragraphs: string[] };
  terkait: { heading: string; intro?: string; items: LandingLink[] };
  cta: { heading: string; teks: string };
};

const CHIP_DEFAULT = ["Rahasia & Beretika", "Online & Tatap Muka", "Didampingi Psikolog"];

function CardGrid({ items, cols = 3 }: { items: LandingCard[]; cols?: 3 | 4 }) {
  return (
    <div
      className={`mt-8 grid gap-5 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
    >
      {items.map((item) => (
        <article key={item.judul} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="font-heading text-base font-semibold text-primary">{item.judul}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.teks}</p>
        </article>
      ))}
    </div>
  );
}

const H2 = "font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl";

export function SeoLandingPage({ config: c }: { config: SeoLandingConfig }) {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-brand-blue">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-primary">{c.breadcrumb}</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                {c.eyebrow}
              </p>
              <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
                {c.h1}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.lead}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/kontak"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Buat Janji Konsultasi
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={c.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Tanya via WhatsApp
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {(c.chips ?? CHIP_DEFAULT).map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                  >
                    <ShieldCheck className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <img
                src={heroImage}
                alt={c.heroAlt}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick answer */}
      <section aria-labelledby="definisi" className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h2 id="definisi" className={H2}>
          {c.quickAnswer.heading}
        </h2>
        <div className="mt-6 space-y-5 rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
          {c.quickAnswer.paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Kebutuhan / tanda */}
      <section aria-labelledby="kebutuhan" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 id="kebutuhan" className={H2}>
            {c.kebutuhan.heading}
          </h2>
          {c.kebutuhan.intro && (
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              {c.kebutuhan.intro}
            </p>
          )}
          <CardGrid items={c.kebutuhan.items} cols={4} />
        </div>
      </section>

      {/* Siapa yang cocok */}
      <section aria-labelledby="siapa" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2 id="siapa" className={H2}>
          {c.siapa.heading}
        </h2>
        {c.siapa.intro && (
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{c.siapa.intro}</p>
        )}
        <CardGrid items={c.siapa.items} />
      </section>

      {/* Topik */}
      <section aria-labelledby="topik" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 id="topik" className={H2}>
            {c.topik.heading}
          </h2>
          {c.topik.intro && (
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{c.topik.intro}</p>
          )}
          <CardGrid items={c.topik.items} cols={4} />
        </div>
      </section>

      {/* Manfaat */}
      <section aria-labelledby="manfaat" className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h2 id="manfaat" className={H2}>
          {c.manfaat.heading}
        </h2>
        {c.manfaat.intro && (
          <p className="mt-3 leading-relaxed text-muted-foreground">{c.manfaat.intro}</p>
        )}
        <ul className="mt-7 space-y-3">
          {c.manfaat.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Proses */}
      <section aria-labelledby="proses" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 id="proses" className={H2}>
            {c.proses.heading}
          </h2>
          {c.proses.intro && (
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{c.proses.intro}</p>
          )}
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.proses.items.map((step, i) => (
              <li key={step.judul} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="font-heading text-sm font-bold tracking-[0.2em] text-brand-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-base font-semibold text-primary">
                  {step.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.teks}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Online vs tatap muka */}
      {c.mode && (
        <section aria-labelledby="mode" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 id="mode" className={H2}>
            {c.mode.heading}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
                <MonitorSmartphone className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-primary">Sesi Online</h3>
              <ul className="mt-4 space-y-2.5">
                {c.mode.online.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
                <Users className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                Sesi Tatap Muka di Sidoarjo
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.mode.tatapMuka.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          {c.mode.catatan && (
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.mode.catatan}</p>
          )}
        </section>
      )}

      {/* Psikolog */}
      {c.psikolog && (
        <section aria-labelledby="psikolog" className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
            <h2 id="psikolog" className={H2}>
              {c.psikolog.heading}
            </h2>
            {c.psikolog.intro && (
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {c.psikolog.intro}
              </p>
            )}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.psikolog.ids.map((id) => {
                const a = AUTHORS[id];
                return (
                  <article
                    key={id}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <img
                      src={a.photo}
                      alt={`Foto ${a.name}, ${a.jobTitle} di Talenta Mulia`}
                      width={96}
                      height={96}
                      loading="lazy"
                      className="h-20 w-20 rounded-2xl object-cover"
                    />
                    <h3 className="mt-4 font-heading text-base font-semibold text-primary">
                      {a.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-blue">{a.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.bio}</p>
                  </article>
                );
              })}
            </div>
            <Link
              to="/professionals"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
            >
              Lihat seluruh tim profesional
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section aria-labelledby="faq" className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h2 id="faq" className={H2}>
          {c.faq.heading}
        </h2>
        <div className="mt-8 space-y-3">
          {c.faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none font-heading text-base font-semibold text-primary marker:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Catatan */}
      <section aria-labelledby="catatan" className="mx-auto max-w-4xl px-5 pb-14 md:pb-16">
        <div className="rounded-3xl border border-border bg-secondary/40 p-7">
          <h2 id="catatan" className="font-heading text-xl font-bold text-primary">
            {c.catatan.heading}
          </h2>
          {c.catatan.paragraphs.map((p) => (
            <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Terkait */}
      <section aria-labelledby="terkait" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 id="terkait" className={H2}>
            {c.terkait.heading}
          </h2>
          {c.terkait.intro && (
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              {c.terkait.intro}
            </p>
          )}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.terkait.items.map((item) => (
              <Link
                key={item.to + (item.params?.slug ?? "")}
                to={item.to}
                params={item.params}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
              >
                <h3 className="font-heading text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.teks}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  Selengkapnya
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="cta" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 id="cta" className={H2}>
                {c.cta.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.cta.teks}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/kontak"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Buat Janji Konsultasi
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={c.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>

            <address className="not-italic rounded-3xl border border-border bg-card p-7 text-sm leading-relaxed text-muted-foreground shadow-sm">
              <p className="flex items-center gap-2 font-heading text-base font-semibold text-primary">
                <UserRound className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                Talenta Mulia
              </p>
              <p className="mt-3">
                Jl. Raya Gadung No.5, Margomulyo, Wage, Kec. Taman, Sidoarjo, Jawa Timur
              </p>
              <p className="mt-2">
                Telepon:{" "}
                <a href="tel:+6282132990498" className="hover:text-brand-blue">
                  +62 821 3299 0498
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@talentamulia.co.id" className="hover:text-brand-blue">
                  info@talentamulia.co.id
                </a>
              </p>
              <p className="mt-2">Senin–Jumat, 09.00–16.00 WIB</p>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
