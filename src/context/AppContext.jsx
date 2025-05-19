import React, { createContext, useState, useEffect } from "react";
import i18n from "../../i18n"; // sənin i18n konfiqurasiya faylın

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "en");

  // Dil dəyişəndə həm i18n-ə bildiririk, həm context-də saxlayırıq
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // i18n-dən dil dəyişməsini dinləmək üçün (əgər xarici dəyişiklik olsa)
  useEffect(() => {
    const onLanguageChanged = (lng) => {
      setLanguage(lng);
    };
    i18n.on("languageChanged", onLanguageChanged);
    return () => {
      i18n.off("languageChanged", onLanguageChanged);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{ menuOpen, toggleMenu, closeMenu, language, changeLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
};
