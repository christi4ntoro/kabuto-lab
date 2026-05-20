import Hero from '@/components/home/Hero';
import ProductScrollWrapper from '@/components/home/ProductScrollWrapper';
import SignalStrip from '@/components/home/SignalStrip';
import Services from '@/components/home/Services';
import BlogSection from '@/components/home/BlogSection';
import AboutStrip from '@/components/home/AboutStrip';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <main className="pt-[68px] md:pt-0 bg-[--background]">
      <Hero />
      <ProductScrollWrapper />
      <SignalStrip />
      <Services />
      <BlogSection posts={latestPosts} />
      <AboutStrip />
    </main>
  );
}
