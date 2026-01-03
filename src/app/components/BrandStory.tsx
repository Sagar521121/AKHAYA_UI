export function BrandStory() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 tracking-wide">The AKHAYA Heritage</h2>
        <div className="w-24 h-[1px] bg-black mx-auto mb-8"></div>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          AKHAYA celebrates the timeless artistry of Indian craftsmen, preserving centuries-old traditions 
          through contemporary luxury. Each piece tells a story of dedication, skill, and cultural heritage.
        </p>
        <p className="text-gray-600 leading-relaxed">
          From the snow-capped mountains of Kashmir to the vibrant streets of Andhra Pradesh, we partner 
          directly with master artisans to bring you authentic, handcrafted treasures that embody the soul 
          of India's rich artistic legacy.
        </p>
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div>
            <div className="text-4xl mb-2">500+</div>
            <div className="text-sm text-gray-600">Artisan Partners</div>
          </div>
          <div>
            <div className="text-4xl mb-2">15</div>
            <div className="text-sm text-gray-600">Indian States</div>
          </div>
          <div>
            <div className="text-4xl mb-2">100%</div>
            <div className="text-sm text-gray-600">Handcrafted</div>
          </div>
        </div>
      </div>
    </section>
  );
}
