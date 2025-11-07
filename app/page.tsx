import Hero from '@/components/home/Hero';
import ProductScrollSection from '@/components/home/ProductScrollSection';
import Services from '@/components/home/Services';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="pt-[68px] md:pt-0">
      <Hero />
      <ProductScrollSection />
      <Services />
      <BlogSection />
      <CTASection />
      {/* Your other sections */}
    </main>
  );
}