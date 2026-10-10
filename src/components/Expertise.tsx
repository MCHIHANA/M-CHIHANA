'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

interface TechCategory {
  id: string;
  category: string;
  context: string;
  items: { name: string; tag: string }[];
}

const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    category: '01 / Frontend Systems',
    context: 'MODERN WEB & INTERFACE ARCHITECTURE',
    items: [
      { name: 'React 19', tag: 'UI Library' },
      { name: 'Next.js', tag: 'Full-Stack Framework' },
      { name: 'TypeScript', tag: 'Static Typing' },
      { name: 'JavaScript (ES6+)', tag: 'Core Runtime' },
      { name: 'Tailwind CSS', tag: 'Design Systems' },
      { name: 'HTML5 / Semantic a11y', tag: 'Standards' },
    ],
  },
  {
    id: 'backend',
    category: '02 / Backend & Microservices',
    context: 'APIs, WORKFLOWS & CONTROLLERS',
    items: [
      { name: 'NestJS', tag: 'Enterprise Framework' },
      { name: 'Node.js', tag: 'Async Engine' },
      { name: 'RESTful API Architecture', tag: 'Contract Design' },
      { name: 'Express', tag: 'Middleware' },
      { name: 'Authentication & JWT', tag: 'Security' },
      { name: 'Webhook Pipelines', tag: 'Event Handling' },
    ],
  },
  {
    id: 'languages',
    category: '03 / Core Languages',
    context: 'COMPILED & INTERPRETED LANGUAGES',
    items: [
      { name: 'Python', tag: 'AI / Data / Scripting' },
      { name: 'Go (Golang)', tag: 'High-Concurrency Systems' },
      { name: 'C++', tag: 'Graphics / Low-level' },
      { name: 'TypeScript', tag: 'Application Code' },
      { name: 'SQL', tag: 'Query Logic' },
    ],
  },
  {
    id: 'data',
    category: '04 / Databases & Data Storage',
    context: 'SCHEMAS, RELATIONS & LEDGERS',
    items: [
      { name: 'PostgreSQL', tag: 'Relational DB' },
      { name: 'MySQL', tag: 'Relational DB' },
      { name: 'Database Normalization', tag: 'Schema Design' },
      { name: 'Transactional ACID', tag: 'Integrity' },
      { name: 'Query Optimization', tag: 'Indexing' },
    ],
  },
  {
    id: 'ai-ml',
    category: '05 / AI & Machine Learning',
    context: 'DATA ENGINEERING & MODEL EVALUATION',
    items: [
      { name: 'Machine Learning Pipelines', tag: 'Core Discipline' },
      { name: 'Data Preprocessing', tag: 'Feature Cleansing' },
      { name: 'Scikit-learn', tag: 'Algorithms' },
      { name: 'Model Evaluation', tag: 'Performance Metrics' },
      { name: 'Predictive Inference', tag: 'Integration' },
    ],
  },
  {
    id: 'graphics',
    category: '06 / Graphics & Simulation',
    context: 'REAL-TIME 3D & SHADER PIPELINES',
    items: [
      { name: 'Modern OpenGL', tag: '3D Graphics API' },
      { name: 'GLFW & GLAD', tag: 'Context & Loader' },
      { name: 'GLM', tag: 'Matrix Mathematics' },
      { name: 'GLSL Shaders', tag: 'Vertex / Fragment' },
      { name: 'Godot Engine', tag: 'Vehicle Dynamics' },
    ],
  },
  {
    id: 'infra-fintech',
    category: '07 / Infrastructure & Fintech',
    context: 'NETWORKS, PAYMENTS & CLOUD SERVICES',
    items: [
      { name: 'Network Engineering', tag: 'Routing / Subnetting' },
      { name: 'Payment Gateways', tag: 'Local & International' },
      { name: 'Mobile Money (Airtel / TNM)', tag: 'Local Currency Flow' },
      { name: 'Linux Administration', tag: 'Systems' },
      { name: 'Git & Version Control', tag: 'Collaboration' },
    ],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-canvas relative border-b border-white/[0.08]"
    >
      <div className="max-w-[1320px] mx-auto">
        <SectionHeader
          number="03"
          label="EXPERTISE"
          title="Tools behind the work."
          description="A structured index of technologies, frameworks, and protocols deployed in active repositories and verified engineering builds."
          metadata="STACK_INDEX: 7 CATEGORIES"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="p-6 rounded-lg border border-white/[0.08] bg-surface hover:border-white/[0.18] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="pb-3 mb-4 border-b border-white/[0.06]">
                  <h3 className="font-heading font-bold text-base text-ink-primary">
                    {cat.category}
                  </h3>
                  <p className="font-mono text-[9px] text-technical-lime tracking-wider mt-0.5 uppercase">
                    {cat.context}
                  </p>
                </div>

                {/* Items */}
                <div className="space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center justify-between p-2 rounded bg-canvas/60 border border-white/[0.04] text-xs font-mono"
                    >
                      <span className="text-ink-primary font-medium">{item.name}</span>
                      <span className="text-[10px] text-ink-muted">{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom metadata */}
              <div className="pt-4 mt-6 border-t border-white/[0.04] flex items-center justify-between text-[9px] font-mono text-ink-muted">
                <span>VERIFIED TOOL</span>
                <span className="text-technical-lime text-[10px]">APPLIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
