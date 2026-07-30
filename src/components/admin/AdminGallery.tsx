import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GalleryItem } from '../../types';
import { ImageIcon, Plus, Trash2, Edit2, X, Upload } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

export const AdminGallery: React.FC = () => {
  const { gallery, addGalleryItem, updateGalleryItem, deleteGalleryItem } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Plants' | 'Nursery' | 'Landscapes' | 'Accessories'>('Plants');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const openAddModal = () => {
    setEditingItem(null);
    setTitle('');
    setCategory('Plants');
    setImage('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80');
    setDescription('');
    setIsModalOpen(true);
  };

  const openEditModal = (item: GalleryItem) => {
    setEditingItem(item);
    setTitle(item.title);
    setCategory(item.category);
    setImage(item.image);
    setDescription(item.description || '');
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !image) return;

    if (editingItem) {
      updateGalleryItem(editingItem.id, { title, category, image, description });
    } else {
      addGalleryItem({ title, category, image, description });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft">
        <div>
          <h2 className="text-2xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Nursery Gallery Management
          </h2>
          <p className="text-xs text-[#355E3B]/80 mt-1">
            Upload and manage photos of nursery aisles, villa landscapes, and plant varieties.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-green-gradient text-white px-5 py-2.5 rounded-2xl font-bold text-xs transition-all shadow-soft flex items-center justify-center gap-2"
        >
          <Upload className="w-4 h-4" />
          <span>Upload New Image</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#A5D6A7]/40 shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48">
                <SafeImage src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-white/90 text-[#2E7D32] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base text-[#2E7D32] font-['Poppins']">{item.title}</h3>
                {item.description && (
                  <p className="text-xs text-[#355E3B]/80 mt-1 line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-[#A5D6A7]/20 flex items-center justify-between">
              <span className="text-[10px] text-[#355E3B]/60 font-semibold">{item.dateAdded}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(item)}
                  className="p-1.5 rounded-lg bg-[#E8F5E9] text-[#2E7D32]"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete photo '${item.title}'?`)) deleteGalleryItem(item.id);
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
                {editingItem ? 'Edit Photo Details' : 'Upload Gallery Image'}
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-[#355E3B]" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Image Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  placeholder="e.g. Villa Turf Setup - Indiranagar"
                />
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Category *</label>
                <select
                  value={category}
                  onChange={(e: any) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                >
                  <option value="Plants">Plants</option>
                  <option value="Nursery">Nursery Layout</option>
                  <option value="Landscapes">Landscape Projects</option>
                  <option value="Accessories">Accessories & Pots</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Image URL *</label>
                <input
                  type="url"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Caption / Description</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
