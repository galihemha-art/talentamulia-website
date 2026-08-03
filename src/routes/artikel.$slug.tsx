import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ARTIKEL } from "@/lib/artikel-data";

export const Route = createFileRoute("/artikel/$slug")({
  head: ({ params }) => {
    const a = ARTIKEL.find((x) => x.slug === params.slug);
    const title = a ? `${a.title} — Talenta Mulia Sidoarjo, Jawa Timur` : "Artikel — Talenta Mulia Sidoarjo, Jawa Timur";
    const desc = a?.excerpt ?? "Artikel dari Talenta Mulia.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const artikel = ARTIKEL.find((a) => a.slug === slug);

  if (!artikel) {
    return (
      <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
        <h1 className="text-3xl font-extrabold text-primary">Artikel tidak ditemukan</h1>
        <Link
          to="/artikel"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke daftar artikel
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <span className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-brand-blue">
            {artikel.kategori}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-primary md:text-4xl">
            {artikel.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{artikel.excerpt}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-14 md:py-16">
        <div className="space-y-5">
          {artikel.paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-7 shadow-sm">
          <h2 className="text-xl font-bold text-primary">
            Ingin menerapkan program ini di organisasi Anda?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tim kami siap menyusun rancangan program sesuai kebutuhan dan jumlah peserta Anda.
          </p>
          <Link
            to="/kontak"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Hubungi Kami <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Link
          to="/artikel"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke daftar artikel
        </Link>
      </article>
    </>
  );
}
