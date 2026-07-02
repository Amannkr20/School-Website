import React, { useState } from 'react';

const Header = React.memo(function Header({ onOpenAdmissions, onShowToast }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = React.useCallback((e) => {
    // We let the anchor default scroll happen, but also copy number to clipboard
    const phoneNumber = "+917999584503";
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        onShowToast("+91 79995 84503 copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy number:", err);
      });
  }, [onShowToast]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Shri Kids Logo" className="h-14 w-14 rounded-2xl object-cover shadow-[0_18px_50px_rgba(31,41,55,0.06)]" />
          <div className="text-left">
            <p className="font-display text-2xl leading-none text-primary font-bold">Shri Kids</p>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Play &amp; Primary School</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold uppercase tracking-[0.18em] text-dark/75 lg:flex">
          <a href="#about" className="transition hover:text-accent">About</a>
          <a href="#programs" className="transition hover:text-accent">Programs</a>
          <a href="#campus" className="transition hover:text-accent">Campus</a>
          <a href="#results" className="transition hover:text-accent">Results</a>
          <a href="#calendar" className="transition hover:text-accent">Calendar</a>
          <a href="#contact" onClick={handleContactClick} className="transition hover:text-accent">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              onOpenAdmissions();
            }}
            className="hidden rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary md:inline-flex cursor-pointer"
          >
            Apply Now
          </button>
          <button
            onClick={React.useCallback(() => setMobileMenuOpen(prev => !prev), [setMobileMenuOpen])}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 text-primary lg:hidden cursor-pointer"
            aria-label="Open menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} border-t border-black/5 bg-white lg:hidden`}>
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 text-sm font-bold uppercase tracking-[0.18em] text-dark/80 md:px-8 text-left">
          <button
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onOpenAdmissions();
            }}
            className="border-b border-black/5 py-3 text-secondary text-left font-bold cursor-pointer"
          >
            Apply Now
          </button>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="border-b border-black/5 py-3">About</a>
          <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="border-b border-black/5 py-3">Programs</a>
          <a href="#campus" onClick={() => setMobileMenuOpen(false)} className="border-b border-black/5 py-3">Campus</a>
          <a href="#results" onClick={() => setMobileMenuOpen(false)} className="border-b border-black/5 py-3">Results</a>
          <a href="#calendar" onClick={() => setMobileMenuOpen(false)} className="border-b border-black/5 py-3">Calendar</a>
          <a
            href="#contact"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleContactClick(e);
            }}
            className="py-3"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
});

export default Header;
