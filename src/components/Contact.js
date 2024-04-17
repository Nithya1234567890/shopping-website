import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <>
      <section class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="contact-title">Get in Touch</h2>
            </div>
            <div class="col-lg-8">
              <form
              style={{fontWeight:"bolder"}}
                class="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="form-group" style={{fontWeight:"bolder"}}>
                      <textarea
                        class="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder=" Enter Message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <button
                    type="submit"
                    class="button btn btn-primary p-4"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-3 offset-lg-1">
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-home"></i>
                </span>
                <div class="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-tablet"></i>
                </span>
                <div class="media-body">
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-email"></i>
                </span>
                <div class="media-body">
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

export default Contact;
