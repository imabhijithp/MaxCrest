import React, { useState } from 'react';
import { resort } from '../data/resort';
import { ChevronDown, MessageSquare, Phone } from 'lucide-react';

interface FAQProps {
  onOpenEnquiry?: (note?: string) => void;
}

export const FAQ: React.FC<FAQProps> = () => {
  const faqs = resort.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const whatsappUrl = `https://wa.me/${resort.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Mistora Stays, I have a quick question about reserving the resort.'
  )}`;

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white text-[#16241A]">
      <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#BB8C52] font-semibold block mb-3">
            Common Questions
          </span>
          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-normal tracking-tight text-[#16241A] leading-[1.15] mb-3">
            Everything you need to know
          </h2>
          <p className="text-[#415446] text-xs sm:text-[13px] leading-relaxed">
            Planning a private family getaway or group trip? Here are answers to our guests&apos; most frequent questions about our private estate buyout.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-[#EAF1E6]/50 border border-[#294E35]/10 rounded-[22px] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-[#BB8C52] font-semibold hidden sm:inline-block">
                      {faq.category} ·
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-[#16241A]">
                      {faq.question}
                    </h3>
                  </div>
                  <span
                    className={`w-8 h-8 rounded-full bg-white text-[#294E35] flex items-center justify-center shrink-0 transition-transform duration-300 shadow-2xs ${
                      isOpen ? 'rotate-180 bg-[#294E35] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-[13px] leading-relaxed text-[#415446] border-t border-[#294E35]/10 mt-1 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Trust Callout */}
        <div className="bg-[#EAF1E6] rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-[#16241A] mb-1">
              Have another question about your dates or group?
            </h4>
            <p className="text-xs text-[#415446]">
              Our on-site team in Vagamon is available directly to assist you with quick answers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-medium px-4 py-2.5 rounded-full transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${resort.contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F3F7F1] text-[#294E35] border border-[#294E35]/15 text-xs font-medium px-4 py-2.5 rounded-full transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
