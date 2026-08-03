import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  BrainCircuit,
  Compass,
  HeartHandshake,
  Lock,
  Sunrise,
  Waves,
  FlaskConical,
} from "lucide-react";

export const Route = createFileRoute("/layanan-individu")({
  head: () => ({
    meta: [
      { title: "Layanan Individu & Keluarga — Talenta Mulia" },
      {
        name: "description",
        content:
          "Konseling psikologis, hipnoterapi, konseling pernikahan, parenting, penanganan stres, dan coaching karier di Sidoarjo.",
      },
      { property: "og:title", content: "Layanan Individu & Keluarga — Talenta Mulia" },
      {
        property: "og:description",
        content:
          "Konseling psikologis, hipnoterapi, konseling pernikahan, parenting, penanganan stres, dan coaching karier di Sidoarjo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const LAYANAN = [
  {
    icon: BrainCircuit,
    title: "Konseling Psikologis & Hipnoterapi",
    text: "Sesi tatap muka bersama psikolog klinis dan hypnotherapist bersertifikat untuk memahami serta mengurai akar persoalan.",
  },
  {
    icon: HeartHandshake,
    title: "Konseling Pernikahan & Keluarga",
    text: "Pendampingan pasangan dan keluarga untuk memperbaiki komunikasi, mengelola konflik, dan memulihkan kedekatan.",
  },
  {
    icon: Baby,
    title: "Dukungan Parenting & Remaja",
    text: "Konsultasi pengasuhan, tumbuh kembang, kesulitan belajar, serta pendampingan isu emosi dan pergaulan remaja.",
  },
  {
    icon: Waves,
    title: "Penanganan Stres, Kecemasan & Burnout",
    text: "Intervensi terstruktur — termasuk SEFT healing dan relaksasi — untuk memulihkan keseimbangan hidup dan kerja.",
  },
  {
    icon: Compass,
    title: "Coaching Karier & Kepercayaan Diri",
    text: "Sesi bersama executive coach untuk memetakan potensi, menentukan arah karier, dan membangun rasa percaya diri.",
  },
  {
    icon: Sunrise,
    title: "Program Masa Persiapan Pensiun",
    text: "Pendampingan personal bagi Anda yang mendekati pensiun: kesiapan mental, kesehatan, keuangan, dan aktivitas bermakna.",
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Layanan Individu &amp; Keluarga
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ruang aman untuk bertumbuh — didampingi psikolog, hypnotherapist, dan coach
            bersertifikat.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand-blue">
              <Lock className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-primary">Kerahasiaan Terjaga</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Seluruh identitas, catatan sesi, dan hasil pemeriksaan bersifat rahasia serta hanya
              digunakan untuk kepentingan layanan Anda, sesuai kode etik psikologi Indonesia.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand-blue">
              <FlaskConical className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-primary">Berbasis Bukti Ilmiah</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Metode intervensi dan alat ukur yang kami gunakan bersumber dari riset psikologi serta
              praktik klinis yang teruji, dengan tujuan dan indikator kemajuan yang jelas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Siap memulai langkah pertama?</h2>
        <p className="mt-3 text-muted-foreground">
          Ceritakan kebutuhan Anda, kami bantu menentukan layanan yang paling sesuai.
        </p>
        <Link
          to="/kontak"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Buat Janji Konsultasi
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
