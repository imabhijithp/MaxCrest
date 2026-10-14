import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface CinematicBreakProps {
  onOpenEnquiry?: (note?: string) => void;
}

const stayHighlights = [
  {
    step: '01 / 03',
    badge: 'Golden Hour Sunset',
    title: 'Peaceful Mountain Evenings',
    description:
      'As dusk settles over the Western Ghats, warm golden light fills the glass villas while cool mountain breezes sweep across the balconies.',
    image: './images/hero-sunset-panoramic.jpg',
    alt: 'Panoramic sunset horizon at Max Crest Premium Resort Vagamon',
  },
  {
    step: '02 / 03',
    badge: 'Cool Mountain Mist',
    title: 'Where Clouds Roll Across the Deck',
    description:
      'High in the hills of Vagamon, gentle mist drifts right across the pool deck, creating a quiet escape from city life.',
    image: './images/deck-monsoon-mist.jpg',
    alt: 'Teak pool deck shrouded in Vagamon mountain fog',
  },
  {
    step: '03 / 03',
    badge: 'Morning Views',
    title: 'Wake Up Above the Green Valleys',
    description:
      'Begin your morning with fresh Kerala tea on your private balcony as sunlight filters through pine trees and rolling tea estates.',
    image: './images/hero-estate-overview.jpg',
    alt: 'Morning tea slopes and pine ridges of Vagamon',
  },
];

export const CinematicBreak: React.FC<CinematicBreakProps> = ({ onOpenEnquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = stayHighlights[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stayHighlights.length) % stayHighlights.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stayHighlights.length);
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
      {/* Deep Tea Leaf Green Container */}
      <div className="bg-[#1E3A27] text-white rounded-[32px] p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center shadow-md">
        {/* Left 7 Cols: Framed Panoramic Photograph */}
        <div className="lg:col-span-7 relative rounded-[24px] overflow-hidden aspect-[16/10] bg-[#14271A] shadow-md">
          <img
            key={current.image}
            src={current.image}
            alt={current.alt}
            className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105 animate-fade-in"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white">
            {current.badge}
          </div>
        </div>

        {/* Right 5 Cols: Atmospheric Narrative & Carousel Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between p-2 sm:p-4 lg:pr-6 space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs font-medium tracking-widest uppercase mb-4">
              <span className="text-[#B8C9B2]">Mountain Living</span>
              <div className="flex items-center gap-1.5">
                {stayHighlights.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-6 bg-[#BB8C52]' : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <h2 className="font-serif text-[28px] sm:text-[36px] font-normal tracking-tight text-white leading-[1.15] mb-3">
              {current.title}
            </h2>

            <p className="text-[#EAF1E6]/85 text-xs sm:text-[13px] leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() =>
                onOpenEnquiry &&
                onOpenEnquiry(`Enquiring about a private retreat (${current.title}) at Max Crest Vagamon`)
              }
              className="group inline-flex items-center gap-3 bg-white hover:bg-[#EAF1E6] text-[#294E35] text-xs font-semibold pl-5 pr-2.5 py-2.5 rounded-full transition-all shadow-xs cursor-pointer"
            >
              <span>Plan Your Retreat</span>
              <span className="w-6 h-6 rounded-full bg-[#294E35] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-white/20 hover:bg-white/10 text-white flex items-center justify-center transition-colors"
                aria-label="Previous highlight"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#EAF1E6] text-[#294E35] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Next highlight"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
