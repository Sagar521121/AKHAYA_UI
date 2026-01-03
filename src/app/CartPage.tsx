import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useCart } from './context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function CartPage() {
  const { items, updateQuantity, removeFromCart, getCartTotal, getCartCount } = useCart();
  const navigate = useNavigate();
  const [removingId, setRemovingId] = useState<string | null>(null);

  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 200;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  const handleRemove = (productId: string) => {
    setRemovingId(productId);
    setTimeout(() => {
      removeFromCart(productId);
      setRemovingId(null);
    }, 300);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FFFEF8] to-[#F5F1E8] flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center max-w-md px-6 animate-fade-in-up">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
              <ShoppingBag className="w-32 h-32 mx-auto text-gray-300 relative animate-float" />
            </div>
            <h1 className="text-4xl mb-4 font-semibold">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Discover our exquisite collection of handcrafted Indian artisanal products
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-black text-white px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 font-semibold group"
            >
              Continue Shopping
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFEF8] flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Shopping Cart</li>
          </ol>
        </nav>

        <h1 className="text-4xl mb-2">Shopping Cart</h1>
        <p className="text-gray-600 mb-12">
          {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className={`bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 ${
                  removingId === item.product.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <Link
                    to={`/product/${item.product.id}`}
                    className="flex-shrink-0 w-32 h-32 bg-gray-50 rounded-lg overflow-hidden group"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4 mb-2">
                      <Link
                        to={`/product/${item.product.id}`}
                        className="hover:text-gray-600 transition-colors"
                      >
                        <h3 className="font-medium text-lg">{item.product.title}</h3>
                      </Link>
                      <button
                        onClick={() => handleRemove(item.product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-1">{item.product.region}</p>
                    <p className="text-sm text-gray-500 mb-4">{item.product.category}</p>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 border-x border-gray-300 min-w-[50px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={item.quantity >= item.product.stockCount}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-medium">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-500">
                            ₹{item.product.price.toLocaleString('en-IN')} each
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Stock Warning */}
                    {item.product.stockCount <= 5 && (
                      <p className="text-xs text-orange-600 mt-2">
                        Only {item.product.stockCount} left in stock
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">FREE</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-500">
                    Add ₹{(5000 - subtotal).toLocaleString('en-IN')} more for free shipping
                  </p>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Tax (GST 18%)</span>
                  <span>₹{tax.toLocaleString('en-IN')}</span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mb-3"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/"
                className="block text-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% Authentic Handcrafted</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>15-Day Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}