import { AlertTriangle, Info } from "lucide-react";
import { KERAHASIAAN_NOTE, type LayananIndividuDetail } from "@/lib/layanan-individu-data";
import { ServiceTopicClusters } from "@/components/site/TopicClusters";
import {
  BenefitCards,
  CtaBanner,
  ExpertSpotlight,
  FaqAccordion,
  ProcessTimeline,
  ServiceHero,
  SolutionSection,
  WhySection,
} from "@/components/site/service-sections";
import { serviceImages } from "@/lib/service-images";
import { expertForService } from "@/lib/service-expert";

const FAQ_INDIVIDU = [
  {
    q: "Berapa lama satu sesi berlangsung?",
    a: "Satu sesi umumnya 60–90 menit. Jumlah sesi disepakati bersama setelah sesi pertama, sesuai kebutuhan Anda.",
  },
  {
    q: "Apakah sesi bisa dilakukan online?",
    a: "Bisa. Kami melayani sesi daring melalui video call maupun tatap muka di kantor kami di Sidoarjo, Jawa Timur.",
  },
  {
    q: "Apakah data saya aman?",
    a: KERAHASIAAN_NOTE + " Catatan sesi hanya diakses psikolog yang menangani Anda.",
  },
  {
    q: "Saya belum yakin layanan mana yang tepat. Apa yang harus dilakukan?",
    a: "Hubungi kami lebih dulu. Tim kami akan membantu mengarahkan Anda ke layanan dan profesional yang paling sesuai, tanpa biaya.",
  },
];

export function LayananIndividuDetailPage({ data }: { data: LayananIndividuDetail }) {
  const images = serviceImages(data.slug, "individu");
  const expert = expertForService(data.slug);
  const warn = data.catatan?.tone === "warning";

  return (
    <>
      <ServiceHero
        breadcrumbs={[
          { label: "Beranda", to: "/" },
          { label: "Layanan Individu", to: "/layanan-individu" },
          { label: data.nama },
        ]}
        eyebrow="Layanan Individu"
        title={data.nama}
        valueProp={data.subjudul}
        ctaPrimary="Jadwalkan Konsultasi"
        ctaSecondary="Tanya Lewat WhatsApp"
        images={images}
        highlights={["Psikolog bersertifikat", "Online & tatap muka", "Rahasia"]}
      />

      {data.catatan && (
        <div className="mx-auto max-w-4xl px-5 pt-10">
          <div
            className={`flex gap-3 rounded-2xl border p-5 text-sm leading-relaxed ${
              warn
                ? "border-destructive/30 bg-destructive/5 text-destructive"
                : "border-border bg-secondary/60 text-muted-foreground"
            }`}
          >
            {warn ? (
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            ) : (
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
            )}
            <p>{data.catatan.text}</p>
          </div>
        </div>
      )}

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Layanan ini untuk siapa
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{data.untukSiapa}</p>
      </section>

      <SolutionSection
        text="Sesi dimulai dari mendengarkan cerita Anda secara utuh, dilanjutkan asesmen ringan bila diperlukan, lalu penyusunan rencana penanganan yang realistis dan terukur bersama psikolog Anda."
      />

      <BenefitCards title="Yang Anda dapatkan" items={data.yangDidapat} />

      <ProcessTimeline
        title="Alur sesi"
        steps={[
          { title: "Kontak Awal", desc: "Ceritakan kebutuhan Anda lewat WhatsApp atau formulir; kami bantu memilih layanan yang tepat." },
          { title: "Penjadwalan", desc: "Pilih jadwal dan format sesi — daring atau tatap muka di Sidoarjo." },
          { title: "Sesi Bersama Psikolog", desc: "Sesi 60–90 menit yang aman, rahasia, dan tanpa penghakiman." },
          { title: "Tindak Lanjut", desc: "Rencana lanjutan, latihan mandiri, atau rujukan bila diperlukan." },
        ]}
      />

      <WhySection
        images={images}
        reasons={[
          KERAHASIAAN_NOTE,
          "Ditangani psikolog bersertifikat dengan pengalaman lintas kasus.",
          "Bila kebutuhan Anda bersinggungan dengan kesehatan fisik, kami dapat melibatkan dokter dalam tim kami.",
        ]}
      />

      <ExpertSpotlight expert={expert} />

      <FaqAccordion items={FAQ_INDIVIDU} />

      <ServiceTopicClusters slug={data.slug} />

      <CtaBanner
        title={`Mulai langkah pertama Anda`}
        text="Satu percakapan sering kali cukup untuk membuat masalah terasa lebih jernih. Kami siap mendengarkan."
        primary="Jadwalkan Konsultasi"
        secondary="Hubungi Kami"
      />
    </>
  );
}
