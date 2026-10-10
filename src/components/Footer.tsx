'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Contact', href: '#contact' },
  ];

  const externalLinks = [
    { name: 'GitHub', href: 'https://github.com/MCHIHANA' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/misheck-chihana-b02252343/' },
    { name: 'WhatsApp', href: 'https://wa.me/265996477485' },
    { name: 'Email', href: 'mailto:Misheckgchihana@gmail.com' },
  ];

  return (
    <footer className="bg-canvas border-t border-white/[0.08] text-ink-secondary py-14 sm:py-16 relative overflow-hidden">
      {/* Background technical hairline grid */}
      <div className="absolute inset-0 tech-grid-dense opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Identity & Closing Notebook Note */}
          <div className="lg:col-span-6 space-y-3">
            <span className="font-mono text-sm uppercase tracking-widest text-ink-primary font-semibold block">
              MISHECK CHIHANA
            </span>

            <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-md">
              Software engineer focused on building practical, dependable technology across
              full-stack applications, APIs, data systems, and network infrastructure.
            </p>

            <div className="pt-2 font-mono text-[10px] text-technical-lime tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-technical-lime" />
              <span>DESIGNED & ENGINEERED WITH INTENT</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest block">
              Navigation
            </span>
            <div className="space-y-1.5 font-mono text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-ink-secondary hover:text-technical-lime transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect / Network */}
          <div className="lg:col-span-3 space-y-2.5">
            <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest block">
              Connect
            </span>
            <div className="space-y-1.5 font-mono text-xs">
              {externalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between text-ink-secondary hover:text-white transition-colors py-0.5 border-b border-white/[0.04]"
                >
                  <span>{link.name}</span>
                  <span className="text-ink-muted text-[10px]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-ink-muted">
          <div>
            © {currentYear} Misheck Chihana. All systems operational.
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <span>COORDS: 13°59'S 33°47'E</span>
            <span>•</span>
            <a
              href="#"
              className="text-ink-muted hover:text-technical-lime transition-colors"
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
