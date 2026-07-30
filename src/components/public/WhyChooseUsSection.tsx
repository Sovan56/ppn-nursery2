import React from 'react';
import {
  Award,
  BadgePercent,
  UserCheck,
  Truck,
  Sprout,
  Grid,
  Trees,
  Smile,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      title: 'Premium Quality Plants',
      description: 'Hand-picked, acclimatized plants grown with nutrient-dense organic soil.',
      icon: Award
    },
    {
      title: 'Affordable Pricing',
      description: 'Direct nursery rates for both retail plant lovers and bulk wholesale buyers.',
      icon: BadgePercent
    },
    {
      title: 'Expert Gardening Advice',
      description: 'Onsite horticulturists guide you on light, watering, and pest control.',
      icon: UserCheck
    },
    {
      title: 'Delivery Available',
      description: 'Safe, eco-friendly vehicle delivery across Bengaluru with root protection.',
      icon: Truck
    },
    {
      title: 'Healthy Saplings',
      description: 'Disease-resistant, strong root-ball saplings guaranteed to flourish.',
      icon: Sprout
    },
    {
      title: 'Wide Variety',
      description: 'Over 250+ varieties including rare indoor greenery and grafted fruits.',
      icon: Grid
    },
    {
      title: 'Landscape Solutions',
      description: 'Turnkey garden design, lawn turfing, and boundary planting for villas.',
      icon: Trees
    },
    {
      title: 'Customer Satisfaction',
      description: '⭐ 5.0 Google rating backed by 321+ happy local plant buyers.',
      icon: Smile
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FFF5] border-b border-[#A5D6A7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
            <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
            <span>Why Choose PPN Nursery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Bengaluru's Most Trusted Garden Center
          </h2>
          <p className="text-sm sm:text-base text-[#355E3B]/80">
            We take pride in providing top-tier healthy plants, fair pricing, and personalized guidance for every gardener.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-soft-lg border border-[#A5D6A7]/40 hover:border-[#2E7D32] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] group-hover:bg-[#2E7D32] text-[#2E7D32] group-hover:text-white flex items-center justify-center transition-all mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#2E7D32] font-['Poppins'] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#355E3B]/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
