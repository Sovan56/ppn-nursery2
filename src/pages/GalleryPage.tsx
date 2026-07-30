import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { GallerySection } from '../components/public/GallerySection';

export const GalleryPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumbs pageTitle="Nursery Gallery" />
      <div className="bg-[#2E7D32] text-white py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-['Poppins']">
          PPN Nursery Photo Gallery
        </h1>
        <p className="text-xs sm:text-sm text-[#A5D6A7] mt-2 max-w-xl mx-auto">
          Explore photos of our lush nursery displays in Battarahalli, Bengaluru and completed villa landscaping projects.
        </p>
      </div>
      <GallerySection />
    </div>
  );
};
