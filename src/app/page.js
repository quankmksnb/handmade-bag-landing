"use client";
import { useState, useEffect } from 'react';

// Mock Data
const products = [
  { id: 1, name: 'Mini Tote Bag', price: '$28', rating: 5, tag: 'Hot', image: 'product1' },
  { id: 2, name: 'Crossbody Bag', price: '$35', rating: 5, tag: 'New', image: 'product2' },
  { id: 3, name: 'Bucket Bag', price: '$42', rating: 4, tag: 'Hot', image: 'product3' },
  { id: 4, name: 'Shopping Tote', price: '$38', rating: 5, tag: null, image: 'product4' },
  { id: 5, name: 'Evening Clutch', price: '$25', rating: 4, tag: 'New', image: 'product5' },
  { id: 6, name: 'Beach Bag', price: '$45', rating: 5, tag: 'Hot', image: 'product6' }
];

const reviews = [
  { id: 1, name: 'Sarah Johnson', rating: 5, text: 'Absolutely love my crochet bag! The quality is amazing and the colors are so vibrant. Perfect for daily use!' },
  { id: 2, name: 'Emma Williams', rating: 5, text: 'Beautiful craftsmanship! I got a custom name added and it turned out perfect. Worth every penny!' },
  { id: 3, name: 'Olivia Brown', rating: 4, text: 'Super cute and sturdy! The inner lining is a nice touch. My friends keep asking where I got it.' },
  { id: 4, name: 'Ava Davis', rating: 5, text: 'The bag exceeded my expectations! Shipped quickly and packaged beautifully. Highly recommend!' }
];

const faqs = [
  { 
    question: 'How long does it take to make a bag?', 
    answer: 'Each bag is handmade to order and typically takes 5-7 working days to complete, depending on the design complexity and customization requirements.' 
  },
  { 
    question: 'Can I customize the design?', 
    answer: 'Absolutely! You can choose from our existing designs and customize the colors. We also offer personalization options like adding names or initials for an extra fee.' 
  },
  { 
    question: 'How do I wash the bag?', 
    answer: 'Hand wash gently with mild soap in cold water. Avoid wringing. Lay flat to dry in a shaded area. Do not machine wash or bleach to maintain the shape and color.' 
  },
  { 
    question: 'Return & exchange policy', 
    answer: 'We offer a 7-day return policy for unused items in original condition. Custom orders with personalization are non-refundable. Exchange is available for defective items.' 
  },
  { 
    question: 'Shipping time', 
    answer: 'Nationwide shipping takes 3-5 business days after the bag is completed. Express shipping options are available for an additional fee. International shipping available upon request.' 
  }
];

// Components
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-pink-400 transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-pink-400 transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-pink-400 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-pink-400 transition-colors">
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Buy Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-pink-400 transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-left text-gray-700 hover:text-pink-400 transition-colors">
                Reviews
              </button>
              <button onClick={() => scrollToSection('process')} className="text-left text-gray-700 hover:text-pink-400 transition-colors">
                Process
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-pink-400 transition-colors">
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2.5 rounded-full text-center hover:shadow-lg transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Handmade Crochet Bags – <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Cute, Durable, Uniquely Yours</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Each bag is lovingly crafted with premium soft cotton yarn, featuring vibrant colors that last. 
              Choose your favorite design and customize it with your preferred colors to make it truly yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={() => scrollToSection('cta')}
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Order Now
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300"
              >
                View Collection
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🧶</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">100% Handmade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">↩️</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">7-Day Return</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🚚</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">Nationwide Shipping</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center shadow-2xl">
              <div className="text-white text-6xl">👜</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-100 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center text-3xl sm:text-4xl shadow-lg">
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGrid({ onAddToCart }) {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.tag === filter);

  return (
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600">
            Discover our most loved crochet bags
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'Hot', 'New'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 h-64 sm:h-72 flex items-center justify-center">
                  <div className="text-6xl sm:text-7xl">🎀</div>
                </div>
                {product.tag && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${
                    product.tag === 'Hot' ? 'bg-red-400' : 'bg-green-400'
                  }`}>
                    {product.tag}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.rating}.0)</span>
                </div>
                <div className="text-2xl font-bold text-pink-500 mb-4">{product.price}</div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function USP() {
  const features = [
    { icon: '🌈', title: 'Soft cotton yarn, long-lasting color', description: 'Premium quality yarn that stays vibrant wash after wash' },
    { icon: '💪', title: 'Durable inner lining', description: 'Strong fabric lining protects your belongings and extends bag life' },
    { icon: '🎨', title: 'Customizable colors & names', description: 'Make it uniquely yours with personalized colors and embroidery' },
    { icon: '✋', title: 'Carefully handcrafted', description: 'Each stitch made with love and attention to detail' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600">
            Quality and care in every stitch
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl sm:text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { number: '1', title: 'Choose a design', description: 'Browse our collection and pick your favorite style', icon: '🔍' },
    { number: '2', title: 'Pick color & size', description: 'Customize with your preferred colors and dimensions', icon: '🎨' },
    { number: '3', title: 'Confirm & receive delivery', description: 'Place your order and get it delivered to your door', icon: '📦' }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ordering Process
          </h2>
          <p className="text-lg text-gray-600">
            Three simple steps to get your perfect bag
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-pink-300 text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-600">
            See what our happy customers say
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reviews.map(review => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? 'text-yellow-400 text-xl' : 'text-gray-300 text-xl'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="font-semibold text-gray-900">{review.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                <span className={`text-2xl text-pink-400 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ↓
                </span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="py-16 sm:py-20 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl sm:text-6xl mb-6">💬</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Message us to find the perfect bag for you
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8">
          Our team is ready to help you create your dream crochet bag
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#"
            className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <span>💬</span>
            Chat on Zalo
          </a>
          <a 
            href="#"
            className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-500 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <span>📞</span>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }
    setMessage('Thank you for subscribing! 💌');
    setEmail('');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-4xl mb-4">📧</div>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Stay Updated
        </h3>
        <p className="text-gray-600 mb-6">
          Subscribe to get special offers and new design updates
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
        
        {message && (
          <div className={`mt-4 text-sm font-semibold ${
            message.includes('Thank you') ? 'text-green-600' : 'text-red-600'
          }`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              LenLinh Handmade
            </h3>
            <p className="text-gray-400 mb-4">
              Handcrafted with love, made just for you.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                Z
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 123 Craft Street, Hanoi</p>
              <p>📞 (+84) 123 456 789</p>
              <p>✉️ hello@lenlinh.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Return Policy</a>
              <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Warranty</a>
              <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Business Hours</h4>
            <div className="space-y-2 text-gray-400">
              <p>Mon - Fri: 9:00 - 18:00</p>
              <p>Sat: 9:00 - 17:00</p>
              <p>Sun: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 LenLinh Handmade. All rights reserved. Made with 💖</p>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-gradient-to-r from-pink-400 to-purple-400 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      ↑
    </button>
  );
}

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-full shadow-2xl z-50 flex items-center gap-3 animate-bounce">
      <span className="text-2xl">🛍️</span>
      <span className="font-semibold">{message}</span>
    </div>
  );
}

// Main App
export default function App() {
  const [toast, setToast] = useState(null);

  const handleAddToCart = (product) => {
    setToast(`${product.name} added to cart!`);
  };

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
      <Footer />
      <BackToTop />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
