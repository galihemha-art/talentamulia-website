# Roadmap — Legalitas PT Talenta Mulia Indonesia (preview only, jangan publish)

- [x] A. Identitas, alamat, footer, legalitas, timeline
- [x] B. Hapus klaim "satu-satunya"
- [x] C. Layanan kesehatan
- [x] D. Layanan menunggu izin & wording konseling
- [x] E. Tim
- [x] F. Formulir, Kebijakan Privasi, Syarat & Ketentuan
- [ ] Menunggu dari pemilik: placeholder [ISI] & item [KONFIRMASI] (lihat ringkasan chat)

## RISWAY
- [x] Landing /risway mandiri, fitur, pratinjau interaktif, paket, FAQ, formulir WhatsApp, SEO, dan verifikasi; tanpa publish.

- [x] Formulir demo "Jadwalkan Demo Gratis via Meeting Online" (validasi + WhatsApp, tanpa backend).
- [ ] Chatbot AI di /risway: tombol chat melayang menggantikan WhatsApp float, Lovable AI, pesan pembuka + 4 tombol cepat, system prompt RISWAY.

## Gambar WebP
- [x] Ganti logo dan foto dengan varian WebP responsif, hapus gambar lama yang tidak dipakai, dan verifikasi tanpa perubahan tampilan.

## GA4 — pelacakan saja, tanpa publish
- [x] Pasang gtag langsung untuk G-V78VEQ6RQV, tanpa GTM atau page_view manual; banner persetujuan dan tanpa data pribadi dalam event khusus.
- [x] Uji klik WhatsApp, telepon, Buka di Maps dan formulir; jangan emit generate_lead untuk handoff WhatsApp. Enam tes lulus; antrean gtag, consent/withdrawal, Kontak/RISWAY dan tampilan HP diverifikasi; penerimaan di Google belum diuji.
- [ ] Pengaturan key events dan tautan Search Console: menunggu akses administrasi GA4 (koneksi yang tersedia hanya Measurement ID).
- Peta profil bisnis, Google Sheet dan UTM eksternal: di luar scope terakhir (tracking saja), tidak diubah.

## SEO artikel — lima poin, tanpa publish
- [x] Pagination Semua Artikel, 24 per halaman, validasi halaman dan pengecualian slug lama.
- [x] Sitemap lengkap dengan pagination WordPress dan modified per artikel.
- [x] 404 slug tidak dikenal dan noindex layanan segera hadir.
- [x] Konsolidasi psikolog online: konten sumber, metadata, 301 dan tautan internal.
- [x] Metadata online/offline dan tautan ke halaman psikolog online; 10 tes lulus, pagination/FAQ/tautan diuji, sitemap 402 artikel dari 403 post (1 redirect), 31 layanan/industri/program HTTP 200; tanpa publish.

## MASTER TASK SEO/GEO 54 halaman (preview only, JANGAN publish)
- [x] Audit 54 halaman: semua 200, 1 H1, title/desc/canonical unik
- [x] Konfigurasi terpusat metadata (page-seo.ts) + og:image terpusat (page-og.ts + public/og/)
- [x] 54 gambar hero/og unik dari aset existing (tanpa generate AI)
- [x] H1 unik & SEO title/description unik per halaman (terverifikasi 54/54)
- [x] Internal linking & CTA (sudah ada dari pekerjaan sebelumnya, tidak diubah)
- [x] Structured data (sudah ada, tidak diubah; tanpa rating/review palsu)
- [x] Validasi: typecheck bersih, 54 URL 200, og:image 54/54 unik & valid, laporan di Files
- CATATAN: gelar "Distinguished Fellow" Dr. Andiani TETAP disembunyikan sesuai instruksi pemilik sebelumnya (menimpa poin I brief)

## Redirect 301 artikel gabung (preview only, JANGAN publish)
- [x] Daftar terpusat ARTICLE_MERGE_REDIRECTS di src/lib/seo-route-rules.ts (slug lama -> alamat tujuan), aturan legacyConsultationTarget tidak diubah.
- [x] beforeLoad artikel.$slug.tsx melempar 301 setelah pengecekan legacy; redirect berantai ditolak (tujuan tidak boleh ikut dialihkan).
- [x] 9 slug gabung: 3 ke artikel rumah tangga Sidoarjo (G02), 6 ke artikel konseling pernikahan online (G01); kedua tujuan artikel existing.
- [x] Validasi: 14 tes lulus, typecheck bersih, 9 slug lama 301 ke tujuan benar, 2 tujuan 200, artikel lain 200, legacy 301 tetap jalan; tanpa publish.

## Landing page statis Rekrut Tepat (preview only, JANGAN publish tanpa persetujuan pemilik)
- [x] public/rekrut-tepat/index.html — salinan byte-identik dari file pemilik (md5 sama), tidak diubah sama sekali.
- [x] public/rekrut-tepat/logo.jpg + public/rekrut-tepat/bu-lia.jpg — nama file persis seperti dipanggil HTML.
- [x] Route /rekrut-tepat mengarah ke halaman statis dengan window.location.replace("/rekrut-tepat/index.html").
- [x] Validasi: halaman final 200, logo & foto Bu Lia termuat, 0 resource 404, tanpa console error baru (peringatan ikon sama dengan /siap-sd); tidak menyentuh halaman lain.
