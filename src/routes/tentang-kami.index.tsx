import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import maulidah from "@/assets/Maulidah_Muflichah.webp";
import andiani from "@/assets/Dr_Andiani.webp";
import eka from "@/assets/Eka_Rachmawaty.webp";
import mamluatul from "@/assets/Mamluatul_Khoiriyah.webp";

export const Route = createFileRoute("/tentang-kami/")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Talenta Mulia, Konsultan Psikologi Sidoarjo Jawa Timur" },
      {
        name: "description",
        content:
          "Pusat konsultasi terintegrasi psikologi, kesehatan, dan kepemimpinan di Sidoarjo, Jawa Timur — melayani korporat, rumah sakit, pemerintah, dan individu.",
      },
      { property: "og:title", content: "Tentang Kami — Talenta Mulia, Konsultan Psikologi Sidoarjo Jawa Timur" },
      {
        property: "og:description",
        content:
          "Pusat konsultasi terintegrasi psikologi, kesehatan, dan kepemimpinan di Sidoarjo, Jawa Timur — melayani korporat, rumah sakit, pemerintah, dan individu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/tentang-kami"),
    ],
    links: [canonicalLink("/tentang-kami")],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Tentang Kami", path: "/tentang-kami" }])),
    ],
  }),
  component: Page,
});

const PILLS = [
  "Psikologi klinis, industri & organisasi",
  "Kepemimpinan medis & mutu rumah sakit",
  "Executive coaching bersertifikat ICF",
  "Pelatihan & pengembangan institusi",
];

const MISI = [
  "Memberikan layanan psikologi dan kesehatan berbasis bukti ilmiah.",
  "Mengembangkan pemimpin dan organisasi melalui coaching dan assessment.",
  "Meningkatkan mutu rumah sakit, akreditasi, dan tata kelola klinis.",
  "Mendorong kesejahteraan karyawan dan kesehatan mental di tempat kerja.",
];

const NILAI = [
  {
    icon: ShieldCheck,
    title: "Profesional",
    text: "Ahli bersertifikat yang berpedoman pada standar dan etika internasional.",
  },
  {
    icon: Sparkles,
    title: "Integritas",
    text: "Rahasia, jujur, dan akuntabel dalam setiap penugasan.",
  },
  {
    icon: HeartHandshake,
    title: "Empati",
    text: "Perawatan berpusat pada klien yang menghormati kemanusiaan dan martabat.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    text: "Kerja tim multidisiplin lintas psikologi, kedokteran, dan bisnis.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    text: "Praktik berbasis bukti ilmiah yang dipadukan dengan metode modern.",
  },
];

const TIM = [
  {
    photo: maulidah,
    alt: "Potret Maulidah Muflichah, Founder dan Psikolog Utama Talenta Mulia",
    name: "Maulidah Muflichah, M.Psi., Psikolog., CHt.",
    role: "Founder · Psikolog Utama · Certified Hypnotherapist",
    desc: "Founder Talenta Mulia dengan keahlian mendalam di psikologi klinis, terapi keluarga, konseling pernikahan, dan hipnoterapi bersertifikat.",
  },
  {
    photo: andiani,
    alt: "Potret Dr. dr. Hj. Andiani, Konsultan Kepemimpinan Medis & Kesehatan",
    name: "Dr. dr. Hj. Andiani, M.Kes., Sp.KKLP., FISCH, FISPM, CHt., CEFHLM",
    role: "Konsultan Kepemimpinan Medis & Kesehatan",
    desc: "Berpengalaman dalam manajemen dan akreditasi rumah sakit, tata kelola klinis, serta kepemimpinan mutu pelayanan kesehatan.",
  },
  {
    photo: eka,
    alt: "Potret Eka Rachmawaty, Executive Coach bersertifikat ICF PCC",
    name: "Eka Rachmawaty, M.M., PCC",
    role: "Konsultan Pengembangan Kepemimpinan & Organisasi · ICF PCC",
    desc: "Professional Certified Coach (ICF PCC) yang berspesialisasi dalam executive coaching, pengembangan kepemimpinan, talent management, dan pengembangan organisasi.",
  },
  {
    photo: mamluatul,
    alt: "Potret Mamluatul Khoiriyah, Psikolog Senior Talenta Mulia",
    name: "Mamluatul Khoiriyah, M.Psi., Psikolog",
    role: "Psikolog Senior",
    desc: "Psikolog senior yang fokus pada kesehatan mental, trauma healing, forgiveness dan terapi SEFT, parenting, dan psikologi komunitas.",
  },
];

const TIMELINE = [
  {
    no: "01",
    title: "Praktik psikologi klinis",
    text: "Berawal dari layanan konseling, terapi keluarga, dan hipnoterapi untuk individu serta keluarga.",
  },
  {
    no: "02",
    title: "Perluasan ke layanan korporat",
    text: "Asesmen psikologi, assessment center, dan pelatihan untuk kebutuhan rekrutmen dan pengembangan SDM.",
  },
  {
    no: "03",
    title: "Kepemimpinan & coaching eksekutif",
    text: "Penambahan executive coaching bersertifikat ICF serta program pengembangan kepemimpinan dan suksesi.",
  },
  {
    no: "04",
    title: "Konsultasi kesehatan terintegrasi",
    text: "Pendampingan mutu, akreditasi, dan tata kelola klinis rumah sakit bersama konsultan kepemimpinan medis.",
  },
];

