import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testimoni")({
  head: () => ({
    meta: [
      { title: "Testimoni — Talenta Mulia" },
      { name: "description", content: "Cerita klien organisasi dan individu." },
      { property: "og:title", content: "Testimoni — Talenta Mulia" },
      { property: "og:description", content: "Cerita klien organisasi dan individu." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Testimoni</h1>
      <p className="mt-4 text-muted-foreground">Cerita klien organisasi dan individu.</p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
    </section>
  );
}
