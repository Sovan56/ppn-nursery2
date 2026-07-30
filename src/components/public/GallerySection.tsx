import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sprout, ZoomIn, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export const GallerySection: React.FC = () => {
  const { gallery, setLightboxImage } = useApp();
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Plants', 'Nursery', 'Landscapes', 'Accessories'];

  const filteredGallery = gallery.filter((item) => {
    if (activeTab === 'All') return true;
    return item.category.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#A5D6A7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
            <Sprout className="w-4 h-4 text-[#2E7D32]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E7D32] font-['Poppins']">
            PPN Nursery Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#355E3B]/80">
            Take a virtual tour of our lush nursery aisles, healthy plant varieties, and finished landscape projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                activeTab === tab
                  ? 'bg-[#2E7D32] text-white shadow-soft'
                  : 'bg-[#F8FFF5] text-[#355E3B] border border-[#A5D6A7]/40 hover:border-[#66BB6A]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() =>
                setLightboxImage({
                  url: item.image,
                  title: item.title,
                  category: item.category
                })
              }
              className="group relative h-72 rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg border border-[#A5D6A7]/40 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] uppercase font-bold text-[#2E7D32] bg-white/95 px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ZoomIn className="w-5 h-5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold text-base font-['Poppins'] group-hover:text-[#A5D6A7] transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
