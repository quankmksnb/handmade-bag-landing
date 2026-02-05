"use client";
import { useState } from 'react';
import { products } from '../data/siteData';

export default function ProductGrid({ onAddToCart }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'Tất cả', value: 'all' },
    { label: 'Nổi bật', value: 'Nổi bật' },
    { label: 'Mới', value: 'Mới' }
  ];

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.tag === filter);

  return (
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Bán chạy</h2>
          <p className="text-lg text-gray-600">Khám phá túi len được yêu thích</p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button key={cat.value} onClick={() => setFilter(cat.value)} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === cat.value ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map(product => {
            const imgs = ['pro2.jpg','pro3.jpg','pro4.jpg','pro5.jpg','pro6.jpg'];
            const imgSrc = `/img/${imgs[(product.id - 1) % imgs.length]}`;
            return (
              <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <div className="h-64 sm:h-72 flex items-center justify-center bg-gray-100">
                    <img src={imgSrc} alt={product.name} className="w-full h-full object-cover" />
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
