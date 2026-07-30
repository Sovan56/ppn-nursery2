import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ReviewsSection } from '../components/public/ReviewsSection';

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumbs pageTitle="Testimonials & Reviews" />
      <div className="bg-[#2E7D32] text-white py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-['Poppins']">
          Customer Testimonials
        </h1>
        <p className="text-xs sm:text-sm text-[#A5D6A7] mt-2 max-w-xl mx-auto">
          Read verified feedback from our happy plant buyers and landscaping clients in Bengaluru.
        </p>
      </div>
      <ReviewsSection />
    </div>
  );
};
