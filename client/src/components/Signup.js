import React from "react";
import { useAppContext } from "../libs/contextLib";

function Signup() {
  const { userHasAuthenticated } = useAppContext();

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        userHasAuthenticated(true);
      } else {
        alert(response.statusText);
      }
    }
  };

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
              onClick={signupFormHandler}
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
