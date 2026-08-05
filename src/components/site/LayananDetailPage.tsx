import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { FAQ_KORPORAT, type LayananDetail } from "@/lib/layanan-korporat-data";
import type { Artikel } from "@/lib/artikel-data";
import { ServiceTopicClusters } from "@/components/site/TopicClusters";
import {
  BenefitCards,
  CtaBanner,
  ExpertSpotlight,
  FaqAccordion,
  ProblemSection,
  ProcessTimeline,
  ServiceHero,
  SolutionSection,
  WhySection,
} from "@/components/site/service-sections";
import { serviceImages } from "@/lib/service-images";
import { expertForService } from "@/lib/service-expert";

export function LayananDetailPage({
  data,
  label,
  breadcrumb,
  ctaPrimary,
  ctaSecondary,
  faq,
  wawasan,
}: {
  data: LayananDetail;
  /** Small eyebrow label above the hero title. */
  label?: string;
  /** Overrides the middle breadcrumb entry. */
  breadcrumb?: { label: string; to: string };
  ctaPrimary?: string;
  ctaSecondary?: string;
  faq?: { q: string; a: string }[];
  wawasan?: Artikel[];
}) {
  const images = serviceImages(data.slug);
  const expert = expertForService(data.slug);

  return (
    <>
      <ServiceHero
        breadcrumbs={[
          { label: "Beranda", to: "/" },
          { label: breadcrumb?.label ?? "Layanan", to: breadcrumb?.to ?? "/solusi-korporat" },
          { label: data.nama },
        ]}
        eyebrow={label ?? "Solusi Korporat"}
        title={data.nama}
        valueProp={data.subjudul}
        ctaPrimary={ctaPrimary ?? "Minta Proposal Corporate"}
        ctaSecondary={ctaSecondary ?? "Jadwalkan Konsultasi"}
        images={images}
        highlights={data.ruangLingkup.slice(0, 3)}
      />

      {/* Ringkasan naratif */}
      <section className="mx-auto max-w-4xl px-5 pt-16 md:pt-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Tentang layanan ini
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {data.ringkasan}
          {data.ringkasanLink && (
            <>
              {" "}
              {data.ringkasanLink.before}
              <Link
                to="/layanan/$slug"
                params={{ slug: data.ringkasanLink.to.replace("/layanan/", "") }}
                className="font-semibold text-brand-blue underline underline-offset-4"
              >
                {data.ringkasanLink.label}
              </Link>
              {data.ringkasanLink.after}
            </>
          )}
        </p>
      </section>

      <ProblemSection points={data.tantangan} images={images} />

      <SolutionSection text={data.pendekatan} />

      <BenefitCards
        title="Ruang lingkup & manfaat"
        subtitle={`Cakupan kerja ${data.nama} yang kami rancang bersama tim internal Anda.`}
        items={data.ruangLingkup}
      />

      <ProcessTimeline />

      <WhySection images={images} reasons={data.kenapaKami} />

      {/* Untuk siapa */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Layanan ini untuk siapa
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.untukSiapa.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground shadow-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpertSpotlight expert={expert} />

      <FaqAccordion items={faq ?? FAQ_KORPORAT} />

      <ServiceTopicClusters slug={data.slug} articles={wawasan} />

      <CtaBanner
        title={`Siap memulai ${data.nama}?`}
        primary="Minta Proposal Corporate"
        secondary="Jadwalkan Konsultasi"
      />
    </>
  );
}

/** Kept for pages that still compose their own closing CTA. */
export function CtaPenutup() {
  return (
    <CtaBanner primary="Minta Proposal Corporate" secondary="Jadwalkan Konsultasi" />
  );
}

export { ArrowRight };
