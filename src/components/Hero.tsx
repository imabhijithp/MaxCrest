import React from 'react';
import { resort } from '../data/resort';
import { ArrowUpRight, Compass } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 pt-3">
      {/* Architectural Rounded Hero Stage */}
      <div className="relative w-full h-[560px] sm:h-[640px] lg:h-[700px] rounded-[32px] sm:rounded-[40px] overflow-hidden bg-[#1E3A27] shadow-sm">
        <picture>
          <source media="(max-width: 640px)" srcSet={resort.hero.mobileImage} />
          <img
            src={resort.hero.image}
            alt="Max Crest Premium Resort Vagamon overlooking mountain mist and tea slopes"
            className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-1000"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Atmospheric multi-stop gradient for rich contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14271A]/90 via-[#14271A]/30 to-[#14271A]/20 pointer-events-none" />

        {/* Top Architectural Telemetry Strip */}
        <div className="absolute inset-x-0 top-6 sm:top-8 px-6 sm:px-10 md:px-14 flex items-center justify-between z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#BB8C52] animate-pulse" />
            <span>Private Highland Sanctuary · Vagamon</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-medium tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#BB8C52]" />
            <span>{resort.coordinates} · Western Ghats</span>
          </div>
        </div>

        {/* Bottom Split Composition: Mixed Sans/Serif Display Headline + Glass Action Card */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-10 px-6 sm:px-10 md:px-14 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            {/* Left 7 Cols: Original Mixed-Typography Headline */}
            <div className="lg:col-span-7">
              <p className="text-[#B8C9B2] text-xs uppercase tracking-[0.24em] font-medium mb-3">
                Max Crest Premium Resort Vagamon
              </p>
              <h1 className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[62px] font-semibold tracking-tight leading-[1.05] text-white">
                Where Mountain Mist <br />
                Meets{' '}
                <span className="font-serif italic font-normal tracking-normal text-[#EAF1E6]">
                  Glass &amp; Timber.
                </span>
              </h1>
            </div>

            {/* Right 5 Cols: Frosted Architectural Narrative & Action Card */}
            <div className="lg:col-span-5">
              <div className="bg-black/40 backdrop-blur-xl border border-white/15 rounded-[24px] p-5 sm:p-6 text-white shadow-xl">
                <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed mb-5">
                  Set along the quiet emerald ridges of Vagamon, Kerala, our private estate frames sweeping tea valleys, cool pine winds, and shifting highland clouds.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenEnquiry}
                    className="group inline-flex items-center gap-2.5 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-semibold pl-5 pr-2.5 py-2.5 rounded-full transition-all shadow-xs"
                  >
                    <span>Enquire with Concierge</span>
                    <span className="w-6 h-6 rounded-full bg-white text-[#294E35] flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  <a
                    href="#sanctuary"
                    className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/25 hover:bg-white/10 text-white text-xs font-medium transition-colors"
                  >
                    Explore the Estate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
