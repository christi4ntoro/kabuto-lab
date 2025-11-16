'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxFooterWrapper() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const footer = document.querySelector('footer');
      if (!footer) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the wrapper is in view
      // When wrapper top hits top of screen, start parallax
      const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      
      // Parallax effect: footer moves at 60% speed of normal scroll
      const parallaxOffset = scrollProgress * 40; // 0 to 40vh movement
      
      footer.style.transform = `translateY(${-parallaxOffset}vh)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className="relative pointer-events-none"
      style={{ height: '150vh' }}
      aria-hidden="true"
    />
  );
}