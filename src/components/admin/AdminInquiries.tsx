import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Inquiry } from '../../types';
import {
  FileText,
  Search,
  Trash2,
  CheckCircle2,
  Phone,
  Mail,
  Eye,
  X,
  MessageSquare,
  Clock
} from 'lucide-react';

export const AdminInquiries: React.FC = () => {
  const { inquiries, updateInquiryStatus, deleteInquiry, settings } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus = selectedStatus === 'All' || inq.status === selectedStatus;
    const matchesSearch =
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.phone.includes(searchTerm) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft">
        <div>
          <h2 className="text-2xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Contact Requests & Quotes
          </h2>
          <p className="text-xs text-[#355E3B]/80 mt-1">
            Review incoming requests for retail plants, wholesale quotes, and villa landscaping.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#355E3B]">Total Requests: {inquiries.length}</span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#A5D6A7]/40 shadow-soft">
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search by customer name, phone, or requirement..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#F8FFF5] border border-[#A5D6A7] text-[#355E3B]"
          />
          <Search className="w-4 h-4 text-[#2E7D32] absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-[#355E3B] shrink-0">Filter Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full sm:w-40 px-3 py-2 text-xs rounded-xl bg-[#F8FFF5] border border-[#A5D6A7] text-[#355E3B]"
          >
            <option value="All">All Requests</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-[#A5D6A7]/40 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#355E3B]">
            <thead className="bg-[#E8F5E9] font-bold text-[#2E7D32] uppercase tracking-wider text-[11px] border-b border-[#A5D6A7]/30">
              <tr>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Customer Name</th>
                <th className="py-3.5 px-4">Phone / Email</th>
                <th className="py-3.5 px-4">Requirement</th>
                <th className="py-3.5 px-4">Plant & Quantity</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#A5D6A7]/20">
              {filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-xs text-[#355E3B]/70">
                    No customer requests match your filter.
                  </td>
                </tr>
              ) : (
                filteredInquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-[#F8FFF5] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#355E3B]/80">{inq.date}</td>
                    <td className="py-3.5 px-4 font-bold text-[#2E7D32] font-['Poppins']">
                      {inq.name}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[#2E7D32]">{inq.phone}</div>
                      <div className="text-[10px] text-[#355E3B]/70">{inq.email}</div>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#355E3B]">{inq.requirement}</td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#2E7D32]">{inq.plantType || 'N/A'}</div>
                      <div className="text-[10px] text-[#355E3B]/80">{inq.quantity}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <select
                        value={inq.status}
                        onChange={(e: any) => updateInquiryStatus(inq.id, e.target.value)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold focus:outline-none cursor-pointer ${
                          inq.status === 'New'
                            ? 'bg-red-100 text-red-800'
                            : inq.status === 'Contacted'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        <option value="New">🔴 New</option>
                        <option value="Contacted">🟡 Contacted</option>
                        <option value="Closed">🟢 Closed</option>
                      </select>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedInquiry(inq)}
                          className="p-1.5 rounded-lg bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete inquiry from ${inq.name}?`)) deleteInquiry(inq.id);
                          }}
                          className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                          title="Delete Request"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inquiry View Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-soft-lg border border-[#A5D6A7]">
            <div className="flex items-center justify-between border-b border-[#A5D6A7]/30 pb-3 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#66BB6A]">
                  Request #{selectedInquiry.id}
                </span>
                <h3 className="font-bold text-lg text-[#2E7D32] font-['Poppins']">
                  {selectedInquiry.name}
                </h3>
              </div>
              <button onClick={() => setSelectedInquiry(null)}>
                <X className="w-5 h-5 text-[#355E3B]" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#355E3B]">
              <div className="grid grid-cols-2 gap-3 p-3 bg-[#F8FFF5] rounded-xl border border-[#A5D6A7]/30">
                <div>
                  <span className="text-[10px] text-[#355E3B]/70 uppercase block">Phone</span>
                  <a href={`tel:${selectedInquiry.phone}`} className="font-bold text-[#2E7D32] underline">
                    {selectedInquiry.phone}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] text-[#355E3B]/70 uppercase block">Email</span>
                  <span className="font-bold text-[#2E7D32]">{selectedInquiry.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-[#F8FFF5] rounded-xl border border-[#A5D6A7]/30">
                <div>
                  <span className="text-[10px] text-[#355E3B]/70 uppercase block">Requirement</span>
                  <span className="font-bold text-[#2E7D32]">{selectedInquiry.requirement}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#355E3B]/70 uppercase block">Plant & Quantity</span>
                  <span className="font-bold text-[#2E7D32]">
                    {selectedInquiry.plantType} ({selectedInquiry.quantity})
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#F8FFF5] rounded-xl border border-[#A5D6A7]/30">
                <span className="text-[10px] text-[#355E3B]/70 uppercase block mb-1">Customer Message</span>
                <p className="leading-relaxed italic">{selectedInquiry.message}</p>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-[#A5D6A7]/30">
                <a
                  href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedInquiry.name)}!%20This%20is%20PPN%20Nursery%20responding%20to%20your%20inquiry.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reply on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="px-4 py-2 rounded-xl border border-[#A5D6A7] font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
