import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductsPage.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Men's Shirt",
    price: 10,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=350&fit=crop",
    category: "Men",
    description: "Classic cotton shirt for everyday wear"
  },
  {
    id: 2,
    name: "Burke Conley",
    price: 157,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=350&fit=crop",
    category: "Women",
    description: "Elegant designer outfit"
  },
  {
    id: 3,
    name: "Isabella Solomon",
    price: 400,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=350&fit=crop",
    category: "Women",
    description: "Premium fashion collection"
  },
  {
    id: 4,
    name: "Classic Watch",
    price: 250,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=350&fit=crop",
    category: "Accessories",
    description: "Timeless elegance on your wrist"
  },
  {
    id: 5,
    name: "Designer Bag",
    price: 320,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=350&fit=crop",
    category: "Accessories",
    description: "Luxury leather handbag"
  },
  {
    id: 6,
    name: "Summer Dress",
    price: 85,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=350&fit=crop",
    category: "Women",
    description: "Light and breezy summer collection"
  },
  {
    id: 7,
    name: "Leather Jacket",
    price: 450,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=350&fit=crop",
    category: "Men",
    description: "Premium quality leather jacket"
  },
  {
    id: 8,
    name: "Sport Shoes",
    price: 120,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=350&fit=crop",
    category: "Footwear",
    description: "Comfortable athletic footwear"
  },
  {
    id: 9,
    name: "Casual Blazer",
    price: 200,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop",
    category: "Men",
    description: "Smart casual blazer for any occasion"
  },
  {
    id: 10,
    name: "Elegant Heels",
    price: 180,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=350&fit=crop",
    category: "Footwear",
    description: "Stylish high heels for special occasions"
  },
  {
    id: 11,
    name: "Denim Jeans",
    price: 75,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=350&fit=crop",
    category: "Men",
    description: "Classic fit denim jeans"
  },
  {
    id: 12,
    name: "Silk Scarf",
    price: 95,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=350&fit=crop",
    category: "Accessories",
    description: "Luxurious silk scarf"
  }
];

const categories = ["All", "Men", "Women", "Accessories", "Footwear"];

const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState<Product[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const ITEMS_PER_PAGE = 6;

  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const getCurrentProducts = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setNotificationMessage(`${product.name} added to cart!`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="products-page">
      <button className="back-arrow" onClick={() => navigate(-1)} aria-label="Go back">
        ← Back
      </button>
      <div className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Discover our amazing collection of fashion items</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Products</span>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="notification">
          {notificationMessage}
        </div>
      )}

      <div className="container products-content">
        <aside className="products-sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Cart ({cart.length})</h3>
            <p>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</p>
            <Link to="/checkout" className="btn-checkout">Checkout</Link>
          </div>
        </aside>

        <main className="products-main">
          <div className="products-header">
            <p>Showing {getCurrentProducts().length} of {filteredProducts.length} products</p>
          </div>
          
          <div className="products-grid">
            {getCurrentProducts().map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button className="btn-add-cart" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <span className="product-price">${product.price}</span>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="page-btn" 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`page-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button 
                className="page-btn" 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
