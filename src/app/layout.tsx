
import React from "react";
import Script from "next/script";
import Link from "next/link";   
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>

      <title>Universitas Sanjaya- The Multipurpose HTML5 Template</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="ThimPress" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Elevate your online presence with Sanjaya"
      />
      {/* Favicon icon */}
      <link rel="shortcut icon" href="/images/favicon.png" />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="/images/apple-touch-icon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/images/apple-touch-icon-192x192.png"
      />
      {/* Style */}
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="assets/css/lightbox.css" />
      <link rel="stylesheet" href="assets/css/nouislider.min.css" />
      <link rel="stylesheet" href="assets/css/style2cc5.css?v=5.6" />
      <link rel="stylesheet" href="assets/css/demos/university2cc5.css?v=5.6" />
      {/* Wow */}
      <link rel="stylesheet" href="assets/css/animate.css" />
      </head>
     
      <body className='uni-layout'>
  
    {/* <div id="loading-placeholder" style={{ position: 'fixed', inset: 0, background: '#fff', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      Loading...
    </div> */}
  <section className="uni-notification">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 col-md-5">
          <div className="d-flex flex-wrap align-items-center gap-10px">
            <div className="notification__phone d-flex align-items-center gap-5px">
              <i className="iconify fs-18" data-icon="iconoir:phone" />
              <span className="d-none d-xl-block">(+88) 1990 6886</span>
            </div>
            <div className="notification__mail d-flex align-items-center gap-5px">
              <i className="iconify fs-18" data-icon="tabler:mail-check" />
              <span className="d-none d-xl-block">
                <Link
                  href="https://html.thimpress.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                >
                  [email&nbsp;protected]
                </Link>
              </span>
            </div>
            <div className="notification__acc d-flex align-items-center gap-5px">
              <i
                className="iconify fs-18"
                data-icon="fluent:people-48-regular"
              />
              <span className="d-none d-xl-block">Demo account</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-7">
          <div className="d-flex align-items-center justify-content-end">
            <ul className="notification-page d-flex align-items-center">
              <li className="d-none d-xl-block">
                <Link href="#">Campus</Link>
              </li>
              <li className="d-none d-xl-block">
                <Link href="#">Research</Link>
              </li>
              <li className="d-none d-xl-block">
                <Link href="#">Community</Link>
              </li>
              <li className="d-none d-xl-block">
                <Link href="#">Faculty &amp; staff</Link>
              </li>
              <li className="d-none d-xl-block">
                <Link href="#">Alumni</Link>
              </li>
            </ul>
            <ul className="notification-auth d-flex align-items-center">
              {/* <li>
                <Link href="#" className="search__icon">
                  <i
                    className="iconify fs-18 cursor-pointer"
                    data-icon="iconamoon:search"
                  />
                </Link>
              </li> */}
              <li>
                <Link href="#" className="handle-register">
                  <i
                    className="iconify fs-18"
                    data-icon="ant-design:user-add-outlined"
                  />
                </Link>
              </li>
              <li>
                <Link href="#" className="handle-login">
                  <i className="iconify fs-18" data-icon="lucide:user" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
        {/* <WowInitializer/> */}

  <nav className="uni-navbar navbar navbar-expand-lg pt-0 pb-0 z-3">
    <div className="container demo-submenu-rsv1">
      <div className="col-md-2 uni-navbar__logo">
        <Link href="/">
          <Image
            src="../images/logo/bg-univ.jpeg"
            style={{ backgroundColor: "#000" }}
            alt="Logo"
            className="navbar__logo bg-transparent w-50"
          />
        </Link>
      </div>
      <div className="col-md-8 uni-navbar__menu">
        <div className="bars-btn d-none">
          <span className="iconify fs-24" data-icon="fe:bar" />
        </div>
        <div className="navbar-custom">
          <div className="">
          <ul className="navbar-nav gap-22px justify-content-center">
              <li className="nav-item main-dropdown-menu">
                <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all">
                  <>
                  <span className="">Tentang STKIP</span>
                  
                  <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                  </>
                </Link>
                <ul className="main-dropdown-menu__sub">
                  <li className="main-dropdown-menu__sub_items"><Link href="/tentang/sejarah">Sejarah Singkat</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="/tentang/visimisi">Visi, Misi, Tujuan dan Sasaran</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="/tentang/struktur-organisasi">Struktur Organisasi</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="/tentang/pimpinan">Pimpinan</Link></li>
                </ul>
              </li>

              <li className="nav-item main-dropdown-menu">
                <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all">
                  Akademik
                  <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                </Link>
                <ul className="main-dropdown-menu__sub">
                  <li className="main-dropdown-menu__sub_items"><Link href="#">Prodi</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="#">Informasi Biaya Pendidikan</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="#">Kalender Akademik</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="#">Buku Pedoman Akademik</Link></li>
                </ul>
              </li>

              <li className="nav-item main-dropdown-menu">
                <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all">
                  Lembaga
                  <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                </Link>
                <ul className="main-dropdown-menu__sub">
                  <li className="main-dropdown-menu__sub_items"><Link href="#">LPM</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="#">LP2M</Link></li>
                </ul>
              </li>

              <li className="nav-item main-dropdown-menu">
                <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all">
                  Biro
                  <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                </Link>
                <ul className="main-dropdown-menu__sub">
                  <li className="main-dropdown-menu__sub_items"><Link href="#">Akademik</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="#">Keuangan</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="#">TI</Link></li>
                  <li className="main-dropdown-menu__sub_items"><Link href="#">SDM</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all">
                  Kemahasiswaan
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all">
                  Download
                </Link>
              </li>

              <li className="nav-item">
                <Link href="contact.html" className="d-block pt-25px pb-25px fw-medium transition-all">
                  Kontak
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div className="col-md-2 uni-navbar__apply">
        <ul className="notification-auth d-flex align-items-center justify-content-end">
           {/* <ul className="notification-auth d-flex align-items-center">
              <li>
                <Link href="#" className="search__icon">
                  <i
                    className="iconify fs-24 cursor-pointer"
                    data-icon="iconamoon:search"
                  />
                </Link>
              </li>
            </ul> */}
          <Link href="#" className="uni-button transition-all search__icon">
             <i
                    className="iconify fs-24 cursor-pointer"
                    data-icon="iconamoon:search"
                  />
          </Link>
        </ul>
      </div>
    </div>
  </nav>
  
  {children}  

  <footer className="section-footer uni-footer footer-layout-1 pt-80px">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 mb-30px mb-lg-0">
          <Link href="idex.html">
            <Image
              src="../images/logo/bg-univ.jpeg"
              alt="logo"
              style={{ backgroundColor: "#000" }}
              className="section-footer_logo mb-40px"
            />
          </Link>
          <div className="footer-layout-1__info d-flex align-items-center gap-5px mb-10px">
            <i className="iconify fs-20" data-icon="iconoir:phone" />
            <span className="d-block">800 388 80 90</span>
          </div>
          <div className="footer-layout-1__info d-flex align-items-center gap-5px mb-10px">
            <i className="iconify fs-20" data-icon="akar-icons:location" />
            <span className="d-block">58 Howard Street #2 San Francisco</span>
          </div>
          <div className="footer-layout-1__info d-flex align-items-center gap-5px mb-20px">
            <i className="iconify fs-20" data-icon="tabler:mail-check" />
            <span className="d-block">
              <Link
                href="https://html.thimpress.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="81e2eeeff5e0e2f5c1e4e5f4ece0afe2eeec"
              >
                [email&nbsp;protected]
              </Link>
            </span>
          </div>
          <ul className="d-flex align-items-center gap-15px">
            <li>
              <Link href="#" className="transition-all">
                <i className="iconify fs-24" data-icon="circum:facebook" />
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-all">
                <i className="iconify fs-24" data-icon="ri:twitter-x-fill" />
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-all">
                <i className="iconify fs-24" data-icon="ph:pinterest-logo" />
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-all">
                <i className="iconify fs-24" data-icon="ph:instagram-logo" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-20px mb-lg-0">
          <h6 className="footer__title fw-semibold text-white mb-40px">
            Company
          </h6>
          <ul>
            <li className="mb-10px">
              <Link className="transition-all" href="about-us.html">
                About
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="blog.html">
                Blog
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="contact.html">
                Contact
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="becom-an-instructors.html">
                Become a Teacher
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-20px mb-lg-0">
          <h6 className="footer__title fw-semibold text-white mb-40px">
            Links
          </h6>
          <ul>
            <li className="mb-10px">
              <Link className="transition-all" href="courses-category.html">
                Courses
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="events.html">
                Events
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="gallery.html">
                Gallery
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="faqs.html">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-20px mb-lg-0">
          <h6 className="footer__title fw-semibold text-white mb-40px">
            Support
          </h6>
          <ul>
            <li className="mb-10px">
              <Link className="transition-all" href="#">
                Documentation
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="#">
                Forums
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="#">
                Language Packs
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="#">
                Release Status
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2">
          <h6 className="footer__title fw-semibold text-white mb-40px">
            Recommend
          </h6>
          <ul>
            <li className="mb-10px">
              <Link className="transition-all" href="#">
                WordPress
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="#">
                LearnPress
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="#">
                WooCommerce
              </Link>
            </li>
            <li className="mb-10px">
              <Link className="transition-all" href="#">
                bbPress
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="footer-layout-1__bottom d-flex flex-wrap align-items-center justify-content-between mt-50px pt-30px pb-30px">
          <p className="transition-all mb-20px mb-md-0"> </p>
          <ul className="d-flex align-items-center gap-30px">
            <li>
              <Link className="transition-all" href="#">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="transition-all" href="#">
                Terms
              </Link>
            </li>
            <li>
              <Link className="transition-all" href="#">
                Sitemap
              </Link>
            </li>
            <li>
              <Link className="transition-all" href="#">
                Purchase
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <div className="scroll-progress d-none">
    <Link href="#" className="scroll-progress__link">
      <span className="iconify fs-18" data-icon="grommet-icons:up" />
      <span className="scroll-progress__line scroll-progress__uni">
        <span id="scr-progress" className="" />
      </span>
    </Link>
  </div>
  <div className="search-wrapper">
    <div className="search-overlay" />
    <div className="search-popup">
      <form action="#" method="GET">
        <input
          type="text"
          id="search-input"
          name="search-query"
          placeholder="Cari Halaman ..."
        />
        <button type="submit">
          <i
            className="iconify fs-22 text-white eye-on search-popup_icon"
            data-icon="iconamoon:search"
          />
        </button>
      </form>
    </div>
  </div>
  <div className="modal-form-login uni-form-login">
    <div className="container">
      <div className="row">
        <div className="form-login">
          <div className="form-login__wrapper p-50px pb-80px text-center">
            <h5 className="fw-bolder mb-30px">Login with your site account</h5>
            <form action="#" method="POST">
              <input
                type="text"
                name="user"
                placeholder="Username or email"
                
              />
              <div className="password-container">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  
                />
                <span id="pw-show-hide" className="pw-show-hide">
                  <i
                    className="iconify fs-18 eye-on"
                    data-icon="fa-solid:eye"
                  />
                  <i
                    className="iconify fs-20 eye-off"
                    data-icon="ion:eye-off"
                  />
                </span>
              </div>
              <div className="form-login__remember d-flex align-items-center justify-content-between">
                <label className="d-flex align-items-center gap-5px cursor-pointer">
                  <input type="checkbox" name="remember_me" /> Remember Me
                </label>
                <Link
                  href="lostpassword.html"
                  className="form-login__lost transition-all"
                >
                  Lost your password?
                </Link>
              </div>
              <input
                type="submit"
                defaultValue="Login"
                className="form-login__submit transition-all"
              />
            </form>
            <div className="d-flex align-items-center justify-content-center gap-10px mb-10px">
              <p>Not a member yet?</p>
              <Link
                href="#"
                className="form-login__register transition-all handle-register"
              >
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal-form-register uni-form-register">
    <div className="container">
      <div className="row">
        <div className="form-register">
          <div className="form-register__wrapper p-50px pb-80px text-center">
            <h5 className="fw-bolder mb-30px">Register a new account</h5>
            <form action="#" method="POST">
              <input
                type="text"
                name="user_name"
                placeholder="Username"
                
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
               />
              <input
                type="password"
                name="repeat_password"
                placeholder="Repeat Password"
                 
              />
              <input
                type="submit"
                defaultValue="Sign Up"
                className="form-register__submit transition-all"
              />
            </form>
            <div className="d-flex align-items-center justify-content-center gap-10px mb-10px">
              <p>Are you a member?</p>
              <Link
                href="#"
                className="form-register__register transition-all handle-login"
              >
                Login now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 

        
      {/* <Script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></Script> */}
      <Script strategy="afterInteractive" src="assets/js/iconify.min.js"></Script>
      <Script strategy="afterInteractive" src="assets/js/swiper-bundle.min.js"></Script>
      <Script strategy="afterInteractive" src="assets/js/swiper-control2cc5.js?v=5.6"></Script>
      <Script strategy="beforeInteractive" src="assets/js/main2cc5.js?v=5.6"></Script>
      <Script strategy="afterInteractive" src="assets/js/wow.min.js"></Script> 
      <Script strategy="afterInteractive" src="assets/js/main.js"></Script>
     

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                const loading = document.getElementById('loading-placeholder');
                if (loading) loading.style.display = 'none';
              });
            `,
          }}
        /> */}
{/* <script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="text/javascript" src="../assets/js/iconify.min.js" defer></script>
<script type="text/javascript" src="../assets/js/swiper-bundle.min.js" defer></script>
<script type="text/javascript" src="../assets/js/swiper-control2cc5.js?v=5.6" defer></script>
<script type="text/javascript" src="../assets/js/main2cc5.js?v=5.6" defer></script>
<script type="text/javascript" src="../assets/js/wow.min.js" defer></script> */}
{/* 
<script>
    document.addEventListener('DOMContentLoaded', function() {
        new WOW().init();
    });
</script> */}

      </body>
    </html>
  );
}
