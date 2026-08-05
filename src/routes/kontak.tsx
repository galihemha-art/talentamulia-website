import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink, ogUrl } from "@/lib/seo";
import { useState, type FormEvent } from "react";
import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Buat Janji Konsultasi di Sidoarjo, Jawa Timur — Talenta Mulia" },
      {
        name: "description",
        content:
          "Hubungi Talenta Mulia di Jl. Raya Gadung No.5, Wage, Taman, Sidoarjo, Jawa Timur. Ajukan janji konsultasi psikologi, coaching, kesehatan, atau pelatihan — online maupun tatap muka.",
      },
      {
        property: "og:title",
        content: "Buat Janji Konsultasi di Sidoarjo, Jawa Timur — Talenta Mulia",
      },
      {
        property: "og:description",
        content:
          "Hubungi Talenta Mulia di Sidoarjo, Jawa Timur untuk konsultasi psikologi, coaching, kesehatan, dan pelatihan.",
      },
      { property: "og:type", content: "website" },
      ogUrl("/kontak"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonicalLink("/kontak")],
  }),
  component: Page,
});

const WA_URL =
  "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20konsultasi.";

const ALAMAT = "Jl. Raya Gadung No.5, Margomulyo, Wage, Kec. Taman, Sidoarjo, Jawa Timur";

const MAPS_URL = "https://maps.app.goo.gl/jytMfuarDW5F5FBE6";

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Jl.%20Raya%20Gadung%20No.5%2C%20Margomulyo%2C%20Wage%2C%20Taman%2C%20Sidoarjo%2C%20Jawa%20Timur&output=embed";

const LAYANAN = [
  "Assessment Psikologi",
  "Executive Coaching",
  "Konsultasi Kesehatan",
  "Pelatihan & Seminar",
  "Layanan Individu",
  "Program Masa Persiapan Pensiun (MPP)",
  "Pemeriksaan Psikologi",
  "Lainnya",
];

const schema = z.object({
  nama: z.string().trim().min(2, "Nama minimal 2 karakter").max(100, "Nama maksimal 100 karakter"),
  email: z.string().trim().email("Format email tidak valid").max(255),
  whatsapp: z
    .string()
    .trim()
    .min(8, "Nomor WhatsApp tidak valid")
    .max(20, "Nomor WhatsApp terlalu panjang")
    .regex(/^[0-9+\-\s()]+$/, "Nomor WhatsApp hanya boleh berisi angka dan tanda + - ( )"),
  organisasi: z.string().trim().max(120, "Nama organisasi maksimal 120 karakter").optional(),
  layanan: z.enum(LAYANAN as [string, ...string[]], { errorMap: () => ({ message: "Pilih jenis layanan" }) }),
  pesan: z.string().trim().min(10, "Pesan minimal 10 karakter").max(1000, "Pesan maksimal 1000 karakter"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const inputClass =
  "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand-blue";

function Page() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    const v = parsed.data;
    const pesan = [
      "Halo Talenta Mulia, saya ingin membuat janji konsultasi.",
      `Nama: ${v.nama}`,
      `Email: ${v.email}`,
      `WhatsApp: ${v.whatsapp}`,
      v.organisasi ? `Organisasi: ${v.organisasi}` : null,
      `Jenis Layanan: ${v.layanan}`,
      `Pesan: ${v.pesan}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/6282132990498?text=${encodeURIComponent(pesan)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    form.reset();
  }

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Buat Janji Konsultasi
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ceritakan kebutuhan Anda — tim kami di Sidoarjo, Jawa Timur akan menghubungi Anda
            kembali pada jam kerja.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <h2 className="text-xl font-bold text-primary">Formulir Permintaan Konsultasi</h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nama" className="text-sm font-semibold text-primary">
                  Nama <span className="text-brand-blue">*</span>
                </label>
                <input id="nama" name="nama" maxLength={100} className={inputClass} />
                {errors.nama && <p className="mt-1 text-xs text-destructive">{errors.nama}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-primary">
                  Email <span className="text-brand-blue">*</span>
                </label>
                <input id="email" name="email" type="email" maxLength={255} className={inputClass} />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="whatsapp" className="text-sm font-semibold text-primary">
                  No. WhatsApp <span className="text-brand-blue">*</span>
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  inputMode="tel"
                  maxLength={20}
                  placeholder="08xxxxxxxxxx"
                  className={inputClass}
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-xs text-destructive">{errors.whatsapp}</p>
                )}
              </div>
              <div>
                <label htmlFor="organisasi" className="text-sm font-semibold text-primary">
                  Nama Organisasi <span className="text-muted-foreground">(opsional)</span>
                </label>
                <input id="organisasi" name="organisasi" maxLength={120} className={inputClass} />
                {errors.organisasi && (
                  <p className="mt-1 text-xs text-destructive">{errors.organisasi}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="layanan" className="text-sm font-semibold text-primary">
                  Jenis Layanan <span className="text-brand-blue">*</span>
                </label>
                <select id="layanan" name="layanan" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Pilih jenis layanan
                  </option>
                  {LAYANAN.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
                {errors.layanan && (
                  <p className="mt-1 text-xs text-destructive">{errors.layanan}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="pesan" className="text-sm font-semibold text-primary">
                  Pesan <span className="text-brand-blue">*</span>
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={5}
                  maxLength={1000}
                  className={`${inputClass} resize-y`}
                  placeholder="Ceritakan singkat kebutuhan Anda, jumlah peserta, dan waktu yang diharapkan."
                />
                {errors.pesan && <p className="mt-1 text-xs text-destructive">{errors.pesan}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" /> Kirim Permintaan
            </button>

            {sent && (
              <p className="mt-4 rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-primary">
                Terima kasih! Permintaan Anda kami teruskan melalui WhatsApp. Jika jendela WhatsApp
                tidak terbuka, silakan gunakan tombol chat di samping.
              </p>
            )}
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-primary">Informasi Kontak</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed text-muted-foreground hover:text-primary"
                  >
                    {ALAMAT}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <a href="tel:+6282132990498" className="text-muted-foreground hover:text-primary">
                    +62 821 3299 0498
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <a
                    href="mailto:info@talentamulia.co.id"
                    className="text-muted-foreground hover:text-primary"
                  >
                    info@talentamulia.co.id
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <span className="text-muted-foreground">Senin–Jumat, 09.00–16.00 WIB</span>
                </li>
              </ul>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Chat WhatsApp Langsung
              </a>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Peta lokasi kantor Talenta Mulia di Wage, Taman, Sidoarjo, Jawa Timur"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-card/95 px-3 py-1.5 text-xs font-semibold text-brand-blue shadow-sm hover:bg-card"
              >
                Buka di Maps <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
