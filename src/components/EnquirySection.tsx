import React from 'react';
import { resort } from '../data/resort';
import { MessageSquare, Phone, Send } from 'lucide-react';

interface EnquirySectionProps {
  onOpenModal: () => void;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ onOpenModal }) => {
  const { enquiry, contact } = resort;

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage
  )}`;

  return (
    <section id="enquiry" className="py-28 sm:py-36 md:py-48 bg-stone-cream/60 text-charcoal border-t border-charcoal/8">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 md:px-16 text-center">
        {/* Section Marker */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <span className="font-mono text-xs tracking-widest text-stone-400">
            07 //
          </span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] font-light uppercase text-stone-500 font-mono">
            {enquiry.eyebrow}
          </span>
        </div>

        {/* Large Heading */}
        <h2 className="font-serif text-[42px] sm:text-[54px] md:text-[66px] lg:text-[72px] font-light tracking-tight text-charcoal mb-6 leading-[1.04] text-pretty">
          Your stay begins <br />
          <span className="italic font-normal text-stone-600">with a conversation.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 text-sm sm:text-base md:text-[16px] font-light leading-relaxed max-w-xl mx-auto mb-12 text-pretty">
          {enquiry.subtitle}
        </p>

        {/* 2026 Frosted & Pill Conversion Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 max-w-2xl mx-auto mb-12">
          {/* WhatsApp Concierge */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-charcoal text-ivory text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-charcoal-deep shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 text-stone-300" />
            <span>WhatsApp Concierge</span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          {/* Call the Resort */}
          <a
            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-charcoal border border-stone-border/80 text-xs uppercase tracking-[0.22em] font-light transition-all duration-300 hover:border-charcoal shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="w-3.5 h-3.5 text-stone-500" />
            <span>Call the Resort</span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          {/* Enquire Modal */}
          <button
            onClick={onOpenModal}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-stone-cream text-charcoal border border-stone-border/80 text-xs uppercase tracking-[0.22em] font-light transition-all duration-300 hover:border-charcoal hover:bg-ivory shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5 text-stone-500" />
            <span>Submit Enquiry</span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Quiet Reassurance Note */}
        <p className="text-xs text-stone-500 font-light max-w-md mx-auto leading-relaxed">
          {enquiry.note}
        </p>
      </div>
    </section>
  );
};
