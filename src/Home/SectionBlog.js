import React from 'react'

function SectionBlog() {
    return(
        <div>
            <section className="pb_20">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="text-center">
            <div className="heading_s1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.02s">
              <h2>اخبار وبلاگ</h2>
            </div>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.03s">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. .</p>
            <div className="small_divider" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="blog_post blog_style1 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
            <div className="blog_img">
              <a href="#">
                <img src="assets/images/blog_small_img1.jpg" alt="blog_small_img1" />
              </a>
              <div className="blog_date style1"><h4>02</h4><span>جولای</span></div>
            </div>
            <div className="blog_content">
              <h6 className="blog_title"><a href="#">لورم ایپسوم متن ساختگی با تولید سادگی</a></h6>
              <ul className="list_none blog_meta">
                <li><a href="#"><i className="far fa-user" />توسط <span className="text_default">مدیر</span></a>
                </li>
                <li><a href="#"><i className="far fa-comments" />4 نظر</a></li>
              </ul>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
              <a href="#" className="blog_link">بیشتر بخوانید <i className="ion-ios-arrow-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog_post blog_style1 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.05s">
            <div className="blog_img">
              <a href="#">
                <img src="assets/images/blog_small_img2.jpg" alt="blog_small_img2" />
              </a>
              <div className="blog_date style1"><h4>25</h4><span>مارس</span></div>
            </div>
            <div className="blog_content">
              <h6 className="blog_title"><a href="#">لورم ایپسوم متن ساختگی با تولید سادگی</a></h6>
              <ul className="list_none blog_meta">
                <li><a href="#"><i className="far fa-user" />توسط <span className="text_default">مدیر</span></a>
                </li>
                <li><a href="#"><i className="far fa-comments" />3 نظر</a></li>
              </ul>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
              <a href="#" className="blog_link">بیشتر بخوانید <i className="ion-ios-arrow-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog_post blog_style1 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.06s">
            <div className="blog_img">
              <a href="#">
                <img src="assets/images/blog_small_img3.jpg" alt="blog_small_img3" />
              </a>
              <div className="blog_date style1"><h4>08</h4><span>اوت</span></div>
            </div>
            <div className="blog_content">
              <h6 className="blog_title"><a href="#">لورم ایپسوم متن ساختگی با تولید سادگی</a></h6>
              <ul className="list_none blog_meta">
                <li><a href="#"><i className="far fa-user" />توسط <span className="text_default">مدیر</span></a>
                </li>
                <li><a href="#"><i className="far fa-comments" />5 نظر</a></li>
              </ul>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
              <a href="#" className="blog_link">بیشتر بخوانید <i className="ion-ios-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}

export default SectionBlog;