import FakultasCard from "app/components/fakultasCard";
import Sidebar from "app/components/sidebar";
import {  MenuItems3 } from "app/data/menu";
import Image from "next/image";
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
 
const Kemahasiswaan = () => {
  return (
    <>
    
    <section
      className="faqs-part-two pt-120px pb-130px"
      style={{ backgroundImage: "url(../images/gallery/ilustrasi-section-1.jpg)" }}
    >
      <div className="container">
        <div className="row flex-wrap align-items-center">
          <div className="col-md-12 mb-30px mb-md-0">
            <h1 className=" text-center fw-semibold text-white">
              Kemahasiswaan
            </h1>
          </div>
          
        </div>
      </div>
    </section>

    <div className="container">
      <div className="row gy-30px">
        <div className="col-12 col-lg-12">
          <div className="major-page_view">
             
            <h4 className="fw-semibold mt-30px mb-30px">Biro Kemahasiswaan</h4>
            <p className="mb-10px">
              Biro   Kemahasiswaan   mempunyai tugas melaksanakan pelayanan di bidang akademik, kemahasiswaan dan alumni, serta urusan perencanaan dan kerja sama di lingkungan Undiksha. Dalam melaksanakan tugasnya, Biro Akademik, Kemahasiswaan, Perencanaan, dan Kerja Sama menyelenggarakan fungsi sebagai berikut:
            </p>
             
             
           
             <ul className="  ">
              
                <li style={{ textAlign: "justify" }}>
                 1. Pelaksanaan layanan pendidikan, penelitian, dan pengabdian kepada
                  masyarakat.
                </li>
                <li style={{ textAlign: "justify" }}>
                 2. Pelaksanaan evaluasi pendidikan, penelitian, dan pengabdian kepada
                  masyarakat.
                </li>
                <li style={{ textAlign: "justify" }}>
                 3. Pelaksanaan registrasi mahasiswa dan statistik akademik.
                </li>
                <li style={{ textAlign: "justify" }}>
                 4.  Pelaksanaan layanan pembinaan minat, bakat, dan kesejahteraan mahasiswa.
                </li>
                <li style={{ textAlign: "justify" }}>
                 5. Pelaksanaan pengelolaan data dan fasilitasi kegiatan alumni.
                </li>
                <li style={{ textAlign: "justify" }}> 6. Pelaksanaan urusan perencanaan.</li>
                <li style={{ textAlign: "justify" }}>
                 7. Pelaksanaan koordinasi dan administrasi kerja sama.
                </li>
                <li style={{ textAlign: "justify" }}>
                 8. Pelaksanaan urusan hubungan masyarakat.
                </li>
          

            </ul>
              
          </div>
        </div>
        
      </div>
    </div>

    </>
  );
};

export default Kemahasiswaan;
