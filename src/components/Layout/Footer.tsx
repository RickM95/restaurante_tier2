import React from 'react';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../../contexts/LanguageContext';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background text-muted-foreground border-t border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-x-1/2" />
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="GourmetPrime Logo" className="w-10 h-10 rounded-full shadow-[0_0_15px_hsl(var(--primary)/0.3)]" />
              <span className="heading-font text-2xl font-bold text-foreground">
                Gourmet<span className="text-primary">Prime</span>
              </span>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="heading-font text-xl font-bold text-foreground mb-6 tracking-wide">{t('contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <FiMapPin className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">{t('contact.address')}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FiPhone className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">{t('contact.phone')}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FiMail className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">{t('contact.email')}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FiClock className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">{t('contact.hours')}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-font text-xl font-bold text-foreground mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="hover:text-primary transition-colors font-light">
                  {t('nav.menu')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors font-light">
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors font-light">
                  {t('nav.contact')}
                </a>
              </li>
              <li>
                <a href="#order" className="hover:text-primary transition-colors font-light">
                  {t('nav.order')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="heading-font text-xl font-bold text-foreground mb-6 tracking-wide">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors font-light">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors font-light">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
            <p className="mt-12 text-sm text-muted-foreground font-light">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};