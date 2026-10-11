import React from 'react';
import { ParticlesBackground } from './components/reactbits/ParticlesBackground';
import { SoftAurora } from './components/reactbits/SoftAurora';
import { ClickSpark } from './components/reactbits/ClickSpark';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractivePomodoroDemo } from './components/InteractivePomodoroDemo';
import { SoundscapeSynthesizerDemo } from './components/SoundscapeSynthesizerDemo';
import { ArchitectureTour } from './components/ArchitectureTour';
import { FeaturesGrid } from './components/FeaturesGrid';
import { SilencingRealitySection } from './components/SilencingRealitySection';
import { CreatorAttributionSection } from './components/CreatorAttributionSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { FloatingDock } from './components/FloatingDock';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#090d12] text-[#e6edf3] selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Background Interactive Layer (React Bits Inspirations) */}
      <ParticlesBackground particleCount={48} speed={0.4} />
      <SoftAurora />
      <ClickSpark />

      {/* Main Layout */}
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <InteractivePomodoroDemo />
        <SoundscapeSynthesizerDemo />
        <ArchitectureTour />
        <FeaturesGrid />
        <SilencingRealitySection />
        <CreatorAttributionSection />
        <DownloadSection />
      </main>

      <Footer />
      <FloatingDock />
    </div>
  );
};

export default App;
