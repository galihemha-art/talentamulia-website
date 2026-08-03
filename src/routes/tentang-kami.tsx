import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, ShieldCheck, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Talenta Mulia" },
      {
        name: "description",
        content:
          "Dari biro psikologi lokal di Sidoarjo menjadi pusat konsultasi psikologi & human capital terintegrasi kelas nasional.",
      },
      { property: "og:title", content: "Tentang Kami — Talenta Mulia" },
      {
        property: "og:description",
        content:
          "Dari biro psikologi lokal di Sidoarjo menjadi pusat konsultasi psikologi & human capital terintegrasi kelas nasional.",
      },
    ],
  }),
  component: Page,
});

const MISI = [
  "Menghadirkan layanan psikologi dan kesehatan yang beretika, hangat, dan mudah dijangkau bagi setiap individu.",
  "Mendampingi organisasi membangun sistem human capital yang sehat, adil, dan berkelanjutan.",
  "Mengembangkan pemimpin melalui coaching dan program pengembangan berbasis bukti ilmiah.",
  "Menjaga mutu layanan melalui tim multidisiplin dan pengukuran dampak yang transparan.",
];

const NILAI = [
  {
    icon: ShieldCheck,
    title: "Rahasia & Beretika",
    text: "Setiap data dan sesi dijaga sesuai kode etik psikologi serta standar kerahasiaan profesional.",
  },
  {
    icon: BrainCircuit,
    title: "Berbasis Bukti Ilmiah",
    text: "Metode dan alat ukur kami bersumber dari riset psikologi dan praktik klinis yang teruji.",
  },
  {
    icon: Users,
    title: "Tim Multidisiplin",
    text: "Psikolog, dokter, executive coach, dan praktisi human capital bekerja dalam satu tim.",
  },
  {
    icon: TrendingUp,
    title: "Dampak Terukur",
    text: "Program dirancang dengan indikator keberhasilan yang jelas dan laporan evaluasi berkala.",
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Tentang Talenta Mulia
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Membina Manusia. Menguatkan Organisasi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Cerita Kami</h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Talenta Mulia berawal sebagai biro psikologi lokal di Sidoarjo, Jawa Timur. Berangkat dari
          praktik konsultasi dan asesmen sederhana, kami tumbuh bersama kepercayaan klien dari tahun
          ke tahun.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Kini Talenta Mulia bertransformasi menjadi pusat konsultasi psikologi &amp; human capital
          terintegrasi kelas nasional — melayani korporat, rumah sakit, BUMN, instansi pemerintah,
          serta individu di Jawa Timur dan sekitarnya, dengan tim multidisiplin yang menggabungkan
          psikologi, kesehatan, coaching, dan pengembangan organisasi.
        </p>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <h2 className="text-xl font-bold text-primary">Visi</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Menjadi mitra terpercaya dalam membina manusia dan menguatkan organisasi melalui
              layanan psikologi dan human capital terintegrasi yang beretika dan berdampak nyata.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <h2 className="text-xl font-bold text-primary">Misi</h2>
            <ul className="mt-3 space-y-3">
              {MISI.map((m) => (
                <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">Nilai-Nilai Kami</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NILAI.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Kenali tim profesional kami
          </h2>
          <p className="mt-3 text-muted-foreground">
            Psikolog, dokter, dan coach bersertifikat yang siap mendampingi Anda.
          </p>
          <Link
            to="/professionals"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Lihat Tim Profesional
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
