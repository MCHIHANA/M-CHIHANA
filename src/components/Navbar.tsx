'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <div className="fixed top-4 sm:top-7 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-[1150px] rounded-full border border-white/[0.12] bg-canvas/85 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.6)] px-6 sm:px-8 py-3.5 transition-all">
        <div className="flex items-center justify-between lg:justify-center">
          {/* Desktop Navigation: Centered four links */}
          <nav
            className="hidden lg:flex items-center space-x-12"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono tracking-widest uppercase text-ink-secondary hover:text-technical-lime transition-colors py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-technical-lime transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Context Label */}
          <span className="text-[11px] font-mono text-ink-muted uppercase tracking-widest lg:hidden">
            Navigation
          </span>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-md border border-white/[0.15] bg-surface text-ink-primary hover:border-technical-lime transition-colors lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 h-3.5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-ink-primary transition-transform origin-left ${
                  isMobileMenuOpen ? 'rotate-45 translate-x-0.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-ink-primary transition-opacity ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-0.5 bg-ink-primary transition-transform origin-left ${
                  isMobileMenuOpen ? '-rotate-45 translate-x-0.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto rounded-2xl border border-white/[0.12] bg-canvas/95 backdrop-blur-xl shadow-2xl p-5 lg:hidden"
          >
            <div className="flex flex-col space-y-2">
              <div className="text-[10px] font-mono text-ink-muted uppercase tracking-widest pb-2 border-b border-white/[0.08]">
                Menu Index
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 border-b border-white/[0.04] text-sm font-mono tracking-wider uppercase text-ink-secondary hover:text-technical-lime transition-colors"
                >
                  <span className="font-heading font-medium text-base text-ink-primary">
                    {link.label}
                  </span>
                  <span className="text-ink-muted text-xs">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
