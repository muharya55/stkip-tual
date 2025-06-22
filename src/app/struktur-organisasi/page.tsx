import Sidebar from 'app/components/sidebar'
import { MenuItems1 } from 'app/data/menu'
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
                  
                  <Sidebar data={MenuItems1} />
                  </div>
                </div>
         </div>
   
   
         <div className="col-12  col-lg-9 mb-30px mb-lg-0">
            
           <h3 className="text-primary fw-bold mb-2">Struktur Organisi STKIP TUAL</h3>
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
