import Image from "next/image"

 
const StrukturOrganisasi = () => {
  return (
    <>
      <h1 className="fs-30 fw-semibold mb-40px">
          Struktur Organisi STKIP TUAL
        </h1>
        <div className="events-details__wrapper d-flex flex-wrap">
                      {/* src="../images/logo/bg-univ.jpeg" */}

           <Image alt="Struktur" className="mt-2 mb-5" src="../images/struktur-organisasi.jpg"  />
        </div>
    </>
  )
}

export default StrukturOrganisasi
