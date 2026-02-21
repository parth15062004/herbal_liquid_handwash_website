import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { IngredientsSection } from './components/ingredients-section';
import { ProcessSection } from './components/process-section';
import { ChemicalReactionSection } from './components/chemical-reaction-section';
import { VideoSection } from './components/video-section';
import { TestingSection } from './components/testing-section';
import { SDGSection } from './components/sdg-section';
import { GallerySection } from './components/gallery-section';
import { FutureScopeSection } from './components/future-scope-section';
import CostingSection from './components/costing-section';
import { ConclusionSection } from './components/conclusion-section';
import { TeamSection } from './components/team-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <IngredientsSection />
      <ProcessSection />
      <ChemicalReactionSection />
      <VideoSection />
      <TestingSection />
      <SDGSection />
      <GallerySection />
      <FutureScopeSection />
      <CostingSection />
      <ConclusionSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
