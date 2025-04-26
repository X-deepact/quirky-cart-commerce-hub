
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const product = id ? getProductById(parseInt(id)) : undefined;
  
  useEffect(() => {
    if (!product) {
      toast.error("Product not found");
      navigate("/products");
    }
  }, [product, navigate]);
  
  if (!product) {
    return null;
  }
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating) 
            ? "text-yellow-400 fill-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            to="/products" 
            className="text-gray-600 hover:text-gray-900 inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Products
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            <div className="flex items-center mt-2 mb-4">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
            </div>
            
            <p className="text-2xl font-bold text-gray-900 mt-2">
              ${product.price.toFixed(2)}
            </p>
            
            <div className="my-6 border-t border-b py-6">
              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
              
              <div className="flex items-center mb-6">
                <span className="text-gray-700 mr-3">Category:</span>
                <span className="bg-gray-100 rounded-full px-3 py-1 text-sm capitalize">
                  {product.category}
                </span>
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-700 mr-3">Availability:</span>
                <span className={`${
                  product.stock > 0 
                    ? "text-green-600" 
                    : "text-red-600"
                }`}>
                  {product.stock > 0 
                    ? `In Stock (${product.stock} available)` 
                    : "Out of Stock"}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="bg-brand-purple hover:bg-brand-dark-purple text-white py-2 flex items-center justify-center text-lg"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        
        {/* Additional Product Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Information</h2>
          <div className="border-t">
            <div className="py-4 border-b grid grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-1 font-medium text-gray-900">Dimensions</div>
              <div className="md:col-span-3 text-gray-700">
                W: 20" x D: 24" x H: 28"
              </div>
            </div>
            <div className="py-4 border-b grid grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-1 font-medium text-gray-900">Materials</div>
              <div className="md:col-span-3 text-gray-700">
                Premium quality materials selected for durability and style
              </div>
            </div>
            <div className="py-4 border-b grid grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-1 font-medium text-gray-900">Shipping</div>
              <div className="md:col-span-3 text-gray-700">
                Free shipping on orders over $50. Standard delivery 3-5 business days.
              </div>
            </div>
            <div className="py-4 border-b grid grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-1 font-medium text-gray-900">Returns</div>
              <div className="md:col-span-3 text-gray-700">
                Easy 30-day return policy. Contact customer service for return authorization.
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
