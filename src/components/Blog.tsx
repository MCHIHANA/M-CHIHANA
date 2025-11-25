'use client';

import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'Learn how to build performant and scalable web applications using Next.js 14 and React Server Components.',
    date: 'Nov 20, 2024',
    readTime: '5 min read',
    category: 'Web Development',
    image: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Mastering TypeScript: Advanced Patterns',
    excerpt: 'Explore advanced TypeScript patterns and techniques to write more maintainable and type-safe code.',
    date: 'Nov 15, 2024',
    readTime: '8 min read',
    category: 'TypeScript',
    image: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'The Future of Web Development in 2024',
    excerpt: 'A comprehensive look at emerging trends and technologies shaping the future of web development.',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    category: 'Industry Trends',
    image: 'from-green-500 to-teal-500',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Blog & Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${article.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-all hover:scale-105 font-medium"
            >
              View All Articles
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
