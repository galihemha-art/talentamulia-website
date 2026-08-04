import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { CtaPenutup } from "@/components/site/LayananDetailPage";
import { SiteLink } from "@/components/site/SiteLink";
import { FAQ_INDUSTRI, type IndustriDetail } from "@/lib/industri-data";
import { ARTIKEL } from "@/lib/artikel-data";

export function IndustriDetailPage({ data }: { data: IndustriDetail }) {
  const [open, setOpen] = useState<number | null>(0);
  const wawasan = ARTIKEL.slice(0, 3);

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
            <Link to="/industri" className="transition-colors hover:text-brand-blue">
              Industri
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary">{data.nama}</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
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
              Ajukan Proposal untuk {data.nama}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Konsultasi Awal Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Tantangan khas sektor ini */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
              Tantangan khas sektor ini
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Pola persoalan yang paling sering kami temui saat mendampingi organisasi di sektor{" "}
              {data.nama.toLowerCase()}.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <ul className="space-y-3">
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

      {/* Layanan relevan */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Layanan yang relevan
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.layananRelevan.map((l) => (
            <SiteLink
              key={l.to}
              to={l.to}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
            >
              <span className="font-heading text-base font-semibold text-primary">{l.label}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-brand-blue transition-transform group-hover:translate-x-1" />
            </SiteLink>
          ))}
        </div>
      </section>

      {/* Paling dibutuhkan & Mengapa */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:py-20">
          {[
            { title: "Yang paling sering dibutuhkan", items: data.palingDibutuhkan },
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
          {FAQ_INDUSTRI.map((faq, i) => (
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

      {/* Wawasan terkait */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Wawasan terkait
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {wawasan.map((a) => (
              <Link
                key={a.slug}
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
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  Baca artikel
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-16" />
      <CtaPenutup />
    </>
  );
}
