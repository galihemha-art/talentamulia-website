import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronRight, FileCheck2, Info } from "lucide-react";
import { CtaPenutup } from "@/components/site/LayananDetailPage";
import { FAQ_KORPORAT } from "@/lib/layanan-korporat-data";
import type { PemeriksaanDetail } from "@/lib/pemeriksaan-psikologi-data";

export function PemeriksaanPsikologiDetailPage({ data }: { data: PemeriksaanDetail }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* Breadcrumb + Hero */}
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
            <Link to="/solusi-korporat" className="transition-colors hover:text-brand-blue">
              Layanan
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

          <Link
            to="/kontak"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Daftar Pemeriksaan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Apa itu + Untuk siapa */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
              Apa itu pemeriksaan ini
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{data.apaItu}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
              Untuk siapa
            </p>
            <ul className="mt-5 space-y-4">
              {data.untukSiapa.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Metode & alat ukur */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center md:py-16">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Metode &amp; alat ukur
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{data.metode}</p>
        </div>
      </section>

      {/* Yang Anda terima */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-20">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          <FileCheck2 className="h-6 w-6 text-brand-blue" />
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-primary">
            Yang Anda terima
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{data.yangDiterima}</p>
          {data.catatan && (
            <p className="mt-5 flex gap-3 rounded-2xl bg-secondary/60 p-5 text-sm leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              <span>
                <span className="font-semibold text-primary">Catatan: </span>
                {data.catatan}
              </span>
            </p>
          )}
        </div>

        {/* Layanan terkait */}
        <div className="mt-10">
          <h3 className="font-heading text-lg font-semibold text-primary">Layanan terkait</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {data.terkait.map((t) => (
              <Link
                key={t.slug}
                to="/layanan/$slug"
                params={{ slug: t.slug }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                {t.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-16 md:pb-20">
        <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Pertanyaan yang sering diajukan
        </h2>
        <div className="mt-8 space-y-3">
          {FAQ_KORPORAT.map((faq, i) => (
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

      <CtaPenutup />
    </>
  );
}
