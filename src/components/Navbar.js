"use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            <img src="/img/logo.jpg" alt="Logo" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-pink-400 hover:scale-110 transition-all duration-300">Sản phẩm</button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-pink-400 hover:scale-110 transition-all duration-300">Đánh giá</button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-pink-400 hover:scale-110 transition-all duration-300">Quy trình</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-pink-400 hover:scale-110 transition-all duration-300">Câu hỏi</button>
            <button onClick={() => scrollToSection('cta')} className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:scale-110 transition-all duration-300">Mua ngay</button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-pink-400 hover:scale-105 transition-all duration-300">Sản phẩm</button>
              <button onClick={() => scrollToSection('reviews')} className="text-left text-gray-700 hover:text-pink-400 hover:scale-105 transition-all duration-300">Đánh giá</button>
              <button onClick={() => scrollToSection('process')} className="text-left text-gray-700 hover:text-pink-400 hover:scale-105 transition-all duration-300">Quy trình</button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-pink-400 hover:scale-105 transition-all duration-300">Câu hỏi</button>
              <button onClick={() => scrollToSection('cta')} className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2.5 rounded-full text-center hover:shadow-lg hover:scale-105 transition-all">Mua ngay</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
