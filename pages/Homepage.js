import { Link, useNavigate } from "react-router-dom";
import { auth } from "../src/config/Firebase";
import { useAuth } from "../src/useAuth/useAuth";

export default function Homepage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log("user homepage", user);

  function handleLogin() {
    navigate("/login");
  }

  function handleRegister() {
    navigate("/register");
  }

  return (
    <div>
      <div className="nav">
        <div className="navlogo"> Sharematch </div>
        <div className="navitems">
          <Link to="/dashboard">Dashboard</Link> <Link to="/login">About</Link>{" "}
          <Link to="/login">Contact</Link> <Link to="/login">FAQs</Link>{" "}
        </div>
        <div>
          {!user ? (
            <div className="navbuttons">
              <button className="ctabuttons" onClick={handleLogin}>
                Login
              </button>
              <button className="ctabuttons" onClick={handleRegister}>
                Sign Up
              </button>
            </div>
          ) : (
            <div> You are logged in as {user.email} </div>
          )}
        </div>
      </div>
      <div className="contentbody">
        <div className="contentbox1">
          <h1>Welcome to ShareMatch</h1>
          <h4>The more the merrier</h4>
          <p>
            We are simplifying the way you share foods with your friends,
            colleagues, partners and associates
          </p>
          <button className="ctabuttons" onClick={handleLogin}>
            Get Started!
          </button>
        </div>
        <div className="contentbox2">
          <img
            src="https://global-uploads.webflow.com/5e465eaf479e4cc0ef41f077/5ed609baf722b825410adb9c_5ec3714af9aaf9787943a936_sharing-a-meal-opti.jpg"
            alt="pix"
            className="homeimage"
          />
        </div>
      </div>
    </div>
  );
}
