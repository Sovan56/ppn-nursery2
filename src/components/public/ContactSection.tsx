import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Navigation,
  MessageSquare,
  Sprout,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const { settings } = useApp();

  const whatsappMessage = encodeURIComponent(
    `Hello PPN Nursery! I would like to inquire about plant varieties, prices, and delivery in Bengaluru.`
  );

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#A5D6A7]/30" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2E7D32]">
            <MapPin className="w-4 h-4 text-[#2E7D32]" />
            <span>Visit Nursery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Contact & Location Details
          </h2>
          <p className="text-sm sm:text-base text-[#355E3B]/80">
            Visit PPN Nursery at TC Palya Cross Road, Battarahalli or contact us for doorstep plant orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details & Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Address Card */}
            <div className="bg-[#F8FFF5] p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#2E7D32] font-['Poppins']">
                    Nursery Address
                  </h3>
                  <p className="text-xs sm:text-sm text-[#355E3B] leading-relaxed mt-1 font-medium">
                    {settings.address}
                  </p>
                  <p className="text-xs text-[#2E7D32] font-bold mt-1">
                    Landmark: {settings.locationLandmark}
                  </p>
                  <p className="text-xs text-[#355E3B]/80 mt-0.5">
                    {settings.cityStatePincode}
                  </p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                  className="flex-1 bg-green-gradient hover:bg-leaf-gradient text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow-soft transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${settings.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={settings.googleMapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white hover:bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Hours & Contact Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F8FFF5] p-5 rounded-2xl border border-[#A5D6A7]/40 shadow-soft">
                <Clock className="w-6 h-6 text-[#2E7D32] mb-2" />
                <h4 className="font-bold text-xs text-[#355E3B] uppercase tracking-wider">Business Hours</h4>
                <p className="font-extrabold text-sm text-[#2E7D32] font-['Poppins'] mt-0.5">
                  {settings.businessHours}
                </p>
              </div>

              <div className="bg-[#F8FFF5] p-5 rounded-2xl border border-[#A5D6A7]/40 shadow-soft">
                <Mail className="w-6 h-6 text-[#2E7D32] mb-2" />
                <h4 className="font-bold text-xs text-[#355E3B] uppercase tracking-wider">Email Inquiry</h4>
                <p className="font-extrabold text-sm text-[#2E7D32] font-['Poppins'] mt-0.5 truncate">
                  {settings.email}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Map Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-3 border-2 border-[#A5D6A7]/50 shadow-soft-lg overflow-hidden">
              <div className="relative h-[380px] sm:h-[450px] w-full rounded-2xl overflow-hidden bg-[#E8F5E9] border border-[#A5D6A7]">
                <iframe
                  title="PPN Nursery Google Map Location"
                  src={settings.googleMapEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Map Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-soft border border-[#A5D6A7]/40 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center">
                    <Sprout className="w-5 h-5 text-[#A5D6A7]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#2E7D32]">PPN Nursery Bengaluru</h4>
                    <p className="text-[10px] text-[#355E3B]">Kithaganur Main Rd, Battarahalli</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
