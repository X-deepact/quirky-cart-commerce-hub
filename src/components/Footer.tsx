
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">ShopQuirk</h3>
            <p className="text-gray-600">
              Discover unique and high-quality products for your home and lifestyle.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase text-gray-500 mb-4">Shop</h4>
            <ul className="space-y-2">
              {["All Products", "Furniture", "Lighting", "Decor", "Textiles"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/products?category=${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-brand-purple transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase text-gray-500 mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Contact", "Careers", "Terms & Conditions", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-gray-600 hover:text-brand-purple transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase text-gray-500 mb-4">Stay Connected</h4>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gray-300 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <button className="bg-brand-purple text-white px-4 py-2 rounded-r-md hover:bg-brand-dark-purple transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ShopQuirk. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Facebook", "Instagram", "Twitter", "Pinterest"].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-gray-500 hover:text-brand-purple transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
