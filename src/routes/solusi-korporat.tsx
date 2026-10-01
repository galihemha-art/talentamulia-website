import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { CtaPenutup } from "@/components/site/LayananDetailPage";

export const Route = createFileRoute("/solusi-korporat")({
  head: () => ({
    meta: [
      { title: "Solusi Korporat & Human Capital — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Layanan konsultasi psikologi, kesehatan, dan human capital untuk korporat, rumah sakit, BUMN, dan pemerintah di Sidoarjo dan seluruh Jawa Timur.",
      },
      {
        property: "og:title",
        content: "Solusi Korporat & Human Capital — Talenta Mulia Sidoarjo, Jawa Timur",
      },
      {
        property: "og:description",
        content:
          "Layanan konsultasi psikologi, kesehatan, dan human capital untuk korporat, rumah sakit, BUMN, dan pemerintah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/solusi-korporat"),
    ],
    links: [canonicalLink("/solusi-korporat")],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Solusi Korporat", path: "/solusi-korporat" }])),
    ],
  }),
  component: Page,
});

type Item = {
  title: string;
  text: string;
  slug?: string;
  to?: "/pelatihan" | "/kesehatan";
  soon?: boolean;
};

type Kategori = {
  key: string;
  icon: typeof Briefcase;
  label: string;
  intro: string;
  items: Item[];
  extra?: { label: string; to: "/pelatihan" | "/kesehatan" };
};

const KATEGORI: Kategori[] = [
  {
    key: "hr",
    icon: Briefcase,
    label: "HR Consulting",
    intro:
      "Pendampingan strategis untuk membangun sistem human capital yang sehat dan berkelanjutan.",
    items: [
      {
        title: "Konsultasi HR",
        slug: "konsultasi-hr",
        text: "Strategi dan sistem SDM — struktur, manajemen kinerja, hingga jalur karier.",
      },
      {
        title: "Konsultasi Organisasi",
        slug: "konsultasi-organisasi",
        text: "Pengembangan organisasi: budaya kerja, manajemen perubahan, dan efektivitas tim.",
      },
      {
        title: "Coaching",
        slug: "coaching",
        text: "Pendekatan coaching bersertifikat ICF untuk pemimpin, talenta kunci, dan tim.",
      },
    ],
  },
  {
    key: "assessment",
    icon: ClipboardCheck,
    label: "Assessment",
    intro: "Pengukuran objektif untuk keputusan seleksi, promosi, dan pengembangan talenta.",
    items: [
      {
        title: "Assessment Center",
        slug: "assessment-center",
        text: "Simulasi berbasis kompetensi dengan asesor bersertifikat untuk posisi kunci.",
      },
      {
        title: "Assessment Psikologi",
        slug: "asesmen-psikologi",
        text: "Psikotes terstandar oleh psikolog berizin untuk seleksi dan pengembangan.",
      },
      {
        title: "Pemetaan Talenta",
        slug: "pemetaan-talenta",
        text: "Peta talenta 9-box sebagai dasar promosi dan perencanaan suksesi.",
      },
    ],
  },
  {
    key: "training",
    icon: GraduationCap,
    label: "Training",
    intro: "Program pengembangan yang dirancang sesuai level jabatan dan budaya organisasi.",
    items: [
      {
        title: "Pengembangan Kepemimpinan",
        slug: "pelatihan-kepemimpinan",
        text: "Program leadership untuk first-time manager hingga senior manager, dengan pendampingan penerapan.",
      },
    ],
    extra: { label: "Lihat semua Pelatihan & Seminar", to: "/pelatihan" },
  },
  {
    key: "healthcare",
    icon: HeartPulse,
    label: "Healthcare",
    intro: "Integrasi kesehatan fisik dan mental karyawan dalam satu program yang bermakna.",
    items: [
      {
        title: "Kesejahteraan Karyawan",
        slug: "kesejahteraan-karyawan",
        text: "EAP, skrining kesehatan mental, dan pencegahan burnout di tempat kerja.",
      },
      {
        title: "Medical Wellness",
        slug: "medical-wellness",
        text: "Medical check-up eksekutif, edukasi kesehatan, dan program wellness berkala.",
      },
    ],
    extra: { label: "Konsultasi Rumah Sakit", to: "/kesehatan" },
  },
  {
    key: "recruitment",
    icon: UserPlus,
    label: "Recruitment",
    intro: "Pencarian kandidat yang tepat, dari posisi staff hingga jajaran eksekutif.",
    items: [
      {
        title: "Talent Acquisition",
        slug: "talent-acquisition",
        text: "Sourcing, screening, dan asesmen kandidat untuk posisi staff hingga menengah.",
      },
      {
        title: "Executive Search",
        slug: "executive-search",
        text: "Pencarian diskret calon eksekutif dengan asesmen mendalam dan verifikasi rekam jejak.",
      },
      {
        title: "RPO (Recruitment Process Outsourcing)",
        text: "Pengelolaan sebagian atau seluruh proses rekrutmen perusahaan Anda.",
        soon: true,
      },
      {
        title: "Headhunter",
        text: "Layanan headhunting khusus untuk kebutuhan posisi spesialis.",
        soon: true,
      },
    ],
  },
];

