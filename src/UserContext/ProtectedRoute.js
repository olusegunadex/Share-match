import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../useAuth/useAuth";

const ProtectedRoute = () => {
  const user = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <div>{outlet}</div>;
};

export default ProtectedRoute;
