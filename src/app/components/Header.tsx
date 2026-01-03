import { Search, Menu, ShoppingBag, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export function Header() {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const { user, signout, isAuthenticated, loading } = useAuth();
  const cartCount = getCartCount();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSignout = () => {
    signout();
    setShowUserMenu(false);
    navigate('/');
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left: Contact Us */}
          <div className="flex items-center gap-2 flex-1">
            <button className="text-xs hover:opacity-70 transition-all duration-300 uppercase tracking-wider hover:scale-105">
              + Contact Us
            </button>
          </div>
          
          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="hover:opacity-80 transition-all duration-300">
              <h1 className="text-2xl tracking-[0.3em] font-light">AKHAYA</h1>
            </Link>
          </div>
          
          {/* Right: Search Icon + User + Cart + Menu */}
          <div className="flex items-center gap-6 justify-end flex-1">
            <button className="hover:opacity-70 transition-all duration-300 hover:scale-110" aria-label="Search">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            
            {/* User Account - show loading state while auth is initializing */}
            {loading ? (
              <div className="w-5 h-5 animate-pulse bg-gray-200 rounded-full" />
            ) : isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="hover:opacity-70 transition-all duration-300 hover:scale-110 flex items-center gap-2"
                  aria-label="User Account"
                >
                  <User className="w-5 h-5 stroke-[1.5]" />
                  <span className="text-xs uppercase tracking-wider hidden md:inline">Account</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm truncate">{user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        navigate('/orders');
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    >
                      My Orders
                    </button>
                    <button
                      onClick={handleSignout}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 hover:opacity-70 transition-all duration-300 hover:scale-105"
                aria-label="Sign In"
              >
                <User className="w-5 h-5 stroke-[1.5]" />
                <span className="text-xs uppercase tracking-wider">Sign In</span>
              </button>
            )}
            
            <button 
              onClick={() => navigate('/cart')} 
              className="relative hover:opacity-70 transition-all duration-300 hover:scale-110" 
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => {}}
              className="flex items-center gap-2 hover:opacity-70 transition-all duration-300 hover:scale-105"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
              <span className="text-xs uppercase tracking-wider">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}