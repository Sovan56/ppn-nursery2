import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, ZoomIn } from 'lucide-react';

export const LightboxModal: React.FC = () => {
  const { lightboxImage, setLightboxImage } = useApp();

  if (!lightboxImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={() => setLightboxImage(null)}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-soft-lg border border-[#A5D6A7]/40"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setLightboxImage(null)}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
          <img
            src={lightboxImage.url}
            alt={lightboxImage.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        <div className="p-6 bg-white flex items-center justify-between gap-4">
          <div>
            {lightboxImage.category && (
              <span className="text-[10px] uppercase font-bold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-full">
                {lightboxImage.category}
              </span>
            )}
            <h3 className="font-bold text-[#2E7D32] text-lg font-['Poppins'] mt-1">
              {lightboxImage.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#355E3B]/70 font-medium hidden sm:inline">
              PPN Nursery Bengaluru Showcase
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
