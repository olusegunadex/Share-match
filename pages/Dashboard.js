import { signOut } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../src/config/Firebase";
import { useAuth } from "../src/useAuth/useAuth";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
    setUser(null);
    console.log("user-info", user);
  };

  return (
    <div>
      <button className="signout-btn" onClick={logout}>
        Sign Out
      </button>
      <p>
        Back to login? <Link to="/login">Click</Link>{" "}
      </p>
    </div>
  );
}
