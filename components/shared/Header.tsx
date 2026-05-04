'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/shared/ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { navLinks } from '@/lib/content';

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const menuOpen = mobileMenuOpen || desktopMenuOpen;

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
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

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
          <nav className="h-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between relative z-10">
            {/* Logo - Smooth crossfade */}
            <Link 
              href="/" 
              className="relative z-50"
              aria-label="Kabuto Lab Home"
              onClick={closeAllMenus}
            >
              {/* Desktop */}
              <div className="hidden md:block relative" style={{ width: '100px', height: '40px' }}>
                <Image
                  src="/shared/logo-white.svg"
                  alt="KabutoLab™"
                  width={100}
                  height={40}
                  priority
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: (!isScrolled && !menuOpen) ? 1 : 0 }}
                />
                <Image
                  src="/shared/logo-white.svg"
                  alt="KabutoLab™"
                  width={100}
                  height={40}
                  priority
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: menuOpen ? 1 : 0 }}
                />
                <Image
                  src="/shared/logo-icon.svg"
                  alt="KabutoLab™"
                  width={40}
                  height={40}
                  priority
                  className="absolute left-0 top-0 transition-opacity duration-500"
                  style={{ opacity: (isScrolled && !menuOpen) ? 1 : 0 }}
                />
              </div>
              {/* Mobile */}
              <div className="md:hidden relative" style={{ width: '100px', height: '40px' }}>
                <Image
                  src="/shared/logo-icon.svg"
                  alt="KabutoLab™"
                  width={40}
                  height={40}
                  priority
                  className="absolute left-0 top-0 transition-opacity duration-500"
                  style={{ opacity: !menuOpen ? 1 : 0 }}
                />
                <Image
                  src="/shared/logo-white.svg"
                  alt="KabutoLab™"
                  width={100}
                  height={40}
                  priority
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: menuOpen ? 1 : 0 }}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">
              {!isScrolled ? (
                <div className="flex gap-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`font-medium transition-all duration-300 text-[15px] text-[--foreground] ${
                          isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
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
                  className="transition-colors font-medium text-[15px] underline"
                  aria-label={desktopMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={desktopMenuOpen}
                >
                  {desktopMenuOpen ? 'Close' : 'Menu'}
                </button>
              )}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="p-2 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2 relative z-50">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="p-2 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="font-medium text-[15px] underline"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </nav>
      </header>

      {/* Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background backdrop-blur-lg transition-transform duration-700 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="flex flex-col justify-center items-center h-full px-6 md:px-16">
          <nav className="flex flex-col gap-8 md:gap-12 items-center">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAllMenus}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-6xl md:text-8xl font-bold transition-all duration-300 ${
                    isActive ? 'text-blue-400' : 'text-[--foreground] hover:text-blue-400'
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 80}ms` : '0ms',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateY(0)' : 'translateY(30px)'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}