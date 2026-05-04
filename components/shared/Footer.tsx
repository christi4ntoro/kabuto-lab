'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Youtube, Github, Instagram, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { navLinks } from '@/lib/content';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chrisrto/', icon: Linkedin },
  { name: 'Youtube', url: 'https://www.youtube.com/@kabutolab', icon: Youtube },
  { name: 'GitHub', url: 'https://github.com/christi4ntoro', icon: Github },
  { name: 'Instagram', url: 'https://www.instagram.com/kabuto.lab/', icon: Instagram },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const footerTriggerPoint = docHeight - window.innerHeight;

      if (scrollTop >= footerTriggerPoint) {
        const progress = (scrollTop - footerTriggerPoint) / window.innerHeight;
        setScrollProgress(Math.min(progress, 1));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const footerTransform = `translateY(${(1 - scrollProgress) * 40}%)`;

  return (
    <footer
      ref={footerRef}
      className="footer-parallax"
      style={{ transform: footerTransform, transition: 'transform 0.1s ease-out' }}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

          {/* Logo row */}
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
            {/* Icon logo — left */}
            <div className="col-span-12 md:col-span-1">
              <Link href="/" aria-label="Kabuto Lab home">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Image
                    src="/shared/logo-icon.svg"
                    alt="KabutoLab™"
                    width={40}
                    height={46}
                  />
                </div>
              </Link>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-6" />

            {/* Full logo + description — right */}
            <div className="col-span-12 md:col-span-5">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/shared/logo-white.svg"
                  alt="KabutoLab™"
                  width={320}
                  height={56}
                />
              </Link>
              <p className="text-[--muted] text-sm md:text-base leading-relaxed max-w-md">
                Tools and frameworks for immersive experience designers.
                Building the future of narrative design through systematic innovation.
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-[--border] mb-16 md:mb-20" />

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

            {/* Column 1 — Navigation + Language */}
            <div>
              <nav className="flex flex-col gap-3 mb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[--muted] hover:text-[--foreground] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <select
                disabled
                aria-label="Language"
                className="bg-[--surface] text-[--muted] border border-[--border] rounded px-3 py-1.5 text-sm cursor-not-allowed opacity-60"
              >
                <option value="en">EN — more languages coming soon</option>
              </select>
            </div>

            {/* Column 2 — Subscribe */}
            <div>
              <p className="text-[--muted] mb-6 text-sm leading-relaxed">
                Get valuable insights on immersive design, narrative frameworks, and experience creation straight to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex items-center border-b border-[--border] pb-2 hover:border-[--muted] transition-colors group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email here"
                    required
                    className="flex-1 bg-transparent text-[--foreground] placeholder:text-[--muted] focus:outline-none text-sm"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="text-[--muted] group-hover:text-[--foreground] transition-colors"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>

              <p className="text-xs text-[--muted]">
                By signing up, you agree to our{' '}
                <Link href="/privacy" className="underline hover:text-[--foreground] transition-colors">
                  Privacy Policy
                </Link>
                . Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Bottom row — Credits & Social */}
          <div className="border-t border-[--border] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[--muted] text-sm order-2 md:order-1">
              © {currentYear} KabutoLab™ | LIS | LX
            </p>
            <div className="flex gap-5 order-1 md:order-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-[--muted] hover:text-[--foreground] transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
