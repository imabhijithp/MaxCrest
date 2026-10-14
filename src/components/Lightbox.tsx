import React, { useEffect, useCallback } from 'react';
import { GalleryItem } from '../data/resort';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  item: GalleryItem | null;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  item,
  currentIndex,
  total,
  onClose,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Resort photograph full view"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-4">
          <span className="text-xs font-mono tracking-widest text-[#BB8C52]">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="hidden sm:inline text-xs tracking-wider uppercase text-[#B8C9B2] font-medium border-l border-white/20 pl-4">
            {item.title}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-[#B8C9B2] hover:text-white transition-colors focus:outline-none"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 text-[#B8C9B2] hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-all focus:outline-none"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Central Photograph Content */}
      <div
        className="relative max-w-5xl max-h-[82vh] p-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          key={item.src}
          className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl transition-opacity duration-300 animate-fade-in"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <p className="font-serif text-lg text-[#EAF1E6] font-medium">{item.title}</p>
          <p className="text-xs text-[#B8C9B2] font-normal mt-1 tracking-wide">{item.caption}</p>
        </div>
      </div>

      {/* Navigation Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 text-stone-400 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-all focus:outline-none"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
};
