import React,{useState, useContext} from 'react';
import { CartCounterContext } from './CartCounterContext';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import { white } from 'ansi-colors';

function NavHeader() {
  const [cartCounter, setCartCounter] = useContext(CartCounterContext);
    return (
        <div className="container">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="index.html">
          <img className="logo_light" src="assets/images/logo_white.png" alt="آرم" />
          <img className="logo_dark" src="assets/images/logo_dark.png" alt="آرم" />
          <img className="logo_default" src="assets/images/logo_dark.png" alt="آرم" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="ناوبری را تغییر دهید"><span className="ion-android-menu" /></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
          <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">موادغذایی</a>
              <div className="dropdown-menu">
                <ul className="mega-menu d-lg-flex">
                  <li className="mega-menu-col col-lg-3">
                    <ul>
                      <li className="dropdown-header">لبنیات</li>
                      <li><a className="dropdown-item nav-link nav_item" href="shop-list-view.html">پنیر</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="shop-grid-view.html">کشک</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="shop-three-columns.html">کره</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="shop-four-columns.html">شیر</a></li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-3">
                    <ul>
                      <li className="dropdown-header">آجیل و خشکبار</li>
                      <li><a className="dropdown-item nav-link nav_item" href="product-detail.html">پسته</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="product-detail-left-sidebar.html">آجیل</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="product-detail-right-sidebar.html">خشکبار</a></li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-3">
                    <ul>
                      <li className="dropdown-header">پروتینی</li>
                      <li><a className="dropdown-item nav-link nav_item" href="cart.html">گوشت مرغ</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="checkout.html">گوشت مخلوط</a>
                      </li>
                      <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">ماهی و میگو</a>
                      </li>
                      <li><a className="dropdown-item nav-link nav_item" href="my-account.html">سوسیس و کالباس</a></li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-3">
                    <div className="ads_banner">
                      <a href="#"><img src="assets/images/mega_menu_ads2.jpg" alt="mega_menu_ads" /></a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">نوشیدنی و دمنوش ها</a>
              <div className="dropdown-menu">
                <ul className="mega-menu d-lg-flex">
                  <li className="mega-menu-col col-lg-3">
                    <ul>
                      <li className="dropdown-header">نوشیدنی های سرد</li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-3">
                    <ul>
                      <li className="dropdown-header">نوشیدنی های گرم</li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-3">
                    <div className="ads_banner">
                      <a href="#"><img src="assets/images/mega_menu_ads.jpg" alt="mega_menu_ads" /></a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">وبلاگ</a>
            </li>
            <li>
              <a className="nav-link" href="">تماس با ما</a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav attr-nav align-items-center">
          <li><a href="javascript:void(0);" className="nav-link search_trigger"><i className="ion-ios-search-strong" /></a>
            <div className="search-overlay">
              <div className="search_wrap">
                <form>
                  <div className="rounded_input">
                    <input type="text" placeholder="جستجو" className="form-control" id="search_input" />
                  </div>
                  <button type="submit" className="search_icon"><i className="fas fa-search" /></button>
                </form>
              </div>
            </div>
          </li>
          <li className="dropdown cart_wrap">
             <a href="" className="nav-link" data-toggle="dropdown"><i className="ion-bag"/><span className="cart_count">{cartCounter}</span></a>
          </li>
        </ul>
      </nav>
    </div>
    );
}

export default NavHeader;