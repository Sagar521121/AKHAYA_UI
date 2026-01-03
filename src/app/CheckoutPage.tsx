import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useCart } from './context/CartContext';
import { useAuth } from './context/AuthContext';
import { ordersApi } from './services/api';
import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent, useEffect } from 'react';
import { CreditCard, Lock } from 'lucide-react';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

interface FormErrors {
  [key: string]: string;
}

export function CheckoutPage() {
  const { items, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isNavigatingToConfirmation, setIsNavigatingToConfirmation] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string>('');

  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 200;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0 && !isNavigatingToConfirmation) {
      navigate('/cart');
    }
  }, [items.length, navigate, isNavigatingToConfirmation]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.pincode) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    // Card validation
    if (!formData.cardNumber) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^[0-9]{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!formData.cardName.trim()) {
      newErrors.cardName = 'Cardholder name is required';
    }
    if (!formData.expiryDate) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Format: MM/YY';
    }
    if (!formData.cvv) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^[0-9]{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3-4 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }

    setIsProcessing(true);
    setIsNavigatingToConfirmation(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate order ID
    const orderId = 'ORD-' + Date.now();
    
    // Clear cart and navigate to confirmation
    clearCart();
    navigate('/order-confirmation', { 
      state: { 
        orderId,
        total,
        email: formData.email,
        shippingAddress: {
          name: `${formData.firstName} ${formData.lastName}`,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode
        }
      } 
    });
  };

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
            <li>
              <Link to="/cart" className="text-gray-500 hover:text-gray-700 transition-colors">
                Cart
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Checkout</li>
          </ol>
        </nav>

        <h1 className="text-4xl mb-12">Secure Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <section className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } ${focusedField === 'email' ? 'ring-2 ring-black' : ''}`}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-500 mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6">Shipping Address</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'firstName' ? 'ring-2 ring-black' : ''}`}
                      aria-invalid={!!errors.firstName}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 mt-1" role="alert">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'lastName' ? 'ring-2 ring-black' : ''}`}
                      aria-invalid={!!errors.lastName}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 mt-1" role="alert">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, ''))}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } ${focusedField === 'phone' ? 'ring-2 ring-black' : ''}`}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1" role="alert">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    onFocus={() => setFocusedField('address')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    } ${focusedField === 'address' ? 'ring-2 ring-black' : ''}`}
                    aria-invalid={!!errors.address}
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500 mt-1" role="alert">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      onFocus={() => setFocusedField('city')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'city' ? 'ring-2 ring-black' : ''}`}
                      aria-invalid={!!errors.city}
                    />
                    {errors.city && (
                      <p className="text-sm text-red-500 mt-1" role="alert">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      onFocus={() => setFocusedField('state')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        errors.state ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'state' ? 'ring-2 ring-black' : ''}`}
                      aria-invalid={!!errors.state}
                    />
                    {errors.state && (
                      <p className="text-sm text-red-500 mt-1" role="alert">{errors.state}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value.replace(/\D/g, ''))}
                      onFocus={() => setFocusedField('pincode')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        errors.pincode ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'pincode' ? 'ring-2 ring-black' : ''}`}
                      maxLength={6}
                      aria-invalid={!!errors.pincode}
                    />
                    {errors.pincode && (
                      <p className="text-sm text-red-500 mt-1" role="alert">{errors.pincode}</p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Information */}
            <section className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5" />
                <h2 className="text-xl font-medium">Payment Information</h2>
                <Lock className="w-4 h-4 text-green-600 ml-auto" />
                <span className="text-sm text-green-600">Secure</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={formatCardNumber(formData.cardNumber)}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value.replace(/\s/g, ''))}
                    onFocus={() => setFocusedField('cardNumber')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                      errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                    } ${focusedField === 'cardNumber' ? 'ring-2 ring-black' : ''}`}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    aria-invalid={!!errors.cardNumber}
                  />
                  {errors.cardNumber && (
                    <p className="text-sm text-red-500 mt-1" role="alert">{errors.cardNumber}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium mb-2">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    value={formData.cardName}
                    onChange={(e) => handleInputChange('cardName', e.target.value)}
                    onFocus={() => setFocusedField('cardName')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                      errors.cardName ? 'border-red-500' : 'border-gray-300'
                    } ${focusedField === 'cardName' ? 'ring-2 ring-black' : ''}`}
                    placeholder="Name on card"
                    aria-invalid={!!errors.cardName}
                  />
                  {errors.cardName && (
                    <p className="text-sm text-red-500 mt-1" role="alert">{errors.cardName}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={formData.expiryDate}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '');
                        if (value.length >= 2) {
                          value = value.slice(0, 2) + '/' + value.slice(2, 4);
                        }
                        handleInputChange('expiryDate', value);
                      }}
                      onFocus={() => setFocusedField('expiryDate')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'expiryDate' ? 'ring-2 ring-black' : ''}`}
                      placeholder="MM/YY"
                      maxLength={5}
                      aria-invalid={!!errors.expiryDate}
                    />
                    {errors.expiryDate && (
                      <p className="text-sm text-red-500 mt-1" role="alert">{errors.expiryDate}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium mb-2">
                      CVV *
                    </label>
                    <input
                      type="password"
                      id="cvv"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                      onFocus={() => setFocusedField('cvv')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        errors.cvv ? 'border-red-500' : 'border-gray-300'
                      } ${focusedField === 'cvv' ? 'ring-2 ring-black' : ''}`}
                      placeholder="123"
                      maxLength={4}
                      aria-invalid={!!errors.cvv}
                    />
                    {errors.cvv && (
                      <p className="text-sm text-red-500 mt-1" role="alert">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>

              {/* Items List */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">{item.product.title}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <div className="h-px bg-gray-200"></div>
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
                <div className="flex justify-between text-gray-600">
                  <span>Tax (GST)</span>
                  <span>₹{tax.toLocaleString('en-IN')}</span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Complete Order
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By placing your order, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  );
}