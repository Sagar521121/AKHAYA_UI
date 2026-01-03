import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';

export function MirzapurCarpetPage() {
  const products = [
    {
      id: 'mirzapur-carpet-1',
      title: 'Hand-Knotted Wool Carpet',
      region: 'Mirzapur, Uttar Pradesh',
      price: 35000,
      images: ['https://images.unsplash.com/photo-1600166898405-da9535204843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mirzapur-carpet-2',
      title: 'Persian Design Carpet',
      region: 'Mirzapur, Uttar Pradesh',
      price: 42000,
      images: ['https://images.unsplash.com/photo-1613989032400-c93e3ee1f8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mirzapur-carpet-3',
      title: 'Floral Mirzapur Rug',
      region: 'Mirzapur, Uttar Pradesh',
      price: 28000,
      images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mirzapur-carpet-4',
      title: 'Contemporary Wool Carpet',
      region: 'Mirzapur, Uttar Pradesh',
      price: 38000,
      images: ['https://images.unsplash.com/photo-1600166898405-da9535204843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mirzapur-carpet-5',
      title: 'Traditional Runner Carpet',
      region: 'Mirzapur, Uttar Pradesh',
      price: 25000,
      images: ['https://images.unsplash.com/photo-1613989032400-c93e3ee1f8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'mirzapur-carpet-6',
      title: 'Premium Silk Blend Carpet',
      region: 'Mirzapur, Uttar Pradesh',
      price: 55000,
      images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1613989032400-c93e3ee1f8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
            alt="Mirzapur Carpet Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h1 className="text-5xl md:text-6xl mb-4 font-serif">Mirzapur Carpets</h1>
              <p className="text-xl tracking-wide mb-2">India's Carpet Weaving Capital</p>
              <p className="text-sm opacity-90">Hand-knotted excellence in every thread</p>
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
            <li className="text-gray-900">Mirzapur Carpets</li>
          </ul>
        </section>

        {/* Article Section */}
        <section className="container mx-auto px-6 py-12 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl mb-6 text-center">The Weaving Heritage of Mirzapur</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Mirzapur, a city in Uttar Pradesh, has been India's carpet weaving hub for over 400 years. Known 
                for producing some of the finest hand-knotted carpets in the world, Mirzapur artisans combine 
                Persian techniques with Indian aesthetics to create unique masterpieces. The tradition was brought 
                to India by Mughal emperors and has since evolved into a distinctly Indian craft.
              </p>
              <p>
                Each carpet is meticulously hand-knotted using premium wool and silk, with intricate patterns that 
                can take months to complete. The density of knots determines the quality—Mirzapur carpets can have 
                anywhere from 100 to 400 knots per square inch. Artisans work on vertical looms, tying each knot 
                by hand, row by row, following complex patterns that have been perfected over centuries.
              </p>
              <p>
                These carpets are not just floor coverings—they are heirlooms that appreciate in value and beauty 
                over generations. The natural dyes used create colors that deepen and mature with age, while the 
                hand-knotted construction ensures durability that can last for centuries. From traditional Persian 
                motifs to contemporary geometric designs, Mirzapur carpets represent the pinnacle of Indian textile 
                artistry, bringing warmth, beauty, and heritage into your home.
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
