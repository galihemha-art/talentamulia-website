import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/professionals")({
  head: () => ({
    meta: [
      { title: "Tim Profesional Kami — Talenta Mulia" },
      { name: "description", content: "Psikolog, dokter, dan coach di balik Talenta Mulia." },
      { property: "og:title", content: "Tim Profesional Kami — Talenta Mulia" },
      { property: "og:description", content: "Psikolog, dokter, dan coach di balik Talenta Mulia." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Tim Profesional Kami</h1>
      <p className="mt-4 text-muted-foreground">Psikolog, dokter, dan coach di balik Talenta Mulia.</p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
    </section>
  );
}
