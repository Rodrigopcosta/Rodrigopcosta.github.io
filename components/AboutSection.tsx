'use client';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0c1018] py-25">
      <div className="container mx-auto max-w-275 px-7">
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#39ff7e] uppercase tracking-[0.15em]">
            01 — sobre mim
            <span className="flex-1 h-px bg-white/5" />
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,56px)] text-white mb-2">
            Quem é<br />
            Rodrigo?
          </h2>
          <p className="max-w-135 text-sm text-[#6b7280]">
            De suporte técnico a full stack com projetos reais em produção.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-15 lg:grid-cols-2 lg:items-start">
          {/* About Text */}
          <div className="space-y-4">
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Comecei a programar em{' '}
              <span className="font-semibold text-white">junho de 2024</span> e,
              em menos de um ano, já construí projetos comerciais reais —
              incluindo uma hamburgueria com pagamentos via{' '}
              <span className="font-semibold text-white">
                Stripe e Mercado Pago
              </span>
              , um Micro-SaaS de produtividade e uma API backend em
              desenvolvimento na AWS.
            </p>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Sou graduando em{' '}
              <span className="font-semibold text-white">
                Análise e Desenvolvimento de Sistemas (conclusão 06/2025)
              </span>{' '}
              e trabalho como{' '}
              <span className="font-semibold text-white">
                Desenvolvedor Full Stack freelancer
              </span>
              . Minha experiência anterior em suporte técnico (Teleperformance e
              KTGroup) me deu disciplina, análise de logs e visão de negócio —
              skills que levo para cada projeto.
            </p>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Hoje entrego aplicações com performance 90+ no Lighthouse, SEO
              otimizado e integrações complexas (gateways de pagamento,
              notificações em tempo real, autenticação OAuth). Código limpo e
              experiência do usuário sempre em primeiro lugar.
            </p>

            {/* Timeline real */}
            <div className="mt-9 space-y-6 border-l border-white/5 pl-5">
              {[
                {
                  year: 'Jun/2024',
                  title: 'Primeiro commit',
                  desc: 'HTML, CSS, JS. A virada de chave.',
                },
                {
                  year: 'Jul–Set/2024',
                  title: 'React & TypeScript',
                  desc: 'Calculadora IMC, clima, componentes reutilizáveis.',
                },
                {
                  year: 'Out–Dez/2024',
                  title: 'Next.js + APIs + Banco',
                  desc: 'Encurt.ink (links + analytics + QR Code).',
                },
                {
                  year: 'Jan–Mar/2025',
                  title: 'Full Stack com pagamento real',
                  desc: 'Sabor & Artes (Stripe, Mercado Pago, Telegram API). FocusStudy (OAuth + tarefas).',
                },
                {
                  year: 'Abr/2025 →',
                  title: 'Backend profissional',
                  desc: 'Estudando NestJS + Prisma + AWS App Runner. Próximo passo: React Native.',
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-7.25 top-1.5 h-2 w-2 rounded-full bg-[#39ff7e] border-2 border-[#080b10]" />
                  <div className="font-mono text-xs text-[#39ff7e] mb-1">
                    {item.year}
                  </div>
                  <div className="text-sm text-[#6b7280]">
                    <strong className="text-white">{item.title}</strong> —{' '}
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="mb-8">
              <h4 className="font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-4">
                Hard Skills (em produção)
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'React',
                  'Next.js 16',
                  'TypeScript',
                  'Tailwind CSS v4',
                  'Node.js',
                  'PostgreSQL',
                  'Supabase',
                  'MongoDB',
                  'Stripe',
                  'Mercado Pago',
                  'REST APIs',
                  'Autenticação (NextAuth, JWT)',
                  'Git & GitHub',
                  'Docker',
                  'Figma',
                  'Vercel',
                  'PWA',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md px-3 py-1.25 font-mono text-xs border border-[rgba(57,255,126,.3)] bg-[rgba(57,255,126,.06)] text-[#39ff7e] transition-all hover:-translate-y-0.5 hover:bg-[rgba(57,255,126,.12)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Aprendendo agora */}
            <div className="mb-8">
              <h4 className="font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-4">
                🚀 Aprendendo agora
              </h4>
              <div className="flex flex-wrap gap-2">
                {['NestJS', 'Prisma', 'AWS App Runner', 'React Native'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md px-3 py-1.25 font-mono text-xs border border-[rgba(255,107,53,.3)] bg-[rgba(255,107,53,.06)] text-[#ff6b35]"
                    >
                      📘 {skill}
                    </span>
                  ),
                )}
              </div>
              <p className="text-xs text-[#6b7280] mt-3">
                NestJS, Prisma e AWS App Runner: em estudo para minha próxima
                API. React Native: próximo passo para mobile.
              </p>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-4">
                Soft Skills
              </h4>
              <ul className="space-y-2">
                {[
                  'Resolução de problemas (herança do suporte técnico)',
                  'Comunicação clara com stakeholders e clientes',
                  'Aprendizado acelerado — projetos comerciais em < 1 ano',
                  'Autonomia e disciplina remota',
                  'Comprometimento com prazo e qualidade',
                  'Atenção a UX e performance (Lighthouse 90+)',
                ].map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 border-b border-white/5 py-2 text-sm text-[#6b7280] transition-all hover:text-white hover:pl-1"
                  >
                    <span className="font-mono text-xs text-[#ff6b35]">→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Destaque */}
            <div className="mt-8 rounded-md border border-[rgba(57,255,126,.2)] bg-[rgba(57,255,126,.03)] p-4">
              <p className="text-xs text-[#6b7280] leading-relaxed">
                🧠 <span className="text-white">Diferencial:</span> Migrei do
                suporte N1/N2 (integração de Web Services e automação fiscal)
                para desenvolvimento full stack em menos de 1 ano. Hoje entrego
                projetos comerciais com pagamento real (Stripe/Mercado Pago),
                notificações em tempo real e estudo constante para evoluir em
                backend e mobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
