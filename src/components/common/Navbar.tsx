import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PageRoute } from '../../types';
import {
  Sprout,
  Phone,
  Search,
  Menu,
  X,
  Star,
  MapPin,
  Clock,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    settings,
    searchTerm,
    setSearchTerm,
    isAdminLoggedIn,
    logoutAdmin
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks: { name: string; route: PageRoute }[] = [
    { name: 'Home', route: 'home' },
    { name: 'About Us', route: 'about' },
    { name: 'Plants & Saplings', route: 'plants' },
    { name: 'Nursery Gallery', route: 'gallery' },
    { name: 'Services', route: 'services' },
    { name: 'Testimonials', route: 'testimonials' },
    { name: 'FAQs', route: 'faq' },
    { name: 'Contact Us', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigateTo('plants');
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Notification / Info Bar */}
      <div className="bg-[#2E7D32] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#A5D6A7]" />
              Battarahalli, Bengaluru
            </span>
            <span className="hidden sm:flex items-center gap-1.5 opacity-90">
              <Clock className="w-3.5 h-3.5 text-[#A5D6A7]" />
              {settings.businessHours}
            </span>
            <span className="flex items-center gap-1 bg-[#A5D6A7]/20 px-2 py-0.5 rounded-full font-semibold">
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
              {settings.rating} ({settings.totalReviews}+ Reviews)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${settings.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[#A5D6A7] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{settings.phone}</span>
            </a>
            <span className="opacity-30">|</span>
            {isAdminLoggedIn ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigateTo('admin')}
                  className="bg-[#66BB6A] hover:bg-[#43A047] text-white px-2.5 py-0.5 rounded text-xs font-semibold"
                >
                  Admin Panel
                </button>
                <button
                  onClick={logoutAdmin}
                  className="text-white/80 hover:text-white underline text-xs"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigateTo('admin')}
                className="flex items-center gap-1 text-white/90 hover:text-white hover:underline transition-all text-xs"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-[#A5D6A7]" />
                <span>Owner Portal</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#A5D6A7]/30 px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-[#A5D6A7]" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#2E7D32] block leading-none font-['Poppins']">
                PPN Nursery
              </span>
              <span className="text-[11px] text-[#355E3B]/70 font-medium tracking-wide">
                Bengaluru's Premium Garden Center
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#E8F5E9] text-[#2E7D32] font-semibold'
                      : 'text-[#355E3B] hover:bg-[#F8FFF5] hover:text-[#2E7D32]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Actions & Search */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search */}
            <div className="relative hidden md:block w-48 xl:w-60">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search plants, saplings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-[#F8FFF5] border border-[#A5D6A7]/50 text-[#355E3B] placeholder-[#355E3B]/50 focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32]"
                />
                <Search className="w-4 h-4 text-[#2E7D32] absolute left-2.5 top-1/2 -translate-y-1/2" />
              </form>
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 rounded-xl text-[#2E7D32] hover:bg-[#F8FFF5]"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:flex items-center gap-1.5 bg-green-gradient hover:bg-leaf-gradient text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-soft hover:shadow-soft-lg transition-all"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#2E7D32] hover:bg-[#F8FFF5]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        {searchOpen && (
          <div className="md:hidden pt-3 px-2 pb-1">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search plants, saplings, fruit trees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-[#F8FFF5] border border-[#2E7D32] text-[#355E3B]"
                autoFocus
              />
              <Search className="w-4 h-4 text-[#2E7D32] absolute left-3 top-1/2 -translate-y-1/2" />
            </form>
          </div>
        )}
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#A5D6A7]/40 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = currentPage === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#2E7D32] text-white font-semibold'
                    : 'text-[#355E3B] hover:bg-[#F8FFF5]'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#A5D6A7]/30 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-green-gradient text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Get Directions & Enquire</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
