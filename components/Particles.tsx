'use client';

import { useEffect } from 'react';

export default function Particles() {
  useEffect(() => {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 22; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 3 + 1;
      const randomDelay = Math.random() * 10;
      const randomDuration = Math.random() * 18 + 12;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        border-radius: 50%;
        background: var(--accent);
        opacity: 0;
        animation: particle-float linear infinite;
        animation-duration: ${randomDuration}s;
        animation-delay: ${randomDelay}s;
      `;

      container.appendChild(particle);
    }
  }, []);

  return null;
}
