import Link from 'next/link';
import { ctaContent, ctaMarkup } from '@/lib/cta';

export default function CTASection() {
  // Format heading with highlight
  const headingParts = ctaContent.heading.split(ctaMarkup.headingHighlight);
  const heading = (
    <>
      {headingParts[0]}
      <strong className={ctaMarkup.headingHighlightClass}>{ctaMarkup.headingHighlight}</strong>
      {headingParts[1]}
    </>
  );

  // Format subtext with highlight
  const subtextParts = ctaContent.subtext.split(ctaMarkup.subtextHighlight);
  const subtext = (
    <>
      {subtextParts[0]}
      <strong>{ctaMarkup.subtextHighlight}</strong>
      {subtextParts[1]}
    </>
  );

  return (
    <section className="flex items-center justify-center px-4 py-16 md:py-24 bg-black">
      <div className="max-w-4xl w-full text-center">
        {/* CTA Box */}
        <div className="border border-white/20 rounded-lg p-8 md:p-16 bg-black/50 backdrop-blur">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {heading}
          </h2>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {subtext}
          </p>

          <Link
            href={ctaContent.buttonUrl}
            className="inline-block bg-white text-black px-8 py-4 text-lg font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
          >
            {ctaContent.buttonText} →
          </Link>
        </div>
      </div>
    </section>
  );
}