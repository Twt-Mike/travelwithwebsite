import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const tileOptions = [
  {
    id: 'host-creator',
    label: 'Host / Content Creator',
    description: 'For your community',
    icon: '📣',
  },
  {
    id: 'private-group',
    label: 'Private Group / Family',
    description: 'For friends & families',
    icon: '👨‍👩‍👧',
  },
  {
    id: 'team-company',
    label: 'Team or Company',
    description: 'For corporate groups',
    icon: '🏢',
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
        <div className="mx-auto flex flex-col items-center">
          {/* Compact premium cards */}
          <div className="flex w-[85%] max-w-sm flex-col gap-5 md:gap-6">
            {tileOptions.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile.id)}
                className={cn(
                  'group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-left transition-all duration-200 md:px-5 md:py-3',
                  'border shadow-sm',
                  'hover:-translate-y-0.5 hover:shadow-md',
                  'focus:outline-none focus:ring-2 focus:ring-[#0C1A23]/15 focus:ring-offset-2',
                  'active:translate-y-0 active:shadow-sm',
                  selectedTile === tile.id
                    ? 'border-[#0C1A23] bg-white shadow-md'
                    : 'border-[#E5E5E5] bg-[#F7F7F7]'
                )}
              >
                {/* Icon */}
                <span className="text-lg md:text-xl">{tile.icon}</span>
                
                {/* Text content */}
                <div className="flex-1">
                  <h3 
                    className="font-sans text-[14px] font-bold leading-tight md:text-[15px]"
                    style={{ color: '#0C1A23' }}
                  >
                    {tile.label}
                  </h3>
                  <p 
                    className="mt-0.5 text-[11px] font-normal md:text-[12px]"
                    style={{ color: '#0C1A23', opacity: 0.65 }}
                  >
                    {tile.description}
                  </p>
                </div>
                
                {/* Selected checkmark */}
                {selectedTile === tile.id && (
                  <div 
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    style={{ backgroundColor: '#0C1A23' }}
                  >
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* EXPERIENCE BADGES */}
          <div className="mt-6 flex w-[85%] max-w-sm flex-wrap justify-center gap-2 md:gap-2.5">
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
