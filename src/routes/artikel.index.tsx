import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ARTIKEL } from "@/lib/artikel-data";

export const Route = createFileRoute("/artikel/")({
  head: () => ({
    meta: [
      { title: "Artikel & Wawasan Psikologi Kerja — Talenta Mulia Jawa Timur" },
      {
        name: "description",
        content:
          "Wawasan seputar masa persiapan pensiun, psikologi kerja, dan pengembangan manusia dari tim Talenta Mulia.",
      },
      { property: "og:title", content: "Artikel & Wawasan Psikologi Kerja — Talenta Mulia Jawa Timur" },
      {
        property: "og:description",
        content:
          "Wawasan seputar masa persiapan pensiun, psikologi kerja, dan pengembangan manusia dari tim Talenta Mulia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Artikel &amp; Wawasan
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Catatan praktis dari psikolog, dokter, dan coach kami untuk organisasi dan individu.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ARTIKEL.map((a) => (
            <article
              key={a.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand-blue">
                {a.kategori}
              </span>
              <h2 className="mt-4 text-lg font-bold leading-snug text-primary">{a.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <Link
                to="/artikel/$slug"
                params={{ slug: a.slug }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
              >
                Baca selengkapnya <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
