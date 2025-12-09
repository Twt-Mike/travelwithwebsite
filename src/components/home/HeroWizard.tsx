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
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg')`,
        }}
      />

      {/* Dark Overlay - fades in */}
      <div
        className={cn(
          'absolute inset-0 bg-black/50 transition-opacity duration-700 ease-in-out',
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
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white/90 backdrop-blur-sm">
            Planning a Japan trip?
          </span>

          {/* Main Headline */}
          <h1 className="mb-10 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            I am…
          </h1>

          {/* Tiles */}
          <div className="flex flex-col gap-5 md:flex-row md:gap-6">
            {tileOptions.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile.id)}
                className={cn(
                  'group relative flex-1 rounded-xl px-6 py-5 md:py-6 text-left',
                  'bg-black/40 backdrop-blur-md border border-white/10',
                  'shadow-lg shadow-black/20',
                  'transition-all duration-300 ease-out',
                  'hover:scale-[1.03] hover:bg-black/50 hover:shadow-xl hover:shadow-black/30 hover:border-white/20',
                  'active:scale-[0.98]',
                  'focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent',
                  selectedTile === tile.id && 'ring-2 ring-japan-pink ring-offset-2 ring-offset-transparent border-japan-pink/50'
                )}
              >
                <h3 className="text-lg font-semibold text-white md:text-xl leading-tight">
                  {tile.label}
                </h3>
                <p className="mt-1 text-sm text-white/60 leading-snug">
                  {tile.description}
                </p>
                
                {/* Selected indicator */}
                {selectedTile === tile.id && (
                  <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-japan-pink text-white shadow-md">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Subtle hint */}
          <p className="mt-8 text-sm text-white/60">
            Select one to begin your journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroWizard;
