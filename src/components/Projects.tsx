'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 'geo-access',
    number: 'P-01',
    title: 'Geo Access Malawi — GIS Decision Support',
    description:
      'Spatial decision-support tool analyzing travel times to hospitals and schools, with disaster-risk visualization for public planning.',
    image: '/geo access malawi.png',
    tags: ['GIS Analysis', 'Spatial Modeling', 'Disaster Risk', 'Interactive Maps'],
    githubUrl: 'https://github.com/MCHIHANA',
  },
  {
    id: 'farmease',
    number: 'P-02',
    title: 'FarmEase — Agriculture E-Commerce',
    description:
      'Agriculture e-commerce platform connecting farmers and buyers with payment gateways supporting local and international transactions.',
    image: '/farmease.jpg',
    tags: ['React', 'NestJS', 'MySQL', 'Payment Gateways'],
    githubUrl: 'https://github.com/MCHIHANA',
  },
  {
    id: 'digital-wallet',
    number: 'P-03',
    title: 'Digital Wallet System',
    description:
      'Backend wallet application managing user accounts, balance ledgers, and transaction workflows synced with payment gateways.',
    image: '/digital-wallet.png',
    tags: ['NestJS', 'REST APIs', 'SQL Database', 'Payment Gateways'],
    githubUrl: 'https://github.com/MCHIHANA',
  },
  {
    id: 'solar-system',
    number: 'P-04',
    title: 'Solar System Simulation',
    description:
      'Interactive 3D celestial simulation featuring realistic orbital mechanics and transformations developed in modern OpenGL.',
    image: '/solarsystem.jpeg',
    tags: ['C++', 'Modern OpenGL', 'GLFW', 'GLM'],
    githubUrl: 'https://github.com/MCHIHANA',
  },
  {
    id: 'tour-malawi',
    number: 'P-05',
    title: 'TourMalawi — Tourism Mobile App',
    description:
      'Android tourism mobile application showcasing destinations across Malawi with cloud synchronization and payment processing.',
    image: '/tourmalawi.png',
    tags: ['Android', 'Java / Kotlin', 'Firebase', 'Payment Gateways'],
    githubUrl: 'https://github.com/MCHIHANA',
  },
  {
    id: 'godot-simulation',
    number: 'P-06',
    title: 'Godot Vehicle Simulation',
    description:
      '3D vehicle dynamics simulation engine with custom suspension physics, wheel friction calculations, and real-time lighting.',
    image: '/game.jpg',
    tags: ['Godot', 'GDScript', 'VehicleBody3D', '3D Physics'],
    githubUrl: 'https://github.com/MCHIHANA',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-canvas relative border-b border-white/[0.08]"
    >
      <div className="max-w-[1320px] mx-auto">
        <SectionHeader
          number="02"
          label="PROJECTS"
          title="Featured Projects"
          description="A selection of software systems, applications, and simulations built with a focus on real utility and sound engineering."
        />

        {/* Compact, balanced two-column grid on desktop */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group rounded-lg border border-white/[0.08] bg-surface hover:border-white/[0.2] transition-all overflow-hidden flex flex-col sm:flex-row items-stretch"
            >
              {/* Image Preview: Compact ~35% width on desktop */}
              <div className="relative w-full sm:w-[36%] h-40 sm:h-auto min-h-[140px] bg-canvas border-b sm:border-b-0 sm:border-r border-white/[0.06] flex-shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 20vw"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/85 backdrop-blur-sm border border-white/15 font-mono text-[10px] text-technical-lime font-semibold">
                  {project.number}
                </span>
              </div>

              {/* Text & Meta: ~65% width */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-ink-primary group-hover:text-white transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-ink-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-ink-muted font-mono text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-primary hover:text-technical-lime transition-colors"
                  >
                    <span>SOURCE CODE</span>
                    <span className="text-[10px]">↗</span>
                  </a>

                  <span className="text-[10px] font-mono text-ink-muted">
                    VERIFIED
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
