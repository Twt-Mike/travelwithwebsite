import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const tileOptions = [
  {
    id: 'host-creator',
    label: 'Host / Creator',
    description: 'Influencers, content creators & community leaders',
  },
  {
    id: 'private-group',
    label: 'Private Group / Family',
    description: 'Friends, families & private travel groups',
  },
  {
    id: 'team-company',
    label: 'Team or Company',
    description: 'Corporate retreats & team experiences',
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
          backgroundImage: `url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      {/* Dark Overlay - fades in */}
      <div
        className={cn(
          'absolute inset-0 bg-black/80 transition-opacity duration-700 ease-in-out',
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
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            {tileOptions.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile.id)}
                className={cn(
                  'group relative flex-1 rounded-2xl bg-white p-6 text-left shadow-lg transition-all duration-300',
                  'hover:scale-[1.02] hover:shadow-2xl',
                  'active:scale-[0.98]',
                  'focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/80',
                  selectedTile === tile.id && 'ring-2 ring-japan-pink ring-offset-2 ring-offset-black/80'
                )}
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900 md:text-xl">
                  {tile.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {tile.description}
                </p>
                
                {/* Selected indicator */}
                {selectedTile === tile.id && (
                  <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-japan-pink text-white">
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
