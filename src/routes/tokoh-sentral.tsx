import { canonicalLink, ogUrl } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import andiani from "@/assets/Dr_Andiani.webp";
import trinovia from "@/assets/Tri_Novia.webp";

export const Route = createFileRoute("/tokoh-sentral")({
  head: () => ({
    meta: [
      { title: "Tokoh Sentral — Distinguished Fellow Talenta Mulia Sidoarjo" },
      {
        name: "description",
        content:
          "Dr. Hj. Andiani dan Dr. Tri Novia, Distinguished Fellow Talenta Mulia yang memimpin arah praktik psikologi klinis, kesehatan, dan transformasi layanan kesehatan.",
      },
      { property: "og:title", content: "Tokoh Sentral — Distinguished Fellow Talenta Mulia" },
      {
        property: "og:description",
        content:
          "Dua tokoh sentral Talenta Mulia yang memimpin arah praktik psikologi klinis, kesehatan, dan transformasi layanan kesehatan.",
      },
      { property: "og:type", content: "website" },
      ogUrl("/tokoh-sentral"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonicalLink("/tokoh-sentral")],
  }),
  component: Page,
});

const TOKOH = [
  {
    photo: andiani,
    name: "Dr. Hj. Andiani",
    gelar: "Dr. dr. Hj. Andiani, M.Kes., Sp.KKLP., FISCH, FISPM, CHt., CEFHLM",
    desc: "Memimpin arah praktik psikologi klinis & kesehatan di Talenta Mulia. Berpengalaman dalam manajemen dan akreditasi rumah sakit, tata kelola klinis, serta kepemimpinan mutu pelayanan kesehatan.",
  },
  {
    photo: trinovia,
    name: "Dr. Tri Novia, S.Kep., Ners., MM., M.I.Kom",
    gelar: "Dr. Tri Novia, S.Kep., Ners., MM., M.I.Kom",
    desc: "Memimpin arah praktik transformasi layanan kesehatan di Talenta Mulia. Berpengalaman sebagai konsultan transformasi pelayanan di berbagai rumah sakit dan klinik, dengan fokus pada komunikasi efektif dan budaya service excellence.",
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
            <span className="text-primary">Tokoh Sentral</span>
          </nav>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
            Tokoh Sentral Talenta Mulia
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Distinguished Fellow yang memimpin arah praktik psikologi klinis, kesehatan, dan
            transformasi layanan kesehatan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10">
          {TOKOH.map((t) => (
            <article
              key={t.name}
              className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-[minmax(0,420px)_1fr]"
            >
              <img
                src={t.photo}
                alt={`Potret ${t.name}, Distinguished Fellow Talenta Mulia`}
                loading="lazy"
                decoding="async"
                width={840}
                height={1050}
                className="aspect-4/5 w-full object-cover object-top md:h-full"
              />
              <div className="flex flex-col justify-center p-7 md:p-10">
                <h2 className="text-2xl font-bold leading-snug text-primary md:text-3xl">
                  {t.name}
                </h2>
                <span className="mt-3 inline-flex w-fit rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-semibold text-white">
                  Distinguished Fellow, Talenta Mulia
                </span>
                <p className="mt-4 text-sm font-semibold text-brand-blue">{t.gelar}</p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
                <div className="mt-7">
                  <Link
                    to="/kontak"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Jadwalkan Konsultasi
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
