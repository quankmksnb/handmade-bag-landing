'use client';
import { useEffect } from 'react';
import '../styles/snow.css';

export default function SnowEffect() {
  useEffect(() => {
    // Create snowflakes
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';
      
      // Random left position
      snowflake.style.left = Math.random() * 100 + '%';
      
      // Random animation duration (5-15 seconds)
      const duration = Math.random() * 10 + 5;
      snowflake.style.animationDuration = duration + 's';
      
      // Random animation delay
      snowflake.style.animationDelay = Math.random() * 2 + 's';
      
      // Random font size
      const size = Math.random() * 30 + 25;
      snowflake.style.fontSize = size + 'px';
      
      // Random opacity
      snowflake.style.opacity = Math.random() * 0.5 + 0.3;
      
      document.querySelector('.snowflake-container')?.appendChild(snowflake);
      
      // Remove snowflake after animation completes
      setTimeout(() => snowflake.remove(), (duration + 2) * 1000);
    };
    
    // Create snowflakes periodically
    const interval = setInterval(() => {
      if (document.querySelectorAll('.snowflake').length < 100) {
        createSnowflake();
      }
    }, 150);
    
    return () => clearInterval(interval);
  }, []);

  return <div className="snowflake-container"></div>;
}
