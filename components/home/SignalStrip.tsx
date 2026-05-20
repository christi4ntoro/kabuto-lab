'use client';

import Link from 'next/link';
import { content } from '@/lib/content';

export default function SignalStrip() {
  const t = content;

  return (
    <section className="bg-[--background] py-10 px-4 text-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-4 font-mono">
        <p className="text-sm text-[--muted] tracking-wide">
          {t.signalStrip.line1}
        </p>
        <hr className="border-white/10" />
        <p className="text-sm text-[--muted] tracking-wide">
          {t.signalStrip.line2}
        </p>
        <hr className="border-white/10" />
        <p className="text-sm text-[--muted] tracking-wide">
          <Link
            href="https://youtube.com/@kabutolab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--muted] hover:text-[--foreground] transition-colors"
          >
            {t.signalStrip.line3Handle}
          </Link>
          {t.signalStrip.line3Suffix}
        </p>
      </div>
    </section>
  );
}
