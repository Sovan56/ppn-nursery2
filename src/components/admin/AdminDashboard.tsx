import React from 'react';
import { useApp } from '../../context/AppContext';
import { AdminTab } from './AdminLayout';
import {
  Sprout,
  FolderTree,
  ImageIcon,
  MessageSquare,
  FileText,
  Activity,
  Plus,
  TrendingUp,
  PieChart as PieIcon,
  BarChart3
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  CartesianGrid
} from 'recharts';

interface AdminDashboardProps {
  setActiveTab: (tab: AdminTab) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ setActiveTab }) => {
  const { plants, categories, gallery, testimonials, inquiries, activityLogs } = useApp();

  const totalCategories = categories.length;
  const totalPlants = plants.length;
  const totalGallery = gallery.length;
  const totalTestimonials = testimonials.length;
  const totalInquiries = inquiries.length;
  const newInquiries = inquiries.filter((i) => i.status === 'New').length;

  // Dummy Chart Data
  const salesData = [
    { month: 'Jan', sales: 42, revenue: 28000 },
    { month: 'Feb', sales: 58, revenue: 39000 },
    { month: 'Mar', sales: 85, revenue: 54000 },
    { month: 'Apr', sales: 110, revenue: 76000 },
    { month: 'May', sales: 135, revenue: 92000 },
    { month: 'Jun', sales: 160, revenue: 115000 },
    { month: 'Jul', sales: 195, revenue: 142000 },
  ];

  const categoryDistribution = categories.slice(0, 5).map((cat, idx) => ({
    name: cat.name,
    value: cat.itemCount || (idx + 1) * 8
  }));

  const COLORS = ['#2E7D32', '#66BB6A', '#A5D6A7', '#1B5E20', '#81C784'];

  const stockData = plants.slice(0, 6).map((p) => ({
    name: p.name.split(' ')[0],
    stock: p.inStock ? 25 : 0,
    price: p.price
  }));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white p-6 rounded-3xl shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#A5D6A7] uppercase tracking-wider">
            Nursery Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Poppins'] mt-1">
            Welcome to PPN Nursery Management
          </h2>
          <p className="text-xs sm:text-sm text-[#A5D6A7] mt-1">
            Manage your plant catalog, customer inquiries, nursery photos, and store settings in real time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('plants')}
            className="bg-[#66BB6A] hover:bg-[#43A047] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-soft transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Plant</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: 'Categories', count: totalCategories, icon: FolderTree, tab: 'categories' as AdminTab, color: 'text-emerald-700 bg-emerald-50' },
          { label: 'Total Plants', count: totalPlants, icon: Sprout, tab: 'plants' as AdminTab, color: 'text-green-700 bg-green-50' },
          { label: 'Gallery Photos', count: totalGallery, icon: ImageIcon, tab: 'gallery' as AdminTab, color: 'text-teal-700 bg-teal-50' },
          { label: 'Testimonials', count: totalTestimonials, icon: MessageSquare, tab: 'testimonials' as AdminTab, color: 'text-amber-700 bg-amber-50' },
          { label: 'Inquiries', count: totalInquiries, badge: `${newInquiries} New`, icon: FileText, tab: 'inquiries' as AdminTab, color: 'text-blue-700 bg-blue-50' },
          { label: 'Recent Logs', count: activityLogs.length, icon: Activity, tab: 'dashboard' as AdminTab, color: 'text-purple-700 bg-purple-50' },
        ].map((card, idx) => {
          const IconComp = card.icon;
          return (
            <div
              key={idx}
              onClick={() => setActiveTab(card.tab)}
              className="bg-white rounded-3xl p-4 border border-[#A5D6A7]/40 shadow-soft hover:shadow-soft-lg cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-10 h-10 rounded-2xl ${card.color} flex items-center justify-center`}>
                  <IconComp className="w-5 h-5" />
                </div>
                {card.badge && (
                  <span className="text-[10px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-full">
                    {card.badge}
                  </span>
                )}
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#355E3B]/70 uppercase block">
                  {card.label}
                </span>
                <span className="text-2xl font-black text-[#2E7D32] font-['Poppins']">
                  {card.count}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sales Trend Line Chart */}
        <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-[#A5D6A7]/20 pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#2E7D32]" />
              <h3 className="font-bold text-base text-[#2E7D32] font-['Poppins']">
                Monthly Plant Order Growth (Dummy Analytics)
              </h3>
            </div>
            <span className="text-xs text-[#66BB6A] font-extrabold bg-[#E8F5E9] px-2.5 py-1 rounded-full">
              +38% vs last month
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8F5E9" />
                <XAxis dataKey="month" stroke="#355E3B" fontSize={11} />
                <YAxis stroke="#355E3B" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #A5D6A7' }}
                />
                <Line type="monotone" dataKey="sales" stroke="#2E7D32" strokeWidth={3} dot={{ fill: '#66BB6A', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Pie Chart */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft space-y-4">
          <div className="flex items-center gap-2 border-b border-[#A5D6A7]/20 pb-3">
            <PieIcon className="w-5 h-5 text-[#2E7D32]" />
            <h3 className="font-bold text-base text-[#2E7D32] font-['Poppins']">
              Category Distribution
            </h3>
          </div>

          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" label>
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Stock Bar Chart & Recent Activity Log */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Plant Stock Graph */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft space-y-4">
          <div className="flex items-center gap-2 border-b border-[#A5D6A7]/20 pb-3">
            <BarChart3 className="w-5 h-5 text-[#2E7D32]" />
            <h3 className="font-bold text-base text-[#2E7D32] font-['Poppins']">
              Popular Plants Stock Status
            </h3>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8F5E9" />
                <XAxis dataKey="name" stroke="#355E3B" fontSize={11} />
                <YAxis stroke="#355E3B" fontSize={11} />
                <Tooltip />
                <Bar dataKey="price" fill="#2E7D32" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Inquiries & Activity Logs */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-[#A5D6A7]/20 pb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#2E7D32]" />
              <h3 className="font-bold text-base text-[#2E7D32] font-['Poppins']">
                Recent System Activity
              </h3>
            </div>
            <button
              onClick={() => setActiveTab('inquiries')}
              className="text-xs text-[#2E7D32] font-bold hover:underline"
            >
              View Inquiries →
            </button>
          </div>

          <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
            {activityLogs.map((log) => (
              <div
                key={log.id}
                className="p-3 rounded-xl bg-[#F8FFF5] border border-[#A5D6A7]/30 flex items-start justify-between text-xs"
              >
                <div>
                  <div className="font-bold text-[#2E7D32]">{log.action}</div>
                  <div className="text-[#355E3B]/80 text-[11px] mt-0.5">{log.details}</div>
                </div>
                <span className="text-[10px] text-[#355E3B]/60 font-semibold shrink-0">
                  {log.timestamp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
