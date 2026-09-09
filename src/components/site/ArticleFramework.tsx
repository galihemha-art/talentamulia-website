import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site/SiteLink";
import andianiPhoto from "@/assets/Dr_Andiani.webp";
import triNoviaPhoto from "@/assets/Tri_Novia.webp";
import maulidahPhoto from "@/assets/Maulidah_Muflichah.webp";
import ekaPhoto from "@/assets/Eka_Rachmawaty.webp";
import mamluatulPhoto from "@/assets/Mamluatul_Khoiriyah.webp";
import type { ArtikelView } from "@/lib/wordpress";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Lightbulb,
  Scale,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

type ArticleReference = { title: string; url: string };
type ArticleFaq = { q: string; a: string };

type Props = {
  article: ArtikelView;
  references?: ArticleReference[];
  faqs?: ArticleFaq[];
};

const STATS = [
  { value: "6", label: "Profesional Senior" },
  { value: "45+", label: "Tahun Pengalaman Profesional Gabungan" },
  { value: "1.000+", label: "Jam Executive Coaching" },
  { value: "80+", label: "Seminar, Workshop & Pelatihan" },
];

const STEPS = [
  {
    title: "Memahami kebutuhan",
    body: "Memahami konteks individu, keluarga, organisasi, atau institusi.",
  },
  {
    title: "Assessment atau eksplorasi",
    body: "Menggunakan metode yang relevan dengan tujuan layanan.",
  },
  {
    title: "Merancang intervensi",
    body: "Menyusun pendekatan sesuai kebutuhan dan konteks.",
  },
  {
    title: "Pelaksanaan",
    body: "Dilakukan oleh profesional yang relevan dengan layanan.",
  },
  {
    title: "Evaluasi dan tindak lanjut",
    body: "Meninjau hasil dan menentukan langkah berikutnya.",
  },
];

const SERVICES = [
  {
    id: "individual",
    name: "Layanan Individu & Keluarga",
    description: "Pendampingan psikologis untuk kebutuhan individu, pasangan, anak, dan keluarga.",
    to: "/layanan-individu",
    keywords: /psikolog|individu|keluarga|anak|remaja|pasangan|pernikahan|emosi|mental|trauma|stres|cemas/i,
  },
  {
    id: "online",
    name: "Konsultasi Psikolog Online",
    description: "Akses konsultasi psikolog secara online dengan proses yang terstruktur dan rahasia.",
    to: "/konsultasi-psikolog-online",
    keywords: /psikolog|individu|keluarga|anak|remaja|pasangan|pernikahan|emosi|mental|trauma|stres|cemas|online/i,
  },
  {
    id: "assessment",
    name: "Assessment Center",
    description: "Simulasi berbasis kompetensi untuk mendukung seleksi, promosi, dan perencanaan suksesi.",
    to: "/layanan/assessment-center",
    keywords: /assessment|asesmen|kompetensi|seleksi|promosi|suksesi|talenta|karyawan|organisasi|perusahaan|hr/i,
  },
  {
    id: "talent",
    name: "Pemetaan Talenta",
    description: "Pemetaan potensi, kompetensi, dan kesiapan karyawan untuk keputusan pengembangan.",
    to: "/layanan/pemetaan-talenta",
    keywords: /talenta|kompetensi|karier|promosi|suksesi|karyawan|organisasi|perusahaan|hr/i,
  },
  {
    id: "coaching",
    name: "Executive Coaching",
    description: "Pendampingan terstruktur bagi pemimpin dan talenta berpotensi tinggi.",
    to: "/layanan/executive-coaching",
    keywords: /pemimpin|kepemimpinan|executive|coaching|karier|manajer|direksi|organisasi|perusahaan/i,
  },
  {
    id: "wellbeing",
    name: "Employee Wellbeing",
    description: "Dukungan kesejahteraan psikologis dan pencegahan burnout di tempat kerja.",
    to: "/layanan/kesejahteraan-karyawan",
    keywords: /karyawan|burnout|stres kerja|wellbeing|kesejahteraan|organisasi|perusahaan|tempat kerja|hr/i,
  },
  {
    id: "healthcare",
    name: "Konsultasi Kesehatan",
    description: "Pendekatan medis dan psikologis untuk kebutuhan kesehatan dan institusi.",
    to: "/kesehatan",
    keywords: /kesehatan|medis|dokter|rumah sakit|klinis|wellness|pensiun/i,
  },
];

