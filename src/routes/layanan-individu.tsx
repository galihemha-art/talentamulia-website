import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { LAYANAN_INDIVIDU, LAYANAN_INDIVIDU_LIST, KERAHASIAAN_NOTE } from "@/lib/layanan-individu-data";

export const Route = createFileRoute("/layanan-individu")({
  head: () => ({
    meta: [
      { title: "Layanan Individu & Keluarga — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Konseling psikologis, pernikahan, parenting, remaja, hipnoterapi, trauma healing, stres, depresi, dan pendampingan ABK di Sidoarjo, Jawa Timur.",
      },
      {
        property: "og:title",
        content: "Layanan Individu & Keluarga — Talenta Mulia Sidoarjo, Jawa Timur",
      },
      {
        property: "og:description",
        content:
          "Layanan psikologi untuk profesional, eksekutif, orang tua, pelajar, dan tenaga kesehatan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/layanan-individu"),
    ],
    links: [canonicalLink("/layanan-individu")],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Layanan Individu", path: "/layanan-individu" }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
            Layanan Psikologi Individu Talenta Mulia: Ruang Aman untuk Pulih dan Menemukan Kembali
            Diri Anda
          </h1>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Halo, selamat datang di ruang aman Talenta Mulia. Silakan duduk sejenak, tarik napas
              perlahan, dan ketahuilah bahwa Anda tidak sendirian. Kami sangat memahami bahwa
              mengakui diri sedang tidak baik-baik saja dan mengambil langkah untuk mencari bantuan
              profesional membutuhkan keberanian yang luar biasa. Jika saat ini Anda merasa lelah,
              cemas, kehilangan arah, atau memendam luka batin yang tak kunjung sembuh, ketahuilah
              bahwa perasaan Anda sangatlah valid.
            </p>
            <p>
              Sebagai institusi penyedia layanan psikologi klinis terpercaya, Biro Psikologi Talenta
              Mulia berkomitmen menghadirkan ruang bercerita yang suportif, hangat, dan sama sekali
              tidak menghakimi (non-judgmental). Mengingat layanan kesehatan mental berkaitan
              langsung dengan masa depan, kebahagiaan, dan kesejahteraan hidup Anda (kategori Your
              Money or Your Life / YMYL), seluruh praktik klinis kami berjalan dengan mematuhi
              standar kredibilitas E-E-A-T (Experience, Expertise, Authoritativeness,
              Trustworthiness) yang direkomendasikan secara global.
            </p>
          </div>
          <div className="mt-7 flex max-w-2xl items-center gap-3 rounded-2xl bg-card p-5 shadow-sm">
            <ShieldCheck className="h-5 w-5 shrink-0 text-brand-blue" />
            <p className="text-sm leading-relaxed text-muted-foreground">{KERAHASIAAN_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LAYANAN_INDIVIDU_LIST.map((slug) => {
            const item = LAYANAN_INDIVIDU[slug]!;
            return (
              <Link
                key={slug}
                to="/layanan/$slug"
                params={{ slug }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
              >
                <h2 className="font-heading text-lg font-semibold text-primary">{item.nama}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.subjudul}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-border bg-secondary/40 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <MonitorSmartphone className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
            <p className="font-heading text-lg font-semibold text-primary">
              Ingin tahu cara konsultasi online atau offline?
            </p>
          </div>
          <Link
            to="/layanan/$slug"
            params={{ slug: "konsultasi-online-offline" }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Lihat cara konsultasi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-lg font-semibold text-primary">
            Cari konsultasi psikolog online?
          </p>
          <Link
            to="/konsultasi-psikolog-online"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Konsultasi Psikolog Online
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-lg font-semibold text-primary">
            Mengalami kelelahan kerja atau burnout?
          </p>
          <Link
            to="/konseling-burnout"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Konseling Burnout
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-lg font-semibold text-primary">
            Sedang mempersiapkan pernikahan?
          </p>
          <Link
            to="/konseling-pranikah"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Konseling Pranikah
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-lg font-semibold text-primary">
            Menghadapi konflik atau komunikasi yang buntu di rumah?
          </p>
          <Link
            to="/konseling-keluarga"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Konseling Keluarga
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-lg font-semibold text-primary">
            Mencari psikolog anak di Sidoarjo?
          </p>
          <Link
            to="/psikolog-anak"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Psikolog Anak
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-lg font-semibold text-primary">
            Bingung memilih jurusan atau arah karier?
          </p>
          <Link
            to="/tes-minat-bakat"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Tes Minat Bakat
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>


        <div className="mt-14 text-center">
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Buat Janji Konsultasi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16 md:pb-20">
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
              {s.list && (
                <ListTag ordered={s.ordered}>
                  {s.list.map(([b, t]) => (
                    <li key={b}>
                      <strong className="text-primary">{b}</strong> {t}
                    </li>
                  ))}
                </ListTag>
              )}
            </div>
          ))}
          <p className="rounded-2xl border border-border bg-secondary/40 p-5 text-sm">
            <strong className="text-primary">Disclaimer Medis Profesional:</strong> Halaman ini
            disusun sebagai pedoman layanan individu dan media psikoedukasi publik. Konten di
            dalamnya tidak dimaksudkan sebagai pengganti diagnosis medis resmi, perawatan klinis
            mandiri, atau sesi psikoterapi formal. Jika Anda mengalami tekanan psikologis berat atau
            krisis kesehatan mental darurat, segera hubungi profesional kesehatan mental berlisensi.
          </p>
        </div>
      </section>
    </>
  );
}

function ListTag({ ordered, children }: { ordered?: boolean; children: React.ReactNode }) {
  return ordered ? (
    <ol className="mt-4 list-decimal space-y-3 pl-5">{children}</ol>
  ) : (
    <ul className="mt-4 list-disc space-y-3 pl-5">{children}</ul>
  );
}

const ARTIKEL: { h: string; p?: string[]; list?: [string, string][]; ordered?: boolean }[] = [
  {
    h: "Mengapa Pendampingan Psikologis Individu Sangat Penting?",
    p: [
      "Di tengah ritme kehidupan yang serba cepat, banyak dari kita mengabaikan alarm dari tubuh dan pikiran. Tekanan batin yang dipendam terus-menerus dapat memicu gangguan kecemasan akut, gejala depresi, hingga hilangnya produktivitas. Melalui sesi layanan individu di Talenta Mulia, Anda akan didampingi langsung oleh pakar profesional berlisensi Surat Izin Praktik Psikologi (SIPP) dari Himpunan Psikologi Indonesia (HIMPSI), seperti Maulidah Muflichah, M.Psi., Psikolog., CHt. (Psikolog Bunda Lia) yang telah memiliki pengalaman klinis sejak tahun 2009. Kami hadir untuk membantu Anda mengurai benang kusut di pikiran agar Anda dapat kembali berdaya.",
    ],
  },
  {
    h: "Bagaimana Metode Pendekatan Klinis Individu di Talenta Mulia Berlangsung?",
    p: [
      "Untuk memberikan Anda gambaran yang jelas dan transparan sebelum memulai sesi, berikut adalah 5 langkah metode pendekatan klinis sistematis yang akan Anda jalani, baik melalui layanan tatap muka maupun konsultasi psikolog online:",
    ],
    ordered: true,
    list: [
      ["Pendaftaran dan Asesmen Awal yang Dirahasiakan:", "Langkah pertama dimulai saat Anda menghubungi representatif kami. Anda akan diminta mengisi data awal terkait keluhan yang dirasakan. Proses ini dijamin kerahasiaannya dan bertujuan untuk mencocokkan kondisi Anda dengan pendekatan terapi yang paling tepat."],
      ["Sesi Konsultasi Eksploratif dan Pembangunan Rapport:", "Saat sesi dimulai, psikolog kami akan fokus membangun hubungan saling percaya (rapport) di lingkungan yang aman. Anda bebas mengutarakan segala kecemasan, luka masa lalu, atau rasa frustrasi dengan penuh kebebasan, menggunakan pendekatan empati tanpa paksaan."],
      ["Penegakan Diagnosis dan Formulasi Psikologis:", "Berdasarkan eksplorasi di sesi awal, psikolog klinis berlisensi kami akan memetakan entitas masalah secara objektif. Proses penegakan diagnosis ini berpegang teguh pada standar keilmuan HIMPSI dan pengalaman klinis (first-hand experience)."],
      ["Perancangan dan Pelaksanaan Intervensi Terapi:", "Psikolog akan berdiskusi dengan Anda untuk menyepakati rencana pemulihan. Intervensi yang diberikan disesuaikan secara khusus dengan keunikan mental Anda, berfokus pada penyelesaian akar masalah, bukan sekadar menghilangkan gejala."],
      ["Evaluasi dan Rencana Tindak Lanjut (Follow-Up):", "Perubahan positif selalu membutuhkan proses. Di tahap akhir, kemajuan terapi Anda akan dievaluasi. Psikolog akan merekomendasikan apakah Anda membutuhkan sesi lanjutan atau cukup diberikan pembekalan tugas mandiri (seperti jurnal refleksi) untuk mempertahankan kesejahteraan emosional Anda."],
    ],
  },
  {
    h: "Apa Saja Cakupan Layanan Kesehatan Mental Individu Kami?",
    p: [
      "Pendekatan kami bersifat holistik untuk menjawab berbagai spektrum masalah psikologis. Layanan individu kami mencakup:",
    ],
    list: [
      ["Konseling Psikologis Pribadi:", "Pendampingan personal untuk mengurai tekanan mental, overthinking, dan kebingungan hidup."],
      ["Manajemen Stres & Kecemasan:", "Intervensi klinis untuk membantu Anda mengelola emosi dan serangan panik (panic attack) yang mengganggu aktivitas sehari-hari."],
      ["Trauma Healing:", "Sesi pendampingan pemulihan luka batin di masa lalu agar Anda berdamai dengan diri sendiri dan kembali melangkah maju."],
      ["Dukungan Depresi:", "Pendampingan suportif dan terstruktur untuk individu dengan indikasi atau diagnosis depresi, agar kembali menemukan makna hidup."],
      ["Hipnoterapi:", "Metode terapi komplementer yang aman guna menjangkau dan mengatasi hambatan psikologis di alam bawah sadar."],
      ["Konseling Pranikah dan Pernikahan:", "Solusi untuk menyelaraskan ekspektasi sebelum menikah, atau memulihkan keharmonisan rumah tangga yang sedang dilanda konflik."],
    ],
  },
  {
    h: "Pertanyaan yang Sering Diajukan (FAQ) Seputar Layanan Individu",
    ordered: true,
    list: [
      ["Apakah data medis dan cerita pribadi saya dijamin kerahasiaannya?", "Ya, tentu saja. Kerahasiaan data medis dan riwayat cerita klien adalah prioritas paling utama dalam setiap sesi terapi di Talenta Mulia. Kami beroperasi dengan kepatuhan penuh pada kode etik Himpunan Psikologi Indonesia (HIMPSI)."],
      ["Bagaimana jika saya sibuk dan tidak bisa datang ke klinik?", "Kami menyediakan layanan konsultasi psikolog online (melalui video call atau chat) yang sangat praktis dan fleksibel, memungkinkan Anda mendapatkan bantuan profesional tanpa terhalang jarak dan kesibukan."],
      ["Di mana lokasi fisik klinik psikologi Talenta Mulia beroperasi?", "Pusat klinik tatap muka (offline) kami beralamat di Margomulyo, Wage, Kec. Taman, Kab. Sidoarjo, Jawa Timur. Lokasi ini sangat strategis bagi masyarakat di area Sidoarjo, Surabaya, dan sekitarnya yang membutuhkan intervensi klinis secara langsung."],
      ["Apakah saya akan dihakimi jika menceritakan masalah yang memalukan?", "Sama sekali tidak. Ruang terapi Talenta Mulia dirancang seratus persen non-judgmental (tidak menghakimi). Psikolog kami hadir untuk mendengarkan, merangkul, dan membantu Anda mencari jalan keluar, bukan untuk menyalahkan Anda."],
    ],
  },
  {
    h: "Hubungi Kami Hari Ini",
    p: [
      "Jangan menunda kesejahteraan hidup Anda. Mengambil langkah pertama adalah tanda bahwa Anda peduli pada diri sendiri. Hubungi representatif kami melalui Telepon/WhatsApp di +62 821-3299-0498 atau akses website kami di www.talentamulia.co.id untuk menjadwalkan sesi Anda sekarang juga.",
    ],
  },
];
