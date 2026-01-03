import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';

export function PashminaShawlPage() {
  const products = [
    {
      id: 'pashmina-shawl-1',
      title: 'Pure Kashmiri Pashmina',
      region: 'Kashmir',
      price: 25000,
      images: ['https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'pashmina-shawl-2',
      title: 'Embroidered Pashmina Stole',
      region: 'Kashmir',
      price: 32000,
      images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'pashmina-shawl-3',
      title: 'Reversible Pashmina Wrap',
      region: 'Kashmir',
      price: 28000,
      images: ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'pashmina-shawl-4',
      title: 'Kani Pashmina Shawl',
      region: 'Kashmir',
      price: 45000,
      images: ['https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'pashmina-shawl-5',
      title: 'Sozni Embroidered Pashmina',
      region: 'Kashmir',
      price: 38000,
      images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'pashmina-shawl-6',
      title: 'Fine Cashmere Pashmina',
      region: 'Kashmir',
      price: 35000,
      images: ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
            alt="Pashmina Shawl Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h1 className="text-5xl md:text-6xl mb-4 font-serif">Pashmina Shawls</h1>
              <p className="text-xl tracking-wide mb-2">The Finest Cashmere from Kashmir</p>
              <p className="text-sm opacity-90">Luxuriously soft, handwoven with generations of expertise</p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="container mx-auto px-6 py-6">
          <ul className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">Pashmina Shawls</li>
          </ul>
        </section>

        {/* Article Section */}
        <section className="container mx-auto px-6 py-12 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl mb-6 text-center">The Legend of Pashmina</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Pashmina is derived from the Persian word "Pashm," meaning soft gold. Each shawl is handcrafted 
                by master artisans in Kashmir using the finest cashmere wool from the Changthangi goats of the 
                Himalayas. These magnificent creatures survive in temperatures as low as -40°C at altitudes of 
                14,000 feet, producing the world's finest wool.
              </p>
              <p>
                Known for their incredible softness, warmth, and lightness, these shawls represent centuries of 
                tradition and unparalleled craftsmanship. A single Pashmina shawl can take several weeks to complete, 
                with skilled artisans working tirelessly to create intricate patterns and designs that have been 
                passed down through generations.
              </p>
              <p>
                The art of Pashmina weaving has been practiced in Kashmir for over 500 years. Each piece tells a 
                story of heritage, dedication, and the timeless beauty of traditional craftsmanship. Owning a 
                Pashmina shawl is not just about luxury—it's about preserving an ancient art form and supporting 
                the artisan communities of Kashmir.
              </p>
            </div>
          </article>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl text-center mb-12">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                region={product.region}
                image={product.images[0]}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