const REASONS = [
  {
    icon: Users,
    title: "Tim multidisiplin",
    body: "Perspektif psikologi, kesehatan, coaching, dan pengembangan organisasi sesuai kebutuhan.",
  },
  {
    icon: ShieldCheck,
    title: "Profesional dan beretika",
    body: "Layanan mengikuti kompetensi dan prinsip etika profesi yang relevan.",
  },
  {
    icon: Search,
    title: "Berbasis bukti ilmiah",
    body: "Klaim ilmiah didukung referensi yang relevan dan dapat ditelusuri.",
  },
  {
    icon: Scale,
    title: "Berorientasi pada kebutuhan",
    body: "Program disesuaikan dengan konteks individu atau organisasi.",
  },
  {
    icon: Lightbulb,
    title: "Fokus pada pertumbuhan",
    body: "Membantu membangun kapasitas dan tindak lanjut berkelanjutan.",
  },
];

const PROFESSIONALS = [
  {
    name: "Dr. Hj. Andiani",
    role: "Psikologi & Pengembangan Organisasi",
    expertise: "Psikologi, organisasi, kepemimpinan",
    photo: andianiPhoto,
    to: "/tokoh-sentral",
  },
  {
    name: "Dr. Tri Novia",
    role: "Psikologi & Kesehatan",
    expertise: "Psikologi, kesehatan, pengembangan manusia",
    photo: triNoviaPhoto,
    to: "/tokoh-sentral",
  },
  {
    name: "Maulidah Muflichah, M.Psi., Psikolog., CHt.",
    role: "Psikolog",
    expertise: "Konsultasi psikologi, kesehatan mental, pengembangan diri",
    photo: maulidahPhoto,
    to: "/professionals",
  },
  {
    name: "Eka Rachmawaty, M.M., PCC",
    role: "Executive Coach",
    expertise: "Executive coaching, leadership, pengembangan organisasi",
    photo: ekaPhoto,
    to: "/professionals",
  },
  {
    name: "Mamluatul Khoiriyah, M.Psi., Psikolog",
    role: "Psikolog",
    expertise: "Psikologi individu, keluarga, dan organisasi",
    photo: mamluatulPhoto,
    to: "/professionals",
  },
];

function relevantServices(article: ArtikelView) {
  const searchable = `${article.kategori} ${article.title} ${article.excerpt}`;
  const matches = SERVICES.filter((service) => service.keywords.test(searchable));
  return matches.length > 0 ? matches.slice(0, 5) : SERVICES;
}

