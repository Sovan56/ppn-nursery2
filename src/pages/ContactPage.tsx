import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ContactSection } from '../components/public/ContactSection';
import { InquiryForm } from '../components/public/InquiryForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumbs pageTitle="Contact Us" />
      <div className="bg-[#2E7D32] text-white py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-['Poppins']">
          Contact PPN Nursery
        </h1>
        <p className="text-xs sm:text-sm text-[#A5D6A7] mt-2 max-w-xl mx-auto">
          Visit us at Battarahalli, Bengaluru or send an online quote request for plants and landscaping.
        </p>
      </div>
      <ContactSection />
      <InquiryForm />
    </div>
  );
};
