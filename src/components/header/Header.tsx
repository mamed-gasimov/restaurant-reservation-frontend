import { Link } from "react-router-dom";

import { ROUTES } from "@router/routeNames";
import { Navbar } from "@components/index";
import headerCss from "./header.module.css";

const Header = () => {
  return (
    <header className={headerCss.mainHeader}>
      <div className={headerCss.logo}>
        <Link to={ROUTES.home}>Restaurant Reservation</Link>
      </div>
      <Navbar />
      <button className={headerCss.mobileMenuBtn}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
