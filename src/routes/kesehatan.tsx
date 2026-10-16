import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd, medicalOrganizationSchema } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, ClipboardCheck, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/kesehatan")({
  head: () => ({
    meta: [
      { title: "Konsultasi Kesehatan & Akreditasi RS — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Konsultasi manajemen untuk institusi kesehatan: pendampingan akreditasi rumah sakit, tata kelola klinis, dan mutu layanan kesehatan.",
      },
      { property: "og:title", content: "Konsultasi Kesehatan & Akreditasi RS — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        property: "og:description",
        content:
          "Konsultasi manajemen untuk institusi kesehatan: pendampingan akreditasi rumah sakit, tata kelola klinis, dan mutu layanan kesehatan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/kesehatan"),
    ],
    links: [canonicalLink("/kesehatan")],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Konsultasi Kesehatan", path: "/kesehatan" }])),
      jsonLd(medicalOrganizationSchema("/kesehatan")),
    ],
  }),
  component: Page,
});

const LAYANAN = [
  {
    icon: ClipboardCheck,
    title: "Pendampingan Akreditasi Rumah Sakit",
    text: "Persiapan dokumen, pembinaan pokja, simulasi survei, dan pendampingan hingga penilaian akreditasi.",
  },
  {
    icon: Stethoscope,
    title: "Tata Kelola Klinis (Clinical Governance)",
    text: "Penataan kredensial, panduan praktik klinis, manajemen risiko, dan budaya keselamatan pasien.",
  },
  {
    icon: Activity,
    title: "Peningkatan Mutu Layanan Kesehatan",
    text: "Penyusunan indikator mutu, audit klinis, survei kepuasan pasien, dan program perbaikan berkelanjutan.",
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Konsultasi Kesehatan
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Konsultasi manajemen bagi rumah sakit, klinik, dan organisasi untuk mutu layanan yang
            terukur dan tata kelola yang kuat. Ini adalah konsultasi manajemen, bukan layanan medis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {LAYANAN.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-semibold text-primary">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Layanan terkait
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Program yang sering berjalan beriringan dengan konsultasi kesehatan untuk institusi dan
          organisasi.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            {
              slug: "medical-wellness",
              title: "Program Edukasi Kesehatan & Wellness Karyawan",
              text: "Edukasi kesehatan, seminar gaya hidup sehat, dan integrasi well-being fisik dan mental.",
            },
            {
              slug: "kesejahteraan-karyawan",
              title: "Kesejahteraan Karyawan",
              text: "Menjaga kesehatan mental dan produktivitas tim melalui skrining, konseling, dan pencegahan burnout.",
            },
          ].map((l) => (
            <Link
              key={l.slug}
              to="/layanan/$slug"
              params={{ slug: l.slug }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
            >
              <h3 className="font-heading text-lg font-semibold text-primary">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                Selengkapnya
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t border-border px-5 py-16 text-center md:py-20">

        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Butuh pendampingan untuk fasilitas kesehatan Anda?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Kami menyusun program sesuai kondisi dan target akreditasi institusi Anda.
        </p>
        <Link
          to="/kontak"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Konsultasikan Kebutuhan Anda
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
