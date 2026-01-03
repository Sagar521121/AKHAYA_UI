import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';

export function KolhapuriChappalPage() {
  const products = [
    {
      id: 'kolhapuri-chappal-1',
      title: 'Classic Brown Kolhapuri',
      region: 'Kolhapur, Maharashtra',
      price: 1200,
      images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kolhapuri-chappal-2',
      title: 'Traditional Leather Chappal',
      region: 'Kolhapur, Maharashtra',
      price: 1500,
      images: ['https://images.unsplash.com/photo-1603487742131-4160ec999306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kolhapuri-chappal-3',
      title: 'Embroidered Kolhapuri',
      region: 'Kolhapur, Maharashtra',
      price: 2200,
      images: ['https://images.unsplash.com/photo-1560343090-f0409e92791a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kolhapuri-chappal-4',
      title: 'Handcrafted Tan Kolhapuri',
      region: 'Kolhapur, Maharashtra',
      price: 1800,
      images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kolhapuri-chappal-5',
      title: 'Designer Kolhapuri Sandal',
      region: 'Kolhapur, Maharashtra',
      price: 2500,
      images: ['https://images.unsplash.com/photo-1603487742131-4160ec999306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kolhapuri-chappal-6',
      title: 'Premium Leather Kolhapuri',
      region: 'Kolhapur, Maharashtra',
      price: 3200,
      images: ['https://images.unsplash.com/photo-1560343090-f0409e92791a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
            alt="Kolhapuri Chappal Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h1 className="text-5xl md:text-6xl mb-4 font-serif">Kolhapuri Chappals</h1>
              <p className="text-xl tracking-wide mb-2">Handcrafted Leather Footwear</p>
              <p className="text-sm opacity-90">Traditional artistry meets modern comfort</p>
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
            <li className="text-gray-900">Kolhapuri Chappals</li>
          </ul>
        </section>

        {/* Article Section */}
        <section className="container mx-auto px-6 py-12 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl mb-6 text-center">The Legacy of Kolhapuri Craftsmanship</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Kolhapuri chappals are a testament to Maharashtra's rich leather-working tradition, dating back 
                over 300 years. Each pair is handcrafted by skilled artisans in Kolhapur using vegetable-tanned 
                leather and traditional techniques passed down through generations. The distinctive open-toe design 
                and intricate strap patterns make these chappals instantly recognizable.
              </p>
              <p>
                The crafting process is entirely done by hand, from cutting the leather to stitching the straps. 
                Artisans use vegetable tanning methods, which are eco-friendly and result in leather that breathes 
                naturally. The leather is treated with natural oils and waxes, giving it a beautiful finish that 
                improves with age. Each chappal is unique, bearing the marks of individual craftsmanship.
              </p>
              <p>
                Known for their durability and comfort, Kolhapuri chappals improve with age, developing a beautiful 
                patina that tells the story of your journeys. The simple yet elegant design makes them versatile—
                perfect for casual wear, traditional outfits, or even as a fashion statement with contemporary 
                clothing. Owning a pair of Kolhapuri chappals means owning a piece of Indian heritage that combines 
                functionality with timeless style.
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
