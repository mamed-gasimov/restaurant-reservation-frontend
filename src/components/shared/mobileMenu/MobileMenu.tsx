import { Link } from "react-router-dom";

import { ROUTES } from "@router/routeNames";
import mobileMenuCss from "./mobile.module.css";

interface Props {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ open, setIsOpen }: Props) => {
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <aside
      className={`${mobileMenuCss.mobileMenu} ${
        open ? mobileMenuCss.open : ""
      }`}
    >
      <nav>
        <ul className={mobileMenuCss.navItems}>
          <li>
            <Link to={ROUTES.home} onClick={closeMobileMenu}>
              Restaurants
            </Link>
          </li>
          <li>
            <Link to={ROUTES.register} onClick={closeMobileMenu}>
              Register
            </Link>
          </li>
          <li>
            <Link to={ROUTES.login} onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MobileMenu;
