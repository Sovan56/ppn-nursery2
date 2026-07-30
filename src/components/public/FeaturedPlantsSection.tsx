import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sprout,
  Search,
  Star,
  CheckCircle2,
  Send,
  Sun,
  Droplets,
  Heart
} from 'lucide-react';
import { motion } from 'motion/react';

export const FeaturedPlantsSection: React.FC = () => {
  const {
    plants,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    setEnquiryPlant
  } = useApp();

  const filterCategories = ['All', ...categories.map((c) => c.name)];

  const filteredPlants = plants.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#A5D6A7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
            <Sprout className="w-4 h-4 text-[#2E7D32]" />
            <span>Handpicked Greenery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Featured Plants & Saplings
          </h2>
          <p className="text-sm sm:text-base text-[#355E3B]/80">
            Browse our nursery collection. Click 'Enquire Now' to check availability or order delivery across Bengaluru.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search by plant name (e.g. Areca Palm, Mango, Rose)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-[#F8FFF5] border border-[#A5D6A7] text-[#355E3B] focus:outline-none focus:border-[#2E7D32]"
            />
            <Search className="w-4 h-4 text-[#2E7D32] absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Category Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {filterCategories.map((catName) => {
              const isSelected = selectedCategory.toLowerCase() === catName.toLowerCase();
              return (
                <button
                  key={catName}
                  onClick={() => setSelectedCategory(catName)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#2E7D32] text-white shadow-soft'
                      : 'bg-[#F8FFF5] text-[#355E3B] border border-[#A5D6A7]/40 hover:border-[#66BB6A]'
                  }`}
                >
                  {catName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Plants Grid */}
        {filteredPlants.length === 0 ? (
          <div className="bg-[#F8FFF5] rounded-3xl p-12 text-center border border-dashed border-[#A5D6A7] max-w-lg mx-auto">
            <Sprout className="w-12 h-12 text-[#66BB6A] mx-auto mb-3" />
            <h3 className="font-bold text-[#2E7D32] text-lg font-['Poppins']">No plants found</h3>
            <p className="text-xs text-[#355E3B]/80 mt-1">
              Try adjusting your search query or selecting a different plant category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4 bg-[#2E7D32] text-white px-4 py-2 rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant, idx) => (
              <motion.div
                key={plant.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                className="bg-white rounded-3xl p-4 shadow-soft hover:shadow-soft-lg border border-[#A5D6A7]/40 hover:border-[#66BB6A] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative h-52 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />

                    {plant.isPopular && (
                      <span className="absolute top-3 left-3 bg-amber-400 text-amber-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-950 text-amber-950" />
                        Popular Choice
                      </span>
                    )}

                    <span
                      className={`absolute bottom-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-md ${
                        plant.inStock
                          ? 'bg-emerald-900/80 text-emerald-200'
                          : 'bg-red-900/80 text-red-200'
                      }`}
                    >
                      {plant.inStock ? '✔ In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#66BB6A] uppercase tracking-wide">
                      {plant.category}
                    </span>
                    <span className="text-xs font-semibold text-[#355E3B]/70 flex items-center gap-1">
                      <Sun className="w-3 h-3 text-amber-500" />
                      {plant.sunlight}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#2E7D32] font-['Poppins'] leading-snug">
                    {plant.name}
                  </h3>

                  <p className="text-xs text-[#355E3B]/80 mt-1.5 line-clamp-2 leading-relaxed">
                    {plant.description}
                  </p>

                  {/* Plant Care Specs */}
                  <div className="mt-3 py-2 px-3 rounded-xl bg-[#F8FFF5] border border-[#A5D6A7]/30 flex items-center justify-between text-[11px] text-[#355E3B]">
                    <span className="flex items-center gap-1">
                      <Droplets className="w-3 h-3 text-blue-500" />
                      Water: <strong>{plant.water}</strong>
                    </span>
                    <span>•</span>
                    <span>Care: <strong>{plant.careLevel}</strong></span>
                  </div>
                </div>

                {/* Footer Price & Action */}
                <div className="pt-4 mt-3 border-t border-[#A5D6A7]/20 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-[#355E3B]/70 uppercase block">Starting at</span>
                    <span className="font-extrabold text-lg text-[#2E7D32] font-['Poppins']">
                      ₹{plant.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setEnquiryPlant(plant)}
                    className="bg-green-gradient hover:bg-leaf-gradient text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-soft flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
