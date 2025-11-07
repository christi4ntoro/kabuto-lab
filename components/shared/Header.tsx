'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Youtube, Github, Instagram } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 20; // Pixels to complete the transition
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic values based on scroll
  const headerHeight = 68 - (12 * scrollProgress); // 68px -> 56px
  const logoSize = 100 - (20 * scrollProgress); // 100px -> 80px
  const notchTop = 8 - (8 * scrollProgress); // 8px -> 0px
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, []);

  const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all"
        style={{ height: `${headerHeight}px` }}
      >
        <div className="h-full mx-0 md:mx-10 bg-black/80 backdrop-blur-md border-b border-white/10 md:rounded-b-lg relative">
          {/* Left notch - desktop only */}
          <div 
            className="hidden md:block absolute left-[-8px] w-2 h-2 transition-all"
            style={{ top: `${notchTop}px` }}
          >
            <Image
              src="/shared/curve-nav.svg"
              alt=""
              width={8}
              height={8}
              className="w-full h-full"
            />
          </div>
          {/* Right notch - desktop only */}
          <div 
            className="hidden md:block absolute right-[-8px] w-2 h-2 rotate-[-90deg] transition-all"
            style={{ top: `${notchTop}px` }}
          >
            <Image
              src="/shared/curve-nav.svg"
              alt=""
              width={8}
              height={8}
              className="w-full h-full"
            />
          </div>
          <nav className="h-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative z-50"
              onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
            >
              <Image
                src="/shared/logo-white.svg"
                alt="KabutoLab™"
                width={logoSize}
                height={logoSize}
                priority
                className="transition-all"
                style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-400' 
                        : 'text-white hover:text-blue-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-between h-full pt-24 pb-8 px-6">
          {/* Nav Links */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-4xl font-medium transition-colors ${
                    isActive 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}