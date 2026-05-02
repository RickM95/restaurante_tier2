import React from 'react';
import { FiUsers, FiTruck, FiClock } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

export const TrustSystem: React.FC = () => {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: t('trust.satisfied'),
      value: '500+',
      color: 'text-primary',
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: t('trust.delivery'),
      value: t('trust.deliveryZone'),
      color: 'text-secondary',
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: t('trust.time'),
      value: t('trust.timeValue'),
      color: 'text-accent',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {trustItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className={`mb-4 ${item.color}`}>
            {item.icon}
          </div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            {item.title}
          </h4>
          <p className="text-xl font-bold text-foreground">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};
