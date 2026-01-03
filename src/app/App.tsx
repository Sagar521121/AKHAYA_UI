import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from './components/ui/sonner';
import { HomePage } from './HomePage';
import { CategoryPage } from './CategoryPage';
import { ProductDetailPage } from './ProductDetailPage';
import { ShopPage } from './ShopPage';
import { HealingHarmonyPage } from './HealingHarmonyPage';
import { RugsPage } from './RugsPage';
import { PashminaShawlPage } from './PashminaShawlPage';
import { KalamkariPage } from './KalamkariPage';
import { RoganArtPage } from './RoganArtPage';
import { MysoreSilkPage } from './MysoreSilkPage';
import { KolhapuriChappalPage } from './KolhapuriChappalPage';
import { MirzapurCarpetPage } from './MirzapurCarpetPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { OrderConfirmationPage } from './OrderConfirmationPage';
import { DemoOrderConfirmationPage } from './DemoOrderConfirmationPage';
import { LoginPage } from './LoginPage';
import { SignupPage } from './SignupPage';
import { OrdersPage } from './OrdersPage';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/healing-harmony" element={<HealingHarmonyPage />} />
            <Route path="/rugs" element={<RugsPage />} />
            <Route path="/pashmina-shawls" element={<PashminaShawlPage />} />
            <Route path="/kalamkari" element={<KalamkariPage />} />
            <Route path="/rogan-art" element={<RoganArtPage />} />
            <Route path="/mysore-silk" element={<MysoreSilkPage />} />
            <Route path="/kolhapuri-chappals" element={<KolhapuriChappalPage />} />
            <Route path="/mirzapur-carpets" element={<MirzapurCarpetPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/demo-order-confirmation" element={<DemoOrderConfirmationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}