import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-[68px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-400 mb-12">
          Insights on immersive experience design
        </p>
        
        <div className="space-y-12">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="border border-white/20 rounded-lg overflow-hidden bg-black/50 backdrop-blur hover:border-white/60 transition-all"
            >
              {/* Featured Image */}
              {post.image && (
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative w-full aspect-video bg-neutral-900">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </Link>
              )}

              {/* Content */}
              <div className="p-8">
                <time className="text-sm text-gray-400 mb-3 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-3 hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-xl text-gray-300 mb-6">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-bold"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}