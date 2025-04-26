
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1500')" 
            }}
          />
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Elevate Your Space with Modern Design
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg">
                Discover our curated collection of stylish home goods and furniture that combine form and function.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white py-2 px-6 rounded-md text-lg">
                    Shop Now
                  </Button>
                </Link>
                <Link to="/products?category=furniture">
                  <Button variant="outline" className="bg-transparent border-white text-white py-2 px-6 rounded-md text-lg hover:bg-white/20">
                    View Collections
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {categories.filter(cat => cat.value !== 'all').map((category) => (
                <Link 
                  key={category.id} 
                  to={`/products?category=${category.value}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-200">
                    <div className="absolute inset-0 bg-brand-dark-purple/50 flex items-center justify-center transition-opacity group-hover:opacity-70 opacity-0">
                      <span className="text-white text-xl font-medium">{category.name}</span>
                    </div>
                    <img 
                      src={`https://source.unsplash.com/random/300×300/?${category.value}`} 
                      alt={category.name}
                      className="object-cover h-full w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-3">
                      <p className="text-center font-medium">{category.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Link 
                to="/products" 
                className="mt-4 md:mt-0 text-brand-purple hover:text-brand-dark-purple font-medium flex items-center"
              >
                View All Products
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Promo Banner */}
        <section className="py-16 bg-brand-light-purple bg-opacity-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Spring Collection Now Available</h2>
                <p className="text-gray-600 mb-6 max-w-lg">
                  Refresh your space with our new arrivals. 
                  Enjoy 15% off your first purchase with code SPRING15.
                </p>
                <Link to="/products">
                  <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white py-2 px-6 rounded-md">
                    Explore Collection
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1547043545-b1f1397e7c63?q=80&w=700" 
                  alt="Spring Collection" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
