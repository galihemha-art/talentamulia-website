import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Factory,
  FileText,
  Hospital,
  Laptop2,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  School,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site/SiteFooter";
import { canonicalLink, ogUrl } from "@/lib/seo";

export const Route = createFileRoute("/risway")({
  head: () => ({
    meta: [
      { title: "Risway.id untuk Perusahaan — Talenta Mulia" },
      {
        name: "description",
        content:
          "Kelola kehadiran karyawan lebih praktis dengan Risway.id, dipasarkan dan didampingi oleh Talenta Mulia.",
      },
      { property: "og:title", content: "Kelola Kehadiran Karyawan Lebih Praktis | Risway.id" },
      {
        property: "og:description",
        content: "Solusi pencatatan dan pemantauan kehadiran untuk kebutuhan operasional perusahaan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/risway"),
    ],
    links: [canonicalLink("/risway")],
  }),
  component: RiswayPage,
});

const FEATURES = [
  { icon: ClipboardCheck, title: "Pencatatan kehadiran", text: "Membantu perusahaan mencatat kehadiran karyawan secara lebih teratur dalam satu alur kerja." },
  { icon: BarChart3, title: "Pemantauan yang lebih jelas", text: "Memberi ruang bagi tim untuk memantau data kehadiran sebagai bagian dari operasional harian." },
  { icon: FileText, title: "Rekap untuk kebutuhan operasional", text: "Mendukung penyusunan rekap data kehadiran yang dapat digunakan sebagai bahan tindak lanjut." },
  { icon: Laptop2, title: "Akses yang praktis", text: "Dirancang untuk membantu HRD dan manajer mengelola informasi kehadiran dengan lebih praktis." },
];

const INDUSTRIES = [
  { icon: Factory, title: "Manufaktur", text: "Mendukung koordinasi kehadiran pada lingkungan kerja dengan aktivitas operasional yang dinamis." },
  { icon: Hospital, title: "Kesehatan", text: "Membantu kebutuhan pemantauan kehadiran dalam organisasi dengan pembagian kerja yang beragam." },
  { icon: Building2, title: "Korporasi & jasa", text: "Membuat proses administrasi kehadiran lebih tertata untuk tim dan unit kerja." },
  { icon: School, title: "Pendidikan & institusi", text: "Mendukung pengelolaan kehadiran untuk tenaga kerja dan tim pendukung institusi." },
];

