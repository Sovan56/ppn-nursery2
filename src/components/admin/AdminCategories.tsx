import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Category } from '../../types';
import { FolderTree, Plus, Edit2, Trash2, X } from 'lucide-react';

export const AdminCategories: React.FC = () => {
  const { categories, addCategory, updateCategory, deleteCategory } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState<'Active' | 'Inactive'>('Active');

  const openAddModal = () => {
    setEditingCategory(null);
    setName('');
    setDescription('');
    setImage('https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80');
    setStatus('Active');
    setIsModalOpen(true);
  };

  const openEditModal = (cat: Category) => {
    setEditingCategory(cat);
    setName(cat.name);
    setDescription(cat.description);
    setImage(cat.image);
    setStatus(cat.status);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    if (editingCategory) {
      updateCategory(editingCategory.id, { name, description, image, status });
    } else {
      addCategory({ name, description, image, status });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft">
        <div>
          <h2 className="text-2xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Plant Category Management
          </h2>
          <p className="text-xs text-[#355E3B]/80 mt-1">
            Organize plant listings into distinct collections for simple customer navigation.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-green-gradient text-white px-5 py-2.5 rounded-2xl font-bold text-xs transition-all shadow-soft flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-3xl p-5 border border-[#A5D6A7]/40 shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="relative h-40 rounded-2xl overflow-hidden mb-3">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                <span
                  className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    cat.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {cat.status}
                </span>
              </div>

              <h3 className="font-bold text-lg text-[#2E7D32] font-['Poppins']">{cat.name}</h3>
              <p className="text-xs text-[#355E3B]/80 mt-1 line-clamp-2 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-[#A5D6A7]/20 flex items-center justify-between">
              <span className="text-xs font-bold text-[#2E7D32]">{cat.itemCount || 12} Plants</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(cat)}
                  className="p-1.5 rounded-lg bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete category '${cat.name}'?`)) deleteCategory(cat.id);
                  }}
                  className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
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
                {editingCategory ? 'Edit Category' : 'Create New Category'}
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-[#355E3B]" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Category Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  placeholder="e.g. Bonsai & Topiary"
                />
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Image URL</label>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Description</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Status</label>
                <select
                  value={status}
                  onChange={(e: any) => setStatus(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
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
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
