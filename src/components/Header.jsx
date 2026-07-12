import { useState, memo } from 'react';
import { copyPhone } from '../utils';

function buildMenu(onOpenInfoModal) {
  return [
  {
    label: 'Home',
    items: [
      { name: 'History', action: () => onOpenInfoModal('History', 'Shri Kids was established with the vision to provide quality primary education in Bhilai. Over the years, it has emerged as a beacon of learning, growth, and development for young kids.') },
      { name: 'About Us', action: () => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); } },
      { name: 'Mission', action: () => onOpenInfoModal('Mission', 'Our mission is to nurture young minds by providing a stimulating learning environment that encourages curiosity, creativity, and a lifelong love for learning.') },
      { name: 'Vision', action: () => onOpenInfoModal('Vision', 'To be a premier institution recognized for academic excellence, holistic development, and nurturing happy, confident, and responsible children.') },
      { name: 'Objectives', action: () => onOpenInfoModal('Objectives', '1. Foster physical, cognitive, social, and emotional growth.\n2. Provide play-based experiential learning.\n3. Build strong foundational literacy and numeracy skills.') },
      { name: 'Quality Policy', action: () => onOpenInfoModal('Quality Policy', 'We are committed to maintaining high standards of early childhood education and continuous improvement of our safety, hygiene, and curriculum standards.') }
    ]
  },
  {
    label: 'Admission',
    items: [
      { name: 'Admission Procedure', action: () => { document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' }); } },
      { name: 'Fee Structure', action: () => onOpenInfoModal('Fee Structure', 'Our fee structure is transparent and designed to be affordable. Please contact the school reception at +91 79995 84503 for detailed class-wise fee schedules.') },
      { name: 'School Rules', action: () => onOpenInfoModal('School Rules', '1. Students must arrive on time.\n2. Circulars and diaries must be checked daily.\n3. Parents are requested to send hygienic food in the lunchbox.') },
      { name: 'School Timing', action: () => onOpenInfoModal('School Timing', 'Playgroup & Nursery: 8:30 AM - 12:30 PM\nPrimary Classes: 8:00 AM - 1:30 PM') },
      { name: 'Guidelines for Parents', action: () => onOpenInfoModal('Guidelines', 'Please ensure regular attendance. Attend Parent-Teacher Meetings regularly to stay updated on your child\'s progress.') }
    ]
  },
  {
    label: 'Academics',
    items: [
      { name: 'School Calendar', action: () => { document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' }); } },
      { name: 'List Of Holidays', action: () => onOpenInfoModal('List Of Holidays', 'Summer Vacation: May 1 to June 15\nDiwali Holidays: 4 Days\nWinter Break: Dec 25 to Jan 2\nOther national and festival holidays as per government directives.') },
      { name: 'Our Facilities', action: () => { document.getElementById('campus')?.scrollIntoView({ behavior: 'smooth' }); } }
    ]
  },
  {
    label: 'Parents Corner',
    items: [
      { name: 'PT Meeting', action: () => onOpenInfoModal('PT Meeting', 'Parent-Teacher meetings are scheduled on the last Saturday of every month to discuss student progress and milestones.') },
      { name: 'Parents Suggestion', action: () => onOpenInfoModal('Parents Suggestion', 'We highly value parent feedback. Please email your suggestions to srikidsbhilai@gmail.com or drop them in the school suggestion box.') }
    ]
  },
  {
    label: 'Co-Scholastic',
    items: [
      { name: 'Sport Activity', action: () => onOpenInfoModal('Sport Activity', 'We offer structured sports activities including kids yoga, free play, gymnastics, mini football, and track events to develop gross motor skills.') },
      { name: 'Creative Labs', action: () => onOpenInfoModal('Creative Labs', 'Hands-on sensory rooms, art and craft rooms, and puzzle-solving blocks designed to boost creative thinking and problem solving.') }
    ]
  }
  ];
}

const Header = memo(function Header({ onOpenAdmissions, onShowToast, onOpenGallery, onOpenInfoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleContactClick = () => copyPhone(onShowToast);
  const toggleMobileDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const MENU = buildMenu(onOpenInfoModal);

  return (
    <>
      {/* Top Academic Bar */}
      <div className="bg-primary text-white text-xs border-b border-white/10 hidden xl:block">
        <div className="mx-auto flex max-w-7xl justify-between items-center px-4 py-2.5">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-secondary"></i>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light transition">
                Bhilai-3, Durg, Chhattisgarh
              </a>
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-clock text-secondary"></i>
              <span>8:00 AM - 1:30 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-secondary"></i>
              <a href="mailto:srikidsbhilai@gmail.com" className="hover:text-secondary-light transition">
                srikidsbhilai@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-secondary"></i>
              <button onClick={handleContactClick} className="hover:text-secondary-light transition bg-transparent border-none p-0 cursor-pointer font-semibold">
                +91 79995 84503
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Logo & Branding */}
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Shri Kids Logo" className="h-14 w-14 rounded-full object-cover border border-primary/10 shadow-sm" />
            <div className="text-left">
              <h1 className="font-sans text-2xl font-black text-primary tracking-tight leading-none">SHRI KIDS</h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary mt-1">Play &amp; Primary School</p>
            </div>
          </a>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-black uppercase tracking-wider text-primary">
            {MENU.map(({ label, items }) => (
              <div className="relative group py-2" key={label}>
                <button className="flex items-center gap-1 hover:text-secondary transition duration-150 cursor-pointer">
                  {label} <i className="fa-solid fa-chevron-down text-[8px]"></i>
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-100 shadow-xl rounded-lg py-2 w-56 text-left mt-1">
                  {items.map((item) => (
                    <button key={item.name} onClick={item.action} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-primary transition duration-150 text-[11px] font-bold cursor-pointer">
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button onClick={onOpenGallery} className="hover:text-secondary transition duration-150 cursor-pointer">
              Gallery
            </button>

            <a href="#contact" onClick={handleContactClick} className="hover:text-secondary transition duration-150">
              Contact
            </a>
          </nav>

          {/* Apply Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmissions}
              className="hidden md:inline-flex rounded-full bg-secondary text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-primary transition shadow-md cursor-pointer"
            >
              Apply Online
            </button>
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden text-primary border border-gray-200 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-50"
              aria-label="Toggle mobile menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-3 px-4 shadow-inner max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col text-xs font-black uppercase tracking-wider text-primary space-y-2">
              {MENU.map(({ label, items }) => (
                <div key={label}>
                  <button onClick={() => toggleMobileDropdown(label)} className="w-full flex justify-between py-2 border-b border-gray-50 text-left font-black cursor-pointer">
                    <span>{label}</span> <i className="fa-solid fa-chevron-down text-[8px] self-center"></i>
                  </button>
                  {activeDropdown === label && (
                    <div className="pl-4 py-1 space-y-2 bg-gray-50 rounded-lg mt-1">
                      {items.map((item) => (
                        <button key={item.name} onClick={() => { item.action(); setMobileMenuOpen(false); }} className="w-full text-left py-2 text-[10px] text-gray-600 font-bold block cursor-pointer">
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button onClick={() => { onOpenGallery(); setMobileMenuOpen(false); }} className="w-full text-left py-2 border-b border-gray-50 font-black cursor-pointer">
                Gallery
              </button>

              <a href="#contact" onClick={() => { handleContactClick(); setMobileMenuOpen(false); }} className="w-full text-left py-2 border-b border-gray-50 block font-black">
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
});

export default Header;
