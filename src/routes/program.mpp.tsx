import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/program/mpp")({
  head: () => ({
    meta: [
      { title: "Program Masa Persiapan Pensiun (MPP) — Talenta Mulia Sidoarjo" },
      {
        name: "description",
        content:
          "Program Masa Persiapan Pensiun (MPP) Talenta Mulia di Sidoarjo, Jawa Timur — memadukan psikologi, hipnoterapi/SEFT, dan pendekatan medis.",
      },
      { property: "og:title", content: "Program Masa Persiapan Pensiun (MPP) — Talenta Mulia" },
      {
        property: "og:description",
        content:
          "Program MPP terintegrasi untuk korporat dan individu di Jawa Timur. Halaman detail segera hadir.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramMpp,
});

function ProgramMpp() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-primary">
        Program Masa Persiapan Pensiun (MPP)
      </h1>
      <p className="mt-4 text-muted-foreground">Halaman detail segera hadir (coming soon).</p>
      <Link
        to="/kontak"
        className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Buat Janji Konsultasi
      </Link>
    </section>
  );
}
