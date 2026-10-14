import React, { useState } from 'react';
import { resort } from '../data/resort';
import { ArrowUpRight, Check, Users, ShieldCheck, Waves, UtensilsCrossed } from 'lucide-react';

interface SanctuariesProps {
  onOpenEnquiry: (note?: string) => void;
}

const tabLabels = ['Master Suite', 'Balcony Suite', 'Living Pavilion'];

const suiteHighlights: Record<number, string[]> = {
  0: [
    'Expansive valley-facing glass elevation with sunrise views',
    'Warm timber ceiling, plush king bed and private seating',
    'Direct private access to the upper panoramic veranda',
  ],
  1: [
    'Cantilevered private balcony overlooking tea slopes',
    'Natural stone finishes and handcrafted teak interiors',
    'Uninterrupted private views of rolling Vagamon morning mist',
  ],
  2: [
    'Double-height architectural timber ceiling with scenic vistas',
    'Spacious lounge and dining pavilion for your entire group',
    'Floor-to-ceiling daylight with natural mountain breeze',
  ],
};

const buyoutHighlights = [
  {
    icon: ShieldCheck,
    title: '100% Private Buyout',
    desc: 'Only one booking at a time. No other guests or strangers on the property.',
  },
  {
    icon: Users,
    title: 'Up to 10–12 Guests',
    desc: 'Generous private accommodation for families, reunions, and close-knit groups.',
  },
  {
    icon: Waves,
    title: 'Private Infinity Pool',
    desc: 'Perched above the tea slopes with exclusive sundeck access for your group.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Dedicated On-Site Team',
    desc: 'Fresh home-cooked Kerala meals, hot highland tea, and evening bonfire service.',
  },
];

export const Sanctuaries: React.FC<SanctuariesProps> = ({ onOpenEnquiry }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const suites = resort.suites;
  const activeSuite = suites[activeIndex];
  const highlights = suiteHighlights[activeIndex] || suiteHighlights[0];

  return (
    <section id="estate" className="py-20 sm:py-28 bg-white text-[#16241A]">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Top Split Header + Segmented Pill Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#BB8C52] font-semibold block mb-3">
              Exclusive Whole-Estate Buyout
            </span>

            <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-normal tracking-tight text-[#16241A] leading-[1.15] mb-3">
              The entire estate is exclusively yours
            </h2>

            <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed">
              We do not rent individual rooms to separate guests. When you book Max Crest, your family or group receives complete private access to all bedroom suites, living pavilions, infinity plunge pool, and campfire grounds with zero outside guests.
            </p>
          </div>

          {/* Right-Aligned Segmented Pill Switcher */}
          <div
            className="inline-flex items-center bg-[#EAF1E6] p-1.5 rounded-full gap-1 self-start lg:self-auto shadow-2xs"
            role="tablist"
            aria-label="Estate spaces"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-12">
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
                  {activeSuite.title}
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
                <span>Estate Space Tour</span>
                <span className="text-[#BB8C52] font-semibold">Included in Buyout</span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-[#16241A] leading-tight mb-3">
                {activeSuite.title}
              </h3>

              <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed mb-5">
                {activeSuite.description}
              </p>

              {/* Spatial Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-[#294E35]/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#617364] font-semibold block mb-1.5">
                  Private Amenities &amp; Views
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

            <div className="pt-6 mt-4 border-t border-[#294E35]/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-[#415446] font-medium">
                Up to 10–12 Guests · Full Property
              </span>
              <button
                type="button"
                onClick={() =>
                  onOpenEnquiry(
                    `Enquiring about reserving the entire Max Crest estate in Vagamon for our group.`
                  )
                }
                className="group inline-flex items-center gap-2.5 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-medium pl-5 pr-2.5 py-2.5 rounded-full transition-all shadow-xs cursor-pointer"
              >
                <span>Reserve Entire Estate</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#294E35] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4-Col Whole-Estate Buyout Inclusions Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {buyoutHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#EAF1E6]/60 rounded-[22px] p-5 border border-[#294E35]/10 flex flex-col justify-between"
              >
                <div className="w-9 h-9 rounded-full bg-[#294E35] text-white flex items-center justify-center mb-3 shadow-2xs">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#16241A] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#415446] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
