import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/layanan-individu")({
  head: () => ({
    meta: [
      { title: "Layanan Individu — Talenta Mulia" },
      { name: "description", content: "Konseling dan pengembangan diri untuk individu & keluarga." },
      { property: "og:title", content: "Layanan Individu — Talenta Mulia" },
      { property: "og:description", content: "Konseling dan pengembangan diri untuk individu & keluarga." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Layanan Individu</h1>
      <p className="mt-4 text-muted-foreground">Konseling dan pengembangan diri untuk individu & keluarga.</p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
    </section>
  );
}
