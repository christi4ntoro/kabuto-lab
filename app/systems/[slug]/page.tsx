import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getAllProducts, getRelatedProducts, markdownToHtml } from '@/lib/productUtils';
import ProductCard from '@/components/ui/ProductCard';
import type { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const product = getProductBySlug(slug);
    return {
      title: product.name,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: product.image ? [product.image] : [],
      },
    };
  } catch {
    return { title: 'System not found | Kabuto Lab' };
  }
}

export async function generateStaticParams() {
  try {
    const products = getAllProducts();
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export const dynamicParams = true;

export default async function SystemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let product;

  try {
    product = getProductBySlug(slug);
  } catch {
    notFound();
  }

  const contentHtml = await markdownToHtml(product.content);
  const relatedProducts = getRelatedProducts(slug, product.relatedProducts || []);

  const getButtonConfig = () => {
    if (product.type === 'custom') {
      return {
        text: 'Contact for Pricing',
        url: '/connect',
        external: false
      };
    }
    if (product.price === 0) {
      return {
        text: 'Get Free Access',
        url: product.buyUrl || '/connect',
        external: !!product.buyUrl
      };
    }
    return {
      text: 'Buy Now',
      url: product.buyUrl || '/connect',
      external: !!product.buyUrl
    };
  };

  const buttonConfig = getButtonConfig();

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] pt-20 md:pt-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: System Info */}
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 break-words">
              {product.name}
            </h1>

            <p className="text-xl text-[--muted] mb-8">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-8">
              {product.type === 'custom' ? (
                <p className="text-4xl font-bold text-blue-400">Contact Us</p>
              ) : product.price === 0 ? (
                <p className="text-6xl font-black text-green-400">FREE</p>
              ) : (
                <p className="text-6xl font-black text-green-400">
                  €{product.price}
                </p>
              )}
            </div>

            {/* CTA Button */}
            {buttonConfig.external ? (
              <a
                href={buttonConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[--foreground] text-[--background] text-lg font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                {buttonConfig.text} →
              </a>
            ) : (
              <Link
                href={buttonConfig.url}
                className="inline-block px-8 py-4 bg-[--foreground] text-[--background] text-lg font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                {buttonConfig.text} →
              </Link>
            )}
          </div>

          {/* Right: System Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[--background]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      {product.features.length > 0 && (
        <div className="bg-[--surface]/50 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <h2 className="text-3xl font-bold mb-8">What&apos;s Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[--muted]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-16">
        <div
          className="prose prose-lg max-w-none prose-headings:text-[--foreground] prose-p:text-[--muted] prose-strong:text-[--foreground] prose-ul:text-[--muted] prose-a:text-blue-400"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>

      {/* Related Systems */}
      {relatedProducts.length > 0 && (
        <div className="bg-[--surface]/30 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <h2 className="text-3xl font-bold mb-8">Related Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <ProductCard
                  key={related.slug}
                  name={related.name}
                  price={related.price}
                  benefit={related.benefit}
                  productUrl={`/systems/${related.slug}`}
                  image={related.image}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-16 text-center">
        {buttonConfig.external ? (
          <a
            href={buttonConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-6 py-5 bg-[--foreground] text-[--background] text-xl font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl md:w-auto md:px-12"
          >
            {buttonConfig.text} →
          </a>
        ) : (
          <Link
            href={buttonConfig.url}
            className="inline-block w-full text-center px-6 py-5 bg-[--foreground] text-[--background] text-xl font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl md:w-auto md:px-12"
          >
            {buttonConfig.text} →
          </Link>
        )}
      </div>
    </div>
  );
}
