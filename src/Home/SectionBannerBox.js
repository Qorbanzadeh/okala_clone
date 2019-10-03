import React from 'react'

function SectionBannerBox() {
    return(
        <div>
            <section>
    <div className="container">
      <div className="row">
        <div className="col-md-4 animation" data-animation="bounceInUp" data-animation-delay="0.2s">
          <div className="banner_box box_shadow4 radius_all_10">
            <div className="banner_text">
              <h3>نام محصول</h3>
              <p>لورم ایپسوم متن ساختگی</p>
              <em><a href="#"><u>خریدکن</u></a></em>
            </div>
            <div className="banner_img">
              <img src="assets/images/banner_img1.png" alt="banner_img1" />
            </div>
          </div>
        </div>
        <div className="col-md-4 animation" data-animation="bounceInUp" data-animation-delay="0.3s">
          <div className="banner_box box_shadow4 radius_all_10">
            <div className="banner_text">
              <h3>نام محصول</h3>
              <p>لورم ایپسوم متن ساختگی</p>
              <em><a href="#"><u>خریدکن</u></a></em>
            </div>
            <div className="banner_img">
              <img src="assets/images/banner_img2.png" alt="banner_img2" />
            </div>
          </div>
        </div>
        <div className="col-md-4 animation" data-animation="bounceInUp" data-animation-delay="0.4s">
          <div className="banner_box box_shadow4 radius_all_10">
            <div className="banner_text">
              <h3>نام محصول</h3>
              <p>لورم ایپسوم متن ساختگی</p>
              <em><a href="#"><u>خریدکن</u></a></em>
            </div>
            <div className="banner_img">
              <img src="assets/images/banner_img3.png" alt="banner_img3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}

export default SectionBannerBox;