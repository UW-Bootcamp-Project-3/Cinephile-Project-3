import React from "react";
import { useAppContext } from "../libs/contextLib";

function Login() {
  const { userHasAuthenticated } = useAppContext();

  const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#exampleInputEmail1').value.trim();
    const password = document.querySelector('#exampleInputPassword1').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser
        document.location.replace('/');
        userHasAuthenticated(true);
      } else {
        alert(response.statusText);
      }
    }
  };

  return (
    <div className="container">
      <form>
      <div className="header col-md-3 ">
          <h4>
            <strong>Login</strong>
          </h4>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            style={{ width: "370px" }}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control input-sm"
            id="exampleInputPassword1"
            placeholder="Password"
            style={{ width: "370px" }}
          />
        </div>

        <button onClick={loginFormHandler} id="login-form" type="button" className="btn btn-warning">

          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
