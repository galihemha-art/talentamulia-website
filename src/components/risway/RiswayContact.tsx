import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { features, RISWAY } from "@/lib/risway-data";

const EMPLOYEE_RANGES = ["1–50", "51–200", "201–500", "501–1.000", ">1.000"];
const INDUSTRIES = ["Outsourcing", "Security", "Cleaning Service", "Field Worker", "Lainnya"];
const PLATFORMS = ["Google Meet", "Zoom", "Microsoft Teams"];
const MEETING_SLOTS = ["09.00–10.00", "10.00–11.00", "11.00–12.00", "12.00–13.00", "13.00–14.00", "14.00–15.00", "15.00–16.00"];

function nextWorkingDay(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

export function RiswayContact() {
  const [consent, setConsent] = useState(false);
  const [waLink, setWaLink] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return <section id="demo" className="rw-section rw-contact"><div className="rw-container rw-contact-grid"><div><span className="rw-eyebrow">MARI DISKUSIKAN KEBUTUHAN ANDA</span><h2>Alur kerja yang tepat<br />dimulai dari percakapan.</h2><p>Ceritakan tantangan operasional perusahaan Anda. Tim Talenta Mulia akan membantu mendiskusikan kebutuhan dan jadwal demo RISWAY.</p><div className="rw-contact-points"><span><CheckCircle2 />Diskusi sesuai kebutuhan perusahaan</span><span><CheckCircle2 />Pemetaan fitur dan alur operasional</span><span><CheckCircle2 />Penawaran berdasarkan cakupan implementasi</span></div><a className="rw-sales-link" href={`https://wa.me/${RISWAY.whatsapp}?text=${encodeURIComponent("Halo Talenta Mulia, saya ingin berdiskusi mengenai RISWAY.")}`} target="_blank" rel="noopener noreferrer"><MessageCircle /> Hubungi tim melalui WhatsApp <ArrowUpRight size={16} /></a></div>
    <form className="rw-contact-form" onSubmit={e => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const dateValue = String(data.get("date") || "");
      if (dateValue) {
        const day = new Date(`${dateValue}T00:00:00`).getDay();
        if (day === 0 || day === 6) {
          setError("Pilih tanggal pada hari kerja (Senin–Jumat).");
          return;
        }
      }
      setError(null);
      const interest = data.getAll("features").join(", ") || "Diskusikan saat meeting";
      const message = `Halo Talenta Mulia, saya ingin menjadwalkan demo gratis RISWAY via meeting online.\n\nNama lengkap: ${data.get("name")}\nPerusahaan: ${data.get("company")}\nJabatan: ${data.get("position") || "-"}\nEmail bisnis: ${data.get("email")}\nNomor WhatsApp: ${data.get("phone")}\nJumlah karyawan: ${data.get("employees")}\nIndustri: ${data.get("industry")}\nFitur diminati: ${interest}\nTanggal meeting: ${dateValue}\nJam meeting: ${data.get("slot")} WIB\nPlatform: ${data.get("platform")}\nCatatan tambahan: ${data.get("notes") || "-"}\n\nSaya menyetujui penggunaan informasi ini untuk menindaklanjuti permintaan demo sesuai Kebijakan Privasi.`;
      const waLink = `https://wa.me/${RISWAY.whatsapp}?text=${encodeURIComponent(message)}`;
      const opened = window.open(waLink, "_blank", "noopener,noreferrer");
      if (!opened) setWaLink(waLink);
      setSubmitted(true);
    }}>
      <h3>Jadwalkan Demo Gratis via Meeting Online</h3><p className="rw-form-intro">Isi data berikut, tim Talenta Mulia akan mengirim undangan meeting dan konfirmasi jadwal.</p><div className="rw-form-grid"><label>Nama lengkap *<input name="name" autoComplete="name" required maxLength={100} placeholder="Nama Anda" onChange={() => { setWaLink(null); setSubmitted(false); }} /></label><label>Nama perusahaan *<input name="company" autoComplete="organization" required maxLength={150} placeholder="Perusahaan Anda" onChange={() => { setWaLink(null); setSubmitted(false); }} /></label><label>Jabatan <span className="rw-optional">(opsional)</span><input name="position" autoComplete="organization-title" maxLength={100} placeholder="Contoh: HR Manager" onChange={() => { setWaLink(null); setSubmitted(false); }} /></label><label>Email bisnis *<input type="email" name="email" autoComplete="email" required placeholder="nama@perusahaan.co.id" onChange={() => { setWaLink(null); setSubmitted(false); }} /></label><label>Nomor WhatsApp *<input type="tel" name="phone" autoComplete="tel" pattern="[+0-9() .-]{8,20}" required placeholder="08xxxxxxxxxx" onChange={() => { setWaLink(null); setSubmitted(false); }} /></label><label>Jumlah karyawan *<select name="employees" required defaultValue="" onChange={() => { setWaLink(null); setSubmitted(false); }}><option value="" disabled>Pilih rentang</option>{EMPLOYEE_RANGES.map(n => <option key={n}>{n}</option>)}</select></label><label>Industri *<select name="industry" required defaultValue="" onChange={() => { setWaLink(null); setSubmitted(false); }}><option value="" disabled>Pilih industri</option>{INDUSTRIES.map(n => <option key={n}>{n}</option>)}</select></label></div><fieldset><legend>Fitur diminati <span className="rw-optional">(opsional)</span></legend><div className="rw-interest-grid">{features.map(f => <label key={f.id}><input type="checkbox" name="features" value={f.short} onChange={() => { setWaLink(null); setSubmitted(false); }} />{f.short}</label>)}</div></fieldset><div className="rw-form-grid"><label>Tanggal meeting *<input type="date" name="date" required min={nextWorkingDay()} step={1} onChange={() => { setWaLink(null); setSubmitted(false); }} /></label><label>Jam meeting *<select name="slot" required defaultValue="" onChange={() => { setWaLink(null); setSubmitted(false); }}><option value="" disabled>Pilih slot</option>{MEETING_SLOTS.map(s => <option key={s} value={s}>{s} WIB</option>)}</select></label><label>Platform *<select name="platform" required defaultValue="" onChange={() => { setWaLink(null); setSubmitted(false); }}><option value="" disabled>Pilih platform</option>{PLATFORMS.map(p => <option key={p}>{p}</option>)}</select></label></div><label>Catatan tambahan <span className="rw-optional">(opsional)</span><textarea name="notes" rows={3} maxLength={1500} placeholder="Contoh: kebutuhan koordinasi shift dan pelaporan di beberapa cabang." onChange={() => { setWaLink(null); setSubmitted(false); }} /></label><label className="rw-consent"><input type="checkbox" checked={consent} required onChange={e => { setConsent(e.target.checked); setWaLink(null); setSubmitted(false); }} /><span>Saya menyetujui penggunaan informasi ini untuk menindaklanjuti permintaan demo sesuai <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>.</span></label><small>Jangan sertakan data pribadi karyawan atau informasi sensitif perusahaan.</small>{error && <small className="rw-form-error" role="alert">{error}</small>}<Button type="submit" size="lg" className="rw-submit" disabled={!consent}>Kirim Permintaan Meeting<ArrowUpRight /></Button>{waLink && !submitted && <div className="rw-form-ready" role="status"><strong>WhatsApp tidak terbuka otomatis.</strong><p>Browser memblokir tab baru. Buka tautan berikut untuk mengirim permintaan Anda.</p><Button asChild><a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => setSubmitted(true)}><MessageCircle /> Lanjutkan ke WhatsApp</a></Button></div>}{submitted && <div className="rw-form-ready" role="status"><strong>Terima kasih! Permintaan demo Anda sudah kami terima.</strong><p>Tim Talenta Mulia akan mengirim undangan meeting ke email Anda dan konfirmasi via WhatsApp.</p></div>}</form></div></section>;
}
