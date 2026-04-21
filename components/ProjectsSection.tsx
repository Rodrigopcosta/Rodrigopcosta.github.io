'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  emoji: string;
  image?: string;
  gradient: string;
  tech: string[];
  link: string;
  repoLink?: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Sabor & Artes — Delivery',
    description:
      'Projeto comercial desenvolvido para cliente real. Cardápio digital com carrinho via Context API, integração com Stripe e Mercado Pago, Lalamove para entregas, notificações via Telegram para o dono e WhatsApp para o cliente. Focado em performance mobile e conversão de vendas.',
    emoji: '🍔',
    image: '/screenshots/sabor-e-arte.png',
    gradient: 'from-[#2d1200] to-[#5c2500]',
    tech: [
      'Next.js 16',
      'React 19',
      'Tailwind CSS v4',
      'TypeScript',
      'Stripe',
      'Mercado Pago',
      'Telegram API',
    ],
    link: 'https://saboreartes.com.br/',
    repoLink: 'https://github.com/Rodrigopcosta/Sabor_e_arte_hamburgueria',
  },
  {
    id: 2,
    title: 'FocusStudy — Micro-SaaS',
    description:
      'Plataforma Full Stack para gestão de estudos de alto rendimento. Autenticação híbrida (Google/Email), timer Pomodoro, gerenciamento de disciplinas e notas em tempo real com Supabase.',
    emoji: '📚',
    image: '/screenshots/focus-study.png',
    gradient: 'from-[#001a1a] to-[#003d3d]',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript'],
    link: 'https://focus-study.online/',
    repoLink: 'https://github.com/Rodrigopcosta/FocusStudy',
  },
  {
    id: 3,
    title: 'TaskShare — API Backend',
    description:
      'API robusta para gestão de tarefas colaborativas com arquitetura modular. Autenticação JWT, integração com Prisma ORM e documentação interativa via Swagger. Deploy na AWS App Runner com banco PostgreSQL.',
    emoji: '⚙️',
    image: '/screenshots/taskshare-api.png',
    gradient: 'from-[#1e1e2e] to-[#313244]',
    tech: ['NestJS', 'Prisma', 'AWS App Runner', 'PostgreSQL', 'Swagger'],
    link: 'https://8y7jwzwszc.us-east-1.awsapprunner.com/api',
    repoLink: 'https://github.com/Rodrigopcosta/taskshare-backend',
  },
  {
    id: 4,
    title: 'Encurt.ink — Encurtador de Links',
    description:
      'Plataforma Full-Stack com encurtamento inteligente, geração automática de QR Codes e histórico de links. SEO otimizado, blog integrado e suporte a AdSense.',
    emoji: '🔗',
    image: '/screenshots/encurt-ink.png',
    gradient: 'from-[#0d1f3c] to-[#1a3a5c]',
    tech: ['Next.js 15+', 'TypeScript', 'Tailwind CSS v4', 'QR Code API'],
    link: 'https://encurt.ink',
    repoLink: 'https://github.com/Rodrigopcosta/encurtador-de-links',
  },
];

const OTHER_PROJECTS: Project[] = [
  {
    id: 5,
    title: 'Método Digital Prático',
    description:
      'Landing page de alta conversão para infoproduto. React Server Components, animações com Framer Motion e SEO estratégico.',
    emoji: '🚀',
    image: '/screenshots/marketing.png',
    gradient: 'from-[#1a0d2e] to-[#3d1a6b]',
    tech: ['Next.js 16', 'Tailwind CSS v4', 'Framer Motion', 'TypeScript'],
    link: 'https://metododigitalpratico.com.br/',
    repoLink: 'https://github.com/Rodrigopcosta/landing-page-ebook',
  },
  {
    id: 6,
    title: 'Conversor de Moedas PWA',
    description:
      'App financeiro com conversão em tempo real, gráficos históricos, suporte offline e i18n.',
    emoji: '💱',
    image: '/screenshots/currency-converter.png',
    gradient: 'from-[#0d2818] to-[#134d2a]',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'PWA'],
    link: 'https://currency-converter-nu-livid.vercel.app/',
    repoLink: 'https://github.com/Rodrigopcosta/currency-converter',
  },
  {
    id: 7,
    title: 'Previsão do Tempo',
    description:
      'App meteorológico com previsão de 5 dias, gráficos interativos, índice UV, geolocalização e modo dark/light.',
    emoji: '🌤️',
    image: '/screenshots/weather-forecast.png',
    gradient: 'from-[#0d2137] to-[#0a3d62]',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Recharts'],
    link: 'https://weather-forecast-app-rho-nine.vercel.app/',
    repoLink: 'https://github.com/Rodrigopcosta/weather-forecast-app',
  },
  {
    id: 8,
    title: 'Calculadora de IMC',
    description:
      'Feedback visual dinâmico por faixas de peso, múltiplas unidades de medida e cards educativos com foco em acessibilidade.',
    emoji: '⚖️',
    image: '/screenshots/imc-calculator.png',
    gradient: 'from-[#1f0d2e] to-[#2d1b69]',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
    link: 'https://imcacul.vercel.app/',
    repoLink: 'https://github.com/Rodrigopcosta/Calcular-IMC',
  },
  {
    id: 9,
    title: 'Calculadora',
    description:
      'Calculadora completa com modos básico e científico, suporte a teclado, histórico de cálculos e funções trigonométricas.',
    emoji: '🧮',
    image: '/screenshots/calculator.png',
    gradient: 'from-[#1a1a2e] to-[#16213e]',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://calculo-rapido.netlify.app/',
    repoLink: 'https://github.com/Rodrigopcosta/Calculadora',
  },
];

