import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const NAMA: Record<string, string> = {
  manufaktur: "Manufaktur",
  kesehatan: "Kesehatan (Rumah Sakit)",
  pendidikan: "Pendidikan (Sekolah & Universitas)",
  pemerintahan: "Pemerintahan",
  perbankan: "Perbankan",
};

export const Route = createFileRoute("/industri/$slug")({
  head: ({ params }) => {
    const nama = NAMA[params.slug] ?? "Industri";
    return {
      meta: [
        { title: `${nama} — Industri | Talenta Mulia` },
        { name: "description", content: `Layanan Talenta Mulia untuk sektor ${nama}.` },
        { property: "og:title", content: `${nama} — Industri | Talenta Mulia` },
        { property: "og:description", content: `Layanan Talenta Mulia untuk sektor ${nama}.` },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const nama = NAMA[slug] ?? "Industri";

  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">{nama}</h1>
      <p className="mt-4 text-muted-foreground">
        Halaman detail layanan untuk sektor ini sedang kami siapkan.
      </p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
      <Link
        to="/industri"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke daftar industri
      </Link>
    </section>
  );
}
