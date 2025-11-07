'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;

      if (blob1Ref.current) {
        const x = Math.sin(time) * 50;
        const y = Math.cos(time * 0.8) * 30;
        const rotate = Math.sin(time * 0.5) * 20;
        blob1Ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      }

      if (blob2Ref.current) {
        const x = Math.cos(time * 1.2) * 60;
        const y = Math.sin(time) * 40;
        const rotate = Math.cos(time * 0.7) * 25;
        blob2Ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      }

      if (blob3Ref.current) {
        const x = Math.sin(time * 0.9) * 45;
        const y = Math.cos(time * 1.1) * 35;
        const rotate = Math.sin(time * 0.6) * 30;
        blob3Ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="h-screen w-full bg-[#1e1e1e] flex items-center justify-center p-2 h-screen md:snap-start">
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#6c588d] to-[#8a6fb8]">
        
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <div
            ref={blob1Ref}
            className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#a2b79f] rounded-full blur-3xl"
            style={{ willChange: 'transform' }}
          />
          <div
            ref={blob2Ref}
            className="absolute top-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] bg-[#d8a373] rounded-full blur-3xl"
            style={{ willChange: 'transform' }}
          />
          <div
            ref={blob3Ref}
            className="absolute bottom-1/4 left-1/3 w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[32rem] md:h-[32rem] bg-[#e0835c] rounded-full blur-3xl"
            style={{ willChange: 'transform' }}
          />
        </div>

        {/* Dots texture */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
          style={{
            backgroundImage: 'url("/hero/dots-texture.png")',
            backgroundSize: '1482px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'left top'
          }}
        />

        {/* Noise texture */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-100"
          style={{
            backgroundImage: 'url("/hero/noise.png")',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'left top',
            backgroundSize: '150px'
          }}
        />

        {/* Human silhouette */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          style={{
            backgroundImage: 'url("/hero/human.avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 z-10">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 text-white">
              <span className="font-serif italic">Human</span> <span className='fontBold'>First</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8">
              Immersive experience design
            </p>
            <Link 
              href="/products"
              className="inline-block bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors duration-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}