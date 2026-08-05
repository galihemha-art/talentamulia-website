import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { CtaPenutup } from "@/components/site/LayananDetailPage";

export const Route = createFileRoute("/solusi-korporat")({
  head: () => ({
    meta: [
      { title: "Solusi Korporat & Human Capital — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Layanan konsultasi psikologi, kesehatan, dan human capital untuk korporat, rumah sakit, BUMN, dan pemerintah di Sidoarjo dan seluruh Jawa Timur.",
      },
      {
        property: "og:title",
        content: "Solusi Korporat & Human Capital — Talenta Mulia Sidoarjo, Jawa Timur",
      },
      {
        property: "og:description",
        content:
          "Layanan konsultasi psikologi, kesehatan, dan human capital untuk korporat, rumah sakit, BUMN, dan pemerintah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/solusi-korporat"),
    ],
    links: [canonicalLink("/solusi-korporat")],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Solusi Korporat", path: "/solusi-korporat" }])),
    ],
  }),
  component: Page,
});

type Item = {
  title: string;
  text: string;
  slug?: string;
  to?: "/pelatihan" | "/kesehatan";
  soon?: boolean;
};

type Kategori = {
  key: string;
  icon: typeof Briefcase;
  label: string;
  intro: string;
  items: Item[];
  extra?: { label: string; to: "/pelatihan" | "/kesehatan" };
};

const KATEGORI: Kategori[] = [
  {
    key: "hr",
    icon: Briefcase,
    label: "HR Consulting",
    intro:
      "Pendampingan strategis untuk membangun sistem human capital yang sehat dan berkelanjutan.",
    items: [
      {
        title: "Konsultasi HR",
        slug: "konsultasi-hr",
        text: "Strategi dan sistem SDM — struktur, manajemen kinerja, hingga jalur karier.",
      },
      {
        title: "Konsultasi Organisasi",
        slug: "konsultasi-organisasi",
        text: "Pengembangan organisasi: budaya kerja, manajemen perubahan, dan efektivitas tim.",
      },
      {
        title: "Coaching",
        slug: "coaching",
        text: "Pendekatan coaching bersertifikat ICF untuk pemimpin, talenta kunci, dan tim.",
      },
    ],
  },
  {
    key: "assessment",
    icon: ClipboardCheck,
    label: "Assessment",
    intro: "Pengukuran objektif untuk keputusan seleksi, promosi, dan pengembangan talenta.",
    items: [
      {
        title: "Assessment Center",
        slug: "assessment-center",
        text: "Simulasi berbasis kompetensi dengan asesor bersertifikat untuk posisi kunci.",
      },
      {
        title: "Assessment Psikologi",
        slug: "asesmen-psikologi",
        text: "Psikotes terstandar oleh psikolog berizin untuk seleksi dan pengembangan.",
      },
      {
        title: "Pemetaan Talenta",
        slug: "pemetaan-talenta",
        text: "Peta talenta 9-box sebagai dasar promosi dan perencanaan suksesi.",
      },
    ],
  },
  {
    key: "training",
    icon: GraduationCap,
    label: "Training",
    intro: "Program pengembangan yang dirancang sesuai level jabatan dan budaya organisasi.",
    items: [
      {
        title: "Pengembangan Kepemimpinan",
        slug: "pelatihan-kepemimpinan",
        text: "Program leadership untuk first-time manager hingga senior manager, dengan pendampingan penerapan.",
      },
    ],
    extra: { label: "Lihat semua Pelatihan & Seminar", to: "/pelatihan" },
  },
  {
    key: "healthcare",
    icon: HeartPulse,
    label: "Healthcare",
    intro: "Integrasi kesehatan fisik dan mental karyawan dalam satu program yang bermakna.",
    items: [
      {
        title: "Kesejahteraan Karyawan",
        slug: "kesejahteraan-karyawan",
        text: "EAP, skrining kesehatan mental, dan pencegahan burnout di tempat kerja.",
      },
      {
        title: "Medical Wellness",
        slug: "medical-wellness",
        text: "Medical check-up eksekutif, edukasi kesehatan, dan program wellness berkala.",
      },
    ],
    extra: { label: "Konsultasi Rumah Sakit", to: "/kesehatan" },
  },
  {
    key: "recruitment",
    icon: UserPlus,
    label: "Recruitment",
    intro: "Pencarian kandidat yang tepat, dari posisi staff hingga jajaran eksekutif.",
    items: [
      {
        title: "Talent Acquisition",
        slug: "talent-acquisition",
        text: "Sourcing, screening, dan asesmen kandidat untuk posisi staff hingga menengah.",
      },
      {
        title: "Executive Search",
        slug: "executive-search",
        text: "Pencarian diskret calon eksekutif dengan asesmen mendalam dan verifikasi rekam jejak.",
      },
      {
        title: "RPO (Recruitment Process Outsourcing)",
        text: "Pengelolaan sebagian atau seluruh proses rekrutmen perusahaan Anda.",
        soon: true,
      },
      {
        title: "Headhunter",
        text: "Layanan headhunting khusus untuk kebutuhan posisi spesialis.",
        soon: true,
      },
    ],
  },
];

function Page() {
  const [active, setActive] = useState(KATEGORI[0]!.key);
  const kategori = KATEGORI.find((k) => k.key === active) ?? KATEGORI[0]!;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
            Solusi Korporat
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Layanan konsultasi psikologi, kesehatan, dan human capital untuk korporat, rumah sakit,
            BUMN, dan pemerintah.
          </p>
        </div>
      </section>

      {/* Tabs kategori */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="flex flex-wrap gap-2">
          {KATEGORI.map((k) => {
            const on = k.key === active;
            return (
              <button
                key={k.key}
                type="button"
                onClick={() => setActive(k.key)}
                aria-pressed={on}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  on
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border bg-card text-primary hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                <k.icon className="h-4 w-4" />
                {k.label}
              </button>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">{kategori.intro}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kategori.items.map((item) =>
            item.soon || !item.slug ? (
              <div
                key={item.title}
                aria-disabled="true"
                className="cursor-not-allowed rounded-2xl border border-dashed border-border bg-secondary/40 p-6 opacity-70"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold text-primary">{item.title}</h3>
                  <span className="shrink-0 rounded-full bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Segera Hadir
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ) : (
              <Link
                key={item.title}
                to="/layanan/$slug"
                params={{ slug: item.slug }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
              >
                <h3 className="font-heading text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ),
          )}
        </div>

        {kategori.extra && (
          <Link
            to={kategori.extra.to}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
          >
            {kategori.extra.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </section>

      {/* Highlight MPP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <Sparkles className="mx-auto h-6 w-6 text-brand-blue" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Program Masa Persiapan Pensiun (MPP)
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Pensiun Bahagia, Hidup Bermakna
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Program unggulan kami — satu-satunya di Jawa Timur yang memadukan pendampingan
            psikologi, terapi hipnoterapi/SEFT, dan pemeriksaan medis dalam satu rangkaian. Karyawan
            yang memasuki masa persiapan pensiun dibantu menata kesiapan mental, menjaga kesehatan
            fisik, dan merancang peran baru yang bermakna setelah purnatugas.
          </p>
          <Link
            to="/program/mpp"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Pelajari Program MPP
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="pt-16 md:pt-20">
        <CtaPenutup />
      </div>
    </>
  );
}
