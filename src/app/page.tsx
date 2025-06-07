 
export default function Home() {
  return (
    < >
  <section className="uni-banner position-relative">
    <div
      className="swiper edm-swiper"
      data-slides-per-view={1}
      data-button-next="edm-swiper-button-next-sluni"
      data-button-prev="edm-swiper-button-prev-sluni"
      data-loop="true"
    >
      <div className="swiper-wrapper">
        <div
          className="swiper-slide uni-banner__slide vh-100 d-flex align-items-center position-relative"
          style={{
            backgroundImage: 'url("../images/university/banner-slide-01.jpg")'
          }}
        >
          <div className="container">
            <div className="uni-banner__content text-white position-relative">
              <p
                className="text-uppercase fw-medium fs-20 mb-20px wow flipInX"
                data-wow-duration="1.5s"
              >
                Selamat Datang di 
              </p>
              <h1
                className="fs-70 fw-bolder text-uppercase text-white wow flipInX"
                data-wow-duration="1.5s"
              >
              WEBSITE STKIP TUAL
              </h1>
              <h3 className="fs-30 fw-bolder text-uppercase text-white mb-40px wow flipInX">Gerbang Menuju Pengabdian</h3>
              <a href="#" className="uni-button transition-all">
                
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide uni-banner__slide vh-100 d-flex align-items-center position-relative"
          style={{
            backgroundImage: 'url("../images/university/banner-slide-02.jpg")'
          }}
        >
          <div className="container">
            <div className="uni-banner__content text-white position-relative">
              <p
                className="text-uppercase fw-medium fs-20 mb-20px wow flipInX"
                data-wow-duration="1.5s"
              >
                The best theme for
              </p>
              <h1
                className="fs-70 fw-bolder text-uppercase text-white mb-30px wow flipInX"
                data-wow-duration="1.5s"
              >
                Learnpress
              </h1>
              <a href="#" className="uni-button transition-all">
                Buy Universitas SanjayaNow
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-button-next swiper-nextBtn-style-02 edm-swiper-button-next-sluni transition-all" />
    <div className="swiper-button-prev swiper-preBtn-style-02 edm-swiper-button-prev-sluni transition-all" />
    <div className="theme-scroll uni-banner__scroll">
      <a href="#section-welcome" className="cursor-pointer">
        <i
          className="iconify fs-18 text-white animation-blink"
          data-icon="grommet-icons:down"
        />
      </a>
    </div>
  </section>
  <section className="uni-welcome pt-80px pb-80px" id="section-welcome">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="uni-welcome-image">
            <img
              src="../images/university/welcome.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="uni-welcome-info text-center">
            <h4 className="fw-medium mb-20px">Sambutan Rektor</h4>
            <p>
              “Universitas Sari Mutiara Indonesia (USM-Indonesia) di dirikan
              dengan nilai-nilai dasar (Core Values) Spriritualisme,
              Intelektualisme, Profesionalisme, Nasionalisme dan Globalisme.
              Nilai-nilai inilah yang mendasari pelaksanaan Tridharma Perguruan
              Tinggi, khususnya dibidang pendidikan di USM-Indonesia. Penerapan
              nilai-nilai dasar ini dalam pendidikan diharapkan mampu mewujudkan
              cita-cita Bangsa Indonesia dalam menciptakan manusia seutuhnya,
              bukan hanya memiliki intelektulitas, akan tetapi kreatif,
              inovatif, mempunyai jiwa kewirausahaan, berbudaya, berkarakter,
              serta cinta terhadap bangsa dan negara.”
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="uni-mixed pb-80px">
    <div className="container">
      <div className="row gy-30px">
        <div className="col-12 col-lg-4">
          <div className="uni-mixed-welcome">
            <h4 className="fw-medium mb-20px">Welcome</h4>
            <img
              src="../images/university/mixed-welcome.jpg"
              alt=""
              className="img-fluid mb-20px"
            />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words.
            </p>
            <a href="#" className="d-block transition-all mt-20px">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="uni-mixed-events">
            <h4 className="fw-medium mb-20px">Events</h4>
            <div className="events-layout-1__items d-flex">
              <div className="events-layout-1__time">
                <p className="events-layout-1__time-date fw-bolder mb-5px">
                  01
                </p>
                <p className="events-layout-1__time-month fs-16">January</p>
              </div>
              <div className="events-layout-1__content pe-40px ps-40px">
                <h4 className="fs-20 fw-semibold line-clamp-2 mb-10px">
                  <a href="events-details.html" className="transition-all">
                    Applying Natural Laws to Technology and Society
                  </a>
                </h4>
                <div className="events-layout-1__content-info d-flex flex-wrap align-items-center gap-10px mb-10px">
                  <div className="d-flex align-items-center gap-5px fs-14">
                    <i className="iconify fs-18" data-icon="lets-icons:time" />
                    <span>8:00 am - 5:00 pm</span>
                  </div>
                  <div className="events-layout-1__location d-flex align-items-center fs-14 gap-5px">
                    <i
                      className="iconify fs-18"
                      data-icon="akar-icons:location"
                    />
                    <span className="d-block">New York, USA</span>
                  </div>
                </div>
                <p className="events-layout-1__content-brief">
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                  auctor a ornare odio. Sed non mauris itae erat conuat
                </p>
              </div>
              <div className="events-layout-1__image">
                <img
                  src="../images/events/events-01.png"
                  alt="Applying Natural Laws to Technology and Society"
                />
              </div>
            </div>
            <div className="events-layout-1__items d-flex">
              <div className="events-layout-1__time">
                <p className="events-layout-1__time-date fw-bolder mb-5px">
                  02
                </p>
                <p className="events-layout-1__time-month fs-16">February</p>
              </div>
              <div className="events-layout-1__content pe-40px ps-40px">
                <h4 className="fs-20 fw-semibold line-clamp-2 mb-10px">
                  <a href="events-details.html" className="transition-all">
                    Education Autumn Tour
                  </a>
                </h4>
                <div className="events-layout-1__content-info d-flex flex-wrap align-items-center gap-10px mb-10px">
                  <div className="d-flex align-items-center gap-5px fs-14">
                    <i className="iconify fs-18" data-icon="lets-icons:time" />
                    <span>8:00 am - 5:00 pm</span>
                  </div>
                  <div className="events-layout-1__location d-flex align-items-center fs-14 gap-5px">
                    <i
                      className="iconify fs-18"
                      data-icon="akar-icons:location"
                    />
                    <span className="d-block">New York, USA</span>
                  </div>
                </div>
                <p className="events-layout-1__content-brief">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
              </div>
              <div className="events-layout-1__image">
                <img
                  src="../images/events/events-02.png"
                  alt="Education Autumn Tour"
                />
              </div>
            </div>
            <div className="events-layout-1__items d-flex">
              <div className="events-layout-1__time">
                <p className="events-layout-1__time-date fw-bolder mb-5px">
                  03
                </p>
                <p className="events-layout-1__time-month fs-16">March</p>
              </div>
              <div className="events-layout-1__content pe-40px ps-40px">
                <h4 className="fs-20 fw-semibold line-clamp-2 mb-10px">
                  <a href="events-details.html" className="transition-all">
                    Managing Time for Study
                  </a>
                </h4>
                <div className="events-layout-1__content-info d-flex flex-wrap align-items-center gap-10px mb-10px">
                  <div className="d-flex align-items-center gap-5px fs-14">
                    <i className="iconify fs-18" data-icon="lets-icons:time" />
                    <span>8:00 am - 5:00 pm</span>
                  </div>
                  <div className="events-layout-1__location d-flex align-items-center fs-14 gap-5px">
                    <i
                      className="iconify fs-18"
                      data-icon="akar-icons:location"
                    />
                    <span className="d-block">New York, USA</span>
                  </div>
                </div>
                <p className="events-layout-1__content-brief">
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                  auctor a ornare odio. Sed non mauris itae erat conuat
                </p>
              </div>
              <div className="events-layout-1__image">
                <img
                  src="../images/events/events-08.png"
                  alt="Managing Time for Study"
                />
              </div>
            </div><i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
            <a href="#" className="d-block transition-all mt-20px">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="uni-mixed-form">
            <form>
              <p className="form-title fw-medium text-white text-center">
                Create your free account now and immediately get access to 100s
                of online courses.
              </p>
              <div className="pt-30px ps-20px pe-20px pb-50px">
                <input
                  type="text"
                  className="fs-14 mb-10px"
                  id="name"
                  placeholder="Your Name"
                  
                />
                <input
                  type="email"
                  className="fs-14 mb-10px"
                  id="email"
                  placeholder="Email"
                  
                />
                <input
                  type="tel"
                  className="fs-14 mb-10px"
                  id="phone"
                  placeholder="Phone"
                  
                />
                <button type="submit" className="uni-button transition-all">
                  Get It Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="uni-counter pt-80px pb-80px">
    <div className="container">
      <div className="row gy-30px">
        <div className="col-md-3">
          <div className="uni-counter-item text-center">
            <i
              className="iconify fs-80 mb-20px"
              data-icon="mdi:invoice-text-edit-outline"
            />
            <p className="counter fs-28 fw-bolder" data-count={94532}>
              0
            </p>
            <p className="fs-18">Learners</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="uni-counter-item text-center">
            <i className="iconify fs-80 mb-20px" data-icon="carbon:education" />
            <p className="counter fs-28 fw-bolder" data-count={60483}>
              0
            </p>
            <p className="fs-18">Graduates</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="uni-counter-item text-center">
            <i
              className="iconify fs-80 mb-20px"
              data-icon="gis:globe-earth-alt"
            />
            <p className="counter fs-28 fw-bolder" data-count={857}>
              0
            </p>
            <p className="fs-18">Countries Reached</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="uni-counter-item text-center">
            <i
              className="iconify fs-80 mb-20px"
              data-icon="carbon:catalog-publish"
            />
            <p className="counter fs-28 fw-bolder" data-count={1560}>
              1560
            </p>
            <p className="fs-18">Courses Published</p>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  
  <section className="uni-testimonials pt-80px pb-120px">
    <div className="container">
      <h4 className="fw-medium text-center mb-5px">Outstanding Alumni</h4>
      <p className="text-center mb-40px">
        Your experience does not stop when you graduate.
      </p>
      <div className="position-relative testimonials">
        <div
          className="swiper edm-swiper"
          data-slides-per-view={1}
          data-loop="true"
          data-pagination="edm-data-pagination-outuni"
          data-breakpoints='{"1200": {"slidesPerView": 3, "spaceBetween": 30}, "1024": {"slidesPerView": 3, "spaceBetween": 30}, "768": {"slidesPerView": 3, "spaceBetween": 30}, "576": {"slidesPerView": 2, "spaceBetween": 30}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonials-info text-center">
                <img
                  src="../images/testimonial/testimonial-01.png"
                  alt=""
                  className="mb-20px"
                />
                <h6 className="fw-semibold fs-16 mb-5px">Susan Jackson</h6>
                <p className="mb-5px">WordPress Developer</p>
                <p className="line-clamp-3">
                  "Pierre is a Fullbright Scholar working to drive change within
                  indigenous communities."
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonials-info text-center">
                <img
                  src="../images/testimonial/testimonial-02.png"
                  alt=""
                  className="mb-20px"
                />
                <h6 className="fw-semibold fs-16 mb-5px">Pierre Hackett</h6>
                <p className="mb-5px">Bachelor of Business / MBA</p>
                <p className="line-clamp-3">
                  "Leah is the founder, leader and manager of the most
                  successful private practice dietetic company across American."
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonials-info text-center">
                <img
                  src="../images/testimonial/testimonial-03.png"
                  alt=""
                  className="mb-20px"
                />
                <h6 className="fw-semibold fs-16 mb-5px">Victor Hansen</h6>
                <p className="mb-5px">Bachelor of Information Technology</p>
                <p className="line-clamp-3">
                  "Tyson is a serial entrepreneur taking his passion projects
                  and turning them into successful businesses."
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonials-info text-center">
                <img
                  src="../images/testimonial/testimonial-04.png"
                  alt=""
                  className="mb-20px"
                />
                <h6 className="fw-semibold fs-16 mb-5px">Leah Steven</h6>
                <p className="mb-5px">Master of Nutrition and Dietetics</p>
                <p className="line-clamp-3">
                  "Leah is the founder, leader and manager of the most
                  successful private practice dietetic company across American."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination edm-data-pagination-outuni transition-all" />
      </div>
    </div>
  </section>
  <section className="uni-rankings pt-80px pb-80px">
    <div className="container">
      <h4 className="fw-medium text-center mb-5px">
        Our World University Rankings
      </h4>
      <p className="text-center mb-40px">
        We've achieved an enviable reputation for research and teaching
        excellence.
      </p>
      <div className="row gy-30px">
        <div className="col-md-4">
          <div className="rankings-item p-20px d-flex gap-30px">
            <img
              src="../images/university/ranking-01.png"
              alt="rankings icon"
              className="img-fluid"
            />
            <div className="rankings-item-box">
              <h5 className="fw-bold mb-5px">3rd</h5>
              <p>Nature Index Young University Rankings</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rankings-item p-20px d-flex gap-30px">
            <img
              src="../images/university/ranking-02.png"
              alt="rankings icon"
              className="img-fluid"
            />
            <div className="rankings-item-box">
              <h5 className="fw-bold mb-5px">2nd</h5>
              <p>Times Higher Education Young University Ranking</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rankings-item p-20px d-flex gap-30px">
            <img
              src="../images/university/ranking-03.png"
              alt="rankings icon"
              className="img-fluid"
            />
            <div className="rankings-item-box">
              <h5 className="fw-bold mb-5px">3rd</h5>
              <p>Best Global Universities in Asia - US News and World Report</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rankings-item p-20px d-flex gap-30px">
            <img
              src="../images/university/ranking-04.png"
              alt="rankings icon"
              className="img-fluid"
            />
            <div className="rankings-item-box">
              <h5 className="fw-bold mb-5px">5th</h5>
              <p>Times Higher Education Asia University Ranking</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rankings-item p-20px d-flex gap-30px">
            <img
              src="../images/university/ranking-05.png"
              alt="rankings icon"
              className="img-fluid"
            />
            <div className="rankings-item-box">
              <h5 className="fw-bold mb-5px">19th</h5>
              <p>QS World University Rankings</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rankings-item p-20px d-flex gap-30px">
            <img
              src="../images/university/ranking-06.png"
              alt="rankings icon"
              className="img-fluid"
            />
            <div className="rankings-item-box">
              <h5 className="fw-bold mb-5px">3rd</h5>
              <p>QS Asia University Rankings</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rankings-item p-20px d-flex gap-30px">
            <img
              src="../images/university/ranking-07.png"
              alt="rankings icon"
              className="img-fluid"
            />
            <div className="rankings-item-box">
              <h5 className="fw-bold mb-5px">33rd</h5>
              <p>US News and World Report Best Global University Rankings</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rankings-item p-20px d-flex gap-30px">
            <img
              src="../images/university/ranking-08.png"
              alt="rankings icon"
              className="img-fluid"
            />
            <div className="rankings-item-box">
              <h5 className="fw-bold mb-5px">46th</h5>
              <p>Times Higher Education World University Rankings</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rankings-item p-20px d-flex gap-30px">
            <img
              src="../images/university/ranking-09.png"
              alt="rankings icon"
              className="img-fluid"
            />
            <div className="rankings-item-box">
              <h5 className="fw-bold mb-5px">10th</h5>
              <p>QS World’s Most Photogenic Universities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="uni-campus pt-80px pb-80px">
    <div className="container">
      <h4 className="fw-medium text-center mb-5px">Campus Life</h4>
      <p className="text-center mb-40px">
        Building a vibrant community of creative and accomplished people
      </p>
      <div className="row gy-30px">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
          <div className="campus-items">
            <a href="#">
              <img
                src="../images/latest-new/latest-new-01.png"
                alt="campus of the image"
              />
            </a>
            <div className="campus-items-box pt-20px">
              <h6 className="fw-bolder mb-5px">
                <a href="#" className="transition-all">
                  Student Life
                </a>
              </h6>
              <p className="mb-10px">
                A residential campus with diverse housing, exceptional dining,
                health care and over 600 student
              </p>
              <a
                href="#"
                className="fs-14 fw-medium transition-all text-uppercase"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
          <div className="campus-items">
            <a href="#">
              <img
                src="../images/latest-new/latest-new-02.png"
                alt="campus of the image"
              />
            </a>
            <div className="campus-items-box pt-20px">
              <h6 className="fw-bolder mb-5px">
                <a href="#" className="transition-all">
                  Arts &amp; Culture
                </a>
              </h6>
              <p className="mb-10px">
                A residential campus with diverse housing, exceptional dining,
                health care and over 600 student
              </p>
              <a
                href="#"
                className="fs-14 fw-medium transition-all text-uppercase"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
          <div className="campus-items">
            <a href="#">
              <img
                src="../images/latest-new/latest-new-03.png"
                alt="campus of the image"
              />
            </a>
            <div className="campus-items-box pt-20px">
              <h6 className="fw-bolder mb-5px">
                <a href="#" className="transition-all">
                  Recreation &amp; Wellness
                </a>
              </h6>
              <p className="mb-10px">
                A residential campus with diverse housing, exceptional dining,
                health care and over 600 student
              </p>
              <a
                href="#"
                className="fs-14 fw-medium transition-all text-uppercase"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="uni-latest-news latest-new-layout-1 pb-130px">
    <div className="container">
      <div className="latest-new-layout-1__zindex position-relative">
        <div className="latest-new-layout-1__top d-flex flex-wrap align-items-center justify-content-between mb-40px">
          <div className="mb-20px mb-sm-0">
            <h4 className="text-capitalize fw-bolder mb-5px">Latest News</h4>
            <p className="latest-new-layout-1__sub">
              Education news all over the world.
            </p>
          </div>
          <div className="position-relative d-flex align-items-center gap-10px">
            <div className="swiper-button-prev swiper-preBtn-style-02 edm-swiper-button-prev-lnuni transition-all fw-semibold" />
            <div className="swiper-button-next swiper-nextBtn-style-02 edm-swiper-button-next-lnuni transition-all fw-semibold" />
          </div>
        </div>
        <div
          className="position-relative swiper-style-2 wow fadeInUp"
          data-wow-duration="1.5s"
        >
          <div
            className="swiper edm-swiper"
            data-slides-per-view={1}
            data-space-between={30}
            data-button-next="edm-swiper-button-next-lnuni"
            data-button-prev="edm-swiper-button-prev-lnuni"
            data-loop="true"
            data-pagination="edm-data-pagination-lnuni"
            data-breakpoints='{"1024": {"slidesPerView": 3, "spaceBetween": 30}, "768": {"slidesPerView": 3, "spaceBetween": 30}, "576": {"slidesPerView": 2, "spaceBetween": 30}}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="latest-new-layout-1__items">
                  <div className="latest-new-layout-1__thumbnail">
                    <figure className="position-relative">
                      <a href="blog-details.html" title="LMS WordPress plugin">
                        <img
                          src="../images/latest-new/latest-new-large-01.png"
                          alt="LMS WordPress plugin"
                        />
                        <span className="sr-only d-none">
                          LMS WordPress plugin
                        </span>
                      </a>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__square position-absolute"
                        title="LMS WordPress plugin"
                        aria-label="LMS WordPress plugin"
                      >
                        <i
                          className="iconify fs-32 text-white"
                          data-icon="la:external-link-square-alt"
                        />
                      </a>
                    </figure>
                    <div className="latest-new-layout-1__content position-relative text-center">
                      <div className="latest-new-layout-1__time fs-14">
                        <span>Keny White</span>
                        <span>-</span>
                        <span>20/01/2024</span>
                      </div>
                      <h4 className="latest-new-layout-1__title line-clamp-2">
                        <a
                          href="blog-details.html"
                          className="fs-15 fw-semibold text-capitalize transition-all"
                          title="LMS WordPress plugin"
                        >
                          LMS WordPress plugin
                        </a>
                      </h4>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__read-more fs-14 text-capitalize transition-all"
                        title="View Details"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="latest-new-layout-1__items">
                  <div className="latest-new-layout-1__thumbnail">
                    <figure className="position-relative">
                      <a
                        href="blog-details.html"
                        title="Admin earns scholarship"
                      >
                        <img
                          src="../images/latest-new/latest-new-large-02.png"
                          alt="Admin earns scholarship"
                        />
                        <span className="sr-only d-none">
                          Admin earns scholarship
                        </span>
                      </a>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__square position-absolute"
                        title="Admin earns scholarship"
                        aria-label="Admin earns scholarship"
                      >
                        <i
                          className="iconify fs-32 text-white"
                          data-icon="la:external-link-square-alt"
                        />
                      </a>
                    </figure>
                    <div className="latest-new-layout-1__content position-relative text-center">
                      <div className="latest-new-layout-1__time fs-14">
                        <span>Keny White</span>
                        <span>-</span>
                        <span>21/02/2024</span>
                      </div>
                      <h4 className="latest-new-layout-1__title line-clamp-2">
                        <a
                          href="blog-details.html"
                          className="fs-15 fw-semibold text-capitalize transition-all"
                          title="Admin earns scholarship"
                        >
                          Admin earns scholarship
                        </a>
                      </h4>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__read-more fs-14 text-capitalize transition-all"
                        title="View Details"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="latest-new-layout-1__items">
                  <div className="latest-new-layout-1__thumbnail">
                    <figure className="position-relative">
                      <a
                        href="blog-details.html"
                        title="Forensic team earns several"
                      >
                        <img
                          src="../images/latest-new/latest-new-large-03.png"
                          alt="Forensic team earns several"
                        />
                        <span className="sr-only d-none">
                          Forensic team earns several
                        </span>
                      </a>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__square position-absolute"
                        title="Forensic team earns several"
                        aria-label="Forensic team earns several"
                      >
                        <i
                          className="iconify fs-32 text-white"
                          data-icon="la:external-link-square-alt"
                        />
                      </a>
                    </figure>
                    <div className="latest-new-layout-1__content position-relative text-center">
                      <div className="latest-new-layout-1__time fs-14">
                        <span>Keny White</span>
                        <span>-</span>
                        <span>22/03/2024</span>
                      </div>
                      <h4 className="latest-new-layout-1__title line-clamp-2">
                        <a
                          href="blog-details.html"
                          className="fs-15 fw-semibold text-capitalize transition-all"
                          title="Forensic team earns several"
                        >
                          Forensic team earns several
                        </a>
                      </h4>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__read-more fs-14 text-capitalize transition-all"
                        title="View Details"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="latest-new-layout-1__items">
                  <div className="latest-new-layout-1__thumbnail">
                    <figure className="position-relative">
                      <a href="blog-details.html" title="Working">
                        <img
                          src="../images/latest-new/latest-new-large-04.png"
                          alt="Working"
                        />
                        <span className="sr-only d-none">Working</span>
                      </a>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__square position-absolute"
                        title="Working"
                        aria-label="Working"
                      >
                        <i
                          className="iconify fs-32 text-white"
                          data-icon="la:external-link-square-alt"
                        />
                      </a>
                    </figure>
                    <div className="latest-new-layout-1__content position-relative text-center">
                      <div className="latest-new-layout-1__time fs-14">
                        <span>Keny White</span>
                        <span>-</span>
                        <span>23/04/2024</span>
                      </div>
                      <h4 className="latest-new-layout-1__title line-clamp-2">
                        <a
                          href="blog-details.html"
                          className="fs-15 fw-semibold text-capitalize transition-all"
                          title="Working"
                        >
                          Working
                        </a>
                      </h4>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__read-more fs-14 text-capitalize transition-all"
                        title="View Details"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="latest-new-layout-1__items">
                  <div className="latest-new-layout-1__thumbnail">
                    <figure className="position-relative">
                      <a
                        href="blog-details.html"
                        title="Introducing: Dr. Deniz Zeynep"
                      >
                        <img
                          src="../images/latest-new/latest-new-large-01.png"
                          alt="Introducing: Dr. Deniz Zeynep"
                        />
                        <span className="sr-only d-none">
                          Introducing: Dr. Deniz Zeynep
                        </span>
                      </a>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__square position-absolute"
                        title="Introducing: Dr. Deniz Zeynep"
                        aria-label="Introducing: Dr. Deniz Zeynep"
                      >
                        <i
                          className="iconify fs-32 text-white"
                          data-icon="la:external-link-square-alt"
                        />
                      </a>
                    </figure>
                    <div className="latest-new-layout-1__content position-relative text-center">
                      <div className="latest-new-layout-1__time fs-14">
                        <span>Keny White</span>
                        <span>-</span>
                        <span>24/05/2024</span>
                      </div>
                      <h4 className="latest-new-layout-1__title line-clamp-2">
                        <a
                          href="blog-details.html"
                          className="fs-15 fw-semibold text-capitalize transition-all"
                          title="Introducing: Dr. Deniz Zeynep"
                        >
                          Introducing: Dr. Deniz Zeynep
                        </a>
                      </h4>
                      <a
                        href="blog-details.html"
                        className="latest-new-layout-1__read-more fs-14 text-capitalize transition-all"
                        title="View Details"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div><i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
          </div>
          <div className="swiper-pagination edm-data-pagination-lnuni transition-all" />
        </div>
      </div>
    </div>
  </section>
  <section className="uni-subscribe position-relative subscribe-layout-1 pt-80px pb-80px">
    <div className="container">
      <img
        src="../images/mail-sank.png"
        alt="mail-sank"
        className="subscribe-layout-1__sank"
      />
      <div className="row">
        <div className="col-md-6">
          <div className="subscribe-layout-1__brief">
            <p>
              Subscribe now and receive weekly newsletter with educational
              materials, new courses, interesting posts, popular books and much
              more!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <form className="subscribe-layout-1__form">
            <div className="position-relative">
              <input
                type="email"
                className="subscribe-layout-1__input"
                placeholder="Your email here"
                
              />
              <i
                className="iconify fs-20 subscribe-layout-1__mail-icon"
                data-icon="tabler:mail-share"
              />
            </div>
            <button
              type="submit"
              className="subscribe-layout-1__button text-uppercase fw-medium pe-35px ps-35px fs-14"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
