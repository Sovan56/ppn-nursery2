import React from 'react';
import { useApp } from '../context/AppContext';
import { Sprout, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#F8FFF5] text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-soft border border-[#A5D6A7]/40 space-y-4">
        <div className="w-16 h-16 rounded-3xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mx-auto">
          <Sprout className="w-10 h-10" />
        </div>

        <h1 className="text-4xl font-extrabold text-[#2E7D32] font-['Poppins']">404</h1>
        <h2 className="text-xl font-bold text-[#355E3B]">Page Not Found</h2>

        <p className="text-xs text-[#355E3B]/80 leading-relaxed">
          The page you are looking for does not exist or has been moved. Explore our lush plant catalog or return to the main homepage.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigateTo('home')}
            className="w-full sm:w-auto bg-green-gradient text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-soft flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </button>

          <button
            onClick={() => navigateTo('plants')}
            className="w-full sm:w-auto bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
          >
            <span>Explore Plants</span>
          </button>
        </div>
      </div>
    </div>
  );
};
