
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight, Trash2 } from "lucide-react";

const Cart = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  
  const subtotal = getCartTotal();
  const shippingCost = subtotal > 50 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + shippingCost;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {items.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">
                    Items ({items.reduce((sum, item) => sum + item.quantity, 0)})
                  </h2>
                  <button 
                    onClick={clearCart} 
                    className="text-red-600 hover:text-red-800 flex items-center text-sm"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear Cart
                  </button>
                </div>
                
                <div className="divide-y">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link 
                    to="/products"
                    className="text-brand-purple hover:text-brand-dark-purple font-medium inline-flex items-center"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="pt-4 border-t">
                    <label className="block text-gray-600 mb-2">Promo Code</label>
                    <div className="flex">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="px-3 py-2 border rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md hover:bg-gray-300 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-xl font-bold">${total.toFixed(2)}</span>
                  </div>
                  
                  <Button className="w-full bg-brand-purple hover:bg-brand-dark-purple text-white py-3 flex items-center justify-center">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Shipping Info */}
              <div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-medium mb-2">Shipping Information</h3>
                <p className="text-sm text-gray-600">
                  Free shipping on all orders over $50. Standard delivery takes 3-5 business days.
                </p>
              </div>
              
              {/* Return Policy */}
              <div className="mt-4 bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-medium mb-2">Return Policy</h3>
                <p className="text-sm text-gray-600">
                  We offer a 30-day return policy on all items. Items must be unused and in original packaging.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white py-2 px-6">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
