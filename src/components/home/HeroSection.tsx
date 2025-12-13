import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Hero image container */}
      <div className="relative h-[70vh] min-h-[500px] w-full">
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg"
          alt="Japan travel experience"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center 35%' }}
        />
        
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%)'
          }}
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col px-5 pt-20 pb-8">
          {/* Search bar */}
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2 rounded-full bg-white p-1.5 pl-4 shadow-lg">
              <Search className="h-5 w-5 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Find places and things to do"
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none"
              />
              <button className="shrink-0 rounded-full bg-[#004CB8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#003d94] transition-colors">
                Search
              </button>
            </div>
          </div>
          
          {/* Tagline - pushed to bottom */}
          <div className="mt-auto">
            <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight text-white">
              Your own Japan trip
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
