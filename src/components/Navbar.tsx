import React, { useState, useEffect } from 'react';
import { resort } from '../data/resort';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="w-full max-w-[1400px] mx-auto bg-white/95 backdrop-blur-xl border border-black/[0.06] rounded-full px-4 sm:px-7 h-16 sm:h-[68px] flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.06)] pointer-events-auto">
          {/* Left: Distinct Editorial Brand Lockup */}
          <a
            href="#"
            className="flex items-center focus:outline-none group shrink-0"
            aria-label="Mistora Stays"
          >
            <span className="font-serif text-lg sm:text-xl lg:text-2xl tracking-[0.06em] font-bold text-[#294E35] leading-none whitespace-nowrap">
              Mistora Stays
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
              About
            </a>
            <a
              href="#architecture"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all"
            >
              Architecture
            </a>
            <a
              href="#estate"
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all whitespace-nowrap"
            >
              The Estate
            </a>
            <a
              href="#experiences"
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all whitespace-nowrap"
            >
              Experiences
            </a>
            <a
              href="#reviews"
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all whitespace-nowrap"
            >
              Reviews
            </a>
            <a
              href="#gallery"
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all whitespace-nowrap"
            >
              Gallery
            </a>
            <a
              href="#faq"
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all whitespace-nowrap"
            >
              FAQ
            </a>
            <a
              href="#destination"
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#415446] hover:text-[#294E35] hover:bg-white transition-all whitespace-nowrap"
            >
              Location
            </a>
          </nav>

          {/* Right: Direct Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={`tel:${resort.contact.phone.replace(/\s+/g, '')}`}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#294E35]/15 flex items-center justify-center text-[#294E35] hover:bg-[#EAF1E6]/70 transition-colors shrink-0"
              aria-label="Call Resort Team"
              title={`Call ${resort.contact.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenEnquiry}
              className="group inline-flex items-center gap-1.5 sm:gap-2 bg-[#294E35] hover:bg-[#1E3A27] text-white text-[11px] sm:text-xs font-medium px-3 sm:pl-4 sm:pr-2.5 py-1.5 sm:py-2 rounded-full transition-all shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Book Now</span>
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </span>
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#294E35]/15 flex items-center justify-center text-[#294E35] hover:bg-[#EAF1E6]/70 transition-colors shrink-0"
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
          <span className="font-serif text-2xl tracking-[0.06em] font-bold text-[#294E35]">
            Mistora Stays
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
            Book Your Stay
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