const ARTIKEL: { h: string; p?: string[]; ul?: [string, string][]; ol?: [string, string][] }[] = [
  {
    h: "Mengapa Kesejahteraan Mental Karyawan (Employee Wellness) Menentukan Kesuksesan Bisnis Anda?",
    p: [
      "Di era modern yang serba cepat ini, kesehatan mental karyawan bukan lagi sekadar isu pelengkap, melainkan fondasi utama dari produktivitas perusahaan. Karyawan yang mengalami tekanan psikologis berat, stres kerja yang tidak tertangani (burnout), atau masalah rumah tangga yang terbawa ke kantor akan mengalami penurunan fokus yang tajam. Pada akhirnya, hal ini berujung pada kerugian operasional dan tingginya angka turnover (pergantian karyawan).",
      "Biro Psikologi Talenta Mulia hadir untuk menjembatani kesenjangan tersebut melalui pendampingan psikologis, Employee Assistance Program (EAP), dan Executive Coaching. Solusi korporat kami ditangani langsung oleh para ahli berlisensi, seperti pakar pengembangan organisasi bersertifikasi Executive Coach dari International Coaching Federation (ICF - PCC), Ibu Eka Rachmawaty. Selain itu, intervensi klinis didampingi oleh psikolog dengan Surat Izin Praktik Psikologi (SIPP) dari HIMPSI, yaitu Maulidah Muflichah, M.Psi., Psikolog. Kami menjamin penanganan yang objektif, aman, dan dapat dipertanggungjawabkan secara keilmuan.",
    ],
  },
  {
    h: "Apa Saja Layanan Solusi Korporat yang Kami Tawarkan?",
    p: [
      "Pendekatan kami bersifat holistik, memadukan ilmu psikologi klinis dengan strategi manajemen bisnis. Berikut adalah pilar utama layanan korporat kami:",
    ],
    ul: [
      ["Employee Assistance Program (EAP):", "Layanan pendampingan psikologis khusus bagi karyawan yang mengalami stres kerja, depresi, atau konflik keluarga. Program ini bertujuan memulihkan kesejahteraan mental mereka agar kembali produktif."],
      ["Executive Coaching & Leadership Development:", "Program pengembangan kapasitas bagi para pimpinan, manajer, dan eksekutif perusahaan untuk meningkatkan keterampilan kepemimpinan dan pengambilan keputusan. Sesi ini dikelola langsung oleh coach bersertifikasi ICF."],
      ["Asesmen Psikologis (Psikotes) & Rekrutmen:", "Evaluasi psikologis komprehensif untuk membantu perusahaan merekrut kandidat yang tepat, menempatkan karyawan sesuai potensi, dan merencanakan promosi jabatan secara objektif."],
      ["Pelatihan Manajemen Stres & Team Building:", "Pelatihan interaktif untuk membekali karyawan dengan keterampilan mengelola emosi, meningkatkan resiliensi, dan membangun komunikasi yang positif antar anggota tim."],
      ["Tata Kelola Klinis & Akreditasi Rumah Sakit:", "Pendampingan khusus bagi institusi kesehatan (klinik atau rumah sakit) berupa tata kelola kesejahteraan medis dan medical check-up eksekutif untuk mendukung proses peningkatan mutu dan akreditasi."],
    ],
  },
  {
    h: "Bagaimana Metode Pendekatan Klinis & Organisasi di Talenta Mulia Berlangsung?",
    p: [
      "Untuk memberikan Anda gambaran yang terstruktur sebelum menjalin kemitraan dengan kami, berikut adalah 5 langkah metode pendekatan klinis dan organisasi yang akan perusahaan Anda jalani:",
    ],
    ol: [
      ["Asesmen Kebutuhan Organisasi (Need Analysis) yang Dirahasiakan:", "Langkah pertama adalah diskusi mendalam antara perwakilan manajemen perusahaan Anda dengan tim konsultan kami. Kami akan memetakan permasalahan spesifik, seperti tingginya tingkat burnout, kebutuhan rekrutmen, atau penurunan performa tim. Kerahasiaan data perusahaan Anda sangat terjamin."],
      ["Sesi Eksplorasi Karyawan dan Pembangunan Rapport:", "Apabila program melibatkan konseling langsung dengan karyawan, psikolog kami akan membangun hubungan saling percaya (rapport) di ruang yang aman. Karyawan bebas mengutarakan tekanan kerja tanpa takut dihakimi, dengan pendekatan empati tanpa paksaan."],
      ["Pemetaan Masalah dan Formulasi Solusi Objektif:", "Berdasarkan data dari need analysis dan eksplorasi klinis, pakar kami akan menegakkan perumusan masalah. Pemetaan masalah ini dilakukan secara objektif berdasarkan standar Himpunan Psikologi Indonesia (HIMPSI) dan kerangka kerja coaching ICF."],
      ["Perancangan dan Eksekusi Intervensi Korporat:", "Kami akan mempresentasikan rancangan program penyelesaian masalah kepada pihak manajemen. Intervensi yang dieksekusi dapat berupa konseling individu, training karyawan, maupun coaching pimpinan."],
      ["Evaluasi Berkelanjutan dan Rencana Tindak Lanjut (Follow-Up):", "Keberhasilan suatu program korporat selalu diukur di tahap akhir. Kemajuan performa karyawan akan dievaluasi, lalu psikolog atau coach kami akan merekomendasikan langkah mandiri yang perlu dipertahankan oleh manajemen perusahaan."],
    ],
  },
  {
    h: "Pertanyaan yang Sering Diajukan (FAQ) Seputar Layanan Korporat Kami",
    ol: [
      ["Apakah rahasia internal perusahaan dan data medis karyawan dijamin kerahasiaannya?", "Ya, tentu saja. Kerahasiaan data perusahaan maupun cerita personal karyawan adalah prioritas mutlak dalam setiap sesi di Talenta Mulia. Kami beroperasi dengan kepatuhan penuh pada kode etik kerahasiaan HIMPSI dan standar etika ICF."],
      ["Di mana program untuk perusahaan ini dapat diselenggarakan?", "Kami menawarkan fleksibilitas penuh. Pusat klinik kami beralamat di Margomulyo, Wage, Kec. Taman, Kab. Sidoarjo, Jawa Timur, yang melayani klien offline dari area Surabaya, Sidoarjo, dan sekitarnya. Namun, kami juga melayani program secara in-house di kantor Anda, atau jarak jauh melalui konsultasi psikolog online (via video call)."],
      ["Siapa saja pakar yang akan mendampingi perusahaan saya?", "Anda akan didampingi oleh ahli dengan rekam jejak yang jelas, demi menjaga keamanan dan kredibilitas (E-E-A-T). Layanan ini dikelola oleh Executive Coach (ICF-PCC) Eka Rachmawaty, dan psikolog klinis berlisensi HIMPSI, Maulidah Muflichah, M.Psi., Psikolog."],
      ["Apakah Talenta Mulia juga melayani asesmen untuk calon karyawan baru?", "Benar. Kami menyediakan layanan asesmen psikologis atau psikotes komprehensif yang dirancang khusus untuk proses rekrutmen karyawan baru maupun evaluasi promosi jabatan."],
      ["Bagaimana cara memulai kerja sama dengan Talenta Mulia?", "Sangat mudah. Perusahaan Anda cukup menghubungi tim representatif kami untuk mengatur jadwal pertemuan awal atau need analysis tanpa komitmen yang mengikat."],
    ],
  },
  {
    h: "Jadwalkan Diskusi dengan Tim Ahli Kami Hari Ini",
    p: [
      "Jangan biarkan konflik internal dan stres kerja menghancurkan produktivitas perusahaan Anda. Hubungi representatif kami melalui Telepon/WhatsApp di +62 821-3299-0498 atau akses website kami di www.talentamulia.co.id untuk berdiskusi dengan pakar kami sekarang juga.",
    ],
  },
];

