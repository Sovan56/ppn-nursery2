import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Testimonial } from '../../types';
import { MessageSquare, Plus, Edit2, Trash2, Star, X } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

export const AdminTestimonials: React.FC = () => {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [photo, setPhoto] = useState('');
  const [status, setStatus] = useState<'Approved' | 'Pending'>('Approved');

  const openAddModal = () => {
    setEditingTestimonial(null);
    setName('');
    setLocation('Bengaluru');
    setRating(5);
    setReview('');
    setPhoto('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80');
    setStatus('Approved');
    setIsModalOpen(true);
  };

  const openEditModal = (t: Testimonial) => {
    setEditingTestimonial(t);
    setName(t.name);
    setLocation(t.location);
    setRating(t.rating);
    setReview(t.review);
    setPhoto(t.photo);
    setStatus(t.status);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !review) return;

    if (editingTestimonial) {
      updateTestimonial(editingTestimonial.id, { name, location, rating, review, photo, status });
    } else {
      addTestimonial({ name, location, rating, review, photo, status });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft">
        <div>
          <h2 className="text-2xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Customer Reviews & Testimonials
          </h2>
          <p className="text-xs text-[#355E3B]/80 mt-1">
            Manage feedback from nursery visitors, bulk buyers, and landscaping clients.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-green-gradient text-white px-5 py-2.5 rounded-2xl font-bold text-xs transition-all shadow-soft flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Review</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-5 border border-[#A5D6A7]/40 shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-[#355E3B]/90 italic leading-relaxed mb-4">
                "{item.review}"
              </p>
            </div>

            <div className="pt-3 border-t border-[#A5D6A7]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SafeImage
                  src={item.photo}
                  alt={item.name}
                  fallbackSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-xs text-[#2E7D32] font-['Poppins']">{item.name}</h4>
                  <p className="text-[10px] text-[#355E3B]/70">{item.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(item)}
                  className="p-1.5 rounded-lg bg-[#E8F5E9] text-[#2E7D32]"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete review from ${item.name}?`)) deleteTestimonial(item.id);
                  }}
                  className="p-1.5 rounded-lg bg-red-50 text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-soft-lg border border-[#A5D6A7]">
            <div className="flex items-center justify-between border-b border-[#A5D6A7]/30 pb-3 mb-4">
              <h3 className="font-bold text-base text-[#2E7D32] font-['Poppins']">
                {editingTestimonial ? 'Edit Customer Review' : 'Add New Review'}
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-[#355E3B]" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Customer Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Location / Locality</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  placeholder="e.g. TC Palya, Bengaluru"
                />
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Rating Stars</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                >
                  <option value={5}>5 Stars (Excellent)</option>
                  <option value={4}>4 Stars (Very Good)</option>
                  <option value={3}>3 Stars (Average)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Review Content *</label>
                <textarea
                  rows={3}
                  required
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Customer Photo URL</label>
                <input
                  type="url"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#A5D6A7]/30">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-[#A5D6A7]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-gradient text-white px-5 py-2 rounded-xl font-bold shadow-soft"
                >
                  Save Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
