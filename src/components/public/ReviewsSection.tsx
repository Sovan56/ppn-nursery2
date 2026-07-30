import React from 'react';
import { useApp } from '../../context/AppContext';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  const { testimonials, settings } = useApp();

  return (
    <section className="py-16 md:py-24 bg-[#F8FFF5] border-b border-[#A5D6A7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Overall Score Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>5.0 Star Rating on Google</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E7D32] font-['Poppins']">
            What Our Customers Say
          </h2>

          <p className="text-sm sm:text-base text-[#355E3B]/80">
            Real feedback from garden enthusiasts, home buyers, and villa owners across Bengaluru.
          </p>

          {/* Rating Summary Box */}
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-2xl border border-[#A5D6A7]/50 shadow-soft">
              <span className="font-black text-xl text-[#2E7D32] font-['Poppins']">{settings.rating}.0</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-[#355E3B]/80 font-medium ml-1">
                ({settings.totalReviews}+ Local Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-soft-lg border border-[#A5D6A7]/40 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#A5D6A7]/30 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#355E3B]/90 italic leading-relaxed mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Customer Info Footer */}
              <div className="pt-4 border-t border-[#A5D6A7]/20 flex items-center gap-3">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#66BB6A]"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-sm text-[#2E7D32] truncate font-['Poppins']">
                      {item.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" title="Verified Buyer" />
                  </div>
                  <p className="text-[11px] text-[#355E3B]/70 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#66BB6A]" />
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
