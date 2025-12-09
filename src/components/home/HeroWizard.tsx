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

const HeroWizard = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedTile, setSelectedTile] = useState<string | null>(null);

  // Fade in overlay after image loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleTileClick = (id: string) => {
    setSelectedTile(id);
    console.log('Selected tile:', id);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - with increased brightness */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[1.4]"
        style={{
          backgroundImage: `url('https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-black/30 transition-opacity duration-700 ease-in-out',
          overlayVisible ? 'opacity-100' : 'opacity-0'
        )}
      />

      {/* Content */}
      <div
        className={cn(
          'relative z-10 flex min-h-screen items-center justify-center px-4 py-20 transition-opacity duration-500 delay-300',
          overlayVisible ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="w-full max-w-2xl text-center">
          {/* Small Label */}
          <span className="mb-4 inline-block rounded-full bg-white/15 px-5 py-2.5 text-sm font-medium tracking-wide text-white backdrop-blur-sm border border-white/20">
            Planning a Japan trip?
          </span>

          {/* Experience Bar - Now above "I am..." */}
          <div className="mb-8 md:mb-10">
            {/* Desktop version - single line */}
            <p className="hidden md:block text-sm text-white/85 tracking-wide font-medium">
              10+ years in travel • 1,000+ guests personally led • 60+ multi-day tours • 650+ reviews • 4.9★ on TourRadar
            </p>
            
            {/* Mobile version - pill badges */}
            <div className="flex md:hidden flex-wrap justify-center gap-2">
              {[
                '10+ years in travel',
                '1,000+ guests led',
                '60+ tours guided',
                '650+ reviews',
                '4.9★ TourRadar'
              ].map((stat, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-black/30 px-3 py-1.5 text-xs text-white/90 border border-white/15"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 font-sans text-4xl font-bold text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            I am…
          </h1>

          {/* Tiles - Clean Modern Style (no heavy blur) */}
          <div className="flex flex-col gap-6 md:gap-7 md:flex-row">
            {tileOptions.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile.id)}
                className={cn(
                  'group relative flex-1 text-left',
                  'rounded-[22px] px-6 py-6 md:py-7',
                  'bg-black/40 backdrop-blur-[2px]',
                  'border border-white/35',
                  'shadow-lg shadow-black/25',
                  'transition-all duration-300 ease-out',
                  'hover:scale-[1.03] hover:bg-black/45 hover:shadow-xl hover:shadow-black/30 hover:border-white/45',
                  'active:scale-[0.98]',
                  'focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent',
                  selectedTile === tile.id && 'ring-2 ring-japan-pink ring-offset-2 ring-offset-transparent border-japan-pink/60 bg-black/50'
                )}
              >
                <h3 className="font-sans text-xl font-semibold text-white md:text-2xl leading-tight drop-shadow-sm">
                  {tile.label}
                </h3>
                <p className="mt-2 font-sans text-sm text-white/80 leading-snug md:text-base font-normal">
                  {tile.description}
                </p>
                
                {/* Selected indicator */}
                {selectedTile === tile.id && (
                  <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-japan-pink text-white shadow-lg">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWizard;
