import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-12">Blog</h1>
        
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-white/10 pb-12">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-3xl font-bold mb-3 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-400 hover:text-blue-300 transition-colors font-bold"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}