import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default () => {
  const { signOut } = useAuth(false)[1];
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut();
    navigate("/signin", { replace: true });
  };

  return (
    <nav className="navbar bg-light">
      <div className="container nav">
        <Link className="nav-link text-uppercase fs-5" to="/">
          List Of Users
        </Link>
        <button className="btn btn-outline-success" onClick={handleSignOut}>
          SignOut
        </button>
      </div>
    </nav>
  );
};
