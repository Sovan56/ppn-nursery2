import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sprout, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SafeImage } from '../common/SafeImage';

export const CategoriesSection: React.FC = () => {
  const { categories, navigateTo, setSelectedCategory } = useApp();

  const handleCategoryClick = (catName: string) => {
    setSelectedCategory(catName);
    navigateTo('plants');
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FFF5] border-b border-[#A5D6A7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
            <Sprout className="w-4 h-4 text-[#2E7D32]" />
            <span>Curated Collections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Explore Plant Categories
          </h2>
          <p className="text-sm sm:text-base text-[#355E3B]/80">
            From tropical houseplants to air-cleansing palms and fruit saplings, find healthy greenery tailored for your home & garden.
          </p>
        </div>

        {/* Categories Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => handleCategoryClick(cat.name)}
              className="bg-white rounded-3xl p-4 shadow-soft hover:shadow-soft-lg border border-[#A5D6A7]/40 hover:border-[#66BB6A] transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                  <SafeImage
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-extrabold text-[#2E7D32]">
                    {cat.itemCount || 12}+ Varieties
                  </div>
                </div>

                <h3 className="font-bold text-lg text-[#2E7D32] font-['Poppins'] group-hover:text-[#66BB6A] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#355E3B]/80 mt-1.5 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#A5D6A7]/20 flex items-center justify-between">
                <span className="text-xs font-bold text-[#2E7D32] group-hover:underline">
                  View Collection
                </span>
                <div className="w-8 h-8 rounded-full bg-[#E8F5E9] group-hover:bg-[#2E7D32] text-[#2E7D32] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
