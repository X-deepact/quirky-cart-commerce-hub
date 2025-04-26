
import { Link } from "react-router-dom";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{product.name}</h3>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
            <div className="flex items-center">
              <span className="text-sm text-amber-500">★</span>
              <span className="ml-1 text-sm text-gray-500">{product.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }} 
          className="w-full bg-brand-purple hover:bg-brand-dark-purple"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
