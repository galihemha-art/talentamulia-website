import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  Brain,
  ChevronRight,
  CloudRain,
  HeartHandshake,
  Building2,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Users,
  Flame,
  UserRound,
} from "lucide-react";

import heroImage from "@/assets/hero-konsultasi.webp";
import { canonicalLink, ogUrl } from "@/lib/seo";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  webPageSchema,
} from "@/lib/structured-data";
import { AUTHORS } from "@/lib/authors";
import { LAYANAN_INDIVIDU, KERAHASIAAN_NOTE } from "@/lib/layanan-individu-data";

const PATH = "/konsultasi-psikolog-online";

const TITLE = "Konsultasi Psikolog Online | Psikolog Profesional — Talenta Mulia";
const DESCRIPTION =
  "Konsultasi psikolog online bersama psikolog Talenta Mulia Sidoarjo. Tersedia sesi online maupun tatap muka untuk masalah pribadi, keluarga, stres, dan kecemasan.";

const WA_URL =
  "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20konsultasi%20psikolog%20online.";

const LAYANAN_SLUGS = [
  "konseling-psikologis",
  "konseling-pernikahan",
  "parenting-anak",
  "konseling-remaja",
  "trauma-healing",
  "stres-kecemasan",
  "dukungan-depresi",
  "pendampingan-abk",
] as const;

const ALASAN = [
  {
    icon: CloudRain,
    judul: "Stres & kecemasan yang mengganggu keseharian",
    teks: "Pikiran yang sulit tenang, sulit tidur, atau rasa khawatir yang terus muncul bisa menjadi alasan untuk berkonsultasi.",
  },
  {
    icon: Brain,
    judul: "Masalah pribadi dan emosi yang sulit dikelola",
    teks: "Ketika emosi terasa naik-turun atau keputusan hidup terasa membingungkan, bicara dengan psikolog membantu menata ulang cara pandang.",
  },
  {
    icon: HeartHandshake,
    judul: "Relasi dan pernikahan yang terasa buntu",
    teks: "Konflik berulang, komunikasi yang menegang, atau jarak emosional dengan pasangan bisa menjadi alasan untuk berkonsultasi bersama.",
  },
  {
    icon: Baby,
    judul: "Tantangan parenting dan perilaku anak",
    teks: "Bingung menghadapi perilaku anak atau ingin memahami tahap tumbuh kembangnya dengan lebih baik.",
  },
  {
    icon: Users,
    judul: "Persoalan remaja",
    teks: "Tekanan akademik, dinamika pergaulan, dan emosi yang sulit diungkapkan kepada orang terdekat.",
  },
  {
    icon: Sparkles,
    judul: "Pengalaman yang masih membekas",
    teks: "Peristiwa masa lalu yang masih terasa mengganggu dapat didampingi melalui sesi trauma healing bersama psikolog.",
  },
  {
    icon: Flame,
    judul: "Kelelahan kerja dan burnout",
    teks: "Energi yang terus rendah dan kehilangan makna dalam pekerjaan bisa menjadi alasan untuk berkonsultasi lebih awal.",
  },
];

const MANFAAT = [
  {
    judul: "Ruang aman untuk bercerita",
    teks: "Anda bisa menyampaikan apa yang dirasakan tanpa dihakimi, dalam sesi yang bersifat rahasia.",
  },
  {
    judul: "Memahami pemicu dan pola masalah",
    teks: "Psikolog membantu Anda melihat kaitan antara situasi, pikiran, dan reaksi emosi yang berulang.",
  },
  {
    judul: "Strategi menghadapi masalah",
    teks: "Sesi diarahkan pada langkah yang realistis untuk situasi Anda, bukan saran umum yang sulit diterapkan.",
  },
  {
    judul: "Dukungan berkelanjutan sesuai kebutuhan",
    teks: "Jumlah dan jarak sesi disesuaikan dengan kebutuhan Anda, bukan paket yang dipaksakan.",
  },
  {
    judul: "Rujukan bila diperlukan",
    teks: "Bila kondisi Anda membutuhkan penanganan medis, kami akan merujuk ke psikiater atau tenaga medis yang sesuai.",
  },
  {
    judul: "Pilihan online maupun tatap muka",
    teks: "Anda dapat memilih sesi daring atau bertemu langsung di kantor Talenta Mulia, Sidoarjo.",
  },
];

