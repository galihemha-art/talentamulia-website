import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-konsultasi.webp";
import { Button } from "@/components/ui/button";
import { KERAHASIAAN_NOTE } from "@/lib/layanan-individu-data";

const WA_URL =
  "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20menjadwalkan%20konsultasi%20remaja.";

const SERVICES = [
  {
    icon: Brain,
    title: "Pengelolaan Emosi & Perubahan Suasana Hati",
    text: "Membantu remaja memahami perubahan emosi, mengatasi kecemasan, serta menyalurkan tekanan dengan cara yang sehat.",
    slug: "konseling-psikologis",
  },
  {
    icon: Users,
    title: "Masalah Pergaulan & Tekanan Teman Sebaya",
    text: "Pendampingan dalam menghadapi masalah pertemanan (peer pressure), bullying, hingga krisis kepercayaan diri di lingkungan sosial.",
    slug: "konseling-psikologis",
  },
  {
    icon: HeartHandshake,
    title: "Komunikasi Orang Tua & Remaja",
    text: "Jembatan penengah untuk mencairkan ketegangan, membantu remaja yang tertutup menjadi lebih terbuka kepada orang tua.",
    slug: "konseling-pernikahan",
  },
  {
    icon: Target,
    title: "Krisis Identitas & Minat Bakat",
    text: "Diskusi santai mengurai kebingungan jati diri, eksplorasi potensi diri, serta arah tujuan pendidikan dan masa depan.",
    slug: "tes-minat-bakat",
  },
  {
    icon: Sparkles,
    title: "Stres Akademik & Beban Sekolah",
    text: "Strategi praktis menghadapi rasa jenuh belajar, overthinking prestasi, dan manajemen waktu yang seimbang.",
    slug: "stres-kecemasan",
  },
  {
    icon: Smartphone,
    title: "Pendampingan Kecanduan Gadget & Game",
    text: "Membantu merancang batasan sehat penggunaan teknologi tanpa terkesan memaksa atau menggurui.",
    slug: "konseling-psikologis",
  },
] as const;

const WHY = [
  {
    icon: Lightbulb,
    title: "Pendekatan Nyambung & Asik",
    text: "Psikolog berkomunikasi dengan gaya yang hangat, tidak kaku, dan mudah memahami bahasa serta sudut pandang anak muda.",
  },
  {
    icon: HeartHandshake,
    title: "Suasana Santai & Tidak Bikin Tegang",
    text: "Ruang konsultasi didesain nyaman sehingga remaja tidak merasa dihakimi, disalahkan, atau merasa sedang 'diinterogasi'.",
  },
  {
    icon: ShieldCheck,
    title: "Privasi & Jaminan Kerahasiaan",
    text: "Menyediakan ruang aman penuh agar remaja bebas mengekspresikan cerita dan perasaannya tanpa rasa takut.",
  },
] as const;

const STEPS = [
  {
    number: "01",
    title: "Hubungi & Jadwalkan",
    text: "Sampaikan kebutuhan singkat dan pilih jadwal terbaik melalui WhatsApp atau formulir kontak.",
  },
  {
    number: "02",
    title: "Sesi Konseling",
    text: "Ikuti sesi secara tatap muka di Sidoarjo atau online dari tempat yang nyaman dan privat.",
  },
  {
    number: "03",
    title: "Evaluasi & Rencana Tindak Lanjut",
    text: "Susun pemahaman, strategi coping, dan langkah berikutnya bersama psikolog sesuai kebutuhan.",
  },
] as const;

const FAQ = [
  {
    q: "Bagaimana jika anak remaja menolak atau enggan diajak konseling?",
    a: "Hal ini wajar terjadi. Psikolog kami mengedepankan pendekatan yang tidak menakutkan dan santai, sehingga remaja merasa seperti sedang ngobrol dengan teman diskusi yang tepat.",
  },
  {
    q: "Apakah isi cerita remaja akan langsung diberitahukan kepada orang tua?",
    a: "Privasi sesi dijaga ketat. Psikolog akan menjembatani komunikasi ke orang tua secara bijak dan proporsional tanpa merusak kepercayaan anak.",
  },
  {
    q: "Apakah konseling remaja bisa dilakukan secara online?",
    a: "Bisa. Sesi dapat diakses secara daring (online) melalui video call maupun tatap muka (offline) sesuai kenyamanan remaja.",
  },
] as const;

