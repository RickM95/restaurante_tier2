import React from 'react';
import { FiStar } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

export const Menu: React.FC = () => {
  const { t } = useLanguage();

  const menuItems = [
    { id: 1, popular: true, img: '/src/assets/menu-item-1.png' },
    { id: 2, popular: true, img: '/src/assets/menu-item-2.png' },
    { id: 3, popular: false, img: '/src/assets/menu-item-3.png' },
    { id: 4, popular: false, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop' },
    { id: 5, popular: true, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop' },
    { id: 6, popular: false, img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section id="menu" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[5rem] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[5rem] translate-y-1/2 -translate-x-1/3" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('menu.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            {t('menu.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`relative glass-card rounded-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 ${
                item.popular ? 'border-primary/50 dark:border-primary/50 shadow-[0_10px_30px_rgba(220,38,38,0.1)]' : ''
              }`}
            >
              {item.popular && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    <FiStar className="w-3 h-3 fill-white" />
                    <span>{t('menu.mostPopular')}</span>
                  </div>
                </div>
              )}
              {/* Image placeholder with overlay */}
              <div className="h-56 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${item.img}')` }} />
              </div>
              <div className="p-6 relative z-20 bg-card">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="heading-font text-2xl font-bold text-foreground">
                    {t(`menu.item${item.id}.name` as any)}
                  </h3>
                  <span className="text-xl font-bold text-primary">
                    {t(`menu.item${item.id}.price` as any)}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {t(`menu.item${item.id}.desc` as any)}
                </p>
                <button className="w-full py-3 border border-primary/20 text-foreground font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};