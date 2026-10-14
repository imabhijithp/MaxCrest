import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ArchitectureProps {
  onOpenEnquiry?: (note?: string) => void;
}

const architecturalHighlights = [
  {
    num: '01',
    tag: 'Location & View',
    title: 'Scenic Hilltop Setting',
    description:
      'Positioned along a peaceful green crest in Vagamon, the resort is designed to give you panoramic, uninterrupted views of tea gardens and misty mountain valleys.',
    image: './images/architecture-landscape.jpg',
    alt: 'Max Crest Resort nestled along the green tea slopes of Vagamon',
  },
  {
    num: '02',
    tag: 'Glass & Timber Design',
    title: 'Glass Pavilions & Wood Decks',
    description:
      'Floor-to-ceiling glass walls, elegant wooden accents, and private balconies let you enjoy natural daylight and refreshing mountain breezes.',
    image: './images/architecture-facade.jpg',
    alt: 'Modern architectural facade with vertical timber louvers and glass balconies',
  },
  {
    num: '03',
    tag: 'Outdoor Terraces',
    title: 'Wooden Walkways & Pool Terrace',
    description:
      'Handcrafted wooden boardwalks and stone courtyards connect your villa to the scenic infinity pool overlooking the valley.',
    image: './images/boardwalk-walkway.jpg',
    alt: 'Timber boardwalk walkway beside the glass facade and pool edge',
  },
];

export const Architecture: React.FC<ArchitectureProps> = ({ onOpenEnquiry }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const activeItem = architecturalHighlights[activeIndex];

  return (
    <section id="architecture" className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#294E35] block mb-3">
            Villas &amp; Architecture
          </span>
          <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[44px] font-normal tracking-tight text-[#16241A] leading-[1.15]">
            Modern comfort nestled into the hillside.
          </h2>
        </div>

        <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed max-w-sm">
          Warm timber, expansive glass walls, and natural stone combine to let you experience Vagamon’s cool breezes and misty hills in luxury.
        </p>
      </div>

      {/* Flipped 12-Col Layout: Large Architectural Stage on Left (7 cols), Interactive Cards on Right (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left 7 Cols: Large Rounded Architectural Viewport with Controlled Height */}
        <div className="lg:col-span-7">
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[450px] rounded-[28px] overflow-hidden bg-white shadow-[0_4px_24px_rgba(41,78,53,0.06)]">
            <img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.alt}
              className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105 animate-fade-in"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
              <div className="px-4 py-2 rounded-full bg-[#1E3A27]/85 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                {activeItem.num} · {activeItem.title}
              </div>
              <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] text-[#B8C9B2] font-medium">
                {activeItem.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Interactive Modular Cards */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
          {architecturalHighlights.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={item.num}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-[22px] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(41,78,53,0.06)]'
                    : 'bg-[#DDE8D9]/70 hover:bg-white/80 px-5 py-3.5'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#294E35] text-white'
                          : 'bg-[#B8C9B2]/60 text-[#294E35]'
                      }`}
                    >
                      {item.num}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#617364] block">
                        {item.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-[#16241A] tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {isActive && (
                  <div className="mt-4 pt-4 border-t border-[#294E35]/10 animate-fade-in">
                    <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenEnquiry) {
                          onOpenEnquiry(`Enquiring about ${item.title} at Max Crest Vagamon`);
                        }
                      }}
                      className="inline-flex items-center gap-2 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-xs active:scale-[0.98]"
                    >
                      <span>Enquire Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
