import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";

let Login = () => {
  let historyObj = useHistory();
  let user = useSelector((state) => state.user);
  let [email, setEmail] = useState("");
  let [password, setPass] = useState("");
  return (
    <>
      {user ? <Redirect to="/" /> : ""}
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Login</h1>

          <form className="mt-4">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => {
                  setPass(e.currentTarget.value);
                }}
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                auth.signInWithEmailAndPassword(email, password);
              }}
              className="btn btn-primary"
            >
              Login
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                historyObj.push("/signup");
              }}
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
