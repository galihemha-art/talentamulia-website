import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryLow,
  Brain,
  Building2,
  ChevronRight,
  CloudRain,
  Compass,
  HeartHandshake,
  MessageCircle,
  Moon,
  MonitorSmartphone,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-konsultasi.webp";
import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd, serviceSchema, webPageSchema } from "@/lib/structured-data";
import { AUTHORS } from "@/lib/authors";
import { LAYANAN_INDIVIDU, KERAHASIAAN_NOTE } from "@/lib/layanan-individu-data";

const PATH = "/konseling-burnout";

const TITLE = "Konseling Burnout dengan Psikolog | Talenta Mulia";
const DESCRIPTION =
  "Konseling burnout bersama psikolog Talenta Mulia. Pahami kelelahan kerja, stres, dan langkah pemulihan Anda. Sesi online maupun tatap muka di Sidoarjo.";

const WA_URL =
  "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20konsultasi%20tentang%20burnout.";

const PSIKOLOG = ["maulidah", "mamluatul", "hilda"] as const;

const LAYANAN_TERKAIT = [
  {
    slug: "stres-kecemasan",
    kapan: "Relevan bila tekanan pekerjaan disertai rasa khawatir berlebih, tegang, atau pikiran yang sulit tenang.",
  },
  {
    slug: "konseling-psikologis",
    kapan: "Relevan bila Anda ingin membicarakan persoalan pribadi secara lebih luas, tidak terbatas pada pekerjaan.",
  },
  {
    slug: "dukungan-depresi",
    kapan: "Relevan bila suasana hati terasa menurun dalam waktu lama dan minat terhadap banyak hal ikut memudar.",
  },
] as const;

const TANDA = [
  {
    icon: BatteryLow,
    judul: "Lelah fisik dan mental yang menetap",
    teks: "Rasa lelah tidak hilang meski sudah beristirahat atau melewati akhir pekan.",
  },
  {
    icon: Compass,
    judul: "Kehilangan motivasi dan makna kerja",
    teks: "Pekerjaan yang dulu terasa berarti kini terasa datar atau sekadar rutinitas.",
  },
  {
    icon: CloudRain,
    judul: "Mudah emosional atau menjadi sinis",
    teks: "Reaksi terhadap rekan kerja, atasan, atau tugas terasa lebih tajam dari biasanya.",
  },
  {
    icon: Target,
    judul: "Sulit fokus dan produktivitas menurun",
    teks: "Pekerjaan yang sederhana membutuhkan waktu lebih lama untuk diselesaikan.",
  },
  {
    icon: Moon,
    judul: "Sulit tidur atau pola istirahat terganggu",
    teks: "Pikiran tentang pekerjaan masih berjalan saat waktunya beristirahat.",
  },
  {
    icon: Scale,
    judul: "Merasa kewalahan pada pekerjaan biasa",
    teks: "Beban yang dulu terasa wajar kini terasa jauh lebih berat untuk dihadapi.",
  },
  {
    icon: Users,
    judul: "Menarik diri dari orang lain",
    teks: "Muncul dorongan menghindari interaksi dengan rekan kerja, teman, atau keluarga.",
  },
  {
    icon: Sparkles,
    judul: "Sulit menikmati aktivitas di luar pekerjaan",
    teks: "Hal-hal yang biasanya menyenangkan terasa kurang menarik atau melelahkan.",
  },
];

const KAPAN = [
  {
    judul: "Keluhan berlangsung terus-menerus",
    teks: "Rasa lelah dan kehilangan energi bertahan dari waktu ke waktu, bukan hanya pada masa sibuk tertentu.",
  },
  {
    judul: "Mengganggu pekerjaan, relasi, atau istirahat",
    teks: "Kondisi mulai terasa pada kualitas kerja, hubungan dengan orang terdekat, atau pola tidur Anda.",
  },
  {
    judul: "Sulit dikelola sendiri",
    teks: "Berbagai cara sudah dicoba — cuti, mengurangi beban, mengatur waktu — namun kondisinya terasa tetap.",
  },
  {
    judul: "Ingin memahami akar masalah lebih awal",
    teks: "Anda tidak perlu menunggu kondisi memburuk. Konsultasi juga dapat digunakan untuk memahami situasi sejak dini.",
  },
];

