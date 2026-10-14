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
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#294E35] block mb-3">
              About the Resort
            </span>

            <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-normal tracking-tight text-[#16241A] leading-[1.15]">
              Designed around nature, framed by the misty Western Ghats.
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
                src="./images/villa-twilight-glow.jpg"
                alt="Twilight view of Mistora Stays glass pavilion and timber deck"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white pointer-events-none">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8C9B2] block mb-0.5">
                    Twilight View
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

            {/* Boutique Resort Summary Card */}
            <div className="bg-[#EAF1E6] rounded-[24px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 h-auto lg:h-[155px] shadow-xs">
              <div className="space-y-1 max-w-md">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#294E35] font-semibold block">
                  Exclusive Resort Buyout
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#16241A]">
                  Total hill-top privacy for your family &amp; group
                </h3>
                <p className="text-xs text-[#415446] leading-relaxed">
                  The entire property is exclusively yours. Handled directly by our on-site team in Vagamon—guaranteeing personal care, delicious food, and zero outside guests.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-semibold px-5 py-3 rounded-full transition-all shadow-xs active:scale-[0.98] cursor-pointer"
                >
                  <span>Reserve Entire Resort</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
};
