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
  '10+ years in the travel industry',
  '1,000+ guests personally led',
  '60+ multi-day tours guided',
  '650+ reviews • 4.9★ TourRadar Guide Profile',
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
        {/* Hero Image - easily swappable, displayed at natural color */}
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg"
          alt="Japan travel scene"
          className="h-full w-full object-cover"
        />
        
        {/* Subtle dark gradient overlay (bottom to top) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 40%, transparent 100%)'
          }}
        />
      </div>

      {/* SECTION 2 — WHITE CONTENT CARD OVERLAY */}
      <div className="relative z-10 mx-auto w-[90%] max-w-lg -mt-28 md:-mt-36">
        <div
          className={cn(
            'bg-white px-5 py-4 transition-all duration-700 ease-out md:px-8 md:py-5',
            cardVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          )}
          style={{ 
            borderRadius: '18px',
            boxShadow: '0 -8px 22px rgba(0, 0, 0, 0.15), 0 8px 32px -8px rgba(0, 0, 0, 0.12)'
          }}
        >
          {/* Small top label */}
          <p className="mb-1.5 text-center text-[11px] font-medium tracking-wide text-gray-400 uppercase">
            Planning a Japan trip?
          </p>

          {/* Main heading */}
          <h1 className="mb-5 text-center font-sans text-[2.5rem] font-bold text-gray-900 md:text-5xl leading-tight">
            I am…
          </h1>

          {/* Three solid dark navy buttons */}
          <div className="flex flex-col gap-[18px] md:gap-5">
            {tileOptions.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile.id)}
                className={cn(
                  'group relative w-full rounded-[14px] px-5 py-[18px] text-left transition-all duration-200 md:px-6 md:py-5',
                  'hover:scale-[1.015] hover:shadow-md',
                  'focus:outline-none focus:ring-2 focus:ring-[#001F2F]/30 focus:ring-offset-2',
                  'active:scale-[0.98]',
                  selectedTile === tile.id
                    ? 'bg-[#001F2F] shadow-md'
                    : 'bg-[#001F2F]'
                )}
              >
                <h3 className="font-sans text-[17px] font-semibold text-white md:text-lg">
                  {tile.label}
                </h3>
                <p className="mt-0.5 text-[13px] text-white/80 md:text-sm">
                  {tile.description}
                </p>
                
                {/* Selected checkmark */}
                {selectedTile === tile.id && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#001F2F]">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* SECTION 3 — EXPERIENCE BADGES */}
          <div className="mt-5 flex flex-wrap justify-center gap-1.5 md:gap-2">
            {experienceBadges.map((badge, index) => (
              <span
                key={index}
                className="inline-block rounded-full px-2.5 py-1 text-[10px] font-medium md:px-3 md:py-1.5 md:text-[11px]"
                style={{ 
                  backgroundColor: '#F2F2F2',
                  color: '#333'
                }}
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
