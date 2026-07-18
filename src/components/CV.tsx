'use client';

import { motion } from 'framer-motion';

export default function CV() {
  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Resume / CV
          </h2>
          <div className="w-12 h-0.5 bg-white/30 rounded-full mx-auto mb-6"></div>
          <p className="text-base text-white/50 mb-12 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, projects, and qualifications.
          </p>

          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4+</div>
                <div className="text-white/40 text-sm">Domains</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-white/40 text-sm">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">12+</div>
                <div className="text-white/40 text-sm">Technologies</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all hover:scale-105 font-semibold text-sm inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV (PDF)
              </a>
              <a
                href="/resume.docx"
                download
                className="px-8 py-4 border border-white/25 text-white/70 rounded-full hover:bg-white/10 transition-all hover:scale-105 font-medium text-sm inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (DOCX)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