const TABS = [
  { id: 'featured', label: 'Principais', count: FEATURED_PROJECTS.length },
  { id: 'others', label: 'Outros', count: OTHER_PROJECTS.length },
] as const;

type TabId = (typeof TABS)[number]['id'];

function useCardAnimation(projects: Project[]) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>('[data-card]'));

    cards.forEach((card) => {
      card.style.transition = 'none';
      card.style.opacity = '0';
      card.style.transform = 'translateY(32px)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target as HTMLElement;
          const index = Number(card.dataset.index ?? 0);
          setTimeout(() => {
            card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, index * 75);
          observer.unobserve(card);
        });
      },
      { threshold: 0.08 },
    );

    const frameId = requestAnimationFrame(() => {
      cards.forEach((card) => observer.observe(card));
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [projects]);

  return gridRef;
}

function ProjectCard({
  project,
  index,
  size = 'normal',
}: {
  project: Project;
  index: number;
  size?: 'normal' | 'small';
}) {
  const isSmall = size === 'small';

  return (
    <div
      data-card
      data-index={index}
      style={{ opacity: 0, transform: 'translateY(32px)' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0c1018] transition-[border-color,transform,box-shadow] duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Image */}
      <div
        className={`relative bg-linear-to-br ${project.gradient} overflow-hidden ${isSmall ? 'h-44' : 'h-65'}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl transition-transform group-hover:scale-125 group-hover:rotate-3">
            {project.emoji}
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0c1018]" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div
          className={`font-bold text-white ${isSmall ? 'text-sm' : 'text-base'}`}
        >
          {project.title}
        </div>
        <p
          className={`leading-relaxed text-[#6b7280] ${isSmall ? 'text-xs' : 'text-sm'}`}
        >
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex rounded-md border border-white/5 bg-[rgba(255,255,255,.05)] px-2 py-0.75 font-mono text-xs text-[#6b7280]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-2 px-5 pb-5">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-2xl bg-[#39ff7e] py-2.25 text-center font-mono text-xs font-semibold uppercase tracking-wider text-[#080b10] transition-all hover:opacity-90 hover:shadow-[0_0_20px_rgba(57,255,126,.3)]"
        >
          Ver Demo →
        </a>
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-2xl border border-white/5 py-2.25 text-center font-mono text-xs font-semibold uppercase tracking-wider text-[#6b7280] transition-all hover:border-[#ff6b35] hover:text-[#ff6b35]"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('featured');

  const isFeatured = activeTab === 'featured';
  const projects = isFeatured ? FEATURED_PROJECTS : OTHER_PROJECTS;
  const gridRef = useCardAnimation(projects);

  return (
    <section id="projects" className="py-25">
      <div className="container mx-auto max-w-275 px-7">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#39ff7e]">
            02 — projetos
            <span className="h-px flex-1 bg-white/5" />
          </div>
          <h2 className="font-display mb-2 text-[clamp(36px,5vw,56px)] text-white">
            O que já
            <br />
            construí
          </h2>
          <p className="max-w-135 text-sm text-[#6b7280]">
            Projetos reais, com código real.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex w-fit items-center gap-1 rounded-xl border border-white/5 bg-[rgba(255,255,255,.02)] p-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-lg px-5 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? 'text-[#39ff7e]'
                    : 'text-[#6b7280] hover:text-white/60'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-lg border border-[rgba(57,255,126,.2)] bg-[rgba(57,255,126,.08)]" />
                )}
                <span className="relative">
                  {tab.label}
                  <span
                    className={`ml-2 rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                      isActive
                        ? 'bg-[rgba(57,255,126,.15)] text-[#39ff7e]'
                        : 'bg-white/5 text-[#6b7280]'
                    }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`grid gap-5 ${
            isFeatured
              ? 'grid-cols-1 sm:grid-cols-2'
              : 'grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              size={isFeatured ? 'normal' : 'small'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