const PEMBAHASAN = [
  {
    icon: Brain,
    judul: "Memahami kondisi dan pemicu",
    teks: "Menelusuri apa yang sedang Anda alami serta situasi yang memicu atau memperberatnya.",
  },
  {
    icon: Building2,
    judul: "Pola stres dan tuntutan pekerjaan",
    teks: "Melihat beban kerja, ekspektasi, dan dinamika lingkungan kerja yang berpengaruh.",
  },
  {
    icon: CloudRain,
    judul: "Pikiran dan respons emosional",
    teks: "Mengenali cara Anda memaknai tekanan dan bagaimana emosi meresponsnya.",
  },
  {
    icon: Scale,
    judul: "Batasan kerja dan pemulihan",
    teks: "Membahas ruang istirahat, batasan yang realistis, dan kebutuhan pemulihan Anda.",
  },
  {
    icon: HeartHandshake,
    judul: "Strategi coping yang realistis",
    teks: "Menyusun langkah yang sesuai dengan kondisi nyata Anda, bukan saran umum yang sulit diterapkan.",
  },
  {
    icon: Compass,
    judul: "Rencana tindak lanjut dan rujukan",
    teks: "Menentukan langkah berikutnya, termasuk rujukan ke tenaga medis bila memang diperlukan.",
  },
];

const MANFAAT = [
  {
    judul: "Memahami pola yang berulang",
    teks: "Konsultasi dapat membantu Anda melihat kaitan antara situasi kerja, pikiran, dan kelelahan yang dirasakan.",
  },
  {
    judul: "Ruang aman untuk bercerita",
    teks: "Anda dapat menyampaikan kondisi Anda tanpa dihakimi, dalam sesi yang bersifat rahasia.",
  },
  {
    judul: "Menyusun langkah yang realistis",
    teks: "Sesi diarahkan pada langkah yang dapat benar-benar Anda jalankan dalam keseharian.",
  },
  {
    judul: "Mengenali kebutuhan pemulihan",
    teks: "Membantu Anda mengenali bentuk istirahat dan dukungan yang paling Anda butuhkan saat ini.",
  },
  {
    judul: "Mengevaluasi pilihan menghadapi tuntutan kerja",
    teks: "Anda dapat menimbang pilihan yang tersedia dengan sudut pandang yang lebih jernih.",
  },
  {
    judul: "Rujukan bila diperlukan",
    teks: "Bila kondisi Anda membutuhkan penanganan medis, psikolog akan mengarahkan pada rujukan yang sesuai.",
  },
];

const LANGKAH = [
  {
    no: "01",
    judul: "Hubungi & buat janji",
    teks: "Sampaikan kebutuhan Anda melalui formulir kontak atau WhatsApp. Anda tidak perlu menjelaskan seluruh persoalan di tahap ini.",
  },
  {
    no: "02",
    judul: "Pemetaan kebutuhan awal",
    teks: "Kami membantu memahami gambaran kebutuhan Anda dan mengarahkannya kepada psikolog yang relevan.",
  },
  {
    no: "03",
    judul: "Sesi bersama psikolog",
    teks: "Sesi dapat berlangsung secara online maupun tatap muka di kantor Talenta Mulia, Sidoarjo.",
  },
  {
    no: "04",
    judul: "Rencana tindak lanjut",
    teks: "Anda dan psikolog menyepakati langkah berikutnya sesuai kebutuhan, termasuk rujukan bila diperlukan.",
  },
];

const SEGMEN = [
  {
    judul: "Karyawan & profesional",
    teks: "Mereka yang menghadapi beban kerja tinggi, tenggat berulang, atau lingkungan kerja yang menuntut.",
  },
  {
    judul: "Pemimpin & manajer",
    teks: "Mereka yang memikul tanggung jawab tim sekaligus tekanan target dan pengambilan keputusan.",
  },
  {
    judul: "Sulit memisahkan kerja dan kehidupan pribadi",
    teks: "Ketika pekerjaan terus terbawa ke rumah dan waktu istirahat terasa tidak pernah benar-benar utuh.",
  },
  {
    judul: "Siapa pun yang merasa kelelahan emosional",
    teks: "Termasuk wirausaha, tenaga kesehatan, pendidik, pekerja lepas, maupun mereka yang menjalankan peran pengasuhan.",
  },
];

