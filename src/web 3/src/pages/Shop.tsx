import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Pages.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: 'Pink Blazer Set', price: 129.99, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop', category: 'Blazers', description: 'Elegant pink blazer perfect for office or casual wear' },
  { id: 2, name: 'Casual Hoodie', price: 59.99, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=400&fit=crop', category: 'Hoodies', description: 'Comfortable hoodie for everyday style' },
  { id: 3, name: 'Summer Dress', price: 89.99, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop', category: 'Dresses', description: 'Light and breezy summer dress' },
  { id: 4, name: 'Denim Jacket', price: 99.99, image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=400&fit=crop', category: 'Jackets', description: 'Classic denim jacket for all seasons' },
  { id: 5, name: 'Floral Blouse', price: 49.99, image: 'https://images.unsplash.com/photo-1485968579169-51d4b4c8b5dc?w=300&h=400&fit=crop', category: 'Tops', description: 'Beautiful floral print blouse' },
  { id: 6, name: 'High Waist Jeans', price: 79.99, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop', category: 'Bottoms', description: 'Flattering high waist jeans' },
  { id: 7, name: 'Silk Blouse', price: 89.99, image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&h=400&fit=crop', category: 'Tops', description: 'Luxurious silk blouse' },
  { id: 8, name: 'Wide Leg Pants', price: 79.99, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=400&fit=crop', category: 'Bottoms', description: 'Trendy wide leg pants' },
];

const Shop: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container shop-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Shop Now</h1>
        <p>Find your perfect look from our complete collection</p>
      </div>

      <div className="shop-layout">
        <aside className="shop-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul>
              <li><button className="category-btn active">All Items</button></li>
              <li><button className="category-btn">Tops</button></li>
              <li><button className="category-btn">Bottoms</button></li>
              <li><button className="category-btn">Dresses</button></li>
              <li><button className="category-btn">Jackets</button></li>
              <li><button className="category-btn">Accessories</button></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <input type="range" min="0" max="200" defaultValue="200" title="Price Range" aria-label="Price Range" />
              <div className="price-labels">
                <span>$0</span>
                <span>$200</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Size</h3>
            <div className="size-options">
              <button className="size-btn">XS</button>
              <button className="size-btn">S</button>
              <button className="size-btn active">M</button>
              <button className="size-btn">L</button>
              <button className="size-btn">XL</button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Colors</h3>
            <div className="color-options">
              <button className="color-btn color-black" title="Black" aria-label="Black"></button>
              <button className="color-btn color-white" title="White" aria-label="White"></button>
              <button className="color-btn color-pink active" title="Pink" aria-label="Pink"></button>
              <button className="color-btn color-teal" title="Teal" aria-label="Teal"></button>
              <button className="color-btn color-blue" title="Blue" aria-label="Blue"></button>
            </div>
          </div>
        </aside>

        <main className="shop-main">
          <div className="shop-toolbar">
            <span className="results-count">{products.length} items</span>
            <select className="sort-select" title="Sort Products" aria-label="Sort Products">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => navigate('/cart')}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
