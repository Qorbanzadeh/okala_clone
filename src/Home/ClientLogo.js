import React from 'react'

function ClientLogo() {
    return(
        <div>
            <section className="small_pt">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="text-center">
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
            <div className="small_divider" />
          </div>
        </div>
      </div>
      <div className="row ltr">
        <div className="col-12 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
          <div className="carousel_slide5 owl-carousel owl-theme" data-margin={30} data-dots="false" data-loop="true" data-autoplay="true">
            <div className="items">
              <a href="#"><img src="assets/images/cl_logo1.png" alt="cl_logo1" /></a>
            </div>
            <div className="items">
              <a href="#"><img src="assets/images/cl_logo2.png" alt="cl_logo2" /></a>
            </div>
            <div className="items">
              <a href="#"><img src="assets/images/cl_logo3.png" alt="cl_logo3" /></a>
            </div>
            <div className="items">
              <a href="#"><img src="assets/images/cl_logo4.png" alt="cl_logo4" /></a>
            </div>
            <div className="items">
              <a href="#"><img src="assets/images/cl_logo5.png" alt="cl_logo5" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}

export default ClientLogo;