import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ServicesSection } from '../components/public/ServicesSection';
import { InquiryForm } from '../components/public/InquiryForm';

export const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumbs pageTitle="Our Services" />
      <div className="bg-[#2E7D32] text-white py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-['Poppins']">
          Gardening & Landscaping Services
        </h1>
        <p className="text-xs sm:text-sm text-[#A5D6A7] mt-2 max-w-xl mx-auto">
          From balcony garden setups and plant delivery to full-scale residential villa landscaping in Bengaluru.
        </p>
      </div>
      <ServicesSection />
      <InquiryForm />
    </div>
  );
};