const LANGKAH = [
  {
    no: "01",
    judul: "Hubungi kami untuk membuat janji",
    teks: "Sampaikan kebutuhan Anda melalui formulir kontak atau WhatsApp. Anda tidak perlu menjelaskan seluruh masalah di tahap ini.",
  },
  {
    no: "02",
    judul: "Penentuan kebutuhan & psikolog yang sesuai",
    teks: "Kami membantu mengarahkan kebutuhan Anda kepada psikolog yang paling relevan, lalu menyepakati jadwal sesi.",
  },
  {
    no: "03",
    judul: "Sesi konsultasi psikolog online",
    teks: "Sesi berlangsung secara daring dari tempat yang nyaman dan privat bagi Anda, dipandu oleh psikolog.",
  },
  {
    no: "04",
    judul: "Rencana tindak lanjut",
    teks: "Di akhir sesi, Anda dan psikolog menyepakati langkah berikutnya — apakah cukup satu sesi, berlanjut, atau perlu rujukan.",
  },
];

const FAQ = [
  {
    q: "Apa itu konsultasi psikolog online?",
    a: "Konsultasi psikolog online adalah sesi konsultasi jarak jauh bersama psikolog, dilakukan secara daring sehingga Anda dapat mengikutinya dari lokasi yang nyaman dan privat. Isi dan cara kerja sesi pada dasarnya sama dengan konsultasi tatap muka.",
  },
  {
    q: "Siapa saja yang bisa mengikuti konsultasi?",
    a: "Layanan ini terbuka bagi siapa saja yang ingin bicara dengan profesional mengenai masalah pribadi, emosi yang sulit dikelola, relasi, pengasuhan anak, maupun pengambilan keputusan hidup. Anda tidak perlu menunggu kondisi menjadi berat untuk mulai berkonsultasi.",
  },
  {
    q: "Apakah konsultasi online bersifat rahasia?",
    a: `Ya. ${KERAHASIAAN_NOTE}`,
  },
  {
    q: "Apa saja yang dibicarakan saat sesi?",
    a: "Anda menceritakan situasi yang sedang dihadapi, lalu psikolog membantu memetakan pemicu dan pola masalahnya serta menyusun langkah yang lebih terarah. Anda berhak menentukan sejauh mana ingin bercerita.",
  },
  {
    q: "Berapa lama satu sesi konsultasi?",
    a: "Durasi dan detail teknis sesi akan dikonfirmasi saat booking, karena disesuaikan dengan kebutuhan dan jenis layanan yang dipilih.",
  },
  {
    q: "Apakah saya harus punya diagnosis dulu?",
    a: "Tidak. Anda tidak perlu memiliki diagnosis apa pun untuk berkonsultasi. Banyak orang datang karena merasa lelah, bingung, atau ingin memahami dirinya dengan lebih baik.",
  },
  {
    q: "Apakah bisa konsultasi masalah pernikahan atau keluarga?",
    a: "Bisa. Talenta Mulia menyediakan konseling pernikahan, parenting & anak, serta konseling remaja. Sesi dapat diikuti berdua maupun bergantian sesuai kesiapan masing-masing pihak.",
  },
  {
    q: "Apakah bisa konsultasi untuk stres dan kecemasan?",
    a: "Bisa. Tersedia layanan Stres & Kecemasan serta Dukungan Depresi berupa pendampingan psikologis, dengan rujukan ke psikiater atau tenaga medis bila diperlukan.",
  },
  {
    q: "Apakah saya bisa memilih online atau tatap muka?",
    a: "Ya. Anda dapat memilih sesi online atau tatap muka di kantor Talenta Mulia, Sidoarjo. Untuk kebutuhan tertentu, psikolog dapat menyarankan sesi tatap muka berdasarkan penilaian profesional.",
  },
];

const PSIKOLOG = ["maulidah", "mamluatul", "hilda"] as const;

