import React from 'react';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageSwitcher } from '../Shared/LanguageSwitcher';
import { ThemeSwitcher } from '../Shared/ThemeSwitcher';

export const Header: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.menu', href: '#menu' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-primary/10 shadow-sm pointer-events-none" />
      <div className="container-custom py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={logoImg} alt="GourmetPrime Logo" className="w-10 h-10 rounded-full shadow-lg group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-300" />
            <span className="heading-font text-2xl font-bold text-foreground">
              Gourmet<span className="text-primary">Prime</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-primary font-medium tracking-wide transition-colors"
              >
                {t(item.key as any)}
              </a>
            ))}
            <a
              href="#order"
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-md hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {t('nav.order')}
            </a>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};