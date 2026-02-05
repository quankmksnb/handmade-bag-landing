"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import USP from '../components/USP';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Newsletter from '../components/Newsletter';
import FooterLanding from '../components/FooterLanding';
import BackToTop from '../components/BackToTop';
import Toast from '../components/Toast';
    // Main App
    export default function App() {
      const [toast, setToast] = useState(null);

      const handleAddToCart = (product) => setToast(`${product.name} added to cart!`);

      return (
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <ProductGrid onAddToCart={handleAddToCart} />
          <USP />
          <Process />
          <Reviews />
          <FAQ />
          <FinalCTA />
          <Newsletter />
          <FooterLanding />
          <BackToTop />
          {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        </div>
      );
    }
