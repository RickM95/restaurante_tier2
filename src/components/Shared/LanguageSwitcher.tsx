import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
      aria-label="Toggle language"
    >
      <FiGlobe className="w-5 h-5 text-foreground" />
      <span className="text-sm font-semibold text-foreground uppercase">
        {language}
      </span>
    </button>
  );
};