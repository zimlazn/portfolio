/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { FullscreenMenu } from './components/FullscreenMenu';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { GazuDemoModal } from './components/GazuDemoModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGazuModalOpen, setIsGazuModalOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<'light' | 'dark'>('light');

  // Track scroll position to update header styling if needed
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroHeight = heroEl.offsetHeight;
        if (scrollY > heroHeight - 80) {
          setNavTheme('dark');
        } else {
          setNavTheme('light');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#EDE8DF] text-neutral-900 selection:bg-neutral-900 selection:text-[#EDE8DF]">
      {/* Fullscreen Sliding Menu */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* 4. Live Demo Modal for GAZU Fashion Project (Matches Video 01:36 - 01:45) */}
      <GazuDemoModal
        isOpen={isGazuModalOpen}
        onClose={() => setIsGazuModalOpen(false)}
      />

      {/* 5. Top Bar Navigation */}
      <div className="sticky top-0 z-40 transition-colors duration-300">
        <Navigation
          onOpenMenu={() => setIsMenuOpen(true)}
          onNavigate={scrollToSection}
          theme={navTheme}
        />
      </div>

      {/* 6. Main Content Sections */}
      <main>
        {/* HERO SECTION: Massive "CREATIVE DEVELOPER" with interactive wave distortion on hover */}
        <HeroSection
          onScrollToNext={() => scrollToSection('about')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 02 - ABOUT ME: South Asian developer portrait, code button, sound toggle, bio & specs */}
        <AboutSection />

        {/* EDUCATION SECTION: Formal education & self-taught mastery milestones */}
        <EducationSection />

        {/* 03 - EXPERTISE: Creative Development, Motion & Interaction with like card, UI/UX, Web Apps */}
        <ExpertiseSection />

        {/* WORK: Top tech ticker, giant dripping WORK typography, and 6 stacked project cards */}
        <WorkSection onOpenGazuDemo={() => setIsGazuModalOpen(true)} />

        {/* CONTACT: "Let's create something meaningful.", Direct email copy, LinkedIn, and form */}
        <ContactSection
          onScrollToTop={() => scrollToSection('hero')}
        />
      </main>
    </div>
  );
}
