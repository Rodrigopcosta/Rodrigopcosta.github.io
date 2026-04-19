'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao início"
      className={`fixed bottom-8 right-8 z-200 flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-[#0c1018] text-[#6b7280] transition-all hover:border-[#39ff7e] hover:text-[#39ff7e] hover:shadow-[0_0_20px_rgba(57,255,126,.25)] ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 stroke-current fill-none stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
