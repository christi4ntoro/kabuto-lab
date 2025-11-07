import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/kabutolab',
    icon: Twitter
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/kabutolab',
    icon: Linkedin
  },
  {
    name: 'GitHub',
    url: 'https://github.com/kabutolab',
    icon: Github
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/kabutolab',
    icon: Instagram
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-white">
                Kabuto Lab
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tools and frameworks for immersive experience designers. 
              Building the future of narrative design.
            </p>
          </div>

          {/* Quick Links - Optional, remove if not needed */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link 
                href="/products" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link 
                href="/blog" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
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
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Kabuto Lab. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}