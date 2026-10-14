import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CinematicBreakProps {
  onOpenEnquiry?: (note?: string) => void;
}

export const CinematicBreak: React.FC<CinematicBreakProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
      <div className="relative rounded-[32px] overflow-hidden min-h-[380px] sm:min-h-[460px] flex items-center justify-center p-8 sm:p-14 text-white shadow-xl bg-[#14271A]">
        {/* Full-Bleed Panoramic Background Image */}
        <img
          src="./images/hero-sunset-panoramic.jpg"
          alt="Panoramic sunset horizon and misty ridges at Mistora Stays Vagamon"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 pointer-events-none" />

        {/* Quiet Luxury Atmosphere Content */}
        <div className="relative z-10 max-w-2xl text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#BB8C52] font-semibold mb-3">
            Pure Seclusion
          </span>

          <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[52px] font-normal tracking-tight text-white leading-[1.12] mb-4">
            Wake up to rolling clouds and untouched stillness.
          </h2>

          <p className="text-white/85 text-xs sm:text-[14px] leading-relaxed max-w-lg mb-8">
            An entire hill crest reserved exclusively for your family. No crowds, no shared walls—just crisp mountain breezes, tea garden views, and starry skies.
          </p>

          <button
            type="button"
            onClick={() =>
              onOpenEnquiry &&
              onOpenEnquiry('Enquiring about reserving the entire Mistora Stays estate in Vagamon')
            }
            className="group inline-flex items-center gap-3 bg-white hover:bg-[#EAF1E6] text-[#294E35] text-xs font-semibold pl-6 pr-3 py-3 rounded-full transition-all shadow-lg cursor-pointer active:scale-[0.98]"
          >
            <span>Reserve the Entire Estate</span>
            <span className="w-6 h-6 rounded-full bg-[#294E35] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
