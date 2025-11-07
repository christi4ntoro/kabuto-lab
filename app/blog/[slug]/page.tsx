import { getPostBySlug, markdownToHtml, getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const contentHtml = await markdownToHtml(post.content);
  
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-[68px]">
      <article className="max-w-4xl mx-auto">
        <Link 
          href="/blog"
          className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block"
        >
          ← Back to blog
        </Link>
        
        <h1 className="text-6xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 text-xl mb-12">{post.date}</p>
        
        <div 
          className="prose prose-invert prose-lg max-w-none
                     prose-headings:text-white prose-headings:font-bold
                     prose-p:text-gray-300 prose-p:text-xl prose-p:leading-relaxed
                     prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                     prose-strong:text-white
                     prose-ul:text-gray-300 prose-ul:text-xl
                     prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  )
}