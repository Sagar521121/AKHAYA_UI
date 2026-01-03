import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';

export function RugsPage() {
  const products = [
    {
      id: 1,
      name: 'Kashmiri Silk Carpet',
      price: '₹45,000',
      image: 'https://images.unsplash.com/photo-1613989032400-c93e3ee1f8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBydWdzJTIwY2FycGV0c3xlbnwxfHx8fDE3NjY5MTQzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: '6 x 9 feet',
      description: 'Hand-knotted silk'
    },
    {
      id: 2,
      name: 'Jaipur Block Print Dhurrie',
      price: '₹12,500',
      image: 'https://images.unsplash.com/photo-1753100410452-ba4b5426908a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      size: '5 x 7 feet',
      description: 'Cotton woven'
    },
    {
      id: 3,
      name: 'Mirzapur Wool Carpet',
      price: '₹28,000',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      size: '8 x 10 feet',
      description: 'Pure wool'
    },
    {
      id: 4,
      name: 'Bhadohi Runner Rug',
      price: '₹15,500',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      size: '3 x 10 feet',
      description: 'Hand-tufted wool'
    },
    {
      id: 5,
      name: 'Vintage Persian Style',
      price: '₹38,000',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      size: '7 x 9 feet',
      description: 'Silk & wool blend'
    },
    {
      id: 6,
      name: 'Contemporary Kilim',
      price: '₹18,500',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      size: '6 x 8 feet',
      description: 'Modern design'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1613989032400-c93e3ee1f8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBydWdzJTIwY2FycGV0c3xlbnwxfHx8fDE3NjY5MTQzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Rugs Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h1 className="text-5xl md:text-6xl mb-4 font-serif">Rugs</h1>
              <p className="text-xl tracking-wide mb-2">Handwoven Carpet Collection</p>
              <p className="text-sm opacity-90">Timeless designs woven with centuries-old craftsmanship</p>
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
            <li className="text-gray-900">Rugs</li>
          </ul>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-6 py-12 max-w-4xl text-center">
          <h2 className="text-3xl mb-6">The Legacy of Indian Carpets</h2>
          <p className="text-gray-600 leading-relaxed">
            Each rug in our collection tells a story of India's rich textile heritage. From the intricate patterns 
            of Kashmir to the bold geometric designs of Rajasthan, these handwoven masterpieces are created by 
            skilled artisans using traditional techniques passed down through generations. Made from premium materials 
            including silk, wool, and cotton, our rugs bring warmth, elegance, and a touch of history to any space.
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
                  <p className="text-sm text-gray-500 mb-1">{product.size} • {product.description}</p>
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
