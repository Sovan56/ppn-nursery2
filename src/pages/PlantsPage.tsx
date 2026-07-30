import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FeaturedPlantsSection } from '../components/public/FeaturedPlantsSection';
import { CategoriesSection } from '../components/public/CategoriesSection';
import { InquiryForm } from '../components/public/InquiryForm';
import { useApp } from '../context/AppContext';

export const PlantsPage: React.FC = () => {
  const { selectedCategory } = useApp();

  return (
    <div className="animate-fade-in">
      <Breadcrumbs pageTitle="Plants & Saplings" category={selectedCategory !== 'All' ? selectedCategory : undefined} />
      <div className="bg-[#2E7D32] text-white py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-['Poppins']">
          Explore Plants & Saplings
        </h1>
        <p className="text-xs sm:text-sm text-[#A5D6A7] mt-2 max-w-xl mx-auto">
          Over 250+ acclimatized plant varieties including indoor air purifiers, flowering saplings, grafted fruit trees, and bonsai.
        </p>
      </div>
      <FeaturedPlantsSection />
      <CategoriesSection />
      <InquiryForm />
    </div>
  );
};
