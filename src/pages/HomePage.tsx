import React from 'react';
import { HeroSection } from '../components/public/HeroSection';
import { AboutSection } from '../components/public/AboutSection';
import { CategoriesSection } from '../components/public/CategoriesSection';
import { FeaturedPlantsSection } from '../components/public/FeaturedPlantsSection';
import { WhyChooseUsSection } from '../components/public/WhyChooseUsSection';
import { GallerySection } from '../components/public/GallerySection';
import { ReviewsSection } from '../components/public/ReviewsSection';
import { ServicesSection } from '../components/public/ServicesSection';
import { FAQSection } from '../components/public/FAQSection';
import { ContactSection } from '../components/public/ContactSection';
import { InquiryForm } from '../components/public/InquiryForm';

export const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-0">
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <FeaturedPlantsSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ReviewsSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <InquiryForm />
    </div>
  );
};
