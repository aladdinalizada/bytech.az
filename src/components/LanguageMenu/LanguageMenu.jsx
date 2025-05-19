import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const LanguageMenu = () => {
  const { language, changeLanguage } = useContext(AppContext);

  return (
    <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">EN</option>
      <option value="az">AZ</option>
    </select>
  );
};

export default LanguageMenu;
