import React from 'react';
import { resort } from '../data/resort';
import { Compass, Navigation, Phone, MessageSquare } from 'lucide-react';

export const Destination: React.FC = () => {
  const { destination, contact } = resort;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage
  )}`;

  return (
    <section id="destination" className="pb-16 sm:pb-24 pt-4 bg-white text-[#16241A]">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="bg-[#EAF1E6] rounded-[32px] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-[0_4px_24px_rgba(41,78,53,0.04)]">
          {/* Left: Location & Directions */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#294E35] text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-[#BB8C52]" />
              <span>06 — Location &amp; Directions · Vagamon</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-semibold tracking-tight text-[#16241A] leading-[1.14]">
              Where the Hills Meet <br />
              the{' '}
              <span className="font-serif italic font-normal text-[#294E35]">
                Mountain Mist
              </span>
            </h2>

            <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed max-w-md">
              {destination.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F3F7F1] text-[#294E35] border border-[#294E35]/15 text-xs font-medium px-5 py-2.5 rounded-full transition-all shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#294E35]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F3F7F1] text-[#294E35] border border-[#294E35]/15 text-xs font-medium px-5 py-2.5 rounded-full transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Resort</span>
              </a>
            </div>
          </div>

          {/* Right: Rounded Estate Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-[24px] overflow-hidden aspect-[16/10] bg-white shadow-[0_4px_24px_rgba(41,78,53,0.06)]">
              <img
                src="./images/resort-signage.jpg"
                alt="Max Crest Premium Resort Vagamon entrance and hillside setting"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
