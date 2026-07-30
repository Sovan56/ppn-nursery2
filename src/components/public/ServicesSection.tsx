import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Home,
  Trees,
  Building2,
  Building,
  Wrench,
  Truck,
  HelpCircle,
  Package,
  Hotel,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sprout
} from 'lucide-react';
import { motion } from 'motion/react';

export const ServicesSection: React.FC = () => {
  const { services, navigateTo } = useApp();

  const extraServicesList = [
    { title: 'Home Gardening Solutions', desc: 'Balcony & terrace setups, custom planter layouts, and organic potting mixes.', icon: Home },
    { title: 'Landscape Projects', desc: 'Turnkey residential villa garden landscaping, stone pathways, and turfing.', icon: Trees },
    { title: 'Corporate Landscaping', desc: 'Air-purifying green walls and desk planter subscriptions for modern offices.', icon: Building2 },
    { title: 'Apartment Community Gardens', desc: 'Boundary hedging, park greening, and entry gate plant installations.', icon: Building },
    { title: 'Garden Maintenance', desc: 'Periodic pruning, organic pest treatment, repotting, and soil enrichment.', icon: Wrench },
    { title: 'Plant Doorstep Delivery', desc: 'Safe vehicle delivery across Bengaluru with root-ball protection.', icon: Truck },
    { title: 'Garden Consultation', desc: 'Onsite light assessment, soil testing, and custom plant suitability advice.', icon: HelpCircle },
    { title: 'Bulk & Wholesale Orders', desc: 'Special volume discounts for developers, nurseries, and contractors.', icon: Package },
    { title: 'Hotels & Resorts Greening', desc: 'Luxury tropical foliage and pool landscape installations.', icon: Hotel },
    { title: 'Schools & Institutions', desc: 'Educational herb gardens and green campus landscaping.', icon: GraduationCap },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#A5D6A7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
            <Sprout className="w-4 h-4 text-[#2E7D32]" />
            <span>Comprehensive Gardening Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Our Professional Services
          </h2>
          <p className="text-sm sm:text-base text-[#355E3B]/80">
            From single plant delivery to large-scale landscape execution, PPN Nursery provides expert green solutions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraServicesList.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#F8FFF5] rounded-3xl p-6 border border-[#A5D6A7]/40 hover:border-[#2E7D32] hover:bg-white shadow-soft hover:shadow-soft-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] group-hover:bg-[#2E7D32] text-[#2E7D32] group-hover:text-white flex items-center justify-center transition-all mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-bold text-lg text-[#2E7D32] font-['Poppins'] mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#355E3B]/80 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#A5D6A7]/30 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2E7D32] group-hover:underline">
                    Request Consultation
                  </span>
                  <button
                    onClick={() => navigateTo('contact')}
                    className="w-8 h-8 rounded-full bg-[#E8F5E9] group-hover:bg-[#2E7D32] text-[#2E7D32] group-hover:text-white flex items-center justify-center transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
