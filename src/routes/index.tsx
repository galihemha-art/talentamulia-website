import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Wifi,
} from "lucide-react";
import heroImage from "@/assets/hero-konsultasi.jpg";

const SITE_URL = "https://talenta-mulia-hub.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talenta Mulia — Konsultasi Psikologi & Human Capital Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Pusat konsultasi psikologi & human capital terintegrasi di Sidoarjo, Jawa Timur: assessment, executive coaching, konsultasi kesehatan, pelatihan, dan program persiapan pensiun.",
      },
      {
        property: "og:title",
        content: "Talenta Mulia — Konsultasi Psikologi & Human Capital Sidoarjo, Jawa Timur",
      },
      {
        property: "og:description",
        content:
          "Pusat konsultasi psikologi & human capital terintegrasi di Sidoarjo, Jawa Timur untuk individu, organisasi, dan institusi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Talenta Mulia",
          description:
            "Pusat konsultasi psikologi dan human capital terintegrasi di Sidoarjo, Jawa Timur.",
          url: SITE_URL,
          telephone: "+62 821 3299 0498",
          email: "info@talentamulia.co.id",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Raya Gadung No.5, Margomulyo, Wage",
            addressLocality: "Kec. Taman, Sidoarjo",
            addressRegion: "Jawa Timur",
            addressCountry: "ID",
          },
          areaServed: "Indonesia",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "16:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Beranda,
});

const MARQUEE =
  "Korporat · Manufaktur · Rumah Sakit · BUMN · Pemerintah · Sekolah · Universitas · Bank · Asuransi · Kesehatan Eksekutif · Keluarga";

const SEKTOR = ["Rumah Sakit", "BUMN", "Manufaktur", "Perbankan", "Pemerintah", "Universitas"];

const STATS = [
  { value: "8+", label: "Ahli Multidisiplin" },
  { value: "25+", label: "Tahun Pengalaman Gabungan" },
  { value: "50+", label: "Organisasi Dilayani" },
  { value: "2rb+", label: "Individu Terberdayakan" },
];

