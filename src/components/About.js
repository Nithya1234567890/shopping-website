import React from "react";
import './About.css'
const About = () => {
  return (
    <>
      <section className="about_us padding_top" style={{ paddingTop: "200px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="about_us_content">
                <h5>Our Mission</h5>
                <h3>
                  Donec imperdiet congue orci consequat mattis. Donec rutrum
                  porttitor sollicitudin. Pellentesque id dolor tempor sapien
                  feugiat ultrices nec sed neque.
                </h3>
                <div className="about_us_video position-relative">
                  <img
                    src="https://preview.colorlib.com/theme/estore/assets/img/about_us_video.png"
                    alt="#"
                    className="img-fluid"
                  ></img>
                  <a
                    className="about_video_icon popup-youtube"
                    href="https://www.youtube.com/watch?v=DWHB6nTyKDI"
                  >
                 {/* eslint-disable-next-line */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature_part section_padding" style={{padding:"200px"}}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="feature_part_tittle">
                <h3>Credibly innovate granular internal or organic sources whereas standards.</h3>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="feature_part_content">
                <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
              </div>
            </div>
          </div>
          <div className="im row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/icon/feature_icon_1.svg" alt=""/>
                <h4>Credit Card Support</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/icon/feature_icon_2.svg" alt=""/>
                <h4>Online Order</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/icon/feature_icon_3.svg" alt=""/>
                <h4>Free Delivery</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/icon/feature_icon_4.svg" alt=""/>
                <h4>Product with Gift</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe_part section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="subscribe_part_content text-center">
                <h2 className="text-white">Get promotions & updates!</h2>
                <p className="text-white">Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                <div className="subscribe_form">
                  <input type="email" placeholder="Enter your mail" />
                  <a href="/" className="btn_1">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
