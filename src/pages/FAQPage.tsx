import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQSection } from '../components/public/FAQSection';

export const FAQPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumbs pageTitle="Frequently Asked Questions" />
      <div className="bg-[#2E7D32] text-white py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-['Poppins']">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-[#A5D6A7] mt-2 max-w-xl mx-auto">
          Everything you need to know about visiting PPN Nursery, placing orders, and plant maintenance.
        </p>
      </div>
      <FAQSection />
    </div>
  );
};
