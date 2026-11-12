import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const STATIC_PAGE_URL = "/siap-sd/index.html";

export const Route = createFileRoute("/siap-sd")({
  head: () => ({
    meta: [
      { title: "Siap SD — Kit Kesiapan Masuk SD | Biro Psikologi Talenta Mulia" },
      {
        name: "description",
        content:
          "Kit Siap SD: panduan psikolog untuk mengamati dan menstimulasi kesiapan anak masuk SD. Cek kesiapan gratis, kit Rp79.000, dan asesmen kesiapan sekolah bersama psikolog.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Siap SD — Kit Kesiapan Masuk SD dari Psikolog Bunda Lia" },
      {
        property: "og:description",
        content:
          "Cek kesiapan anak masuk SD dalam 2 menit, lalu lanjutkan dengan kit panduan atau asesmen bersama psikolog.",
      },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SiapSdRedirect,
});

function SiapSdRedirect() {
  useEffect(() => {
    window.location.replace(STATIC_PAGE_URL);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>
        Membuka halaman Siap SD…{" "}
        <a href={STATIC_PAGE_URL}>Klik di sini jika halaman tidak terbuka otomatis</a>.
      </p>
    </main>
  );
}
