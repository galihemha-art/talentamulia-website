# Talenta Mulia Profile

Buat website company profile bahasa Indonesia untuk "Talenta Mulia", pusat konsultasi psikologi & human capital terintegrasi di Sidoarjo, Jawa Timur.

DESIGN SYSTEM:
- Warna utama: navy #123A63 (teks/heading utama, tombol primer)
- Warna aksen: gradient biru cerah ke pink/magenta (dipakai untuk logo teks "Talenta Mulia" dan aksen highlight)
- Font: modern, profesional, clean sans-serif untuk teks; boleh sedikit playful/script hanya untuk wordmark logo
- Style: korporat-profesional tapi hangat, bukan kaku — target audiens HR corporate DAN individu/keluarga
- Layout: rounded corners moderat, banyak whitespace, card-based sections

LAYOUT GLOBAL (dipakai di semua halaman):
Header (sticky):
- Logo "TM Talenta Mulia" + tagline kecil "Psikologi · Kesehatan · Kepemimpinan"
- Menu: Beranda | Tentang (dropdown: Profesional) | Layanan (dropdown: Industri, Solusi Korporat, Layanan Individu, Kesehatan, Pelatihan) | Program | Artikel | FAQ | Kontak
- Language switcher "ID / EN" di kanan (untuk sekarang buat dummy toggle, isi konten cukup versi ID dulu)
- Nomor telepon +62 821 3299 0498 (klik = tel: link)

Footer:
- Kolom 1: Logo + deskripsi singkat "Psikologi Terintegrasi, Kesehatan & Konsultasi Kepemimpinan untuk organisasi, institusi, dan individu di seluruh Indonesia."
- Kolom 2 "Solusi": link ke Solusi Korporat, Layanan Individu, Konsultasi Kesehatan, Executive Coaching, Pelatihan & Seminar
- Kolom 3 "Perusahaan": Tentang Kami, Tim Profesional Kami, Artikel, Testimoni, FAQ
- Kolom 4 "Kontak": alamat "Jl. Raya Gadung No.5, Margomulyo, Wage, Kec. Taman, Sidoarjo, Jawa Timur", telepon +62 821 3299 0498, email info@talentamulia.co.id, jam operasional "Senin–Jumat · 09.00–16.00 WIB"
- Copyright "© 2026 Talenta Mulia. Seluruh hak cipta dilindungi."
- Floating WhatsApp button (pojok kanan bawah, semua halaman) link ke https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20konsultasi.

HALAMAN BERANDA (route "/"):
1. Hero section: label kecil "Pusat Konsultasi Terintegrasi", headline besar "Membina Manusia. Menguatkan Organisasi.", subheadline "Psikologi Terintegrasi, Kesehatan, Pengembangan Kepemimpinan, Executive Coaching, Kesehatan Medis, Assessment Center, dan Konsultasi Human Capital — untuk individu, organisasi, dan institusi kesehatan." Dua tombol: "Buat Janji Konsultasi" (primary, ke /kontak) dan "Ajukan Proposal Korporat" (outline, ke /solusi-korporat). 3 trust badge kecil: "Rahasia & Beretika", "Berbasis Bukti Ilmiah", "Online & Offline". Gambar hero di kanan (placeholder foto suasana konsultasi profesional).
2. Marquee/logo strip berjalan: "Melayani: Korporat, Manufaktur, Rumah Sakit, BUMN, Pemerintah, Sekolah, Universitas, Bank, Asuransi, Kesehatan Eksekutif, Keluarga"
3. Section "Dipercaya institusi di berbagai sektor": 6 tag/badge — Rumah Sakit, BUMN, Manufaktur, Perbankan, Pemerintah, Universitas
4. Section statistik — PENTING: gunakan angka HARDCODED tetap (bukan counter dari state kosong), tampilkan: "8+ Ahli Multidisiplin", "25+ Tahun Pengalaman Gabungan", "50+ Organisasi Dilayani", "2rb+ Individu Terberdayakan". Judul section: "Tim multidisiplin yang bisa Anda percaya." Subjudul: "Psikolog, executive coach, dokter, dan pemimpin kesehatan — dalam satu praktik konsultasi terintegrasi."
5. Section "Alasan organisasi memilih Talenta Mulia" — 4 card: Praktik Beretika & Rahasia / Berbasis Bukti Ilmiah / Tim Multidisiplin / Dampak Terukur (pakai copy singkat masing-masing 1 kalimat, boleh improvisasi profesional)
6. Section "Layanan Kami" — 6 card link ke /solusi-korporat: Assessment Psikologi, Executive Coaching, Pengembangan Kepemimpinan, Kesejahteraan Karyawan, Konsultasi Kesehatan, Pelatihan & Seminar
7. Section "Kami Melayani" — 2 kolom besar: "Organisasi" (list 5 poin, tombol ke /solusi-korporat) dan "Individu & Keluarga" (list 5 poin, tombol ke /layanan-individu)
8. Section "Cara Kerja Kami" — 4 step: 01 Konsultasi Awal, 02 Desain Program, 03 Pelaksanaan, 04 Evaluasi & Tindak Lanjut
9. Section testimoni — 3 quote card (buat testimoni generik profesional dari "HR Director", "Direktur Rumah Sakit", "Head of Talent")
10. Section FAQ preview — 5 pertanyaan singkat + link "Lihat semua FAQ" ke /faq
11. CTA akhir: "Siap menguatkan tim & organisasi Anda?" + 2 tombol ke /kontak

Gunakan React Router untuk routing. Buat halaman lain (/tentang-kami, /professionals, /solusi-korporat, /layanan-individu, /industri, /kesehatan, /pelatihan, /program, /artikel, /faq, /testimoni, /kontak) sebagai halaman placeholder kosong dulu (judul + "Coming soon") — JANGAN isi kontennya sekarang, itu akan saya minta di prompt berikutnya. Fokuskan seluruh detail hanya di homepage dan layout global di atas.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://talenta-mulia-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3d9ec9b3-bcb6-448f-8e0f-d4e8bf37a9f6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
