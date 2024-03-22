import { useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "@router/routeNames";
import { Navbar } from "@components/index";
import headerCss from "./header.module.css";
import MobileMenu from "../mobileMenu/MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className={headerCss.mainHeader}>
        <div className={headerCss.logo}>
          <Link to={ROUTES.home}>BookNow</Link>
        </div>
        <Navbar />
        <button className={headerCss.mobileMenuBtn} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <MobileMenu open={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
