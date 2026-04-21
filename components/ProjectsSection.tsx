'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  emoji: string;
  image?: string;
  gradient: string;
  tech: string[];
  status: 'completed' | 'wip';
  progress?: number;
  link: string;
  repoLink?: string;
}

const PROJECTS: Project[] = [
  {
    id: 11,
    title: 'FocusStudy — Micro-SaaS',
    description:
      'Plataforma Full Stack para gestão de estudos de alto rendimento. Possui autenticação híbrida (Google/Email), timer Pomodoro, gerenciamento de disciplinas e notas em tempo real com Supabase.',
    emoji: '📚',
    image: '/screenshots/focus-study.png',
    gradient: 'from-[#001a1a] to-[#003d3d]',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript'],
    status: 'completed',
    link: 'https://focus-study.online/',
    repoLink: 'https://github.com/Rodrigopcosta/FocusStudy',
  },
  {
    id: 12,
    title: 'TaskShare — API Backend',
    description:
      'API robusta para gestão de tarefas colaborativas com arquitetura modular. Possui autenticação JWT, integração com Prisma ORM e documentação interativa via Swagger. Deploy realizado na AWS App Runner com banco PostgreSQL.',
    emoji: '⚙️',
    image: '/screenshots/taskshare-api.png',
    gradient: 'from-[#1e1e2e] to-[#313244]',
    tech: ['NestJS', 'Prisma', 'AWS', 'PostgreSQL', 'Swagger'],
    status: 'wip',
    link: 'https://8y7jwzwszc.us-east-1.awsapprunner.com/api',
    repoLink: 'https://github.com/Rodrigopcosta/taskshare-backend',
  },
  {
    id: 8,
    title: 'Sabor & Artes — Delivery',
    description:
      'Sistema de cardápio digital oficial com gerenciamento de carrinho via Context API, persistência de dados e integração direta com WhatsApp para pedidos. Focado em performance mobile e conversão de vendas.',
    emoji: '🍔',
    image: '/screenshots/sabor-e-arte.png',
    gradient: 'from-[#2d1200] to-[#5c2500]',
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'TypeScript'],
    status: 'completed',
    link: 'https://saboreartes.com.br/',
    repoLink: 'https://github.com/Rodrigopcosta/Sabor_e_arte_hamburgueria',
  },
  {
    id: 7,
    title: 'Método Digital Prático',
    description:
      'Landing Page de alta conversão focada em infoprodutos. Implementação de performance extrema com React Server Components, animações fluidas com Framer Motion e SEO estratégico para máxima indexação.',
    emoji: '🚀',
    image: '/screenshots/marketing.png',
    gradient: 'from-[#1a0d2e] to-[#3d1a6b]',
    tech: ['Next.js 16', 'Tailwind CSS v4', 'Framer Motion', 'TypeScript'],
    status: 'completed',
    link: 'https://metododigitalpratico.com.br/',
    repoLink: 'https://github.com/Rodrigopcosta/landing-page-ebook',
  },
  {
    id: 1,
    title: 'TaskShare',
    description:
      'Plataforma de criação de hábitos em grupo. Escolha um objetivo, convide seus amigos e vejam juntos quem mantém a sequência por mais tempo. Ranking semanal, missões diárias e gamificação para transformar disciplina em diversão.',
    emoji: '✅',
    image: '/screenshots/taskshare.png',
    gradient: 'from-[#1a2744] to-[#0f1929]',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Radix UI'],
    status: 'wip',
    link: 'https://taskshare-web-29bf.vercel.app/',
    repoLink: 'https://github.com/Rodrigopcosta/task-web',
  },
  {
    id: 5,
    title: 'Encurtador de Links',
    description:
      'Plataforma Full-Stack com encurtamento inteligente, geração automática de QR Codes e histórico de links recentes. Focada em SEO e performance, inclui blog integrado, suporte a AdSense e interface ultra-rápida.',
    emoji: '🔗',
    image: '/screenshots/encurt-ink.png',
    gradient: 'from-[#0d1f3c] to-[#1a3a5c]',
    tech: ['Next.js 15+', 'TypeScript', 'Tailwind CSS v4', 'QR Code API'],
    status: 'completed',
    link: 'https://encurt.ink',
    repoLink: 'https://github.com/Rodrigopcosta/encurtador-de-links',
  },
  {
    id: 6,
    title: 'Conversor de Moedas PWA',
    description:
      'Aplicação financeira de alta performance com conversão em tempo real, gráficos históricos e alertas de taxa. Desenvolvido como PWA, oferece suporte offline, suporte multilíngue e interface otimizada para SEO e acessibilidade.',
    emoji: '💱',
    image: '/screenshots/currency-converter.png',
    gradient: 'from-[#0d2818] to-[#134d2a]',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'PWA'],
    status: 'completed',
    link: 'https://currency-converter-nu-livid.vercel.app/',
    repoLink: 'https://github.com/Rodrigopcosta/currency-converter',
  },
  {
    id: 3,
    title: 'Previsão do Tempo',
    description:
      'Aplicação meteorológica avançada com Next.js 16 e React 19. Oferece previsão de 5 dias com gráficos interativos, índice UV, geolocalização, suporte multilíngue (i18n) e modo Dark/Light persistente.',
    emoji: '🌤️',
    image: '/screenshots/weather-forecast.png',
    gradient: 'from-[#0d2137] to-[#0a3d62]',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Recharts'],
    status: 'completed',
    link: 'https://weather-forecast-app-rho-nine.vercel.app/',
    repoLink: 'https://github.com/Rodrigopcosta/weather-forecast-app',
  },
  {
    id: 4,
    title: 'Calculadora de IMC',
    description:
      'Calculadora de alta performance desenvolvida com Next.js 16 e React 19. Oferece feedback visual dinâmico por faixas de peso, suporte a múltiplas unidades de medida e cards educativos com foco em acessibilidade e UX.',
    emoji: '⚖️',
    image: '/screenshots/imc-calculator.png',
    gradient: 'from-[#1f0d2e] to-[#2d1b69]',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
    status: 'completed',
    link: 'https://imcacul.vercel.app/',
    repoLink: 'https://github.com/Rodrigopcosta/Calcular-IMC',
  },
  {
    id: 2,
    title: 'Calculadora',
    description:
      'Calculadora online completa com modos básico e científico. Suporte a teclado, histórico de cálculos, funções trigonométricas, logaritmos e constantes matemáticas.',
    emoji: '🧮',
    image: '/screenshots/calculator.png',
    gradient: 'from-[#1a1a2e] to-[#16213e]',
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: 'completed',
    link: 'https://calculo-rapido.netlify.app/',
    repoLink: 'https://github.com/Rodrigopcosta/Calculadora',
  },
  {
    id: 9,
    title: 'App de Nutrientes (TACO)',
    description:
      'Consulta de nutrientes com a Tabela TACO completa, diário alimentar e gráficos.',
    emoji: '🥗',
    gradient: 'from-[#0d2400] to-[#1e4d00]',
    tech: ['React Native', 'SQLite', 'TypeScript'],
    status: 'wip',
    progress: 53,
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 10,
    title: 'Calculadora de Rescisão',
    description:
      'Cálculo de rescisão trabalhista com todos os tipos e exportação de relatório PDF.',
    emoji: '⚖️',
    gradient: 'from-[#1a1200] to-[#3d2d00]',
    tech: ['React', 'TypeScript', 'Tailwind'],
    status: 'wip',
    progress: 63,
    link: 'https://github.com/Rodrigopcosta',
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'wip'>('all');

  const filteredProjects = PROJECTS.filter((p) =>
    filter === 'all' ? true : p.status === filter,
  );

  const counts = {
    all: PROJECTS.length,
    completed: PROJECTS.filter((p) => p.status === 'completed').length,
    wip: PROJECTS.filter((p) => p.status === 'wip').length,
  };

  return (
    <section id="projects" className="py-25">
      <div className="container mx-auto max-w-275 px-7">
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#39ff7e] uppercase tracking-[0.15em]">
            02 — projetos
            <span className="flex-1 h-px bg-white/5" />
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,56px)] text-white mb-2">
            O que já
            <br />
            construí
          </h2>
          <p className="max-w-135 text-sm text-[#6b7280]">
            Projetos reais, com código real.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          {(['all', 'completed', 'wip'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md px-4 py-1.75 font-mono text-xs uppercase tracking-widest transition-all ${
                filter === f
                  ? 'border-[#39ff7e] bg-[rgba(57,255,126,.07)] text-[#39ff7e]'
                  : 'border border-white/5 bg-[rgba(255,255,255,.03)] text-[#6b7280] hover:border-[#39ff7e] hover:text-[#39ff7e]'
              }`}
            >
              {f === 'all' && `Todos (${counts.all})`}
              {f === 'completed' && `✓ Em produção (${counts.completed})`}
              {f === 'wip' && `⚡ Em andamento (${counts.wip})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0c1018] transition-all hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image */}
              <div
                className={`relative h-65 bg-linear-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="text-4xl transition-transform group-hover:scale-125 group-hover:rotate-3">
                    {project.emoji}
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0c1018]" />
                <span
                  className={`absolute top-3 right-3 inline-flex rounded-full px-2.5 py-0.75 font-mono text-xs font-semibold ${
                    project.status === 'completed'
                      ? 'border border-[rgba(57,255,126,.25)] bg-[rgba(57,255,126,.15)] text-[#39ff7e]'
                      : 'border border-[rgba(255,107,53,.25)] bg-[rgba(255,107,53,.15)] text-[#ff6b35]'
                  }`}
                >
                  {project.status === 'completed' ? 'produção' : 'em andamento'}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-2.5 p-5">
                <div className="text-base font-bold text-white">
                  {project.title}
                </div>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex rounded-md border border-white/5 bg-[rgba(255,255,255,.05)] px-2 py-0.75 font-mono text-xs text-[#6b7280]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.status === 'wip' && project.progress && (
                  <div className="mt-1">
                    <div className="mb-1 flex justify-between font-mono text-xs text-[#6b7280]">
                      <span>progresso geral</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-0.75 rounded-full bg-[rgba(255,255,255,.06)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-[#ff6b35] to-[#ff9a6c] transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex gap-2 px-5 pb-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-[#39ff7e] py-2.25 text-center font-mono text-xs font-semibold text-[#080b10] uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(57,255,126,.3)] hover:opacity-90"
                >
                  Ver Demo →
                </a>
                <a
                  href={project.repoLink ?? project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl border border-white/5 py-2.25 text-center font-mono text-xs font-semibold text-[#6b7280] uppercase tracking-wider transition-all hover:border-[#ff6b35] hover:text-[#ff6b35]"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
