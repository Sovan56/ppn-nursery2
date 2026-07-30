import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Send, CheckCircle2, Sprout } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const { addInquiry, categories } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState<'Retail Purchase' | 'Wholesale Order' | 'Landscaping' | 'Garden Maintenance' | 'Consultation'>('Retail Purchase');
  const [plantType, setPlantType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

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
        plantType: plantType || 'General Greenery',
        quantity: quantity || 'Not specified',
        message: message || 'Inquiry regarding plants & services.'
      });

      setIsSubmitting(false);
      setSubmittedSuccess(true);

      // Reset form fields
      setName('');
      setPhone('');
      setEmail('');
      setPlantType('');
      setQuantity('');
      setMessage('');

      setTimeout(() => {
        setSubmittedSuccess(false);
      }, 5000);
    }, 400);
  };

  return (
    <section className="py-16 bg-[#F8FFF5] border-b border-[#A5D6A7]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#A5D6A7]/50 shadow-soft-lg relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1 rounded-full text-xs font-bold text-[#2E7D32]">
              <Sprout className="w-4 h-4 text-[#2E7D32]" />
              <span>Get A Quote</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E7D32] font-['Poppins']">
              Send an Online Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#355E3B]/80">
              Interested in retail purchase, bulk orders, or villa landscaping? Fill out the form below and PPN Nursery will respond promptly.
            </p>
          </div>

          {submittedSuccess && (
            <div className="mb-6 p-4 rounded-2xl bg-[#E8F5E9] border border-[#66BB6A] text-[#2E7D32] flex items-center gap-3 animate-fade-in">
              <CheckCircle2 className="w-6 h-6 shrink-0 text-[#2E7D32]" />
              <div>
                <h4 className="font-bold text-sm font-['Poppins']">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-[#355E3B]">
                  Thank you! Our nursery manager will reach out to you within 2-4 hours.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#355E3B] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#355E3B] mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 87620 43246"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#355E3B] mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#355E3B] mb-1">Requirement Type</label>
                <select
                  value={requirement}
                  onChange={(e: any) => setRequirement(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
                >
                  <option value="Retail Purchase">In-Store / Retail Purchase</option>
                  <option value="Wholesale Order">Bulk / Wholesale Order</option>
                  <option value="Landscaping">Landscaping & Garden Setup</option>
                  <option value="Garden Maintenance">Periodic Garden Maintenance</option>
                  <option value="Consultation">Gardening Consultation</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#355E3B] mb-1">Plant Category / Variety</label>
                <input
                  type="text"
                  placeholder="e.g. Areca Palms, Mango Saplings, Rose"
                  value={plantType}
                  onChange={(e) => setPlantType(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#355E3B] mb-1">Approx. Quantity</label>
                <input
                  type="text"
                  placeholder="e.g. 5 pots, 50 saplings, 1000 sq ft"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#355E3B] mb-1">Detailed Message</label>
              <textarea
                rows={3}
                placeholder="Specify your delivery location in Bengaluru, custom planter requirements, or project details..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#A5D6A7] bg-[#F8FFF5] text-[#355E3B] focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-gradient hover:bg-leaf-gradient text-white py-3 rounded-2xl font-bold text-sm transition-all shadow-soft flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Request...' : 'Submit Plant Inquiry'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
