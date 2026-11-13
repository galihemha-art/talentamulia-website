import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const STATIC_PAGE_URL = "/detox-gadget/index.html";

export const Route = createFileRoute("/detox-gadget")({
  head: () => ({
    meta: [
      {
        title:
          "Detox Gadget Keluarga 21 Hari — Program Orang Tua | Talenta Mulia",
      },
      {
        name: "description",
        content:
          "Program 21 hari untuk keluarga: kontrak gadget, jadwal layar sesuai usia, dan 60 ide aktivitas pengganti. Disusun Psikolog Bunda Lia. Rp49.000.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content:
          "Detox Gadget Keluarga 21 Hari — Dari Rebutan HP ke Waktu Bersama",
      },
      {
        property: "og:description",
        content:
          "Program 21 hari untuk keluarga: kontrak gadget, jadwal layar sesuai usia, dan 60 ide aktivitas pengganti. Disusun Psikolog Bunda Lia. Rp49.000.",
      },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DetoxGadgetRedirect,
});

function DetoxGadgetRedirect() {
  useEffect(() => {
    window.location.replace(STATIC_PAGE_URL);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>
        Membuka halaman Detox Gadget…{" "}
        <a href={STATIC_PAGE_URL}>Klik di sini jika halaman tidak terbuka otomatis</a>.
      </p>
    </main>
  );
}
