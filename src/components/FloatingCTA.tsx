import React, { useState, useEffect } from 'react';
import { resort } from '../data/resort';
import { MessageSquare, Phone } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal after user scrolls past the hero section
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${resort.contact.whatsappNumber}?text=${encodeURIComponent(
    resort.contact.whatsappDefaultMessage
  )}`;

  return (
    <aside
      aria-label="Quick contact actions"
      className={`fixed bottom-6 right-6 z-30 transition-all duration-500 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Floating Quick Action Dock */}
      <div className="flex items-center gap-2 bg-[#1E3A27]/95 backdrop-blur-2xl px-4 py-2 rounded-full shadow-2xl border border-white/20 text-white">
        {/* Active Support Live Indicator */}
        <div className="flex items-center pl-1 pr-2 border-r border-white/20">
          <span className="w-2 h-2 rounded-full bg-[#BB8C52] animate-pulse mr-2" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#B8C9B2] hidden sm:inline">
            Direct Support
          </span>
        </div>

        {/* WhatsApp Quick Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-1.5 text-white/90 hover:text-white transition-colors group"
          aria-label="Chat with Resort Team on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#B8C9B2] mr-2 group-hover:text-white transition-colors" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium">WhatsApp</span>
        </a>

        <span className="w-[1px] h-3.5 bg-white/20 inline-block" />

        {/* Call Quick Action */}
        <a
          href={`tel:${resort.contact.phone.replace(/\s+/g, '')}`}
          className="flex items-center px-3 py-1.5 text-white/90 hover:text-white transition-colors group"
          aria-label="Direct Phone Call with Resort Team"
        >
          <Phone className="w-3.5 h-3.5 text-[#B8C9B2] mr-1.5 group-hover:text-white transition-colors" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium hidden sm:inline">Call</span>
        </a>
      </div>
    </aside>
  );
};
