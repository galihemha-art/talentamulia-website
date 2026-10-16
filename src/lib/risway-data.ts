import { MapPin, ClipboardCheck, Activity, ShieldCheck, FileText, ChartNoAxesCombined, Building2, Truck, HardHat, Store, Layers, Users } from "lucide-react";

export const RISWAY = {
  name: "RISWAY PRO",
  whatsapp: "6282132990498",
  title: "Workforce Management Software untuk Bisnis | RISWAY PRO",
  description: "Kelola absensi, aktivitas lapangan, pengajuan karyawan, patroli, dan laporan operasional melalui satu platform workforce management.",
};
export const features = [
  { id: "attendance", icon: MapPin, category: "SMART ATTENDANCE", title: "Absensi Digital dengan Validasi Lokasi", short: "Absensi digital", description: "Catat kehadiran dari lokasi kerja, dengan dokumentasi yang mengikuti kebijakan perusahaan.", benefits: ["Check-in dan check-out digital", "Validasi lokasi kerja", "Dokumentasi foto sesuai pengaturan", "Riwayat dan jadwal kehadiran"] },
  { id: "requests", icon: ClipboardCheck, category: "EMPLOYEE REQUEST", title: "Pengajuan Karyawan Lebih Praktis", short: "Pengajuan karyawan", description: "Cuti, izin, dan kebutuhan administrasi dalam satu alur persetujuan yang mudah ditelusuri.", benefits: ["Pengajuan cuti dan izin", "Alur persetujuan berjenjang", "Pemantauan status pengajuan", "Notifikasi dan riwayat keputusan"] },
  { id: "activity", icon: Activity, category: "DAILY ACTIVITY", title: "Pantau Aktivitas Kerja Lapangan", short: "Aktivitas harian", description: "Pahami progres tim melalui pembaruan pekerjaan yang terdokumentasi dan mudah ditinjau.", benefits: ["Laporan aktivitas harian", "Lampiran foto pekerjaan", "Deskripsi tugas dan progres", "Review oleh supervisor"] },
  { id: "patrol", icon: ShieldCheck, category: "PATROL & INSPECTION", title: "Monitoring Patroli dan Inspeksi", short: "Patroli dan inspeksi", description: "Hubungkan jadwal, titik pemeriksaan, dan laporan insiden dalam alur operasional yang rapi.", benefits: ["Jadwal dan titik patroli", "Checklist pemeriksaan", "Dokumentasi insiden", "Riwayat kegiatan patroli"] },
  { id: "payslip", icon: FileText, category: "DIGITAL PAYSLIP", title: "Informasi Penggajian Lebih Terorganisir", short: "Slip gaji digital", description: "Sediakan informasi slip gaji untuk setiap karyawan sesuai hak akses perusahaan.", benefits: ["Akses slip gaji per karyawan", "Riwayat dokumen penggajian", "Penyajian dokumen digital", "Pengaturan hak akses"] },
  { id: "performance", icon: ChartNoAxesCombined, category: "EMPLOYEE PERFORMANCE", title: "Evaluasi Kinerja Berbasis Data", short: "Evaluasi kinerja", description: "Tinjau indikator aktivitas dan ringkasan kerja sebagai bahan diskusi kinerja tim.", benefits: ["Ringkasan indikator aktivitas", "Laporan tingkat tim", "Tinjauan progres pekerjaan", "Riwayat evaluasi"] },
];
export const industries = [
  { icon: ShieldCheck, name: "Security Services", text: "Pantau shift petugas, titik patroli, dan laporan kejadian di berbagai area pengamanan." },
  { icon: Building2, name: "Facility & Cleaning", text: "Koordinasikan petugas, checklist kebersihan, dan dokumentasi pekerjaan di setiap gedung." },
  { icon: Store, name: "Retail & Distribusi", text: "Selaraskan jadwal tim toko dan laporan kunjungan operasional antarcabang." },
  { icon: Truck, name: "Logistik", text: "Tinjau kehadiran dan aktivitas tim yang bekerja di gudang maupun lapangan." },
  { icon: HardHat, name: "Konstruksi & Properti", text: "Dokumentasikan pekerjaan tim proyek dan inspeksi di lokasi yang berbeda." },
  { icon: Layers, name: "Bisnis Multicabang", text: "Satukan informasi karyawan dan pengajuan dari banyak lokasi operasional." },
];
export const faqs = [
  ["Apa itu RISWAY PRO?", "RISWAY PRO adalah konsep platform pengelolaan operasional karyawan yang menghubungkan absensi, aktivitas kerja, pengajuan, dan pelaporan. Diskusikan kebutuhan Anda untuk mengonfirmasi cakupan produk dan implementasinya."],
  ["Apakah mendukung karyawan lapangan?", "Alur yang ditampilkan mencakup tim lapangan, supervisor, dan manajemen. Ketersediaan fitur serta integrasi aktual perlu dikonfirmasi dalam konsultasi demo."],
  ["Apakah absensi bisa menggunakan GPS?", "Validasi lokasi termasuk dalam rancangan alur absensi. Penerapannya perlu disesuaikan dengan izin lokasi, kebijakan privasi, dan pengaturan perusahaan."],
  ["Bagaimana untuk perusahaan dengan banyak cabang?", "Kebutuhan lokasi, struktur organisasi, dan jumlah pengguna akan dipetakan bersama tim. Kapasitas dan cakupan implementasi dikonfirmasi sebelum penawaran."],
  ["Apakah tersedia aplikasi mobile?", "Halaman ini menampilkan pratinjau alur aplikasi mobile. Ketersediaan aplikasi dan tautan unduhan resmi akan dikonfirmasi oleh tim; pratinjau bukan aplikasi produksi."],
  ["Bagaimana cara mendapatkan demo?", "Isi formulir di halaman ini. Rangkuman kebutuhan Anda akan disiapkan untuk dikirim melalui WhatsApp Talenta Mulia, lalu tim dapat menindaklanjuti permintaan jadwal demo."],
  ["Bagaimana perlindungan data karyawan?", "Kontrol akses, penyimpanan, autentikasi, dan kebijakan pengelolaan data perlu disepakati pada implementasi produksi. Jangan masukkan data pribadi karyawan dalam formulir permintaan demo."],
  ["Berapa harga layanan?", "Penawaran disesuaikan dengan fitur, pengguna, lokasi, dan kebutuhan integrasi. Paket di halaman ini merupakan panduan diskusi, bukan daftar harga atau jaminan ketersediaan fitur."],
];
export const workflow = [
  { icon: MapPin, title: "Catat Kehadiran", text: "Karyawan melakukan absensi melalui alur mobile yang disesuaikan." },
  { icon: FileText, title: "Dokumentasikan Aktivitas", text: "Tim melaporkan pekerjaan beserta dokumentasi pendukung." },
  { icon: ClipboardCheck, title: "Review & Persetujuan", text: "Supervisor meninjau laporan dan memproses pengajuan." },
  { icon: ChartNoAxesCombined, title: "Pantau Dashboard", text: "Manajemen melihat ringkasan dan laporan operasional." },
];
export const benefits = [
  { icon: ClipboardCheck, title: "Administrasi lebih terstruktur", text: "Alur kerja yang jelas membantu HR meninjau pengajuan tanpa berpindah-pindah catatan." },
  { icon: Users, title: "Operasional lebih terlihat", text: "Supervisor memiliki gambaran kegiatan tim dari informasi yang terpusat." },
  { icon: FileText, title: "Dokumentasi lebih konsisten", text: "Catatan aktivitas tersimpan dalam format yang lebih mudah ditinjau kembali." },
  { icon: ChartNoAxesCombined, title: "Keputusan didukung data", text: "Ringkasan operasional menjadi bahan evaluasi dan koordinasi manajemen." },
];