'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Youtube, Github, Instagram, Linkedin } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      setIsScrolled(scrollY > 50);

      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = documentHeight - windowHeight;
      
      const footerStart = scrollableDistance - windowHeight;
      const footerVisibilityThreshold = footerStart + (windowHeight * 0.8);
      const isVisible = scrollY >= footerVisibilityThreshold;
      setIsFooterVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerHeight = 68;
  
  useEffect(() => {
    if (mobileMenuOpen || desktopMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, desktopMenuOpen]);

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

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDesktopMenuOpen(false);
  };

  return (
    <>
      <header
        className={`header-fixed transition-all duration-500 ${
          isFooterVisible ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'
        }`}
        style={{ height: `${headerHeight}px` }}
      >
        <div className="header-glass-container">
          <nav className="h-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between relative z-10">
            {/* Logo - Crossfade between full and icon */}
            <Link 
              href="/" 
              className="relative z-50 block"
              aria-label="Kabuto Lab Home"
              onClick={closeAllMenus}
            >
              {/* Desktop: Crossfade between logos */}
              <div className="hidden md:block relative w-[100px] h-[40px]">
                <Image
                  src="/shared/logo-white.svg"
                  alt="KabutoLab™"
                  width={100}
                  height={40}
                  priority
                  className={`absolute inset-0 object-contain object-left transition-opacity duration-500 ${
                    isScrolled ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <Image
                  src="/shared/logo-icon.svg"
                  alt="KabutoLab™"
                  width={40}
                  height={40}
                  priority
                  className={`absolute inset-0 object-contain object-left transition-opacity duration-500 ${
                    isScrolled ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
              
              {/* Mobile: Always show icon */}
              <div className="md:hidden">
                <Image
                  src="/shared/logo-icon.svg"
                  alt="KabutoLab™"
                  width={40}
                  height={40}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center">
              {!isScrolled ? (
                <div className="flex gap-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`font-medium transition-all duration-300 text-[15px] ${
                          isActive 
                            ? 'opacity-100' 
                            : 'opacity-50 hover:opacity-100'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <button
                  onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                  className="transition-colors font-medium text-[15px]"
                  aria-label={desktopMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={desktopMenuOpen}
                >
                  <span>{desktopMenuOpen ? 'Close' : 'Menu'}</span>
                </button>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="block md:hidden relative z-50"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#030014] backdrop-blur-lg transition-all duration-500 ${
          mobileMenuOpen || desktopMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-between h-full pt-24 pb-8 px-6 md:pt-32 md:px-16">
          <nav className="flex flex-col gap-6 md:gap-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAllMenus}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-4xl md:text-6xl font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: (mobileMenuOpen || desktopMenuOpen) 
                      ? 'translateY(0) opacity-1' 
                      : 'translateY(20px) opacity-0'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex gap-6 justify-center md:justify-start">
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