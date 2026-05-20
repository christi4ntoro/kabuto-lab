'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { content } from '@/lib/content';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';

interface ProductScrollSectionProps {
  products: Array<{
    slug: string;
    name: string;
    price: number;
    benefit: string;
    image: string;
    type: 'free' | 'paid' | 'custom';
  }>;
}

export default function ProductScrollSection({ products }: ProductScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = content;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.666%']);

  // Show all products passed (no slicing)

  return (
    <section 
      ref={containerRef} 
      className="relative md:h-[300vh] bg-[--background]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center">
          
          {/* Desktop: Horizontal scroll effect */}
          <motion.div 
            style={{ x }}
            className="hidden md:flex gap-6 px-8 will-change-transform"
          >
            {products.map((product) => (
              <div 
                key={product.slug}
                className="flex-shrink-0 w-[400px]"
              >
                <ProductCard 
                  name={product.name}
                  price={product.price}
                  benefit={product.benefit}
                  productUrl={`/systems/${product.slug}`}
                  image={product.image}
                  type={product.type}
                />
              </div>
            ))}
            
            {/* CTA Card at the end */}
            <div className="flex-shrink-0 w-[400px] h-[500px] bg-[--background] rounded-lg p-8 flex flex-col items-center justify-center gap-4">
              <h3 className="text-3xl font-bold text-[--foreground] text-center">
                {t.productScroll.ctaHeadingDesktop}
              </h3>
              <Link
                href="/systems"
                className="px-6 py-3 bg-[--foreground] text-[--background] font-semibold rounded-lg hover:bg-[--surface-alt] transition-colors"
              >
                {t.productScroll.ctaButtonDesktop}
              </Link>
            </div>
          </motion.div>

          {/* Mobile: Horizontal scroll container */}
          <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-4 pb-4">
              {products.map((product) => (
                <div 
                  key={product.slug}
                  className="flex-shrink-0 w-[280px]"
                >
                  <ProductCard 
                    name={product.name}
                    price={product.price}
                    benefit={product.benefit}
                    productUrl={`/systems/${product.slug}`}
                    image={product.image}
                    type={product.type}
                  />
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="flex-shrink-0 w-[280px] h-[400px] bg-[--background] rounded-lg p-6 flex flex-col items-center justify-center gap-4">
                <h3 className="text-2xl font-bold text-[--foreground] text-center">
                  {t.productScroll.ctaHeadingMobile}
                </h3>
                <Link
                  href="/systems"
                  className="px-6 py-3 bg-[--foreground] text-[--background] font-semibold"
                >
                  {t.productScroll.ctaButtonMobile}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}