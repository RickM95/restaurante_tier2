import React from 'react';
import { FiMessageCircle, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../contexts/CartContext';

export const StickyCTA: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 items-end">
      {/* Cart Indicator / Scroll to Order */}
      {totalItems > 0 && (
        <a
          href="#order"
          className="flex items-center gap-2 bg-foreground text-background px-4 py-3 rounded-full shadow-2xl animate-bounce hover:scale-105 transition-all duration-300 border border-border"
        >
          <div className="relative">
            <FiShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          </div>
        </a>
      )}

      {/* Primary WhatsApp Button */}
      <a
        href="https://wa.me/50431549045"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <FiMessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-card border border-border text-foreground px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Order via WhatsApp
        </span>
      </a>
    </div>
  );
};