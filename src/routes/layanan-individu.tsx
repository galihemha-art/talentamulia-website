import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { LAYANAN_INDIVIDU, LAYANAN_INDIVIDU_LIST, KERAHASIAAN_NOTE } from "@/lib/layanan-individu-data";

export const Route = createFileRoute("/layanan-individu")({
  head: () => ({
    meta: [
      { title: "Layanan Individu & Keluarga — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Konseling psikologis, pernikahan, parenting, remaja, hipnoterapi, trauma healing, stres, depresi, dan pendampingan ABK di Sidoarjo, Jawa Timur.",
      },
      {
        property: "og:title",
        content: "Layanan Individu & Keluarga — Talenta Mulia Sidoarjo, Jawa Timur",
      },
      {
        property: "og:description",
        content:
          "Layanan psikologi untuk profesional, eksekutif, orang tua, pelajar, dan tenaga kesehatan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/layanan-individu"),
    ],
    links: [canonicalLink("/layanan-individu")],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Layanan Individu", path: "/layanan-individu" }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
            Layanan Individu &amp; Keluarga
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Profesional, eksekutif, orang tua, pelajar, dan tenaga kesehatan.
          </p>
          <div className="mt-7 flex max-w-2xl items-center gap-3 rounded-2xl bg-card p-5 shadow-sm">
            <ShieldCheck className="h-5 w-5 shrink-0 text-brand-blue" />
            <p className="text-sm leading-relaxed text-muted-foreground">{KERAHASIAAN_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LAYANAN_INDIVIDU_LIST.map((slug) => {
            const item = LAYANAN_INDIVIDU[slug]!;
            return (
              <Link
                key={slug}
                to="/layanan/$slug"
                params={{ slug }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
              >
                <h2 className="font-heading text-lg font-semibold text-primary">{item.nama}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.subjudul}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-border bg-secondary/40 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <MonitorSmartphone className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
            <p className="font-heading text-lg font-semibold text-primary">
              Ingin tahu cara konsultasi online atau offline?
            </p>
          </div>
          <Link
            to="/layanan/$slug"
            params={{ slug: "konsultasi-online-offline" }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Lihat cara konsultasi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Buat Janji Konsultasi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
