import React, { useState } from 'react';
import { FiCheck, FiShoppingBag, FiPhone } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

export const OrderSection: React.FC = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'delivery'>('pickup');
  const [orderDetails, setOrderDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const generateWhatsAppMessage = () => {
    const optionText = deliveryOption === 'pickup' ? t('order.form.pickup') : t('order.form.delivery');
    return `Hello! I'd like to place an order:\n\nName: ${name}\nDelivery Option: ${optionText}\nOrder Details: ${orderDetails}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !orderDetails.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const phoneRaw = t('contact.phone');
    // Keep only digits and '+' for international numbers
    const phoneNumber = phoneRaw.replace(/[^\d+]/g, '');
    const message = encodeURIComponent(generateWhatsAppMessage());
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
            <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4">{t('order.form.title')}</h2>
            <p className="text-xl text-muted-foreground font-light">
              Place your order directly via WhatsApp for quick confirmation.
            </p>
          </div>

          <div className="glass-panel border border-border rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 to-transparent pointer-events-none" />
            
            {submitted ? (
              <div className="text-center py-12 relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#25D366]/20 mb-6 border border-[#25D366]/30 shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                  <FiCheck className="w-12 h-12 text-[#25D366]" />
                </div>
                <h3 className="heading-font text-3xl font-bold mb-4">{t('order.form.success')}</h3>
                <p className="text-muted-foreground">
                  Your order has been sent to our WhatsApp. We'll confirm shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {/* Name */}
                <div>
                  <label className="block text-lg font-semibold mb-3 text-foreground/90">
                    {t('order.form.name')}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('order.form.namePlaceholder')}
                    className="w-full px-6 py-4 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Delivery Option */}
                <div>
                  <label className="block text-lg font-semibold mb-3 text-foreground/90">
                    {t('order.form.deliveryOption')}
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => setDeliveryOption('pickup')}
                      className={`flex-1 px-6 py-4 rounded-xl border-2 text-center font-bold tracking-wide transition-all duration-300 ${
                        deliveryOption === 'pickup'
                          ? 'border-primary bg-primary/20 text-foreground shadow-[0_0_15px_hsl(var(--primary)/0.3)]'
                          : 'border-border bg-card text-muted-foreground hover:bg-muted hover:border-primary/40'
                      }`}
                    >
                      {t('order.form.pickup')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryOption('delivery')}
                      className={`flex-1 px-6 py-4 rounded-xl border-2 text-center font-bold tracking-wide transition-all duration-300 ${
                        deliveryOption === 'delivery'
                          ? 'border-primary bg-primary/20 text-foreground shadow-[0_0_15px_hsl(var(--primary)/0.3)]'
                          : 'border-border bg-card text-muted-foreground hover:bg-muted hover:border-primary/40'
                      }`}
                    >
                      {t('order.form.delivery')}
                    </button>
                  </div>
                </div>

                {/* Order Details */}
                <div>
                  <label className="block text-lg font-semibold mb-3 text-foreground/90">
                    {t('order.form.orderDetails')}
                  </label>
                  <textarea
                    value={orderDetails}
                    onChange={(e) => setOrderDetails(e.target.value)}
                    placeholder={t('order.form.orderPlaceholder')}
                    rows={5}
                    className="w-full px-6 py-4 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xl rounded-xl hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 border border-transparent"
                >
                  <FiShoppingBag className="w-6 h-6" />
                  {t('order.form.submit')}
                </button>
              </form>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border relative z-10">
              <div className="text-center group">
                <div className="text-3xl font-bold text-secondary mb-1 group-hover:scale-110 transition-transform duration-300">5-10 min</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Average response time</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-secondary mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Order support</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-secondary mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Secure & private</div>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6 text-lg font-light">
              Prefer to call? Dial <span className="font-semibold text-foreground">{t('contact.phone')}</span> for immediate assistance.
            </p>
            <a
              href={`tel:${t('contact.phone').replace(/\D/g, '')}`}
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