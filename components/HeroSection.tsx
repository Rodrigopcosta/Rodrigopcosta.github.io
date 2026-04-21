'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [commitCount, setCommitCount] = useState<number | null>(null);

  // Buscar contribuições via API Route
  useEffect(() => {
    async function fetchCommits() {
      try {
        const res = await fetch('/api/github/commits');
        const data = await res.json();
        setCommitCount(data.commits);
      } catch (error) {
        console.error('Erro ao buscar contribuições:', error);
        setCommitCount(134);
      }
    }
    
    fetchCommits();
  }, []);

  useEffect(() => {
    const phrases = [
      'React Developer',
      'Next.js Developer',
      'Full Stack Dev',
      'TypeScript Lover',
    ];

    let timeout: NodeJS.Timeout;

    const typeLoop = () => {
      const phrase = phrases[currentPhrase];

      if (!isDeleting) {
        setDisplayText(phrase.slice(0, displayText.length + 1));

        if (displayText.length + 1 === phrase.length) {
          setIsDeleting(true);
          timeout = setTimeout(typeLoop, 1900);
          return;
        }
      } else {
        setDisplayText(phrase.slice(0, displayText.length - 1));

        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }

      timeout = setTimeout(typeLoop, isDeleting ? 50 : 85);
    };

    timeout = setTimeout(typeLoop, isDeleting ? 50 : 85);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden py-30 pb-20 flex flex-col justify-center"
    >
      <div
        className="absolute top-0 right-0 -z-10 h-125 w-125 rounded-full bg-[#39ff7e] blur-[80px] opacity-12 animate-float"
        style={{ top: '-160px', right: '-180px' }}
      />
      <div
        className="absolute bottom-0 left-0 -z-10 h-87.5 w-87.5 rounded-full bg-[#7c6dfa] blur-[80px] opacity-12 animate-float"
        style={{ animationDirection: 'reverse', animationDuration: '11s' }}
      />

      <div className="container mx-auto px-7 max-w-275">
        <div className="grid grid-cols-1 gap-15 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-2.5 font-mono text-xs text-[#39ff7e] uppercase tracking-[0.15em]">
              <span className="inline-block h-px w-8 bg-[#39ff7e]" />
              disponível para projetos
            </div>

            <h1 className="text-[clamp(64px,8vw,108px)] font-display font-bold text-white leading-none">
              Rodrigo
              <br />
              Costa
            </h1>

            <p
              className="mt-2 flex items-center gap-1.5 text-[clamp(18px,2.4vw,28px)] font-light text-[#6b7280] flex-nowrap"
              style={{ minHeight: '2em' }}
            >
              <span className="shrink-0 whitespace-nowrap">
                Full Stack ·&nbsp;
              </span>
              <span className="whitespace-nowrap font-semibold text-[#ff6b35]">
                {displayText}
              </span>
              <span className="inline-block h-[0.85em] w-0.5 bg-[#ff6b35] animate-blink" />
            </p>

            <p className="mt-7 max-w-130 text-sm font-light text-[#6b7280] leading-relaxed">
              Desenvolvedor apaixonado por transformar ideias em produtos
              digitais que funcionam de verdade. Desde junho de 2024 entregando
              interfaces rápidas, escaláveis e com boa experiência de uso.
              Graduando em ADS (conclusão 06/2025).
            </p>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-[#39ff7e] px-7 py-3.25 font-mono text-xs font-semibold text-[#080b10] uppercase tracking-wider transition-all hover:shadow-[0_0_32px_rgba(57,255,126,.35)] hover:-translate-y-0.5"
              >
                ver projetos ↓
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/5 px-7 py-3.25 font-mono text-xs font-semibold text-[#6b7280] uppercase tracking-wider transition-all hover:border-[#39ff7e] hover:text-[#39ff7e] hover:bg-[rgba(255,255,255,.03)]"
              >
                falar comigo
              </a>
              <a
                href="/rodrigo-costa-fullstack-developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/5 px-7 py-3.25 font-mono text-xs font-semibold text-[#6b7280] uppercase tracking-wider transition-all hover:border-[#39ff7e] hover:text-[#39ff7e] hover:bg-[rgba(255,255,255,.03)]"
              >
                ↓ cv.pdf
              </a>
            </div>
          </div>

          <div className="hidden lg:block rounded-2xl border border-white/5 bg-[#0c1018] p-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#39ff7e] to-transparent" />

            <div className="mb-5 inline-flex items-center gap-1.75 rounded-full bg-[rgba(57,255,126,.08)] px-3 py-1.25 font-mono text-xs text-[#39ff7e] border border-[rgba(57,255,126,.2)]">
              <span className="inline-block h-1.75 w-1.75 rounded-full bg-[#39ff7e] animate-pulse-dot" />
              aberto a oportunidades
            </div>

            <div className="group relative mb-5 flex h-20 w-20 items-center justify-center rounded-3xl p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(57,255,126,0.15)]">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#7c6dfa] to-[#39ff7e] opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex h-full w-full items-center justify-center rounded-[22px] bg-[#0c1018]">
                <span className="font-mono text-3xl font-bold tracking-tighter bg-linear-to-br from-white to-white/60 bg-clip-text text-transparent">
                  RC
                </span>
              </div>
            </div>

            <div className="mb-1 text-sm font-bold text-white">
              Rodrigo Costa
            </div>
            <div className="font-mono text-xs text-[#6b7280] mb-5">
              @rodrigopcosta
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="rounded-[10px] border border-white/5 bg-[rgba(255,255,255,.03)] p-3.5">
                <div className="font-display text-2xl text-[#39ff7e] leading-none">
                  1+
                </div>
                <div className="font-mono text-xs text-[#6b7280] mt-1">
                  ano de código
                </div>
              </div>
              <div className="rounded-[10px] border border-white/5 bg-[rgba(255,255,255,.03)] p-3.5">
                <div className="font-display text-2xl text-[#39ff7e] leading-none">
                  9
                </div>
                <div className="font-mono text-xs text-[#6b7280] mt-1">
                  projetos built
                </div>
              </div>
              <div className="rounded-[10px] border border-white/5 bg-[rgba(255,255,255,.03)] p-3.5">
                <div className="font-display text-2xl text-[#39ff7e] leading-none">
                  8
                </div>
                <div className="font-mono text-xs text-[#6b7280] mt-1">
                  em produção
                </div>
              </div>
              <div className="rounded-[10px] border border-white/5 bg-[rgba(255,255,255,.03)] p-3.5">
                <div className="font-display text-2xl text-[#39ff7e] leading-none">
                  {commitCount !== null ? `${commitCount.toLocaleString()}+` : '...'}
                </div>
                <div className="font-mono text-xs text-[#6b7280] mt-1">
                  contribuições (último ano)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}