import Sidebar from "app/components/sidebar";
import {  MenuItems3 } from "app/data/menu";
import Image from "next/image";
 
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
