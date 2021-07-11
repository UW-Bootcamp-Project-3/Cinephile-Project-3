import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              {" "}
              <strong> Our Location </strong>
            </h3>

            <div className="row">
              <div className="col-md-7">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1XVPXTlD_Ex3wzHqMQIrbTPItw0k6PGqi"
                  style={{
                    border: "0",
                    width: "100%",
                    height: "315px",
                    frameborder: "0",
                  }}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-md-5">
                <h4>
                  <strong>Contact us</strong>
                </h4>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control"
                      cols="30"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="button" className="btn btn-warning">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
