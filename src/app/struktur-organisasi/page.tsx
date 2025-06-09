import Sidebar from 'app/components/sidebar'
import Image from 'next/image'
 
const StrukturOrganisasi = () => {
  return (
    <>
      <section className="events-details mt-40px mb-80px">
           <div className="container">
             <div className="row">
               <div className="col-xl-3 col-lg-4">
                <div className="sidebar sidebar-left">
                  <div className="widget">
                  
                      <Sidebar/>
                  </div>
                </div>
         </div>
   
   
         <div className="col-12  col-lg-9 mb-30px mb-lg-0">
             <h1 className="fs-30 fw-semibold mb-40px">
                          Struktur Organisi STKIP TUAL
                        </h1>
                        <div className="events-details__wrapper d-flex flex-wrap">
                 
                           <Image  width={2000}
                              height={1000} alt="Struktur" className="mt-2 mb-5" src="/images/university/struktur-organisasi1.jpeg"  />
                        </div>
         </div>
          
       </div>
     </div>
   </section>
    </>

  )
}

export default StrukturOrganisasi
