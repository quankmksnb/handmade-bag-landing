"use client";
import { useEffect } from 'react';

export default function Toast({ message, onClose }) {
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
