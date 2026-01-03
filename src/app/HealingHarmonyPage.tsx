import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';

export function HealingHarmonyPage() {
  const products = [
    {
      id: 1,
      name: 'Amethyst Crystal Necklace',
      price: '₹4,500',
      image: 'https://images.unsplash.com/photo-1653190262923-fa971c552377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsaW5nJTIwY3J5c3RhbHMlMjBqZXdlbHJ5fGVufDF8fHx8MTc2NjkxNDM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Natural healing crystals'
    },
    {
      id: 2,
      name: 'Rose Quartz Bracelet',
      price: '₹3,200',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Love and peace'
    },
    {
      id: 3,
      name: 'Citrine Energy Ring',
      price: '₹5,800',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Abundance and joy'
    },
    {
      id: 4,
      name: 'Clear Quartz Pendant',
      price: '₹4,200',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Master healer crystal'
    },
    {
      id: 5,
      name: 'Lapis Lazuli Earrings',
      price: '₹6,500',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Wisdom and truth'
    },
    {
      id: 6,
      name: 'Turquoise Stone Necklace',
      price: '₹7,200',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Protection and healing'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwamV3ZWxyeSUyMGFtZXRoeXN0fGVufDF8fHx8MTc2NjgyMzI0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healing Harmony"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h1 className="text-5xl md:text-6xl mb-4 font-serif">Healing Harmony</h1>
              <p className="text-xl tracking-wide mb-2">Crystal Jewelry Collection</p>
              <p className="text-sm opacity-90">Discover the power of natural healing crystals in beautifully crafted jewelry</p>
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
            <li className="text-gray-900">Healing Harmony</li>
          </ul>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-6 py-12 max-w-4xl text-center">
          <h2 className="text-3xl mb-6">The Art of Crystal Healing</h2>
          <p className="text-gray-600 leading-relaxed">
            Our Healing Harmony collection combines ancient wisdom with contemporary design. Each piece is 
            carefully crafted with natural healing crystals, chosen for their unique properties and energies. 
            From the calming energy of amethyst to the protective power of turquoise, discover jewelry that 
            not only adorns but also nurtures your well-being.
          </p>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-50">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-1">{product.description}</p>
                  <h3 className="text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-900">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
