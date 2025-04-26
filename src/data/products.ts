
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    description: "Ergonomic lounge chair with premium fabric upholstery, perfect for any living space.",
    price: 249.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=500",
    rating: 4.8,
    stock: 15,
  },
  {
    id: 2,
    name: "Minimalist Table Lamp",
    description: "Sleek metal desk lamp with adjustable arm and warm lighting options.",
    price: 89.99,
    category: "lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=500",
    rating: 4.6,
    stock: 23,
  },
  {
    id: 3,
    name: "Ceramic Plant Pot",
    description: "Hand-crafted ceramic pot with drainage, ideal for indoor plants.",
    price: 34.99,
    category: "decor",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=500",
    rating: 4.4,
    stock: 42,
  },
  {
    id: 4,
    name: "Wool Throw Blanket",
    description: "Soft wool blend throw with fringe detail, perfect for cozy evenings.",
    price: 79.99,
    category: "textiles",
    image: "https://images.unsplash.com/photo-1600369671236-e74521d4a4aa?q=80&w=500",
    rating: 4.9,
    stock: 18,
  },
  {
    id: 5,
    name: "Patterned Area Rug",
    description: "Durable woven rug with contemporary geometric pattern.",
    price: 199.99,
    category: "textiles",
    image: "https://images.unsplash.com/photo-1588707508360-9881a26cb971?q=80&w=500",
    rating: 4.7,
    stock: 8,
  },
  {
    id: 6,
    name: "Glass Coffee Table",
    description: "Modern coffee table with tempered glass top and wooden legs.",
    price: 329.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=500",
    rating: 4.5,
    stock: 6,
  },
  {
    id: 7,
    name: "Decorative Wall Clock",
    description: "Stylish wall clock with silent movement and metal frame.",
    price: 59.99,
    category: "decor",
    image: "https://images.unsplash.com/photo-1565193298435-c41b9a4c04ff?q=80&w=500",
    rating: 4.2,
    stock: 31,
  },
  {
    id: 8,
    name: "Scented Candle Set",
    description: "Set of 3 premium soy candles with seasonal fragrances.",
    price: 45.99,
    category: "decor",
    image: "https://images.unsplash.com/photo-1603006905393-0a5da3c34bcc?q=80&w=500",
    rating: 4.7,
    stock: 27,
  }
];

export const categories = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Furniture", value: "furniture" },
  { id: 3, name: "Lighting", value: "lighting" },
  { id: 4, name: "Decor", value: "decor" },
  { id: 5, name: "Textiles", value: "textiles" }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};
