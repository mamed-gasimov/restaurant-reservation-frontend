import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "@router/routeNames";
import { AuthContext } from "@context/authContext";
import navbarCss from "./navbar.module.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const { setUserId, setAuthToken, setIsAuth, isAuth, userId, authToken } =
    useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("restaurant-reservation-app");
    setUserId("");
    setAuthToken("");
    setIsAuth(false);
  };

  useEffect(() => {
    if (userId && authToken) {
      setIsAuth(true);
    }
  }, [authToken]);

  return (
    <nav>
      <ul className={navbarCss.navItems}>
        <li className={`${pathname === ROUTES.home ? navbarCss.selected : ""}`}>
          <Link to={ROUTES.home}>Restaurants</Link>
        </li>
        {!isAuth && (
          <>
            <li
              className={`${
                pathname === ROUTES.register ? navbarCss.selected : ""
              }`}
            >
              <Link to={ROUTES.register}>Register</Link>
            </li>
            <li
              className={`${
                pathname === ROUTES.login ? navbarCss.selected : ""
              }`}
            >
              <Link to={ROUTES.login}>Login</Link>
            </li>
          </>
        )}
        {isAuth && (
          <li>
            <Link to={ROUTES.login} onClick={handleLogout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