const FAQ = [
  { q: "Apa itu Risway.id?", a: "Risway.id adalah aplikasi untuk membantu perusahaan mengelola kebutuhan kehadiran karyawan. Talenta Mulia berperan sebagai mitra pemasaran dan pendamping konsultasi, bukan pemilik aplikasi." },
  { q: "Apakah Risway.id cocok untuk perusahaan saya?", a: "Kecocokan bergantung pada kebutuhan, jumlah karyawan, pola kerja, dan proses yang berjalan di perusahaan Anda. Kami dapat membantu memetakan kebutuhan pada konsultasi awal." },
  { q: "Fitur apa saja yang tersedia?", a: "Fitur yang kami komunikasikan pada tahap ini meliputi pencatatan kehadiran, pemantauan data, dan rekap untuk kebutuhan operasional. Detail paket dan kemampuan aplikasi perlu dikonfirmasi bersama tim Risway.id." },
  { q: "Apakah Talenta Mulia adalah pemilik Risway.id?", a: "Bukan. Talenta Mulia adalah mitra pemasaran yang membantu perusahaan memahami solusi Risway.id dan menghubungkan kebutuhan perusahaan dengan pihak terkait." },
  { q: "Bagaimana cara memulai?", a: "Isi formulir konsultasi di halaman ini. Tim kami akan menindaklanjuti untuk memahami kebutuhan dan mengatur pembahasan lebih lanjut." },
];

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text: string; light?: boolean }) {
  return (
    <div className={`max-w-2xl ${light ? "text-primary-foreground" : ""}`}>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-cyan-200" : "text-brand-blue"}`}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{title}</h2>
      <p className={`mt-4 text-base leading-7 ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{text}</p>
    </div>
  );
}

function RiswayPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="overflow-hidden bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-100">
                <ShieldCheck className="size-4" /> Mitra pemasaran Risway.id
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">Kelola Kehadiran Karyawan Lebih Praktis</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/75">Bantu tim HRD dan operasional merapikan proses kehadiran karyawan dengan solusi Risway.id, didampingi oleh Talenta Mulia.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#konsultasi"><Button size="lg" className="bg-white text-primary hover:bg-cyan-50">Jadwalkan konsultasi <ArrowRight data-icon="inline-end" /></Button></a>
                <a href="#fitur"><Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">Lihat fitur Risway</Button></a>
              </div>
              <p className="mt-5 text-xs text-primary-foreground/55">Talenta Mulia adalah mitra pemasaran, bukan pemilik aplikasi Risway.id.</p>
            </div>
            <div className="relative rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/[0.08] p-5 shadow-2xl">
              <div className="rounded-2xl bg-background p-5 text-foreground shadow-lg">
                <div className="flex items-center justify-between border-b border-border pb-4"><div><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ringkasan kehadiran</p><p className="mt-1 font-semibold text-primary">Operasional hari ini</p></div><div className="rounded-xl bg-cyan-50 p-3 text-cyan-700"><Clock3 className="size-5" /></div></div>
                <div className="grid grid-cols-2 gap-3 py-5"><div className="rounded-xl bg-surface-soft p-4"><p className="text-2xl font-bold text-primary">Data</p><p className="mt-1 text-xs text-muted-foreground">lebih tertata</p></div><div className="rounded-xl bg-surface-soft p-4"><p className="text-2xl font-bold text-primary">Satu</p><p className="mt-1 text-xs text-muted-foreground">alur kerja</p></div></div>
                <div className="flex items-center gap-3 rounded-xl border border-border p-3"><div className="rounded-full bg-emerald-50 p-2 text-emerald-700"><Check className="size-4" /></div><p className="text-sm font-medium">Bantu tim bekerja lebih praktis</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-soft px-5 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><SectionHeading eyebrow="Masalah operasional" title="Kehadiran yang tidak tertata menghabiskan perhatian tim." text="Ketika data tersebar dan proses masih manual, HRD dan manajer operasional perlu meluangkan waktu lebih banyak untuk mencari, mencocokkan, dan menindaklanjuti informasi." /><div className="grid gap-4 sm:grid-cols-2"><Problem icon={FileText} title="Data tersebar" text="Informasi kehadiran sulit dilihat secara ringkas oleh pihak yang membutuhkan." /><Problem icon={Clock3} title="Administrasi berulang" text="Pencatatan dan rekap manual berpotensi memakan waktu tim." /><Problem icon={UsersRound} title="Koordinasi tidak seragam" text="Perbedaan cara kerja antar unit membuat tindak lanjut lebih lambat." /><Problem icon={LockKeyhole} title="Visibilitas terbatas" text="Manajemen membutuhkan gambaran yang lebih jelas untuk kebutuhan operasional." /></div></div>
        </section>

        <section id="fitur" className="px-5 py-20 md:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Fitur Risway.id" title="Fokus pada proses kehadiran yang lebih rapi." text="Berikut ruang lingkup fitur yang kami komunikasikan untuk kebutuhan awal. Detail kemampuan dan konfigurasi akan dikonfirmasi bersama pihak Risway.id." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{FEATURES.map((item) => <Feature key={item.title} {...item} />)}</div></div></section>

        <section className="bg-primary px-5 py-20 text-primary-foreground md:py-24"><div className="mx-auto max-w-7xl"><SectionHeading light eyebrow="Solusi untuk industri" title="Satu kebutuhan, konteks operasional yang berbeda." text="Risway.id dapat menjadi bahan pembahasan awal untuk perusahaan dengan karakter kerja dan kebutuhan koordinasi yang beragam." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{INDUSTRIES.map((item) => <div key={item.title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.08] p-6"><item.icon className="size-7 text-cyan-200" /><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">{item.text}</p></div>)}</div></div></section>

        <section className="bg-surface-soft px-5 py-20 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><SectionHeading eyebrow="Manfaat bisnis" title="Berikan ruang bagi tim untuk fokus pada hal yang lebih penting." text="Dengan proses kehadiran yang lebih praktis, perusahaan dapat membangun dasar administrasi yang lebih tertata untuk mendukung operasional." /><div className="grid gap-4 sm:grid-cols-2"><Benefit title="Administrasi lebih ringkas" /><Benefit title="Koordinasi lebih terarah" /><Benefit title="Informasi lebih mudah ditinjau" /><Benefit title="Dasar tindak lanjut yang lebih jelas" /></div></div></section>

        <section className="px-5 py-20 md:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Cara kerja" title="Mulai dari kebutuhan perusahaan Anda." text="Pendekatan konsultatif membantu memastikan pembahasan tetap relevan dengan proses kerja yang sudah berjalan." /><div className="mt-12 grid gap-8 md:grid-cols-4">{["Sampaikan kebutuhan", "Pahami konteks kerja", "Bahas solusi Risway.id", "Tentukan langkah lanjut"].map((title, index) => <div key={title} className="relative"><p className="text-sm font-bold text-brand-blue">0{index + 1}</p><h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Diskusi singkat bersama Talenta Mulia untuk memetakan kebutuhan dan pertanyaan utama Anda.</p>{index < 3 && <ChevronRight className="absolute right-0 top-2 hidden size-5 text-border md:block" />}</div>)}</div></div></section>

        <section className="bg-surface-soft px-5 py-20 md:py-24"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Pertanyaan umum" title="Yang perlu Anda ketahui." text="Belum menemukan jawabannya? Sampaikan pertanyaan saat konsultasi awal." /><Accordion type="single" collapsible className="mt-8 w-full">{FAQ.map((item, index) => <AccordionItem key={item.q} value={`item-${index}`}><AccordionTrigger className="text-left text-base text-primary">{item.q}</AccordionTrigger><AccordionContent className="leading-7 text-muted-foreground">{item.a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section id="konsultasi" className="px-5 py-20 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 rounded-[2rem] bg-primary p-7 text-primary-foreground md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16"><div><SectionHeading light eyebrow="Konsultasi" title="Mari bahas kebutuhan kehadiran di perusahaan Anda." text="Isi formulir singkat ini sebagai placeholder booking. Tim Talenta Mulia akan menghubungi Anda untuk menindaklanjuti pembahasan." /><div className="mt-8 flex flex-col gap-3 text-sm text-primary-foreground/75"><p className="flex items-center gap-3"><MessageCircle className="size-4 text-cyan-200" /> Konsultasi awal bersama Talenta Mulia</p><p className="flex items-center gap-3"><Mail className="size-4 text-cyan-200" /> info@talentamulia.co.id</p><p className="flex items-center gap-3"><Phone className="size-4 text-cyan-200" /> +62 821 3299 0498</p></div></div><BookingForm submitted={submitted} onSubmit={() => setSubmitted(true)} /></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Problem({ icon: Icon, title, text }: { icon: typeof FileText; title: string; text: string }) { return <div className="rounded-2xl border border-border bg-background p-5"><Icon className="size-6 text-brand-blue" /><h3 className="mt-4 font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>; }
function Feature({ icon: Icon, title, text }: { icon: typeof FileText; title: string; text: string }) { return <div className="rounded-2xl border border-border bg-background p-6 shadow-soft"><div className="flex size-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700"><Icon className="size-5" /></div><h3 className="mt-5 font-semibold text-primary">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>; }
function Benefit({ title }: { title: string }) { return <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5"><div className="mt-0.5 rounded-full bg-cyan-50 p-1.5 text-cyan-700"><Check className="size-4" /></div><p className="text-sm font-semibold leading-6 text-primary">{title}</p></div>; }
function BookingForm({ submitted, onSubmit }: { submitted: boolean; onSubmit: () => void }) { return submitted ? <div className="flex min-h-[360px] flex-col justify-center rounded-2xl bg-background p-7 text-foreground"><div className="flex size-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><Check className="size-6" /></div><h3 className="mt-5 text-2xl font-bold text-primary">Terima kasih.</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Permintaan Anda sudah tercatat sebagai placeholder. Tim Talenta Mulia akan menindaklanjuti secara manual.</p></div> : <form onSubmit={(event) => { event.preventDefault(); onSubmit(); }} className="rounded-2xl bg-background p-6 text-foreground shadow-xl md:p-8"><div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-medium text-primary">Nama lengkap<input required name="name" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring" placeholder="Nama Anda" /></label><label className="text-sm font-medium text-primary">Nama perusahaan<input required name="company" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring" placeholder="Perusahaan Anda" /></label></div><label className="mt-4 block text-sm font-medium text-primary">Email kerja<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring" placeholder="nama@perusahaan.com" /></label><label className="mt-4 block text-sm font-medium text-primary">Kebutuhan utama<textarea required name="need" rows={4} className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring" placeholder="Ceritakan singkat kebutuhan Anda" /></label><Button type="submit" size="lg" className="mt-5 w-full">Kirim permintaan konsultasi <ArrowRight data-icon="inline-end" /></Button><p className="mt-3 text-center text-xs text-muted-foreground">Form ini adalah placeholder dan belum terhubung ke sistem booking.</p></form>; }

export default RiswayPage;
