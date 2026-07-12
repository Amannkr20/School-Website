import { useEffect, memo } from 'react';

const GALLERY = [
  '/Images/WhatsApp Image 2026-07-04 at 15.47.43 (2).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.44 (1).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.44.jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.45 (2).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.45 (3).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.46 (3).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.48 (1).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.48 (2).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.48 (3).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.48.jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.49 (1).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.49 (3).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.50.jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.51 (2).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.51 (3).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.52 (1).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.52 (2).jpeg',
  '/Images/WhatsApp Image 2026-07-04 at 15.47.52.jpeg',
];

export default memo(function GalleryModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target.id === 'gallery-modal-overlay') onClose();
      }}
      id="gallery-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm transition-all duration-300"
    >
      <div className="relative flex w-full max-w-6xl max-h-[90vh] min-w-0 flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-2xl text-left">
        {/* Sticky header bar: keeps title and close button aligned, never overlapping, even while the grid scrolls */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-black/5 bg-white/95 backdrop-blur-sm px-6 py-6 md:px-10 md:py-8">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Gallery</p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-primary font-bold sm:text-3xl md:text-4xl">
              Moments from campus life.
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light text-dark/70 hover:bg-secondary hover:text-white transition shadow-sm cursor-pointer"
            aria-label="Close gallery"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-8 md:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {GALLERY.map((src, index) => (
              <div
                key={src}
                className={`group min-w-0 overflow-hidden rounded-[1.5rem] border border-black/5 shadow-[0_18px_50px_rgba(30,70,56,0.06)] ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
              >
                <img
                  src={src}
                  alt="Students at Shri Kids School"
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
})
