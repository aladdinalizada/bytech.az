import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const service = t(`serviceslist.${serviceId}`, { returnObjects: true });

  if (!service) {
    return (
      <div className="service-detail-container">
        <p>Xidmət tapılmadı</p>
        <button className="back-button" onClick={() => navigate(-1)}>
          Geri
        </button>
      </div>
    );
  }

  return (
    <section className="service-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Geri
      </button>
      <h1 className="service-title">{service.name}</h1>
      <p className="service-description">{service.description}</p>
      <ul className="service-options-list">
        {service.options.map((option, idx) => (
          <li key={idx} className="service-option-item">
            {option}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceDetail;
