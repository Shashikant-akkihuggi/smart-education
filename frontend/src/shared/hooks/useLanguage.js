import { useState, useEffect } from 'react';
import { SUPPORTED_LANGUAGES } from '../utils/languages';

const STORAGE_KEY = 'bhashamitra_selected_lang';

export function useLanguage() {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const found = SUPPORTED_LANGUAGES.find((l) => l.code === saved);
        if (found) return found;
      }
    } catch (e) {
      // LocalStorage access fallback
    }
    return SUPPORTED_LANGUAGES[0]; // Default Hindi
  });

  const changeLanguage = (langCode) => {
    const matched = SUPPORTED_LANGUAGES.find((l) => l.code === langCode);
    if (matched) {
      setCurrentLang(matched);
      try {
        localStorage.setItem(STORAGE_KEY, langCode);
      } catch (e) {
        // ignore
      }
    }
  };

  return {
    currentLang,
    changeLanguage,
    allLanguages: SUPPORTED_LANGUAGES
  };
}

