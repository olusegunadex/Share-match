import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import { useAuth } from "../src/useAuth/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // we need this to keep track if user has submitted the form or not
  const [signUpStarted, setSignupStarted] = useState(false);
  const { signIn, user, error, setError } = useAuth();
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const startSignup = async (e) => {
    e.preventDefault();
    setError(null);
    // once startSignup has been called set signUpStarted to be true
    setSignupStarted(true);
    await signIn(userEmail, userPassword);

    setSignupStarted(false);
    navigate("/dashboard");
  };
  console.log(user);
  return (
    <div className="loginpageflex">
      <div className="loginpagebox1">
        <h2>Log in</h2>
        <p>Enter your credentials to access your account</p>
        <div>
          <form onSubmit={startSignup} className="loginform">
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
              // wont do anything, buttons in a form would always||automaticaLLY SUBMIT A FORM
              // onClick={UserContextProvider.signUp}
            >
              {!signUpStarted ? "Login" : "Loading..."}
            </button>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            Have an account? <Link to="/register">Sign up</Link>
          </p>
          <p>
            <Link to="/">Jump to Home </Link>
          </p>
        </div>
      </div>
      <div className="loginpagebox2">
        <h4>Welcome back buddy!</h4>
        <p>How would you like some fresh meat today?</p>
        <img
          src="https://cdn.pmnewsnigeria.com/wp-content/uploads/2022/01/cattle-cow-696x392-1.jpg"
          alt="cow"
          className="homeimage"
        />
      </div>
    </div>
  );
};

export default Login;
