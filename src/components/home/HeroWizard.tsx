import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Users, Heart, Building2 } from 'lucide-react';

const tripOptions = [
  {
    id: 'host-creator',
    title: 'Host / Content Creator',
    subtitle: 'For your online community',
    icon: Users,
  },
  {
    id: 'private-group',
    title: 'Private Group',
    subtitle: 'Friends, family or special event',
    icon: Heart,
  },
  {
    id: 'team-company',
    title: 'Team or Company',
    subtitle: 'Corporate groups & retreats',
    icon: Building2,
  },
];

const credentialChips = [
  '10+ years in the travel industry',
  '1,000+ guests personally led',
  '60+ multi-day tours guided',
  '650+ reviews • 4.9★ TourRadar guide profile',
];

const HeroWizard = () => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full">
      {/* HERO IMAGE WITH TEXT OVERLAY */}
      <div className="relative h-[60vh] min-h-[400px] w-full md:h-[68vh] md:min-h-[500px]">
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg"
          alt="Japan travel experience"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        
        {/* Bottom gradient overlay */}
        <div 
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)'
          }}
        />
        
        {/* Hero text content */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 md:pb-12 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto md:mx-0">
            <p 
              className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase mb-2 md:mb-3 text-center md:text-left"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              Small-group travel in Japan
            </p>
            <h1 
              className="text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight mb-2 md:mb-3 text-center md:text-left"
              style={{ color: '#FFFFFF' }}
            >
              Design your own Japan trip
            </h1>
            <p 
              className="text-[0.95rem] md:text-[1.1rem] font-normal text-center md:text-left"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              For creators, private groups & teams.
            </p>
          </div>
        </div>
      </div>

      {/* TRIP PLANNING SECTION */}
      <div 
        className={cn(
          'w-full px-5 py-8 md:py-12 transition-all duration-700 ease-out',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        )}
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <div className="max-w-md mx-auto">
          {/* Section title */}
          <h2 
            className="text-center text-[1rem] md:text-[1.1rem] font-medium mb-5 md:mb-6"
            style={{ color: '#4A4A4A' }}
          >
            I'm planning a trip as:
          </h2>

          {/* Option cards */}
          <div className="flex flex-col gap-3">
            {tripOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = selectedOption === option.id;
              
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={cn(
                    'group flex items-center gap-4 w-full rounded-2xl px-5 py-4 text-left transition-all duration-200',
                    'border bg-white',
                    'hover:shadow-md hover:scale-[1.01]',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2',
                    isSelected 
                      ? 'border-[#0C1A23] shadow-md ring-2 ring-[#0C1A23]/10' 
                      : 'border-[#E0E0E0] shadow-sm'
                  )}
                >
                  {/* Icon */}
                  <div 
                    className={cn(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors',
                      isSelected ? 'bg-[#0C1A23] text-white' : 'bg-[#F0F0F0] text-[#5A5A5A]'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-[15px] font-semibold leading-tight"
                      style={{ color: '#0C1A23' }}
                    >
                      {option.title}
                    </h3>
                    <p 
                      className="text-[13px] mt-0.5"
                      style={{ color: '#6B6B6B' }}
                    >
                      {option.subtitle}
                    </p>
                  </div>

                  {/* Selection indicator */}
                  {isSelected && (
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C1A23]">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Credential chips */}
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2">
            {credentialChips.map((chip, index) => (
              <span
                key={index}
                className="inline-block rounded-full px-3 py-1.5 text-[11px] md:text-[12px] font-medium"
                style={{ 
                  backgroundColor: '#EAEAEA',
                  color: '#555555'
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWizard;
