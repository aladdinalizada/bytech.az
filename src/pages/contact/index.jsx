import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
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

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Adınız</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Adınızı daxil edin" })}
            placeholder="Adınızı daxil edin"
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email daxil edin",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Düzgün email ünvanı daxil edin",
              },
            })}
            placeholder="Email ünvanınızı daxil edin"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <label htmlFor="message">Mesajınız</label>
          <textarea
            id="message"
            rows="5"
            {...register("message", { required: "Mesajınızı yazın" })}
            placeholder="Mesajınızı yazın"
          ></textarea>
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}

          <button type="submit">Göndər</button>

          {isSubmitSuccessful && (
            <p className="success-message">Mesajınız uğurla göndərildi!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
