import React from 'react';
import { useApp } from '../../context/AppContext';
import { PageRoute } from '../../types';
import {
  Sprout,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ShieldCheck,
  ChevronRight,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings, navigateTo, categories, setSelectedCategory } = useApp();

  const handleCategoryClick = (catName: string) => {
    setSelectedCategory(catName);
    navigateTo('plants');
  };

  return (
    <footer className="bg-[#1B5E20] text-white pt-16 pb-8 border-t-4 border-[#66BB6A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#A5D6A7]/20">
          {/* Column 1: About & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#66BB6A] flex items-center justify-center text-white">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-['Poppins']">
                PPN Nursery
              </span>
            </div>
            <p className="text-sm text-[#A5D6A7] leading-relaxed">
              Your one-stop garden center in Bengaluru for premium healthy plants, indoor greenery, fruit saplings, exotic flowers, and expert landscaping solutions.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#66BB6A] flex items-center justify-center text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#66BB6A] flex items-center justify-center text-white transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={settings.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#66BB6A] flex items-center justify-center text-white transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg font-['Poppins'] text-white border-b border-[#A5D6A7]/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home Page', route: 'home' as PageRoute },
                { label: 'About PPN Nursery', route: 'about' as PageRoute },
                { label: 'Explore All Plants', route: 'plants' as PageRoute },
                { label: 'Nursery Photo Gallery', route: 'gallery' as PageRoute },
                { label: 'Landscaping Services', route: 'services' as PageRoute },
                { label: 'Customer Reviews', route: 'testimonials' as PageRoute },
                { label: 'Frequently Asked Questions', route: 'faq' as PageRoute },
                { label: 'Contact & Location', route: 'contact' as PageRoute },
              ].map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => navigateTo(item.route)}
                    className="flex items-center gap-2 text-[#A5D6A7] hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#66BB6A] group-hover:translate-x-1 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Categories */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg font-['Poppins'] text-white border-b border-[#A5D6A7]/30 pb-2 inline-block">
              Plant Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 8).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.name)}
                    className="flex items-center gap-2 text-[#A5D6A7] hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#66BB6A] group-hover:translate-x-1 transition-transform" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg font-['Poppins'] text-white border-b border-[#A5D6A7]/30 pb-2 inline-block">
              Visit PPN Nursery
            </h3>
            <div className="space-y-3 text-sm text-[#A5D6A7]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#66BB6A] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-xs">
                  {settings.address}, {settings.locationLandmark}, {settings.cityStatePincode}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#66BB6A] shrink-0" />
                <a href={`tel:${settings.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {settings.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#66BB6A] shrink-0" />
                <span>{settings.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#66BB6A] shrink-0" />
                <span className="font-medium text-white">{settings.businessHours}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full bg-[#66BB6A] hover:bg-[#43A047] text-white py-2 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions on Map</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A5D6A7] gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white">PPN Nursery</strong>. All rights reserved. Premium Garden Center in Bengaluru.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateTo('admin')}
              className="flex items-center gap-1 text-xs hover:text-white text-[#A5D6A7] underline"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Dashboard</span>
            </button>
            <span>•</span>
            <span className="flex items-center gap-1 text-white/80">
              Crafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for Green Bengaluru
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
