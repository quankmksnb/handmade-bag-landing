"use client";
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button onClick={scrollToTop} className={`fixed bottom-8 right-8 bg-gradient-to-r from-pink-400 to-purple-400 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      ↑
    </button>
  );
}
