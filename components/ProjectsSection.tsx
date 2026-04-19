'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  tech: string[];
  status: 'completed' | 'wip';
  progress?: number;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Lista de Tarefas',
    description:
      'CRUD completo com filtros por status, persistência em localStorage e UI limpa.',
    emoji: '✅',
    gradient: 'from-[#1a2744] to-[#0f1929]',
    tech: ['React', 'localStorage', 'CSS'],
    status: 'completed',
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 2,
    title: 'Calculadora',
    description:
      'Calculadora funcional com histórico de operações e design minimalista.',
    emoji: '🧮',
    gradient: 'from-[#1a1a2e] to-[#16213e]',
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: 'completed',
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 3,
    title: 'Previsão do Tempo',
    description:
      'Clima em tempo real com geolocalização, ícones dinâmicos e busca por cidade.',
    emoji: '🌤️',
    gradient: 'from-[#0d2137] to-[#0a3d62]',
    tech: ['React', 'OpenWeather API', 'Axios'],
    status: 'completed',
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 4,
    title: 'Calculadora IMC',
    description:
      'Calcula o IMC com tabela de classificação da OMS e feedback visual colorido.',
    emoji: '⚖️',
    gradient: 'from-[#1f0d2e] to-[#2d1b69]',
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: 'completed',
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 5,
    title: 'Encurtador de Link',
    description:
      'Encurta URLs via API externa com cópia com um clique e histórico de sessão.',
    emoji: '🔗',
    gradient: 'from-[#0d1f3c] to-[#1a3a5c]',
    tech: ['React', 'TypeScript', 'REST API'],
    status: 'completed',
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 6,
    title: 'Conversor de Moedas',
    description:
      'Conversão em tempo real com múltiplas divisas e atualização automática de câmbio.',
    emoji: '💱',
    gradient: 'from-[#0d2818] to-[#134d2a]',
    tech: ['React', 'TypeScript', 'Exchange Rate API'],
    status: 'completed',
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 7,
    title: 'Página de Vendas — Ebooks',
    description:
      'Landing page de alta conversão com seções estratégicas, depoimentos e CTA otimizado.',
    emoji: '📚',
    gradient: 'from-[#1a0d2e] to-[#3d1a6b]',
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    status: 'completed',
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 8,
    title: 'Hamburgueria',
    description:
      'Cardápio digital com carrinho de compras, cálculo de total e finalização de pedido.',
    emoji: '🍔',
    gradient: 'from-[#2d1200] to-[#5c2500]',
    tech: ['React', 'Context API', 'Styled Components'],
    status: 'completed',
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 9,
    title: 'E-commerce de Perfumes',
    description:
      'Loja completa com catálogo, carrinho, checkout com Stripe e painel admin.',
    emoji: '🌸',
    gradient: 'from-[#2d1f00] to-[#5c3f00]',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    status: 'wip',
    progress: 59,
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 10,
    title: 'E-commerce de Óculos',
    description: 'Loja com filtros avançados e try-on virtual 3D usando Three.js.',
    emoji: '🕶️',
    gradient: 'from-[#001a2d] to-[#003d6b]',
    tech: ['Next.js', 'Three.js', 'Node.js'],
    status: 'wip',
    progress: 56,
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 11,
    title: 'Plataforma de Cursos',
    description:
      'LMS completo com vídeo-aulas, trilhas de aprendizado e certificados em PDF.',
    emoji: '🎓',
    gradient: 'from-[#1a0d3d] to-[#3d1a8a]',
    tech: ['Next.js', 'NextAuth', 'AWS S3'],
    status: 'wip',
    progress: 55,
    link: 'https://github.com/Rodrigopcosta',
  },
  {
    id: 12,
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
    id: 13,
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
  {
    id: 14,
    title: 'Portal Concurseiros',
    description:
      'Plataforma de estudos com banco de questões, simulados e cronograma personalizado.',
    emoji: '📖',
    gradient: 'from-[#001a1a] to-[#003d3d]',
    tech: ['Next.js', 'PostgreSQL'],
    status: 'wip',
    progress: 29,
    link: 'https://github.com/Rodrigopcosta',
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'wip'>('all');

  const filteredProjects = PROJECTS.filter((p) =>
    filter === 'all' ? true : p.status === filter
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
            O que já<br />
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
                className={`relative h-45 bg-linear-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
              >
                <div className="text-4xl transition-transform group-hover:scale-125 group-hover:rotate-3">
                  {project.emoji}
                </div>
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
                  href={project.link}
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
