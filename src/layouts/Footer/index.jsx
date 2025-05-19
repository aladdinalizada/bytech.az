import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Bytech</h2>
          <p>{t("footerAbout")}</p>
        </div>

        <div className="footer-services">
          <h3>{t("ourServices")}</h3>
          <ul>
            <li>
              <Link to="/services/consulting">
                {t("IT Konsultasiya Xidməti")}
              </Link>
            </li>
            <li>
              <Link to="/services/support">{t("Texniki Dəstək Xidməti")}</Link>
            </li>
            <li>
              <Link to="/services/mail">{t("Korporativ Mail Xidməti")}</Link>
            </li>
            <li>
              <Link to="/services/cloud">{t("Cloud Server Xidməti")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>{t("contactTitle")}</h3>
          <p>{t("location")}</p>
          <a href="mailto:info@bytech.az">info@bytech.az</a>
          <a href="tel:+994105291829">+994 10 529 18 29</a>
        </div>

        <div className="footer-social">
          <h3>{t("socialTitle")}</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bytech.az. Bütün hüquqlar qorunur.</p>
      </div>
    </footer>
  );
};

export default Footer;
