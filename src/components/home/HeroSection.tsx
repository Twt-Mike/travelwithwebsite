const HeroSection = () => {
  return (
    <section className="relative">
      {/* Hero image container - reduced height for mobile */}
      <div className="relative h-[45vh] md:h-[55vh] w-full">
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg"
          alt="Japan travel experience"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%)'
          }}
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-6">
          {/* Tagline */}
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight text-white">
            Your own Japan trip
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
