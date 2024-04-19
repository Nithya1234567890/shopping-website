import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div
        className="d-flex justify-content-evenly align-items-center"
        style={{ backgroundColor: "#c0e8ff" }}
      >
        <img
          style={{ paddingLeft: 0 }}
          src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png"
          alt=""
        />
        <div className="disc">
          <p
            style={{
              fontFamily: "Dancing Script, cursive",
              fontOpticalSizing: "auto",
              fontSize: "3.5em",
              color: "blue",
            }}
          >
            60% discount
          </p>
          <h1 style={{ fontSize: "6.5em", fontFamily: "Bree Serif, serif", transform:"translate-X(5)"}}>
            Winter Collections
          </h1>
          <p style={{ fontSize: "2.5em", fontFamily: "Lobster, sans-serif" }}>
            Best cloth collection by 2024!
          </p>
        </div>
      </div>
      <div className="category-section" style={{ padding: "5rem" }}>
        <div className="container-fluid">
          <div className="row">
            <h1
              className="col-lg-12 text-center"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "3rem",
                marginBottom: "5rem",
                fontWeight: "bolder",
              }}
            >
              Shop by Category
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-xl-4">
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg"
                  alt=""
                  style={{ position: "relative", width: "100%" }}
                />
                <div
                  className="product-desc"
                  style={{ position: "absolute", top: "33%", right: "30px" }}
                >
                  <p
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: "bolder",
                      fontSize: "2.6rem",
                      fontOpticalSizing: "auto",
                    }}
                  >
                    Women's
                  </p>
                  <button
                    className="btn btn-warning"
                    style={{ borderRadius: "20px" }}
                  >
                    Best New Deals
                  </button>
                  <p
                    style={{
                      fontFamily: "Pacifico,cursive",
                      color: "blue",
                      marginTop: "-7px",
                      fontWeight: "400",
                    }}
                  >
                    New Collections
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg"
                  alt=""
                  style={{ position: "relative", width: "100%" }}
                />
                <div
                  className="product-desc"
                  style={{ position: "absolute", top: "33%", right: "30px" }}
                >
                  <p
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: "bolder",
                      fontSize: "2.6rem",
                      fontOpticalSizing: "auto",
                    }}
                  >
                    Winter Cloth
                  </p>
                  <button
                    className="btn btn-warning"
                    style={{ borderRadius: "20px" }}
                  >
                    Best New Deals
                  </button>
                  <p
                    style={{
                      fontFamily: "Pacifico,cursive",
                      color: "blue",
                      marginTop: "-7px",
                      fontWeight: "400",
                    }}
                  >
                    New Collections
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg"
                  alt=""
                  style={{ position: "relative", width: "100%" }}
                />
                <div
                  className="product-desc"
                  style={{ position: "absolute", top: "33%", right: "30px" }}
                >
                  <p
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: "bolder",
                      fontSize: "2.6rem",
                      fontOpticalSizing: "auto",
                    }}
                  >
                    Men's Cloth
                  </p>
                  <button
                    className="btn btn-warning"
                    style={{ borderRadius: "20px" }}
                  >
                    Best New Deals
                  </button>
                  <p
                    style={{
                      fontFamily: "Pacifico,cursive",
                      color: "blue",
                      marginTop: "-7px",
                      fontWeight: "400",
                    }}
                  >
                    New Collections
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-section" style={{ padding: "6rem 14em" }}>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-8"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "3.5rem",
                fontWeight: "bolder",
              }}
            >
              Latest Products
            </div>
            <div className="col-md-4" style={{ padding: "2.5rem" }}>
              <div
                className="container d-flex justify-content-evenly align-items-center"
                style={{ fontSize: "1.4em", color: "gray" }}
              >
                <p className="c">All</p>
                <p className="c">New</p>
                <p className="c">Featured</p>
                <p className="c">Offer</p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="products col-md-6 col-xl-4 col-lg-4 d-flex align-items-center p-2"
              style={{ flexDirection: "column" }}
            >
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png"
                alt=""
              />
              <div className="ratings my-4 mb-3">
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.5rem",
                  fontOpticalSizing: "auto",
                }}
              >
                Dress with Details
              </p>
              <pre
                style={{
                  fontSize: "1.6rem",
                  fontOpticalSizing: "auto",
                }}
              >
                $40.00{" "}
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  $60.00
                </span>
              </pre>
            </div>
            <div
              className="products col-md-6 col-xl-4 col-lg-4 d-flex align-items-center p-2"
              style={{ flexDirection: "column" }}
            >
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png"
                alt=""
              />
              <div className="ratings my-4 mb-3">
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.5rem",
                  fontOpticalSizing: "auto",
                }}
              >
                Dress with Details
              </p>
              <pre
                style={{
                  fontSize: "1.6rem",
                  fontOpticalSizing: "auto",
                }}
              >
                $40.00{" "}
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  $60.00
                </span>
              </pre>
            </div>
            <div
              className="products col-md-6 col-xl-4 col-lg-4 d-flex align-items-center p-2"
              style={{ flexDirection: "column" }}
            >
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product5.png"
                alt=""
              />
              <div className="ratings my-4 mb-3">
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.5rem",
                  fontOpticalSizing: "auto",
                }}
              >
                Dress with Details
              </p>
              <pre
                style={{
                  fontSize: "1.6rem",
                  fontOpticalSizing: "auto",
                }}
              >
                $40.00{" "}
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  $60.00
                </span>
              </pre>
            </div>
            <div
              className="products col-md-6 col-xl-4 col-lg-4 d-flex align-items-center p-2"
              style={{ flexDirection: "column" }}
            >
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product4.png"
                alt=""
              />
              <div className="ratings my-4 mb-3">
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.5rem",
                  fontOpticalSizing: "auto",
                }}
              >
                Dress with Details
              </p>
              <pre
                style={{
                  fontSize: "1.6rem",
                  fontOpticalSizing: "auto",
                }}
              >
                $40.00{" "}
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  $60.00
                </span>
              </pre>
            </div>
            <div
              className="products col-md-6 col-xl-4 col-lg-4 d-flex align-items-center p-2"
              style={{ flexDirection: "column" }}
            >
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product3.png"
                alt=""
              />
              <div className="ratings my-4 mb-3">
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.5rem",
                  fontOpticalSizing: "auto",
                }}
              >
                Dress with Details
              </p>
              <pre
                style={{
                  fontSize: "1.6rem",
                  fontOpticalSizing: "auto",
                }}
              >
                $40.00{" "}
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  $60.00
                </span>
              </pre>
            </div>
            <div
              className="products col-md-6 col-xl-4 col-lg-4 d-flex align-items-center p-2"
              style={{ flexDirection: "column" }}
            >
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png"
                alt=""
              />
              <div className="ratings my-4 mb-3">
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#ffbe37",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
                <span>
                  <i
                    style={{
                      padding: "4px",
                      fontSize: "22px",
                      color: "#bcbcbc",
                    }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.5rem",
                  fontOpticalSizing: "auto",
                }}
              >
                Dress with Details
              </p>
              <pre
                style={{
                  fontSize: "1.6rem",
                  fontOpticalSizing: "auto",
                }}
              >
                $40.00{" "}
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  $60.00
                </span>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="best-product-section"
        style={{ margin: "6rem", padding: "3rem 8rem", position: "relative" }}
      >
        <div
          className="row d-flex justify-content-between align-items-end position-relative"
          style={{ backgroundColor: "rgb(255 239 214)" }}
        >
          <div className="d-none position-absolute d-lg-inline-block d-xl-inline-block">
            <img
              style={{ paddingLeft: "21%" }}
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-man.png"
              alt=""
            />
          </div>
          <div className="img col-xl-2 col-lg-2">
            <div
              className="d-none d-xl-block d-lg-block"
              style={{ marginLeft: "90%" }}
            >
              <div className="vertical-text">
                <span>Manz</span>
              </div>
            </div>
          </div>
          <div
            className="box col-md-8 col-xl-8 col-lg-8"
            style={{ padding: "11rem" }}
          >
            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "3.5rem",
                fontWeight: "bolder",
              }}
            >
              Find The Best Product from Our Shop
            </h1>
            <p>
              Designers who are interested in creating animated design website
            </p>
            <button style={{ borderRadius: "20px" }} className="btn btn-dark">
              Shop Now
            </button>
          </div>
          <div className="d-md-inline shirts position-absolute">
            <img
              style={{ paddingLeft: "80%" }}
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-shape.png"
              alt=""
            />
          </div>
        </div>
      </div>
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
            <div className="row">
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
  );
};

export default Home;
