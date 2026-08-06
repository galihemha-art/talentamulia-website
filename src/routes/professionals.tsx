import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd, peopleSchema } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, Briefcase, FileText, Mic, Sparkles } from "lucide-react";
import { PROFESSIONALS } from "@/lib/professionals-data";
import { ARTIKEL } from "@/lib/artikel-data";


export const Route = createFileRoute("/professionals")({
  head: () => ({
    meta: [
      { title: "Tim Profesional Psikolog & Coach — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Psikolog klinis, dokter konsultan, executive coach ICF PCC, dan trainer SEFT di balik Talenta Mulia.",
      },
      { property: "og:title", content: "Tim Profesional Psikolog & Coach — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        property: "og:description",
        content:
          "Psikolog klinis, dokter konsultan, executive coach ICF PCC, dan trainer SEFT di balik Talenta Mulia.",
      },
      ogUrl("/professionals"),
    ],
    links: [canonicalLink("/professionals")],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Tim Profesional", path: "/professionals" }])),
      ...peopleSchema("/professionals").map((p) => jsonLd(p)),
    ],
  }),
  component: Page,
});

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Award;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-5">
      <h3 className="flex items-center gap-2 text-sm font-bold text-primary">
        <Icon className="h-4 w-4 text-brand-blue" aria-hidden />
        {title}
      </h3>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Page() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-brand-blue">
              Beranda
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-primary">Tim Profesional</span>
          </nav>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
            Dipimpin praktisi, bukan sekadar teori.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Empat praktisi senior yang memimpin penugasan korporat, rumah sakit, dan institusi —
            psikolog, konsultan kepemimpinan medis, dan executive coach bersertifikat ICF.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10">
          {PROFESSIONALS.filter((p) => p.id !== "andiani").map((p, i) => {
            const artikel = ARTIKEL.filter((a) => a.authorId === p.id).slice(0, 3);
            return (
              <article
                key={p.name}
                className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md md:grid-cols-[minmax(0,320px)_1fr]"
              >
                <img
                  src={p.photo}
                  alt={`Potret studio ${p.name}, ${p.role} di Talenta Mulia Sidoarjo`}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                  className="aspect-4/5 w-full object-cover object-top md:h-full"
                />
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <span className="text-xs font-bold tracking-[0.18em] text-brand-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-xl font-bold leading-snug text-primary md:text-2xl">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-brand-blue">{p.role}</p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.keahlian.map((k) => (
                      <span
                        key={k}
                        className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {k}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-4 md:grid-cols-2">
                    {p.timeline.length > 0 && (
                      <div className="md:col-span-2">
                        <Section icon={Briefcase} title="Perjalanan Profesional">
                          <ol className="space-y-4 border-l border-border pl-5">
                            {p.timeline.map((t) => (
                              <li key={t.periode} className="relative">
                                <span className="absolute -left-[23px] top-2 h-2 w-2 rounded-full bg-brand-blue" />
                                <p className="text-xs font-bold tracking-wide text-brand-blue">
                                  {t.periode}
                                </p>
                                <p className="mt-1 font-semibold text-primary">{t.judul}</p>
                                <p className="mt-1">{t.detail}</p>
                              </li>
                            ))}
                          </ol>
                        </Section>
                      </div>
                    )}

                    <Section icon={Award} title="Sertifikasi">
                      <Bullets items={p.sertifikasi} />
                    </Section>

                    {p.buku.length > 0 && (
                      <Section icon={BookOpen} title="Buku">
                        <ul className="space-y-2">
                          {p.buku.map((b) => (
                            <li key={b.judul}>
                              <span className="font-semibold text-primary">{b.judul}</span>
                              <span className="block text-xs">{b.catatan}</span>
                            </li>
                          ))}
                        </ul>
                      </Section>
                    )}

                    <Section icon={Mic} title="Pengalaman sebagai Pembicara">
                      <Bullets items={p.speaking} />
                    </Section>

                    <Section icon={FileText} title="Publikasi">
                      <Bullets items={p.publikasi} />
                    </Section>

                    <Section icon={Sparkles} title="Bidang Keahlian">
                      <Bullets items={p.keahlian} />
                    </Section>

                    <Section icon={Briefcase} title="Layanan yang Ditangani">
                      <ul className="space-y-2">
                        {p.layanan.map((l) => (
                          <li key={l.slug}>
                            <Link
                              to="/layanan/$slug"
                              params={{ slug: l.slug }}
                              className="inline-flex items-center gap-1 font-medium text-brand-blue hover:underline"
                            >
                              {l.title}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Section>

                    {artikel.length > 0 && (
                      <div className="md:col-span-2">
                        <Section icon={FileText} title="Artikel Terkait">
                          <ul className="grid gap-2 md:grid-cols-2">
                            {artikel.map((a) => (
                              <li key={a.slug}>
                                <Link
                                  to="/artikel/$slug"
                                  params={{ slug: a.slug }}
                                  className="font-medium text-brand-blue hover:underline"
                                >
                                  {a.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Section>
                      </div>
                    )}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to="/kontak"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      Jadwalkan Konsultasi
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/kontak"
                      className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                    >
                      Minta Pertemuan Korporat
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Konsultasi dengan Tim Kami
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
