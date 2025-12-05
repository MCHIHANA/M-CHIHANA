'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 px-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Misheck Chihana</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 px-4">
            Full Stack Developer & Computer Science Student
          </p>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto px-4">
            4th Year BSC Computer Science | University of Malawi | Building innovative solutions with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center px-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105 font-medium shadow-lg text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-all hover:scale-105 font-medium text-center"
            >
              Get In Touch
            </a>
            <a
              href="#cv"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 transition-all hover:scale-105 font-medium shadow-lg text-center"
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
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
