import { canonicalLink, ogUrl } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, HeartHandshake, Sparkles } from "lucide-react";
import { CtaPenutup } from "@/components/site/LayananDetailPage";

export const Route = createFileRoute("/program/")({
  head: () => ({
    meta: [
      { title: "Program Unggulan — MPP, Coaching & Kesejahteraan | Talenta Mulia Sidoarjo" },
      {
        name: "description",
        content:
          "Program unggulan Talenta Mulia di Sidoarjo, Jawa Timur: Masa Persiapan Pensiun (MPP), Executive Coaching, dan Kesejahteraan Karyawan dengan pendekatan terintegrasi.",
      },
      { property: "og:title", content: "Program Unggulan Talenta Mulia — MPP, Coaching & Kesejahteraan" },
      {
        property: "og:description",
        content:
          "Program dengan pendekatan terintegrasi untuk kebutuhan spesifik organisasi dan individu di Jawa Timur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/program"),
    ],
    links: [canonicalLink("/program")],
  }),
  component: Page,
});

const PROGRAM_LAIN = [
  {
    icon: Award,
    title: "Executive Coaching",
    text: "Sesi coaching one-on-one bersama Professional Certified Coach (ICF PCC) untuk direksi dan manajer senior — memperjelas prioritas, memperkuat gaya kepemimpinan, dan mengeksekusi target strategis.",
    slug: "executive-coaching",
  },
  {
    icon: HeartHandshake,
    title: "Kesejahteraan Karyawan",
    text: "Program menyeluruh untuk menjaga kesehatan mental dan produktivitas karyawan: skrining, konseling, edukasi, hingga pencegahan burnout di tempat kerja.",
    slug: "kesejahteraan-karyawan",
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Program Unggulan Talenta Mulia
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Program dengan pendekatan terintegrasi untuk kebutuhan spesifik organisasi dan individu.
          </p>
        </div>
      </section>

      {/* Kartu unggulan: MPP */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <article className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-3.5 py-1.5 text-xs font-semibold text-white">
            <Sparkles className="h-3.5 w-3.5" /> Program Unggulan
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-primary md:text-4xl">
            Program Masa Persiapan Pensiun (MPP)
          </h2>
          <p className="mt-2 font-semibold text-brand-blue">Pensiun Bahagia, Hidup Bermakna</p>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Satu-satunya program persiapan pensiun di Jawa Timur yang menggabungkan psikologi,
            hipnoterapi/SEFT, dan keahlian medis dalam satu rangkaian — agar karyawan siap secara
            mental, emosional, dan fisik menghadapi babak baru kehidupannya.
          </p>
          <Link
            to="/program/mpp"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Pelajari Program MPP
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </section>

      {/* Program lainnya */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Program Lainnya
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PROGRAM_LAIN.map(({ icon: Icon, title, text, slug }) => (
              <article
                key={slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <Link
                  to="/layanan/$slug"
                  params={{ slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
                >
                  Selengkapnya <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-16" />
      <CtaPenutup />
    </>
  );
}
