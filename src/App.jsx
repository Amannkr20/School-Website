import { useState } from 'react';
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
import GalleryModal from './components/GalleryModal';
import ScallopDivider from './components/ScallopDivider';
import InfoModal from './components/InfoModal';

export default function App() {
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const [infoOpen, setInfoOpen] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoContent, setInfoContent] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const handleOpenInfoModal = (title, content) => {
    setInfoTitle(title);
    setInfoContent(content);
    setInfoOpen(true);
  };

  return (
    <div className="text-dark font-sans bg-transparent min-h-screen">
      {/* Main Header / Navigation */}
      <Header
        onOpenAdmissions={() => setAdmissionsOpen(true)}
        onShowToast={showToast}
        onOpenGallery={() => setGalleryOpen(true)}
        onOpenInfoModal={handleOpenInfoModal}
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

        {/* Cut-paper transition into the chalkboard calendar */}
        <ScallopDivider from="var(--color-light)" to="var(--color-primary)" />

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

      {/* Popup photo gallery */}
      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />

      {/* Generic Info Modal for Dropdowns */}
      <InfoModal
        isOpen={infoOpen}
        onClose={() => setInfoOpen(false)}
        title={infoTitle}
        content={infoContent}
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
