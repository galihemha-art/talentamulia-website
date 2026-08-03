import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Talenta Mulia" },
      { name: "description", content: "Profil, visi, dan nilai Talenta Mulia." },
      { property: "og:title", content: "Tentang Kami — Talenta Mulia" },
      { property: "og:description", content: "Profil, visi, dan nilai Talenta Mulia." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Tentang Kami</h1>
      <p className="mt-4 text-muted-foreground">Profil, visi, dan nilai Talenta Mulia.</p>
      <span className="mt-8 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white">
        Coming soon
      </span>
    </section>
  );
}
