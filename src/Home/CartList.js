import React from 'react'

function CartList() {
    return(
      <div>
      {/* Meta */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta content="Anil z" name="author" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="فروشگاه ارگانیک" />
      <meta name="keywords" content="فروشگاه ارگانیک" />
      {/* SITE TITLE */}
      <title>ارگانیک</title>
      {/* Favicon Icon */}
      <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />
      {/* Animation CSS */}
      <link rel="stylesheet" href="assets/css/animate.css" />
      {/* Latest Bootstrap min CSS */}
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
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
      <div id="preloader">
        <div className="line-scale">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
      {/* END LOADER */}
      {/* START HEADER */}
      <header className="header_wrap dark_skin main_menu_uppercase">
        <div className="top-header bg_gray">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <ul className="contact_detail border_list list_none text-center text-md-left">
                  <li><a href="#"><i className="ti-mobile" /> <span>0211234567</span></a></li>
                  <li><a href="#"><i className="ti-email" /> <span>info@gmail.com</span></a></li>
                </ul>
              </div>
              <div className="col-md-5">
                <ul className="header_list border_list list_none header_dropdown text-center text-md-right">
                  <li>
                    <div className="custome_dropdown">
                      <select name="countries" className="custome_select">
                        <option value="en" data-title="English">انگلیسی</option>
                        <option value="fn" data-title="France">فرانسه</option>
                        <option value="us" data-title="United States">عربی</option>
                      </select>
                    </div>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#" data-toggle="dropdown">پروفایل کاربری</a>
                    <div className="dropdown-menu shadow dropdown-menu-right">
                      <ul>
                        <li><a className="dropdown-item" href="my-account.html">پروفایل کاربری</a></li>
                        <li><a className="dropdown-item" href="wishlist.html">لیست علاقه مندی</a></li>
                        <li><a className="dropdown-item" href="checkout.html">سبد خرید</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
                <li className="dropdown">
                  <a className="dropdown-toggle nav-link active" href="#" data-toggle="dropdown">صفحه اصلی</a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a className="dropdown-item nav-link nav_item active" href="index.html">صفحه اصلی 1</a>
                      </li>
                      <li><a className="dropdown-item nav-link nav_item" href="index-2.html">صفحه اصلی 2</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="index-3.html">صفحه اصلی 3</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="nav-link" href="about.html">درباره ما</a>
                </li>
                <li className="dropdown dropdown-mega-menu">
                  <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">فروشگاه</a>
                  <div className="dropdown-menu">
                    <ul className="mega-menu d-lg-flex">
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li className="dropdown-header">صفحه فروشگاه</li>
                          <li><a className="dropdown-item nav-link nav_item" href="shop-list-view.html">لیست فروشگاه</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="shop-grid-view.html">لیست عمودی فروشگاه</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="shop-three-columns.html">فروشگاه سه ستون</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="shop-four-columns.html">فروشگاه دو ستون</a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li className="dropdown-header">جزییات محصول</li>
                          <li><a className="dropdown-item nav-link nav_item" href="product-detail.html">جزییات محصول</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="product-detail-left-sidebar.html">محصول سایدبار چپ</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="product-detail-right-sidebar.html">محصول سایدبار راست</a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li className="dropdown-header">صفحات</li>
                          <li><a className="dropdown-item nav-link nav_item" href="cart.html">سبد خرید</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="checkout.html">پرداخت</a>
                          </li>
                          <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">لیست علاقه مندی</a>
                          </li>
                          <li><a className="dropdown-item nav-link nav_item" href="my-account.html">ورود / ثبت نام</a></li>
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
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a className="dropdown-item nav-link nav_item dropdown-toggler" href="#">چیدمان وبلاگ</a>
                        <div className="dropdown-menu">
                          <ul>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-standard-fullwidth.html">وبلاگ تمام صفحه</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-standard-left-sidebar.html">وبلاگ کناری چپ</a>
                            </li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-standard-right-sidebar.html">وبلاگ کناری راست</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-three-columns.html">وبلاگ سه ستون</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-four-columns.html">وبلاگ چهار ستون</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a className="dropdown-item nav-link nav_item dropdown-toggler" href="#">چیدمان وبلاگ</a>
                        <div className="dropdown-menu">
                          <ul>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-three-columns.html">وبلاگ سه ستون</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-four-columns.html">وبلاگ چهار ستون</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-three-columns-wide.html">وبلاگ سه ستون تمام عرض</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-four-columns-wide.html">وبلاگ چهار ستون تمام عرض</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a className="dropdown-item nav-link nav_item dropdown-toggler" href="#">لیست پست ها</a>
                        <div className="dropdown-menu">
                          <ul>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-list-left-sidebar.html" /></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-list-right-sidebar.html">پست عمودی</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a className="dropdown-item nav-link nav_item dropdown-toggler" href="#">پست تکی</a>
                        <div className="dropdown-menu">
                          <ul>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-single.html">پیشفرض</a>
                            </li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-single-left-sidebar.html">سایدبارچپ</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-single-right-sidebar.html">سایدبار راست</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-single-slider.html">پست کناری</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-single-video.html">ویدئو پست</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="blog-single-audio.html">پست صوتی</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">صفحات</a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a className="dropdown-item nav-link nav_item" href="team.html">تیم ما</a></li>
                      <li><a className="dropdown-item nav-link nav_item dropdown-toggler" href="#">گالری</a>
                        <div className="dropdown-menu">
                          <ul>
                            <li><a className="dropdown-item nav-link nav_item" href="gallery-three-columns.html">گالری سه ستون</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="gallery-four-columns.html">گالری دو ستون</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="gallery-three-columns-wide.html">گالری سه ستون تمام عرض</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="gallery-four-columns-wide.html">گالری چهار ستون تمام عرض</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="gallery-masonry-three-columns.html">گالری سه ستون تمام عرض</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="gallery-masonry-four-columns.html">گالری چهار ستون تمام عرض</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="gallery-masonry-three-columns-wide.html">گالری سه ستون</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="gallery-masonry-four-columns-wide.html">گالری چهار ستون</a></li>
                            <li><a className="dropdown-item nav-link nav_item" href="gallery-detail.html">جزییات گالری</a></li>
                          </ul>
                        </div>
                      </li>
                      <li><a className="dropdown-item nav-link nav_item" href="faq.html">پرسش پاسخ</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="coming-soon.html">صفحه به زودی</a>
                      </li>
                      <li><a className="dropdown-item nav-link nav_item" href="404.html">صفحه 404</a></li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown dropdown-mega-menu">
                  <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">المان ها</a>
                  <div className="dropdown-menu">
                    <ul className="mega-menu d-lg-flex">
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li><a className="dropdown-item nav-link nav_item" href="accordions.html"><i className="ti-layout-accordion-separated" />  آکاردئونها</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="blockquotes.html"><i className="ti-quote-left" />  بلاک ها</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="buttons.html"><i className="ti-mouse" />  دکمه ها</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="call-to-action.html"><i className="ti-headphone-alt" />  فراخوانی برای اقدام</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="carousel.html"><i className="ti-layout-slider" />  چرخ فلک</a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li><a className="dropdown-item nav-link nav_item" href="colors.html"><i className="ti-paint-bucket" /> رنگ ها</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="columns.html"><i className="ti-layout-column3-alt" /> ستون</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="countdown.html"><i className="ti-alarm-clock" /> شمارش معکوس</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="counter.html"><i className="ti-timer" /> پیشخوان</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="heading.html"><i className="ti-text" /> سرفصل</a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li><a className="dropdown-item nav-link nav_item" href="highlights.html"><i className="ti-underline" /> نکات برجسته</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="icon-boxes.html"><i className="ti-widget" /> جعبه آیکون</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="lists.html"><i className="ti-list" /> لیست ها</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="maps.html"><i className="ti-map-alt" /> نقشه</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="pricing-table.html"><i className="ti-layout-column3" /> جدول قیمت گذاری</a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li><a className="dropdown-item nav-link nav_item" href="progress-bars.html"><i className="ti-layout-list-post" /> میله های پیشرفت</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="social-icons.html"><i className="ti-facebook" /> شبکه های اجتماعی</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="tab.html"><i className="ti-layout-accordion-separated" /> برگه </a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="table.html"><i className="ti-layout-tab" /> جدول</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="testimonial.html"><i className="ti-layout-slider-alt" /> توصیفات</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="nav-link" href="contact.html">تماس با ما</a>
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
                <a className="nav-link" href="#" data-toggle="dropdown"><i className="ion-bag" /><span className="cart_count">2</span></a>
                <div className="cart_box dropdown-menu dropdown-menu-right">
                  <ul className="cart_list">
                    <li>
                      <a href="#" className="item_remove"><i className="ion-close" /></a>
                      <a href="#"><img src="assets/images/cart_thamb1.jpg" alt="cart_thumb1" />نام محصول ارگانیک </a>
                      <p><span className="float-right">1 x </span> <span className="float-right">1500 تومان</span></p>
                    </li>
                    <li>
                      <a href="#" className="item_remove"><i className="ion-close" /></a>
                      <a href="#"><img src="assets/images/cart_thamb2.jpg" alt="cart_thumb2" />نام محصول ارگانیک</a>
                      <p><span className="float-right">1 x </span> <span className="float-right">1500 تومان</span></p>
                    </li>
                  </ul>
                  <div className="cart_footer">
                    <p className="cart_total">جمع کل : <span className="cart_amount"> <span className="price_symbole">2500 تومان</span></span>
                    </p>
                    <p className="cart_buttons"><a href="cart.html" className="btn btn-default btn-radius view-cart">مشاهده سبد خرید</a>
                      <a href="checkout.html" className="btn btn-dark btn-radius checkout">پرداخت</a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* END HEADER */}
      {/* START SECTION BANNER */}
      <section className="bg_light_yellow breadcrumb_section background_bg bg_fixed bg_size_contain" data-img-src="assets/images/breadcrumb_bg.png">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 text-center">
              <div className="page-title">
                <h1>سبد خرید</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="#">صفحه اصلی</a></li>
                  <li className="breadcrumb-item"><a href="#">فروشگاه</a></li>
                  <li className="breadcrumb-item active" aria-current="page">سبد خرید</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}
      {/* START SECTION SHOP DETAIL */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive shop_cart_table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-name">محصول</th>
                      <th className="product-price">قیممت</th>
                      <th className="product-quantity">تعداد</th>
                      <th className="product-subtotal">جمع کل</th>
                      <th className="product-remove">حذف</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail"><a href="#"><img src="assets/images/product_img1.jpg" alt="product1" /></a></td>
                      <td className="product-name" data-title="Product"><a href="#">توت فرنگی ارگانیک</a></td>
                      <td className="product-price" data-title="Price">800 تومان</td>
                      <td className="product-quantity" data-title="Quantity"><div className="quantity">
                          <input type="button" defaultValue="-" className="minus" />
                          <input type="text" name="quantity" defaultValue={2} title="Qty" className="qty" size={4} />
                          <input type="button" defaultValue="+" className="plus" />
                        </div></td>
                      <td className="product-subtotal" data-title="Total">800 تومان</td>
                      <td className="product-remove" data-title="Remove"><a href="#"><i className="ti-close" /></a></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><a href="#"><img src="assets/images/product_img2.jpg" alt="product2" /></a></td>
                      <td className="product-name" data-title="Product"><a href="#">انگور ارگانیک</a></td>
                      <td className="product-price" data-title="Price">800 تومان</td>
                      <td className="product-quantity" data-title="Quantity"><div className="quantity">
                          <input type="button" defaultValue="-" className="minus" />
                          <input type="text" name="quantity" defaultValue={1} title="Qty" className="qty" size={4} />
                          <input type="button" defaultValue="+" className="plus" />
                        </div></td>
                      <td className="product-subtotal" data-title="Total">800 تومان</td>
                      <td className="product-remove" data-title="Remove"><a href="#"><i className="ti-close" /></a></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><a href="#"><img src="assets/images/product_img3.jpg" alt="product3" /></a></td>
                      <td className="product-name" data-title="Product"><a href="#">میوه ارگانیک</a></td>
                      <td className="product-price" data-title="Price">800 تومان</td>
                      <td className="product-quantity" data-title="Quantity"><div className="quantity">
                          <input type="button" defaultValue="-" className="minus" />
                          <input type="text" name="quantity" defaultValue={3} title="Qty" className="qty" size={4} />
                          <input type="button" defaultValue="+" className="plus" />
                        </div></td>
                      <td className="product-subtotal" data-title="Total">1500 تومان</td>
                      <td className="product-remove" data-title="Remove"><a href="#"><i className="ti-close" /></a></td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={6} className="px-0">
                        <div className="row no-gutters align-items-center">
                          <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
                            <div className="coupon field_form input-group">
                              <input type="text" defaultValue className="form-control" placeholder="کد تخفیف ..." />
                              <div className="input-group-append">
                                <button className="btn btn-default btn-sm" type="submit">کد تخفیف</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-6 text-left text-md-right">
                            <button className="btn btn-dark btn-sm" type="submit">ویرایش سبد</button>
                            <a href="#" className="btn btn-default btn-sm">ادامه فرایند خرید</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="small_divider clearfix" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="heading_s2">
                <h5>محل تولد</h5>
              </div>
              <form className="field_form shipping_calculator">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <div className="custom_select">
                      <select>
                        <option value>گزینه ای را انتخاب کنید ...</option>
                        <option value="AX">جزایر الند</option>
                        <option value="AF">افغانستان</option>
                        <option value="AL">آلبانی</option>
                        <option value="DZ">الجزایر</option>
                        <option value="AD">آندورا</option>
                        <option value="AO">آنگولا</option>
                        <option value="AI">آنگولا</option>
                        <option value="AQ">قطب جنوب</option>
                        <option value="AG">آنتیگوا و باربودا</option>
                        <option value="AR">آرژانتین</option>
                        <option value="AM">ارمنستان</option>
                        <option value="AW">آروبا</option>
                        <option value="AU">استرالیا</option>
                        <option value="AT">اتریش</option>
                        <option value="AZ">آذربایجان</option>
                        <option value="BS">باهاما</option>
                        <option value="BH">بحرین</option>
                        <option value="BD">بنگلادش</option>
                        <option value="BB">باربادوس</option>
                        <option value="BY">بلاروس</option>
                        <option value="PW">بلوا</option>
                        <option value="BE">بلژیک</option>
                        <option value="BZ">بلیز</option>
                        <option value="BJ">بنین</option>
                        <option value="BM">برمودا</option>
                        <option value="BT">بوتان</option>
                        <option value="BO">بولیوی</option>
                        <option value="BQ">بونیر ، سنت یوستاتیوس و صبا</option>
                        <option value="BA">بوسنی و هرزگوین</option>
                        <option value="BW">بوتسوانا</option>
                        <option value="BV">جزیره بوت</option>
                        <option value="BR">برزیل</option>
                        <option value="IO">قلمرو اقیانوس هند انگلیس</option>
                        <option value="VG">جزایر ویرجین انگلیس</option>
                        <option value="BN">برونئی</option>
                        <option value="BG">بلغارستان</option>
                        <option value="BF">بورکینافاسو</option>
                        <option value="BI">بوروندی</option>
                        <option value="KH">کامبوج</option>
                        <option value="CM">کامرون</option>
                        <option value="CA">کانادا</option>
                        <option value="CV">کیپ ورد</option>
                        <option value="KY">جزایر کیمن</option>
                        <option value="CF">جمهوری آفریقای مرکزی</option>
                        <option value="TD">چاد</option>
                        <option value="CL">شیلی</option>
                        <option value="CN">چین</option>
                        <option value="CX">جزیره کریسمس</option>
                        <option value="CC">جزایر کوکو (Keeling)</option>
                        <option value="CO">کلمبیا</option>
                        <option value="KM">کومور</option>
                        <option value="CG">کنگو (برزاویل)</option>
                        <option value="CD">کنگو (کینشاسا)</option>
                        <option value="CK">جزایر کوک</option>
                        <option value="CR">کاستاریکا</option>
                        <option value="HR">کرواسی</option>
                        <option value="CU">کوبا</option>
                        <option value="CW">کوروشائو</option>
                        <option value="CY">قبرس</option>
                        <option value="CZ">جمهوری چک</option>
                        <option value="DK">دانمارک</option>
                        <option value="DJ">جیبوتی</option>
                        <option value="DM">دومینیکا</option>
                        <option value="DO">جمهوری دومینیکن</option>
                        <option value="EC">اکوادور</option>
                        <option value="EG">مصر</option>
                        <option value="SV">السالوادور</option>
                        <option value="GQ">گینه استوایی</option>
                        <option value="ER">اریتره</option>
                        <option value="EE">استونی</option>
                        <option value="ET">اتیوپی</option>
                        <option value="FK">جزایر فالکلند</option>
                        <option value="FO">جزایر فارو</option>
                        <option value="FJ">فیجی</option>
                        <option value="FI">فنلاند</option>
                        <option value="FR">فرانسه</option>
                        <option value="GF">گویان فرانسه</option>
                        <option value="PF">پلی‌نزی فرانسه</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">Heard Island and McDonald Islands</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IQ">Iraq</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="CI">Ivory Coast</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Laos</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao S.A.R., China</option>
                        <option value="MK">Macedonia</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="KP">North Korea</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PS">Palestinian Territory</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="QA">Qatar</option>
                        <option value="IE">Republic of Ireland</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">رومانی</option>
                        <option value="RU">روسیه</option>
                        <option value="RW">رواندا</option>
                        <option value="ST">سائو Tomé و Príncipe</option>
                        <option value="BL">سنت بارتلی</option>
                        <option value="SH">سنت هلنا</option>
                        <option value="KN">سنت کیتس و نوویس</option>
                        <option value="LC">سنت لوسیا</option>
                        <option value="SX">سنت مارتین (قسمت هلندی)</option>
                        <option value="MF">سنت مارتین (قسمت فرانسوی)</option>
                        <option value="PM">سنت پیر و میکلون</option>
                        <option value="VC">سنت وینسنت و گرنادینها</option>
                        <option value="SM">سان مارینو</option>
                        <option value="SA">عربستان سعودی</option>
                        <option value="SN">سنگال</option>
                        <option value="RS">صربستان</option>
                        <option value="SC">سیشل</option>
                        <option value="SL">سیرا لئون</option>
                        <option value="SG">سنگاپور</option>
                        <option value="SK">اسلواکی</option>
                        <option value="SI">اسلوونی</option>
                        <option value="SB">جزایر سلیمان</option>
                        <option value="SO">سومالی</option>
                        <option value="ZA">آفریقای جنوبی</option>
                        <option value="GS">جزایر جورجیا جنوبی / جزایر ساندویچ</option>
                        <option value="KR">کره جنوبی</option>
                        <option value="SS">سودان جنوبی</option>
                        <option value="ES">اسپانیا</option>
                        <option value="LK">سری لانکا</option>
                        <option value="SD">سودان</option>
                        <option value="SR">سورینام</option>
                        <option value="SJ">سوالبارد و جان مین</option>
                        <option value="SZ">سوازیلند</option>
                        <option value="SE">سوئد</option>
                        <option value="CH">سوئیس</option>
                        <option value="SY">سوریه</option>
                        <option value="TW">تایوان</option>
                        <option value="TJ">تاجیکستان</option>
                        <option value="TZ">تانزانیا</option>
                        <option value="TH">تایلند</option>
                        <option value="TL">تیمور-لست</option>
                        <option value="TG">رفتن</option>
                        <option value="TK">توکلو</option>
                        <option value="TO">تونگا</option>
                        <option value="TT">ترینیداد و توباگو</option>
                        <option value="TN">تونس</option>
                        <option value="TR">بوقلمون</option>
                        <option value="TM">ترکمنستان</option>
                        <option value="TC">جزایر تورکس و کایکوس</option>
                        <option value="TV">تووالو</option>
                        <option value="UG">اوگاندا</option>
                        <option value="UA">اوکراین</option>
                        <option value="AE">امارات متحده عربی</option>
                        <option value="GB">انگلستان (انگلستان)</option>
                        <option value="US">ایالات متحده (ایالات متحده)</option>
                        <option value="UY">اروگوئه</option>
                        <option value="UZ">ازبکستان</option>
                        <option value="VU">واناتو</option>
                        <option value="VA">واتیکان</option>
                        <option value="VE">ونزوئلا</option>
                        <option value="VN">ویتنام</option>
                        <option value="WF">والیس و فوتونا</option>
                        <option value="EH">صحرای غربی</option>
                        <option value="WS">ساموآ غربی</option>
                        <option value="YE">یمن</option>
                        <option value="ZM">زامبیا</option>
                        <option value="ZW">زیمبابوه</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input required="required" placeholder="کشور / شهر" className="form-control" name="name" type="text" />
                  </div>
                  <div className="form-group col-md-6">
                    <input required="required" placeholder="کد پستی" className="form-control" name="name" type="text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <button className="btn btn-outline-black" type="submit">ویرایش</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="heading_s2">
                <h5>فاکتور خرید</h5>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <tbody><tr>
                      <td className="cart_total_label">کل سبد خرید</td>
                      <td className="cart_total_amount">1500 تومان</td>
                    </tr>
                    <tr>
                      <td className="cart_total_label">حمل و نقل </td>
                      <td className="cart_total_amount">رایگان</td>
                    </tr>
                    <tr>
                      <td className="cart_total_label">جمع کل</td>
                      <td className="cart_total_amount"><strong>25000 تومان</strong></td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION SHOP DETAIL */}
      {/* END SECTION NEWSLATTER */}
      <section className="bg_light_green newslatter_wrap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">
              <div className="heading_s2 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                <h2>در خبرنامه ما مشترک شوید</h2>
              </div>
              <p className="m-0 animation" data-animation="fadeInUp" data-animation-delay="0.03s">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
              <div className="small_divider" />
              <div className="newsletter_form animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                <form>
                  <div className="rounded_input">
                    <input type="text" className="form-control" required placeholder="ایمیل" />
                  </div>
                  <button type="submit" title="اشتراک در" className="btn btn-default" name="submit" value="Submit">عضویت</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap_shape">
          <div className="ol_shape19">
            <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
              <img data-parallax="{&quot;y&quot;: 20, &quot;smoothness&quot;: 20}" src="assets/images/shape34.png" alt="شکل34" />
            </div>
          </div>
          <div className="ol_shape20">
            <div className="animation" data-animation="fadeInRight" data-animation-delay="0.5s">
              <img data-parallax="{&quot;y&quot;: 20, &quot;smoothness&quot;: 20}" src="assets/images/shape35.png" alt="شکل35" />
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION NEWSLATTER */}
      {/* START FOOTER */}
      <footer className="bg_gray">
        <div className="top_footer small_pt small_pb">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer_logo">
                  <a href="index.html"><img alt="آرم" src="assets/images/logo_dark.png" /></a>
                </div>
                <div className="footer_desc">
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                </div>
                <ul className="contact_info list_none">
                  <li>
                    <span className="ti-mobile" />
                    <p>0211234567</p>
                  </li>
                  <li>
                    <span className="ti-email" />
                    <a href="mailto:info@yourmail.com">info@yourmail.com</a>
                  </li>
                  <li>
                    <span className="ti-location-pin" />
                    <address>خیابان 123 ، اولدترافورد ، نیویورک ، ایالات متحده آمریکا</address>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <h5 className="widget_title">اطلاعات</h5>
                <ul className="list_none widget_links">
                  <li><a href="#">اطلاعات تحویل</a></li>
                  <li><a href="#">پرداخت امن</a></li>
                  <li><a href="#">دربارهی ما</a></li>
                  <li><a href="#">فروشندگان برتر</a></li>
                  <li><a href="#">سیاست حفظ حریم خصوصی</a></li>
                  <li><a href="#">نقشه سایت ما</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <h5 className="widget_title">پشتیبانی مشتری</h5>
                <ul className="list_none widget_links">
                  <li><a href="#">حساب من</a></li>
                  <li><a href="#">سبد خرید</a></li>
                  <li><a href="#">آدرس</a></li>
                  <li><a href="#">تخفیف</a></li>
                  <li><a href="#">تاریخچه سفارشات</a></li>
                  <li><a href="#">رهگیری سفارش</a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-4">
                <h5 className="widget_title">اینستاگرام</h5>
                <ul className="list_none instafeed">
                  <li><a href="#"><img src="assets/images/insta_img1.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                  <li><a href="#"><img src="assets/images/insta_img2.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                  <li><a href="#"><img src="assets/images/insta_img3.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                  <li><a href="#"><img src="assets/images/insta_img4.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                  <li><a href="#"><img src="assets/images/insta_img5.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                  <li><a href="#"><img src="assets/images/insta_img6.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                  <li><a href="#"><img src="assets/images/insta_img7.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                  <li><a href="#"><img src="assets/images/insta_img8.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="middle_footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="shopping_info">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="icon_box icon_box_style2">
                        <div className="box_icon">
                          <i className="fas fa-truck" />
                        </div>
                        <div className="intro_desc">
                          <h5>تحویل رایگان</h5>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="icon_box icon_box_style2">
                        <div className="box_icon">
                          <i className="fas fa-dollar-sign" />
                        </div>
                        <div className="intro_desc">
                          <h5>30 روز ضمانت بازگشت</h5>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="icon_box icon_box_style2">
                        <div className="box_icon">
                          <i className="far fa-life-ring" />
                        </div>
                        <div className="intro_desc">
                          <h5>27/4 پشتیبانی آنلاین</h5>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <p className="copyright m-lg-0 text-center">کپی رایت © 2019 همه حقوق محفوظ است </p>
              </div>
              <div className="col-lg-4 order-lg-first">
                <ul className="list_none footer_payment text-center text-lg-left">
                  <li><a href="#"><img src="assets/images/visa.png" alt="ویزا" /></a></li>
                  <li><a href="#"><img src="assets/images/discover.png" alt="كشف كردن" /></a></li>
                  <li><a href="#"><img src="assets/images/master_card.png" alt="مستر کارت" /></a></li>
                  <li><a href="#"><img src="assets/images/paypal.png" alt="پی پال" /></a></li>
                  <li><a href="#"><img src="assets/images/amarican_express.png" alt="amarican_express" /></a></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="list_none social_icons radius_social text-center text-lg-right">
                  <li><a href="#" className="sc_facebook"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#" className="sc_twitter"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#" className="sc_google"><i className="fab fa-google-plus-g" /></a></li>
                  <li><a href="#" className="sc_instagram"><i className="fab fa-instagram" /></a></li>
                  <li><a href="#" className="sc_pinterest"><i className="fab fa-pinterest" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap_shape">
          <div className="ol_shape21">
            <div className="animation">
              <img data-parallax="{&quot;y&quot;: 20, &quot;smoothness&quot;: 20}" src="assets/images/shape36.png" alt="شکل 36" />
            </div>
          </div>
          <div className="ol_shape22">
            <div className="animation">
              <img data-parallax="{&quot;y&quot;: 20, &quot;smoothness&quot;: 20}" src="assets/images/shape37.png" alt="شکل 37" />
            </div>
          </div>
          <div className="ol_shape23">
            <div className="animation">
              <img data-parallax="{&quot;y&quot;: 20, &quot;smoothness&quot;: 20}" src="assets/images/shape38.png" alt="شکل 38" />
            </div>
          </div>
          <div className="ol_shape24">
            <div className="animation">
              <img data-parallax="{&quot;y&quot;: 20, &quot;smoothness&quot;: 20}" src="assets/images/shape39.png" alt="شکل 39" />
            </div>
          </div>
        </div>
      </footer>
      {/* END FOOTER */}
      <a href="#" className="scrollup" style={{display: 'none'}}><i className="ion-ios-arrow-up" /></a>
      {/* Latest jQuery */}
      {/* jquery-ui */}
      {/* popper min js */}
      {/* Latest compiled and minified Bootstrap */}
      {/* owl-carousel min js  */}
      {/* magnific-popup min js  */}
      {/* waypoints min js  */}
      {/* parallax js  */}
      {/* jquery dd js  */}
      {/* countdown js  */}
      {/* jquery.counterup.min js */}
      {/* jquery.parallax-scroll js */}
      {/* elevatezoom js */}
      {/* fit video  */}
      {/* imagesloaded js */}
      {/* isotope min js */}
      {/* cookie js */}
      {/* scripts js */}
    </div>
    
    );
}

export default CartList;