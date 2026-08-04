import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  Building2,
  HeartPulse,
  Laptop,
  Presentation,
  Smile,
  Sparkles,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/pelatihan")({
  head: () => ({
    meta: [
      { title: "Pelatihan & Seminar untuk Organisasi di Jawa Timur — Talenta Mulia" },
      {
        name: "description",
        content:
          "In-house training, workshop publik, dan webinar bertema kesehatan masyarakat, service excellence, parenting, kepemimpinan rumah sakit, dan kesehatan mental kerja.",
      },
      { property: "og:title", content: "Pelatihan & Seminar untuk Organisasi di Jawa Timur — Talenta Mulia" },
      {
        property: "og:description",
        content:
          "In-house training, workshop publik, dan webinar bertema kesehatan masyarakat, service excellence, parenting, kepemimpinan rumah sakit, dan kesehatan mental kerja.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const TOPIK = [
  {
    icon: HeartPulse,
    title: "Kesehatan Masyarakat",
    text: "Promosi kesehatan, pola hidup sehat, dan program edukasi bagi komunitas maupun karyawan.",
  },
  {
    icon: Smile,
    title: "Service Excellence",
    text: "Membangun budaya pelayanan prima, komunikasi efektif, dan penanganan keluhan pelanggan/pasien.",
  },
  {
    icon: Baby,
    title: "Parenting",
    text: "Pengasuhan positif, komunikasi dengan anak dan remaja, serta keseimbangan peran orang tua bekerja.",
  },
  {
    icon: Building2,
    title: "Kepemimpinan Rumah Sakit",
    text: "Kepemimpinan klinis, manajemen tim medis, dan budaya keselamatan pasien bagi jajaran struktural.",
  },
  {
    icon: Sparkles,
    title: "Kesehatan Mental di Tempat Kerja",
    text: "Pencegahan burnout, manajemen stres, dan peran atasan sebagai penopang kesejahteraan tim.",
  },
];

const FORMAT = [
  {
    icon: Users,
    title: "Pelatihan (In-House/Klasikal)",
    text: "Materi dikustomisasi sesuai isu dan budaya organisasi Anda, diselenggarakan klasikal di lokasi perusahaan atau institusi.",
  },
  {
    icon: Presentation,
    title: "Seminar",
    text: "Sesi penyampaian gagasan untuk audiens besar — cocok untuk peluncuran program, kampanye internal, atau acara institusi.",
  },
  {
    icon: Laptop,
    title: "Workshop",
    text: "Kelas dengan porsi praktik, simulasi, dan diskusi kasus yang besar; tersedia luring maupun daring interaktif.",
  },
  {
    icon: Baby,
    title: "Parenting Education",
    text: "Seminar dan workshop parenting untuk sekolah, komunitas, atau perusahaan — format kelompok yang bersifat edukatif.",
  },
];


function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Pelatihan &amp; Seminar
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Program belajar yang aplikatif, dibawakan psikolog, dokter, dan coach bersertifikat —
            mencakup empat format: pelatihan in-house/klasikal, seminar, workshop, dan parenting
            education.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            Format Penyelenggaraan
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Empat format yang kami sediakan, dapat dikombinasikan sesuai kebutuhan dan jumlah
            peserta.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FORMAT.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-primary">Catatan pembeda:</span> Parenting
              Education di halaman ini berbentuk seminar/workshop kelompok untuk sekolah, komunitas,
              atau perusahaan. Bila Anda mencari pendampingan personal untuk satu keluarga,
              kunjungi layanan konseling{" "}
              <Link
                to="/layanan/$slug"
                params={{ slug: "parenting-anak" }}
                className="font-semibold text-brand-blue underline underline-offset-4"
              >
                Parenting &amp; Anak
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            Topik Pelatihan
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TOPIK.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Rancang pelatihan untuk tim Anda
        </h2>
        <p className="mt-3 text-muted-foreground">
          Sampaikan kebutuhan dan jumlah peserta, kami siapkan silabus serta penawarannya.
        </p>
        <Link
          to="/kontak"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Ajukan Kebutuhan Pelatihan
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
