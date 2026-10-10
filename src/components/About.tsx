'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const principles = [
  {
    number: '01',
    title: 'Engineering',
    description: 'Build systems that are structured, maintainable, and reliable over long operating lifecycles.',
  },
  {
    number: '02',
    title: 'Problem Solving',
    description: 'Understand the real constraints before choosing the technology stack. Practical utility comes first.',
  },
  {
    number: '03',
    title: 'Continuous Learning',
    description: 'Explore new architectures, test ideas rigorously, and improve through working implementation.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-canvas relative border-b border-white/[0.08]"
    >
      <div className="max-w-[1320px] mx-auto">
        <SectionHeader
          number="01"
          label="ABOUT"
          title="Building with purpose. Engineering with precision."
          description="A clear focus on structured architecture, maintainable code, and digital solutions that solve genuine problems."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Focused Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 sm:p-7 rounded-lg border border-white/[0.08] bg-surface relative">
              <span className="absolute -top-1 -left-1 font-mono text-[9px] text-ink-muted">+</span>
              <span className="absolute -top-1 -right-1 font-mono text-[9px] text-ink-muted">+</span>

              <h3 className="font-heading font-bold text-xl text-ink-primary mb-3">
                Misheck Chihana
              </h3>
              <p className="font-mono text-xs text-technical-lime mb-4">
                SOFTWARE & SYSTEMS ENGINEER · MALAWI
              </p>

              <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-4">
                I am a software developer focused on building practical, dependable technology.
                My work spans full-stack web and mobile applications, APIs, relational databases,
                spatial analysis, and network infrastructure.
              </p>

              <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                I value clean architecture, thoughtful user experiences, and systems that address
                concrete needs for communities, businesses, and public services.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Three Principles */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-3.5"
          >
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="p-5 rounded-lg border border-white/[0.08] bg-surface hover:border-white/[0.18] transition-all flex items-start gap-4"
              >
                <span className="font-mono text-xs text-technical-lime px-2.5 py-1 rounded bg-technical-lime-dim border border-technical-lime/30 flex-shrink-0 mt-0.5">
                  {principle.number}
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-ink-primary mb-1">
                    {principle.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
