import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuth";

export default ({ children }) => {
  const { authState } = useAuthContext()[0];
  if (!authState) return <Navigate to="/signin" replace />;
  return children;
};
