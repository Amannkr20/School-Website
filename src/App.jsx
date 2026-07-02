import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import CampusLife from './components/CampusLife';
import Admissions from './components/Admissions';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import AdmissionsModal from './components/AdmissionsModal';
import Toast from './components/Toast';

export default function App() {
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = React.useCallback((message) => {
    setToastMessage(message);
    setToastVisible(true);
  }, [setToastMessage, setToastVisible]);

  const handleCopyPhone = (e) => {
    // Also let standard hash change behavior run if needed, but copy to clipboard
    const phoneNumber = "+917999584503";
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        showToast("+91 79995 84503 copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy number:", err);
      });
  };

  return (
    <div className="text-dark font-sans bg-transparent min-h-screen">
      {/* Top Banner Bar */}
      <div className="bg-primary text-white text-sm text-left">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <span>
              <i className="fa-solid fa-phone mr-2 text-secondary"></i>
              <button
                onClick={handleCopyPhone}
                className="hover:text-white transition cursor-pointer bg-transparent border-none p-0 inline align-baseline"
              >
                +91 79995 84503
              </button>
            </span>
            <span>
              <i className="fa-solid fa-envelope mr-2 text-secondary"></i>
              <a href="mailto:srikidsbhilai@gmail.com" className="hover:text-white transition">
                srikidsbhilai@gmail.com
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-semibold">
            <a href="#admissions" className="text-secondary transition hover:text-white">
              Admissions 2026
            </a>
            <a href="#calendar" className="transition hover:text-secondary">
              School Calendar
            </a>
            <a href="#contact" onClick={handleCopyPhone} className="transition hover:text-secondary">
              Schedule A Visit
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <Header
        onOpenAdmissions={() => setAdmissionsOpen(true)}
        onShowToast={showToast}
      />

      <main id="home">
        {/* Hero Banner + Live NoticeBoard */}
        <Hero onOpenAdmissions={() => setAdmissionsOpen(true)} />

        {/* Mission & Key Feature Boxes */}
        <About />

        {/* Learning Levels Programs */}
        <Programs />

        {/* Campus Activities Details */}
        <CampusLife />

        {/* Timeline & Statistics Admissions */}
        <Admissions
          onOpenAdmissions={() => setAdmissionsOpen(true)}
          onShowToast={showToast}
        />

        {/* Yearly Calendar Event Highlights */}
        <Calendar />
      </main>

      {/* Contact info coordinate details */}
      <Footer onShowToast={showToast} />

      {/* Overlay modal for application submission */}
      <AdmissionsModal
        isOpen={admissionsOpen}
        onClose={() => setAdmissionsOpen(false)}
        onShowToast={showToast}
      />

      {/* Copy checkmark toast banner */}
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
