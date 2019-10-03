import React, {useState, useContext} from 'react'
import Home from './Home';
import { CartCounterContext } from './CartCounterContext';

function SectionProduc() {

   const [cartCounter, setCartCounter] = useContext(CartCounterContext);

   const addToCart = e => {
      e.preventDefault();
      setCartCounter(
        cartCounter+1
      );
    }
   
    return(
        <div>
            <section className="pb_70">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-sm-10 text-center">
          <div className="heading_s1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <h2>فروشگاه افق کوروش تا 50% تخفیف</h2>
          </div>
          <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="product_content">
            <ul className="nav nav-tabs justify-content-center animation" data-animation="fadeInUp" data-animation-delay="0.04s" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="tab1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><span className="pr_icon1" />کلیه محصولات</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><span className="pr_icon2" />سبزیجات</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><span className="pr_icon3" />میوه ها</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab4" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false"><span className="pr_icon4" />آب میوه</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab5" data-toggle="tab" href="#tab-5" role="tab" aria-controls="tab-5" aria-selected="false"><span className="pr_icon5" />چای</a>
              </li>
            </ul>
            <div className="small_divider clearfix" />
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                <div className="row animation" data-animation="fadeInUp" data-animation-delay="0.05s">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_green">فروش</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img1.jpg" alt="product_img1" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart"/></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">توت فرنگی ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">35.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_orange">-10٪</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img2.jpg" alt="product_img2" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"><i className="ti-shopping-cart" onClick={addToCart}/></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">انگورهای تازه آلی</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">40.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img3.jpg" alt="product_img3" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"  onClick={addToCart}><i className="ti-shopping-cart" onClick={addToCart}/></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">خیار ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '60%'}} />
                        </div>
                        <span className="price">52.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_green">فروش</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img4.jpg" alt="product_img4" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"><i className="ti-shopping-cart" onClick={addToCart}/></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">پرتقال ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '100%'}} />
                        </div>
                        <span className="price">39.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img5.jpg" alt="product_img5" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"><i className="ti-shopping-cart" onClick={addToCart}/></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">100٪ آبهای ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '100%'}} />
                        </div>
                        <span className="price">33.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img6.jpg" alt="product_img6" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"><i className="ti-shopping-cart" onClick={addToCart}/></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">موز ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '60%'}} />
                        </div>
                        <span className="price">42.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_red">داغ</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img7.jpg" alt="product_img7" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"><i className="ti-shopping-cart" onClick={addToCart}/></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">گوجه فرنگی آلی تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">  54.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_orange">-25٪</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img8.jpg" alt="product_img8" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"><i className="ti-shopping-cart" onClick={addToCart}/></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">هویج تازه ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">32.00 تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                <div className="row animation" data-animation="fadeInUp" data-animation-delay="0.05s">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_orange">-10٪</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img2.jpg" alt="product_img2" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart"/></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">انگورهای تازه آلی</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">40.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img3.jpg" alt="product_img3" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">خیار ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '60%'}} />
                        </div>
                        <span className="price">52.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img5.jpg" alt="product_img5" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">100٪ آبهای ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '100%'}} />
                        </div>
                        <span className="price">33.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img6.jpg" alt="product_img6" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">موز ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '60%'}} />
                        </div>
                        <span className="price">تومان 42.00 </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_red">داغ</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img7.jpg" alt="product_img7" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"  onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">گوجه فرنگی آلی تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">540 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_orange">-25٪</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img8.jpg" alt="product_img8" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"  onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">هویج تازه ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">32.00 تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3">
                <div className="row animation" data-animation="fadeInUp" data-animation-delay="0.05s">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_green">فروش</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img1.jpg" alt="product_img1" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"  onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">توت فرنگی ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">35.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_orange">-10٪</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img2.jpg" alt="product_img2" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"  onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">انگورهای تازه آلی</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">40.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_green">فروش</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img4.jpg" alt="product_img4" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#"  onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">پرتقال ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '100%'}} />
                        </div>
                        <span className="price">39.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img5.jpg" alt="product_img5" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">100٪ آبهای ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '100%'}} />
                        </div>
                        <span className="price">33.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_red">داغ</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img7.jpg" alt="product_img7" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">گوجه فرنگی آلی تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">540 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_orange">-25٪</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img8.jpg" alt="product_img8" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">هویج تازه ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">32.00 تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4">
                <div className="row animation" data-animation="fadeInUp" data-animation-delay="0.05s">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_green">فروش</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img4.jpg" alt="product_img4" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">پرتقال ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '100%'}} />
                        </div>
                        <span className="price">39.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img5.jpg" alt="product_img5" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">100٪ آبهای ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '100%'}} />
                        </div>
                        <span className="price">33.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img6.jpg" alt="product_img6" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">موز ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '60%'}} />
                        </div>
                        <span className="price">42.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_red">داغ</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img7.jpg" alt="product_img7" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">گوجه فرنگی آلی تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">540 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_orange">-25٪</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img8.jpg" alt="product_img8" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">هویج تازه ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">32.00 تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="tab5">
                <div className="row animation" data-animation="fadeInUp" data-animation-delay="0.05s">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_red">داغ</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img7.jpg" alt="product_img7" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">گوجه فرنگی آلی تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">540 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img3.jpg" alt="product_img3" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">خیار ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '60%'}} />
                        </div>
                        <span className="price">52.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_green">فروش</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img4.jpg" alt="product_img4" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">پرتقال ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '100%'}} />
                        </div>
                        <span className="price">39.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_orange">-10٪</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img2.jpg" alt="product_img2" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">انگورهای تازه آلی</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">40.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img5.jpg" alt="product_img5" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">100٪ آبهای ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '100%'}} />
                        </div>
                        <span className="price">33.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_orange">-25٪</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img8.jpg" alt="product_img8" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">هویج تازه ارگانیک</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">32.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img6.jpg" alt="product_img6" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">موز ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '60%'}} />
                        </div>
                        <span className="price">42.00 تومان</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product">
                      <span className="pr_flash bg_green">فروش</span>
                      <div className="product_img">
                        <a href="#"><img src="assets/images/product_img1.jpg" alt="product_img1" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="ti-heart" /></a></li>
                            <li><a href="#" onClick={addToCart}><i className="ti-shopping-cart" /></a></li>
                            <li>
                              <a href="#" className="popup-ajax"><i className="ti-eye" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6><a href="#">توت فرنگی ارگانیک تازه</a></h6>
                        <div className="rating">
                          <div className="product_rate" style={{width: '80%'}} />
                        </div>
                        <span className="price">35.00 تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overlap_shape">
      <div className="ol_shape8">
        <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
          <img data-parallax="{&quot;y&quot;: -30, &quot;smoothness&quot;: 20}" src="assets/images/shape25.png" alt="شکل 25" />
        </div>
      </div>
      <div className="ol_shape9">
        <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
          <img data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 20}" src="assets/images/shape26.png" alt="شکل26" />
        </div>
      </div>
      <div className="ol_shape10">
        <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
          <img data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 20}" src="assets/images/shape27.png" alt="شکل 27" />
        </div>
      </div>
      <div className="ol_shape11">
        <div className="animation" data-animation="fadeInRight" data-animation-delay="0.5s">
          <img data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 20}" src="assets/images/shape28.png" alt="شکل28" />
        </div>
      </div>
      <div className="ol_shape12">
        <div className="animation" data-animation="fadeInRight" data-animation-delay="0.5s">
          <img data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 20}" src="assets/images/shape29.png" alt="شکل 29" />
        </div>
      </div>
      <div className="ol_shape13">
        <div className="animation" data-animation="fadeInRight" data-animation-delay="0.5s">
          <img data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 20}" src="assets/images/shape30.png" alt="شکل 30" />
        </div>
      </div>
      <div className="ol_shape14">
        <div className="bounceimg" data-animation="fadeInRight" data-animation-delay="0.5s">
          <img data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 20}" src="assets/images/shape31.png" alt="شکل 31" />
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}


export default SectionProduc;