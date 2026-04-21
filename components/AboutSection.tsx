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
            A história por trás do código.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-15 lg:grid-cols-2 lg:items-start">
          {/* About Text */}
          <div className="space-y-4">
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Comecei a programar em{' '}
              <span className="font-semibold text-white">2020</span>, movido
              pela curiosidade de entender como as coisas funcionam por baixo da
              superfície. Desde então, transformei isso em uma carreira sólida,
              construindo aplicações que vão de calculadoras simples a
              plataformas de e-commerce completas.
            </p>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Sou graduado em{' '}
              <span className="font-semibold text-white">
                Análise e Desenvolvimento de Sistemas (2025)
              </span>{' '}
              e tenho foco em desenvolvimento{' '}
              <span className="font-semibold text-white">Full Stack</span> com
              React/Next.js no front e Node.js/NestJS no back. Gosto de código
              limpo, performance e UX que não precisa de manual.
            </p>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Estou sempre evoluindo — hoje com{' '}
              <span className="font-semibold text-white">
                projetos robustos em produção
              </span>{' '}
              que exploram desde Micro-SaaS com Supabase até arquiteturas backend na AWS.
            </p>

            {/* Timeline */}
            <div className="mt-9 space-y-6 border-l border-white/5 pl-5">
              {[
                {
                  year: '2020',
                  title: 'Primeiro código',
                  desc: 'HTML, CSS e JavaScript puro. A faísca.',
                },
                {
                  year: '2021–2022',
                  title: 'React & primeiros projetos reais',
                  desc: 'To-do, calculadoras, clima. Fundação sólida.',
                },
                {
                  year: '2023',
                  title: 'TypeScript + APIs externas',
                  desc: 'Encurtador de URL, conversor de moedas, landing pages.',
                },
                {
                  year: '2024',
                  title: 'Full Stack com Next.js',
                  desc: 'Plataformas completas com auth, banco e deploy.',
                },
                {
                  year: '2025 →',
                  title: 'Graduação em ADS + projetos em produção',
                  desc: 'Focado em escalar e colaborar.',
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
                Hard Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'React',
                  'Next.js 16',
                  'TypeScript',
                  'Tailwind CSS v4',
                  'Node.js',
                  'NestJS',
                  'Prisma',
                  'PostgreSQL',
                  'Supabase',
                  'AWS App Runner',
                  'REST APIs',
                  'Swagger',
                  'React Native',
                  'Git & GitHub',
                  'Docker',
                  'Figma',
                  'Vercel',
                  'Stripe',
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

            <div>
              <h4 className="font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-4">
                Soft Skills
              </h4>
              <ul className="space-y-2">
                {[
                  'Autonomia & auto-gestão',
                  'Resolução criativa de problemas',
                  'Comunicação clara com não-devs',
                  'Aprendizado contínuo & rápido',
                  'Comprometimento com entregas',
                  'Atenção a detalhes de UX',
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
          </div>
        </div>
      </div>
    </section>
  );
}