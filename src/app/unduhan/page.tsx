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
 
const Unduhan = () => {
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
              Download
            </h1>
          </div>
          
        </div>
      </div>
    </section>

    <div className="container">
      <div className="row gy-30px">
      <div className="col-12 col-lg-12">
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

    </>
  );
};

export default Unduhan;
