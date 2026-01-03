import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';

export function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Handwoven Silk Saree',
      price: '₹12,500',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      category: 'Textiles'
    },
    {
      id: 2,
      name: 'Brass Diya Set',
      price: '₹3,200',
      image: 'https://images.unsplash.com/photo-1763292198129-5380138038fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHNob3B8ZW58MXx8fHwxNzY2OTE0MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Home Decor'
    },
    {
      id: 3,
      name: 'Wooden Carved Box',
      price: '₹2,800',
      image: 'https://images.unsplash.com/photo-1627811373475-0b468b06d620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      category: 'Home Decor'
    },
    {
      id: 4,
      name: 'Block Print Bedsheet',
      price: '₹4,500',
      image: 'https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      category: 'Textiles'
    },
    {
      id: 5,
      name: 'Terracotta Pottery',
      price: '₹1,800',
      image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      category: 'Pottery'
    },
    {
      id: 6,
      name: 'Handmade Jewelry',
      price: '₹5,500',
      image: 'https://images.unsplash.com/photo-1715374033196-0ff662284a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      category: 'Jewelry'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1763292198129-5380138038fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHNob3B8ZW58MXx8fHwxNzY2OTE0MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl mb-4">Shop All Products</h1>
              <p className="text-xl tracking-wide">Handcrafted with Love & Tradition</p>
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
            <li className="text-gray-900">Shop</li>
          </ul>
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
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
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
