import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  ChevronRight,
  Coins,
  Compass,
  HeartHandshake,
  Home,
  MessageCircle,
  MessagesSquare,
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

const PATH = "/konseling-pranikah";

const TITLE = "Konseling Pranikah dengan Psikolog | Talenta Mulia";
const DESCRIPTION =
  "Konseling pranikah bersama psikolog Talenta Mulia untuk membantu pasangan mempersiapkan komunikasi, harapan, nilai, dan kehidupan pernikahan. Online maupun tatap muka di Sidoarjo.";

const WA_URL =
  "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20konsultasi%20tentang%20konseling%20pranikah.";

const PSIKOLOG = ["maulidah", "mamluatul", "hilda"] as const;

const LAYANAN_TERKAIT = [
  {
    slug: "konseling-pernikahan",
    kapan: "Relevan bila Anda dan pasangan ingin melanjutkan pendampingan setelah menikah.",
  },
  {
    slug: "konseling-psikologis",
    kapan: "Relevan bila ada persoalan pribadi yang ingin dibicarakan secara individual lebih dulu.",
  },
  {
    slug: "stres-kecemasan",
    kapan: "Relevan bila persiapan pernikahan disertai rasa cemas, tegang, atau pikiran yang sulit tenang.",
  },
] as const;

const MENGAPA = [
  {
    icon: Target,
    judul: "Menyamakan ekspektasi pernikahan",
    teks: "Setiap orang membawa gambaran pernikahan yang berbeda. Membicarakannya lebih awal membantu kedua pihak memahami harapan masing-masing sebelum menjalaninya bersama.",
  },
  {
    icon: MessagesSquare,
    judul: "Membangun komunikasi yang lebih sehat",
    teks: "Konseling memberi ruang untuk melatih cara menyampaikan kebutuhan dan mendengarkan pasangan, terutama pada topik yang tidak mudah dibicarakan.",
  },
  {
    icon: Scale,
    judul: "Mengenali pola konflik dan cara mengelolanya",
    teks: "Perbedaan pendapat wajar terjadi. Yang membedakan adalah cara pasangan meresponsnya — dan pola itu dapat dikenali sejak sebelum menikah.",
  },
  {
    icon: Compass,
    judul: "Membicarakan nilai, batasan, dan peran",
    teks: "Prinsip hidup, batasan pribadi, dan pembagian tanggung jawab rumah tangga lebih tenang dibahas sebelum keduanya berada dalam tekanan keseharian.",
  },
  {
    icon: CalendarClock,
    judul: "Mempersiapkan perubahan setelah menikah",
    teks: "Menikah mengubah rutinitas, relasi keluarga, dan prioritas. Persiapan membantu pasangan menghadapi transisi itu dengan gambaran yang lebih jelas.",
  },
  {
    icon: ShieldCheck,
    judul: "Ruang aman untuk membahas hal sensitif",
    teks: "Beberapa topik terasa canggung dibicarakan berdua saja. Kehadiran psikolog membantu percakapan tetap terarah dan saling menghargai.",
  },
];

