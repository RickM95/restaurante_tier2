import React, { useState } from 'react';
import { FiCheck, FiShoppingBag, FiPhone, FiTrash2, FiPlus, FiMinus, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import { TrustSystem } from '../Shared/TrustSystem';
import { useCurrency } from '../../contexts/CurrencyContext';

export const OrderSection: React.FC = () => {
  const { t } = useLanguage();
  const { cart, updateQuantity, removeFromCart, totalPrice, generateWhatsAppMessage } = useCart();
  const { formatHNL, formatUSD, hnlToUsd } = useCurrency();
  const [name, setName] = useState('');
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'delivery'>('pickup');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // ... logic remains same, but generateWhatsAppMessage now works with the cart
    // which has formatted price strings.
    e.preventDefault();
    if (!name.trim() || (deliveryOption === 'delivery' && !address.trim())) {
      alert(t('common.error'));
      return;
    }

    if (cart.length === 0) {
      alert(t('cart.empty'));
      return;
    }

    const phoneNumber = '50431549045';
    const message = encodeURIComponent(generateWhatsAppMessage(name, deliveryOption, address));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="order" className="py-24 bg-background text-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[6rem] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[6rem] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
              <FiShoppingBag className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4 text-foreground">{t('order.form.title')}</h2>
            <p className="text-xl text-muted-foreground font-light dark:text-gray-300">
              {t('order.form.orderPlaceholder')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cart Summary */}
            <div className="bg-white dark:bg-card border border-border rounded-3xl p-6 shadow-xl h-fit">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                <FiShoppingBag className="text-primary" />
                {t('cart.title')}
              </h3>
              
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground dark:text-gray-400">{t('cart.empty')}</p>
                  <a href="#menu" className="text-primary font-semibold mt-2 inline-block hover:underline">
                    {t('nav.menu')}
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-muted/30 dark:bg-card/50 rounded-xl border border-border/50">
                      <div>
                        <h4 className="font-bold text-foreground">{item.name}</h4>
                        <div className="flex items-center gap-2">
                          <p className="text-primary font-bold">{item.price}</p>
                          <span className="text-[10px] font-bold text-muted-foreground uppercase">
                            ~ {formatUSD(hnlToUsd(parseFloat(item.price.replace(/[^0-9.]/g, ''))))}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-card rounded-lg border border-border overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-muted transition-colors text-foreground"
                          >
                            <FiMinus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-foreground">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-muted transition-colors text-foreground"
                          >
                            <FiPlus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex justify-between items-end">
                      <span className="text-xl font-bold text-foreground">{t('cart.total')}</span>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{formatHNL(totalPrice)}</div>
                        <div className="text-sm font-bold text-muted-foreground dark:text-gray-400">
                          {formatUSD(hnlToUsd(totalPrice))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-card border border-border rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 to-transparent pointer-events-none" />
              
              {submitted ? (
                <div className="text-center py-12 relative z-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#25D366]/20 mb-6 border border-[#25D366]/30 shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                    <FiCheck className="w-12 h-12 text-[#25D366]" />
                  </div>
                  <h3 className="heading-font text-3xl font-bold mb-4 text-foreground">{t('order.form.success')}</h3>
                  <p className="text-muted-foreground dark:text-gray-300">
                    Your order has been sent to our WhatsApp. We'll confirm shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-muted-foreground dark:text-gray-400 mb-2">
                      {t('order.form.name')}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('order.form.namePlaceholder')}
                      className="w-full px-6 py-4 bg-card border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-muted-foreground dark:text-gray-400 mb-2">
                      {t('order.form.deliveryOption')}
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setDeliveryOption('pickup')}
                        className={`flex-1 py-4 rounded-xl border-2 font-bold transition-all ${
                          deliveryOption === 'pickup' ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground dark:text-gray-400'
                        }`}
                      >
                        {t('order.form.pickup')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryOption('delivery')}
                        className={`flex-1 py-4 rounded-xl border-2 font-bold transition-all ${
                          deliveryOption === 'delivery' ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground dark:text-gray-400'
                        }`}
                      >
                        {t('order.form.delivery')}
                      </button>
                    </div>
                  </div>

                  {deliveryOption === 'delivery' && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                      <label className="block text-sm font-bold uppercase tracking-wider text-muted-foreground dark:text-gray-400 mb-2">
                        {t('cart.address')}
                      </label>
                      <div className="relative">
                        <FiMapPin className="absolute left-5 top-5 text-muted-foreground" />
                        <textarea
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder={t('cart.addressPlaceholder')}
                          rows={3}
                          className="w-full pl-12 pr-6 py-4 bg-card border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary transition-all resize-none placeholder:text-muted-foreground/50"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={cart.length === 0}
                    className="w-full py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xl rounded-xl hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiShoppingBag className="w-6 h-6" />
                    {t('cart.checkout')}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Trust System */}
          <TrustSystem />

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6 text-lg font-light">
              Prefer to call? Dial <span className="font-semibold text-foreground">{t('contact.phone')}</span>
            </p>
            <a
              href={`tel:50431549045`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-border text-foreground font-bold rounded-full hover:bg-muted transition-all duration-300"
            >
              <FiPhone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};