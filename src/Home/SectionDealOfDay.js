import React from 'react'

function SectionDealOfDay() {
    return(
        <div>
            <section className="bg_light_blue">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 col-md-7">
          <div className="deal_content text-center">
            <div className="heading_s1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.02s">
              <h2>تخفیف ویژه <br />برای کلیه محصولات اوه</h2>
            </div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
            <div className="countdown_time animation" data-animation="fadeInUp" data-animation-delay="0.04s" data-time="2019/06/02 12:30:15" />
            <a href="#" className="btn btn-default btn-radius btn-borderd animation" data-animation="fadeInUp" data-animation-delay="0.04s">اکنون پیشنهاد را مشاهده کنید</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-5">
          <div className="deal_img_wrap bounceimg animation" data-animation="zoomIn" data-animation-delay="0.02s">
            <img src="assets/images/deal_img.png" alt="deal_img" />
          </div>
          <div className="circle_bg1">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
    <div className="overlap_shape">
      <div className="ol_shape15">
        <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
          <img data-parallax="{&quot;y&quot;: -30, &quot;smoothness&quot;: 20}" src="assets/images/shape32.png" alt="شکل 32" />
        </div>
      </div>
      <div className="ol_shape16">
        <div className="animation" data-animation="fadeInRight" data-animation-delay="0.5s">
          <img data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 20}" src="assets/images/shape33.png" alt="شکل 33" />
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}

export default SectionDealOfDay;