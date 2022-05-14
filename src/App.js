import "./styles.css";
import { useContext } from "react";
import Login from "../pages/Login.js";
import {
  BrowserRouter,
  Navigate,
  Route,
  useOutlet,
  Routes
} from "react-router-dom";
import Register from "../pages/Register.js";
import Dashboard from "../pages/Dashboard.js";
import "@fontsource/montserrat";
import { useAuth } from "./useAuth/useAuth";
import Invoices from "../pages/Dashboard.js";
import Homepage from "../pages/Homepage.js";
import Data from "../src/Data.js";
import UserContextProvider from "./UserContext/UserContext";
import ProtectedRoute from "./UserContext/ProtectedRoute";

export default function App() {
  // const user = useContext(UserContextProvider);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
