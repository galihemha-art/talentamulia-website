import { canonicalLink, ogUrl } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import maulidah from "@/assets/Maulidah_Muflichah.webp";
import andiani from "@/assets/Dr_Andiani.webp";
import eka from "@/assets/Eka_Rachmawaty.webp";
import mamluatul from "@/assets/Mamluatul_Khoiriyah.webp";

export const Route = createFileRoute("/professionals")({
  head: () => ({
    meta: [
      { title: "Tim Profesional Psikolog & Coach — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Psikolog klinis, dokter konsultan, executive coach ICF PCC, dan trainer SEFT di balik Talenta Mulia.",
      },
      { property: "og:title", content: "Tim Profesional Psikolog & Coach — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        property: "og:description",
        content:
          "Psikolog klinis, dokter konsultan, executive coach ICF PCC, dan trainer SEFT di balik Talenta Mulia.",
      },
      ogUrl("/professionals"),
    ],
    links: [canonicalLink("/professionals")],
  }),
  component: Page,
});

const TIM = [
  {
    photo: maulidah,
    name: "Maulidah Muflichah, M.Psi., Psikolog., CHt.",
    role: "Founder · Psikolog Utama · Certified Hypnotherapist",
    desc: "Founder Talenta Mulia dengan keahlian mendalam di psikologi klinis, terapi keluarga, konseling pernikahan, dan hipnoterapi bersertifikat.",
  },
  {
    photo: andiani,
    name: "Dr. dr. Hj. Andiani, M.Kes., Sp.KKLP., FISCH, FISPM, CHt., CEFHLM",
    role: "Konsultan Kepemimpinan Medis & Kesehatan",
    desc: "Wakil Direktur Pelayanan Medis & Keperawatan di RSI Siti Hajar Sidoarjo. Ahli kesehatan masyarakat dengan otoritas dalam akreditasi rumah sakit, tata kelola klinis, dan manajemen rumah sakit.",
  },
  {
    photo: eka,
    name: "Eka Rachmawaty, M.M., PCC",
    role: "Konsultan Pengembangan Kepemimpinan & Organisasi · ICF PCC",
    desc: "Professional Certified Coach (ICF PCC) yang berspesialisasi dalam executive coaching, pengembangan kepemimpinan, talent management, dan pengembangan organisasi.",
  },
  {
    photo: mamluatul,
    name: "Mamluatul Khoiriyah, M.Psi., Psikolog",
    role: "Psikolog Senior",
    desc: "Psikolog senior yang fokus pada kesehatan mental, trauma healing, forgiveness dan terapi SEFT, parenting, dan psikologi komunitas.",
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-brand-blue">
              Beranda
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-primary">Tim Profesional</span>
          </nav>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
            Dipimpin praktisi, bukan sekadar teori.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Empat praktisi senior yang memimpin penugasan korporat, rumah sakit, dan institusi —
            psikolog, konsultan kepemimpinan medis, dan executive coach bersertifikat ICF.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10">
          {TIM.map((p, i) => (
            <article
              key={p.name}
              className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md md:grid-cols-[minmax(0,320px)_1fr]"
            >
              <img
                src={p.photo}
                alt={`Potret studio ${p.name}, ${p.role} di Talenta Mulia Sidoarjo`}
                loading="lazy"
                className="aspect-4/5 w-full object-cover object-top md:h-full"
              />
              <div className="flex flex-col justify-center p-7 md:p-10">
                <span className="text-xs font-bold tracking-[0.18em] text-brand-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-xl font-bold leading-snug text-primary md:text-2xl">
                  {p.name}
                </h2>
                <p className="mt-2 text-sm font-semibold text-brand-blue">{p.role}</p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Konsultasi dengan Tim Kami
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
