import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { FaLaptop, FaLifeRing, FaEnvelope, FaCloud } from "react-icons/fa";
const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // services açarını alırıq (object)
  const services = t("serviceslist", { returnObjects: true });
  const icons = {
    itconsulting: <FaLaptop />,
    itsupport: <FaLifeRing />,
    corporativemail: <FaEnvelope />,
    cloudmail: <FaCloud />,
  };

  return (
    <section className="services-container">
      <h2 className="section-title">{t("services")}</h2>
      <div className="services-list">
        {services &&
          Object.keys(services).map((key) => {
            const service = services[key];
            return (
              <div
                key={key}
                className="service-card"
                onClick={() => navigate(`/services/${key}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-icon">{icons[key]}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Services;
