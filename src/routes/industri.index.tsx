import { canonicalLink, ogUrl } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Banknote, Building2, Factory, GraduationCap, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/industri/")({
  head: () => ({
    meta: [
      { title: "Industri yang Kami Layani — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Pendekatan yang disesuaikan konteks dan regulasi untuk manufaktur, rumah sakit, pendidikan, pemerintahan, dan perbankan.",
      },
      { property: "og:title", content: "Industri yang Kami Layani — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        property: "og:description",
        content:
          "Pendekatan yang disesuaikan konteks dan regulasi untuk manufaktur, rumah sakit, pendidikan, pemerintahan, dan perbankan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/industri"),
    ],
    links: [canonicalLink("/industri")],
  }),
  component: Page,
});

export const INDUSTRI = [
  {
    slug: "manufaktur",
    icon: Factory,
    title: "Manufaktur",
    text: "Fokus pada keselamatan kerja, disiplin operasional, dan produktivitas lini produksi — mulai dari seleksi operator, penguatan supervisor, hingga budaya safety yang selaras dengan standar K3.",
  },
  {
    slug: "kesehatan",
    icon: Stethoscope,
    title: "Kesehatan (Rumah Sakit)",
    text: "Menyelaraskan pengembangan SDM dengan tuntutan akreditasi dan keselamatan pasien: tata kelola klinis, service excellence, serta pencegahan burnout tenaga kesehatan.",
  },
  {
    slug: "pendidikan",
    icon: GraduationCap,
    title: "Pendidikan (Sekolah & Universitas)",
    text: "Mendukung ekosistem belajar yang sehat melalui asesmen minat bakat, penguatan kompetensi guru dan dosen, serta layanan bimbingan konseling siswa dan mahasiswa.",
  },
  {
    slug: "pemerintahan",
    icon: Building2,
    title: "Pemerintahan",
    text: "Program yang mengikuti kerangka manajemen ASN dan tata kelola birokrasi: pemetaan kompetensi jabatan, assessment center, dan pengembangan kepemimpinan pelayanan publik.",
  },
  {
    slug: "perbankan",
    icon: Banknote,
    title: "Perbankan",
    text: "Menjawab kebutuhan sektor dengan regulasi ketat: asesmen integritas dan risiko, pengembangan tim layanan nasabah, serta pendampingan pemimpin cabang.",
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Industri yang Kami Layani
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Setiap sektor punya konteks dan regulasi tersendiri. Kami merancang program yang sesuai
            dengan keduanya.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRI.map(({ slug, icon: Icon, title, text }) => (
            <Link
              key={slug}
              to="/industri/$slug"
              params={{ slug }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-semibold text-primary">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                Selengkapnya
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
