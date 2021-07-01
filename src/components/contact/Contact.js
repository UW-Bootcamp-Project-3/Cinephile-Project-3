import React, { Component } from "react";
import reactDom from "react-dom";
import { link } from "react-router-dom";
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
                  <strong>Contact Us</strong>
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
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                  <link className="btn btn-outline-primary text-uppercase">
                    <i className="fa fa-paper-plane-o" aria-hidden="true" />
                    <i className="fab fa-telegram-plane" />
                  </link>
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
