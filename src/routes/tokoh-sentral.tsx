import { canonicalLink, ogUrl } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, Mic, Sparkles } from "lucide-react";
import { TOKOH_SENTRAL } from "@/lib/tokoh-sentral-data";
import { TEAM_CONSENT_NOTE } from "@/lib/professionals-data";

export const Route = createFileRoute("/tokoh-sentral")({
  head: () => ({
    meta: [
      { title: "Principal Experts — Mitra Talenta Mulia Sidoarjo" },
      {
        name: "description",
        content:
          "Dr. dr. Hj. Andiani, M.Kes. dan Dr. Tri Novia — mitra Talenta Mulia di bidang mutu pelayanan kesehatan, akreditasi, dan transformasi layanan kesehatan.",
      },
      { property: "og:title", content: "Principal Experts — Mitra Talenta Mulia" },
      {
        property: "og:description",
        content:
          "Mitra Talenta Mulia di bidang mutu pelayanan kesehatan, akreditasi, dan transformasi layanan kesehatan.",
      },
      { property: "og:type", content: "website" },
      ogUrl("/tokoh-sentral"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonicalLink("/tokoh-sentral")],
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
            <span className="text-primary">Principal Experts</span>
          </nav>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
            Principal Experts
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Mitra Talenta Mulia untuk konsultasi organisasi, pelatihan, dan transformasi layanan
            kesehatan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10">
          {TOKOH_SENTRAL.map((t, i) => (
            <article
              key={t.key}
              className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-[minmax(0,420px)_1fr]"
            >
              <img
                src={t.photo}
                alt={`Potret ${t.name}, mitra Talenta Mulia`}
                loading="lazy"
                decoding="async"
                width={840}
                height={1050}
                className="aspect-4/5 w-full object-cover object-top md:h-full"
              />
              <div className="flex flex-col justify-center p-7 md:p-10">
                <span className="text-xs font-bold tracking-[0.18em] text-brand-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-primary md:text-3xl">
                  {t.name}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.mitra && (
                    <span className="inline-flex w-fit rounded-full border border-brand-blue px-4 py-1.5 text-xs font-semibold text-brand-blue">
                      Mitra
                    </span>
                  )}
                  {t.fellow && (
                    <span className="inline-flex w-fit rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-semibold text-white">
                      Distinguished Fellow, Talenta Mulia
                    </span>
                  )}
                </div>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>

                {t.tags && t.tags.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.tags.map((k) => (
                      <span
                        key={k}
                        className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {t.timeline.length > 0 && (
                    <div className="md:col-span-2">
                      <Section icon={Briefcase} title="Perjalanan Profesional">
                        <ol className="space-y-4 border-l border-border pl-5">
                          {t.timeline.map((item) => (
                            <li key={`${item.periode}-${item.judul}`} className="relative">
                              <span className="absolute -left-[23px] top-2 h-2 w-2 rounded-full bg-brand-blue" />
                              <p className="text-xs font-bold tracking-wide text-brand-blue">
                                {item.periode}
                              </p>
                              <p className="mt-1 font-semibold text-primary">{item.judul}</p>
                              {item.detail && <p className="mt-1">{item.detail}</p>}
                            </li>
                          ))}
                        </ol>
                      </Section>
                    </div>
                  )}

                  {t.pendidikan && t.pendidikan.length > 0 && (
                    <Section icon={GraduationCap} title="Pendidikan">
                      <Bullets items={t.pendidikan} />
                    </Section>
                  )}

                  {t.sertifikasi.length > 0 && (
                    <Section icon={Award} title="Sertifikasi">
                      <Bullets items={t.sertifikasi} />
                    </Section>
                  )}

                  {t.buku.length > 0 && (
                    <Section icon={BookOpen} title="Buku">
                      <ul className="space-y-2">
                        {t.buku.map((b) => (
                          <li key={b.judul}>
                            <span className="font-semibold text-primary">{b.judul}</span>
                          </li>
                        ))}
                      </ul>
                    </Section>
                  )}

                  {t.speaking.length > 0 && (
                    <Section icon={Mic} title="Pengalaman sebagai Pembicara">
                      <Bullets items={t.speaking} />
                    </Section>
                  )}

                  {t.keahlian.length > 0 && (
                    <Section icon={Sparkles} title="Bidang Keahlian">
                      <Bullets items={t.keahlian} />
                    </Section>
                  )}
                </div>

                <div className="mt-7">
                  <Link
                    to="/kontak"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Jadwalkan Konsultasi
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">{TEAM_CONSENT_NOTE}</p>
      </section>
    </>
  );
}
