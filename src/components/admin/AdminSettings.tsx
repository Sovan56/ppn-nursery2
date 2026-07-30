import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Settings, Save, CheckCircle2 } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const { settings, updateSettings } = useApp();

  const [businessName, setBusinessName] = useState(settings.businessName);
  const [tagline, setTagline] = useState(settings.tagline);
  const [phone, setPhone] = useState(settings.phone);
  const [whatsappNumber, setWhatsappNumber] = useState(settings.whatsappNumber);
  const [email, setEmail] = useState(settings.email);
  const [address, setAddress] = useState(settings.address);
  const [locationLandmark, setLocationLandmark] = useState(settings.locationLandmark);
  const [cityStatePincode, setCityStatePincode] = useState(settings.cityStatePincode);
  const [businessHours, setBusinessHours] = useState(settings.businessHours);
  const [googleMapEmbedUrl, setGoogleMapEmbedUrl] = useState(settings.googleMapEmbedUrl);
  const [instagramUrl, setInstagramUrl] = useState(settings.instagramUrl);
  const [facebookUrl, setFacebookUrl] = useState(settings.facebookUrl);
  const [youtubeUrl, setYoutubeUrl] = useState(settings.youtubeUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      businessName,
      tagline,
      phone,
      whatsappNumber,
      email,
      address,
      locationLandmark,
      cityStatePincode,
      businessHours,
      googleMapEmbedUrl,
      instagramUrl,
      facebookUrl,
      youtubeUrl
    });
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft">
        <div>
          <h2 className="text-2xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Website & Store Settings
          </h2>
          <p className="text-xs text-[#355E3B]/80 mt-1">
            Update store contact info, business hours, map embed, and social links.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft space-y-6 text-xs text-[#355E3B]">
        {/* Basic Branding */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-[#2E7D32] font-['Poppins'] border-b border-[#A5D6A7]/30 pb-2">
            Store Identity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-1">Business Name *</label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">Tagline</label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-[#2E7D32] font-['Poppins'] border-b border-[#A5D6A7]/30 pb-2">
            Contact & WhatsApp Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold mb-1">Primary Phone *</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">WhatsApp Number (with country code)</label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">Store Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>
          </div>
        </div>

        {/* Location & Address */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-[#2E7D32] font-['Poppins'] border-b border-[#A5D6A7]/30 pb-2">
            Location & Map Embed
          </h3>

          <div>
            <label className="block font-bold mb-1">Street Address *</label>
            <textarea
              rows={2}
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-1">Landmark</label>
              <input
                type="text"
                value={locationLandmark}
                onChange={(e) => setLocationLandmark(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">City, State & Pincode</label>
              <input
                type="text"
                value={cityStatePincode}
                onChange={(e) => setCityStatePincode(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold mb-1">Business Hours *</label>
            <input
              type="text"
              required
              value={businessHours}
              onChange={(e) => setBusinessHours(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Google Maps Embed iframe URL</label>
            <input
              type="text"
              value={googleMapEmbedUrl}
              onChange={(e) => setGoogleMapEmbedUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-[#2E7D32] font-['Poppins'] border-b border-[#A5D6A7]/30 pb-2">
            Social Links
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold mb-1">Instagram URL</label>
              <input
                type="url"
                value={instagramUrl}
                onChange={(e) => setInstagramUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">Facebook URL</label>
              <input
                type="url"
                value={facebookUrl}
                onChange={(e) => setFacebookUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">YouTube URL</label>
              <input
                type="url"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#A5D6A7]/30 flex justify-end">
          <button
            type="submit"
            className="bg-green-gradient hover:bg-leaf-gradient text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-soft flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
};
