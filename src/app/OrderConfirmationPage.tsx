import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle, Package, Mail, Home } from 'lucide-react';
import { useEffect } from 'react';

interface LocationState {
  orderId: string;
  total: number;
  email: string;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export function OrderConfirmationPage() {
  const location = useLocation();
  const state = location.state as LocationState;

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  // Redirect to home if no order data
  if (!state || !state.orderId) {
    return <Navigate to="/" replace />;
  }

  const { orderId, total, email, shippingAddress } = state;
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  return (
    <div className="min-h-screen bg-[#FFFEF8] flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 animate-[scale-in_0.5s_ease-out]">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600">
              Thank you for supporting Indian artisans
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-600 mb-1">Order Number</p>
                <p className="text-2xl font-medium">{orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                <p className="text-2xl font-medium">₹{total.toLocaleString('en-IN')}</p>
              </div>
            </div>

            {/* Confirmation Email */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
              <Mail className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Confirmation Email Sent</p>
                <p className="text-sm text-gray-600">
                  We've sent a confirmation email to <span className="font-medium">{email}</span>
                </p>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
              <Package className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="font-medium mb-3">Shipping To</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium text-gray-900">{shippingAddress.name}</p>
                  <p>{shippingAddress.address}</p>
                  <p>
                    {shippingAddress.city}, {shippingAddress.state} {shippingAddress.pincode}
                  </p>
                </div>
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-green-900">
                    Estimated Delivery: {estimatedDelivery.toLocaleDateString('en-IN', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-sm text-green-700">
                    We'll send you tracking information once your order ships
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
            <h2 className="text-xl font-medium mb-6">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  1
                </div>
                <div>
                  <p className="font-medium mb-1">Order Processing</p>
                  <p className="text-sm text-gray-600">
                    Our artisans will carefully prepare your handcrafted items with love and attention to detail
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  2
                </div>
                <div>
                  <p className="font-medium mb-1">Quality Check</p>
                  <p className="text-sm text-gray-600">
                    Each item undergoes thorough quality inspection to ensure it meets our standards
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  3
                </div>
                <div>
                  <p className="font-medium mb-1">Secure Packaging</p>
                  <p className="text-sm text-gray-600">
                    Your order will be carefully packaged to ensure safe delivery
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  4
                </div>
                <div>
                  <p className="font-medium mb-1">Shipped & Tracked</p>
                  <p className="text-sm text-gray-600">
                    You'll receive tracking information via email to follow your delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="flex-1 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Continue Shopping
            </Link>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-white border border-gray-300 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Print Confirmation
            </button>
          </div>

          {/* Support Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Need help with your order?
            </p>
            <p className="text-sm">
              Contact us at{' '}
              <a href="mailto:support@akhaya.com" className="text-black font-medium hover:underline">
                support@akhaya.com
              </a>{' '}
              or call{' '}
              <a href="tel:+911800000000" className="text-black font-medium hover:underline">
                +91 1800-000-000
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
