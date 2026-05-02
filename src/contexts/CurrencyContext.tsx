import React, { createContext, useContext, useState } from 'react';

interface CurrencyContextType {
  exchangeRate: {
    buy: number;
    sell: number;
  };
  hnlToUsd: (hnl: number) => number;
  formatHNL: (amount: number) => string;
  formatUSD: (amount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Hardcoded initial rates, could be fetched from an API in a real scenario
  const [exchangeRate] = useState({
    buy: 24.55,
    sell: 24.85,
  });

  const hnlToUsd = (hnl: number) => {
    // Using the sell rate to provide the "higher USD value" (cost in USD)
    // Actually, if we want the "higher USD value" for the dish price display, 
    // we should use the lower rate (buy) so the USD number is higher? 
    // Wait: Price in USD = Price in HNL / Rate. 
    // To get a HIGHER USD value, we divide by a SMALLER Rate.
    return hnl / exchangeRate.buy;
  };

  const formatHNL = (amount: number) => {
    return new Intl.NumberFormat('es-HN', {
      style: 'currency',
      currency: 'HNL',
    }).format(amount);
  };

  const formatUSD = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <CurrencyContext.Provider value={{ exchangeRate, hnlToUsd, formatHNL, formatUSD }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export const CurrencyTicker: React.FC = () => {
  const { exchangeRate } = useCurrency();
  
  return (
    <div className="bg-primary/10 border-b border-primary/20 py-2 overflow-hidden whitespace-nowrap">
      <div className="flex items-center gap-12 animate-marquee">
        <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          USD/HNL Buy: <span className="text-foreground">{exchangeRate.buy.toFixed(2)}</span>
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          USD/HNL Sell: <span className="text-foreground">{exchangeRate.sell.toFixed(2)}</span>
        </span>
        {/* Repeat for marquee effect */}
        <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          USD/HNL Buy: <span className="text-foreground">{exchangeRate.buy.toFixed(2)}</span>
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          USD/HNL Sell: <span className="text-foreground">{exchangeRate.sell.toFixed(2)}</span>
        </span>
      </div>
    </div>
  );
};
