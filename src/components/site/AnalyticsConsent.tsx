import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ANALYTICS_CHOICE_KEY, contactClickEvent, readAnalyticsChoice, saveAnalyticsChoice, syncAnalyticsChoice, trackContactClick } from "@/lib/google-analytics";

export function AnalyticsConsent() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(readAnalyticsChoice() === null);
    syncAnalyticsChoice();
    const onStorage = (e: StorageEvent) => {
      if (e.key !== ANALYTICS_CHOICE_KEY && e.key !== null) return;
      syncAnalyticsChoice();
      setOpen(readAnalyticsChoice() === null);
    };
    const onClick = (e: MouseEvent) => {
      const anchor = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!anchor) return;
      const event = contactClickEvent(anchor.getAttribute("href") || "", anchor.textContent?.includes("Buka di Maps"));
      if (event) trackContactClick(event);
    };
    window.addEventListener("storage", onStorage);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("storage", onStorage);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  function choose(accepted: boolean) { saveAnalyticsChoice(accepted); setOpen(false); }
  return <>
    <Button variant="outline" size="icon" className="fixed bottom-5 left-5 z-50" aria-label="Pengaturan privasi Analytics" title="Pengaturan privasi Analytics" onClick={() => setOpen(true)}><ShieldCheck className="h-5 w-5" /></Button>
    {open && <aside role="dialog" aria-modal="false" aria-labelledby="analytics-consent-title" className="fixed bottom-20 left-4 right-4 z-50 max-w-lg rounded-lg border border-border bg-card p-5 text-card-foreground shadow-lg sm:right-auto">
      <h2 id="analytics-consent-title" className="text-lg font-semibold">Privasi Analytics</h2>
      <p className="mt-2 text-sm leading-relaxed">Dengan persetujuan Anda, Google Analytics mengukur kunjungan dan klik WhatsApp, telepon, serta peta menggunakan cookie. Nama, email, nomor WhatsApp, organisasi, dan isi pesan formulir tidak dikirim dalam event ini. Tidak digunakan untuk personalisasi iklan. Anda dapat mengubah pilihan kapan saja.</p>
      <Link to="/kebijakan-privasi" className="mt-2 inline-block text-sm text-primary underline">Kebijakan Privasi</Link>
      <div className="mt-4 flex flex-wrap gap-3"><Button variant="outline" onClick={() => choose(false)}>Tolak Analytics</Button><Button variant="outline" onClick={() => choose(true)}>Izinkan Analytics</Button></div>
    </aside>}
  </>;
}