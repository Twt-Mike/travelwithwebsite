import MobileNav from '@/components/MobileNav';
import HeroSection from '@/components/home/HeroSection';
import TripTypeSection from '@/components/home/TripTypeSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <MobileNav />
      <main>
        <HeroSection />
        <TripTypeSection />
      </main>
    </div>
  );
};

export default Index;
