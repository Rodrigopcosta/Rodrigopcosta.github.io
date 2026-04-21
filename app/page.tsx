import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CaseSection from '@/components/CaseSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

export default function Home() {
  return (
    <main>
      <div
        id="particles"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      />
      <Particles />

      <HeroSection />
      <AboutSection />
      <CaseSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
