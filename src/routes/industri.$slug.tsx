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
        { title: `Layanan ${nama} — Talenta Mulia Sidoarjo, Jawa Timur` },
        { name: "description", content: `Layanan psikologi, asesmen, dan pengembangan SDM Talenta Mulia untuk sektor ${nama} di Sidoarjo dan seluruh Jawa Timur.` },
        { property: "og:title", content: `Layanan ${nama} — Talenta Mulia Sidoarjo, Jawa Timur` },
        { property: "og:description", content: `Layanan psikologi, asesmen, dan pengembangan SDM Talenta Mulia untuk sektor ${nama} di Sidoarjo dan seluruh Jawa Timur.` },
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
