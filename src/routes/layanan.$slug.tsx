import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LayananDetailPage } from "@/components/site/LayananDetailPage";
import { LAYANAN_KORPORAT } from "@/lib/layanan-korporat-data";
import { CoachingHubPage } from "@/components/site/CoachingHubPage";
import { KonsultasiOnlineOfflinePage } from "@/components/site/KonsultasiOnlineOfflinePage";
import { PemeriksaanPsikologiDetailPage } from "@/components/site/PemeriksaanPsikologiDetailPage";
import { PEMERIKSAAN_PSIKOLOGI } from "@/lib/pemeriksaan-psikologi-data";
import { LayananIndividuDetailPage } from "@/components/site/LayananIndividuDetailPage";
import { LAYANAN_INDIVIDU } from "@/lib/layanan-individu-data";
import { PsychologicalCounselingPage } from "@/components/site/PsychologicalCounselingPage";
import { MarriageCounselingPage } from "@/components/site/MarriageCounselingPage";
import { ParentingCounselingPage } from "@/components/site/ParentingCounselingPage";
import { TeenCounselingPage } from "@/components/site/TeenCounselingPage";
import { serviceSchema, webPageSchema } from "@/lib/structured-data";


const TITLES: Record<string, string> = {
  "konsultasi-hr": "Konsultasi HR",
  "konsultasi-organisasi": "Konsultasi Organisasi",
  "assessment-center": "Assessment Center",
  "asesmen-psikologi": "Assessment Psikologi",
  "pemetaan-talenta": "Pemetaan Talenta",
  "pelatihan-kepemimpinan": "Pengembangan Kepemimpinan",
  coaching: "Coaching",
  "executive-coaching": "Executive Coaching",
  "team-coaching": "Team Coaching",
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
    const detail = LAYANAN_KORPORAT[params.slug] ?? PEMERIKSAAN_PSIKOLOGI[params.slug] ?? LAYANAN_INDIVIDU[params.slug];
    const title = detail?.nama ?? titleFor(params.slug);
    const isCounseling = params.slug === "konseling-psikologis";
    const isMarriage = params.slug === "konseling-pernikahan";
    const isParenting = params.slug === "parenting-anak";
    const isTeen = params.slug === "konseling-remaja";
    const pageTitle = isMarriage
      ? "Layanan Konseling Pernikahan Profesional & Solutif | Talenta Mulia"
      : isCounseling
      ? "Konseling Psikologis Profesional | Talenta Mulia"
      : isParenting
      ? "Layanan Parenting & Konseling Anak Profesional | Talenta Mulia"
      : isTeen
      ? "Layanan Konseling Remaja Profesional & Friendly | Talenta Mulia"
      : `${title} — Talenta Mulia Sidoarjo, Jawa Timur`;
    const description = isMarriage
      ? "Layanan konseling pernikahan & pasangan profesional di Talenta Mulia. Psikolog berizin, penengah netral, bantu atasi konflik rumah tangga & komunikasi."
      : isCounseling
      ? "Layanan konseling psikologis profesional dan empatis secara online atau tatap muka di Sidoarjo untuk stres, kecemasan, relasi, dan keluarga."
      : isParenting
      ? "Layanan parenting & konseling anak profesional di Talenta Mulia. Psikolog berizin, bantu konsultasi pola asuh, emosi anak, hingga pendampingan ABK."
      : isTeen
      ? "Layanan konseling remaja di Talenta Mulia. Psikolog berizin, ramah, & nyambung. Bantu atasi stres sekolah, emosi, pergaulan, hingga krisis identitas."
      : detail
      ? `${detail.subjudul} Talenta Mulia, Sidoarjo, Jawa Timur.`
      : `Layanan ${title} dari Talenta Mulia, pusat konsultasi psikologi & human capital terintegrasi di Sidoarjo, Jawa Timur.`;
    const path = `/layanan/${params.slug}`;
    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: description },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: description },
        ogUrl(path),
      ],
      links: [canonicalLink(path)],
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: isCounseling || isMarriage || isParenting || isTeen ? "Layanan Individu" : "Solusi Korporat", path: isCounseling || isMarriage || isParenting || isTeen ? "/layanan-individu" : "/solusi-korporat" },
            { name: title, path },
          ]),
        ),
        ...(isCounseling || isMarriage || isParenting || isTeen
          ? [
              jsonLd(webPageSchema({ name: pageTitle, description, path })),
              ...(isCounseling
                ? [
                    jsonLd(
                      serviceSchema({
                        name: "Layanan Konseling Psikologis Profesional & Empatis",
                        description,
                        path,
                        serviceType: "Konseling Psikologis",
                        providerPeople: ["maulidah", "mamluatul", "hilda"],
                        offerings: [
                          { name: "Stres & Kecemasan", path: "/layanan/stres-kecemasan" },
                          { name: "Konseling Pernikahan", path: "/layanan/konseling-pernikahan" },
                          { name: "Parenting & Anak", path: "/layanan/parenting-anak" },
                          { name: "Konseling Remaja", path: "/layanan/konseling-remaja" },
                          { name: "Trauma Healing", path: "/layanan/trauma-healing" },
                          { name: "Hipnoterapi", path: "/layanan/hipnoterapi" },
                        ],
                      }),
                    ),
                  ]
                : []),
            ]
          : []),
      ],
    };
  },
  component: LayananRoutePage,
});

function LayananRoutePage() {
  const { slug } = Route.useParams();
  if (slug === "konseling-psikologis") return <PsychologicalCounselingPage />;
  if (slug === "konseling-pernikahan") return <MarriageCounselingPage />;
  if (slug === "parenting-anak") return <ParentingCounselingPage />;
  if (slug === "coaching") return <CoachingHubPage />;
  if (slug === "konsultasi-online-offline") return <KonsultasiOnlineOfflinePage />;
  const pemeriksaan = PEMERIKSAAN_PSIKOLOGI[slug];
  if (pemeriksaan) return <PemeriksaanPsikologiDetailPage data={pemeriksaan} />;
  const individu = LAYANAN_INDIVIDU[slug];
  if (individu) return <LayananIndividuDetailPage data={individu} />;
  const detail = LAYANAN_KORPORAT[slug];
  if (detail) return <LayananDetailPage data={detail} />;
  return <LayananPlaceholder slug={slug} />;
}

function LayananPlaceholder({ slug }: { slug: string }) {

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
