import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: React.FC = () => {
  const { faqs, settings, navigateTo } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FFF5] border-b border-[#A5D6A7]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
            <HelpCircle className="w-4 h-4 text-[#2E7D32]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#355E3B]/80">
            Find quick answers regarding our nursery location, plant care, delivery, and landscaping services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-[#2E7D32] shadow-soft'
                    : 'border-[#A5D6A7]/40 hover:border-[#66BB6A]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-[#2E7D32] font-['Poppins']">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#2E7D32] text-white' : 'text-[#2E7D32]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#355E3B]/90 leading-relaxed border-t border-[#A5D6A7]/20 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 p-6 bg-white rounded-3xl border border-[#A5D6A7]/50 shadow-soft text-center sm:flex items-center justify-between gap-4">
          <div className="text-left mb-4 sm:mb-0">
            <h4 className="font-bold text-base text-[#2E7D32] font-['Poppins']">
              Have a specific question not answered here?
            </h4>
            <p className="text-xs text-[#355E3B]/80 mt-0.5">
              Call us directly at {settings.phone} or chat with our team on WhatsApp.
            </p>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-green-gradient text-white px-5 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap shadow-soft hover:shadow-soft-lg transition-all"
          >
            Ask Us Directly
          </button>
        </div>
      </div>
    </section>
  );
};
