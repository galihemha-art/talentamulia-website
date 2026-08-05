import { Link } from "@tanstack/react-router";
import { ArrowRight, Info } from "lucide-react";
import type { PemeriksaanDetail } from "@/lib/pemeriksaan-psikologi-data";
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

const FAQ_PEMERIKSAAN = [
  {
    q: "Berapa lama proses pemeriksaan psikologi?",
    a: "Pelaksanaan tes umumnya 2–4 jam, sedangkan laporan hasil kami serahkan dalam 3–7 hari kerja tergantung jumlah peserta.",
  },
  {
    q: "Apakah hasil pemeriksaan bisa digunakan sebagai syarat resmi?",
    a: "Ya. Laporan ditandatangani psikolog berizin praktik sehingga dapat digunakan untuk keperluan seleksi, promosi, sekolah, maupun rujukan profesional lain.",
  },
  {
    q: "Apakah peserta bisa mengetahui hasilnya?",
    a: "Kami menyediakan sesi umpan balik agar peserta memahami hasil dan rekomendasi tindak lanjutnya, sesuai kesepakatan dengan pihak yang meminta pemeriksaan.",
  },
  {
    q: "Apakah pemeriksaan bisa dilakukan di lokasi kami?",
    a: "Bisa. Tim kami dapat melaksanakan pemeriksaan di kantor, sekolah, atau fasilitas Anda, maupun di kantor kami di Sidoarjo.",
  },
];

export function PemeriksaanPsikologiDetailPage({ data }: { data: PemeriksaanDetail }) {
  const images = serviceImages(data.slug, "asesmen");
  const expert = expertForService(data.slug);

  return (
    <>
      <ServiceHero
        breadcrumbs={[
          { label: "Beranda", to: "/" },
          { label: "Pemeriksaan Psikologi", to: "/solusi-korporat" },
          { label: data.nama },
        ]}
        eyebrow="Pemeriksaan Psikologi"
        title={data.nama}
        valueProp={data.subjudul}
        ctaPrimary="Minta Proposal Pemeriksaan"
        ctaSecondary="Jadwalkan Konsultasi"
        images={images}
        highlights={["Psikolog berizin praktik", "Alat tes terstandar", "Laporan terukur"]}
      />

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
          Apa itu {data.nama}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{data.apaItu}</p>
      </section>

      <ProblemSection
        title="Siapa yang membutuhkan pemeriksaan ini"
        points={data.untukSiapa}
        images={images}
      />

      <SolutionSection text={data.metode} />

      <BenefitCards
        title="Yang Anda terima"
        items={data.yangDiterima
          .split(/\.\s+|; /)
          .map((s) => s.trim().replace(/\.$/, ""))
          .filter(Boolean)}
      />

      <ProcessTimeline
        title="Tahapan pemeriksaan"
        steps={[
          { title: "Penentuan Tujuan", desc: "Klarifikasi tujuan pemeriksaan dan jabatan/konteks yang diukur." },
          { title: "Pemilihan Alat Tes", desc: "Penyusunan baterai tes terstandar yang sesuai tujuan." },
          { title: "Pelaksanaan", desc: "Administrasi tes dan wawancara oleh psikolog di lokasi Anda atau kantor kami." },
          { title: "Laporan & Umpan Balik", desc: "Interpretasi, laporan tertulis, dan sesi penjelasan hasil." },
        ]}
      />

      <WhySection
        images={images}
        reasons={[
          "Interpretasi dilakukan psikolog berizin, bukan sekadar skoring otomatis.",
          "Alat tes terstandar dan disesuaikan dengan konteks Indonesia.",
          "Laporan ditulis aplikatif — langsung dapat dipakai untuk keputusan.",
        ]}
      />

      {data.catatan && (
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex gap-3 rounded-2xl border border-border bg-secondary/60 p-5 text-sm leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
            <p>{data.catatan}</p>
          </div>
        </div>
      )}

      {data.terkait.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Bidang pemeriksaan lainnya
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.terkait.map((t) => (
              <Link
                key={t.slug}
                to="/layanan/$slug"
                params={{ slug: t.slug }}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="font-heading font-semibold text-primary">{t.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-brand-blue transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <ExpertSpotlight expert={expert} />

      <FaqAccordion items={FAQ_PEMERIKSAAN} />

      <ServiceTopicClusters slug={data.slug} />

      <CtaBanner
        title={`Butuh ${data.nama}?`}
        primary="Minta Proposal Pemeriksaan"
        secondary="Jadwalkan Konsultasi"
      />
    </>
  );
}
