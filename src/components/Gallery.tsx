import React, { useState } from 'react';
import { resort, GalleryItem } from '../data/resort';
import { ArrowUpRight } from 'lucide-react';

interface GalleryProps {
  onSelectImage: (item: GalleryItem, index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const [selectedFilter, setSelectedFilter] = useState<
    'all' | 'architecture' | 'sanctuary' | 'experience' | 'landscape'
  >('all');
  const allItems = resort.gallery;

  const filteredItems =
    selectedFilter === 'all'
      ? allItems.slice(0, 6)
      : allItems.filter((item) => item.category === selectedFilter);

  const filters: {
    label: string;
    value: 'all' | 'architecture' | 'sanctuary' | 'experience' | 'landscape';
  }[] = [
    { label: 'Featured', value: 'all' },
    { label: 'Architecture', value: 'architecture' },
    { label: 'Suites', value: 'sanctuary' },
    { label: 'Experiences', value: 'experience' },
    { label: 'Landscape', value: 'landscape' },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white text-[#16241A]">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Header + Segmented Pill Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF1E6] text-[#294E35] text-[11px] font-semibold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BB8C52]" />
              <span>05 — Visual Archive</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold tracking-tight text-[#16241A] leading-[1.12]">
              Frames of Max Crest{' '}
              <span className="font-serif italic font-normal text-[#294E35]">
                in Vagamon
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center bg-[#EAF1E6] p-1.5 rounded-full gap-1 overflow-x-auto scrollbar-none self-start md:self-auto max-w-full shadow-2xs">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  selectedFilter === f.value
                    ? 'bg-[#294E35] text-white shadow-xs'
                    : 'text-[#415446] hover:text-[#294E35]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modern Rounded Bento Gallery Grid with Strict Uniform Row Heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {filteredItems.map((item, idx) => {
            const isWide = idx === 0 || idx === 5;
            const spanClass = isWide ? 'lg:col-span-6' : 'lg:col-span-3';

            return (
              <div
                key={item.id}
                onClick={() => {
                  const originalIndex = allItems.findIndex((i) => i.id === item.id);
                  onSelectImage(item, originalIndex >= 0 ? originalIndex : 0);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const originalIndex = allItems.findIndex((i) => i.id === item.id);
                    onSelectImage(item, originalIndex >= 0 ? originalIndex : 0);
                  }
                }}
                aria-label={`View photograph: ${item.title}`}
                className={`relative rounded-[24px] overflow-hidden bg-[#EAF1E6] cursor-pointer group shadow-[0_4px_20px_rgba(0,0,0,0.06)] w-full h-[280px] sm:h-[340px] lg:h-[380px] ${spanClass}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3.5 right-3.5">
                  <span className="w-8 h-8 rounded-full bg-white text-[#294E35] group-hover:bg-[#294E35] group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#B8C9B2] font-medium block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-medium text-white">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
