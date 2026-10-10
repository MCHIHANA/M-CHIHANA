'use client';

import { motion } from 'framer-motion';

const roles = [
  'SOFTWARE ENGINEER',
  'FULL STACK DEVELOPER',
  'AI/ML ENGINEER',
  'NETWORK ENGINEER',
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 sm:pt-40 pb-20 overflow-hidden bg-canvas border-b border-white/[0.08]">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-70 pointer-events-none" />

      {/* Subtle radial falloff to keep text crisp */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-transparent to-canvas pointer-events-none" />

      {/* Decorative hairline measurement coordinates */}
      <div className="absolute top-28 left-6 sm:left-10 text-[10px] font-mono text-ink-muted/50 select-none hidden md:block">
        SYS_LAT: -13.9833 // SYS_LON: 33.7833
      </div>
      <div className="absolute top-28 right-6 sm:right-10 text-[10px] font-mono text-ink-muted/50 select-none hidden md:block">
        BUILD: STABLE // M-CHIHANA
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col justify-center"
        >
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-white/[0.12] bg-surface/90 w-fit mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-technical-lime animate-pulse" />
            <span className="text-[10px] font-mono text-technical-lime tracking-widest uppercase">
              SYSTEMS ARCHITECT
            </span>
            <span className="text-white/20 text-[10px]">|</span>
            <span className="text-[10px] font-mono text-ink-muted tracking-wider uppercase">
              ENGINEERING DIGITAL SOLUTIONS
            </span>
          </div>

          {/* Primary Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold font-heading text-ink-primary tracking-tight leading-[0.98] mb-4">
            Misheck Chihana
          </h1>

          {/* Four Professional Roles directly below name */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-xs sm:text-sm tracking-wider uppercase text-technical-lime mb-6">
            {roles.map((role, idx) => (
              <span key={role} className="inline-flex items-center">
                <span>{role}</span>
                {idx < roles.length - 1 && (
                  <span className="ml-2.5 text-white/30 select-none">·</span>
                )}
              </span>
            ))}
          </div>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-2xl text-ink-primary/95 font-heading font-medium leading-snug mb-5 max-w-3xl">
            Engineering practical solutions to complex problems.
          </p>

          {/* Introductory Paragraph */}
          <p className="text-sm sm:text-base text-ink-secondary font-sans leading-relaxed mb-8 max-w-2xl">
            I build reliable digital products across full-stack development, backend systems,
            artificial intelligence, and infrastructure. My focus is on turning real-world
            challenges into useful, well-engineered solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-technical-lime text-canvas hover:bg-white transition-all font-mono text-xs font-semibold tracking-wider group shadow-[0_0_20px_rgba(183,243,151,0.2)]"
            >
              <span>EXPLORE WORK</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-white/[0.2] bg-surface text-ink-primary hover:border-white hover:bg-surface-2 transition-all font-mono text-xs font-medium tracking-wider"
            >
              <span>GET IN TOUCH</span>
              <span className="text-technical-lime">↗</span>
            </a>
          </div>

          {/* Metrics Ribbon: Updated to 12+ projects */}
          <div className="mt-12 pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg">
            <div className="border-l border-white/[0.1] pl-3.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-ink-primary">
                12<span className="text-technical-lime">+</span>
              </div>
              <div className="text-[10px] font-mono text-ink-muted uppercase">
                Projects Delivered
              </div>
            </div>

            <div className="border-l border-white/[0.1] pl-3.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-ink-primary">
                15<span className="text-technical-lime">+</span>
              </div>
              <div className="text-[10px] font-mono text-ink-muted uppercase">
                Core Technologies
              </div>
            </div>

            <div className="border-l border-white/[0.1] pl-3.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-technical-lime">
                100<span className="text-xs">%</span>
              </div>
              <div className="text-[10px] font-mono text-ink-muted uppercase">
                Practical Focus
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
