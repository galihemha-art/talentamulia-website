import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { FAQ_KORPORAT, type LayananDetail } from "@/lib/layanan-korporat-data";
import type { Artikel } from "@/lib/artikel-data";
import { ServiceTopicClusters } from "@/components/site/TopicClusters";

export function LayananDetailPage({
  data,
  label,
  breadcrumb,
  ctaPrimary,
  ctaSecondary,
  faq,
  wawasan,
}: {
  data: LayananDetail;
  /** Small eyebrow label above the hero title. */
  label?: string;
  /** Overrides the middle breadcrumb entry. */
  breadcrumb?: { label: string; to: string };
  ctaPrimary?: string;
  ctaSecondary?: string;
  faq?: { q: string; a: string }[];
  wawasan?: Artikel[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const faqItems = faq ?? FAQ_KORPORAT;

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-brand-blue">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              to={(breadcrumb?.to ?? "/solusi-korporat") as "/solusi-korporat"}
              className="transition-colors hover:text-brand-blue"
            >
              {breadcrumb?.label ?? "Layanan"}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary">{data.nama}</span>
          </nav>

          {label && (
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
              {label}
            </p>
          )}
          <h1 className={`${label ? "mt-2" : "mt-6"} max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl`}>
            {data.nama}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {data.subjudul}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {ctaPrimary ?? `Minta Proposal ${data.nama}`}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              {ctaSecondary ?? "Konsultasi Gratis"}
            </Link>
          </div>
        </div>
      </section>

      {/* Tentang layanan ini */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
              Tentang layanan ini
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {data.ringkasan}
              {data.ringkasanLink && (
                <>
                  {" "}
                  {data.ringkasanLink.before}
                  <Link
                    to="/layanan/$slug"
                    params={{ slug: data.ringkasanLink.to.replace("/layanan/", "") }}
                    className="font-semibold text-brand-blue underline underline-offset-4"
                  >
                    {data.ringkasanLink.label}
                  </Link>
                  {data.ringkasanLink.after}
                </>
              )}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
              Tantangan yang sering muncul
            </p>
            <ul className="mt-5 space-y-3">
              {data.tantangan.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pendekatan kami */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center md:py-16">
          <Sparkles className="mx-auto h-6 w-6 text-brand-blue" />
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Pendekatan kami
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{data.pendekatan}</p>
        </div>
      </section>

      {/* Ruang lingkup */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Ruang lingkup layanan
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.ruangLingkup.map((item, i) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="text-sm font-semibold text-brand-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-primary">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Untuk siapa & Mengapa */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:py-20">
          {[
            { title: "Untuk siapa", items: data.untukSiapa },
            { title: "Mengapa Talenta Mulia", items: data.kenapaKami },
          ].map((block) => (
            <div key={block.title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-primary">
                {block.title}
              </h2>
              <ul className="mt-5 space-y-4">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Pertanyaan yang sering diajukan
        </h2>
        <div className="mt-8 space-y-3">
          {faqItems.map((faq, i) => (
            <div key={faq.q} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-primary">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-brand-blue transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <ServiceTopicClusters slug={data.slug} articles={wawasan} />


      <div className={wawasan && wawasan.length > 0 ? "pt-16" : ""} />
      <CtaPenutup />
    </>
  );
}

export function CtaPenutup() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 text-center">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-primary">
        Siap menguatkan tim &amp; organisasi Anda?
      </h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Bicara dengan tim multidisiplin kami — psikolog, coach, dan konsultan kesehatan. Dapatkan
        proposal khusus dalam 2 hari kerja.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link
          to="/kontak"
          className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Ajukan Proposal
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/kontak"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
        >
          Buat Janji Konsultasi
        </Link>
      </div>
    </section>
  );
}

