import React from 'react';
import { resort } from '../data/resort';
import { ArrowUpRight } from 'lucide-react';

interface IntroductionProps {
  onOpenEnquiry?: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onOpenEnquiry }) => {
  const { introduction } = resort;

  return (
    <section id="sanctuary" className="py-20 sm:py-28 bg-white text-[#16241A]">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Top Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF1E6] text-[#294E35] text-[11px] font-semibold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BB8C52]" />
              <span>01 — The Sanctuary</span>
            </div>

            <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-semibold tracking-tight text-[#16241A] leading-[1.12]">
              Designed Around Stillness, <br />
              Framed by the{' '}
              <span className="font-serif italic font-normal text-[#294E35]">
                Western Ghats.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-[#415446] text-xs sm:text-sm leading-relaxed">
              {introduction.description}
            </p>
          </div>
        </div>

        {/* Asymmetric 12-Column Architectural Mosaic with Compact Balanced Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 5 Cols: Compact Portrait Twilight Pavilion Photograph (420px max) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-[28px] overflow-hidden w-full h-[340px] sm:h-[390px] lg:h-[420px] bg-[#EAF1E6] group shadow-[0_4px_24px_rgba(41,78,53,0.06)]">
              <img
                src="/images/villa-twilight-glow.jpg"
                alt="Twilight view of Max Crest glass pavilion and timber deck"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white pointer-events-none">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8C9B2] block mb-0.5">
                    Dusk Atmosphere
                  </span>
                  <p className="text-sm font-medium">Illuminated Glass Pavilions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Landscape Valley Vista + Young Tea Architectural Pillar Card */}
          <div className="lg:col-span-7 flex flex-col gap-5 justify-between">
            <div className="relative rounded-[28px] overflow-hidden h-[200px] sm:h-[230px] lg:h-[245px] bg-[#EAF1E6] group shadow-[0_4px_24px_rgba(41,78,53,0.06)]">
              <img
                src={introduction.featureImage}
                alt={introduction.featureImageAlt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 text-white pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8C9B2] block mb-0.5">
                  Vagamon Ridges
                </span>
                <p className="text-sm font-medium">Uninterrupted Tea &amp; Valley Horizons</p>
              </div>
            </div>

            {/* Young Tea Architectural Summary Card */}
            <div className="bg-[#EAF1E6] rounded-[24px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 h-auto lg:h-[155px] shadow-xs">
              <div className="space-y-1 max-w-md">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#294E35] font-semibold block">
                  Private Highland Estate
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#16241A]">
                  Intimate scale, personal concierge hospitality
                </h3>
                <p className="text-xs text-[#415446] leading-relaxed">
                  Every stay is arranged directly through our Vagamon team—ensuring quiet privacy across our terraces, pool deck, and suites.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="group inline-flex items-center gap-3 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-medium pl-5 pr-2.5 py-2.5 rounded-full transition-all shadow-xs"
                >
                  <span>Enquire Now</span>
                  <span className="w-6 h-6 rounded-full bg-white text-[#294E35] flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
};
