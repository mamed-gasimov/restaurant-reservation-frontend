import { Link } from "react-router-dom";

import { ROUTES } from "@router/routeNames";
import navbarCss from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={navbarCss.navItems}>
        <li>
          <Link to={ROUTES.home}>Restaurants</Link>
        </li>
        <li>
          <Link to={ROUTES.register}>Register</Link>
        </li>
        <li>
          <Link to={ROUTES.login}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
