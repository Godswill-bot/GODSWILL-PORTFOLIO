import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Men's Shirt",
    price: 10,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=350&fit=crop"
  },
  {
    id: 2,
    name: "Burke Conley",
    price: 157,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=350&fit=crop"
  },
  {
    id: 3,
    name: "Isabella Solomon",
    price: 400,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=350&fit=crop"
  },
  {
    id: 4,
    name: "Classic Watch",
    price: 250,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=350&fit=crop"
  },
  {
    id: 5,
    name: "Designer Bag",
    price: 320,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=350&fit=crop"
  },
  {
    id: 6,
    name: "Summer Dress",
    price: 85,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=350&fit=crop"
  },
  {
    id: 7,
    name: "Leather Jacket",
    price: 450,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=350&fit=crop"
  },
  {
    id: 8,
    name: "Sport Shoes",
    price: 120,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=350&fit=crop"
  },
  {
    id: 9,
    name: "Casual Blazer",
    price: 200,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop"
  }
];

const ITEMS_PER_PAGE = 3;

const Products: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  const getCurrentProducts = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return allProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="products-title">
          Our <span className="highlight">products</span>
        </h2>
        <div className="products-grid">
          {getCurrentProducts().map((product) => (
            <Link to="/products" key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">{product.price} $</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="pagination">
          <button 
            className="page-btn prev" 
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button 
            className="page-btn next" 
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
        <div className="view-all-container">
          <Link to="/products" className="btn-view-all">View All Products</Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
