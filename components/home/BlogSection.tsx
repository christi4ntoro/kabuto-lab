import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';

export default function BlogSection() {
  // Get latest 2 posts
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <section className="px-4 py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-400">
              Thoughts on immersive design and experience creation
            </p>
          </div>
          
          <Link
            href="/blog"
            className="hidden md:inline-block text-blue-400 hover:text-blue-300 font-bold transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-white/20 rounded-lg overflow-hidden bg-black/50 backdrop-blur hover:border-white/60 transition-all duration-300 hover:scale-105 flex flex-col"
            >
              {/* Featured Image */}
              {post.image && (
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative w-full aspect-video bg-neutral-900">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Link>
              )}

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Date */}
                <time className="text-sm text-gray-400 mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-blue-400 hover:text-blue-300 font-bold transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-block bg-white text-black px-6 py-3 font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}