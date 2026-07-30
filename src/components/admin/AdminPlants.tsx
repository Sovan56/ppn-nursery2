import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plant } from '../../types';
import { SafeImage } from '../common/SafeImage';
import {
  Sprout,
  Plus,
  Search,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Sun,
  Droplets
} from 'lucide-react';

export const AdminPlants: React.FC = () => {
  const { plants, categories, addPlant, updatePlant, deletePlant } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlant, setEditingPlant] = useState<Plant | null>(null);

  // Form Fields
  const [name, setName] = useState('');
  const [category, setCategory] = useState(categories[0]?.name || 'Indoor Plants');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(250);
  const [image, setImage] = useState('');
  const [isPopular, setIsPopular] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [careLevel, setCareLevel] = useState<'Easy' | 'Moderate' | 'Expert'>('Easy');
  const [sunlight, setSunlight] = useState<'Direct Sun' | 'Indirect Sun' | 'Partial Shade' | 'Low Light'>('Indirect Sun');
  const [water, setWater] = useState<'Low' | 'Moderate' | 'Frequent'>('Moderate');

  const filteredPlants = plants.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPlants.length / itemsPerPage) || 1;
  const paginatedPlants = filteredPlants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openAddModal = () => {
    setEditingPlant(null);
    setName('');
    setCategory(categories[0]?.name || 'Indoor Plants');
    setDescription('');
    setPrice(250);
    setImage('https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80');
    setIsPopular(false);
    setInStock(true);
    setCareLevel('Easy');
    setSunlight('Indirect Sun');
    setWater('Moderate');
    setIsModalOpen(true);
  };

  const openEditModal = (plant: Plant) => {
    setEditingPlant(plant);
    setName(plant.name);
    setCategory(plant.category);
    setDescription(plant.description);
    setPrice(plant.price);
    setImage(plant.image);
    setIsPopular(!!plant.isPopular);
    setInStock(plant.inStock);
    setCareLevel(plant.careLevel);
    setSunlight(plant.sunlight);
    setWater(plant.water);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !image) return;

    if (editingPlant) {
      updatePlant(editingPlant.id, {
        name,
        category,
        description,
        price: Number(price),
        image,
        isPopular,
        inStock,
        careLevel,
        sunlight,
        water
      });
    } else {
      addPlant({
        name,
        category,
        description,
        price: Number(price),
        image,
        isPopular,
        inStock,
        careLevel,
        sunlight,
        water
      });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header & Primary CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft">
        <div>
          <h2 className="text-2xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Plant Catalog Management
          </h2>
          <p className="text-xs text-[#355E3B]/80 mt-1">
            Add, update, or remove plants, adjust prices, and toggle stock availability.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-green-gradient hover:bg-leaf-gradient text-white px-5 py-2.5 rounded-2xl font-bold text-xs transition-all shadow-soft flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Plant</span>
        </button>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#A5D6A7]/40 shadow-soft">
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search plant by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#F8FFF5] border border-[#A5D6A7] text-[#355E3B]"
          />
          <Search className="w-4 h-4 text-[#2E7D32] absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-[#355E3B] shrink-0">Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-48 px-3 py-2 text-xs rounded-xl bg-[#F8FFF5] border border-[#A5D6A7] text-[#355E3B]"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-[#A5D6A7]/40 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#355E3B]">
            <thead className="bg-[#E8F5E9] font-bold text-[#2E7D32] uppercase tracking-wider text-[11px] border-b border-[#A5D6A7]/30">
              <tr>
                <th className="py-3.5 px-4">Image</th>
                <th className="py-3.5 px-4">Plant Name</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Stock Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#A5D6A7]/20">
              {paginatedPlants.map((plant) => (
                <tr key={plant.id} className="hover:bg-[#F8FFF5] transition-colors">
                  <td className="py-3 px-4">
                    <SafeImage
                      src={plant.image}
                      alt={plant.name}
                      className="w-12 h-12 rounded-xl object-cover border border-[#A5D6A7]"
                    />
                  </td>
                  <td className="py-3 px-4 font-bold text-[#2E7D32] font-['Poppins']">
                    {plant.name}
                    {plant.isPopular && (
                      <span className="ml-2 text-[10px] bg-amber-100 text-amber-800 font-extrabold px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#355E3B]">{plant.category}</td>
                  <td className="py-3 px-4 font-extrabold text-[#2E7D32]">₹{plant.price}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => updatePlant(plant.id, { inStock: !plant.inStock })}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold transition-all ${
                        plant.inStock
                          ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                      }`}
                    >
                      {plant.inStock ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      <span>{plant.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </button>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEditModal(plant)}
                        className="p-1.5 rounded-lg bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-colors"
                        title="Edit Plant"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete ${plant.name}?`)) {
                            deletePlant(plant.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                        title="Delete Plant"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-[#A5D6A7]/30 flex items-center justify-between text-xs text-[#355E3B]">
          <span>
            Showing {paginatedPlants.length} of {filteredPlants.length} plants
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-[#A5D6A7] disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-bold text-[#2E7D32]">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg border border-[#A5D6A7] disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-soft-lg border border-[#A5D6A7]/50 overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#A5D6A7]/30 pb-3 mb-4">
              <h3 className="font-bold text-lg text-[#2E7D32] font-['Poppins']">
                {editingPlant ? 'Edit Plant Details' : 'Add New Plant to Catalog'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-[#E8F5E9] rounded-lg">
                <X className="w-5 h-5 text-[#355E3B]" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Plant Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  placeholder="e.g. Monstera Deliciosa"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#355E3B] mb-1">Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#355E3B] mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Image URL *</label>
                <input
                  type="url"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block font-bold text-[#355E3B] mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  placeholder="Describe leaf structure, air purification qualities..."
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-[#355E3B] mb-1">Sunlight</label>
                  <select
                    value={sunlight}
                    onChange={(e: any) => setSunlight(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  >
                    <option value="Direct Sun">Direct Sun</option>
                    <option value="Indirect Sun">Indirect Sun</option>
                    <option value="Partial Shade">Partial Shade</option>
                    <option value="Low Light">Low Light</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#355E3B] mb-1">Water Need</label>
                  <select
                    value={water}
                    onChange={(e: any) => setWater(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  >
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Frequent">Frequent</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#355E3B] mb-1">Care Level</label>
                  <select
                    value={careLevel}
                    onChange={(e: any) => setCareLevel(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-[#355E3B]">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                    className="rounded text-[#2E7D32]"
                  />
                  <span>In Stock</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-bold text-[#355E3B]">
                  <input
                    type="checkbox"
                    checked={isPopular}
                    onChange={(e) => setIsPopular(e.target.checked)}
                    className="rounded text-[#2E7D32]"
                  />
                  <span>Popular Choice Badge</span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#A5D6A7]/30">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-[#A5D6A7] text-[#355E3B] font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-gradient text-white px-5 py-2 rounded-xl font-bold shadow-soft"
                >
                  Save Plant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
