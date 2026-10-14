import React, { useState, useEffect } from 'react';
import { resort } from '../data/resort';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal after user scrolls past the hero section
      if (window.scrollY > 400) {
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
      aria-label="WhatsApp quick contact"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 transition-all duration-500 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Max Crest on WhatsApp"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Authentic WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-white shrink-0 transition-transform duration-300 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.12c-1.5 0-2.97-.4-4.26-1.16l-.31-.18-3.16.83.84-3.08-.2-.32a8.08 8.08 0 01-1.25-4.4c0-4.46 3.63-8.09 8.09-8.09 2.16 0 4.19.84 5.72 2.37a8.04 8.04 0 012.37 5.72c0 4.46-3.63 8.09-8.09 8.09zm4.43-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.09-.39-.12-.55.12-.17.24-.63.79-.78.95-.14.17-.29.19-.53.07-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.29.37-.43.12-.14.17-.24.25-.4.09-.17.04-.31-.02-.43-.07-.12-.55-1.33-.76-1.82-.2-.48-.41-.41-.55-.42h-.48c-.17 0-.44.06-.67.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.05-.1-.21-.16-.45-.28z" />
        </svg>
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