const TOPIK = [
  {
    icon: MessagesSquare,
    judul: "Komunikasi pasangan",
    teks: "Cara menyampaikan pendapat, mendengarkan, dan menanggapi ketika suasana sedang tidak mudah.",
  },
  {
    icon: Target,
    judul: "Harapan dan tujuan pernikahan",
    teks: "Gambaran kehidupan berumah tangga yang ingin dibangun bersama dalam jangka pendek maupun panjang.",
  },
  {
    icon: Compass,
    judul: "Nilai, prinsip, dan prioritas hidup",
    teks: "Hal-hal yang dianggap penting oleh masing-masing dan bagaimana keduanya bertemu.",
  },
  {
    icon: Coins,
    judul: "Keuangan rumah tangga",
    teks: "Cara mengelola kebutuhan bersama, kebiasaan finansial, dan cara membicarakannya tanpa ketegangan.",
  },
  {
    icon: Scale,
    judul: "Pembagian peran dan tanggung jawab",
    teks: "Pembagian pekerjaan rumah, dukungan karier, dan tanggung jawab keseharian yang disepakati bersama.",
  },
  {
    icon: HeartHandshake,
    judul: "Konflik dan penyelesaian masalah",
    teks: "Perbedaan pendapat, cara meredakan ketegangan, dan mencari jalan keluar yang bisa diterima berdua.",
  },
  {
    icon: Users,
    judul: "Keluarga besar dan batasan",
    teks: "Relasi dengan keluarga masing-masing serta batasan yang perlu disepakati sejak awal.",
  },
  {
    icon: Home,
    judul: "Anak, karier, dan rencana masa depan",
    teks: "Pandangan tentang anak dan pola pengasuhan, pilihan karier, tempat tinggal, dan rencana jangka panjang.",
  },
];

const SEGMEN = [
  {
    judul: "Pasangan yang ingin persiapan matang",
    teks: "Ingin memasuki pernikahan dengan pembicaraan yang lebih lengkap, bukan sekadar persiapan acara.",
  },
  {
    judul: "Pasangan yang sering berbeda pendapat",
    teks: "Perbedaan pendapat bukan tanda hubungan gagal. Konseling membantu memahami polanya dengan lebih tenang.",
  },
  {
    judul: "Ingin membahas isu sensitif lebih dulu",
    teks: "Topik seperti keuangan, keluarga besar, atau rencana anak terasa lebih aman dibahas dengan pendampingan.",
  },
  {
    judul: "Latar belakang atau nilai yang berbeda",
    teks: "Perbedaan kebiasaan, budaya keluarga, atau prioritas hidup yang ingin dijembatani sejak awal.",
  },
  {
    judul: "Ingin memperbaiki pola komunikasi",
    teks: "Merasa percakapan penting sering berakhir buntu dan ingin menemukan cara yang lebih efektif.",
  },
  {
    judul: "Bingung harus mulai membicarakan apa",
    teks: "Konseling memberi struktur, sehingga pasangan tidak perlu menebak-nebak topik apa yang penting dibahas.",
  },
];

const MANFAAT = [
  {
    judul: "Memahami pasangan lebih utuh",
    teks: "Konseling dapat membantu Anda mengenali cara pasangan berpikir, merasa, dan merespons situasi tertentu.",
  },
  {
    judul: "Percakapan yang lebih terstruktur",
    teks: "Topik penting dibahas satu per satu dengan panduan psikolog, sehingga tidak melebar atau terlewat.",
  },
  {
    judul: "Mengenali potensi titik gesek",
    teks: "Perbedaan yang berpotensi menjadi konflik dapat dikenali lebih awal dan dibicarakan dengan kepala dingin.",
  },
  {
    judul: "Menyusun kesepakatan yang realistis",
    teks: "Kesepakatan disusun berdasarkan kondisi nyata kedua pihak, bukan aturan umum yang sulit dijalankan.",
  },
  {
    judul: "Ruang aman dan rahasia",
    teks: "Kedua pihak dapat menyampaikan yang dirasakan tanpa dihakimi, dalam sesi yang bersifat rahasia.",
  },
  {
    judul: "Rujukan bila diperlukan",
    teks: "Bila kebutuhan Anda memerlukan penanganan lain, psikolog akan mengarahkan pada rujukan yang sesuai.",
  },
];

