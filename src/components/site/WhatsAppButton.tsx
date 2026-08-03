import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20konsultasi.";

export function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
