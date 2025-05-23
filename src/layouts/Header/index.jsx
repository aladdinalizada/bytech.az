import React, { useContext, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../context/AppContext";
// import Icons
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "/public/logo.png";
import LanguageMenu from "../../components/LanguageMenu/LanguageMenu";
// import Link
import { Link } from "react-router-dom";
// import "./index.css";
import "./index.css";

const Header = () => {
  const { t } = useTranslation();
  const { menuOpen, toggleMenu, closeMenu } = useContext(AppContext);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="bytech logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav ref={navRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">{t("home")}</Link>
          </li>

          {/* <li>{t("about")}</li> */}
          <li>
            <Link to="/services">{t("services")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("contact")}</Link>
          </li>
          <li className="mbilelang">
            <LanguageMenu />
          </li>
          <li className="close-btn" onClick={closeMenu}>
            {t("exit")}
          </li>
        </ul>
      </nav>

      <div className="rightcorner">
        <LanguageMenu />
      </div>
    </header>
  );
};

export default Header;
