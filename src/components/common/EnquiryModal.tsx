import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Sprout, Send, Phone, MessageSquare } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const EnquiryModal: React.FC = () => {
  const { enquiryPlant, setEnquiryPlant, addInquiry, settings } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [requirement, setRequirement] = useState<'Retail Purchase' | 'Wholesale Order' | 'Landscaping'>('Retail Purchase');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!enquiryPlant) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      addInquiry({
        name,
        phone,
        email: email || 'N/A',
        requirement,
        plantType: enquiryPlant.name,
        quantity: `${quantity} unit(s)`,
        message: message || `Inquiring about ${enquiryPlant.name} (${enquiryPlant.category}). Price: ₹${enquiryPlant.price}`
      });
      setIsSubmitting(false);
      setEnquiryPlant(null);
    }, 400);
  };

  const whatsappText = encodeURIComponent(
    `Hello PPN Nursery! I want to enquire about ${enquiryPlant.name} (${enquiryPlant.category}) priced at ₹${enquiryPlant.price}. Please share availability and delivery options.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-soft-lg max-w-lg w-full overflow-hidden border border-[#A5D6A7]/40">
        {/* Header */}
        <div className="bg-green-gradient p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-[#A5D6A7]">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg font-['Poppins']">Plant Inquiry</h3>
              <p className="text-xs text-[#A5D6A7]">Direct request to PPN Nursery Bengaluru</p>
            </div>
          </div>
          <button
            onClick={() => setEnquiryPlant(null)}
            className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Plant Card Summary */}
        <div className="p-4 bg-[#F8FFF5] border-b border-[#A5D6A7]/30 flex items-center gap-4">
          <SafeImage
            src={enquiryPlant.image}
            alt={enquiryPlant.name}
            className="w-16 h-16 rounded-2xl object-cover border border-[#A5D6A7]"
          />
          <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full">
              {enquiryPlant.category}
            </span>
            <h4 className="font-bold text-[#2E7D32] text-base truncate font-['Poppins'] mt-1">
              {enquiryPlant.name}
            </h4>
            <p className="text-xs text-[#355E3B]/80 font-semibold mt-0.5">
              Price: <span className="text-[#2E7D32] font-bold text-sm">₹{enquiryPlant.price}</span>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#355E3B] mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#355E3B] mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#355E3B] mb-1">Email Address</label>
              <input
                type="email"
                placeholder="your.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#355E3B] mb-1">Quantity Required</label>
              <input
                type="text"
                placeholder="e.g. 5 pots / 20 saplings"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#355E3B] mb-1">Requirement Type</label>
            <select
              value={requirement}
              onChange={(e: any) => setRequirement(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
            >
              <option value="Retail Purchase">Retail Home Purchase</option>
              <option value="Wholesale Order">Bulk / Wholesale Order</option>
              <option value="Landscaping">Landscaping Project Setup</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#355E3B] mb-1">Additional Notes or Questions</label>
            <textarea
              rows={2}
              placeholder="Ask about care instructions, pot size, or delivery time..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 bg-green-gradient hover:bg-leaf-gradient text-white py-2.5 rounded-xl font-semibold text-xs transition-all shadow-soft flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
            </button>

            <a
              href={`https://wa.me/${settings.whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
