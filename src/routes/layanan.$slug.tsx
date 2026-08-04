import { createFileRoute, Link } from "@tanstack/react-router";
import { LayananDetailPage } from "@/components/site/LayananDetailPage";
import { LAYANAN_KORPORAT } from "@/lib/layanan-korporat-data";


const TITLES: Record<string, string> = {
  "konsultasi-hr": "Konsultasi HR",
  "konsultasi-organisasi": "Konsultasi Organisasi",
  "assessment-center": "Assessment Center",
  "asesmen-psikologi": "Assessment Psikologi",
  "pemetaan-talenta": "Pemetaan Talenta",
  "pelatihan-kepemimpinan": "Pengembangan Kepemimpinan",
  coaching: "Coaching",
  "executive-coaching": "Executive Coaching",
  "kesejahteraan-karyawan": "Kesejahteraan Karyawan",
  "medical-wellness": "Medical Wellness",
  "talent-acquisition": "Talent Acquisition",
  "executive-search": "Executive Search",
  "pendampingan-sekolah-perusahaan": "Pendampingan Sekolah & Perusahaan",
  "konsultasi-online-offline": "Layanan Online & Offline",
  "pemeriksaan-psikologi-industri": "Pemeriksaan Psikologi Industri & Organisasi",
  "pemeriksaan-psikologi-klinis": "Pemeriksaan Psikologi Klinis",
  "pemeriksaan-psikologi-pendidikan": "Pemeriksaan Psikologi Pendidikan",
  "pemeriksaan-psikologi-perkembangan": "Pemeriksaan Psikologi Perkembangan",
  "konseling-psikologis": "Konseling Psikologis",
  "konseling-pernikahan": "Konseling Pernikahan",
  "parenting-anak": "Parenting & Anak",
  "konseling-remaja": "Konseling Remaja",
  hipnoterapi: "Hipnoterapi",
  "trauma-healing": "Trauma Healing",
  "stres-kecemasan": "Stres & Kecemasan",
  "dukungan-depresi": "Dukungan Depresi",
  "pendampingan-abk": "Pendampingan ABK",
};

function titleFor(slug: string) {
  return (
    TITLES[slug] ??
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}

export const Route = createFileRoute("/layanan/$slug")({
  head: ({ params }) => {
    const title = titleFor(params.slug);
    return {
      meta: [
        { title: `${title} — Talenta Mulia Sidoarjo, Jawa Timur` },
        {
          name: "description",
          content: `Layanan ${title} dari Talenta Mulia, pusat konsultasi psikologi & human capital terintegrasi di Sidoarjo, Jawa Timur.`,
        },
        { property: "og:title", content: `${title} — Talenta Mulia` },
        {
          property: "og:description",
          content: `Layanan ${title} dari Talenta Mulia di Sidoarjo, Jawa Timur. Halaman detail segera hadir.`,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: LayananPlaceholder,
});

function LayananPlaceholder() {
  const { slug } = Route.useParams();
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Layanan
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary">{titleFor(slug)}</h1>
      <p className="mt-4 text-muted-foreground">Halaman ini segera hadir (coming soon).</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/kontak"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Buat Janji Konsultasi
        </Link>
        <Link
          to="/solusi-korporat"
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary"
        >
          Lihat Solusi Korporat
        </Link>
      </div>
    </section>
  );
}
