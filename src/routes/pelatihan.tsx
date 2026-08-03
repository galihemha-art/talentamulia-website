import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pelatihan")({
  head: () => ({
    meta: [
      { title: "Pelatihan — Talenta Mulia" },
      { name: "description", content: "Pelatihan dan seminar untuk tim dan komunitas." },
      { property: "og:title", content: "Pelatihan — Talenta Mulia" },
      { property: "og:description", content: "Pelatihan dan seminar untuk tim dan komunitas." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Pelatihan</h1>
      <p className="mt-4 text-muted-foreground">Pelatihan dan seminar untuk tim dan komunitas.</p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
    </section>
  );
}
