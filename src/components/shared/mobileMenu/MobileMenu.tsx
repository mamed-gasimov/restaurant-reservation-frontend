import { Link } from "react-router-dom";

import { ROUTES } from "@router/routeNames";
import mobileMenuCss from "./mobile.module.css";

const MobileMenu = () => {
  return (
    <aside className={mobileMenuCss.mobileMenu}>
      <nav>
        <ul className={mobileMenuCss.navItems}>
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
    </aside>
  );
};

export default MobileMenu;