const FAQ = [
  {
    q: "Apa itu burnout?",
    a: "Burnout umumnya dipahami sebagai kondisi kelelahan fisik dan emosional yang berkaitan dengan stres berkepanjangan dalam konteks pekerjaan yang belum berhasil dikelola. Gambarannya sering berupa kelelahan yang menetap, jarak emosional dari pekerjaan, dan menurunnya rasa efektif dalam bekerja.",
  },
  {
    q: "Apa beda burnout dan stres kerja biasa?",
    a: "Stres kerja umumnya muncul pada situasi tertentu dan mereda setelah situasinya berlalu atau setelah beristirahat. Pada burnout, kelelahan cenderung menetap dan disertai menurunnya motivasi serta makna terhadap pekerjaan. Perbedaan ini paling baik ditelusuri bersama psikolog.",
  },
  {
    q: "Apa tanda burnout yang umum dibicarakan?",
    a: "Beberapa yang sering muncul adalah kelelahan yang tidak hilang meski beristirahat, kehilangan motivasi, mudah emosional atau sinis terhadap pekerjaan, sulit fokus, gangguan tidur, dan menarik diri dari orang lain. Tanda-tanda ini tidak otomatis berarti seseorang mengalami burnout.",
  },
  {
    q: "Apakah burnout bisa ditangani dengan konseling psikologis?",
    a: "Konseling psikologis dapat menjadi ruang untuk memahami kondisi, memetakan pemicu, dan menyusun langkah pemulihan yang realistis. Hasil setiap orang berbeda, dan psikolog akan merujuk ke tenaga medis bila kondisi Anda membutuhkannya.",
  },
  {
    q: "Kapan saya perlu konsultasi dengan psikolog karena burnout?",
    a: "Tidak ada ambang batas baku. Banyak orang memilih berkonsultasi ketika keluhan berlangsung terus-menerus, mulai memengaruhi pekerjaan, relasi, atau istirahat, atau ketika upaya mengelola sendiri terasa belum cukup.",
  },
  {
    q: "Apakah konsultasi burnout bisa dilakukan online?",
    a: "Bisa. Sesi dapat diikuti secara online dari tempat yang nyaman dan privat bagi Anda, maupun secara tatap muka di kantor Talenta Mulia, Sidoarjo.",
  },
  {
    q: "Apakah sesi konsultasi bersifat rahasia?",
    a: `Ya. ${KERAHASIAAN_NOTE}`,
  },
  {
    q: "Apakah saya harus punya diagnosis burnout dulu?",
    a: "Tidak. Anda tidak perlu memiliki diagnosis apa pun sebelum berkonsultasi. Justru salah satu tujuan sesi awal adalah memahami apakah keluhan Anda berkaitan dengan burnout, stres, kecemasan, atau kondisi lain.",
  },
  {
    q: "Apakah burnout hanya dialami karyawan kantoran?",
    a: "Tidak. Kelelahan kerja dapat dialami siapa saja yang menghadapi tuntutan berkepanjangan — termasuk pemimpin, wirausaha, tenaga kesehatan, pendidik, pekerja lepas, maupun mereka yang menjalankan peran pengasuhan.",
  },
  {
    q: "Berapa lama satu sesi konseling burnout?",
    a: "Detail sesi, termasuk durasi dan pengaturan teknis, akan dikonfirmasi saat booking karena disesuaikan dengan kebutuhan dan jenis layanan yang dipilih.",
  },
  {
    q: "Bagaimana cara membuat janji konsultasi?",
    a: "Anda dapat mengisi formulir pada halaman Kontak atau menghubungi kami melalui WhatsApp. Kami akan membantu mengarahkan kebutuhan Anda kepada psikolog yang relevan dan menyepakati jadwal sesi.",
  },
];

