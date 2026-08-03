import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import maulidah from "@/assets/Maulidah_Muflichah.png.asset.json";
import andiani from "@/assets/Dr_Andiani.png.asset.json";
import eka from "@/assets/Eka_Rachmawaty.png.asset.json";
import mamluatul from "@/assets/Mamluatul_Khoiriyah.png.asset.json";

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
    ],
  }),
  component: Page,
});

const TIM = [
  {
    photo: maulidah.url,
    name: "Maulidah Muflichah, M.Psi., Psikolog., CHt.",
    role: "Founder & Psikolog Klinis, Certified Hypnotherapist",
    desc: "Psikolog klinis berpengalaman dan hypnotherapist bersertifikat, pendiri Talenta Mulia.",
  },
  {
    photo: andiani.url,
    name: "Dr. dr. Hj. Andiani, M.Kes., Sp.KKLP., FISCH, FISPM, CHt., CEFHLM",
    role: "Konsultan Kepemimpinan Medis",
    desc: "Dokter spesialis dengan keahlian kedokteran keluarga layanan primer dan kepemimpinan kesehatan.",
  },
  {
    photo: eka.url,
    name: "Eka Rachmawaty, M.M., PCC",
    role: "Executive Coach ICF PCC (ACTC)",
    desc: "Professional Certified Coach bersertifikat ICF dengan pengalaman 20+ tahun di bidang HR & Organizational Development.",
  },
  {
    photo: mamluatul.url,
    name: "Mamluatul Khoiriyah, M.Psi., Psikolog",
    role: "Trainer SEFT Healing",
    desc: "Psikolog dan trainer bersertifikat SEFT (Spiritual Emotional Freedom Technique) healing.",
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Tim Profesional Kami
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Psikolog, dokter, dan coach bersertifikat yang bekerja sebagai satu tim multidisiplin.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {TIM.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={p.photo}
                alt={`Potret ${p.name}, ${p.role} di Talenta Mulia Sidoarjo`}
                loading="lazy"
                className="aspect-4/5 w-full object-cover object-top"
              />
              <div className="p-6">
                <h2 className="text-lg font-bold leading-snug text-primary">{p.name}</h2>
                <p className="mt-1 text-sm font-semibold text-brand-blue">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
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
