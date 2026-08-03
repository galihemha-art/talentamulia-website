import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Talenta Mulia" },
      { name: "description", content: "Pertanyaan yang sering diajukan seputar layanan kami." },
      { property: "og:title", content: "FAQ — Talenta Mulia" },
      { property: "og:description", content: "Pertanyaan yang sering diajukan seputar layanan kami." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">FAQ</h1>
      <p className="mt-4 text-muted-foreground">Pertanyaan yang sering diajukan seputar layanan kami.</p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
    </section>
  );
}
