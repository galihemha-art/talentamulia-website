import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle2,
  HeartPulse,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/program/")({
  head: () => ({
    meta: [
      { title: "Program MPP & Coaching Unggulan di Jawa Timur — Talenta Mulia" },
      {
        name: "description",
        content:
          "Pensiun Bahagia, Hidup Bermakna (Program MPP) memadukan psikologi, hipnoterapi/SEFT, dan medis — plus Executive Coaching dan Leadership Academy.",
      },
      { property: "og:title", content: "Program MPP & Coaching Unggulan di Jawa Timur — Talenta Mulia" },
      {
        property: "og:description",
        content:
          "Pensiun Bahagia, Hidup Bermakna (Program MPP) memadukan psikologi, hipnoterapi/SEFT, dan medis — plus Executive Coaching dan Leadership Academy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const PILAR = [
  {
    icon: Brain,
    title: "Pilar Psikologi",
    text: "Pemetaan kesiapan mental, penerimaan perubahan peran, penemuan makna baru, dan perencanaan aktivitas pascapensiun.",
  },
  {
    icon: Sparkles,
    title: "Pilar Hipnoterapi & SEFT",
    text: "Menetralkan kecemasan, rasa kehilangan identitas, dan hambatan emosional melalui hipnoterapi serta SEFT healing.",
  },
  {
    icon: HeartPulse,
    title: "Pilar Medis",
    text: "Skrining kesehatan, edukasi penyakit degeneratif, dan panduan gaya hidup sehat bersama dokter konsultan kami.",
  },
];

const MANFAAT_KORPORAT = [
  "Transisi pensiun karyawan senior berjalan tenang, tanpa gejolak produktivitas.",
  "Memenuhi tanggung jawab sosial perusahaan terhadap karyawan purnabakti.",
  "Transfer pengetahuan ke generasi penerus lebih tertata.",
  "Laporan hasil program dengan indikator kesiapan yang terukur.",
];

const MANFAAT_INDIVIDU = [
  "Kesiapan mental menghadapi perubahan rutinitas dan identitas.",
  "Rencana kesehatan dan keuangan yang realistis.",
  "Dukungan keluarga yang lebih selaras dengan rencana pensiun.",
  "Aktivitas bermakna yang tetap produktif setelah purnabakti.",
];

const PROGRAM_LAIN = [
  {
    icon: Award,
    title: "Executive Coaching Program",
    text: "Sesi coaching one-on-one bersama Professional Certified Coach (ICF PCC) untuk direksi dan manajer senior: memperjelas prioritas, memperkuat gaya kepemimpinan, dan mengeksekusi target strategis.",
    points: ["8–12 sesi terstruktur", "Coaching agreement & indikator kemajuan", "Laporan progres berkala"],
  },
  {
    icon: Users,
    title: "Leadership Academy",
    text: "Program pengembangan kepemimpinan berjenjang bagi supervisor hingga level manajerial, memadukan kelas, praktik lapangan, asesmen, dan proyek perbaikan nyata di organisasi.",
    points: ["Asesmen kompetensi awal & akhir", "Modul kelas + action learning project", "Pendampingan mentor internal"],
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Program Unggulan
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Program yang kami rancang sendiri, teruji di lapangan, dan berdampak terukur.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand-blue">
            <MapPin className="h-3.5 w-3.5" /> Satu-satunya di Jawa Timur
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-primary md:text-4xl">
            Pensiun Bahagia, Hidup Bermakna
          </h2>
          <p className="mt-1 font-semibold text-brand-blue">
            Program Masa Persiapan Pensiun (MPP)
          </p>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            MPP Talenta Mulia adalah program persiapan pensiun yang memadukan tiga pendekatan dalam
            satu rangkaian: psikologi, hipnoterapi/SEFT, dan pemeriksaan medis. Kombinasi ini
            membuat peserta tidak hanya memahami apa yang akan berubah, tetapi juga benar-benar siap
            secara emosional dan fisik menjalaninya — pendekatan terpadu yang sejauh ini hanya kami
            hadirkan di Jawa Timur.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {PILAR.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-secondary/40 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-card text-brand-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold text-primary">Untuk Korporat</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Karyawan yang mendekati masa pensiun (1–3 tahun sebelum purnabakti).
              </p>
              <ul className="mt-4 space-y-2.5">
                {MANFAAT_KORPORAT.map((m) => (
                  <li key={m} className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold text-primary">Untuk Individu</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Perorangan dan pasangan yang ingin menyiapkan babak baru secara mandiri.
              </p>
              <ul className="mt-4 space-y-2.5">
                {MANFAAT_INDIVIDU.map((m) => (
                  <li key={m} className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to="/kontak"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ajukan Proposal Program MPP
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Program Lainnya</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PROGRAM_LAIN.map(({ icon: Icon, title, text, points }) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <ul className="mt-4 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
