import React, { useState, useEffect, useContext} from 'react';
import NavHeader from './NavHeader';
import TopHeader from './TopHeader';
import SectionBanner from './SectionBanner';
import SectionBannerBox from './SectionBannerBox';
import SectionWhyUs from './SectionWhyUs';
import SectionProduc from './SectionProduct';
import Footer from './Footer';
import NewsLetterSection from './NewsLetterSection';
import ClientLogo from './ClientLogo';
import SectionBlog from './SectionBlog';
import SectionFeatureProduct from './SectionFeatureProduct';
import SectionDealOfDay from './SectionDealOfDay';
import PreLoader from './PreLoader';
import {CartCounterProvider} from './CartCounterContext';

function Home() {

  return (
    <CartCounterProvider>
    <div>
  {/* Meta */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta content="Anil z" name="author" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="فروشگاه ارگانیک" />
  {/* SITE TITLE */}
  <title>ارگانیک</title>
  {/* Favicon Icon */}
  <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.png" />
  {/* Animation CSS */}
  <link rel="stylesheet" href="assets/css/animate.css" />
  {/* Latest Bootstrap min CSS */}
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
  {/* Google Font */}
  <link href="../../../external.html?link=https://fonts.googleapis.com/css?family=Lobster+Two:400,700" rel="stylesheet" />
  <link href="../../../external.html?link=https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
  {/* Icon Font CSS */}
  <link rel="stylesheet" href="assets/css/ionicons.min.css" />
  {/* FontAwesome CSS */}
  <link rel="stylesheet" href="assets/css/all.min.css" />
  {/* Themify Font CSS */}
  <link rel="stylesheet" href="assets/css/themify-icons.css" />
  {/*- owl carousel CSS*/}
  <link rel="stylesheet" href="assets/owlcarousel/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.css" />
  <link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.default.min.css" />
  {/* Magnific Popup CSS */}
  <link rel="stylesheet" href="assets/css/magnific-popup.css" />
  {/* jquery-ui CSS */}
  <link rel="stylesheet" href="assets/css/jquery-ui.css" />
  {/* Style CSS */}
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/responsive.css" />
  <link rel="stylesheet" id="layoutstyle" href="assets/color/theme-default.css" />
  {/* LOADER */}
  <PreLoader />
  {/* END LOADER */}
  {/* START HEADER */}
  <header className="header_wrap dark_skin main_menu_uppercase">
    <div>
      <TopHeader />
    </div>
    <div>
      <NavHeader />
    </div>
  </header>
  {/* END HEADER */}
  {/* START SECTION BANNER */}
    <SectionBanner />
  {/* END SECTION BANNER */}
  {/* START SECTION BANNER BOX */}
    <SectionBannerBox />
  {/* END SECTION BANNER BOX */}
  {/* START SECTION WHY CHOOSE US */}
    <SectionWhyUs />
  {/* END SECTION WHY CHOOSE US */}
  {/* START SECTION PRODUCT */}
    <SectionProduc />
  {/* START SECTION PRODUCT */}
  {/* START SECTION DEAL OF THE DAY */}
  <SectionDealOfDay />
  {/* END SECTION DEAL OF THE DAY */}
  {/* START SECTION FEATURE PRODUCT */}
  <SectionFeatureProduct />
  {/* END SECTION FEATURE PRODUCT */}
  {/* START SECTION BLOG */}
  <SectionBlog />
  {/* END SECTION BLOG */}
  {/* START SECTION CLIENT LOGO */}
  <ClientLogo />
  {/* END SECTION CLIENT LOGO */}
  {/* END SECTION NEWSLATTER */}
  <NewsLetterSection />
  {/* END SECTION NEWSLATTER */}
  {/* START FOOTER */}
    <Footer />
  {/* END FOOTER */}
  <a href="#" className="scrollup" style={{display: 'none'}}><i className="ion-ios-arrow-up" /></a>
</div>

</CartCounterProvider>

  ); 
}

export default Home;