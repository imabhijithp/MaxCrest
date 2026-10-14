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

        {/* Top Location Strip */}
        <div className="absolute inset-x-0 top-6 sm:top-8 px-6 sm:px-10 md:px-14 flex items-center justify-between z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide">
            <Compass className="w-3.5 h-3.5 text-[#BB8C52]" />
            <span>Vagamon Hills, Kerala · Exclusive Private Estate</span>
          </div>
        </div>

        {/* Bottom Split Composition: Classic Editorial Headline + Action Card */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-10 px-6 sm:px-10 md:px-14 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            {/* Left 7 Cols: Classic Editorial Headline */}
            <div className="lg:col-span-7">
              <p className="text-[#B8C9B2] text-xs uppercase tracking-[0.22em] font-medium mb-3">
                Max Crest Boutique Resort · Vagamon
              </p>
              <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[58px] lg:text-[66px] font-normal tracking-tight leading-[1.08] text-white">
                A quiet hillside retreat above the clouds.
              </h1>
            </div>

            {/* Right 5 Cols: Frosted Card */}
            <div className="lg:col-span-5">
              <div className="bg-black/40 backdrop-blur-xl border border-white/15 rounded-[24px] p-5 sm:p-6 text-white shadow-xl">
                <p className="text-white/90 text-xs sm:text-[13px] leading-relaxed mb-5">
                  An exclusive private villa retreat in the hills of Vagamon, reserved entirely for your family or group. Panoramic glass pavilions, private plunge pool, and pure mountain stillness with zero outside guests.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-2 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-semibold px-5 py-3 rounded-full transition-all shadow-xs active:scale-[0.98] cursor-pointer"
                  >
                    <span>Reserve Entire Estate</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#estate"
                    className="inline-flex items-center px-5 py-3 rounded-full border border-white/25 hover:bg-white/10 text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    Tour the Estate
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
