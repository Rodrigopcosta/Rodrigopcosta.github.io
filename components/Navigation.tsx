'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-100 transition-[background,border-bottom] duration-300 ${
        isScrolled
          ? 'border-b border-white/5 bg-[rgba(8,11,16,.88)] backdrop-blur-lg'
          : ''
      }`}
      style={{ padding: '18px 0' }}
    >
      <div className="mx-auto flex max-w-275 items-center justify-between px-7">
        <span className="font-mono text-sm text-[#39ff7e] tracking-widest">
          rodrigo.costa/
        </span>

        <ul className="hidden gap-8 list-none md:flex">
          <li>
            <a
              href="#about"
              className="font-mono text-xs text-[#6b7280] uppercase tracking-widest transition-colors hover:text-[#39ff7e]"
            >
              sobre
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-mono text-xs text-[#6b7280] uppercase tracking-widest transition-colors hover:text-[#39ff7e]"
            >
              projetos
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="font-mono text-xs text-[#6b7280] uppercase tracking-widest transition-colors hover:text-[#39ff7e]"
            >
              currículo
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-mono text-xs text-[#6b7280] uppercase tracking-widest transition-colors hover:text-[#39ff7e]"
            >
              contato
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/5511940886936?text=Ol%C3%A1%2C+Rodrigo%21+Vi+seu+portf%C3%B3lio."
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-semibold rounded-md bg-[#39ff7e] px-4.5 py-2 text-[#080b10] uppercase tracking-wider transition-[opacity,transform] hover:opacity-85 hover:-translate-y-px"
        >
          contratar →
        </a>
      </div>
    </nav>
  );
}
