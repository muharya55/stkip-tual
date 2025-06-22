import FakultasCard from "app/components/fakultasCard";
import Sidebar from "app/components/sidebar";
import {  MenuItems2 } from "app/data/menu";
import { Key } from "react";
export const fakultasData = [
  {
    kode: "FKIP",
    nama: "Fakultas Keguruan dan Ilmu Pendidikan",
    program: "Program Sarjana",
    prodi: [
      "Pendidikan Bahasa dan Sastra Indonesia",
      "Pendidikan Bahasa Inggris",
      "Pendidikan Biologi",
      "Pendidikan Fisika",
      "Pendidikan Kimia",
      "Pendidikan Matematika",
      "Pendidikan Ekonomi",
      "Pendidikan Pancasila dan Kewarganegaraan",
      "Mata Kuliah Umum",
      "Teknologi Pendidikan",
      "Pendidikan Guru Sekolah Dasar (PGSD)",
      "Pendidikan Guru Pendidikan Anak Usia Dini (PGPAUD)",
      "Program Pendidikan Profesi Guru (PPG)",
      "Pendidikan Agama Islam (PAI)",
    ],
  },
  {
    kode: "FEB",
    nama: "Fakultas Ekonomi dan Bisnis",
    program: "Program Sarjana",
    prodi: ["Manajemen", "Ekonomi Pembangunan", "Ekonomi Syariah"],
  },
  
  {
    kode: "FST",
    nama: "Fakultas Sains dan Teknologi",
    program: "Program Sarjana",
    prodi: [
      "Statistika",
      "Matematika",
      "Biologi",
      "Teknologi Pangan",
      "Agribisnis",
      "Perencanaan Wilayah dan Kota",
      "Sistem Informasi",
      "Sains Data",
    ],
  },
  {
    kode: "FHISIP",
    nama: "Fakultas Hukum Ilmu Sosial dan Ilmu Politik",
    program: "Program Diploma",
    prodi: ["Kearsipan (D4)", "Perpajakan (D3)"],
  },
  {
    kode: "FHISIP",
    nama: "Fakultas Hukum Ilmu Sosial dan Ilmu Politik",
    program: "Program Sarjana",
    prodi: [
      "Administrasi Negara (S1)",
      "Administrasi Bisnis (S1)",
      "Hukum (S1)",
      "Ilmu Pemerintahan (S1)",
      "Ilmu Komunikasi (S1)",
      "Ilmu Perpustakaan (S1)",
      "Sosiologi (S1)",
      "Sastra Inggris (S1)",
      "Perpajakan (S1)",
    ],
  },
];
// app/data/sidebarMenu.ts

export type MenuItem = {
  label: string;
  href: string;
};

interface JadwalAkademik {
  no: number;
  kegiatan: string;
  tanggal: string;
}

export const uktList: JadwalAkademik[] = [
  {
    "no": 1,
    "kegiatan": "Registrasi Administrasi bagi mahasiswa lama (pembayaran UKT/SPP)",
    "tanggal": "28 Juli 2025 – 8 Agustus 2025"
  },
  {
    "no": 2,
    "kegiatan": "Registrasi Akademik (pengisian KRS) mahasiswa lama",
    "tanggal": "1 – 10 Agustus 2025"
  },
  {
    "no": 3,
    "kegiatan": "Batas akhir batal tambah dan pembatalan mata kuliah",
    "tanggal": "Kebijakan penentuan tanggal diserahkan Fakultas masing-masing"
  },
  {
    "no": 4,
    "kegiatan": "Pelaksanaan Pengenalan Kehidupan Kampus Mahasiswa Baru Tahun Akademik 2025/2026",
    "tanggal": "11-16 Agustus 2025"
  },
  {
    "no": 5,
    "kegiatan": "Perkuliahan + Ujian Tengah Semester (UTS) + Ujian Akhir Semester (UAS)",
    "tanggal": "18 Agustus – 20 Desember 2025"
  },
  {
    "no": 6,
    "kegiatan": "Rekonsiliasi Data Mahasiswa",
    "tanggal": "15 – 26 September 2025"
  },
  {
    "no": 7,
    "kegiatan": "Pelaporan PD-Dikti Semester Pelaporan 2024.2 dan 2025.1 (maba)",
    "tanggal": "Penentuan tanggal sesuai dengan ketentuan PD-Dikti"
  },
  {
    "no": 8,
    "kegiatan": "Batas akhir pengumuman nilai ujian dan pengisian KHS",
    "tanggal": "2 Januari 2026"
  },
  {
    "no": 9,
    "kegiatan": "Proses evaluasi keberhasilan studi mahasiswa",
    "tanggal": "5 Januari 2026"
  },
  {
    "no": 10,
    "kegiatan": "Batas akhir pelaksanaan Yudisium *)",
    "tanggal": "7 Januari 2026"
  },
  {
    "no": 11,
    "kegiatan": "Batas akhir proses Keputusan keberhasilan studi mahasiswa",
    "tanggal": "9 Januari 2026"
  },
  {
    "no": 12,
    "kegiatan": "Batas akhir Semester Ganjil",
    "tanggal": "10 Januari 2026"
  }
];

const PanduanAkademik = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-xl-3 col-lg-4 mb-4">
          <div className="sidebar sidebar-left">
            <div className="widget">
              <Sidebar data={MenuItems2} />
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="col-12 col-lg-9">
          <h3 className="text-primary fw-bold mb-2">Buku Panduan Akademik</h3>
          <div
            className="border-bottom border-primary"
            style={{
              borderWidth: "3px",
              position: "relative",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "3px",
                backgroundColor: "gold",
                position: "absolute",
                bottom: 0,
              }}
            ></div>
          </div>
          <div className="container my-5">
            <h5 className="fw-bold text-purple">2025</h5>
            <ol className="mt-3 text-dark-blue">
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS ILMU KOMPUTER : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS EKONOMI DAN SOSIAL : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS SAINS DAN TEKNOLOGI : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK PASCASARJANA : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK UNIVERSITAS : <a href="#">buka link</a>
              </li>
            </ol>
          </div>
          <div className="container my-5">
            <h5 className="fw-bold text-purple">2024</h5>
            <ol className="mt-3 text-dark-blue">
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS ILMU KOMPUTER : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS EKONOMI DAN SOSIAL : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS SAINS DAN TEKNOLOGI : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK PASCASARJANA : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK UNIVERSITAS : <a href="#">buka link</a>
              </li>
            </ol>
          </div>
          <div className="container my-5">
            <h5 className="fw-bold text-purple">2023</h5>
            <ol className="mt-3 text-dark-blue">
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS ILMU KOMPUTER : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS EKONOMI DAN SOSIAL : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS SAINS DAN TEKNOLOGI : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK PASCASARJANA : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK UNIVERSITAS : <a href="#">buka link</a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PanduanAkademik;
