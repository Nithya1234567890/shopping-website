import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form
                style={{ fontWeight: "bolder" }}
                className="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-12">
                    <div
                      className="form-group"
                      style={{ fontWeight: "bolder" }}
                    >
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.target.placeholder = "Enter Message";
                        }}
                        placeholder=" Enter Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.target.placeholder = "Enter Name";
                        }}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.target.placeholder = "Enter Email Address";
                        }}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.target.placeholder = "Enter Subject";
                        }}
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="button btn btn-primary p-4">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                <i class="fa-solid fa-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                <i class="fa-regular fa-envelope"></i>
                </span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  );
};

export default Contact;
