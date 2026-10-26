import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, DEFAULT_LANGUAGE } from '../i18n/translations';

const LanguageContext = createContext(null);

// Usa o idioma salvo; senão, o idioma do navegador (se existir); senão, português
function getInitialLanguage() {
  const saved = localStorage.getItem('language');
  if (saved && translations[saved]) return saved;

  const browser = navigator.language.slice(0, 2);
  return translations[browser] ? browser : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  // Atualiza o <html lang>, o título da aba e salva a escolha
  useEffect(() => {
    document.documentElement.lang = translations[language].locale;
    document.title = translations[language].app.title;
    localStorage.setItem('language', language);
  }, [language]);

  // t('faq.title') busca o texto no idioma atual
  const t = useCallback(
    (key) => {
      const value = key.split('.').reduce((obj, part) => obj?.[part], translations[language]);
      return value ?? key;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, t, locale: translations[language].locale }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage deve ser usado dentro de LanguageProvider');
  return context;
}