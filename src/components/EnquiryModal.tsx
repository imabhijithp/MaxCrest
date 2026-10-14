import React, { useState, useEffect } from 'react';
import { resort } from '../data/resort';
import { X, Send, MessageSquare, Mail, Phone, Sparkles } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNote?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultNote = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(defaultNote);
  const [channel, setChannel] = useState<'whatsapp' | 'email'>('whatsapp');

  useEffect(() => {
    if (defaultNote) {
      setMessage(defaultNote);
    }
  }, [defaultNote]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (channel === 'whatsapp') {
      const text = [
        `*Stay Enquiry — Max Crest Resort*`,
        `Name: ${name || 'Guest'}`,
        phone ? `Phone: ${phone}` : '',
        email ? `Email: ${email}` : '',
        message ? `Message: ${message}` : 'I would like to enquire about staying at the resort in Vagamon.',
      ]
        .filter(Boolean)
        .join('\n');

      const url = `https://wa.me/${resort.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
    } else {
      const subject = encodeURIComponent(`Stay Enquiry — ${name || 'Guest'}`);
      const body = encodeURIComponent(
        `Dear Max Crest Team,\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nNotes / Enquiries:\n${message}\n\nWarm regards,\n${name}`
      );
      window.location.href = `mailto:${resort.contact.email}?subject=${subject}&body=${body}`;
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white text-[#16241A] rounded-[28px] border border-black/[0.06] shadow-2xl p-7 sm:p-9 my-8 transition-all animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#EAF1E6] hover:bg-[#D7E6D3] flex items-center justify-center text-[#294E35] transition-colors focus:outline-none"
          aria-label="Close enquiry modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF1E6] text-[#294E35] text-[11px] font-semibold mb-3">
            <Sparkles className="w-3 h-3 text-[#BB8C52]" />
            <span>Direct Booking · Vagamon</span>
          </div>
          <h3 id="enquiry-modal-title" className="text-2xl font-semibold tracking-tight text-[#16241A]">
            Plan Your Mountain Stay
          </h3>
          <p className="text-xs text-[#415446] mt-1.5 leading-relaxed">
            Share your details below and our Vagamon team will get in touch directly to help you book your stay.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#16241A] mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Eleanor Vance"
              className="w-full px-4 py-2.5 rounded-xl bg-[#EAF1E6]/40 border border-black/[0.08] text-[#16241A] text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#294E35] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-medium text-[#16241A] mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-[#EAF1E6]/40 border border-black/[0.08] text-[#16241A] text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#294E35] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#16241A] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#EAF1E6]/40 border border-black/[0.08] text-[#16241A] text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#294E35] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#16241A] mb-1.5">
              Message or Specific Requests
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your intended retreat, dates of interest, or suite preferences..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#EAF1E6]/40 border border-black/[0.08] text-[#16241A] text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#294E35] transition-all resize-none"
            />
          </div>

          {/* Segmented Pill Channel Selector */}
          <div className="pt-1">
            <label className="block text-xs font-medium text-[#16241A] mb-2">
              Preferred Contact Channel
            </label>
            <div className="grid grid-cols-2 gap-2 bg-[#EAF1E6] border border-black/[0.06] p-1 rounded-full">
              <button
                type="button"
                onClick={() => setChannel('whatsapp')}
                className={`flex items-center justify-center py-2 rounded-full text-xs font-medium transition-all ${
                  channel === 'whatsapp'
                    ? 'bg-[#294E35] text-white shadow-xs'
                    : 'text-[#415446] hover:text-[#294E35]'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                <span>WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setChannel('email')}
                className={`flex items-center justify-center py-2 rounded-full text-xs font-medium transition-all ${
                  channel === 'email'
                    ? 'bg-[#294E35] text-white shadow-xs'
                    : 'text-[#415446] hover:text-[#294E35]'
                }`}
              >
                <Mail className="w-3.5 h-3.5 mr-1.5" />
                <span>Email</span>
              </button>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#294E35] hover:bg-[#1E3A27] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{channel === 'whatsapp' ? 'Continue on WhatsApp' : 'Send via Email'}</span>
            </button>
          </div>

          <div className="text-center pt-1">
            <p className="text-[11px] text-[#415446] flex items-center justify-center">
              <Phone className="w-3 h-3 mr-1.5 text-[#294E35]" />
              Or call directly at{' '}
              <a
                href={`tel:${resort.contact.phone.replace(/\s+/g, '')}`}
                className="underline ml-1 text-[#294E35] font-semibold"
              >
                {resort.contact.phoneDisplay}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
