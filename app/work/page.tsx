import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Kabuto Lab',
  description: 'Case studies and professional projects by Christian Ramírez Toro.',
  openGraph: {
    title: 'Work | Kabuto Lab',
    description: 'Case studies and professional projects by Christian Ramírez Toro.',
  },
};

export default function WorkPage() {
  const posts = getAllPosts().filter(post => post.tags.includes('Work'));

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] p-8 pt-[68px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">Work</h1>
        <p className="text-xl text-[--muted] mb-12">
          Case studies and professional projects
        </p>

        <div className="space-y-12">
          {posts.length === 0 && (
            <p className="text-gray-400">No work posts published yet.</p>
          )}
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-[--border] rounded-lg overflow-hidden bg-[--surface] backdrop-blur hover:border-[--muted] transition-all"
            >
              {post.image && (
                <Link href={`/transmissions/${post.slug}`}>
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

              <div className="p-8">
                <time className="text-sm text-gray-400 mb-3 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>

                <Link href={`/transmissions/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-3 hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-[--surface-alt] text-[--muted]"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-xl text-[--muted] mb-6">{post.excerpt}</p>

                <Link
                  href={`/transmissions/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-bold"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/transmissions"
            className="text-blue-400 hover:text-blue-300 transition-colors font-bold"
          >
            All Transmissions →
          </Link>
        </div>
      </div>
    </div>
  );
}
