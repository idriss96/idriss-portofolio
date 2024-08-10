import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./languageSelector.scss";

const languageOptions = [{ value: "es" }, { value: "en" }];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <select
      className="language-selector"
      value={selectedLanguage.value}
      onChange={(e) =>
        handleLanguageChange(
          languageOptions.find((option) => option.value === e.target.value)
        )
      }
    >
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
