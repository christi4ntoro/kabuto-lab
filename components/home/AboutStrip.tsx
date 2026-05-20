'use client';

import Link from 'next/link';
import { content } from '@/lib/content';

export default function AboutStrip() {
  const t = content;

  return (
    <section className="bg-[--background] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-[--muted] leading-relaxed mb-8">
          {t.aboutStrip.bio}
        </p>
        <div className="flex flex-wrap gap-6 justify-center font-mono">
          <Link
            href="https://youtube.com/@GaleaAlchemist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[--muted] hover:text-[--foreground] transition-colors"
          >
            {t.aboutStrip.linkGalea}
          </Link>
          <Link
            href="https://youtube.com/@kabutolab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[--muted] hover:text-[--foreground] transition-colors"
          >
            {t.aboutStrip.linkTutorials}
          </Link>
          <Link
            href="/connect"
            className="text-sm text-[--muted] hover:text-[--foreground] transition-colors"
          >
            {t.aboutStrip.linkPortfolio}
          </Link>
        </div>
      </div>
    </section>
  );
}
