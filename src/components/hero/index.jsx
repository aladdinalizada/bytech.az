import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero-section">
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.desc")}</p>
    </div>
  );
};

export default Hero;
