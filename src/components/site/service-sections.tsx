import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { Professional } from "@/lib/professionals-data";
import type { ServiceImageSet } from "@/lib/service-images";

/* ---------------- Hero: image right ---------------- */

export function ServiceHero({
  breadcrumbs,
  eyebrow,
  title,
  valueProp,
  ctaPrimary,
  ctaSecondary,
  images,
  highlights,
}: {
  breadcrumbs: { label: string; to?: string }[];
  eyebrow?: string;
  title: string;
  valueProp: string;
  ctaPrimary: string;
  ctaSecondary: string;
  images: ServiceImageSet;
  highlights?: string[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
        >
          {breadcrumbs.map((b, i) => (
            <span key={b.label} className="inline-flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
              {b.to ? (
                <Link to={b.to as "/"} className="transition-colors hover:text-brand-blue">
                  {b.label}
                </Link>
              ) : (
                <span className="text-primary">{b.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-2 font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {valueProp}
            </p>

            {highlights && highlights.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {highlights.map((h) => (
                  <li key={h} className="inline-flex items-center gap-2 text-sm text-primary">
                    <Check className="h-4 w-4 text-brand-blue" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kontak"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                {ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/kontak"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                {ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft">
              <img
                src={images.hero}
                alt={images.heroAlt}
                width={1400}
                height={1000}
                className="h-72 w-full object-cover md:h-[26rem]"
              />
            </div>
            <div className="absolute -bottom-5 left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-soft sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Tim multidisiplin
              </p>
              <p className="mt-1 text-sm font-semibold text-primary">
                Psikolog · Dokter · Coach · Konsultan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Problem: image left ---------------- */

export function ProblemSection({
  title = "Tantangan yang sering kami temui",
  intro,
  points,
  images,
}: {
  title?: string;
  intro?: string;
  points: string[];
  images: ServiceImageSet;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-[1.75rem] border border-border shadow-soft lg:order-1">
          <img
            src={images.problem}
            alt={images.problemAlt}
            loading="lazy"
            width={1400}
            height={1000}
            className="h-72 w-full object-cover md:h-[24rem]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
            {title}
          </h2>
          {intro && <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>}
          <ul className="mt-6 space-y-4">
            {points.map((p) => (
              <li
                key={p}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground shadow-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Solution / approach ---------------- */

export function SolutionSection({ text, points }: { text: string; points?: string[] }) {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl px-5 py-14 text-center md:py-16">
        <Sparkles className="mx-auto h-6 w-6 text-brand-blue" />
        <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Pendekatan kami
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
        {points && points.length > 0 && (
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {points.slice(0, 3).map((p) => (
              <div key={p} className="rounded-2xl border border-border bg-card p-5 text-sm font-semibold text-primary">
                {p}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Benefits: premium cards ---------------- */

export function BenefitCards({
  title = "Manfaat yang Anda dapatkan",
  subtitle,
  items,
}: {
  title?: string;
  subtitle?: string;
  items: string[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <span
              aria-hidden
              className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-blue/5 transition-transform group-hover:scale-125"
            />
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="relative mt-4 font-heading text-lg font-semibold leading-snug text-primary">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Process: horizontal timeline ---------------- */

export type ProcessStep = { title: string; desc: string };

export const DEFAULT_PROCESS: ProcessStep[] = [
  { title: "Pemetaan Kebutuhan", desc: "Sesi diskusi awal untuk memahami konteks, sasaran, dan kendala Anda." },
  { title: "Rancangan Program", desc: "Penyusunan metode, instrumen, dan jadwal yang disesuaikan — bukan paket siap pakai." },
  { title: "Pelaksanaan", desc: "Implementasi bersama tim internal Anda oleh psikolog, dokter, dan coach kami." },
  { title: "Evaluasi & Pendampingan", desc: "Pengukuran hasil, laporan, dan pendampingan hingga sistem berjalan mandiri." },
];

export function ProcessTimeline({
  steps = DEFAULT_PROCESS,
  title = "Cara kami bekerja",
}: {
  steps?: ProcessStep[];
  title?: string;
}) {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          {title}
        </h2>
        <div className="relative mt-10">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block"
          />
          <ol className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white ring-8 ring-secondary/40">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Talenta Mulia: full-width image ---------------- */

const CREDENTIALS = [
  { icon: Users, label: "4 Profesional Senior", desc: "Psikolog · Dokter · Executive Coach · Konsultan Organisasi" },
  { icon: Award, label: "45+ Tahun Pengalaman", desc: "Pengalaman profesional gabungan lintas disiplin" },
  { icon: Activity, label: "1000+ Jam Coaching", desc: "Pendampingan eksekutif dan pemimpin organisasi" },
  { icon: BookOpen, label: "3 Buku ISBN Nasional", desc: "Karya publikasi yang menjadi rujukan praktik" },
];

export function WhySection({
  images,
  reasons,
}: {
  images: ServiceImageSet;
  reasons?: string[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-soft">
        <img
          src={images.wide}
          alt={images.wideAlt}
          loading="lazy"
          width={1800}
          height={900}
          className="h-64 w-full object-cover md:h-[22rem]"
        />
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Mengapa Talenta Mulia
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Kami satu-satunya pusat konsultasi di Jawa Timur yang memadukan psikologi, kesehatan,
            dan kepemimpinan dalam satu tim — sehingga rekomendasi kami menyentuh manusia dan sistem
            sekaligus.
          </p>
          {reasons && reasons.length > 0 && (
            <ul className="mt-6 space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {CREDENTIALS.map((c) => (
            <div key={c.label} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <c.icon className="h-5 w-5 text-brand-blue" />
              <p className="mt-3 font-heading text-base font-semibold text-primary">{c.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Related expert ---------------- */

export function ExpertSpotlight({ expert }: { expert: Professional }) {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
          Ahli yang menangani
        </p>
        <div className="mt-6 grid items-center gap-8 rounded-[1.75rem] border border-border bg-card p-6 shadow-soft md:grid-cols-[220px_1fr] md:p-8">
          <img
            src={expert.photo}
            alt={`Foto ${expert.name}`}
            loading="lazy"
            width={440}
            height={440}
            className="h-56 w-full rounded-2xl object-cover object-top md:h-56"
          />
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-primary">
              {expert.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-brand-blue">{expert.role}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{expert.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {expert.keahlian.slice(0, 5).map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-primary"
                >
                  {k}
                </span>
              ))}
            </div>
            <Link
              to="/professionals"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
            >
              Lihat profil lengkap tim
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ accordion ---------------- */

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
      <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
        Pertanyaan yang sering diajukan
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((faq, i) => (
          <div key={faq.q} className="overflow-hidden rounded-2xl border border-border bg-card">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-primary">{faq.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-brand-blue transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Full-width CTA banner ---------------- */

export function CtaBanner({
  title = "Siap menguatkan tim & organisasi Anda?",
  text = "Bicara dengan tim multidisiplin kami — psikolog, dokter, coach, dan konsultan organisasi. Proposal khusus dikirim dalam 2 hari kerja.",
  primary = "Minta Proposal",
  secondary = "Jadwalkan Konsultasi",
}: {
  title?: string;
  text?: string;
  primary?: string;
  secondary?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-blue/30 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-foreground/80">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {primary}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/kontak"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
