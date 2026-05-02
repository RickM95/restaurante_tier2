import React from 'react';
import { FiStar, FiPlus } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import { useCurrency } from '../../contexts/CurrencyContext';

export const Menu: React.FC = () => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const { formatHNL, formatUSD, hnlToUsd } = useCurrency();

  const menuItems = [
    { id: 1, tag: 'bestSeller', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop' },
    { id: 2, tag: 'recommended', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop' },
    { id: 3, tag: null, img: 'https://images.unsplash.com/photo-1524182620961-7aa69389928d?q=80&w=800&auto=format&fit=crop' },
    { id: 4, tag: null, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop' },
    { id: 5, tag: 'bestSeller', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop' },
    { id: 6, tag: null, img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop' },
  ];

  const handleAddToCart = (item: any) => {
    const hnlPrice = parseFloat(t(`menu.item${item.id}.price` as any));
    addToCart({
      id: item.id,
      name: t(`menu.item${item.id}.name` as any),
      price: formatHNL(hnlPrice),
    });
  };

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
          {menuItems.map((item) => {
            const hnlPrice = parseFloat(t(`menu.item${item.id}.price` as any));
            const usdPrice = hnlToUsd(hnlPrice);

            return (
              <div
                key={item.id}
                className={`relative glass-card rounded-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 ${
                  item.tag === 'bestSeller' ? 'border-primary/50 dark:border-primary/50 shadow-[0_10px_30px_rgba(220,38,38,0.1)]' : ''
                }`}
              >
                {item.tag && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className={`flex items-center gap-1 px-3 py-1.5 ${item.tag === 'bestSeller' ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-accent to-primary'} text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                      <FiStar className="w-3 h-3 fill-white" />
                      <span>{t(`menu.tag.${item.tag}` as any)}</span>
                    </div>
                  </div>
                )}
                <div className="h-56 relative overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
                  <img 
                    src={item.img} 
                    alt={t(`menu.item${item.id}.name` as any)}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                </div>
                <div className="p-6 relative z-20 bg-card">
                  <div className="flex flex-col mb-4">
                    <h3 className="heading-font text-2xl font-bold text-foreground">
                      {t(`menu.item${item.id}.name` as any)}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xl font-bold text-primary">
                        {formatHNL(hnlPrice)}
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-md border border-border">
                        {formatUSD(usdPrice)}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed min-h-[3rem]">
                    {t(`menu.item${item.id}.desc` as any)}
                  </p>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiPlus className="w-5 h-5" />
                    {t('cart.add')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#order"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t('nav.order')}
          </a>
        </div>
      </div>
    </section>
  );
};