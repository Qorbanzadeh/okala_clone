import React from 'react'

function NewsLetterSection() {
    return(
        <div>
            <section className="bg_light_green newslatter_wrap">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 text-center">
          <div className="heading_s1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
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
        </div>
    );
}

export default NewsLetterSection;