function Page() {
  const [active, setActive] = useState(KATEGORI[0]!.key);
  const kategori = KATEGORI.find((k) => k.key === active) ?? KATEGORI[0]!;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
            Solusi Korporat & Pengembangan Organisasi Talenta Mulia: Optimalkan Potensi SDM dan
            Kesejahteraan Karyawan Anda
          </h1>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Selamat datang di layanan Solusi Korporat Biro Psikologi Talenta Mulia. Jika Anda
              berada di halaman ini, Anda mungkin adalah seorang pimpinan perusahaan, manajer Human
              Resources (HR), atau pengambil keputusan yang sedang memikul tanggung jawab besar.
              Mengelola dinamika sumber daya manusia (SDM), menghadapi tingginya tingkat stres
              kerja, meredam konflik internal, hingga menjaga produktivitas tim demi tercapainya
              target bisnis bukanlah hal yang mudah. Kami di Talenta Mulia sangat memahami beban
              berat di pundak Anda. Ketahuilah bahwa perasaan lelah dan bingung yang mungkin Anda
              rasakan sangatlah valid, dan Anda tidak perlu menyelesaikan semuanya sendirian.
            </p>
            <p>
              Sebagai institusi penyedia layanan psikologi klinis dan pengembangan organisasi yang
              berpusat di Sidoarjo, Jawa Timur, Talenta Mulia berkomitmen menghadirkan ruang
              kolaborasi yang suportif, hangat, dan solutif bagi perusahaan Anda. Mengingat
              kesejahteraan karyawan berkaitan langsung dengan kelangsungan finansial dan masa depan
              institusi, seluruh program kami dirancang dengan mematuhi kriteria E-E-A-T
              (Experience, Expertise, Authoritativeness, Trustworthiness) berstandar global yang
              sangat ketat.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs kategori */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="flex flex-wrap gap-2">
          {KATEGORI.map((k) => {
            const on = k.key === active;
            return (
              <button
                key={k.key}
                type="button"
                onClick={() => setActive(k.key)}
                aria-pressed={on}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  on
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border bg-card text-primary hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                <k.icon className="h-4 w-4" />
                {k.label}
              </button>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">{kategori.intro}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kategori.items.map((item) =>
            item.soon || !item.slug ? (
              <div
                key={item.title}
                aria-disabled="true"
                className="cursor-not-allowed rounded-2xl border border-dashed border-border bg-secondary/40 p-6 opacity-70"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold text-primary">{item.title}</h3>
                  <span className="shrink-0 rounded-full bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Segera Hadir
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ) : (
              <Link
                key={item.title}
                to="/layanan/$slug"
                params={{ slug: item.slug }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
              >
                <h3 className="font-heading text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ),
          )}
        </div>

        {kategori.extra && (
          <Link
            to={kategori.extra.to}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
          >
            {kategori.extra.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </section>

      {/* Highlight MPP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <Sparkles className="mx-auto h-6 w-6 text-brand-blue" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Program Masa Persiapan Pensiun (MPP)
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Pensiun Bahagia, Hidup Bermakna
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Program unggulan kami — satu-satunya di Jawa Timur yang memadukan pendampingan
            psikologi, terapi hipnoterapi/SEFT, dan pemeriksaan medis dalam satu rangkaian. Karyawan
            yang memasuki masa persiapan pensiun dibantu menata kesiapan mental, menjaga kesehatan
            fisik, dan merancang peran baru yang bermakna setelah purnatugas.
          </p>
          <Link
            to="/program/mpp"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Pelajari Program MPP
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-20">
        <div className="space-y-12 leading-relaxed text-muted-foreground">
          {ARTIKEL.map((s) => (
            <div key={s.h}>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
                {s.h}
              </h2>
              {s.p?.map((t) => (
                <p key={t} className="mt-4">
                  {t}
                </p>
              ))}
              {s.ul && (
                <ul className="mt-4 list-disc space-y-3 pl-5">
                  {s.ul.map(([b, t]) => (
                    <li key={b}>
                      <strong className="text-primary">{b}</strong> {t}
                    </li>
                  ))}
                </ul>
              )}
              {s.ol && (
                <ol className="mt-4 list-decimal space-y-3 pl-5">
                  {s.ol.map(([b, t]) => (
                    <li key={b}>
                      <strong className="text-primary">{b}</strong> {t}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
          <p className="rounded-2xl border border-border bg-secondary/40 p-5 text-sm">
            <strong className="text-primary">Disclaimer Profesional:</strong> Halaman ini disusun
            sebagai pedoman layanan korporat dan psikoedukasi organisasi. Jika terdapat karyawan yang
            mengalami krisis kesehatan mental darurat atau indikasi depresi klinis yang mengancam
            keselamatan, segera hubungi layanan darurat kesehatan mental terdekat atau jadwalkan sesi
            darurat dengan psikolog klinis kami.
          </p>
        </div>
      </section>

      <div className="pt-16 md:pt-20">
        <CtaPenutup />
      </div>
    </>
  );
}
