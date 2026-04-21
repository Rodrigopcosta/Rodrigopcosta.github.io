import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

// Carrega componentes pesados sob demanda
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  loading: () => <div className="py-25 text-center text-[#6b7280]">Carregando projetos...</div>,
  ssr: true,
});

const CaseSection = dynamic(() => import('@/components/CaseSection'), {
  loading: () => <div className="py-12 text-center text-[#6b7280]">Carregando case...</div>,
  ssr: true,
});

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