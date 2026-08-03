import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solusi-korporat")({
  head: () => ({
    meta: [
      { title: "Solusi Korporat — Talenta Mulia" },
      { name: "description", content: "Layanan psikologi dan human capital untuk organisasi." },
      { property: "og:title", content: "Solusi Korporat — Talenta Mulia" },
      { property: "og:description", content: "Layanan psikologi dan human capital untuk organisasi." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Solusi Korporat</h1>
      <p className="mt-4 text-muted-foreground">Layanan psikologi dan human capital untuk organisasi.</p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
    </section>
  );
}
