import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const STATIC_PAGE_URL = "/ayah-hadir/index.html";

export const Route = createFileRoute("/ayah-hadir")({
  head: () => ({
    meta: [
      {
        title:
          "Ayah Hadir 30 Hari — Program 10 Menit Sehari untuk Ayah | Talenta Mulia",
      },
      {
        name: "description",
        content:
          "Program 30 hari untuk ayah yang sibuk: satu tantangan 10 menit per hari agar hadir di hati anak. Disusun Psikolog Bunda Lia. Rp49.000.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content:
          "Ayah Hadir 30 Hari — Sibuk Kerja Bukan Alasan Absen dari Hati Anak",
      },
      {
        property: "og:description",
        content:
          "Program 30 hari untuk ayah yang sibuk: satu tantangan 10 menit per hari agar hadir di hati anak. Disusun Psikolog Bunda Lia. Rp49.000.",
      },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AyahHadirRedirect,
});

function AyahHadirRedirect() {
  useEffect(() => {
    window.location.replace(STATIC_PAGE_URL);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>
        Membuka halaman Ayah Hadir…{" "}
        <a href={STATIC_PAGE_URL}>Klik di sini jika halaman tidak terbuka otomatis</a>.
      </p>
    </main>
  );
}
