'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error('Chave Web3Forms não configurada');
      }

      const formDataToSend = new FormData();
      formDataToSend.append('access_key', accessKey);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      if (formData.company) {
        formDataToSend.append('company', formData.company);
      }
      formDataToSend.append('message', formData.message);
      formDataToSend.append(
        'subject',
        `Novo contato via portfólio: ${formData.name}`,
      );
      formDataToSend.append('from_name', formData.name);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data?.message || 'Erro ao enviar o formulário.');
      }

      setSubmitMessage('✓ Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitMessage(
        error instanceof Error
          ? `Erro: ${error.message}`
          : 'Erro ao enviar a mensagem.',
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-25 md:py-20">
      <div className="container mx-auto max-w-275 px-7">
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#39ff7e] uppercase tracking-[0.15em]">
            04 — contato
            <span className="flex-1 h-px bg-white/5" />
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,56px)] text-white mb-2">
            Vamos
            <br />
            conversar?
          </h2>
          <p className="max-w-135 text-sm text-[#6b7280]">
            Aberto a oportunidades CLT, PJ e freelas. Respondo em menos de 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-15 lg:grid-cols-2 lg:items-start">
          {/* Contact Info */}
          <div>
            <p className="text-sm text-[#6b7280] leading-relaxed mt-6 mb-7">
              Se você está procurando um dev Full Stack que entrega, aprende
              rápido e se importa com a qualidade do produto final — é aqui.
              Seja para uma vaga, um freela ou só para trocar uma ideia sobre
              tecnologia.
            </p>

            <div className="flex flex-col gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511940886936?text=Ol%C3%A1%2C+Rodrigo%21+Vi+seu+portf%C3%B3lio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-[rgba(255,255,255,.02)] px-5 py-4 transition-all hover:border-white/20 hover:bg-[rgba(255,255,255,.04)] hover:translate-x-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#25d36620]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="#25d366"
                    className="h-5.5 w-5.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                    WhatsApp
                  </div>
                  <div className="font-semibold text-white">
                    Resposta mais rápida
                  </div>
                </div>
                <div className="font-mono text-sm text-[#6b7280] transition-all group-hover:translate-x-1">
                  →
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:rodrigo.rp822@gmail.com?subject=Oportunidade%20para%20Rodrigo"
                className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-[rgba(255,255,255,.02)] px-5 py-4 transition-all hover:border-white/20 hover:bg-[rgba(255,255,255,.04)] hover:translate-x-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0078d420]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="#0078d4"
                    className="h-5.5 w-5.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 7.387v10.478C24 19.144 22.395 21 20.318 21H3.682C1.605 21 0 19.144 0 17.865V7.387l11.693 6.828a.625.625 0 0 0 .614 0L24 7.387z" />
                    <path d="M20.318 3C22.395 3 24 4.856 24 6.135v.525L12 13.5.001 6.66V6.135C.001 4.856 1.606 3 3.683 3h16.635z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                    E-mail
                  </div>
                  <div className="font-semibold text-white">
                    rodrigo.rp822@gmail.com
                  </div>
                </div>
                <div className="font-mono text-sm text-[#6b7280]">→</div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rodrigopc-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-[rgba(255,255,255,.02)] px-5 py-4 transition-all hover:border-white/20 hover:bg-[rgba(255,255,255,.04)] hover:translate-x-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0a66c220]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="#0a66c2"
                    className="h-5.5 w-5.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                    LinkedIn
                  </div>
                  <div className="font-semibold text-white">
                    rodrigopc-developer
                  </div>
                </div>
                <div className="font-mono text-sm text-[#6b7280]">→</div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Rodrigopcosta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-[rgba(255,255,255,.02)] px-5 py-4 transition-all hover:border-white/20 hover:bg-[rgba(255,255,255,.04)] hover:translate-x-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-5.5 w-5.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                    GitHub
                  </div>
                  <div className="font-semibold text-white">@Rodrigopcosta</div>
                </div>
                <div className="font-mono text-sm text-[#6b7280]">→</div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/5 bg-[#0c1018] p-8">
            <div className="mb-5 font-mono text-xs uppercase tracking-widest text-[#6b7280]">
              {/* mensagem direta */}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4.5">
              <div>
                <label className="mb-1.75 block font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                  nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="w-full rounded-2xl border border-white/5 bg-[rgba(255,255,255,.03)] px-4 py-3 font-body text-sm text-white outline-none transition-colors placeholder:text-[#6b7280] focus:border-[#39ff7e]"
                />
              </div>

              <div>
                <label className="mb-1.75 block font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                  e-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full rounded-2xl border border-white/5 bg-[rgba(255,255,255,.03)] px-4 py-3 font-body text-sm text-white outline-none transition-colors placeholder:text-[#6b7280] focus:border-[#39ff7e]"
                />
              </div>

              <div>
                <label className="mb-1.75 block font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                  empresa (opcional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  className="w-full rounded-2xl border border-white/5 bg-[rgba(255,255,255,.03)] px-4 py-3 font-body text-sm text-white outline-none transition-colors placeholder:text-[#6b7280] focus:border-[#39ff7e]"
                />
              </div>

              <div>
                <label className="mb-1.75 block font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                  mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Olá, Rodrigo! Tenho uma oportunidade..."
                  required
                  className="w-full rounded-2xl border border-white/5 bg-[rgba(255,255,255,.03)] px-4 py-3 font-body text-sm text-white outline-none transition-colors placeholder:text-[#6b7280] focus:border-[#39ff7e] min-h-30 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-2xl py-3.25 font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                  submitMessage
                    ? 'border border-[rgba(57,255,126,.3)] bg-[rgba(57,255,126,.15)] text-[#39ff7e]'
                    : 'bg-[#39ff7e] text-[#080b10] hover:shadow-[0_0_32px_rgba(57,255,126,.3)] hover:-translate-y-px'
                }`}
              >
                {submitMessage || 'Enviar mensagem →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
