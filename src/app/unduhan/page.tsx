  
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
