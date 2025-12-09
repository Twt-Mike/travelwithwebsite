import HeroWizard from '@/components/home/HeroWizard';
import MobileNav from '@/components/MobileNav';

const Index = () => {
  return (
    <>
      <MobileNav />
      <main className="pt-14 md:pt-16">
        <HeroWizard />
      </main>
    </>
  );
};

export default Index;
