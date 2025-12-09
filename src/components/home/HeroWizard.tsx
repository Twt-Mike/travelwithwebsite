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
      {/* SECTION 1 — HERO IMAGE (no text overlay) */}
      <div className="relative h-[45vh] min-h-[300px] w-full overflow-hidden md:h-[50vh] md:min-h-[360px]">
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg"
          alt="Japan travel scene"
          className="h-full w-full object-cover"
        />
      </div>

      {/* SECTION 2 — HEADER BAND (neutral background) */}
      <div 
        className="w-full px-5 py-6 text-center md:py-8"
        style={{ backgroundColor: '#F4F4F2' }}
      >
        <p 
          className="mb-1 text-[12px] font-medium tracking-wide uppercase md:text-[13px]"
          style={{ color: '#6D717A' }}
        >
          Planning a Japan trip?
        </p>
        <h1 
          className="font-sans text-[2rem] font-bold md:text-[2.5rem] leading-tight"
          style={{ color: '#001F2F' }}
        >
          I am…
        </h1>
      </div>

      {/* SECTION 3 — WHITE CONTENT (buttons + badges) */}
      <div 
        className={cn(
          'w-full bg-white px-5 py-6 transition-all duration-700 ease-out md:px-8 md:py-8',
          cardVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-4 opacity-0'
        )}
      >
        <div className="mx-auto max-w-lg">
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

          {/* EXPERIENCE BADGES */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-2.5">
            {experienceBadges.map((badge, index) => (
              <span
                key={index}
                className="inline-block rounded-full px-3 py-1.5 text-[11px] font-medium md:text-[12px]"
                style={{ 
                  backgroundColor: '#EBEBEB',
                  color: '#444'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWizard;
