'use client';

import { motion } from 'framer-motion';

const roles = [
  'Full-Stack Developer',
  'AI/ML Engineer',
  'Network Engineer',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Very subtle ambient glow — no vivid colours */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-5 px-4 leading-tight">
            Misheck Chihana
          </h1>

          {/* Role tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 px-4">
            {roles.map((role) => (
              <span
                key={role}
                className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-sm sm:text-base font-medium tracking-wide"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-white/50 mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
            I build scalable, reliable, and secure digital solutions — from full-stack web and mobile
            applications to backend systems, APIs, databases, health systems, and fintech systems —
            using modern software engineering practices that prioritize performance and maintainability.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center px-4">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-white text-black rounded-full hover:bg-white/90 transition-all hover:scale-105 font-semibold text-sm tracking-wide text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all hover:scale-105 font-medium text-sm tracking-wide text-center"
            >
              Get In Touch
            </a>
            <a
              href="#cv"
              className="px-7 py-3.5 border border-white/15 text-white/60 rounded-full hover:bg-white/5 transition-all hover:scale-105 font-medium text-sm tracking-wide text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-9 border border-white/25 rounded-full flex justify-center">
            <div className="w-0.5 h-2.5 bg-white/30 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
