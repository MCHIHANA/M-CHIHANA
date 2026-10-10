'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const email = 'Misheckgchihana@gmail.com';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  const mailtoUrl = `mailto:${email}`;

  const socialLinks = [
    {
      name: 'GitHub',
      label: 'github.com/MCHIHANA',
      href: 'https://github.com/MCHIHANA',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      label: 'misheck-chihana',
      href: 'https://www.linkedin.com/in/misheck-chihana-b02252343/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      label: '+265 996 477 485',
      href: 'https://wa.me/265996477485',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-canvas relative border-b border-white/[0.08]"
    >
      <div className="max-w-[1320px] mx-auto">
        <SectionHeader
          number="04"
          label="CONTACT"
          title="Let's build something meaningful."
          description="Have a project, opportunity, or idea worth exploring? Get in touch."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Main Action Box */}
          <div className="p-8 sm:p-10 rounded-lg border border-white/[0.1] bg-surface relative">
            <span className="absolute -top-1 -left-1 font-mono text-[9px] text-ink-muted">+</span>
            <span className="absolute -top-1 -right-1 font-mono text-[9px] text-ink-muted">+</span>
            <span className="absolute -bottom-1 -left-1 font-mono text-[9px] text-ink-muted">+</span>
            <span className="absolute -bottom-1 -right-1 font-mono text-[9px] text-ink-muted">+</span>

            <p className="font-sans text-sm sm:text-base text-ink-secondary mb-8 leading-relaxed">
              Open to discussing engineering roles, technical collaboration, systems architecture,
              or practical digital solutions.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-technical-lime text-canvas hover:bg-white transition-all font-mono text-xs font-semibold tracking-wider group shadow-[0_0_20px_rgba(183,243,151,0.2)]"
              >
                <span>EMAIL ME</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>

              {/* Secondary mailto fallback link */}
              <a
                href={mailtoUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-white/[0.18] bg-canvas text-ink-primary hover:border-white transition-all font-mono text-xs font-medium tracking-wider"
                title="Open in default mail client"
              >
                <span>DEFAULT MAIL CLIENT</span>
                <span className="text-technical-lime">↗</span>
              </a>
            </div>

            {/* Email Address Display */}
            <div className="pt-4 border-t border-white/[0.06] mb-8">
              <span className="text-[11px] font-mono text-ink-muted block mb-1">
                DIRECT INBOX
              </span>
              <a
                href={mailtoUrl}
                className="font-mono text-sm text-ink-primary hover:text-technical-lime transition-colors"
              >
                {email}
              </a>
            </div>

            {/* Verified Social Media Links */}
            <div className="pt-6 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest block mb-4">
                Verified Profiles
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/[0.08] bg-canvas/70 text-ink-secondary hover:text-ink-primary hover:border-white/[0.2] transition-all font-mono text-xs"
                  >
                    <span className="text-ink-muted group-hover:text-technical-lime">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                    <span className="text-[10px] text-ink-muted">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