export function TeenCounselingPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-border bg-counseling-soft">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-brand-blue">Beranda</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link to="/layanan-individu" className="transition-colors hover:text-brand-blue">Layanan Individu</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-primary">Konseling Remaja</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-counseling/20 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-counseling">
                <span className="h-2 w-2 rounded-full bg-counseling" aria-hidden="true" />
                Ruang aman untuk memahami dinamika remaja
              </p>
              <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
                Layanan Konseling Remaja – Talenta Mulia
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Bantu remaja memahami dinamika diri, mengatasi krisis identitas, dan membangun komunikasi terbuka bersama psikolog yang ramah serta nyambung diajak ngobrol.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-xl px-6">
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                    Jadwalkan Konsultasi Sekarang <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-xl px-6">
                  <a href="#cakupan">Lihat Layanan Kami</a>
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-3" aria-label="Keunggulan layanan">
                {["Psikolog Remaja Berizin Resmi", "Pendekatan Komunikatif & Nyambung", "100% Kerahasiaan & Ruang Aman"].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-medium text-primary shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-counseling" aria-hidden="true" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-background shadow-soft">
                <img
                  src={heroImage}
                  alt="Psikolog berhijab mendengarkan klien dalam sesi konseling Talenta Mulia"
                  width={768}
                  height={960}
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-border bg-background/95 p-5 shadow-soft backdrop-blur sm:left-[-1.5rem] sm:right-auto sm:max-w-xs">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-counseling-soft text-counseling">
                    <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-primary">Online maupun tatap muka di Sidoarjo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="ringkasan" className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <div className="grid gap-5 rounded-2xl border border-counseling/25 bg-counseling-soft p-6 md:grid-cols-[auto_1fr] md:p-9">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-counseling text-primary-foreground">
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h2 id="ringkasan" className="font-heading text-2xl font-bold text-primary">Mengapa Memilih Konseling Remaja di Talenta Mulia?</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Layanan Konseling Remaja Talenta Mulia adalah fasilitas pendampingan kesehatan mental profesional bagi usia remaja yang mengalami tekanan akademik, krisis identitas, masalah pergaulan, maupun perubahan emosi. Ditangani oleh psikolog berizin yang ramah dan adaptif dengan dunia anak muda, kami menghadirkan ruang diskusi yang santai, bebas penghakiman, serta tidak membuat tegang, baik secara tatap muka (offline) maupun daring (online).
            </p>
          </div>
        </div>
      </section>

      <section id="cakupan" aria-labelledby="cakupan-title" className="scroll-mt-28 border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-counseling">Dukungan sesuai kebutuhan</p>
            <h2 id="cakupan-title" className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">Cakupan Layanan Konseling &amp; Pendampingan Remaja</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Solusi komunikatif untuk mengurai berbagai masalah dan tantangan khas usia remaja.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} to="/layanan/$slug" params={{ slug: service.slug }} className="group flex min-h-64 flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-counseling/40 hover:shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-counseling-soft text-counseling transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-primary">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-counseling">Pelajari layanan <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="why" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="why" className="font-heading text-3xl font-bold text-primary md:text-4xl">Mengapa Remaja Merasa Nyaman di Talenta Mulia?</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {WHY.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-t-2 border-counseling px-2 pt-6">
                <Icon className="h-7 w-7 text-counseling" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="steps" className="border-y border-border bg-counseling-soft">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 id="steps" className="font-heading text-3xl font-bold text-primary md:text-4xl">3 Langkah Mudah Memulai Konseling</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <li key={step.number} className="relative border-l border-counseling/30 pl-6">
                <span className="font-heading text-3xl font-bold text-counseling">{step.number}</span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <MonitorSmartphone className="h-5 w-5 text-counseling" aria-hidden="true" /> Tersedia secara online dan tatap muka.
          </div>
        </div>
      </section>

      <section aria-labelledby="faq" className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h2 id="faq" className="font-heading text-3xl font-bold text-primary md:text-4xl">Pertanyaan Umum tentang Konseling Remaja</h2>
        <div className="mt-8 space-y-3">
          {FAQ.map((item, index) => (
            <details key={item.q} open={index === 0} className="group rounded-xl border border-border bg-card p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-heading font-semibold text-primary marker:hidden">
                <span className="flex items-center justify-between gap-4">{item.q}<ChevronRight className="h-5 w-5 shrink-0 text-counseling transition-transform group-open:rotate-90" aria-hidden="true" /></span>
              </summary>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="safety" className="mx-auto max-w-4xl px-5 pb-14 md:pb-20">
        <div className="rounded-xl border border-border bg-secondary/40 p-6">
          <h2 id="safety" className="font-heading text-lg font-semibold text-primary">Catatan keselamatan</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Layanan ini bukan layanan gawat darurat. Jika Anda atau orang terdekat berisiko menyakiti diri atau berada dalam kondisi darurat, segera hubungi layanan gawat darurat atau fasilitas kesehatan terdekat.</p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1fr_auto] md:items-center md:py-20">
          <div>
            <h2 className="max-w-3xl font-heading text-3xl font-bold md:text-4xl">Siap Memulai Langkah Pertama Menuju Pikiran yang Lebih Tenang?</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/75">Jangan ragu untuk mengurai masalah Anda bersama tim psikolog profesional kami.</p>
          </div>
          <Button asChild size="lg" className="h-12 rounded-xl bg-counseling px-6 text-primary-foreground hover:bg-counseling/90">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Konsultasi via WhatsApp Sekarang</a>
          </Button>
        </div>
      </section>
    </>
  );
}
