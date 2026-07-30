import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AboutSection } from '../components/public/AboutSection';
import { WhyChooseUsSection } from '../components/public/WhyChooseUsSection';
import { ContactSection } from '../components/public/ContactSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumbs pageTitle="About Us" />
      <div className="bg-[#2E7D32] text-white py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-['Poppins']">
          About PPN Nursery
        </h1>
        <p className="text-xs sm:text-sm text-[#A5D6A7] mt-2 max-w-xl mx-auto">
          Bengaluru's premier garden center dedicated to offering healthy, acclimatized plants and expert gardening guidance.
        </p>
      </div>
      <AboutSection />
      <WhyChooseUsSection />
      <ContactSection />
    </div>
  );
};
