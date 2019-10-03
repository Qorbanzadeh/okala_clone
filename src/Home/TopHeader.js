import React from 'react'

function TopHeader() {
    return(
        <div className="top-header bg_gray">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <ul className="contact_detail border_list list_none text-center text-md-left">
              <li><a href="#"><i className="ti-mobile" /> <span>0211234567</span></a></li>
            </ul>
          </div>
          <div className="col-md-5">
            <ul className="header_list border_list list_none header_dropdown text-center text-md-right">
              <li className="dropdown">
                <a className="dropdown-toggle" href="#" data-toggle="dropdown">پروفایل کاربری</a>
                <div className="dropdown-menu shadow dropdown-menu-right">
                  <ul>
                    <li><a className="dropdown-item" href="my-account.html">پروفایل کاربری</a></li>
                    <li><a className="dropdown-item" href="#">لیست علاقه مندی</a></li>
                    <li><a className="dropdown-item" href="checkout.html">سبد خرید</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}

export default TopHeader;