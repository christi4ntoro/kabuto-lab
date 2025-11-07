'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/products';

export default function ProductScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.666%']);

  const displayProducts = products.slice(0, 6);

  return (
    <section 
      ref={containerRef} 
      className="relative md:h-[300vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center">
          
          {/* Desktop: Horizontal scroll effect */}
          <motion.div 
            style={{ x }}
            className="hidden md:flex gap-6 px-8 will-change-transform"
          >
            {displayProducts.map((product) => (
              <div 
                key={product.id}
                className="flex-shrink-0 w-[400px]"
              >
                <ProductCard 
                  name={product.name}
                  price={product.price}
                  benefit={product.benefit}
                  buyUrl={product.buyUrl}
                  image={product.image}
                />
              </div>
            ))}
            
            {/* CTA Card at the end */}
            <div className="flex-shrink-0 w-[400px] h-[500px] bg-neutral-900 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
              <h3 className="text-3xl font-bold text-white text-center">
                Explore All Products
              </h3>
              <Link 
                href="/products"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
              >
                View Collection
              </Link>
            </div>
          </motion.div>

          {/* Mobile: Horizontal scroll container */}
          <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-4 pb-4">
              {displayProducts.map((product) => (
                <div 
                  key={product.id}
                  className="flex-shrink-0 w-[280px]"
                >
                  <ProductCard 
                    name={product.name}
                    price={product.price}
                    benefit={product.benefit}
                    buyUrl={product.buyUrl}
                    image={product.image}
                  />
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="flex-shrink-0 w-[280px] h-[400px] bg-neutral-900 rounded-lg p-6 flex flex-col items-center justify-center gap-4">
                <h3 className="text-2xl font-bold text-white text-center">
                  View All
                </h3>
                <Link 
                  href="/products"
                  className="px-6 py-3 bg-white text-black font-semibold"
                >
                  Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}