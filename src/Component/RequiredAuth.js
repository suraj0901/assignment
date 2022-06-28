import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export default ({ children }) => {
  const isAuthenticated = useAuthContext()[0];
  if (!isAuthenticated) return <Navigate to="/signin" replace />;
  return children;
};
