"use client";
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Vui lòng nhập email hợp lệ');
      return;
    }
    setMessage('Cảm ơn bạn đã đăng ký! 💌');
    setEmail('');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-4xl mb-4">📧</div>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Nhận thông tin mới</h3>
        <p className="text-gray-600 mb-6">Đăng ký để nhận ưu đãi và mẫu mới</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email của bạn" className="flex-1 px-6 py-3 rounded-full border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors" />
          <button type="submit" className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">Subscribe</button>
        </form>
        {message && (<div className={`mt-4 text-sm font-semibold ${message.includes('Cảm ơn') ? 'text-green-600' : 'text-red-600'}`}>{message}</div>)}
      </div>
    </section>
  );
}
