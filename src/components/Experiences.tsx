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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#294E35]/15 text-[#294E35] text-[11px] font-semibold tracking-wider uppercase mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BB8C52]" />
            <span>03 — Highland Moments</span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold tracking-tight text-[#16241A] leading-[1.12]">
            Unhurried Days in the{' '}
            <span className="font-serif italic font-normal text-[#294E35]">
              Vagamon Mist
            </span>
          </h2>
        </div>

        <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed max-w-sm lg:pb-1">
          Surrounded by tea-covered crests and shifting mountain fog, every experience at Max Crest is shaped by natural elements and quiet contemplation.
        </p>
      </div>

      {/* Original Asymmetric Bento Composition (Left 5-Col Feature + Right 7-Col Alternating Stack) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left 5 Cols: Tall Feature Card — Sky Mirror Plunge Pool */}
        <div
          onClick={() =>
            onOpenEnquiry && onOpenEnquiry('Enquiring about the Sky Mirror Plunge Pool experience at Max Crest')
          }
          className="lg:col-span-5 relative rounded-[28px] overflow-hidden h-[380px] sm:h-[420px] lg:h-[480px] bg-white group cursor-pointer shadow-sm flex flex-col justify-end p-4 sm:p-5"
        >
          <img
            src="./images/infinity-plunge-pool.jpg"
            alt="Infinity plunge pool cantilevered above the slopes of Vagamon"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

          {/* Floating White Footer Panel with Soft Organic Shadow */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[22px] p-5 sm:p-6 shadow-md">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#294E35] font-semibold block mb-0.5">
                  Water &amp; Horizon
                </span>
                <h3 className="text-lg font-semibold text-[#16241A]">
                  Sky Mirror Plunge Pool
                </h3>
              </div>
              <span className="w-8 h-8 rounded-full bg-[#294E35] text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <p className="text-[#415446] text-xs leading-relaxed">
              Still waters cantilevered above the misty valleys of Vagamon, reflecting the changing mountain sky from morning dew to twilight.
            </p>
          </div>
        </div>

        {/* Right 7 Cols: Two Alternating Horizontal Bento Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5 h-auto lg:h-[480px]">
          {/* Top Card: Outdoor Hearth Terrace */}
          <div
            onClick={() =>
              onOpenEnquiry && onOpenEnquiry('Enquiring about the Outdoor Hearth Terrace at Max Crest')
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
                  Dusk Gatherings
                </span>
                <span className="w-8 h-8 rounded-full bg-[#EAF1E6] group-hover:bg-[#294E35] text-[#294E35] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#16241A] mb-1.5 leading-snug">
                Outdoor Hearth Terrace
              </h3>
              <p className="text-[#415446] text-xs leading-relaxed mb-3">
                Gather beside our open stone hearth as cool highland breezes roll across the timber deck under starlit Western Ghats skies.
              </p>

              <span className="text-[11px] font-semibold text-[#294E35] underline underline-offset-4">
                Enquire with Concierge
              </span>
            </div>
          </div>

          {/* Bottom Card: Highland Tea & Pine Ridges */}
          <div
            onClick={() =>
              onOpenEnquiry && onOpenEnquiry('Enquiring about Highland Tea Ridge walks at Max Crest')
            }
            className="bg-white rounded-[28px] p-3.5 sm:p-4 lg:p-4.5 grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-5 items-stretch cursor-pointer group shadow-[0_4px_24px_rgba(41,78,53,0.04)] overflow-hidden flex-1"
          >
            <div className="sm:col-span-7 order-2 sm:order-1 flex flex-col justify-between py-1 px-1 sm:px-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#294E35] font-semibold">
                  Surrounding Landscape
                </span>
                <span className="w-8 h-8 rounded-full bg-[#EAF1E6] group-hover:bg-[#294E35] text-[#294E35] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#16241A] mb-1.5 leading-snug">
                Emerald Tea &amp; Pine Ridges
              </h3>
              <p className="text-[#415446] text-xs leading-relaxed mb-3">
                Step directly onto quiet hillside paths winding through manicured tea slopes, solitary pines, and panoramic valley lookouts.
              </p>

              <span className="text-[11px] font-semibold text-[#294E35] underline underline-offset-4">
                Explore Surroundings
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
