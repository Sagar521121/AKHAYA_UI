import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductCard } from './components/ProductCard';
import { CraftTreasures } from './components/CraftTreasures';
import { LuxuryCategoryNav } from './components/LuxuryCategoryNav';
import { Footer } from './components/Footer';
import { EditorialSection } from './components/EditorialSection';
import { CategoryShowcase } from './components/CategoryShowcase';
import { HomeDecorShowcase } from './components/HomeDecorShowcase';
import { BrandStory } from './components/BrandStory';
import { NewsletterSection } from './components/NewsletterSection';
import { TrustBadges } from './components/TrustBadges';
import { DecorativeDivider } from './components/DecorativeDivider';
import { AdminBanner } from './components/AdminBanner';
import { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const products = [
    {
      id: 1,
      title: 'Pashmina Shawl',
      region: 'Jammu Kashmir',
      image: 'https://images.unsplash.com/photo-1510574457807-3d9bf494ff6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNobWluYSUyMHNoYXdsfGVufDF8fHx8MTc2NjY0NjUxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      showMoreInfo: false,
      link: '/pashmina-shawls'
    },
    {
      id: 2,
      title: 'Kalamkari',
      region: 'Andhra Pradesh',
      image: 'https://images.unsplash.com/photo-1762173886363-de541417e48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbWthcmklMjBmYWJyaWN8ZW58MXx8fHwxNzY2NjQ2NTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      showMoreInfo: false,
      link: '/kalamkari'
    },
    {
      id: 3,
      title: 'Rogan Art',
      region: 'Gujarat',
      image: 'https://images.unsplash.com/photo-1698581075105-924b6c70b5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlJTIwYXJ0fGVufDF8fHx8MTc2NjY0NjUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      showMoreInfo: true,
      link: '/rogan-art'
    },
    {
      id: 4,
      title: 'Mysore Silk Saree',
      region: 'Karnataka',
      image: 'https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWV8ZW58MXx8fHwxNzY2NjQ2NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      showMoreInfo: false,
      link: '/mysore-silk'
    },
    {
      id: 5,
      title: 'Kolhapuri Chappal',
      region: 'Kolhapur',
      image: 'https://images.unsplash.com/photo-1765961999112-7aea89449b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2xoYXB1cmklMjBjaGFwcGFsfGVufDF8fHx8MTc2NjY0NjUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      showMoreInfo: false,
      link: '/kolhapuri-chappals'
    },
    {
      id: 6,
      title: 'Carpet',
      region: 'Mirzapur',
      image: 'https://images.unsplash.com/photo-1753100410452-ba4b5426908a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjYXJwZXR8ZW58MXx8fHwxNzY2NjQ2NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      showMoreInfo: false,
      link: '/mirzapur-carpets'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      const nextIndex = (currentIndex + 1) % products.length;
      const nextCard = sliderRef.current.children[nextIndex] as HTMLElement;
      const currentCard = sliderRef.current.children[currentIndex] as HTMLElement;
      currentCard.style.transform = 'translateX(-100%)';
      nextCard.style.transform = 'translateX(0)';
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const prevIndex = (currentIndex - 1 + products.length) % products.length;
      const prevCard = sliderRef.current.children[prevIndex] as HTMLElement;
      const currentCard = sliderRef.current.children[currentIndex] as HTMLElement;
      currentCard.style.transform = 'translateX(100%)';
      prevCard.style.transform = 'translateX(0)';
      setCurrentIndex(prevIndex);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      <AdminBanner />
      
      <main className="bg-[#FFFEF8]">
        <HeroSection />
        
        {/* Products Grid */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                region={product.region}
                image={product.image}
                showMoreInfo={product.showMoreInfo}
                link={product.link}
              />
            ))}
          </div>
        </section>

        {/* Decorative Divider */}
        <DecorativeDivider variant="diamond" />

        {/* Luxury Category Navigation */}
        <LuxuryCategoryNav />

        {/* Decorative Divider */}
        <DecorativeDivider variant="circle" />

        {/* Craft Treasures Section */}
        <CraftTreasures />

        {/* Shop by Category Section */}
        <section className="container mx-auto px-[24px] py-[32px] border-t border-gray-100 relative group">
          <h2 className="text-3xl text-center mb-12">Shop by Category</h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Left Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('shop-slider');
                if (container) {
                  container.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -translate-x-6"
              aria-label="Previous categories"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div 
              id="shop-slider"
              className="flex gap-8 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Jewelry & Accessories */}
              <div 
                onClick={() => navigate('/category/jewelry-accessories')}
                className="w-[340px] md:w-[380px] bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
              >
                <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1760786933663-327c858d5434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBqZXdlbHJ5JTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY2NzYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Jewelry & Accessories"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg mb-1">Jewelry & Accessories</h3>
                  <p className="text-gray-600 text-sm">Handcrafted ornaments</p>
                </div>
              </div>
              
              {/* Home Decor */}
              <div 
                onClick={() => navigate('/category/home-decor')}
                className="w-[340px] md:w-[380px] bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
              >
                <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1627811373475-0b468b06d620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzY2NzYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Home Decor"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg mb-1">Home Decor</h3>
                  <p className="text-gray-600 text-sm">Traditional & modern pieces</p>
                </div>
              </div>

              {/* Pottery & Ceramics */}
              <div 
                onClick={() => navigate('/category/pottery-ceramics')}
                className="w-[340px] md:w-[380px] bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
              >
                <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwb3R0ZXJ5JTIwY2VyYW1pY3N8ZW58MXx8fHwxNzY2NzYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pottery & Ceramics"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg mb-1">Pottery & Ceramics</h3>
                  <p className="text-gray-600 text-sm">Artisan crafted pieces</p>
                </div>
              </div>

              {/* Textiles & Fabrics */}
              <div 
                onClick={() => navigate('/category/textiles-fabrics')}
                className="w-[340px] md:w-[380px] bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
              >
                <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMGZhYnJpY3N8ZW58MXx8fHwxNzY2NzYwOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Textiles & Fabrics"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg mb-1">Textiles & Fabrics</h3>
                  <p className="text-gray-600 text-sm">Handwoven textiles</p>
                </div>
              </div>

              {/* Bags & Leather */}
              <div 
                onClick={() => navigate('/category/bags-leather')}
                className="w-[340px] md:w-[380px] bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
              >
                <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1647540945262-7da3bd1a3d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiYWdzJTIwbGVhdGhlcnxlbnwxfHx8fDE3NjY3NjA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Bags & Leather"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg mb-1">Bags & Leather</h3>
                  <p className="text-gray-600 text-sm">Handcrafted leather goods</p>
                </div>
              </div>

              {/* Footwear */}
              <div 
                onClick={() => navigate('/category/footwear')}
                className="w-[340px] md:w-[380px] bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
              >
                <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1670776955198-9055d8e631a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb290d2VhciUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2Njc2MDk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Footwear"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg mb-1">Footwear</h3>
                  <p className="text-gray-600 text-sm">Traditional footwear</p>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('shop-slider');
                if (container) {
                  container.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-x-6"
              aria-label="Next categories"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Clothes Categories */}
        <section className="container mx-auto p-[24px] border-t border-gray-100">
          <h2 className="text-3xl text-center mb-12">Clothes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div 
              onClick={() => navigate('/category/men')}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1510574457807-3d9bf494ff6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNobWluYSUyMHNoYXdsfGVufDF8fHx8MTc2NjY0NjUxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Men's collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl">Men</h3>
              </div>
            </div>
            
            <div 
              onClick={() => navigate('/category/women')}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWV8ZW58MXx8fHwxNzY2NjQ2NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Women's collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl">Women</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Divider */}
        <DecorativeDivider variant="star" />

        {/* Iconic Pieces Section */}
        <section className="container mx-auto p-[12px] px-[12px] py-[0px]">
          <h2 className="text-3xl text-center mb-12">Iconic Pieces</h2>
        </section>

        {/* Category Showcase */}
        <CategoryShowcase />

        {/* Decorative Divider */}
        <DecorativeDivider variant="diamond" />

        {/* Home Decor Showcase */}
        <HomeDecorShowcase />

        {/* Decorative Divider */}
        <DecorativeDivider variant="circle" />

        {/* Brand Story */}
        <BrandStory />

        {/* Decorative Divider */}
        <DecorativeDivider variant="star" />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Decorative Divider */}
        <DecorativeDivider variant="diamond" />

        {/* Editorial Section */}
        <EditorialSection />

        {/* Decorative Divider */}
        <DecorativeDivider variant="circle" />

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}