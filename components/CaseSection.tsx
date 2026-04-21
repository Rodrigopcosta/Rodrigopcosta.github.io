'use client';

export default function CaseSection() {
  return (
    <section id="case" className="py-25 border-t border-white/5 bg-[#0c1018]">
      <div className="container mx-auto max-w-275 px-7">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#39ff7e] uppercase tracking-[0.15em]">
            <span className="inline-block h-px w-8 bg-[#39ff7e]" />
            case de sucesso
            <span className="flex-1 h-px bg-white/5" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Sabor & <span className="text-[#39ff7e]">Artes</span>
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="inline-flex rounded-full border border-[rgba(57,255,126,.3)] bg-[rgba(57,255,126,.06)] px-3 py-1 font-mono text-xs text-[#39ff7e]">
              PROJETO COMERCIAL
            </span>
            <span className="inline-flex rounded-full border border-[rgba(57,255,126,.3)] bg-[rgba(57,255,126,.06)] px-3 py-1 font-mono text-xs text-[#39ff7e]">
              CLIENTE REAL
            </span>
          </div>
          
          <p className="max-w-2xl text-base text-[#6b7280] leading-relaxed">
            Como uma hamburgueria real aumentou vendas e automatizou operações com uma solução full stack.
          </p>
        </div>

        {/* Contexto */}
        <div className="mb-12">
          <h3 className="font-mono text-sm font-semibold text-[#39ff7e] uppercase mb-4">
            Contexto
          </h3>
          <div className="rounded-xl border border-white/5 bg-[rgba(255,255,255,.02)] p-6 md:p-8">
            <p className="text-base text-[#6b7280] leading-relaxed mb-5">
              O cliente atendia pedidos exclusivamente por WhatsApp, anotando em papel e organizando entregas manualmente. Com o crescimento, os principais desafios eram:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-base text-[#6b7280]">
                <span className="text-[#39ff7e]">•</span>
                Perda de pedidos por desorganização
              </li>
              <li className="flex items-start gap-3 text-base text-[#6b7280]">
                <span className="text-[#39ff7e]">•</span>
                Dificuldade com troco e gestão de pagamentos
              </li>
              <li className="flex items-start gap-3 text-base text-[#6b7280]">
                <span className="text-[#39ff7e]">•</span>
                Mais de 2 horas diárias dedicadas à organização de entregas
              </li>
              <li className="flex items-start gap-3 text-base text-[#6b7280]">
                <span className="text-[#39ff7e]">•</span>
                Ausência de visibilidade do cardápio online
              </li>
            </ul>
          </div>
        </div>

        {/* Solução */}
        <div className="mb-12">
          <h3 className="font-mono text-sm font-semibold text-[#39ff7e] uppercase mb-4">
            Solução
          </h3>
          <div className="rounded-xl border border-white/5 bg-[rgba(255,255,255,.02)] p-6 md:p-8">
            <p className="text-base text-[#6b7280] leading-relaxed mb-5">
              Desenvolvimento de um cardápio digital completo com foco em conversão e automação:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-[rgba(57,255,126,.15)] bg-[rgba(57,255,126,.03)] px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff7e]" />
                <span className="text-sm text-white">Carrinho com Context API</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[rgba(57,255,126,.15)] bg-[rgba(57,255,126,.03)] px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff7e]" />
                <span className="text-sm text-white">Integração Stripe + Mercado Pago</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[rgba(57,255,126,.15)] bg-[rgba(57,255,126,.03)] px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff7e]" />
                <span className="text-sm text-white">API Lalamove para entregas</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[rgba(57,255,126,.15)] bg-[rgba(57,255,126,.03)] px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff7e]" />
                <span className="text-sm text-white">Notificações via Telegram</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[rgba(57,255,126,.15)] bg-[rgba(57,255,126,.03)] px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff7e]" />
                <span className="text-sm text-white">Confirmação por WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[rgba(57,255,126,.15)] bg-[rgba(57,255,126,.03)] px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff7e]" />
                <span className="text-sm text-white">Painel administrativo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-12">
          <h3 className="font-mono text-sm font-semibold text-[#39ff7e] uppercase mb-4">
            Resultados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-white/5 bg-[rgba(255,255,255,.02)] p-5 text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#39ff7e] mb-1">+40%</div>
              <div className="text-xs text-[#6b7280]">aumento nos pedidos</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[rgba(255,255,255,.02)] p-5 text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#39ff7e] mb-1">100%</div>
              <div className="text-xs text-[#6b7280]">pedidos organizados</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[rgba(255,255,255,.02)] p-5 text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#39ff7e] mb-1">-2h</div>
              <div className="text-xs text-[#6b7280]">por dia economizadas</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[rgba(255,255,255,.02)] p-5 text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#39ff7e] mb-1">24/7</div>
              <div className="text-xs text-[#6b7280]">funcionando</div>
            </div>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="mb-12">
          <h3 className="font-mono text-sm font-semibold text-[#39ff7e] uppercase mb-4">
            Tecnologias
          </h3>
          <div className="rounded-xl border border-white/5 bg-[rgba(255,255,255,.02)] p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              {[
                'Next.js 16',
                'React 19',
                'TypeScript',
                'Tailwind CSS v4',
                'Stripe',
                'Mercado Pago',
                'Telegram API',
                'Context API'
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-md px-3 py-1.5 font-mono text-xs border border-[rgba(57,255,126,.3)] bg-[rgba(57,255,126,.06)] text-[#39ff7e]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <div className="rounded-xl border border-[rgba(57,255,126,.2)] bg-[rgba(57,255,126,.03)] p-6 text-center">
            <p className="text-sm text-white mb-4">
              🍔 <span className="font-semibold">Projeto real em produção</span> — cliente ativo utilizando diariamente
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://saboreartes.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-[#39ff7e] px-6 py-2 font-mono text-xs font-semibold text-[#080b10] uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(57,255,126,.3)]"
              >
                ver demo →
              </a>
              <a
                href="https://github.com/Rodrigopcosta/Sabor_e_arte_hamburgueria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-white/5 px-6 py-2 font-mono text-xs font-semibold text-[#6b7280] uppercase tracking-wider transition-all hover:border-[#39ff7e] hover:text-[#39ff7e]"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}