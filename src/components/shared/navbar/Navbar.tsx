import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "@router/routeNames";
import navbarCss from "./navbar.module.css";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className={navbarCss.navItems}>
        <li className={`${pathname === ROUTES.home ? navbarCss.selected : ""}`}>
          <Link to={ROUTES.home}>Restaurants</Link>
        </li>
        <li
          className={`${
            pathname === ROUTES.register ? navbarCss.selected : ""
          }`}
        >
          <Link to={ROUTES.register}>Register</Link>
        </li>
        <li
          className={`${pathname === ROUTES.login ? navbarCss.selected : ""}`}
        >
          <Link to={ROUTES.login}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
