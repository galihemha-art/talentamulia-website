import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const STATIC_PAGE_URL = "/rekrut-tepat/index.html";

export const Route = createFileRoute("/rekrut-tepat")({
  head: () => ({
    meta: [
      { title: "Rekrut Tepat — Kit Seleksi Karyawan UMKM | Talenta Mulia" },
      {
        name: "description",
        content:
          "Kit Rekrut Tepat: scorecard wawancara 8 posisi UMKM, 120 pertanyaan perilaku, kalkulator biaya salah rekrut, checklist onboarding 30 hari. Disusun psikolog. Rp149.000.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Rekrut Tepat — Kit Seleksi Karyawan untuk UMKM" },
      {
        property: "og:description",
        content: "Berhenti rekrut pakai feeling. Kit seleksi karyawan dari psikolog, Rp149.000.",
      },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RekrutTepatRedirect,
});

function RekrutTepatRedirect() {
  useEffect(() => {
    window.location.replace(STATIC_PAGE_URL);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>
        Membuka halaman Rekrut Tepat…{" "}
        <a href={STATIC_PAGE_URL}>Klik di sini jika halaman tidak terbuka otomatis</a>.
      </p>
    </main>
  );
}
