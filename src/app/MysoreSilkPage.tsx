import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';

export function MysoreSilkPage() {
  const products = [
    {
      id: 'mysore-silk-1',
      title: 'Traditional Mysore Silk Saree',
      region: 'Mysore, Karnataka',
      price: 18000,
      images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mysore-silk-2',
      title: 'Zari Border Mysore Silk',
      region: 'Mysore, Karnataka',
      price: 22000,
      images: ['https://images.unsplash.com/photo-1583391733956-6c78276477e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mysore-silk-3',
      title: 'Royal Blue Mysore Silk',
      region: 'Mysore, Karnataka',
      price: 20000,
      images: ['https://images.unsplash.com/photo-1617117698324-8fc7decf2f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mysore-silk-4',
      title: 'Emerald Green Mysore Silk',
      region: 'Mysore, Karnataka',
      price: 24000,
      images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mysore-silk-5',
      title: 'Maroon Wedding Mysore Silk',
      region: 'Mysore, Karnataka',
      price: 28000,
      images: ['https://images.unsplash.com/photo-1583391733956-6c78276477e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mysore-silk-6',
      title: 'Golden Temple Border Silk',
      region: 'Mysore, Karnataka',
      price: 32000,
      images: ['https://images.unsplash.com/photo-1617117698324-8fc7decf2f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
            alt="Mysore Silk Saree Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h1 className="text-5xl md:text-6xl mb-4 font-serif">Mysore Silk Sarees</h1>
              <p className="text-xl tracking-wide mb-2">The Pride of Karnataka</p>
              <p className="text-sm opacity-90">Luxurious pure silk with rich zari work</p>
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
            <li className="text-gray-900">Mysore Silk Sarees</li>
          </ul>
        </section>

        {/* Article Section */}
        <section className="container mx-auto px-6 py-12 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl mb-6 text-center">The Heritage of Mysore Silk</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Mysore silk sarees are renowned worldwide for their fine texture, lustrous sheen, and vibrant colors. 
                Crafted from pure mulberry silk and adorned with intricate zari borders, these sarees are a symbol of 
                elegance and tradition. The silk is soft to touch yet incredibly durable, making it a cherished 
                addition to any wardrobe.
              </p>
              <p>
                The Government of Karnataka's silk weaving factory in Mysore has been producing these exquisite sarees 
                since 1912, maintaining the highest standards of quality and craftsmanship. Each saree undergoes rigorous 
                quality checks and carries a silk mark certification, ensuring authenticity and pure silk content. The 
                traditional designs feature temple borders, intricate pallus, and rich color combinations that reflect 
                Karnataka's cultural heritage.
              </p>
              <p>
                What sets Mysore silk apart is its unique crepe weave that gives the fabric a distinctive texture and 
                fall. The zari work, done with pure gold or silver threads, adds a regal touch to these sarees. Whether 
                worn for weddings, festivals, or special occasions, a Mysore silk saree is a timeless piece that can be 
                passed down through generations, becoming a family heirloom that carries memories and tradition.
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
