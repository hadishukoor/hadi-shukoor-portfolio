import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { IntroTextLayer } from './components/IntroTextLayer';
import { PhilosophySection } from './components/PhilosophySection';
import { WorkflowSection } from './components/WorkflowSection';
import { PersonalIntro } from './components/PersonalIntro';
import { ExperienceSection } from './components/ExperienceSection';
import { SelectedWork } from './components/SelectedWork';
import { EngineeringTerritory } from './components/EngineeringTerritory';
import { StackSection } from './components/StackSection';
import { AIEngineeringSection } from './components/AIEngineeringSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingChat } from './components/FloatingChat';
import { IntroLoader } from './components/IntroLoader';

function PortfolioApp() {
  const [contactOpen, setContactOpen] = useState(false);
  const [detailedInquiry, setDetailedInquiry] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleOpenQuickContact = () => {
    setDetailedInquiry(false);
    setSelectedService('');
    setContactOpen(true);
  };

  const handleOpenDetailedInquiry = (serviceType = '') => {
    setSelectedService(serviceType);
    setDetailedInquiry(true);
    setContactOpen(true);
  };

  return (
    <div className="home-page min-h-screen bg-[#e3d9d1] text-[#363636] relative selection:bg-[#248a61] selection:text-white transition-colors duration-300 overflow-x-hidden">
      {/* System Initializing Engineering Intro Loader */}
      <IntroLoader />

      {/* Fixed Navigation Bar with Language Switcher */}
      <Navbar
        onOpenContact={handleOpenQuickContact}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Portfolio Architecture */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('work')}
          onOpenContact={handleOpenQuickContact}
        />

        {/* 2. Fast Tech Marquee Ribbon */}
        <TechMarquee />

        {/* 3. Kinetic Opposing Big-Text Typography */}
        <div className="relative w-full overflow-hidden">
          <IntroTextLayer />
        </div>

        {/* 4. Engineering Manifesto & Principles */}
        <PhilosophySection />

        {/* 5. 7-Stage Software Engineering Lifecycle */}
        <WorkflowSection />

        {/* 6. Personal Introduction + Photo Frame (Who I am & What I build) */}
        <PersonalIntro
          onExploreExperience={() => scrollToSection('experience')}
          onOpenContact={handleOpenQuickContact}
        />

        {/* 7. Commercial Experience & Education (Including International Contracts) */}
        <ExperienceSection />

        {/* 8. Selected Work (Magnavolt UAE Flagship, Sands PPF Oman Bilingual, Hera-Lux, Compost) */}
        <SelectedWork />

        {/* 9. Engineering Territories Carousel */}
        <EngineeringTerritory />

        {/* 10. Technology Matrix by Category */}
        <StackSection />

        {/* 11. AI-Assisted Engineering Practice */}
        <AIEngineeringSection />

        {/* 12. Main Page Direct Contact Hub */}
        <ContactSection onOpenDetailedInquiry={() => handleOpenDetailedInquiry()} />
      </main>

      {/* 13. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenContact={handleOpenQuickContact}
      />

      {/* 14. Project / Connection Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        preselectedService={selectedService}
        defaultToDetailedForm={detailedInquiry}
      />

      {/* 15. Floating Message Hadi Button */}
      <FloatingChat onOpenContact={handleOpenQuickContact} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
