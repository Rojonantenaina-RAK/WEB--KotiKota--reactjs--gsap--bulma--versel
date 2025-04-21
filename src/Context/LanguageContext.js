import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('french');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    import(`./../Assets/LanguageTranslation/${language}.json`)
      .then((res) => setTranslations(res))
      .catch((err) => console.error("Erreur chargement traduction", err));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: (key) => translations[key] || key }}>
      {children}
    </LanguageContext.Provider>
  );
};
