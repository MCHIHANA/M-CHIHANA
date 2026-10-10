'use client';

import React from 'react';

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  description?: string;
  metadata?: string;
  className?: string;
}

export default function SectionHeader({
  number,
  label,
  title,
  description,
  metadata,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${className}`}>
      {/* Top technical annotation bar */}
      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase bg-white/[0.04] text-technical-lime border border-white/[0.1] rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-technical-lime inline-block animate-pulse" />
            {number} / {label}
          </span>
        </div>
        {metadata && (
          <span className="text-[11px] font-mono text-ink-muted tracking-wider hidden sm:inline-block">
            {metadata}
          </span>
        )}
      </div>

      {/* Main Title & Description */}
      <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-end">
        <div className="lg:col-span-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-ink-primary tracking-tight leading-[1.1]">
            {title}
          </h2>
        </div>
        {description && (
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
              {description}
            </p>
          </div>
        )}
      </div>

      {/* Bottom technical measurement hairline */}
      <div className="relative mt-6 h-px w-full bg-white/[0.07]">
        <div className="absolute left-0 top-0 h-px w-20 bg-technical-lime" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[9px] font-mono text-ink-muted select-none">
          +
        </div>
      </div>
    </div>
  );
}
