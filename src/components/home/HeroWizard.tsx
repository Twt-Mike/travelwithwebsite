const HeroWizard = () => {
  return (
    <section className="w-full">
      {/* Full-width hero image with centered text overlay */}
      <div className="relative h-[65vh] min-h-[400px] w-full md:h-[70vh] md:min-h-[500px]">
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/updatedsite/NewBanner.jpg"
          alt="Japan travel experience"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        
        {/* Dark gradient overlay - bottom portion only */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)'
          }}
        />
        
        {/* Centered hero text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-tight tracking-tight"
              style={{ 
                color: '#FFFFFF',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}
            >
              Your own Japan trip
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWizard;
