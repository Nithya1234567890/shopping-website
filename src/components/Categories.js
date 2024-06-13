import React from 'react'
import './categories.css'
const Categories = () => {
  return (
    <>
    <div className="best-collection-area section-padding2"
        style={{ paddingTop: "200px", paddingBottom: "200px" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-between align-items-end">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="best-left-cap">
                <h2 style={{ fontFamily: "Playfair Display, serif" }}>
                  Best Collection of This Month
                </h2>
                <p>Designers who are interesten creating</p>
                <a href="/" className="btn shop1-btn">
                  Shop Now
                </a>
              </div>
              <div
                className="best-left-img mb-30 d-none d-sm-block"
                style={{ paddingTop: "130px" }}
              >
                <img
                  src="	https://preview.colorlib.com/theme/estore/assets/img/collection/collection1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 d-none d-lg-block">
              <div className="best-mid-img mb-30 ">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection2.png"
                  alt=""
                />
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="best-right-cap ">
                <div className="best-single mb-30">
                  <div className="single-cap">
                    <h4>
                      Menz Winter
                      <br /> Jacket
                    </h4>
                  </div>
                  <div className="single-img">
                    <img
                      src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="best-right-cap">
                <div className="best-single mb-30">
                  <div className="single-cap active">
                    <h4>
                      Menz Winter
                      <br />
                      Jacket
                    </h4>
                  </div>
                  <div className="single-img">
                    <img
                      src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection4.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="best-right-cap">
                <div className="best-single mb-30">
                  <div className="single-cap">
                    <h4>
                      Menz Winter
                      <br /> Jacket
                    </h4>
                  </div>
                  <div className="single-img">
                    <img
                      src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection5.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ paddingLeft: "60px", paddingRight: "60px" }}
        className="latest-section"
      >
        <div
          style={{
            backgroundImage:
              "url('https://preview.colorlib.com/theme/estore/assets/img/collection/latest-offer.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
          className="latest position-relative d-flex align-items-center"
        >
          <div className="container" style={{ maxWidth: "1170px" }}>
            <div className="row d-flex align-items-center">
              <div className="col-md-6 col-xl-5 col-lg-5">
                <div className="latest-caption position-relative">
                  <h2
                    style={{
                      fontSize: "45px",
                      fontWeight: "700",
                      lineHeight: "1.3",
                      marginBottom: "19px",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    Get Our <br /> Latest Offers Now
                  </h2>
                  <p style={{ marginBottom: "55px", fontSize: "20px" }}>
                    Subscrube News Letter
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-5 col-lg-5">
                <div className="latest-subscribe position-relative">
                  <form action="">
                    <input
                      type="email"
                      placeholder="Your Email Here"
                      style={{
                        height: "60px",
                        width: "100%",
                        padding: "10px 32px",
                        borderRadius: "30px",
                        border: "none",
                        outline: "none",
                        overflow: "visible",
                      }}
                    />
                    <button>Shop Now</button>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="man position-absolute"
              style={{ left: "34px", bottom: "-80px" }}
            >
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="shop-method-area section-padding30"
        style={{ paddingTop: "200px", paddingBottom: "175px" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-method mb-40">
                <i
                  style={{ fontSize: "45px", marginBottom: "25px" }}
                  className="fa-solid fa-truck-fast"
                ></i>
                <h6>Free Shipping Method</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-method mb-40">
                <i
                  style={{ fontSize: "45px", marginBottom: "25px" }}
                  className="fa-solid fa-unlock"
                ></i>
                <h6>Secure Payment System</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-method mb-40">
                <i
                  style={{ fontSize: "45px", marginBottom: "25px" }}
                  className="fa-solid fa-arrows-rotate"
                ></i>
                <h6>Secure Payment System</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="gallery-wrapper lf-padding"
        style={{
          paddingLeft: "60px",
          paddingRight: "60px",
          marginBottom: "150px",
        }}
      >
        <div className="gallery-area">
          <div className="container-fluid">
            <div className="row gal">
              <div className="gallery-items" style={{ width: "20%" }}>
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery1.jpg"
                  alt=""
                />
              </div>
              <div className="gallery-items" style={{ width: "20%" }}>
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery2.jpg"
                  alt=""
                />
              </div>
              <div className="gallery-items" style={{ width: "20%" }}>
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery3.jpg"
                  alt=""
                />
              </div>
              <div className="gallery-items" style={{ width: "20%" }}>
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery4.jpg"
                  alt=""
                />
              </div>
              <div className="gallery-items" style={{ width: "20%" }}>
                <img
                  src="	https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories
