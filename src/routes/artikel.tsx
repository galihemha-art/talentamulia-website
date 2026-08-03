import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/artikel")({
  head: () => ({
    meta: [
      { title: "Artikel — Talenta Mulia" },
      { name: "description", content: "Wawasan psikologi, kesehatan, dan kepemimpinan." },
      { property: "og:title", content: "Artikel — Talenta Mulia" },
      { property: "og:description", content: "Wawasan psikologi, kesehatan, dan kepemimpinan." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Artikel</h1>
      <p className="mt-4 text-muted-foreground">Wawasan psikologi, kesehatan, dan kepemimpinan.</p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
    </section>
  );
}