export const Route = createFileRoute("/konsultasi-psikolog-online")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH)],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Konsultasi Psikolog Online", path: PATH }])),
      jsonLd(webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH })),
      jsonLd(
        serviceSchema({
          name: "Konsultasi Psikolog Online",
          description:
            "Layanan konsultasi psikolog online dan tatap muka oleh psikolog Talenta Mulia di Sidoarjo, Jawa Timur.",
          path: PATH,
          serviceType: "Konsultasi Psikologi",
          providerPeople: [...PSIKOLOG],
          offerings: LAYANAN_SLUGS.map((slug) => ({
            name: LAYANAN_INDIVIDU[slug]!.nama,
            path: `/layanan/${slug}`,
          })),
        }),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-brand-blue">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-primary">Konsultasi Psikolog Online</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Konsultasi Psikolog Online
              </p>
              <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
                Konsultasi Psikolog Online untuk Membantu Anda Menghadapi Masalah dengan Lebih
                Terarah
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Ruang konsultasi bersama psikolog untuk memahami masalah, mengelola emosi, dan
                menentukan langkah yang lebih terarah. Sesi tersedia secara online maupun tatap muka
                di Sidoarjo, Jawa Timur.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/kontak"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Buat Janji Konsultasi
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Tanya via WhatsApp
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {["Rahasia & Beretika", "Online & Tatap Muka", "Pendekatan Profesional"].map(
                  (chip) => (
                    <li
                      key={chip}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                    >
                      <ShieldCheck className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      {chip}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <img
                src={heroImage}
                alt="Sesi konsultasi antara seorang psikolog dan klien di ruang konsultasi Talenta Mulia"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick answer */}
      <section aria-labelledby="ringkas" className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        <h2 id="ringkas" className="sr-only">
          Ringkasan singkat
        </h2>
        <div className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <strong className="text-primary">Konsultasi psikolog online</strong> adalah sesi
            konsultasi jarak jauh bersama psikolog yang dapat Anda ikuti dari lokasi yang nyaman dan
            privat. Layanan ini cocok bagi siapa saja yang sedang menghadapi stres, kecemasan,
            masalah relasi, tantangan pengasuhan, atau sekadar ingin memahami diri dengan lebih
            baik — tanpa perlu memiliki diagnosis lebih dulu. {KERAHASIAAN_NOTE}
          </p>
        </div>
      </section>

      {/* Kapan berkonsultasi */}
      <section aria-labelledby="kapan" className="mx-auto max-w-6xl px-5 pb-4 md:pb-8">
        <h2
          id="kapan"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Kapan Sebaiknya Berkonsultasi dengan Psikolog?
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Tidak ada ambang batas tertentu untuk mulai berkonsultasi. Beberapa situasi berikut sering
          menjadi alasan orang menghubungi psikolog.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ALASAN.map((item) => (
            <article
              key={item.judul}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-primary">{item.judul}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.teks}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Manfaat */}
      <section aria-labelledby="manfaat" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2
          id="manfaat"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Apa yang Bisa Anda Dapatkan dari Konsultasi?
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MANFAAT.map((item) => (
            <div
              key={item.judul}
              className="rounded-2xl border border-border bg-secondary/40 p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-primary">{item.judul}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.teks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proses */}
      <section aria-labelledby="proses" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="proses"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Konsultasi Psikolog Online: Bagaimana Prosesnya?
          </h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {LANGKAH.map((step) => (
              <li key={step.no} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="font-heading text-2xl font-bold text-brand-blue">{step.no}</span>
                <h3 className="mt-3 font-heading text-base font-semibold text-primary">
                  {step.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.teks}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Online vs tatap muka */}
      <section aria-labelledby="mode" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2
          id="mode"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Online atau Tatap Muka, Mana yang Cocok?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
              <MonitorSmartphone className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-primary">Konsultasi online</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Praktis diikuti dari rumah, kantor, atau lokasi lain yang nyaman dan privat bagi Anda.
              Cocok untuk konsultasi awal, konseling psikologis, dan pendampingan lanjutan.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-primary">
              Konsultasi tatap muka
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Berlangsung di kantor Talenta Mulia, Sidoarjo, dengan ruang konsultasi yang privat.
              Kebutuhan tertentu — misalnya pemeriksaan psikologi yang memerlukan tes tertulis atau
              observasi langsung — mungkin lebih sesuai dilakukan tatap muka berdasarkan penilaian
              profesional psikolog.
            </p>
          </div>
        </div>
      </section>

      {/* Pilihan layanan */}
      <section aria-labelledby="layanan" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="layanan"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Pilihan Layanan Psikologi
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Setiap layanan berikut dapat diikuti secara online maupun tatap muka.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LAYANAN_SLUGS.map((slug) => {
              const item = LAYANAN_INDIVIDU[slug]!;
              return (
                <Link
                  key={slug}
                  to="/layanan/$slug"
                  params={{ slug }}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
                >
                  <h3 className="font-heading text-base font-semibold text-primary">{item.nama}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.subjudul}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                    Selengkapnya
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link
              to="/layanan-individu"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
            >
              Lihat semua layanan individu &amp; keluarga
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Psikolog */}
      <section aria-labelledby="psikolog" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2
          id="psikolog"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Psikolog Talenta Mulia
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PSIKOLOG.map((id) => {
            const a = AUTHORS[id];
            return (
              <article key={id} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <img
                  src={a.photo}
                  alt={`Foto ${a.name}, ${a.jobTitle} di Talenta Mulia`}
                  width={320}
                  height={320}
                  loading="lazy"
                  className="h-40 w-40 rounded-2xl object-cover"
                />
                <h3 className="mt-5 font-heading text-lg font-semibold text-primary">{a.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-blue">{a.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.bio}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8">
          <Link
            to="/professionals"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
          >
            Lihat profil lengkap tim profesional
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
          <h2
            id="faq"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <div className="mt-8 space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-heading text-base font-semibold text-primary marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-brand-blue transition-transform group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Catatan penting */}
      <section aria-labelledby="catatan" className="mx-auto max-w-4xl px-5 py-14 md:py-16">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
          <h2 id="catatan" className="font-heading text-xl font-bold text-primary">
            Catatan Penting
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Konsultasi psikologis di Talenta Mulia merupakan layanan pendampingan psikologis, bukan
            layanan gawat darurat. Jika Anda atau seseorang yang Anda kenal berada dalam kondisi
            darurat atau berisiko terhadap keselamatan diri, segera hubungi layanan gawat darurat
            atau tenaga medis terdekat. Bila kondisi Anda membutuhkan penanganan medis, psikolog
            kami akan memberikan rujukan yang sesuai.
          </p>
        </div>
      </section>

      {/* Bacaan lanjutan */}
      <section aria-labelledby="bacaan" className="mx-auto max-w-6xl px-5 pb-14 md:pb-20">
        <h2
          id="bacaan"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Bacaan &amp; Halaman Terkait
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/artikel"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Artikel &amp; wawasan
          </Link>
          <Link
            to="/konseling-burnout"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Konseling burnout
          </Link>
          <Link
            to="/konseling-pranikah"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Konseling pranikah
          </Link>
          <Link
            to="/konseling-keluarga"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Konseling keluarga
          </Link>
          <Link
            to="/psikolog-anak"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Psikolog anak
          </Link>
          <Link
            to="/tes-minat-bakat"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Tes minat bakat
          </Link>

          <Link
            to="/layanan/$slug"
            params={{ slug: "konsultasi-online-offline" }}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Cara konsultasi online &amp; offline
          </Link>
          <Link
            to="/faq"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            FAQ Talenta Mulia
          </Link>
          <Link
            to="/tentang-kami"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Tentang Talenta Mulia
          </Link>
          <Link
            to="/kontak"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Kontak &amp; lokasi
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="cta" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2
                id="cta"
                className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
              >
                Siap memulai konsultasi psikolog online?
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Sampaikan kebutuhan Anda, dan kami bantu arahkan ke psikolog yang sesuai. Sesi dapat
                dilakukan online maupun tatap muka.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/kontak"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Buat Janji Konsultasi
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>

            <address className="not-italic rounded-3xl border border-border bg-card p-7 text-sm leading-relaxed text-muted-foreground shadow-sm">
              <p className="flex items-center gap-2 font-heading text-base font-semibold text-primary">
                <UserRound className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                Talenta Mulia
              </p>
              <p className="mt-3">
                Jl. Raya Gadung No.5, Margomulyo, Wage, Kec. Taman, Sidoarjo, Jawa Timur
              </p>
              <p className="mt-2">
                Telepon:{" "}
                <a href="tel:+6282132990498" className="hover:text-brand-blue">
                  +62 821 3299 0498
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@talentamulia.co.id" className="hover:text-brand-blue">
                  info@talentamulia.co.id
                </a>
              </p>
              <p className="mt-2">Senin–Jumat, 09.00–16.00 WIB</p>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
