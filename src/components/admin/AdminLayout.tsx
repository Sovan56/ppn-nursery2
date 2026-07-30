import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SafeImage } from '../common/SafeImage';
import {
  LayoutDashboard,
  Sprout,
  FolderTree,
  Image as ImageIcon,
  MessageSquare,
  HelpCircle,
  FileText,
  Settings,
  User,
  LogOut,
  ChevronRight,
  Menu,
  X,
  RotateCcw,
  Sparkles,
  Layers
} from 'lucide-react';

export type AdminTab =
  | 'dashboard'
  | 'plants'
  | 'categories'
  | 'gallery'
  | 'testimonials'
  | 'services'
  | 'faqs'
  | 'inquiries'
  | 'settings'
  | 'profile';

interface AdminLayoutProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  activeTab,
  setActiveTab,
  children
}) => {
  const { adminUser, logoutAdmin, navigateTo, resetDataToDefaults, inquiries } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const newInquiriesCount = inquiries.filter((i) => i.status === 'New').length;

  const navItems: { id: AdminTab; label: string; icon: any; badge?: number }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'plants', label: 'Plants & Saplings', icon: Sprout },
    { id: 'categories', label: 'Categories', icon: FolderTree },
    { id: 'gallery', label: 'Nursery Gallery', icon: ImageIcon },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'inquiries', label: 'Contact Requests', icon: FileText, badge: newInquiriesCount },
    { id: 'settings', label: 'Website Settings', icon: Settings },
    { id: 'profile', label: 'Admin Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#F8FFF5] flex flex-col md:flex-row text-[#355E3B]">
      {/* Mobile Sidebar Header */}
      <div className="md:hidden bg-[#2E7D32] text-white p-4 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#66BB6A] flex items-center justify-center text-white">
            <Sprout className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg font-['Poppins']">PPN Admin</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg bg-white/10 text-white"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 z-20 h-screen w-64 bg-white border-r border-[#A5D6A7]/40 p-4 flex flex-col justify-between transition-transform duration-300 shadow-soft ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="pb-6 border-b border-[#A5D6A7]/30 flex items-center justify-between">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white flex items-center justify-center shadow-md">
                <Sprout className="w-6 h-6 text-[#A5D6A7]" />
              </div>
              <div>
                <h1 className="font-extrabold text-base text-[#2E7D32] font-['Poppins'] leading-tight">
                  PPN Nursery
                </h1>
                <span className="text-[10px] uppercase font-bold text-[#66BB6A] tracking-wider">
                  Admin Dashboard
                </span>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1 overflow-y-auto max-h-[calc(100vh-250px)]">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-green-gradient text-white shadow-soft'
                      : 'text-[#355E3B] hover:bg-[#F8FFF5] hover:text-[#2E7D32]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge ? (
                    <span className="bg-red-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  ) : isActive ? (
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#A5D6A7]/30 space-y-2">
          {/* Admin User Chip */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[#F8FFF5] border border-[#A5D6A7]/40">
            <SafeImage
              src={adminUser.photo}
              alt={adminUser.name}
              fallbackSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              className="w-8 h-8 rounded-full object-cover border border-[#66BB6A]"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-[#2E7D32] truncate font-['Poppins']">
                {adminUser.name}
              </p>
              <p className="text-[10px] text-[#355E3B]/70 truncate">{adminUser.role}</p>
            </div>
          </div>

          <button
            onClick={resetDataToDefaults}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#A5D6A7]/30 font-bold text-[11px] transition-colors"
            title="Reset to default PPN Nursery demo data"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>

          <button
            onClick={() => navigateTo('home')}
            className="w-full text-center py-1.5 text-xs text-[#2E7D32] hover:underline font-bold"
          >
            ← Back to Public Website
          </button>

          <button
            onClick={logoutAdmin}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 min-w-0 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};
