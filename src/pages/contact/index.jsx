import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada formu serverə göndərmək üçün API çağırışı edə bilərsən.
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-container">
      <h2 className="section-title">Əlaqə</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>
            <strong>Ünvan:</strong> Baku, Azerbaijan
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@bytech.az">info@bytech.az</a>
          </p>
          <p>
            <strong>Telefon:</strong>{" "}
            <a href="tel:+994105291829">+994 10 529 18 29</a>
          </p>

          <div className="social-media">
            <p>Bizimlə sosial şəbəkələrdə əlaqə saxlayın:</p>
            <div className="icons">
              <a
                href="https://www.facebook.com/bytechaz"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/bytechaz"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/bytechaz"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Adınız</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Adınızı daxil edin"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email ünvanınızı daxil edin"
          />

          <label htmlFor="message">Mesajınız</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Mesajınızı yazın"
          ></textarea>

          <button type="submit">Göndər</button>
          {submitted && (
            <p className="success-message">Mesajınız uğurla göndərildi!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
