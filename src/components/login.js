import React from "react";

function Login() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">
            <strong>Email address</strong>
          </label>
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
          <label for="exampleInputPassword1">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control input-sm"
            id="exampleInputPassword1 input-sm"
            placeholder="Password"
            style={{ width: "370px" }}
          />
        </div>

        <button type="button" className="btn btn-warning">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
