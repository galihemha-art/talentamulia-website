import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kesehatan")({
  head: () => ({
    meta: [
      { title: "Kesehatan — Talenta Mulia" },
      { name: "description", content: "Konsultasi kesehatan terintegrasi." },
      { property: "og:title", content: "Kesehatan — Talenta Mulia" },
      { property: "og:description", content: "Konsultasi kesehatan terintegrasi." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Kesehatan</h1>
      <p className="mt-4 text-muted-foreground">Konsultasi kesehatan terintegrasi.</p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
    </section>
  );
}
