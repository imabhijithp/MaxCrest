import React, { useState } from 'react';
import { resort } from '../data/resort';
import { ArrowUpRight, Check } from 'lucide-react';

interface SanctuariesProps {
  onOpenEnquiry: (note?: string) => void;
}

const tabLabels = ['Master Suite', 'Balcony Suite', 'Living Pavilion'];

const suiteHighlights: Record<number, string[]> = {
  0: [
    'Expansive valley-facing glass elevation',
    'Warm timber ceiling and private lounge seating',
    'Direct access to the upper panoramic veranda',
  ],
  1: [
    'Cantilevered private balcony overlooking tea slopes',
    'Natural stone and handcrafted teak finishes',
    'Uninterrupted views of Vagamon morning mist',
  ],
  2: [
    'Double-height architectural timber ceiling',
    'Plush emerald lounge seating for quiet gatherings',
    'Floor-to-ceiling daylight and courtyard breeze',
  ],
};

export const Sanctuaries: React.FC<SanctuariesProps> = ({ onOpenEnquiry }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const suites = resort.suites;
  const activeSuite = suites[activeIndex];
  const highlights = suiteHighlights[activeIndex] || suiteHighlights[0];

  return (
    <section id="suites" className="py-20 sm:py-28 bg-white text-[#16241A]">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Top Split Header + Segmented Pill Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF1E6] text-[#294E35] text-[11px] font-semibold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BB8C52]" />
              <span>04 — Suites &amp; Living Spaces</span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold tracking-tight text-[#16241A] leading-[1.12]">
              Private Spaces for{' '}
              <span className="font-serif italic font-normal text-[#294E35]">
                Quiet Mountain Living
              </span>
            </h2>
          </div>

          {/* Right-Aligned Segmented Pill Switcher */}
          <div
            className="inline-flex items-center bg-[#EAF1E6] p-1.5 rounded-full gap-1 self-start lg:self-auto shadow-2xs"
            role="tablist"
            aria-label="Suite categories"
          >
            {suites.map((suite, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={suite.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#294E35] text-white shadow-xs'
                      : 'text-[#415446] hover:text-[#294E35]'
                  }`}
                >
                  {tabLabels[idx] || suite.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 12-Col Split Stage: 7-Col Photograph + 5-Col Young Tea Architectural Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left 7 Cols: Large Rounded Suite Photograph */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[28px] overflow-hidden w-full h-[360px] sm:h-[420px] lg:h-[450px] bg-[#EAF1E6] shadow-[0_4px_24px_rgba(41,78,53,0.06)] group">
              <img
                key={activeSuite.image}
                src={activeSuite.image}
                alt={activeSuite.alt}
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 animate-fade-in"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Overlay Bar with Thumbnail Previews */}
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div className="px-4 py-2 rounded-full bg-[#1E3A27]/85 backdrop-blur-md text-white text-xs font-medium">
                  0{activeIndex + 1} · {activeSuite.title}
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-[#1E3A27]/85 backdrop-blur-md p-1.5 rounded-full">
                  {suites.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`w-10 h-10 rounded-full overflow-hidden transition-all ${
                        idx === activeIndex
                          ? 'ring-2 ring-[#BB8C52] scale-105'
                          : 'opacity-65 hover:opacity-100'
                      }`}
                      title={s.title}
                    >
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Young Tea Architectural Suite Card */}
          <div className="lg:col-span-5 bg-[#EAF1E6] rounded-[28px] p-6 sm:p-8 h-auto lg:h-[450px] flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#294E35] font-semibold mb-3">
                <span>Interior Sanctuary</span>
                <span className="text-[#BB8C52] font-semibold">0{activeIndex + 1} / 0{suites.length}</span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-[#16241A] leading-tight mb-4">
                {activeSuite.title}
              </h3>

              <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed mb-6">
                {activeSuite.description}
              </p>

              {/* Spatial Highlights */}
              <div className="space-y-2.5 pt-5 border-t border-[#294E35]/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#617364] font-semibold block mb-2">
                  Spatial Details
                </span>
                {highlights.map((detail) => (
                  <div key={detail} className="flex items-center gap-2.5 text-xs text-[#16241A]">
                    <span className="w-4 h-4 rounded-full bg-[#294E35] text-white flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#294E35]/10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() =>
                  onOpenEnquiry(`Enquiring about staying in ${activeSuite.title} at Max Crest Vagamon`)
                }
                className="group inline-flex items-center gap-3 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-medium pl-5 pr-2.5 py-2.5 rounded-full transition-all shadow-xs"
              >
                <span>Enquire About This Space</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#294E35] flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