const LANGKAH = [
  {
    no: "01",
    judul: "Hubungi & buat janji",
    teks: "Sampaikan kebutuhan Anda melalui formulir kontak atau WhatsApp. Tidak perlu menjelaskan seluruh detail di tahap ini.",
  },
  {
    no: "02",
    judul: "Pemetaan kebutuhan awal",
    teks: "Kami membantu memahami gambaran kebutuhan Anda berdua dan mengarahkannya kepada psikolog yang relevan.",
  },
  {
    no: "03",
    judul: "Sesi konseling bersama psikolog",
    teks: "Sesi dipandu psikolog dengan topik yang disesuaikan kebutuhan pasangan, secara online maupun tatap muka.",
  },
  {
    no: "04",
    judul: "Evaluasi & tindak lanjut",
    teks: "Anda dan psikolog meninjau hasil pembicaraan dan menyepakati langkah berikutnya sesuai kebutuhan.",
  },
];

const FAQ = [
  {
    q: "Apa itu konseling pranikah?",
    a: "Konseling pranikah adalah sesi pendampingan bersama psikolog bagi pasangan yang bersiap menikah. Sesi ini menjadi ruang terstruktur untuk membicarakan komunikasi, harapan, nilai, pembagian peran, dan berbagai topik penting lain sebelum menjalani kehidupan pernikahan.",
  },
  {
    q: "Apakah harus datang berdua?",
    a: "Idealnya diikuti berdua karena sebagian besar pembahasan bersifat relasional. Namun, sesi individual juga dimungkinkan bila salah satu pihak ingin membicarakan sesuatu lebih dulu atau kondisi belum memungkinkan hadir bersama.",
  },
  {
    q: "Kapan sebaiknya mulai konseling pranikah?",
    a: "Bisa dilakukan jauh sebelum hari pernikahan dan tidak perlu menunggu munculnya masalah besar. Semakin awal dimulai, semakin banyak ruang untuk berdiskusi dan mengambil keputusan dengan tenang.",
  },
  {
    q: "Apakah konseling pranikah hanya untuk pasangan yang bermasalah?",
    a: "Tidak. Banyak pasangan mengikutinya justru sebagai bentuk persiapan, bukan karena sedang menghadapi konflik. Perbedaan pendapat pun bukan tanda hubungan gagal.",
  },
  {
    q: "Apa saja yang dibahas dalam sesi?",
    a: "Topik umumnya mencakup komunikasi, harapan dan tujuan pernikahan, nilai dan prioritas hidup, keuangan rumah tangga, pembagian peran, penyelesaian konflik, relasi dengan keluarga besar, serta rencana masa depan seperti anak, karier, dan tempat tinggal. Topik disesuaikan dengan kebutuhan pasangan.",
  },
  {
    q: "Apakah tersedia sesi online?",
    a: "Tersedia. Sesi dapat diikuti secara online dari tempat yang nyaman dan privat, maupun tatap muka di kantor Talenta Mulia, Sidoarjo.",
  },
  {
    q: "Apakah sesi konseling bersifat rahasia?",
    a: `Ya. ${KERAHASIAAN_NOTE}`,
  },
  {
    q: "Berapa kali sesi konseling pranikah diperlukan?",
    a: "Jumlah sesi berbeda-beda karena bergantung pada kebutuhan dan topik yang ingin dibahas. Hal ini akan dibicarakan bersama psikolog, dan detail sesi dikonfirmasi saat booking.",
  },
  {
    q: "Apakah psikolog akan menentukan kami siap menikah atau tidak?",
    a: "Tidak. Konseling pranikah bukan tes kelayakan dan tidak menilai pasangan layak atau tidak layak menikah. Perannya adalah membantu Anda berdua memahami diri, pasangan, dan hal-hal yang perlu disepakati; keputusan tetap berada di tangan Anda.",
  },
  {
    q: "Apakah perlu persiapan khusus sebelum sesi?",
    a: "Tidak ada persiapan wajib. Anda cukup datang dengan kesediaan untuk berbicara terbuka. Bila ada topik yang ingin diprioritaskan, Anda dapat menyampaikannya di awal sesi.",
  },
  {
    q: "Bagaimana cara membuat janji konsultasi?",
    a: "Anda dapat mengisi formulir pada halaman Kontak atau menghubungi kami melalui WhatsApp. Kami akan membantu mengarahkan kebutuhan Anda kepada psikolog yang relevan dan menyepakati jadwal sesi.",
  },
];

