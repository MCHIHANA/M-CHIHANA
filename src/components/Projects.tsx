'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'FarmEase – Agriculture E-Commerce',
    description: 'Agriculture e-commerce platform connecting farmers and buyers. Features product browsing, cart management, and live mobile payment integration with PayChangu, Airtel Money, and TNM Mpamba.',
    image: '/farmease.jpg',
    gradient: 'from-green-500 to-emerald-600',
    tags: ['React', 'NestJS', 'MySQL', 'PayChangu', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Solar System Simulation',
    description: '3D interactive solar system simulation with textured rotating Sun, orbiting planets, and asteroid belt. Built with modern OpenGL featuring realistic celestial motion and transformations.',
    image: '/solarsystem.jpeg',
    gradient: 'from-indigo-500 to-purple-600',
    tags: ['C++', 'OpenGL', 'GLFW', 'GLM', 'GLAD'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'TourMalawi – Tourism Platform',
    description: 'Tourism web platform showcasing Malawi\'s destinations, national parks, Lake Malawi, culture, and accommodations. Features travel guides and beautiful visuals to promote Malawi tourism.',
    image: '/tourmalawi.png',
    gradient: 'from-orange-500 to-red-500',
    tags: ['React', 'Tailwind', 'Google Maps', 'Travel APIs'],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Godot Vehicle Simulation',
    description: '3D vehicle simulation game with realistic wheel rotation, suspension physics, and environment rendering. Features improved lighting, particle effects, and enhanced vehicle dynamics.',
    image: '/game.jpg',
    gradient: 'from-purple-500 to-pink-500',
    tags: ['Godot', 'GDScript', 'VehicleBody3D', '3D Physics'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex-1 text-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                    >
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