export function ArticleFramework({ article, references = [], faqs = [] }: Props) {
  const services = relevantServices(article);

  return (
    <div className="mt-16 border-t border-border pt-16 md:mt-20 md:pt-20">
      <section aria-labelledby="about-talenta-mulia">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              Psychology • Healthcare • Leadership
            </p>
            <h2 id="about-talenta-mulia" className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              Tentang Talenta Mulia
            </h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Talenta Mulia adalah pusat konsultasi psikologi, kesehatan, dan kepemimpinan
            terintegrasi untuk individu, keluarga, organisasi, serta institusi kesehatan.
          </p>
        </div>

        <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-card p-5 md:p-6">
              <dd className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</dd>
              <dt className="mt-2 text-xs leading-5 text-muted-foreground md:text-sm">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="approach" className="mt-20">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Pendekatan</p>
        <h2 id="approach" className="mt-3 text-2xl font-bold text-primary md:text-3xl">
          Bagaimana Pendekatan Talenta Mulia Bekerja?
        </h2>
        <ol className="relative mt-8 grid gap-0 border-l border-border pl-6 md:grid-cols-5 md:border-l-0 md:border-t md:pl-0 md:pt-7">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative pb-8 last:pb-0 md:px-3 md:pb-0 first:md:pl-0 last:md:pr-0">
              <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-brand-blue ring-4 ring-background md:-top-[33px] md:left-3 first:md:left-0" />
              <span className="text-xs font-bold text-brand-blue">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-sm font-bold leading-5 text-primary">{step.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="article-services" className="mt-20">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Sesuai kebutuhan Anda</p>
        <h2 id="article-services" className="mt-3 text-2xl font-bold text-primary md:text-3xl">
          Layanan Talenta Mulia
        </h2>
        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid gap-4 border-b border-border p-5 last:border-b-0 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_auto] md:items-center md:px-6"
            >
              <h3 className="text-base font-bold text-primary">{service.name}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
              <Button asChild variant="outline" size="sm" className="w-full md:w-auto">
                <SiteLink to={service.to}>
                  Lihat Layanan <ArrowRight aria-hidden />
                </SiteLink>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="why-talenta-mulia" className="mt-20">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Standar layanan</p>
        <h2 id="why-talenta-mulia" className="mt-3 text-2xl font-bold text-primary md:text-3xl">
          Mengapa Talenta Mulia?
        </h2>
        <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 border-t border-border pt-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-brand-blue">
                <Icon className="h-4 w-4" aria-hidden />
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="professionals" className="mt-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Tim multidisiplin</p>
            <h2 id="professionals" className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              Profesional di Balik Talenta Mulia
            </h2>
          </div>
          <SiteLink to="/professionals" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline">
            Lihat Semua Profesional <ArrowRight className="h-4 w-4" aria-hidden />
          </SiteLink>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONALS.map((professional) => (
            <article key={professional.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={professional.photo}
                alt={`Foto ${professional.name}, ${professional.role} di Talenta Mulia`}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <div className="p-5">
                <h3 className="text-base font-bold leading-6 text-primary">{professional.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-blue">{professional.role}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{professional.expertise}</p>
                <SiteLink to={professional.to} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-brand-blue">
                  Lihat Profil <ArrowRight className="h-4 w-4" aria-hidden />
                </SiteLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {references.length > 0 ? (
        <section aria-labelledby="references" className="mt-20 border-t border-border pt-10">
          <h2 id="references" className="text-2xl font-bold text-primary">Sumber & Referensi</h2>
          <ol className="mt-5 space-y-3">
            {references.map((reference) => (
              <li key={reference.url} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
                <a href={reference.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-blue underline underline-offset-4">
                  {reference.title}
                </a>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {faqs.length > 0 ? (
        <section aria-labelledby="article-faq" className="mt-20">
          <h2 id="article-faq" className="text-2xl font-bold text-primary">Pertanyaan yang Sering Diajukan</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-primary">
                  {faq.q}
                  <span className="text-xl font-normal text-brand-blue group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 pr-8 text-sm leading-7 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-20 overflow-hidden rounded-xl bg-primary px-6 py-10 text-primary-foreground md:px-10 md:py-12">
        <HeartHandshake className="h-8 w-8 text-primary-foreground" aria-hidden />
        <h2 className="mt-5 text-2xl font-bold md:text-3xl">Berbicara dengan Talenta Mulia</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/80 md:text-base">
          Butuh pendampingan psikologi, pengembangan talenta, kepemimpinan, atau layanan
          organisasi? Konsultasikan kebutuhan Anda bersama Talenta Mulia.
        </p>
        <Button asChild variant="secondary" size="lg" className="mt-7 w-full sm:w-auto">
          <SiteLink to="/kontak">
            Konsultasikan Kebutuhan Anda <ArrowRight aria-hidden />
          </SiteLink>
        </Button>
      </section>
    </div>
  );
}