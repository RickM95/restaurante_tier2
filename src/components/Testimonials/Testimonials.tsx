import React from 'react';
import { FiStar } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    { id: 1, rating: 5 },
    { id: 2, rating: 5 },
    { id: 3, rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-24 bg-accent text-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[4rem] -translate-y-1/2" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[4rem]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl z-0" />
              
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'text-secondary fill-secondary'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-foreground text-lg italic mb-8 relative z-10">
                "{t(`testimonials.review${review.id}.text` as any)}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary shadow-inner" />
                <div>
                  <div className="font-bold text-foreground">
                    {t(`testimonials.review${review.id}.author` as any)}
                  </div>
                  <div className="text-primary text-sm font-semibold uppercase tracking-wider">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { metric: '4.9', label: 'Google Rating' },
            { metric: '500+', label: 'Happy Customers' },
            { metric: '15', label: 'Years Experience' },
            { metric: '100%', label: 'Satisfaction Guarantee' }
          ].map((badge, idx) => (
            <div key={idx} className="text-center p-6 glass-panel rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="heading-font text-4xl font-bold text-primary mb-2 relative z-10">{badge.metric}</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-semibold relative z-10">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};