import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tentang-kami/legalitas")({
  head: () => ({
    meta: [
      { title: "Legalitas Perusahaan — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Halaman legalitas dan kredensial Talenta Mulia, pusat konsultasi psikologi & human capital di Sidoarjo, Jawa Timur.",
      },
      { property: "og:title", content: "Legalitas Perusahaan — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        property: "og:description",
        content:
          "Halaman legalitas dan kredensial Talenta Mulia, pusat konsultasi psikologi & human capital di Sidoarjo, Jawa Timur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/" className="hover:text-brand-blue">
          Beranda
        </Link>
        <span className="mx-2">&gt;</span>
        <Link to="/tentang-kami" className="hover:text-brand-blue">
          Tentang Kami
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-primary">Legalitas</span>
      </nav>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
        Legalitas Perusahaan
      </h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Halaman ini sedang kami siapkan.
      </p>
    </section>
  );
}
