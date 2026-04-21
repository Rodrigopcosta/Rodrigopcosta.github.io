'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    // Detecta se o dispositivo suporta hover (mouse) usando CSS media query
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    const supportsHover = mql.matches;
    
    setHasHover(supportsHover);
    
    // Escuta mudanças (ex: usuário conecta mouse em um tablet)
    const handleChange = (e: MediaQueryListEvent) => {
      setHasHover(e.matches);
    };
    
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Se não suporta hover, não inicializa o cursor
    if (!hasHover) return;

    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursor-ring');

    if (!cursor || !cursorRing) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top = ry + 'px';
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    const interactiveElements = document.querySelectorAll(
      'a, button, .filter-btn, .skill-tag',
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursorRing.style.width = '54px';
        cursorRing.style.height = '54px';
        cursorRing.style.opacity = '0.25';
      });

      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.opacity = '0.5';
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasHover]);

  // Só renderiza se o dispositivo suportar hover (mouse)
  if (!hasHover) return null;

  return (
    <>
      <div
        id="cursor"
        className="pointer-events-none fixed z-9999 h-3 w-3 rounded-full bg-[#39ff7e] transition-[width,height] duration-250 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        id="cursor-ring"
        className="pointer-events-none fixed z-9998 rounded-full border-[1.5px] border-[#39ff7e] transition-[width,height,opacity] duration-300"
        style={{
          width: '36px',
          height: '36px',
          transform: 'translate(-50%, -50%)',
          opacity: 0.5,
        }}
      />
    </>
  );
}