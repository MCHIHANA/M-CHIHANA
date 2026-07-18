'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'React / Next.js', level: 90 },
  { name: 'NestJS', level: 85 },
  { name: 'TypeScript', level: 88 },
  { name: 'Python', level: 85 },
  { name: 'Golang', level: 78 },
  { name: 'AI / Machine Learning', level: 75 },
  { name: 'MySQL', level: 88 },
  { name: 'PostgreSQL', level: 82 },
  { name: 'C++ / OpenGL', level: 80 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Network Engineering', level: 78 },
  { name: 'Payment APIs', level: 82 },
];

const stats = [
  { label: 'Projects Completed', value: '5+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Lines of Code', value: '10K+' },
  { label: 'Domains', value: '4+' },
];

const whatIDo = [
  'Design and develop full-stack web and mobile applications',
  'Build and integrate backend systems, APIs, and databases',
  'Engineer and manage network infrastructure',
  'Develop AI and machine learning solutions',
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] relative overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section heading */}
          <div className="mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              About Me
            </h2>
            <div className="w-12 h-0.5 bg-white/30 rounded-full"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/[0.07] transition-all"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left — Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 border border-white/15 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">MC</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Misheck Chihana
                    </h3>
                    <p className="text-sm text-white/40">
                      Full-Stack Developer · AI/ML Engineer · Network Engineer
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-4">
                  I build scalable, reliable, and secure digital solutions — from full-stack web and
                  mobile applications to backend systems, APIs, databases, health systems, and fintech
                  systems — using modern software engineering practices that prioritize performance and
                  maintainability.
                </p>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6">
                  I'm passionate about cloud computing, machine learning, and emerging technologies,
                  driven by solving real-world problems through clean, innovative engineering.
                </p>

                {/* What I do */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">What I do</p>
                  {whatIDo.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                      <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trait tags */}
              <div className="flex flex-wrap gap-2">
                {['Problem Solver', 'Team Player', 'Fast Learner'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 border border-white/15 text-white/60 rounded-full text-xs font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
                  Skills & Expertise
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-white/70">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-white/30">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/[0.08] rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className="h-full bg-white/50 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: index * 0.06, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
