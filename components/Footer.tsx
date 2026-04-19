'use client';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-7">
      <div className="container mx-auto max-w-275 px-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-xs text-[#6b7280]">
            rodrigo@portfolio ~/ $ <span className="text-[#39ff7e]">█</span>
            &nbsp;·&nbsp; built with ❤️ &amp; muito café
          </div>
          <div className="flex gap-5">
            <a
              href="https://github.com/Rodrigopcosta"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#6b7280] transition-colors hover:text-[#39ff7e]"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigopc-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#6b7280] transition-colors hover:text-[#39ff7e]"
            >
              linkedin
            </a>
            <a
              href="/rodrigo-costa-fullstack-developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#6b7280] transition-colors hover:text-[#39ff7e]"
            >
              cv.pdf
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
