import Hero from '@/components/home/Hero';
import ProductScrollWrapper from '@/components/home/ProductScrollWrapper';
import Services from '@/components/home/Services';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="pt-[68px] md:pt-0 bg-black">
      <Hero />
      <ProductScrollWrapper />
      <Services />
      <BlogSection />
      <CTASection />
    </main>
  );
}