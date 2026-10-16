import { MapPin, ClipboardCheck, Activity, ShieldCheck, FileText, ChartNoAxesCombined, Building2, Truck, HardHat, Store, Layers } from "lucide-react";

export const RISWAY = {
  name: "RISWAY",
  whatsapp: "6282132990498",
  title: "RISWAY – Smart Workforce Management | Talenta Mulia",
  description: "RISWAY adalah aplikasi Workforce Management untuk perusahaan outsourcing, security, cleaning service, dan field worker. Hubungi Talenta Mulia untuk demo gratis.",
};
export const features = [
  { id: "attendance", icon: MapPin, title: "Smart Attendance", short: "Smart Attendance", benefits: ["GPS", "Selfie", "Face Verification", "Shift", "Riwayat Absensi"] },
  { id: "requests", icon: ClipboardCheck, title: "Employee Request", short: "Employee Request", benefits: ["Cuti", "Izin", "Lembur", "Dinas Luar", "Ganti Shift"] },
  { id: "activity", icon: Activity, title: "Daily Activity", short: "Daily Activity", benefits: ["Catatan aktivitas harian lengkap dengan foto dan lokasi"] },
  { id: "patrol", icon: ShieldCheck, title: "Patrol & Inspection", short: "Patrol & Inspection", benefits: ["QR Patrol", "Checkpoint", "Foto", "Temuan", "Laporan"] },
  { id: "payslip", icon: FileText, title: "Digital Payslip", short: "Digital Payslip", benefits: ["Slip gaji digital", "Download PDF", "Riwayat Gaji"] },
  { id: "performance", icon: ChartNoAxesCombined, title: "Employee Performance", short: "Employee Performance", benefits: ["Monitoring KPI", "Kehadiran", "Produktivitas", "Ranking"] },
];
// Used only as options in the demo form.
export const industries = [
  { icon: ShieldCheck, name: "Security Services" },
  { icon: Building2, name: "Facility & Cleaning" },
  { icon: Layers, name: "Outsourcing" },
  { icon: Store, name: "Retail & Distribusi" },
  { icon: Truck, name: "Logistik" },
  { icon: HardHat, name: "Konstruksi & Properti" },
];
export const faqs = [
  ["Apakah RISWAY dapat digunakan untuk banyak perusahaan?", "Ya. RISWAY mendukung multi company."],
  ["Apakah mendukung GPS Attendance?", "Ya. Mendukung GPS, selfie, shift, dan validasi lokasi."],
  ["Apakah tersedia aplikasi Android?", "Ya. Aplikasi Android tersedia untuk seluruh karyawan."],
];
export const workflow = [
  { icon: MapPin, title: "Check In", text: "Karyawan melakukan absensi menggunakan GPS, selfie, dan validasi lokasi." },
  { icon: FileText, title: "Aktivitas", text: "Isi aktivitas harian lengkap dengan foto pekerjaan." },
  { icon: ClipboardCheck, title: "Approval", text: "Atasan menyetujui pengajuan cuti, izin, lembur, dan dinas luar." },
  { icon: ChartNoAxesCombined, title: "Monitoring", text: "Semua data tampil realtime pada dashboard HR." },
];
export const testimonials = [
  ["Dengan RISWAY kami dapat memonitor seluruh petugas security secara realtime.", "PT Maju Bersama"],
  ["Proses approval cuti jauh lebih cepat dibandingkan sistem manual.", "Cleaning Service Company"],
  ["Laporan patroli menjadi otomatis dan mudah dipantau.", "Security Management"],
];
export const clientLogos = ["air-murni.png", "Yakum.png", "djaloe.png", "ciputra.png", "idaman.png"].map(f => `https://risway.id/images/${f}`);
