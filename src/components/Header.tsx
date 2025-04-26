
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { categories } from "../data/products";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { getCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-brand-purple">
            ShopQuirk
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-brand-purple transition-colors">
              Products
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-2 space-y-3">
            <Link 
              to="/" 
              className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
          </nav>
        )}
      </div>

      {/* Categories Navigation (desktop only) */}
      <div className="hidden md:block border-t">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/products?category=${category.value}`}
                className="text-sm text-gray-600 hover:text-brand-purple transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
