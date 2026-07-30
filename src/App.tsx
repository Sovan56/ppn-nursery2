import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingButtons } from './components/common/FloatingButtons';
import { EnquiryModal } from './components/common/EnquiryModal';
import { LightboxModal } from './components/common/LightboxModal';
import { ToastContainer } from './components/common/ToastContainer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlantsPage } from './pages/PlantsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  // Auto scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Hide main public Navbar & Footer if on Admin page
  const isAdminView = currentPage === 'admin';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FFF5] text-[#355E3B] font-['Inter'] selection:bg-[#A5D6A7] selection:text-[#1B5E20]">
      <ToastContainer />
      <EnquiryModal />
      <LightboxModal />

      {!isAdminView && <Navbar />}

      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'plants' && <PlantsPage />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'testimonials' && <TestimonialsPage />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'admin' && <AdminPage />}
        {currentPage === '404' && <NotFoundPage />}
      </main>

      {!isAdminView && <Footer />}
      {!isAdminView && <FloatingButtons />}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
