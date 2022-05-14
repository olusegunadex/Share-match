import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../src/useAuth/useAuth";

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // we need this to keep track if user has submitted the form or not
  const [signUpStarted, setSignupStarted] = useState(false);
  const { signUp, user, error, setError } = useAuth();
  const startSignup = async (e) => {
    e.preventDefault();
    setError(null);
    // once startSignup has been called set signUpStarted to be true
    setSignupStarted(true);
    await signUp(userEmail, userPassword);

    setSignupStarted(false);
  };
  console.log(user);
  return (
    <div className="loginpageflex">
      <div className="loginpagebox1">
        <h2>Sign Up</h2>
        <p>Create a new user account</p>
        <div>
          <form className="loginform" onSubmit={startSignup}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="johndoe@abc.com"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
            <button
              // disable this button once signup hAS started so users dont submit the form twice
              disabled={signUpStarted}
              className="register-btn"

              // wont do anything, buttons in a form would always||automaticaLLY SUBMIT A FORM
              // onClick={UserContextProvider.signUp}
            >
              {!signUpStarted ? "REGISTER ACCOUNT" : "Creating Account"}
            </button>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            Have an account? <Link to="/login">Sign In</Link>
          </p>
          <p>
            <Link to="/dashboard">Go back home</Link>
          </p>
        </div>
      </div>
      <div className="registerpagebox2">
        <h4>Get in here!</h4>
        <p>Let's do great stuffs together!</p>
        <img
          src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="cow"
          className="homeimage"
        />
      </div>
    </div>
  );
};

export default Register;
