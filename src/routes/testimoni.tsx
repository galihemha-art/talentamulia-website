import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/testimoni")({
  head: () => ({
    meta: [
      { title: "Testimoni Klien Talenta Mulia — Sidoarjo & Jawa Timur" },
      {
        name: "description",
        content:
          "Cerita klien Talenta Mulia dari sektor manufaktur, rumah sakit, keuangan, pendidikan, dan pemerintahan.",
      },
      { property: "og:title", content: "Testimoni Klien Talenta Mulia — Sidoarjo & Jawa Timur" },
      {
        property: "og:description",
        content:
          "Cerita klien Talenta Mulia dari sektor manufaktur, rumah sakit, keuangan, pendidikan, dan pemerintahan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const TESTIMONI = [
  {
    quote:
      "Proses assessment berjalan rapi dan hasilnya benar-benar membantu kami mengambil keputusan promosi dengan lebih objektif.",
    name: "HR Director",
    role: "Perusahaan Manufaktur Nasional",
  },
  {
    quote:
      "Pendampingan tim Talenta Mulia meningkatkan kualitas komunikasi antar unit dan menurunkan tingkat kelelahan kerja staf kami.",
    name: "Direktur Rumah Sakit",
    role: "Rumah Sakit Swasta, Jawa Timur",
  },
  {
    quote:
      "Program kepemimpinannya praktis dan relevan. Para manajer kami langsung menerapkannya di lapangan.",
    name: "Head of Talent",
    role: "Institusi Keuangan",
  },
  {
    quote:
      "Program Masa Persiapan Pensiun membuat karyawan senior kami jauh lebih tenang. Pendekatan psikologis dan pemeriksaan kesehatannya terasa lengkap.",
    name: "Manajer SDM",
    role: "Industri Manufaktur, Sidoarjo",
  },
  {
    quote:
      "Pelatihan parenting dan kesehatan mental untuk guru kami dibawakan dengan hangat dan aplikatif. Suasana sekolah terasa lebih suportif setelahnya.",
    name: "Kepala Sekolah",
    role: "Sekolah Menengah Swasta, Surabaya",
  },
  {
    quote:
      "Asesmen kompetensi pegawai berjalan tertib dan transparan. Laporannya mudah dipahami sebagai dasar penataan jabatan.",
    name: "Kepala Bagian Kepegawaian",
    role: "Instansi Pemerintah Daerah, Jawa Timur",
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Apa Kata Klien Kami
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Pengalaman organisasi dan individu yang telah bekerja sama dengan Talenta Mulia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONI.map((t) => (
            <figure
              key={t.quote}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="h-7 w-7 text-brand-blue" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="block font-semibold text-primary">{t.name}</span>
                <span className="block text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Mulai Kerja Sama dengan Kami
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
