import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExperiencesProps {
  onOpenEnquiry?: (note?: string) => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="experiences" className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
      {/* Top Split Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#BB8C52] font-semibold block mb-3">
            Resort Experiences
          </span>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-normal tracking-tight text-[#16241A] leading-[1.15]">
            Relax and unwind in the Vagamon hills
          </h2>
        </div>

        <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed max-w-sm lg:pb-1">
          Surrounded by tea gardens and cool mountain mist, every moment at Max Crest is designed for relaxation, quiet views, and fresh mountain air.
        </p>
      </div>

      {/* Original Asymmetric Bento Composition (Left 5-Col Feature + Right 7-Col Alternating Stack) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left 5 Cols: Tall Feature Card — Hillside Plunge Pool */}
        <div
          onClick={() =>
            onOpenEnquiry && onOpenEnquiry('Enquiring about the Hillside Plunge Pool experience at Max Crest')
          }
          className="lg:col-span-5 relative rounded-[28px] overflow-hidden h-[380px] sm:h-[420px] lg:h-[480px] bg-white group cursor-pointer shadow-sm flex flex-col justify-end p-4 sm:p-5"
        >
          <img
            src="./images/infinity-plunge-pool.jpg"
            alt="Infinity plunge pool overlooking the slopes of Vagamon"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

          {/* Floating White Footer Panel with Soft Organic Shadow */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[22px] p-5 sm:p-6 shadow-md">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#294E35] font-semibold block mb-0.5">
                  Private Infinity Pool
                </span>
                <h3 className="text-lg font-semibold text-[#16241A]">
                  Hillside Plunge Pool
                </h3>
              </div>
              <span className="w-8 h-8 rounded-full bg-[#294E35] text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <p className="text-[#415446] text-xs leading-relaxed">
              Your private infinity plunge pool perched high above the tea slopes of Vagamon—completely reserved for your group with zero outside guests.
            </p>
          </div>
        </div>

        {/* Right 7 Cols: Two Alternating Horizontal Bento Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5 h-auto lg:h-[480px]">
          {/* Top Card: Outdoor Firepit Terrace */}
          <div
            onClick={() =>
              onOpenEnquiry && onOpenEnquiry('Enquiring about the Outdoor Firepit Terrace at Max Crest')
            }
            className="bg-white rounded-[28px] p-3.5 sm:p-4 lg:p-4.5 grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-5 items-stretch cursor-pointer group shadow-[0_4px_24px_rgba(41,78,53,0.04)] overflow-hidden flex-1"
          >
            <div className="sm:col-span-5 h-[190px] sm:h-full min-h-[160px] rounded-[20px] overflow-hidden bg-[#EAF1E6]">
              <img
                src="./images/terrace-firepit.jpg"
                alt="Stone hearth and outdoor deck terrace at twilight"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="sm:col-span-7 flex flex-col justify-between py-1 px-1 sm:px-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#294E35] font-semibold">
                  Private Evenings
                </span>
                <span className="w-8 h-8 rounded-full bg-[#EAF1E6] group-hover:bg-[#294E35] text-[#294E35] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#16241A] mb-1.5 leading-snug">
                Outdoor Firepit Terrace
              </h3>
              <p className="text-[#415446] text-xs leading-relaxed mb-3">
                Gather around our private stone firepit with warm tea or campfire barbecue as cool mountain breezes roll across the deck under starry skies.
              </p>

              <span className="text-[11px] font-semibold text-[#294E35] underline underline-offset-4">
                Arrange Campfire
              </span>
            </div>
          </div>

          {/* Bottom Card: Highland Tea & Pine Ridges */}
          <div
            onClick={() =>
              onOpenEnquiry && onOpenEnquiry('Enquiring about Tea Garden walks at Max Crest')
            }
            className="bg-white rounded-[28px] p-3.5 sm:p-4 lg:p-4.5 grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-5 items-stretch cursor-pointer group shadow-[0_4px_24px_rgba(41,78,53,0.04)] overflow-hidden flex-1"
          >
            <div className="sm:col-span-7 order-2 sm:order-1 flex flex-col justify-between py-1 px-1 sm:px-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#294E35] font-semibold">
                  Nature Trails
                </span>
                <span className="w-8 h-8 rounded-full bg-[#EAF1E6] group-hover:bg-[#294E35] text-[#294E35] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#16241A] mb-1.5 leading-snug">
                Tea Garden &amp; Pine Walk
              </h3>
              <p className="text-[#415446] text-xs leading-relaxed mb-3">
                Take peaceful walks directly from the resort along tea garden trails and pine forests with 360-degree mountain views.
              </p>

              <span className="text-[11px] font-semibold text-[#294E35] underline underline-offset-4">
                Plan Your Walk
              </span>
            </div>

            <div className="sm:col-span-5 order-1 sm:order-2 h-[190px] sm:h-full min-h-[160px] rounded-[20px] overflow-hidden bg-[#EAF1E6]">
              <img
                src="./images/hero-estate-overview.jpg"
                alt="Sweeping tea garden slopes and panoramic pine ridges of Vagamon"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
