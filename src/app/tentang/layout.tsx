import Sidebar from "app/components/sidebar";

// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
        {children}
      </div>
       
    </div>
  </div>
</section>

    </>
  );
}
