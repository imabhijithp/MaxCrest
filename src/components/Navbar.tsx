import React, { useState, useEffect } from 'react';
import { resort } from '../data/resort';
import { Phone, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${resort.contact.whatsappNumber}?text=${encodeURIComponent(
    resort.contact.whatsappDefaultMessage
  )}`;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 pointer-events-none">
        <div className="w-full max-w-[1400px] mx-auto bg-white/95 backdrop-blur-xl border border-black/[0.05] rounded-full px-5 sm:px-7 h-16 sm:h-[68px] flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)] pointer-events-auto">
          {/* Left: Distinct Editorial Brand Lockup */}
          <a
            href="#"
            className="flex items-center focus:outline-none group"
            aria-label="Max Crest Premium Resort"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.14em] font-medium text-[#294E35] leading-none">
              MAX CREST
            </span>
          </a>

          {/* Center: Clean Architectural Pill Navigation */}
          <nav
            className="hidden lg:flex items-center bg-[#EAF1E6] rounded-full px-2 py-1"
            aria-label="Main Navigation"
          >
            <a
              href="#sanctuary"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all"
            >
              Sanctuary
            </a>
            <a
              href="#architecture"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all"
            >
              Architecture
            </a>
            <a
              href="#suites"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all"
            >
              Suites
            </a>
            <a
              href="#experiences"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all"
            >
              Experiences
            </a>
            <a
              href="#gallery"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all"
            >
              Gallery
            </a>
            <a
              href="#destination"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all"
            >
              Location
            </a>
          </nav>

          {/* Right: Direct Concierge Actions */}
          <div className="flex items-center space-x-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#294E35]/15 text-[#294E35] hover:bg-[#EAF1E6]/70 text-xs font-medium transition-colors"
              title="WhatsApp Concierge"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#294E35]" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            <a
              href={`tel:${resort.contact.phone.replace(/\s+/g, '')}`}
              className="w-9 h-9 rounded-full border border-[#294E35]/15 flex items-center justify-center text-[#294E35] hover:bg-[#EAF1E6]/70 transition-colors"
              aria-label="Call Resort Concierge"
              title={`Call ${resort.contact.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenEnquiry}
              className="group inline-flex items-center gap-2 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-medium pl-4 pr-2.5 py-2 rounded-full transition-all shadow-xs active:scale-[0.98]"
            >
              <span>Enquire</span>
              <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-9 h-9 rounded-full border border-[#294E35]/15 flex items-center justify-center text-[#294E35] hover:bg-[#EAF1E6]/70 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-white text-[#16241A] flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
          <span className="font-serif text-2xl tracking-[0.14em] font-medium text-[#294E35]">
            MAX CREST
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full border border-black/[0.1] flex items-center justify-center text-[#294E35]"
            aria-label="Close navigation menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 my-auto py-8">
          {resort.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-black/[0.06] text-xl font-medium text-[#16241A] hover:text-[#294E35] transition-colors"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-4 h-4 text-[#617364]" />
            </a>
          ))}
        </nav>

        <div className="pt-6 border-t border-black/[0.06] space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="w-full py-3.5 rounded-full bg-[#294E35] text-white text-xs font-semibold uppercase tracking-wider"
          >
            Enquire with Concierge
          </button>
          <div className="flex items-center justify-between text-xs text-[#617364] pt-1">
            <a href={`tel:${resort.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#294E35]">
              {resort.contact.phoneDisplay}
            </a>
            <a
              href={resort.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#294E35]"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
