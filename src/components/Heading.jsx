import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../storage/UserContext";
import { logOut } from "../service/UserService";

const Heading = () => {
  const { signedIn, signOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    const shouldLogOut = window.confirm("Da li ste sigurni?");
    if (shouldLogOut) {
      logOut().then(({ data }) => {
        signOutUser(data);
        navigate("/login");
      });
    }
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Zoo app</span>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/animals" className="btn btn-success" aria-current="page">
              Animals
            </Link>
          </li>
       
            <li className="nav-item">
              <Link to="/add" className="btn btn-success" aria-current="page">
                Add Animal
              </Link>
            </li>
         
            <>
              <li className="nav-item">
                <Link to="/register" className="btn btn-success" aria-current="page">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="btn btn-success" aria-current="page">
                  Sign In
                </Link>
              </li>
            </>
      
            <li className="nav-item">
              <button
                className="btn btn-danger"
                type="submit"
                onClick={() => handleLogOut()}
              >
                Log Out
              </button>
            </li>
         
        </ul>
      </header>
    </div>
  );
};

export default Heading;