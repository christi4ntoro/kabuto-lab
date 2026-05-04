import Hero from '@/components/home/Hero';
import ProductScrollWrapper from '@/components/home/ProductScrollWrapper';
import SignalStrip from '@/components/home/SignalStrip';
import Services from '@/components/home/Services';
import BlogSection from '@/components/home/BlogSection';
import AboutStrip from '@/components/home/AboutStrip';

export default function Home() {
  return (
    <main className="pt-[68px] md:pt-0 bg-[--background]">
      <Hero />
      <ProductScrollWrapper />
      <SignalStrip />
      <Services />
      <BlogSection />
      <AboutStrip />
    </main>
  );
}
