import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const { settings } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello PPN Nursery! I would like to inquire about plant varieties, prices, and delivery options in Bengaluru.`
  );

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 pointer-events-none">
      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-2xl bg-white text-[#2E7D32] border border-[#A5D6A7] shadow-soft-lg flex items-center justify-center hover:bg-[#F8FFF5] hover:scale-110 active:scale-95 transition-all"
          title="Scroll To Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${settings.phone.replace(/\s+/g, '')}`}
        className="pointer-events-auto w-12 h-12 rounded-2xl bg-[#2E7D32] text-white shadow-soft-lg flex items-center justify-center hover:bg-[#1B5E20] hover:scale-110 active:scale-95 transition-all group"
        title="Call Nursery Now"
      >
        <Phone className="w-5 h-5 group-hover:animate-bounce" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${settings.whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-2xl shadow-soft-lg hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all font-semibold text-xs"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="hidden sm:inline">WhatsApp Enquiry</span>
      </a>
    </div>
  );
};
