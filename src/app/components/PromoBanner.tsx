import bannerImg from 'figma:asset/5190700839c5800153d85edac5a0d1f729e646d9.png';

export function PromoBanner() {
  return (
    <section className="container mx-auto px-[24px] py-[32px]">
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#E8B4A1] max-w-7xl mx-auto group">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left: Image */}
          <div className="h-full overflow-hidden">
            <img 
              src={bannerImg} 
              alt="Dhurries and door mats"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          
          {/* Right: Text Content */}
          <div className="p-12 md:p-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl mb-2 font-serif italic text-[#4A2C2A] tracking-wide group-hover:translate-x-1 transition-transform duration-500">
              Refresh Your<br />Floors
            </h2>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-8 text-[#4A2C2A] font-medium">
              Dhurries and Door Mats
            </p>
            <button className="bg-[#5A1A1A] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#4A1515] hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}