import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Users,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/solusi-korporat")({
  head: () => ({
    meta: [
      { title: "Solusi Korporat & Human Capital — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Layanan human capital, asesmen, pelatihan, healthcare, dan rekrutmen untuk korporat, rumah sakit, BUMN, dan instansi pemerintah.",
      },
      { property: "og:title", content: "Solusi Korporat & Human Capital — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        property: "og:description",
        content:
          "Layanan human capital, asesmen, pelatihan, healthcare, dan rekrutmen untuk korporat, rumah sakit, BUMN, dan instansi pemerintah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Item = { title: string; text: string; soon?: boolean };

const KATEGORI: { key: string; icon: typeof Briefcase; label: string; intro: string; items: Item[] }[] = [
  {
    key: "hr",
    icon: Briefcase,
    label: "HR Consulting",
    intro: "Pendampingan strategis untuk membangun sistem human capital yang sehat dan berkelanjutan.",
    items: [
      {
        title: "Konsultasi Human Capital",
        text: "Perancangan struktur organisasi, job analysis, kompetensi, hingga sistem manajemen kinerja.",
      },
      {
        title: "Organizational Development",
        text: "Diagnosa budaya organisasi, employee engagement survey, dan program perubahan terencana.",
      },
    ],
  },
  {
    key: "assessment",
    icon: ClipboardCheck,
    label: "Assessment",
    intro: "Alat ukur tervalidasi untuk keputusan talenta yang objektif dan akuntabel.",
    items: [
      { title: "Psikotes", text: "Seleksi, promosi, dan mutasi karyawan dengan baterai tes psikologi terstandar." },
      { title: "Assessment Center", text: "Simulasi berbasis kompetensi dengan asesor bersertifikat untuk posisi kunci." },
      { title: "Pemetaan Talenta", text: "Talent mapping dan succession planning lengkap dengan rencana pengembangan individu." },
      { title: "Tes IQ & Kepribadian", text: "Pengukuran potensi kognitif dan profil kepribadian beserta laporan interpretatif." },
    ],
  },
  {
    key: "training",
    icon: GraduationCap,
    label: "Training",
    intro: "Pelatihan aplikatif yang dirancang sesuai konteks dan tantangan organisasi Anda.",
    items: [
      { title: "Pelatihan Kepemimpinan", text: "Penguatan kapasitas supervisor hingga jajaran manajemen puncak." },
      { title: "Team Coaching", text: "Pendampingan tim oleh executive coach bersertifikat ICF untuk kolaborasi yang lebih efektif." },
      { title: "Service Excellence", text: "Pembentukan perilaku layanan prima yang konsisten di seluruh titik kontak pelanggan." },
    ],
  },
  {
    key: "healthcare",
    icon: HeartPulse,
    label: "Healthcare",
    intro: "Dukungan bagi rumah sakit dan fasilitas kesehatan dari praktisi medis berpengalaman.",
    items: [
      { title: "Konsultasi Akreditasi Rumah Sakit", text: "Pendampingan penyiapan dokumen, simulasi survei, dan penguatan mutu layanan." },
      { title: "Tata Kelola Klinis", text: "Penataan clinical governance, budaya keselamatan pasien, dan kinerja staf medis." },
    ],
  },
  {
    key: "recruitment",
    icon: Users,
    label: "Recruitment",
    intro: "Menemukan talenta yang tepat, dari staf hingga jajaran eksekutif.",
    items: [
      { title: "Talent Acquisition", text: "Sourcing, seleksi, dan asesmen kandidat end-to-end sesuai profil kompetensi jabatan." },
      { title: "Executive Search", text: "Pencarian terarah untuk posisi strategis dengan proses rahasia dan asesmen mendalam." },
      { title: "RPO (Recruitment Process Outsourcing)", text: "Pengelolaan penuh proses rekrutmen organisasi Anda.", soon: true },
      { title: "Headhunter", text: "Layanan perburuan talenta spesialis lintas industri.", soon: true },
    ],
  },
];

function Page() {
  const [open, setOpen] = useState<string>("hr");

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Solusi Korporat
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Layanan psikologi dan human capital terintegrasi untuk korporat, rumah sakit, BUMN, dan
            instansi pemerintah — dirancang sesuai konteks, regulasi, dan target kinerja organisasi
            Anda.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Kategori Layanan</h2>
        <div className="mt-8 space-y-4">
          {KATEGORI.map(({ key, icon: Icon, label, intro, items }) => {
            const active = open === key;
            return (
              <div key={key} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(active ? "" : key)}
                  aria-expanded={active}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-primary">{label}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{intro}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${active ? "rotate-180" : ""}`}
                  />
                </button>
                {active && (
                  <div className="grid gap-4 border-t border-border px-6 py-6 sm:grid-cols-2">
                    {items.map((it) => (
                      <div
                        key={it.title}
                        aria-disabled={it.soon || undefined}
                        className={`rounded-xl border border-border p-5 ${
                          it.soon ? "cursor-not-allowed bg-secondary/50 opacity-70" : "bg-background"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-semibold text-primary">{it.title}</h3>
                          {it.soon && (
                            <span className="shrink-0 rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                              Segera Hadir
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-3.5 py-1.5 text-xs font-semibold text-white">
              <Sparkles className="h-3.5 w-3.5" /> Program Unggulan
            </span>
            <h2 className="mt-5 text-2xl font-bold text-primary md:text-3xl">
              Pensiun Bahagia, Hidup Bermakna
            </h2>
            <p className="mt-2 text-sm font-semibold text-brand-blue">
              Program Masa Persiapan Pensiun (MPP)
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Satu-satunya program persiapan pensiun di Jawa Timur yang memadukan pendekatan
              psikologi, hipnoterapi dan SEFT healing, serta keahlian medis dalam satu rangkaian
              utuh. Karyawan didampingi menyiapkan kesehatan mental, kesehatan fisik, relasi
              keluarga, dan rencana aktivitas pasca-pensiun — sehingga transisi berjalan tenang dan
              purna tugas dijalani dengan makna.
            </p>
            <Link
              to="/kontak"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Ajukan Proposal Korporat
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Diskusikan kebutuhan organisasi Anda
        </h2>
        <p className="mt-3 text-muted-foreground">
          Tim kami siap menyusun rancangan program dan proposal sesuai konteks perusahaan Anda.
        </p>
        <Link
          to="/kontak"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Hubungi Kami
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
