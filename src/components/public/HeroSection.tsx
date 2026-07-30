import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sprout,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Truck,
  Users,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { SafeImage } from '../common/SafeImage';

export const HeroSection: React.FC = () => {
  const { navigateTo, settings } = useApp();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FFF5] via-[#E8F5E9]/60 to-[#F8FFF5] py-12 md:py-20 lg:py-24 border-b border-[#A5D6A7]/30">
      {/* Decorative leaf blur shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A5D6A7]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#66BB6A]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
              <Sprout className="w-4 h-4 text-[#2E7D32]" />
              <span>Premium Garden Center in Bengaluru</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#2E7D32] leading-[1.15] font-['Poppins']">
              Your One-Stop Destination for <span className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] bg-clip-text text-transparent">Premium Plants</span> & Gardening Solutions
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#355E3B]/90 leading-relaxed font-normal max-w-2xl">
              Discover a vast selection of healthy indoor plants, flowering saplings, grafted fruit trees, architectural palms, and professional landscaping services right here in Bengaluru.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
              {[
                '✔ Premium Quality Plants',
                '✔ Garden Experts Onsite',
                '✔ Home & Landscape Solutions',
                '✔ Delivery Available Across Bengaluru'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2E7D32]">
                  <CheckCircle2 className="w-4 h-4 text-[#66BB6A] shrink-0" />
                  <span>{feat.replace('✔ ', '')}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateTo('plants')}
                className="bg-green-gradient hover:bg-leaf-gradient text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-soft hover:shadow-soft-lg transition-all flex items-center gap-2 group"
              >
                <span>Explore Plants</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="bg-white hover:bg-[#F8FFF5] text-[#2E7D32] border border-[#A5D6A7] px-5 py-3.5 rounded-2xl font-bold text-sm shadow-sm transition-all"
              >
                Contact Us
              </button>

              <a
                href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                className="bg-[#E8F5E9] hover:bg-[#A5D6A7]/30 text-[#2E7D32] px-5 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Stat Highlights */}
            <div className="pt-6 border-t border-[#A5D6A7]/30 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-black text-[#2E7D32] font-['Poppins']">5.0 ⭐</div>
                <div className="text-xs text-[#355E3B]/80 font-medium">321+ Google Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#2E7D32] font-['Poppins']">10,000+</div>
                <div className="text-xs text-[#355E3B]/80 font-medium">Plants Sold</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#2E7D32] font-['Poppins']">250+</div>
                <div className="text-xs text-[#355E3B]/80 font-medium">Plant Varieties</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-white p-2">
              <SafeImage
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
                alt="PPN Nursery Plants Display Bengaluru"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-md border border-[#A5D6A7]/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2E7D32]">100% Healthy Saplings</div>
                  <div className="text-[11px] text-[#355E3B]/80">Nurtured in Organic Compost</div>
                </div>
              </div>

              {/* Delivery Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-md border border-[#A5D6A7]/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2E7D32]">Doorstep Delivery</div>
                  <div className="text-[11px] text-[#355E3B]/80">Bengaluru Citywide</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
