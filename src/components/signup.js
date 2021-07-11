import React from "react";

function Signup() {
  return (
    <div
      className="base-container"
      // style={{ backgroundcolor: "blue" }}
      // ref={this?.props.containerRef}
    >
      <form>
        <div className="header col-md-3 ">
          <h4>
            <strong>Sign-up</strong>
          </h4>
        </div>

        <div className="content ">
          <div className="form ">
          <div className="form-group">
              <input
                type="text"
                id="username-signup"
                className="form-control"
                placeholder="Username"
                style={{ width: "370px", margin: "20px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="email-signup"
                className="form-control"
                placeholder="Email"
                style={{ width: "370px", margin: "20px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password-signup"
                className="form-control"
                placeholder="Password"
                style={{ width: "370px", margin: "20px" }}
              />
            </div>
            <button
              type="button"
              id="signup-form"
              className="btn btn-warning"
              style={{ margin: "20px" }}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
