import Hero from '@/components/home/Hero';
import ProductScrollSection from '@/components/home/ProductScrollSection';
import Services from '@/components/home/Services';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';
import ParallaxFooterWrapper from '@/components/shared/ParallaxFooterWrapper';

export default function Home() {
  return (
    <>
      <main className="pt-[68px] md:pt-0 relative z-10 bg-black">
        <Hero />
        <ProductScrollSection />
        <Services />
        <BlogSection />
        <CTASection />
      </main>
      
      {/* Parallax container for footer reveal */}
      <ParallaxFooterWrapper />
    </>
  );
}