const LEGAL = [
  {
    label: "Nama entitas",
    value: "Talenta Mulia — Integrated Psychology, Healthcare & Leadership Consulting Center",
  },
  {
    label: "Bidang usaha",
    value: "Jasa konsultasi psikologi, kesehatan, dan pengembangan kepemimpinan",
  },
  { label: "Badan hukum & perizinan", value: "Dokumen tersedia atas permintaan" },
  { label: "NPWP / NIB", value: "Tersedia atas permintaan" },
];

const KREDENSIAL = [
  "Psikolog berlisensi (SIPP) sesuai ketentuan HIMPSI.",
  "Executive coach tersertifikasi ICF pada jenjang PCC.",
  "Konsultan kepemimpinan medis dengan latar praktik dan manajemen rumah sakit.",
  "Kerahasiaan data klien dijaga sesuai kode etik profesi dan perjanjian kerahasiaan.",
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
      {children}
    </span>
  );
}

function Page() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-brand-blue">
              Beranda
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-primary">Tentang Kami</span>
          </nav>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl">
            Pusat konsultasi terintegrasi — dibangun untuk manusia dan institusi.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Talenta Mulia menyatukan psikolog, executive coach, dan pemimpin medis dalam satu
            praktik, melayani korporat, rumah sakit, pemerintah, dan individu di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* KISAH PERUSAHAAN */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <Label>Kisah Perusahaan</Label>
        <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
          Satu praktik, tiga disiplin yang saling menguatkan.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Talenta Mulia didirikan oleh Maulidah Muflichah, M.Psi., Psikolog., CHt. sebagai jawaban
          atas kebutuhan organisasi yang jarang bisa dipenuhi satu disiplin saja: persoalan manusia
          di tempat kerja hampir selalu bersinggungan dengan psikologi, kesehatan, dan kualitas
          kepemimpinan sekaligus.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Karena itu praktik ini dibangun sebagai pusat konsultasi terintegrasi — psikolog klinis
          dan industri, executive coach bersertifikat ICF, serta konsultan kepemimpinan medis
          bekerja dalam satu tim. Pendekatan ini memungkinkan kami merancang intervensi yang utuh:
          dari asesmen dan konseling individu, pengembangan pemimpin, hingga penguatan mutu dan tata
          kelola rumah sakit.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Layanan kami menjangkau korporat dan manufaktur, rumah sakit dan fasilitas kesehatan, BUMN
          dan instansi pemerintah, lembaga pendidikan, perbankan, serta klien individu dan keluarga.
        </p>
        <ul className="mt-7 flex flex-wrap gap-2">
          {PILLS.map((p) => (
            <li
              key={p}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-primary shadow-sm"
            >
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* VISI & MISI */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <h2 className="text-xl font-bold text-primary">Visi</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Menjadi pusat konsultasi terintegrasi psikologi, kesehatan, dan kepemimpinan yang
              paling dipercaya di Indonesia — memberdayakan manusia dan menguatkan institusi dengan
              standar kelas dunia.
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

      {/* NILAI INTI */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="text-center">
          <Label>Nilai Inti</Label>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            Lima nilai yang memandu setiap penugasan.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* TIM KEPEMIMPINAN */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Label>Tim Kepemimpinan</Label>
              <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
                Dipimpin praktisi, bukan sekadar teori.
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Empat praktisi senior yang memimpin penugasan korporat, rumah sakit, dan institusi —
                psikolog, konsultan kepemimpinan medis, dan executive coach.
              </p>
            </div>
            <Link
              to="/professionals"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Lihat Profil Lengkap
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIM.map((t) => (
              <article
                key={t.name}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <img
                  src={t.photo}
                  alt={t.alt}
                  loading="lazy"
                decoding="async"
                width={800} height={1000}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="p-5">
                  <h3 className="text-sm font-bold leading-snug text-primary">{t.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-brand-blue">{t.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERJALANAN KAMI */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <Label>Perjalanan Kami</Label>
        <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
          Bagaimana praktik ini berkembang.
        </h2>
        <p className="mt-4 rounded-xl border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
          Tonggak berikut disusun berdasarkan tahapan pengembangan praktik. Tanggal resmi setiap
          tonggak sedang kami verifikasi dan akan dilengkapi.
        </p>
        <ol className="mt-10 space-y-8 border-l border-border pl-8">
          {TIMELINE.map((s) => (
            <li key={s.no} className="relative">
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-border bg-card">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
              </span>
              <span className="text-xs font-bold tracking-[0.18em] text-brand-blue">{s.no}</span>
              <h3 className="mt-1 font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* LEGALITAS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <Label>Legalitas Perusahaan</Label>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            Informasi legal dan kredensial.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Kami hanya menampilkan data legal yang telah terverifikasi. Detail administratif di
            bawah dilengkapi secara bertahap dan tersedia lengkap atas permintaan pada proses tender
            atau vendor onboarding.
          </p>

          <div className="mt-8 grid gap-8 rounded-2xl border border-border bg-card p-7 shadow-sm md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-primary">Legalitas Perusahaan</h3>
              <dl className="mt-4 space-y-4">
                {LEGAL.map((l) => (
                  <div key={l.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {l.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-primary">{l.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Kredensial &amp; Kepatuhan</h3>
              <ul className="mt-4 space-y-3">
                {KREDENSIAL.map((k) => (
                  <li key={k} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Minta Dokumen Legalitas
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/tentang-kami/legalitas"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Halaman Legalitas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Siap menguatkan tim &amp; organisasi Anda?
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Bicara dengan tim multidisiplin kami — psikolog, coach, dan konsultan kesehatan. Dapatkan
          proposal khusus dalam 2 hari kerja.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ajukan Proposal
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Buat Janji Konsultasi
          </Link>
        </div>
      </section>
    </>
  );
}
