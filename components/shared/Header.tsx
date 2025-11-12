'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Youtube, Github, Instagram, Linkedin } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 20;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerHeight = 68 - (12 * scrollProgress);
  const logoSize = 100 - (12 * scrollProgress);
  const navASize = 15.2 - (.8 * scrollProgress);
  const notchTop = 8 - (8 * scrollProgress);
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/products', label: 'Systems' },
    { href: '/about', label: 'Archive' },
    { href: '/blog', label: 'Transmissions' },
    { href: '/contact', label: 'Connect' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/chrisrto/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.youtube.com/@kabutolab', icon: Youtube, label: 'YouTube' },
    { href: 'https://github.com/christi4ntoro', icon: Github, label: 'GitHub' },
    { href: 'https://www.instagram.com/kabuto.lab/', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <>
      <header
        className="header-fixed"
        style={{ height: `${headerHeight}px` }}
      >
        <div className="header-glass-container">
          {/* Static Glass Shine Effect - Bottom Border */}
          <div className="nav-shine-container">
            <div className="nav-shine-line" />
          </div>
          <div className="nav-shine-glow" />
          <div className="nav-shine-glow-soft" />

          {/* Left notch - desktop only */}
          <div 
            className="header-notch header-notch-left"
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
            className="header-notch header-notch-right"
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
          
          <nav className="h-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between relative z-10">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative z-50"
              aria-label="Kabuto Lab Home"
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
                    style={{ fontSize: `${navASize}px` }}
                    key={link.href}
                    href={link.href}
                    className={`font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-400' 
                        : 'text-white text-opacity-20 hover:text-blue-400'
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
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#030014] backdrop-blur-lg transition-all duration-300 md:hidden ${
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