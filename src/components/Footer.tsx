import React, { useState } from 'react';
import { resort } from '../data/resort';
import { ArrowUpRight, MessageSquare, Phone, Navigation } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry?: (note?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const [quickNote, setQuickNote] = useState('');

  const whatsappUrl = `https://wa.me/${resort.contact.whatsappNumber}?text=${encodeURIComponent(
    resort.contact.whatsappDefaultMessage
  )}`;

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenEnquiry) {
      onOpenEnquiry(quickNote || 'I would like to enquire about staying at Max Crest Vagamon.');
      setQuickNote('');
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer id="enquiry" className="px-3 sm:px-6 lg:px-8 pb-4 bg-white">
      {/* Signature Inset Deep Tea Leaf Green Card */}
      <div className="w-full max-w-[1400px] mx-auto bg-[#1E3A27] text-white rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 shadow-xl">
        {/* Top Pre-Footer Callout Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 sm:pb-14 border-b border-white/10">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#BB8C52] font-semibold block mb-2">
              Your Mountain Getaway
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-semibold tracking-tight text-white leading-[1.12] mb-3">
              Plan Your Stay at <br />
              <span className="font-serif italic font-normal text-[#EAF1E6]">
                Max Crest Vagamon
              </span>
            </h2>
            <p className="text-[#EAF1E6]/80 text-xs sm:text-[13px] leading-relaxed">
              Book directly with our on-site team in Vagamon for the best rates, fast answers, and personal assistance for your stay.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="group inline-flex items-center gap-2.5 bg-white hover:bg-[#EAF1E6] text-[#294E35] text-xs font-semibold pl-5 pr-2.5 py-3 rounded-full transition-all shadow-xs"
            >
              <span>Book Your Stay</span>
              <span className="w-6 h-6 rounded-full bg-[#294E35] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B8C9B2]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Footer Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-12 sm:py-14 border-b border-white/10">
          {/* Col 1 (5 cols): Serif Brand Wordmark + Location + Quick Action Badges */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="font-serif text-3xl sm:text-4xl tracking-[0.14em] text-white leading-none">
                MAX CREST
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BB8C52]" />
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#B8C9B2] font-medium block">
                  PREMIUM RESORT VAGAMON · KERALA
                </span>
              </div>
            </div>

            <p className="text-[#EAF1E6]/75 text-xs leading-relaxed max-w-sm">
              Vagamon Hills, Idukki District, Western Ghats, Kerala, India <br />
              Coordinates: {resort.coordinates}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/50 text-[11px] text-white/90 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3 h-3 text-[#B8C9B2]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${resort.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/50 text-[11px] text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-white/80" />
                <span>Direct Call</span>
              </a>
              <a
                href={resort.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/50 text-[11px] text-white/90 hover:text-white transition-colors"
              >
                <Navigation className="w-3 h-3 text-white/80" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Col 2 (3 cols): Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#B8C9B2] font-semibold mb-4">
              EXPLORE RESORT
            </h3>
            <ul className="space-y-2.5 text-xs text-[#EAF1E6]/75">
              <li>
                <a href="#sanctuary" className="hover:text-white transition-colors">
                  About the Resort
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Resort Architecture
                </a>
              </li>
              <li>
                <a href="#suites" className="hover:text-white transition-colors">
                  Rooms &amp; Suites
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-white transition-colors">
                  Experiences &amp; Activities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#destination" className="hover:text-white transition-colors">
                  Location &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 (4 cols): Direct Quick Enquiry Form */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#B8C9B2] font-semibold mb-4">
              QUICK STAY ENQUIRY
            </h3>
            <form
              onSubmit={handleQuickSubmit}
              className="flex items-center justify-between border border-white/20 rounded-full p-1.5 pl-5 bg-black/20 focus-within:border-white/60 transition-colors"
            >
              <input
                type="text"
                value={quickNote}
                onChange={(e) => setQuickNote(e.target.value)}
                placeholder="Ask about dates, rooms, or rates..."
                aria-label="Quick stay enquiry"
                className="bg-transparent text-xs text-white placeholder:text-white/40 focus:outline-none w-full pr-3"
              />
              <button
                type="submit"
                className="bg-white hover:bg-[#EAF1E6] text-[#294E35] text-xs font-semibold px-4 sm:px-5 py-2 rounded-full shrink-0 transition-colors shadow-xs"
              >
                Send
              </button>
            </form>
            <p className="text-[11px] text-[#EAF1E6]/60 mt-3 leading-relaxed">
              Direct reply from our on-site team via WhatsApp or phone. No bots, no extra booking fees.
            </p>
          </div>
        </div>

        {/* Bottom Micro-Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#B8C9B2]/60">
          <div>
            © {new Date().getFullYear()} {resort.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Western Ghats · Kerala</span>
            <span>·</span>
            <span>{resort.coordinates}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
