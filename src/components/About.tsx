'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'React/Next.js', level: 90, color: 'from-blue-500 to-blue-600' },
  { name: 'NestJS', level: 85, color: 'from-red-500 to-red-600' },
  { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-700' },
  { name: 'Python', level: 85, color: 'from-yellow-500 to-yellow-600' },
  { name: 'Golang', level: 78, color: 'from-cyan-600 to-blue-600' },
  { name: 'AI/Machine Learning', level: 75, color: 'from-purple-600 to-pink-600' },
  { name: 'MySQL', level: 88, color: 'from-orange-500 to-orange-600' },
  { name: 'PostgreSQL', level: 82, color: 'from-blue-700 to-indigo-700' },
  { name: 'C++/OpenGL', level: 80, color: 'from-purple-500 to-purple-600' },
  { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-cyan-600' },
  { name: 'Godot/GDScript', level: 75, color: 'from-indigo-500 to-indigo-600' },
  { name: 'Payment APIs', level: 82, color: 'from-green-500 to-green-600' },
];

const stats = [
  { label: 'Years of Study', value: '4th Year' },
  { label: 'Projects Completed', value: '5+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Lines of Code', value: '10K+' },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl"></div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      Misheck Chihana
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a 4th-year BSC Computer Science student at the University of Malawi, 
                  passionate about building modern web applications, e-commerce platforms, 
                  AI-powered solutions, and interactive 3D simulations.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  My expertise spans full-stack development with React, NestJS, and Golang, 
                  database management with MySQL and PostgreSQL, Python for AI/ML applications, 
                  and payment system integrations. I'm dedicated to creating innovative solutions 
                  that solve real-world problems.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    Problem Solver
                  </span>
                  <span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    Team Player
                  </span>
                  <span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    Fast Learner
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Skills & Expertise
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                          />
                        </div>
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
