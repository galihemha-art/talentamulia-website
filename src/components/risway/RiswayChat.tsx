import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };
type Opt = { label: string; action: string };

const WA_URL = "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20bertanya%20tentang%20RISWAY.";
const GREETING = "Halo! Saya asisten RISWAY dari Talenta Mulia. Silakan pilih topik yang ingin Anda ketahui.";

const MENU: Opt[] = [
  { label: "Apa itu RISWAY?", action: "about" },
  { label: "Fitur RISWAY", action: "features" },
  { label: "Aplikasi mobile", action: "mobile" },
  { label: "Dashboard HR", action: "dashboard" },
  { label: "Harga & penawaran", action: "price" },
  { label: "Jadwalkan demo gratis", action: "demo" },
  { label: "Chat dengan tim", action: "wa" },
];

const FEATURES: Record<string, [string, string]> = {
  f1: ["Smart Attendance", "Absensi dengan GPS, selfie, face verification, shift, dan riwayat absensi."],
  f2: ["Employee Request", "Pengajuan cuti, izin, lembur, dinas luar, dan ganti shift langsung dari aplikasi, disetujui atasan."],
  f3: ["Daily Activity", "Catatan aktivitas harian lengkap dengan foto dan lokasi."],
  f4: ["Patrol & Inspection", "Patroli dengan QR patrol, checkpoint, foto, temuan, dan laporan."],
  f5: ["Digital Payslip", "Slip gaji digital, bisa download PDF, dan riwayat gaji."],
  f6: ["Employee Performance", "Monitoring KPI, kehadiran, produktivitas, dan ranking karyawan."],
};

const ANSWERS: Record<string, string> = {
  about: "RISWAY adalah aplikasi Smart Workforce Management untuk perusahaan outsourcing, security, cleaning service, dan field worker. Sudah dipakai 100+ perusahaan dan 50K+ karyawan, dengan uptime 99%. RISWAY juga mendukung multi company.",
  mobile: "Aplikasi RISWAY tersedia di Android dan iOS. Karyawan bisa absensi GPS dengan verifikasi selfie, mengisi aktivitas, patroli, dan pengajuan dari smartphone. Data tersinkron real-time dengan dashboard perusahaan, dilengkapi secure login dan notifikasi.",
  dashboard: "Dashboard HR menampilkan secara realtime: kehadiran hari ini, karyawan terlambat, pengajuan menunggu approval, aktivitas hari ini, patroli hari ini, dan performance karyawan.",
  price: "Harga disesuaikan dengan kebutuhan dan jumlah karyawan perusahaan Anda. Jadwalkan demo gratis, tim Talenta Mulia akan menyiapkan penawaran yang sesuai.",
};

const AFTER: Opt[] = [{ label: "Jadwalkan demo gratis", action: "demo" }, { label: "Kembali ke menu", action: "menu" }];
const FEATURE_OPTS: Opt[] = [...Object.entries(FEATURES).map(([k, [l]]) => ({ label: l, action: k })), { label: "Kembali ke menu", action: "menu" }];

export function RiswayChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: GREETING }]);
  const [opts, setOpts] = useState<Opt[]>(MENU);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ block: "end" }); }, [msgs, open]);

  const choose = (o: Opt) => {
    if (o.action === "demo") {
      setOpen(false);
      document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (o.action === "wa") { window.open(WA_URL, "_blank", "noopener,noreferrer"); return; }
    const user: Msg = { from: "user", text: o.label };
    if (o.action === "menu") { setMsgs((m) => [...m, user, { from: "bot", text: "Silakan pilih topik yang ingin Anda ketahui." }]); setOpts(MENU); return; }
    if (o.action === "features" || o.action === "more") { setMsgs((m) => [...m, user, { from: "bot", text: "Pilih fitur yang ingin Anda ketahui:" }]); setOpts(FEATURE_OPTS); return; }
    if (FEATURES[o.action]) {
      const [name, text] = FEATURES[o.action];
      setMsgs((m) => [...m, user, { from: "bot", text: `${name}: ${text}` }]);
      setOpts([{ label: "Fitur lain", action: "more" }, ...AFTER]);
      return;
    }
    setMsgs((m) => [...m, user, { from: "bot", text: ANSWERS[o.action] }]);
    setOpts(AFTER);
  };

  return (
    <>
      {open && (
        <div className="rw-chat" role="dialog" aria-label="Asisten RISWAY">
          <div className="rw-chat-head"><strong>Asisten RISWAY</strong><button type="button" aria-label="Tutup chat" onClick={() => setOpen(false)}><X size={16} /></button></div>
          <div className="rw-chat-body">
            {msgs.map((m, i) => (
              <div key={i} className={`rw-chat-msg rw-chat-${m.from}`}>{m.from === "bot" && <span>Asisten RISWAY</span>}<p>{m.text}</p></div>
            ))}
            <div className="rw-chat-opts">
              {opts.map((o) => <button type="button" key={o.label} onClick={() => choose(o)}>{o.label}</button>)}
            </div>
            <div ref={endRef} />
          </div>
        </div>
      )}
      <button type="button" className="rw-floating-wa rw-chat-toggle" aria-label={open ? "Tutup chat RISWAY" : "Buka chat RISWAY"} onClick={() => setOpen((v) => !v)}>
        {open ? <X /> : <MessageCircle />}
      </button>
    </>
  );
}
