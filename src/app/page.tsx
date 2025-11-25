export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                About
              </a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Skills
              </a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer | Designer | Problem Solver
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate developer with experience in building modern web applications.
            I love creating beautiful, functional, and user-friendly interfaces that solve real-world problems.
            When I'm not coding, you can find me learning new technologies and contributing to open-source projects.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Git', 'MongoDB'].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition text-center"
              >
                <p className="font-semibold text-gray-900 dark:text-white">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Project {project}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of this amazing project and what it does.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
