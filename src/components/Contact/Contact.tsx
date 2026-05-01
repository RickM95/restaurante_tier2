import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[5rem] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[5rem] translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              {[
                { icon: FiMapPin, title: 'Address', content: t('contact.address') },
                { icon: FiPhone, title: 'Phone', content: t('contact.phone') },
                { icon: FiMail, title: 'Email', content: t('contact.email') },
                { icon: FiClock, title: 'Opening Hours', content: t('contact.hours') }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-font text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-12 p-8 glass-panel rounded-2xl border border-primary/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="heading-font text-2xl font-bold text-foreground mb-4 relative z-10">
                Ready to dine with us?
              </h3>
              <p className="text-muted-foreground mb-6 relative z-10">
                Reserve your table now for an unforgettable experience.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:-translate-y-1 transition-all duration-300 relative z-10">
                Make a Reservation
              </button>
            </div>
          </div>

          {/* Google Map */}
          <div className="glass-card rounded-[2rem] overflow-hidden shadow-2xl h-full min-h-[500px] border border-primary/10 p-2">
            <div className="rounded-[1.5rem] overflow-hidden w-full h-full relative">
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.177858804427!2d-73.98784468459418!3d40.70555197933207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a315cdf4c9b%3A0x8b934de5cae6f7a!2s123%20Gourmet%20Ave%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1629999400000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
                className="w-full h-full grayscale-[50%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};