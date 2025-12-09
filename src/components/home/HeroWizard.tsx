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
      <div className="relative h-[55vh] min-h-[400px] w-full overflow-hidden md:h-[60vh]">
        {/* Hero Image - easily swappable */}
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg"
          alt="Japan travel scene"
          className="h-full w-full object-cover"
        />
        
        {/* Dark gradient overlay (bottom to top) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
          }}
        />
      </div>

      {/* SECTION 2 — WHITE CONTENT CARD OVERLAY */}
      <div className="relative z-10 mx-auto w-[92%] max-w-lg -mt-24 md:-mt-32">
        <div
          className={cn(
            'rounded-3xl bg-white px-6 py-8 shadow-xl shadow-black/10 transition-all duration-700 ease-out md:px-10 md:py-10',
            cardVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          )}
          style={{ borderRadius: '24px' }}
        >
          {/* Small top label */}
          <p className="mb-3 text-center text-sm font-medium tracking-wide text-gray-500">
            Planning a Japan trip?
          </p>

          {/* Main heading */}
          <h1 className="mb-8 text-center font-sans text-3xl font-bold text-gray-900 md:text-4xl">
            I am…
          </h1>

          {/* Three solid buttons */}
          <div className="flex flex-col gap-4">
            {tileOptions.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile.id)}
                className={cn(
                  'group w-full rounded-2xl border-2 px-5 py-4 text-left transition-all duration-200',
                  'hover:border-japan-indigo hover:bg-japan-indigo/5 hover:shadow-md',
                  'focus:outline-none focus:ring-2 focus:ring-japan-indigo/40 focus:ring-offset-2',
                  'active:scale-[0.98]',
                  selectedTile === tile.id
                    ? 'border-japan-indigo bg-japan-indigo/5 shadow-md'
                    : 'border-gray-200 bg-white'
                )}
                style={{ borderRadius: '16px' }}
              >
                <h3 className={cn(
                  'font-sans text-lg font-semibold transition-colors md:text-xl',
                  selectedTile === tile.id ? 'text-japan-indigo' : 'text-gray-900'
                )}>
                  {tile.label}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {tile.description}
                </p>
                
                {/* Selected checkmark */}
                {selectedTile === tile.id && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-japan-indigo text-white">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* SECTION 3 — EXPERIENCE BADGES */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
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
      <div className="h-12 md:h-16" />
    </section>
  );
};

export default HeroWizard;
