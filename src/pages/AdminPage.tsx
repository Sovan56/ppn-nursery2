import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AdminLayout, AdminTab } from '../components/admin/AdminLayout';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminPlants } from '../components/admin/AdminPlants';
import { AdminCategories } from '../components/admin/AdminCategories';
import { AdminGallery } from '../components/admin/AdminGallery';
import { AdminTestimonials } from '../components/admin/AdminTestimonials';
import { AdminInquiries } from '../components/admin/AdminInquiries';
import { AdminSettings } from '../components/admin/AdminSettings';
import { AdminProfile } from '../components/admin/AdminProfile';
import { ServicesSection } from '../components/public/ServicesSection';
import { FAQSection } from '../components/public/FAQSection';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

import { Sprout, Lock, User, KeyRound, LogIn, ShieldCheck, ArrowLeft } from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { isAdminLoggedIn, loginAdmin, navigateTo } = useApp();

  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginAdmin(username, password);
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F8FFF5] flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-soft-lg border border-[#A5D6A7]/50 relative overflow-hidden">
          {/* Header */}
          <div className="text-center space-y-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white rounded-2xl mx-auto flex items-center justify-center shadow-md">
              <Sprout className="w-8 h-8 text-[#A5D6A7]" />
            </div>
            <h1 className="text-2xl font-extrabold text-[#2E7D32] font-['Poppins']">
              PPN Nursery Admin
            </h1>
            <p className="text-xs text-[#355E3B]/80">
              Sign in to manage plants, view inquiries, and edit website settings.
            </p>
          </div>

          {/* Demo Hint Banner */}
          <div className="mb-6 p-3 rounded-2xl bg-[#E8F5E9] border border-[#A5D6A7] text-[11px] text-[#2E7D32] font-semibold space-y-0.5">
            <div className="flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              <span>Demo Credentials Pre-filled:</span>
            </div>
            <div>Username: <strong className="text-[#1B5E20]">admin</strong></div>
            <div>Password: <strong className="text-[#1B5E20]">admin123</strong></div>
          </div>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-[#355E3B] mb-1">Username</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
                />
                <User className="w-4 h-4 text-[#2E7D32] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#355E3B] mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
                />
                <KeyRound className="w-4 h-4 text-[#2E7D32] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-green-gradient hover:bg-leaf-gradient text-white py-3 rounded-xl font-bold text-xs transition-all shadow-soft flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Login to Dashboard</span>
              </button>
            </div>
          </form>

          <div className="mt-6 pt-4 border-t border-[#A5D6A7]/30 text-center">
            <button
              onClick={() => navigateTo('home')}
              className="text-xs text-[#2E7D32] font-bold hover:underline inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Nursery Website</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'dashboard' && <AdminDashboard setActiveTab={setActiveTab} />}
      {activeTab === 'plants' && <AdminPlants />}
      {activeTab === 'categories' && <AdminCategories />}
      {activeTab === 'gallery' && <AdminGallery />}
      {activeTab === 'testimonials' && <AdminTestimonials />}
      {activeTab === 'services' && <ServicesSection />}
      {activeTab === 'faqs' && <FAQSection />}
      {activeTab === 'inquiries' && <AdminInquiries />}
      {activeTab === 'settings' && <AdminSettings />}
      {activeTab === 'profile' && <AdminProfile />}
    </AdminLayout>
  );
};
