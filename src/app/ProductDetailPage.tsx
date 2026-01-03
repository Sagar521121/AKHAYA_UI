import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Plus, Minus, ChevronDown, Globe, Leaf, Sprout, TreePine } from 'lucide-react';
import { useState } from 'react';
import { useCart } from './context/CartContext';
import { toast } from 'sonner';
import { Product } from './data/mockData';

export function ProductDetailPage() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const productImages = [
    'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjZXJhbWljJTIwdmFzZSUyMHBvdHRlcnl8ZW58MXx8fHwxNzY2ODY4OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1753164725860-ffcd260b7b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjbG9zZXVwfGVufDF8fHx8MTc2Njg2OTAwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1701964621410-7ba68273cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGV4dHVyZSUyMHBhdHRlcm58ZW58MXx8fHwxNzY2ODY5MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1589051079002-b140a970f568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwcG90dGVyeSUyMGRldGFpbHxlbnwxfHx8fDE3NjY4NjkwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const product: Product = {
      id: productId || 'artisan-stoneware-vase',
      title: 'Artisan Stoneware Vase',
      description: 'Handcrafted stoneware vase featuring organic textures and earthy glazes.',
      price: 3500,
      category: 'Pottery & Ceramics',
      region: 'Jaipur',
      images: productImages,
      materials: ['Stoneware Clay', 'Natural Glaze'],
      dimensions: '25cm height x 15cm diameter',
      weight: '1.2kg',
      inStock: true,
      stockCount: 18,
      rating: 4.5,
      reviewCount: 42,
      tags: ['pottery', 'ceramic', 'vase', 'homedecor']
    };
    
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart!`);
  };

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Hero Section with Product Image */}
        <section className="container mx-auto px-6 py-12 bg-[#F5F4EE]">
          {/* Breadcrumb */}
          <nav className="mb-8 max-w-6xl mx-auto">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Shop</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Ceramics</li>
            </ol>
          </nav>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image Gallery */}
              <div>
                <div className="bg-white rounded-lg overflow-hidden border border-gray-100 mb-4">
                  <div className="aspect-square bg-gray-50">
                    <img 
                      src={productImages[selectedImage]} 
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-blue-500' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                <h1 className="text-4xl mb-4">Artisan Stoneware Vase</h1>
                
                {/* Price and Rating */}
                <div className="flex items-center gap-4 mb-48">
                  <span className="text-3xl text-blue-600 font-semibold">$120.00</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    </div>
                    <span className="text-sm text-gray-600">(42 Reviews)</span>
                  </div>
                </div>

                {/* AKHAYA Process Info Box */}
                
                {/* Product Description */}
                <div className="mb-8">
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Quantity</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button 
                        onClick={decreaseQuantity}
                        className="p-3 hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-6 py-2 border-x border-gray-300 min-w-[60px] text-center">
                        {quantity}
                      </span>
                      <button 
                        onClick={increaseQuantity}
                        className="p-3 hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm text-gray-600">In stock, ready to ship.</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    ADD TO CART
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Accordion Items */}
              <div className="space-y-0">
                <div className="border-b border-gray-200 py-6">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="text-gray-900">Description</span>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="border-b border-gray-200 py-6">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="text-gray-900">Product Details</span>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="border-b border-gray-200 py-6">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="text-gray-900">Delivery & Returns</span>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="border-b border-gray-200 py-6">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="text-gray-900">Care</span>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="border-b border-gray-200 py-6">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="text-gray-900">More Information</span>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="border-b border-gray-200 py-6">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="text-gray-900">Queries & Assistance</span>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Right Column - Our Promise */}
              <div>
                <h3 className="text-2xl mb-8">Our promise</h3>
                <div className="bg-[#F5F3E8] rounded-lg p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-[#C4A574]" strokeWidth={1.5} />
                    </div>
                    <span className="text-gray-900">Locally Sourced</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Leaf className="w-8 h-8 text-[#C4A574]" strokeWidth={1.5} />
                    </div>
                    <span className="text-gray-900">Planet Friendly</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Sprout className="w-8 h-8 text-[#C4A574]" strokeWidth={1.5} />
                    </div>
                    <span className="text-gray-900">Grassroot Driven</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <TreePine className="w-8 h-8 text-[#C4A574]" strokeWidth={1.5} />
                    </div>
                    <span className="text-gray-900">True to Tradition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}