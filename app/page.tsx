import Hero from '@/components/home/Hero';
import ProductScrollSection from '@/components/home/ProductScrollSection';
import Services from '@/components/home/Services';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductScrollSection />
      <Services />
      <BlogSection />
      <CTASection />
      {/* Your other sections */}
    </main>
  );
}