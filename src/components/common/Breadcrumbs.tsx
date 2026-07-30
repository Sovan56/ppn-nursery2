import React from 'react';
import { useApp } from '../../context/AppContext';
import { PageRoute } from '../../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  pageTitle: string;
  category?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pageTitle, category }) => {
  const { navigateTo } = useApp();

  return (
    <nav className="py-3 px-4 sm:px-8 bg-[#E8F5E9]/50 border-b border-[#A5D6A7]/30">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#355E3B]/80 overflow-x-auto">
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center gap-1 hover:text-[#2E7D32] transition-colors shrink-0 font-medium"
        >
          <Home className="w-3.5 h-3.5 text-[#2E7D32]" />
          <span>Home</span>
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-[#A5D6A7] shrink-0" />

        {category ? (
          <>
            <button
              onClick={() => navigateTo('plants')}
              className="hover:text-[#2E7D32] transition-colors shrink-0 font-medium"
            >
              Plants
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#A5D6A7] shrink-0" />
            <span className="font-bold text-[#2E7D32] shrink-0">{category}</span>
          </>
        ) : (
          <span className="font-bold text-[#2E7D32] shrink-0">{pageTitle}</span>
        )}
      </div>
    </nav>
  );
};
