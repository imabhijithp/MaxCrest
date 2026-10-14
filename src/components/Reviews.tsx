import React from 'react';
import { resort } from '../data/resort';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviews = resort.reviews;

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FBFDFB] text-[#16241A] border-y border-[#294E35]/10">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#BB8C52] font-semibold block mb-3">
              Guest Experiences
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-normal tracking-tight text-[#16241A] leading-[1.15]">
              Stories from our mountain guests
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-[#EAF1E6] px-4 py-2 rounded-full self-start lg:self-auto shadow-2xs">
            <div className="flex text-[#BB8C52]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#BB8C52]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#294E35]">
              5.0 · Verified Private Stays
            </span>
          </div>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-[#294E35]/10 shadow-[0_4px_24px_rgba(41,78,53,0.04)] hover:shadow-[0_8px_32px_rgba(41,78,53,0.08)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-[#BB8C52]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#BB8C52]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#294E35]/20" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-[#EAF1E6] text-[#294E35] text-[11px] font-medium mb-4">
                  “{rev.highlight}”
                </div>

                <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed mb-6 italic">
                  “{rev.comment}”
                </p>
              </div>

              <div className="pt-5 border-t border-[#294E35]/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[#16241A]">
                      {rev.name}
                    </h3>
                    <p className="text-[#617364] text-[11px]">
                      {rev.location} · {rev.tripType}
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-[#294E35] font-medium" title="Verified stay">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#294E35]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
