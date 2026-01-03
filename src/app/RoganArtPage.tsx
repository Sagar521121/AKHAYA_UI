import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';

export function RoganArtPage() {
  const products = [
    {
      id: 'rogan-art-1',
      title: 'Tree of Life Rogan Painting',
      region: 'Kutch, Gujarat',
      price: 4500,
      images: ['https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'rogan-art-2',
      title: 'Floral Rogan Wall Art',
      region: 'Kutch, Gujarat',
      price: 5200,
      images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'rogan-art-3',
      title: 'Peacock Design Rogan',
      region: 'Kutch, Gujarat',
      price: 6800,
      images: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'rogan-art-4',
      title: 'Traditional Mandala Rogan',
      region: 'Kutch, Gujarat',
      price: 5500,
      images: ['https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'rogan-art-5',
      title: 'Elephant Motif Rogan Art',
      region: 'Kutch, Gujarat',
      price: 7200,
      images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'rogan-art-6',
      title: 'Premium Rogan Panel',
      region: 'Kutch, Gujarat',
      price: 8500,
      images: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
            alt="Rogan Art Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h1 className="text-5xl md:text-6xl mb-4 font-serif">Rogan Art</h1>
              <p className="text-xl tracking-wide mb-2">A Rare 400-Year-Old Art Form</p>
              <p className="text-sm opacity-90">Hand-painted textiles from the heart of Kutch</p>
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
            <li className="text-gray-900">Rogan Art</li>
          </ul>
        </section>

        {/* Article Section */}
        <section className="container mx-auto px-6 py-12 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl mb-6 text-center">The Rare Heritage of Rogan</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Rogan art is a nearly extinct craft practiced by only one family in Nirona village, Kutch, Gujarat. 
                This 400-year-old technique involves painting on fabric using a thick, colored paste made from 
                castor oil. The name 'Rogan' comes from the Persian word for oil-based, perfectly describing this 
                unique medium.
              </p>
              <p>
                The artisan meticulously creates intricate designs by pressing a metal rod into the paint and 
                delicately applying it to cloth. The unique process creates mirror-image patterns when the fabric 
                is folded, a technique that requires extraordinary precision and years of practice. The paint never 
                fades and remains vibrant for generations, making each piece a timeless treasure.
              </p>
              <p>
                Each Rogan art piece is a labor of love, taking days or even weeks to complete. The craft was once 
                on the brink of extinction with just one family keeping the tradition alive. Today, through global 
                recognition and support, this ancient art form is experiencing a revival. When you purchase Rogan 
                art, you're not just buying a beautiful textile—you're helping preserve an irreplaceable cultural 
                heritage and supporting the last remaining artisans of this magnificent craft.
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
