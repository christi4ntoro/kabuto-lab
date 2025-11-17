'use client';

import Link from 'next/link';
import { Linkedin, Youtube, Github, Instagram, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chrisrto/', icon: Linkedin },
  { name: 'Youtube', url: 'https://www.youtube.com/@kabutolab', icon: Youtube },
  { name: 'GitHub', url: 'https://github.com/christi4ntoro', icon: Github },
  { name: 'Instagram', url: 'https://www.instagram.com/kabuto.lab/', icon: Instagram }
];

const menuCompany = [
  { label: 'Home', href: '/' },
  { label: 'What We Do', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Cases', href: '/work' },
  { label: 'Connect', href: '/contact' }
];

const menuProducts = [
  { label: 'Free', href: '/products' },
  { label: 'Premium', href: '/products#premium' },
  { label: 'Workshops', href: '/workshops' }
];

const menuLearn = [
  { label: 'Blog', href: '/blog' },
  { label: 'Clients', href: '/clients' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQs', href: '/faq' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page we've scrolled
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Get the position where footer should start moving
      // This is when we're near the bottom of the page
      const footerTriggerPoint = docHeight - window.innerHeight;
      
      // Calculate scroll progress (0 to 1) after trigger point
      if (scrollTop >= footerTriggerPoint) {
        const progress = (scrollTop - footerTriggerPoint) / window.innerHeight;
        setScrollProgress(Math.min(progress, 1));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  // Calculate the transform based on scroll progress
  // Footer moves up at 40% of the scroll speed (parallax effect)
  const footerTransform = `translateY(${(1 - scrollProgress) * 40}%)`;

  return (
    <footer 
      ref={footerRef}
      className="footer-parallax"
      style={{
        transform: footerTransform,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* First Row - Logos */}
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
            {/* Icon Logo - 1 col on left */}
            <div className="col-span-12 md:col-span-1">
              <Link href="/" aria-label="Kabuto Lab home">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <img src={"/shared/logo-icon.svg"} />
                </div>
              </Link>
            </div>

            {/* Blank space - 6 cols in the middle */}
            <div className="hidden md:block md:col-span-6" />

            {/* Full Logo & Description - 5 cols on right */}
            <div className="col-span-12 md:col-span-5">
              <Link href="/" className="inline-block mb-4">
                <img src={"/shared/logo-white.svg"} className='w-100'/>
              </Link>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                Tools and frameworks for immersive experience designers. 
                Building the future of narrative design through systematic innovation.
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-white/10 mb-16 md:mb-20" />

          {/* Second Row - Menus & Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 mb-16 md:mb-20">
            
            {/* Menus Section - 6 cols total on desktop */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6">
              
              {/* Company Menu - 2 cols */}
              <div>
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                  Company
                </h4>
                <nav className="space-y-3">
                  {menuCompany.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Products Menu - 2 cols */}
              <div>
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                  Products
                </h4>
                <nav className="space-y-3">
                  {menuProducts.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Learn Menu - 2 cols */}
              <div>
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                  Learn
                </h4>
                <nav className="space-y-3">
                  {menuLearn.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Newsletter Section - 5 cols */}
            <div className="md:col-span-5">
              <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                Get valuable insights on immersive design, narrative frameworks, and experience creation straight to your inbox.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex items-center border-b border-white/30 pb-2 hover:border-white/60 transition-colors group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email here"
                    required
                    className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm md:text-base"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="text-gray-400 group-hover:text-white transition-colors"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>

              {/* Privacy Policy Link */}
              <p className="text-xs text-gray-500">
                By signing up, you agree to our{' '}
                <Link href="/privacy" className="text-gray-400 hover:text-white underline transition-colors">
                  Privacy Policy
                </Link>
                . Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="mb-8" />

          {/* Third Row - Credits & Social */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Credits */}
            <p className="text-gray-400 text-sm order-2 md:order-1">
              © {currentYear} KabutoLab™ | LIS | LX
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 order-1 md:order-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
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