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
    return { title: 'Product not found | Kabuto Lab' };
  }
}

// This generates the static paths for all products
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

// Make it dynamic in case static generation fails
export const dynamicParams = true;

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params in Next.js 15+
  const { slug } = await params;
  
  let product;
  
  try {
    product = getProductBySlug(slug);
  } catch {
    notFound();
  }

  const contentHtml = await markdownToHtml(product.content);
  const relatedProducts = getRelatedProducts(slug, product.relatedProducts || []);

  // Determine button text and action
  const getButtonConfig = () => {
    if (product.type === 'custom') {
      return {
        text: 'Contact for Pricing',
        url: '/contact',
        external: false
      };
    }
    if (product.price === 0) {
      return {
        text: 'Get Free Access',
        url: product.buyUrl || '/contact',
        external: !!product.buyUrl
      };
    }
    return {
      text: 'Buy Now',
      url: product.buyUrl || '/contact',
      external: !!product.buyUrl
    };
  };

  const buttonConfig = getButtonConfig();

  return (
    <div className="min-h-screen text-white pt-20 md:pt-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Product Info */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {product.name}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
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
                className="inline-block px-8 py-4 bg-white text-black text-lg font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                {buttonConfig.text} →
              </a>
            ) : (
              <Link
                href={buttonConfig.url}
                className="inline-block px-8 py-4 bg-white text-black text-lg font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                {buttonConfig.text} →
              </Link>
            )}
          </div>

          {/* Right: Product Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900">
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
        <div className="bg-neutral-900/50 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <h2 className="text-3xl font-bold mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-16">
        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-neutral-900/30 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <ProductCard
                  key={related.slug}
                  name={related.name}
                  price={related.price}
                  benefit={related.benefit}
                  productUrl={`/products/${related.slug}`}
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
            className="inline-block px-12 py-5 bg-white text-black text-xl font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
          >
            {buttonConfig.text} →
          </a>
        ) : (
          <Link
            href={buttonConfig.url}
            className="inline-block px-12 py-5 bg-white text-black text-xl font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
          >
            {buttonConfig.text} →
          </Link>
        )}
      </div>
    </div>
  );
}