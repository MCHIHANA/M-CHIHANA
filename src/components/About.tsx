'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'React/Next.js', level: 90, color: 'bg-blue-500' },
  { name: 'NestJS', level: 85, color: 'bg-red-500' },
  { name: 'TypeScript', level: 88, color: 'bg-blue-600' },
  { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
  { name: 'C++/OpenGL', level: 80, color: 'bg-purple-500' },
  { name: 'MySQL/TypeORM', level: 85, color: 'bg-orange-500' },
  { name: 'Godot/GDScript', level: 75, color: 'bg-indigo-500' },
  { name: 'Payment APIs', level: 82, color: 'bg-green-500' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm Misheck Chihana, a 4th-year BSC Computer Science student at the University of Malawi. 
                I'm a passionate full-stack developer specializing in building modern web applications, 
                e-commerce platforms, and interactive 3D simulations. I have hands-on experience with 
                React, NestJS, OpenGL, and game development using Godot.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                My projects range from agriculture e-commerce platforms with live payment integrations to 
                3D solar system simulations and digital wallet systems. I'm passionate about creating 
                solutions that solve real-world problems and continuously expanding my skills in both 
                frontend and backend development.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  Fast Learner
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
