import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const tileOptions = [
  {
    id: 'host-creator',
    label: 'Host / Content Creator',
    description: 'For your community',
  },
  {
    id: 'private-group',
    label: 'Private Group / Family',
    description: 'For friends & families',
  },
  {
    id: 'team-company',
    label: 'Team or Company',
    description: 'For corporate groups',
  },
];

const experienceBadges = [
  '10+ years in travel',
  '1,000+ guests led',
  '60+ tours guided',
  '650+ reviews',
  '4.9★ TourRadar',
];

const HeroWizard = () => {
  const [cardVisible, setCardVisible] = useState(false);
  const [selectedTile, setSelectedTile] = useState<string | null>(null);

  // Animate card on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setCardVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleTileClick = (id: string) => {
    setSelectedTile(id);
    console.log('Selected tile:', id);
  };

  return (
    <section className="relative w-full">
      {/* SECTION 1 — HERO IMAGE */}
      <div className="relative h-[48vh] min-h-[340px] w-full overflow-hidden md:h-[55vh] md:min-h-[400px]">
        {/* Hero Image - easily swappable */}
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg"
          alt="Japan travel scene"
          className="h-full w-full object-cover brightness-[1.4]"
        />
        
        {/* Dark gradient overlay (bottom to top) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
          }}
        />
      </div>

      {/* SECTION 2 — WHITE CONTENT CARD OVERLAY */}
      <div className="relative z-10 mx-auto w-[92%] max-w-lg -mt-28 md:-mt-36">
        <div
          className={cn(
            'rounded-3xl bg-white px-6 py-6 transition-all duration-700 ease-out md:px-10 md:py-8',
            cardVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          )}
          style={{ 
            borderRadius: '24px',
            boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.12), 0 10px 40px -10px rgba(0, 0, 0, 0.15)'
          }}
        >
          {/* Small top label */}
          <p className="mb-2 text-center text-xs font-medium tracking-wide text-gray-400 uppercase">
            Planning a Japan trip?
          </p>

          {/* Main heading */}
          <h1 className="mb-6 text-center font-sans text-4xl font-bold text-gray-900 md:text-5xl">
            I am…
          </h1>

          {/* Three solid dark navy buttons */}
          <div className="flex flex-col gap-4 md:gap-5">
            {tileOptions.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile.id)}
                className={cn(
                  'group relative w-full rounded-[14px] px-6 py-5 text-left transition-all duration-200',
                  'hover:scale-[1.02] hover:shadow-lg',
                  'focus:outline-none focus:ring-2 focus:ring-[#001F2F]/40 focus:ring-offset-2',
                  'active:scale-[0.98]',
                  selectedTile === tile.id
                    ? 'bg-[#001F2F] shadow-lg ring-2 ring-[#001F2F]/20'
                    : 'bg-[#001F2F]'
                )}
              >
                <h3 className="font-sans text-lg font-semibold text-white md:text-xl">
                  {tile.label}
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  {tile.description}
                </p>
                
                {/* Selected checkmark */}
                {selectedTile === tile.id && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#001F2F]">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* SECTION 3 — EXPERIENCE BADGES */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {experienceBadges.map((badge, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-10 md:h-14" />
    </section>
  );
};

export default HeroWizard;
