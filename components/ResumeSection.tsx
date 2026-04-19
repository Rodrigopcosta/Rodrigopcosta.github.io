'use client';

export default function ResumeSection() {
  return (
    <section id="resume" className="bg-[#0c1018] py-20">
      <div className="container mx-auto max-w-275 px-7">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-linear-to-br from-[#0c1018] to-[#111827] px-16 py-14 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="absolute right-0 top-0 h-100 w-100 rounded-full bg-gradient-radial from-[rgba(57,255,126,.06)] via-transparent to-transparent pointer-events-none" style={{ right: '-100px', top: '-100px' }} />

          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#39ff7e] uppercase tracking-[0.15em]">
              03 — currículo
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] text-white mb-2">
              Quer ver<br />
              o currículo?
            </h2>
            <p className="text-sm text-[#6b7280]">
              PDF atualizado com experiências, formação e stack completa. Baixe
              agora.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="/rodrigo-costa-fullstack-developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-md bg-[#39ff7e] px-7 py-3.25 font-mono text-xs font-semibold text-[#080b10] uppercase tracking-wider transition-all hover:shadow-[0_0_32px_rgba(57,255,126,.3)] hover:-translate-y-px"
            >
              ↓ Ver CV (PDF)
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigopc-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-md border border-white/5 px-7 py-3.25 font-mono text-xs font-semibold text-[#6b7280] uppercase tracking-wider transition-all hover:border-[#39ff7e] hover:text-[#39ff7e] hover:bg-[rgba(255,255,255,.03)]"
            >
              Ver LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
