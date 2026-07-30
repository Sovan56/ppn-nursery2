import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sprout,
  Check,
  Heart,
  Users,
  Award,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const { navigateTo } = useApp();

  const stats = [
    { label: 'Happy Customers', value: '5,000+', icon: Users },
    { label: 'Plants Sold', value: '10,000+', icon: Sprout },
    { label: 'Years Experience', value: '15+ Yrs', icon: Calendar },
    { label: 'Plant Varieties', value: '250+', icon: Award },
  ];

  const highlights = [
    'Premium quality handpicked plants',
    'Garden center with a wide collection',
    'Home gardening solutions & pot mixes',
    'Turnkey landscaping support',
    'Indoor & outdoor plant varieties',
    'Excellent customer service & garden care advice',
    'Doorstep delivery service available in Bengaluru'
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#A5D6A7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage & Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80"
                alt="PPN Nursery Greenery Bengaluru"
                className="w-full h-96 sm:h-[450px] object-cover rounded-3xl shadow-soft-lg border-2 border-[#A5D6A7]/30"
              />

              {/* Inset Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 h-56 rounded-3xl overflow-hidden border-4 border-white shadow-soft-lg">
                <img
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80"
                  alt="Bonsai and Saplings"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-[#2E7D32] text-white p-4 rounded-2xl shadow-soft max-w-xs">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Trusted Garden Center</span>
                </div>
                <div className="font-extrabold text-sm font-['Poppins']">
                  Located at Battarahalli, Near TC Palya Circle
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
              <Sprout className="w-4 h-4 text-[#2E7D32]" />
              <span>About PPN Nursery</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2E7D32] font-['Poppins'] leading-tight">
              Bringing Nature's Finest Greenery to Your Home & Workspaces
            </h2>

            <p className="text-sm sm:text-base text-[#355E3B]/90 leading-relaxed">
              At <strong>PPN Nursery</strong>, we believe every home and workplace deserves healthy, vibrant greenery. Located conveniently at TC Palya Cross Road, Battarahalli, Bengaluru, our nursery offers an expansive sanctuary of acclimatized plants nurtured with organic fertilizers.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#355E3B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="pt-6 border-t border-[#A5D6A7]/30 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((st, idx) => {
                const IconComp = st.icon;
                return (
                  <div key={idx} className="bg-[#F8FFF5] p-3.5 rounded-2xl border border-[#A5D6A7]/40 text-center">
                    <IconComp className="w-5 h-5 text-[#2E7D32] mx-auto mb-1" />
                    <div className="font-extrabold text-xl text-[#2E7D32] font-['Poppins']">
                      {st.value}
                    </div>
                    <div className="text-[11px] text-[#355E3B]/80 font-semibold mt-0.5">
                      {st.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Read More / Contact CTA */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => navigateTo('about')}
                className="bg-green-gradient hover:bg-leaf-gradient text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-soft transition-all"
              >
                Learn More About Us
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="text-[#2E7D32] hover:underline font-bold text-xs"
              >
                Visit Our Nursery →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