export const Route = createFileRoute("/konseling-burnout")({
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
      jsonLd(breadcrumbSchema([{ name: "Konseling Burnout", path: PATH }])),
      jsonLd(webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH })),
      jsonLd(
        serviceSchema({
          name: "Konseling Burnout",
          description:
            "Layanan konseling burnout dan kelelahan kerja bersama psikolog Talenta Mulia, tersedia secara online maupun tatap muka di Sidoarjo, Jawa Timur.",
          path: PATH,
          serviceType: "Konseling Psikologis",
          providerPeople: [...PSIKOLOG],
          offerings: LAYANAN_TERKAIT.map((l) => ({
            name: LAYANAN_INDIVIDU[l.slug]!.nama,
            path: `/layanan/${l.slug}`,
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
            <span className="text-primary">Konseling Burnout</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Konseling Burnout
              </p>
              <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
                Konseling Burnout dengan Psikolog: Membantu Anda Pulih dan Menata Kembali
                Keseimbangan Hidup
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Burnout dapat membuat seseorang merasa sangat lelah, kehilangan motivasi, sulit
                fokus, atau merasa pekerjaan dan kehidupan sehari-hari semakin berat. Konsultasi
                bersama psikolog membantu Anda memahami kondisi yang sedang dialami dan menentukan
                langkah yang lebih terarah.
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
                {["Rahasia & Beretika", "Online & Tatap Muka", "Didampingi Psikolog"].map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                  >
                    <ShieldCheck className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <img
                src={heroImage}
                alt="Seorang psikolog Talenta Mulia mendampingi klien yang membicarakan kelelahan kerja dalam sesi konseling"
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
      <section aria-labelledby="definisi" className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h2
          id="definisi"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Apa Itu Burnout?
        </h2>
        <div className="mt-6 space-y-5 rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <strong className="text-primary">Burnout</strong> umumnya dipahami sebagai kondisi
            kelelahan fisik dan emosional yang berkaitan dengan stres kronis dalam konteks pekerjaan
            yang belum berhasil dikelola. Gambaran yang sering muncul adalah rasa lelah yang
            menetap, jarak emosional terhadap pekerjaan, dan menurunnya rasa efektif dalam bekerja.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Burnout berbeda dari sekadar lelah setelah bekerja. Kelelahan biasa umumnya mereda
            setelah istirahat cukup atau setelah masa sibuk berlalu. Pada burnout, kelelahan
            cenderung bertahan meski Anda sudah beristirahat, dan sering disertai kehilangan
            motivasi serta makna terhadap pekerjaan.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Halaman ini tidak dimaksudkan untuk memberi diagnosis. Konsultasi bersama psikolog dapat
            membantu memahami apakah keluhan yang Anda alami berkaitan dengan burnout, stres kerja,
            kecemasan, atau kondisi lain — sehingga langkah yang diambil lebih tepat sasaran.
          </p>
        </div>
      </section>

      {/* Tanda-tanda */}
      <section aria-labelledby="tanda" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="tanda"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Tanda-Tanda Burnout yang Perlu Diperhatikan
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Tanda-tanda berikut sering dibicarakan dalam konteks kelelahan kerja. Kehadirannya tidak
            otomatis berarti Anda mengalami burnout — namun bisa menjadi alasan yang wajar untuk
            berkonsultasi.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TANDA.map((item) => (
              <article
                key={item.judul}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-primary">
                  {item.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.teks}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Kapan konsultasi */}
      <section aria-labelledby="kapan" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2
          id="kapan"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Kapan Sebaiknya Konsultasi dengan Psikolog?
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Tidak ada batas baku yang harus dipenuhi sebelum seseorang boleh berkonsultasi. Beberapa
          situasi berikut sering menjadi pertimbangan.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {KAPAN.map((item) => (
            <div key={item.judul} className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h3 className="font-heading text-lg font-semibold text-primary">{item.judul}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.teks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pembahasan */}
      <section aria-labelledby="pembahasan" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="pembahasan"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Apa yang Dibahas dalam Konseling Burnout?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PEMBAHASAN.map((item) => (
              <article
                key={item.judul}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                  {item.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.teks}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Manfaat */}
      <section aria-labelledby="manfaat" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2
          id="manfaat"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Manfaat Konsultasi Burnout
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Setiap orang menjalani proses yang berbeda. Konsultasi tidak menjanjikan hasil tertentu,
          namun dapat membantu dalam beberapa hal berikut.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MANFAAT.map((item) => (
            <div key={item.judul} className="rounded-2xl border border-border bg-secondary/40 p-6">
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
            Bagaimana Proses Konseling Burnout di Talenta Mulia?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Sesi dapat dijalankan secara online maupun tatap muka, menyesuaikan kebutuhan dan
            kenyamanan Anda.
          </p>
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
          Konseling Burnout Online atau Tatap Muka
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
              <MonitorSmartphone className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-primary">Sesi online</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Praktis diikuti dari rumah, kantor, atau tempat lain yang privat dan nyaman bagi Anda.
              Pilihan ini sering membantu ketika jadwal kerja padat atau jarak menjadi kendala.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-primary">Sesi tatap muka</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Berlangsung di kantor Talenta Mulia, Sidoarjo, dengan ruang konsultasi yang privat.
              Untuk kebutuhan tertentu, psikolog dapat menyarankan sesi tatap muka berdasarkan
              penilaian profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Segmentasi */}
      <section aria-labelledby="siapa" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="siapa"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Siapa yang Bisa Mengikuti?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SEGMEN.map((item) => (
              <article
                key={item.judul}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-heading text-base font-semibold text-primary">{item.judul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.teks}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Psikolog */}
      <section aria-labelledby="psikolog" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2
          id="psikolog"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Psikolog yang Mendampingi
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

      {/* Layanan terkait */}
      <section aria-labelledby="terkait" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="terkait"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Layanan Terkait
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Bila kebutuhan Anda terasa lebih dekat pada hal lain, layanan berikut mungkin lebih
            sesuai.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LAYANAN_TERKAIT.map((l) => {
              const item = LAYANAN_INDIVIDU[l.slug]!;
              return (
                <Link
                  key={l.slug}
                  to="/layanan/$slug"
                  params={{ slug: l.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
                >
                  <h3 className="font-heading text-base font-semibold text-primary">{item.nama}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.kapan}</p>
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
            <Link
              to="/konsultasi-psikolog-online"
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
            >
              <h3 className="font-heading text-base font-semibold text-primary">
                Konsultasi Psikolog Online
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Relevan bila Anda ingin memulai sesi secara daring dari lokasi yang nyaman dan
                privat.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                Selengkapnya
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="mx-auto max-w-4xl px-5 py-14 md:py-20">
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
      </section>

      {/* Catatan keselamatan */}
      <section aria-labelledby="catatan" className="mx-auto max-w-4xl px-5 pb-14 md:pb-16">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
          <h2 id="catatan" className="font-heading text-xl font-bold text-primary">
            Catatan Penting
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Konseling burnout di Talenta Mulia merupakan layanan pendampingan psikologis, bukan
            layanan gawat darurat. Jika Anda atau seseorang yang Anda kenal berada dalam kondisi
            krisis atau berisiko menyakiti diri sendiri maupun orang lain, segera hubungi layanan
            gawat darurat atau tenaga medis terdekat. Bila kondisi Anda membutuhkan penanganan
            medis, psikolog kami akan memberikan rujukan yang sesuai.
          </p>
        </div>
      </section>

      {/* Bacaan terkait */}
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
            to="/konsultasi-psikolog-online"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Konsultasi psikolog online
          </Link>
          <Link
            to="/layanan/$slug"
            params={{ slug: "stres-kecemasan" }}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Stres &amp; kecemasan
          </Link>
          <Link
            to="/layanan/$slug"
            params={{ slug: "konseling-psikologis" }}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Konseling psikologis
          </Link>
          <Link
            to="/faq"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            FAQ Talenta Mulia
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
                Tidak harus menunggu sampai benar-benar kehabisan tenaga untuk mencari bantuan.
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Bila kelelahan kerja mulai terasa mengganggu, Anda bisa membicarakannya lebih awal.
                Sampaikan kebutuhan Anda, dan kami bantu arahkan ke psikolog yang relevan — online
                maupun tatap muka.
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