const ALASAN = [
  {
    icon: ShieldCheck,
    title: "Praktik Beretika & Rahasia",
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

const LAYANAN = [
  { icon: ClipboardList, title: "Assessment Psikologi", text: "Seleksi, promosi, dan pemetaan potensi dengan alat ukur tervalidasi." },
  { icon: Target, title: "Executive Coaching", text: "Pendampingan personal bagi pemimpin untuk tumbuh lebih efektif." },
  { icon: Sparkles, title: "Pengembangan Kepemimpinan", text: "Program berjenjang untuk membangun pipeline pemimpin masa depan." },
  { icon: HeartPulse, title: "Kesejahteraan Karyawan", text: "Layanan konseling dan program well-being di tempat kerja." },
  { icon: Stethoscope, title: "Konsultasi Kesehatan", text: "Pendekatan medis dan psikologis untuk kesehatan eksekutif dan institusi." },
  { icon: GraduationCap, title: "Pelatihan & Seminar", text: "Workshop tematik yang aplikatif untuk tim dan komunitas Anda." },
];

const ORGANISASI = [
  "Assessment center & rekrutmen berbasis kompetensi",
  "Pemetaan talenta dan succession planning",
  "Program kesejahteraan mental karyawan",
  "Pelatihan kepemimpinan & budaya organisasi",
  "Konsultasi human capital dan manajemen perubahan",
];

const INDIVIDU = [
  "Konseling individu, pasangan, dan keluarga",
  "Tes minat bakat pelajar dan mahasiswa",
  "Pendampingan karier dan pengembangan diri",
  "Konsultasi tumbuh kembang anak & remaja",
  "Konsultasi kesehatan dan gaya hidup",
];

const STEPS = [
  { no: "01", title: "Konsultasi Awal", text: "Kami mendengar kebutuhan, konteks, dan tujuan Anda." },
  { no: "02", title: "Desain Program", text: "Menyusun rancangan intervensi yang sesuai dan terukur." },
  { no: "03", title: "Pelaksanaan", text: "Implementasi oleh tim profesional secara online maupun tatap muka." },
  { no: "04", title: "Evaluasi & Tindak Lanjut", text: "Laporan hasil, rekomendasi, dan pendampingan lanjutan." },
];

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
];

const FAQ = [
  {
    q: "Apakah layanan tersedia secara online?",
    a: "Ya, sesi dapat dilakukan secara daring maupun tatap muka di kantor kami di Sidoarjo.",
  },
  {
    q: "Bagaimana kerahasiaan data klien dijaga?",
    a: "Seluruh data dikelola sesuai kode etik psikologi dan hanya diakses oleh profesional terkait.",
  },
  {
    q: "Berapa lama proses assessment korporat?",
    a: "Umumnya 1–3 minggu, tergantung jumlah peserta dan kedalaman laporan yang dibutuhkan.",
  },
  {
    q: "Apakah melayani organisasi di luar Jawa Timur?",
    a: "Ya, kami melayani klien di seluruh Indonesia melalui skema daring maupun kunjungan.",
  },
  {
    q: "Bagaimana cara memulai kerja sama?",
    a: "Hubungi kami untuk konsultasi awal gratis, lalu kami kirimkan proposal sesuai kebutuhan Anda.",
  },
];

function Beranda() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              Pusat Konsultasi Terintegrasi
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-6xl">
              Membina Manusia.
              <br />
              <span className="text-gradient-brand">Menguatkan Organisasi.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Psikologi Terintegrasi, Kesehatan, Pengembangan Kepemimpinan, Executive Coaching,
              Kesehatan Medis, Assessment Center, dan Konsultasi Human Capital — untuk individu,
              organisasi, dan institusi kesehatan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kontak"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Buat Janji Konsultasi <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/solusi-korporat"
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Ajukan Proposal Korporat
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {[
                { icon: ShieldCheck, label: "Rahasia & Beretika" },
                { icon: BadgeCheck, label: "Berbasis Bukti Ilmiah" },
                { icon: Wifi, label: "Online & Offline" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand-blue" /> {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-gradient opacity-15 blur-2xl" />
            <img
              src={heroImage}
              alt="Sesi konsultasi psikologi profesional di Talenta Mulia"
              width={1024}
              height={1200}
              className="h-[440px] w-full rounded-3xl object-cover shadow-soft lg:h-[540px]"
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-primary py-3.5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-sm font-medium text-primary-foreground/80">
          {[0, 1].map((i) => (
            <span key={i} className="flex gap-10 pr-10">
              <span>Melayani: {MARQUEE}</span>
              <span>Melayani: {MARQUEE}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sektor */}
      <section className="mx-auto max-w-7xl px-5 py-14 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Dipercaya institusi di berbagai sektor
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {SEKTOR.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-secondary px-5 py-2 text-sm font-medium text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Statistik */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl bg-surface-soft p-8 md:p-12">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Tim multidisiplin yang bisa Anda percaya.
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Psikolog, executive coach, dokter, dan pemimpin kesehatan — dalam satu praktik
            konsultasi terintegrasi.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-background p-6 shadow-soft">
                <dt className="text-4xl font-extrabold text-gradient-brand">{stat.value}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Alasan */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Alasan organisasi memilih Talenta Mulia
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ALASAN.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Layanan */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Layanan Kami</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {LAYANAN.map(({ icon: Icon, title, text }) => (
            <Link
              key={title}
              to="/solusi-korporat"
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                Selengkapnya <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Kami Melayani */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Kami Melayani</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            { title: "Organisasi", items: ORGANISASI, to: "/solusi-korporat", cta: "Lihat Solusi Korporat" },
            { title: "Individu & Keluarga", items: INDIVIDU, to: "/layanan-individu", cta: "Lihat Layanan Individu" },
          ].map((col) => (
            <div key={col.title} className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary">{col.title}</h3>
              <ul className="mt-6 space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={col.to}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {col.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Cara Kerja */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Cara Kerja Kami</h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.no} className="rounded-2xl bg-surface-soft p-7">
              <span className="font-wordmark text-3xl text-gradient-brand">{step.no}</span>
              <h3 className="mt-3 text-base font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimoni */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Apa kata klien kami
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {TESTIMONI.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7">
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
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Pertanyaan yang sering diajukan
        </h2>
        <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card">
          {FAQ.map((item) => (
            <details key={item.q} className="group px-7 py-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-primary marker:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
        <Link
          to="/faq"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
        >
          Lihat semua FAQ <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Siap menguatkan tim & organisasi Anda?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/75">
            Mulai dengan konsultasi awal bersama tim profesional kami.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white"
            >
              Buat Janji Konsultasi <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold"
            >
              Hubungi Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
