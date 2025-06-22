import FakultasCard from "app/components/fakultasCard";
import Sidebar from "app/components/sidebar";
import {  MenuItems3 } from "app/data/menu";
import Image from "next/image";
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
 
const BiroKeuangan = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-xl-3 col-lg-4 mb-4">
          <div className="sidebar sidebar-left">
            <div className="widget">
              <Sidebar data={MenuItems3} />
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="col-12 col-lg-9">
            <h3 className="text-primary fw-bold mb-2"> Keuangan</h3>
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
              >
            </div>
          </div>

          <div className="container">
            <div className="row">
            Biro Akademik dan Kemahasiswaan (BAK) merupakan unsur pelaksana administrasi yang melaksanakan pelayanan teknis dan administrasi kepada seluruh unsur di lingkungan Sekolah Tinggi Evav Persada Tual. Berkenaan dengan hal tersebut BAK mempunyai tugas melaksanakan pelayanan di bidang akademik dan pembinaan kemahasiswaan dan alumni dengan fungsi terhadap :
            </div>
            <ul className="mt-3">  
              <li>1. Pelaksanakan layanan pendidikan, penelitian dan pengabdian kepada masyarakat</li>
              <li>2. Pelaksanaan layanan pembinaan minat, bakat dan kesejahteraan mahasiswa</li>
              <li>3. Pelaksanaan penyusunan data dan statistik alumni serta urusan alumni lainnya</li>
              <li>4. Melaksanakan update data kelembagaan (izin perguruan tinggi).</li>
              <li>5. Melaksanakan pelaporan kegiatan akademik secara berkala ke Kemenristek Dikti/Kopertis/Kopertais.</li>
            </ul>
          </div>
          <h3 className="text-center mt-5">Struktur Organisasi</h3>
          <Image  width={2000}
            height={1000} alt="Struktur" className="mt-2 mb-5" src="/images/gallery/struktur-biro-akademik.jpg"  />
        </div>
      </div>
    </div>
  );
};

export default BiroKeuangan;
