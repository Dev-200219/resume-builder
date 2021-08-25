import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";

let SignUp = () => {
  let historyObj = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPass, setConfirmPass] = useState("");
  let user = useSelector((state) => state);

  return (
    <>
      {user ? <Redirect to="/" /> : ""};
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Sign Up!!</h1>

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
                  setPassword(e.currentTarget.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.currentTarget.value);
                }}
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (password === confirmPass)
                  auth.createUserWithEmailAndPassword(email, password);
              }}
              className="btn btn-primary"
            >
              Sign Up
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                historyObj.push("/login");
              }}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
