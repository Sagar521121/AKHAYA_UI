import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';

export function KalamkariPage() {
  const products = [
    {
      id: 'kalamkari-1',
      title: 'Traditional Kalamkari Cotton Saree',
      region: 'Andhra Pradesh',
      price: 8500,
      images: ['https://images.unsplash.com/photo-1617117698324-8fc7decf2f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kalamkari-2',
      title: 'Kalamkari Silk Blend Saree',
      region: 'Andhra Pradesh',
      price: 12000,
      images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kalamkari-3',
      title: 'Hand-Painted Kalamkari Dupatta',
      region: 'Andhra Pradesh',
      price: 4500,
      images: ['https://images.unsplash.com/photo-1583391733956-6c78276477e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kalamkari-4',
      title: 'Floral Kalamkari Design Fabric',
      region: 'Andhra Pradesh',
      price: 3500,
      images: ['https://images.unsplash.com/photo-1617117698324-8fc7decf2f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kalamkari-5',
      title: 'Temple Border Kalamkari Saree',
      region: 'Andhra Pradesh',
      price: 18000,
      images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    },
    {
      id: 'kalamkari-6',
      title: 'Premium Kalamkari Silk Saree',
      region: 'Andhra Pradesh',
      price: 22000,
      images: ['https://images.unsplash.com/photo-1583391733956-6c78276477e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1617117698324-8fc7decf2f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
            alt="Kalamkari Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h1 className="text-5xl md:text-6xl mb-4 font-serif">Kalamkari</h1>
              <p className="text-xl tracking-wide mb-2">Hand-Painted Heritage Art</p>
              <p className="text-sm opacity-90">Ancient block-printing and hand-painting techniques</p>
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
            <li className="text-gray-900">Kalamkari</li>
          </ul>
        </section>

        {/* Article Section */}
        <section className="container mx-auto px-6 py-12 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl mb-6 text-center">The Art of Kalamkari</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Kalamkari, meaning "pen work," is an ancient Indian art form that dates back over 3000 years. 
                Originating from Andhra Pradesh and Telangana, this intricate technique involves hand-painting 
                or block-printing natural dyes onto cotton or silk fabrics. The name derives from 'kalam' (pen) 
                and 'kari' (work), reflecting the meticulous hand-painting process.
              </p>
              <p>
                Each Kalamkari piece tells a story through its motifs—depicting mythological tales, flora, and 
                fauna drawn from Hindu epics like the Ramayana and Mahabharata. The process involves 23 meticulous 
                steps and uses only natural dyes derived from plants, flowers, and minerals, making each piece 
                eco-friendly and unique.
              </p>
              <p>
                There are two distinctive styles of Kalamkari: Srikalahasti style, which involves freehand drawing, 
                and Machilipatnam style, which uses hand-carved blocks for printing. Both require exceptional skill 
                and patience, with artisans dedicating weeks or even months to complete a single masterpiece. The 
                natural dyeing process includes treatments with cow milk, iron fillings, and various plant extracts, 
                creating colors that are vibrant yet gentle on the fabric.
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
