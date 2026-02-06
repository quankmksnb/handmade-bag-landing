'use client';
import { useEffect, useRef } from 'react';
import '../styles/cursor-glow.css';

export default function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = clientX + 'px';
        cursorRef.current.style.top = clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={cursorRef} className="cursor-bag">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Túi len */}
        <path d="M 10 18 Q 10 12 15 10 L 25 10 Q 30 12 30 18 L 30 32 Q 30 35 27 35 L 13 35 Q 10 35 10 32 Z" fill="#f3b5c4" stroke="#d4476b" strokeWidth="1.5"/>
        {/* Handle */}
        <path d="M 15 10 Q 15 5 20 4 Q 25 5 25 10" fill="none" stroke="#d4476b" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Pattern decoration */}
        <circle cx="20" cy="20" r="3" fill="#d4476b" opacity="0.6"/>
        <circle cx="16" cy="25" r="2" fill="#d4476b" opacity="0.6"/>
        <circle cx="24" cy="25" r="2" fill="#d4476b" opacity="0.6"/>
      </svg>
    </div>
  );
}
