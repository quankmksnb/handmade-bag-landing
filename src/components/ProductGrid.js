"use client";
import { useState } from 'react';
import { products } from '../data/siteData';

export default function ProductGrid({ onAddToCart }) {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.tag === filter);

  return (
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Best Sellers</h2>
          <p className="text-lg text-gray-600">Discover our most loved crochet bags</p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'Hot', 'New'].map(category => (
            <button key={category} onClick={() => setFilter(category)} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === category ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 h-64 sm:h-72 flex items-center justify-center">
                  <div className="text-6xl sm:text-7xl">🎀</div>
                </div>
                {product.tag && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${product.tag === 'Hot' ? 'bg-red-400' : 'bg-green-400'}`}>{product.tag}</div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">{[...Array(5)].map((_, i) => (<span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>))}</div>
                  <span className="text-sm text-gray-500">({product.rating}.0)</span>
                </div>
                <div className="text-2xl font-bold text-pink-500 mb-4">{product.price}</div>
                <button onClick={() => onAddToCart(product)} className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
