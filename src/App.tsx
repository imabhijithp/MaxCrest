import { useState } from 'react';
import { resort, GalleryItem } from './data/resort';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Architecture } from './components/Architecture';
import { Sanctuaries } from './components/Sanctuaries';
import { Experiences } from './components/Experiences';
import { CinematicBreak } from './components/CinematicBreak';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Destination } from './components/Destination';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { EnquiryModal } from './components/EnquiryModal';
import { Lightbox } from './components/Lightbox';

export function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryNote, setEnquiryNote] = useState('');

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenEnquiry = (note: string = '') => {
    setEnquiryNote(note);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
    setEnquiryNote('');
  };

  const handleOpenLightbox = (_item: GalleryItem, index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % resort.gallery.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + resort.gallery.length) % resort.gallery.length);
  };

  const currentGalleryItem = resort.gallery[lightboxIndex] || null;

  return (
    <div className="min-h-screen bg-white text-[#16241A] flex flex-col font-sans selection:bg-[#EAF1E6] selection:text-[#294E35] relative">
      {/* Floating Architectural Pill Navigation Bar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      <main className="flex-grow">
        {/* 1. Inset Rounded Hero Stage */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 2. Architectural Introduction */}
        <Introduction onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 3. Villa Design & Resort Experiences */}
        <div className="bg-[#EAF1E6] rounded-[36px] sm:rounded-[48px] mx-2 sm:mx-4 lg:mx-6 py-16 sm:py-24 space-y-20 sm:space-y-28 shadow-xs">
          <Architecture />
          <Experiences onOpenEnquiry={handleOpenEnquiry} />
        </div>

        {/* 4. Full Resort Showcase (Whole-Property Buyout) */}
        <Sanctuaries
          onOpenEnquiry={(note) =>
            handleOpenEnquiry(
              note || 'Enquiring about reserving the entire Mistora Stays resort in Vagamon'
            )
          }
        />

        {/* 5. Atmospheric Mountain Panorama Break */}
        <div className="py-6 sm:py-10">
          <CinematicBreak onOpenEnquiry={handleOpenEnquiry} />
        </div>

        {/* 6. Guest Stories & Verified Reviews */}
        <Reviews />

        {/* 7. Curated Rounded Bento Photo Gallery */}
        <Gallery onSelectImage={handleOpenLightbox} />

        {/* 8. Common Questions & Booking FAQ */}
        <FAQ onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. Vagamon Location & Directions Card */}
        <Destination />
      </main>

      {/* 7. Dark Pre-Footer CTA + 4-Column Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Floating Concierge Pill */}
      <FloatingCTA />

      {/* Concierge Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
        defaultNote={enquiryNote}
      />

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        item={currentGalleryItem}
        currentIndex={lightboxIndex}
        total={resort.gallery.length}
        onClose={handleCloseLightbox}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />
    </div>
  );
}

export default App;
