import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

export const StickyCTA: React.FC = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 border border-white/20"
      aria-label={t('nav.order')}
    >
      <FiMessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">{t('nav.order')}</span>
    </button>
  );
};