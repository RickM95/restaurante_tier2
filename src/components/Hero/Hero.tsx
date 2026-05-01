import React from 'react';
import heroImg from '../../assets/hero-bg.png';
import { useLanguage } from '../../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleOrderClick = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-[hsl(var(--primary)/0.2)] z-0" />
      <div className="container-custom py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-semibold tracking-wider uppercase text-foreground/90">{t('hero.subtitle')}</span>
            </div>
            <h1 className="heading-font text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl font-light">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleOrderClick}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-full hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                {t('hero.cta')}
              </button>
              <a
                href="#menu"
                className="px-8 py-4 border-2 border-border text-foreground font-bold rounded-full hover:bg-foreground/10 transition-colors duration-300 text-center"
              >
                {t('nav.menu')}
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">4.9</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">15</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-auto aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-border z-10">
              <img
                src={heroImg}
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Liquid Glass elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/30 rounded-full blur-[3rem] animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/30 rounded-full blur-[4rem]" />
          </div>
        </div>
      </div>
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </section>
  );
};