export const Route = createFileRoute("/konseling-pranikah")({
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
      jsonLd(breadcrumbSchema([{ name: "Konseling Pranikah", path: PATH }])),
      jsonLd(webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH })),
      jsonLd(
        serviceSchema({
          name: "Konseling Pranikah",
          description:
            "Layanan konseling pranikah bersama psikolog Talenta Mulia untuk pasangan yang mempersiapkan pernikahan, tersedia online maupun tatap muka di Sidoarjo, Jawa Timur.",
          path: PATH,
          serviceType: "Konseling Pranikah",
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
            <span className="text-primary">Konseling Pranikah</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Konseling Pranikah
              </p>
              <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
                Konseling Pranikah dengan Psikolog untuk Mempersiapkan Pernikahan dengan Lebih Siap
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Konseling pranikah membantu pasangan membicarakan hal-hal penting sebelum menikah —
                mulai dari pola komunikasi, harapan, dan nilai yang dianut, hingga kesiapan
                menghadapi kehidupan bersama. Sesi didampingi psikolog, tersedia online maupun tatap
                muka.
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
                alt="Psikolog Talenta Mulia mendampingi sesi konseling pranikah bersama pasangan calon pengantin"
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
          Apa Itu Konseling Pranikah?
        </h2>
        <div className="mt-6 space-y-5 rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <strong className="text-primary">Konseling pranikah</strong> adalah sesi pendampingan
            bersama psikolog bagi pasangan yang bersiap menikah. Sesi ini menjadi ruang terstruktur
            untuk mengeksplorasi kesiapan, pola komunikasi, ekspektasi, nilai hidup, pembagian
            peran, pengelolaan konflik, keuangan rumah tangga, relasi dengan keluarga besar, dan
            topik relevan lainnya.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Berbeda dari percakapan sehari-hari, konseling pranikah memberi panduan agar topik
            penting benar-benar terbahas — termasuk hal-hal yang biasanya terasa canggung untuk
            dimulai. Psikolog membantu menjaga percakapan tetap terarah, seimbang, dan saling
            menghargai.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Konseling pranikah bukan tes yang menentukan pasangan layak atau tidak layak menikah.
            Tujuannya adalah memberi Anda berdua pemahaman yang lebih jelas tentang diri, pasangan,
            dan hal-hal yang perlu disepakati — sementara keputusan tetap sepenuhnya berada di
            tangan Anda.
          </p>
        </div>
      </section>

      {/* Mengapa penting */}
      <section aria-labelledby="mengapa" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="mengapa"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Mengapa Konseling Pranikah Penting?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MENGAPA.map((item) => (
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

      {/* Topik */}
      <section aria-labelledby="topik" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2
          id="topik"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Apa Saja yang Dibahas dalam Konseling Pranikah?
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Topik berikut sering menjadi bahan pembicaraan. Cakupan dan urutannya disesuaikan dengan
          kebutuhan setiap pasangan.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TOPIK.map((item) => (
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
      </section>

      {/* Segmentasi */}
      <section aria-labelledby="siapa" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="siapa"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Siapa yang Sebaiknya Mengikuti Konseling Pranikah?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Waktu */}
      <section aria-labelledby="waktu" className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h2
          id="waktu"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Kapan Waktu yang Tepat untuk Konseling Pranikah?
        </h2>
        <div className="mt-6 space-y-5 rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
          <p className="leading-relaxed text-muted-foreground">
            Konseling pranikah dapat dilakukan jauh sebelum hari pernikahan. Anda tidak perlu
            menunggu munculnya masalah besar atau mendekati hari-H untuk mulai membicarakan hal-hal
            penting bersama pasangan.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Semakin awal dimulai, semakin banyak ruang yang tersedia untuk berdiskusi, mencerna
            perbedaan, dan mengambil keputusan dengan tenang — tanpa terdesak persiapan acara yang
            biasanya padat menjelang pernikahan.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Meski begitu, memulai lebih dekat dengan hari pernikahan tetap bermanfaat. Yang
            terpenting adalah kesediaan kedua pihak untuk berbicara terbuka.
          </p>
        </div>
      </section>

      {/* Manfaat */}
      <section aria-labelledby="manfaat" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="manfaat"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Manfaat Konseling Pranikah
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Setiap pasangan menjalani proses yang berbeda. Konseling tidak menjanjikan hasil
            tertentu, namun dapat membantu dalam beberapa hal berikut.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MANFAAT.map((item) => (
              <div key={item.judul} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-primary">{item.judul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.teks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses */}
      <section aria-labelledby="proses" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2
          id="proses"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Bagaimana Proses Konseling Pranikah?
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Format dan jumlah sesi disesuaikan dengan kebutuhan pasangan, baik secara online maupun
          tatap muka.
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
      </section>

      {/* Online vs tatap muka */}
      <section aria-labelledby="mode" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="mode"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Konseling Pranikah Online atau Tatap Muka
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
                <MonitorSmartphone className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-primary">Sesi online</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Cocok bagi pasangan yang berada di kota berbeda, memiliki jadwal padat, atau lebih
                nyaman mengikuti sesi dari tempat yang privat. Sesi tetap dipandu psikolog seperti
                pertemuan langsung.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
                <Building2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-primary">Sesi tatap muka</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Berlangsung di kantor Talenta Mulia, Jl. Raya Gadung No.5, Wage, Kec. Taman,
                Sidoarjo, dengan ruang konsultasi yang privat. Untuk kebutuhan tertentu, psikolog
                dapat menyarankan sesi tatap muka berdasarkan penilaian profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Psikolog */}
      <section aria-labelledby="psikolog" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2
          id="psikolog"
          className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Didampingi Psikolog Talenta Mulia
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
            Pertanyaan yang Sering Ditanyakan tentang Konseling Pranikah
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

      {/* Catatan */}
      <section aria-labelledby="catatan" className="mx-auto max-w-4xl px-5 py-14 md:py-16">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
          <h2 id="catatan" className="font-heading text-xl font-bold text-primary">
            Catatan Penting
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Konseling pranikah di Talenta Mulia merupakan layanan pendampingan psikologis, bukan
            layanan gawat darurat. Jika Anda atau pasangan berada dalam situasi krisis atau berisiko
            terhadap keselamatan diri maupun orang lain, segera hubungi layanan gawat darurat atau
            tenaga medis terdekat. Bila kondisi Anda membutuhkan penanganan medis, psikolog kami
            akan memberikan rujukan yang sesuai.
          </p>
        </div>
      </section>

      {/* Layanan terkait */}
      <section aria-labelledby="terkait" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2
            id="terkait"
            className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Layanan &amp; Halaman Terkait
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            <Link
              to="/konseling-burnout"
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
            >
              <h3 className="font-heading text-base font-semibold text-primary">
                Konseling Burnout
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Relevan bila tekanan pekerjaan mulai memengaruhi energi, suasana hati, dan relasi
                Anda.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                Selengkapnya
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
            <Link
              to="/layanan-individu"
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
            >
              <h3 className="font-heading text-base font-semibold text-primary">
                Semua Layanan Individu &amp; Keluarga
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Lihat pilihan layanan psikologi lain untuk kebutuhan pribadi maupun keluarga.
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

      {/* Final CTA */}
      <section aria-labelledby="cta" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2
                id="cta"
                className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl"
              >
                Persiapkan Pernikahan dengan Percakapan yang Lebih Bermakna
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Sampaikan kebutuhan Anda berdua, dan kami bantu arahkan ke psikolog yang relevan.
                Sesi dapat dilakukan online maupun tatap muka di Sidoarjo.
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
