import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BlogPage.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top Fashion Trends for 2026",
    excerpt: "Discover the hottest fashion trends that will dominate this year. From sustainable fashion to bold colors, here's what you need to know.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    author: "Emma Wilson",
    date: "January 1, 2026",
    category: "Fashion"
  },
  {
    id: 2,
    title: "How to Build a Capsule Wardrobe",
    excerpt: "Learn how to create a versatile wardrobe with fewer pieces that work together seamlessly for any occasion.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop",
    author: "Michael Brown",
    date: "December 28, 2025",
    category: "Style Guide"
  },
  {
    id: 3,
    title: "Sustainable Fashion: A Complete Guide",
    excerpt: "Everything you need to know about eco-friendly fashion choices and how to shop responsibly without compromising style.",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&h=400&fit=crop",
    author: "Sarah Johnson",
    date: "December 25, 2025",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "Accessorizing 101: Tips from the Pros",
    excerpt: "Master the art of accessorizing with these expert tips. Learn how to elevate any outfit with the right accessories.",
    image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=600&h=400&fit=crop",
    author: "David Lee",
    date: "December 20, 2025",
    category: "Accessories"
  },
  {
    id: 5,
    title: "Men's Fashion: Essential Pieces Every Guy Needs",
    excerpt: "Build the perfect men's wardrobe with these must-have pieces that every stylish man should own.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=400&fit=crop",
    author: "James Miller",
    date: "December 15, 2025",
    category: "Men's Fashion"
  },
  {
    id: 6,
    title: "Color Matching: A Beginner's Guide",
    excerpt: "Learn the basics of color theory and how to create harmonious outfits that make you stand out.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
    author: "Lisa Chen",
    date: "December 10, 2025",
    category: "Style Guide"
  }
];

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-page">
      <button className="back-arrow" onClick={() => navigate(-1)} aria-label="Go back">
        ← Back
      </button>
      <div className="blog-hero">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Stay updated with the latest fashion trends and style tips</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Blog</span>
          </div>
        </div>
      </div>

      <div className="container blog-content">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <span className="blog-author">{post.author}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="btn-read-more">Read More →</button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>Categories</h3>
            <ul>
              <li><a href="#fashion">Fashion (2)</a></li>
              <li><a href="#style">Style Guide (2)</a></li>
              <li><a href="#sustainability">Sustainability (1)</a></li>
              <li><a href="#accessories">Accessories (1)</a></li>
            </ul>
          </div>
          <div className="sidebar-widget">
            <h3>Newsletter</h3>
            <p>Subscribe to get the latest updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
